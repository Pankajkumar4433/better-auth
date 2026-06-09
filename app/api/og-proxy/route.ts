import { NextRequest, NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { getClientIP } from "@/lib/ai-chat/rate-limit";

export const runtime = "edge";

let _ratelimit: Ratelimit | null = null;
function getRatelimit(): Ratelimit | null {
	if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
		return null;
	}
	if (!_ratelimit) {
		const redis = new Redis({
			url: process.env.UPSTASH_REDIS_REST_URL,
			token: process.env.UPSTASH_REDIS_REST_TOKEN,
		});
		_ratelimit = new Ratelimit({
			redis,
			limiter: Ratelimit.slidingWindow(60, "1 m"), // 60 requests per minute per IP
			prefix: "og-proxy",
		});
	}
	return _ratelimit;
}

const isSafeUrl = (urlString: string) => {
	try {
		const parsed = new URL(urlString);
		if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
			return false;
		}
		const host = parsed.hostname.toLowerCase();
		
		// Block local / private hostnames
		if (
			host === "localhost" ||
			host === "127.0.0.1" ||
			host === "0.0.0.0" ||
			host === "::1" ||
			host.endsWith(".local") ||
			host.endsWith(".internal") ||
			host.includes("better-auth") // Prevent looping back to our own site excessively
		) {
			return false;
		}

		// Block private IPv4 ranges
		// 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16, 169.254.0.0/16
		const ipPattern = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/;
		const match = host.match(ipPattern);
		if (match) {
			const [, octet1, octet2] = match.map(Number);
			if (
				octet1 === 10 ||
				(octet1 === 172 && octet2 >= 16 && octet2 <= 31) ||
				(octet1 === 192 && octet2 === 168) ||
				(octet1 === 169 && octet2 === 254)
			) {
				return false;
			}
		}

		return true;
	} catch {
		return false;
	}
};

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const url = searchParams.get("url");

	if (!url) {
		return new NextResponse("Missing url parameter", { status: 400 });
	}

	if (!isSafeUrl(url)) {
		return new NextResponse("Invalid or unsafe URL", { status: 400 });
	}

	// Rate Limiting (Only active if Upstash Redis credentials are set)
	const ratelimit = getRatelimit();
	if (ratelimit) {
		const ip = getClientIP(request);
		const { success } = await ratelimit.limit(ip);
		if (!success) {
			return new NextResponse("Too Many Requests", {
				status: 429,
				headers: {
					"Retry-After": "60",
				},
			});
		}
	}

	try {
		// Attempt to fetch the image. We retry up to 3 times if we hit 429.
		let response: Response | null = null;
		const attempts = 3;
		let delay = 100; // ms

		for (let i = 0; i < attempts; i++) {
			response = await fetch(url, {
				headers: {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
					// Explicitly do not send a Referer header to bypass hotlink protection
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8"
				},
				// Next.js cache configuration
				next: {
					revalidate: 604800, // 7 days cache in Next.js Data Cache
				},
			});

			if (response.ok) {
				break;
			}

			// If it's a 429 Too Many Requests, wait and retry
			if (response.status === 429 && i < attempts - 1) {
				await new Promise((resolve) => setTimeout(resolve, delay));
				delay *= 2; // exponential backoff
				continue;
			}
		}

		if (!response || !response.ok) {
			// If fetching fails after retries, return a 307 temporary redirect to the original URL
			// so the browser can try directly, and cache the failure very briefly.
			return NextResponse.redirect(url, {
				status: 307,
				headers: {
					"Cache-Control": "public, max-age=10",
				},
			});
		}

		const contentType = response.headers.get("content-type") || "image/png";
		const buffer = await response.arrayBuffer();

		return new Response(buffer, {
			headers: {
				"Content-Type": contentType,
				"Cache-Control": "public, max-age=604800, stale-while-revalidate=86400", // cache for 7 days
			},
		});
	} catch (error) {
		console.error("Failed to proxy external image:", error);
		return NextResponse.redirect(url, {
			status: 307,
			headers: {
				"Cache-Control": "public, max-age=10",
			},
		});
	}
}

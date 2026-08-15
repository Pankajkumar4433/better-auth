import { createMDX } from "fumadocs-mdx/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
	allowedDevOrigins: ['172.19.251.153'],
	experimental: {
		optimizePackageImports: [
			"lucide-react",
			"framer-motion",
			"@radix-ui/react-tabs",
			"@radix-ui/react-scroll-area",
			"@radix-ui/react-popover",
			"@radix-ui/react-select",
			"@radix-ui/react-checkbox",
		],
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
			{
				protocol: "http",
				hostname: "**",
			},
		],
	},
	async redirects() {
		return [
			// Infrastructure backwards compatibility redirects
			{
				source: "/dashboard/:path*",
				destination: "https://dash.better-auth.com",
				permanent: true,
			},
			{
				source: "/terms",
				destination: "/legal/terms",
				permanent: true,
			},
			{
				source: "/privacy",
				destination: "/legal/privacy",
				permanent: true,
			},
			{
				source: "/docs/agent-tools/ask-ai",
				destination: "/docs/ai-resources",
				permanent: true,
			},
			{
				source: "/docs/agent-tools/:path*",
				destination: "/docs/ai-resources/:path*",
				permanent: true,
			},
		];
	},
};

const withMDX = createMDX({
	contentDirBasePath: "/content/docs",
});
export default withMDX(nextConfig);

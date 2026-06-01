"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

interface Resource {
	id: string;
	name: string;
	url: string;
	banner?: string;
	icon?: string;
	description?: string;
	featured?: boolean;
	tags?: string[];
	isPaid?: boolean;
	isOpenSource?: boolean;
}

export function ResourceCard({ resource }: { resource: Resource }) {
	const getFaviconUrl = (url: string) => {
		try {
			const domain = new URL(url).hostname;
			return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
		} catch {
			return null;
		}
	};

	const favicon = resource.icon || getFaviconUrl(resource.url);

	return (
		<motion.a
			id={resource.id}
			href={resource.url}
			target="_blank"
			rel="noopener noreferrer"
			whileHover={{
				y: -2,
				transition: { duration: 0.2, ease: "easeOut" },
			}}
			className="group/card relative h-full w-full border border-foreground/10 bg-background transition-all duration-200 flex flex-col justify-between"
		>
			<div
				className={cn(
					"w-full aspect-[16/9] flex items-center justify-center bg-foreground/5 relative overflow-hidden",
					!resource.banner && "p-6"
				)}
			>
				{resource.banner ? (
					<Image
						src={resource.banner}
						alt={resource.name}
						fill
						loading="eager"
						className="object-cover"
						unoptimized // Banners might be external URLs that change, or from domains not configured in next.config
						
					/>
				) : (
					<div className="flex flex-col items-center justify-center gap-2">
						{favicon ? (
							<img
								src={favicon}
								alt=""
								className="w-8 h-8 rounded-md opacity-80"
								onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
							/>
						) : (
							<div className="w-8 h-8 rounded-md bg-foreground/10" />
						)}
						<span className="font-semibold text-lg text-foreground/80 tracking-tight">
							{resource.name}
						</span>
					</div>
				)}
			</div>

			{/* Card Footer: Fully same as brand page logo card */}
			<div className="flex items-center justify-between border-t border-foreground/10 px-3 py-2 w-full gap-2">
				<div className="flex items-center gap-1.5 min-w-0">
					{favicon ? (
						<img
							src={favicon}
							alt=""
							className="w-4 h-4 rounded shrink-0 opacity-80 group-hover/card:opacity-100 transition-opacity"
							onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
						/>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1.1em"
							height="1.1em"
							viewBox="0 0 24 24"
							className="text-foreground/50 group-hover/card:text-foreground/90 transition-colors shrink-0"
						>
							<path d="M0 0h24v24H0z" fill="none" />
							<path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" opacity=".5" />
						</svg>
					)}
					<p className="text-[11px] font-medium text-foreground/80 dark:text-neutral-200 truncate">
						{resource.name}
					</p>
				</div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="0.9em"
					height="0.9em"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="text-foreground/40 group-hover/card:text-foreground/80 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-all duration-200 shrink-0"
				>
					<path d="M13 5H19V11" />
					<path d="M19 5L5 19" />
				</svg>
			</div>
		</motion.a>
	);
}

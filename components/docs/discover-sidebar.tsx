"use client";

import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { discoverCategories, type DiscoverCategory, type DiscoverSubcategory } from "@/lib/discover-categories";
import { useDiscoverSearch } from "@/components/discover/discover-search-provider";

export function DiscoverSidebar() {
	const pathname = usePathname();
	const [currentOpen, setCurrentOpen] = useState(0);
	const navRef = useRef<HTMLElement>(null);
	const { setIsOpen } = useDiscoverSearch();

	const getDefaultOpen = () => {
		const idx = discoverCategories.findIndex((cat) =>
			pathname.startsWith(`/discover/${cat.slug}`)
		);
		return idx === -1 ? 0 : idx;
	};

	useEffect(() => {
		setCurrentOpen(getDefaultOpen());
	}, [pathname]);

	// Scroll active item into view after animation
	useEffect(() => {
		const timer = setTimeout(() => {
			const nav = navRef.current;
			if (!nav) return;
			const activeEl = nav.querySelector<HTMLElement>("[data-active='true']");
			if (!activeEl) return;
			const navRect = nav.getBoundingClientRect();
			const elRect = activeEl.getBoundingClientRect();
			if (elRect.top < navRect.top || elRect.bottom > navRect.bottom) {
				activeEl.scrollIntoView({ block: "center", behavior: "smooth" });
			}
		}, 380);
		return () => clearTimeout(timer);
	}, [pathname, currentOpen]);

	return (
		<motion.aside
			initial={{ x: -24, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ duration: 0.28, ease: "easeOut" }}
			className="fixed left-0 top-(--landing-topbar-height) bottom-0 w-[22vw] max-w-[300px] hidden lg:flex flex-col z-30 bg-background border-r border-foreground/5 transition-[width] duration-300 ease-out"
		>
			{/* Header */}
			<div className="flex items-center gap-2 px-4 py-3 border-b border-foreground/5">
				<span className="text-sm font-semibold text-foreground/80 tracking-tight">
					Discover
				</span>
				<span className="ml-auto text-[10px] text-foreground/30 font-mono">
					Browse
				</span>
			</div>

			<button
				type="button"
				className="group/search flex w-full items-center gap-2 px-4 py-[9px] border-b border-foreground/5 text-sm text-foreground/55 hover:text-foreground/80 hover:bg-foreground/3 transition-colors"
				onClick={() => setIsOpen(true)}
			>
				<svg
					className="size-4 shrink-0 text-foreground opacity-55 group-hover/search:opacity-80 transition-opacity"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<circle cx="11" cy="11" r="8" />
					<path d="m21 21-4.3-4.3" />
				</svg>
				Search
				<div className="ml-auto inline-flex items-center gap-0.5 text-xs text-foreground/40 font-mono">
					<kbd className="flex h-5 items-center justify-center rounded border border-foreground/10 bg-foreground/5 px-1.5 font-sans font-medium text-foreground/50">
						⌘
					</kbd>
					<kbd className="flex h-5 items-center justify-center rounded border border-foreground/10 bg-foreground/5 px-1.5 font-sans font-medium text-foreground/50">
						K
					</kbd>
				</div>
			</button>
			{/* Scrollable navigation */}
			<nav
				ref={navRef}
				className="flex-1 overflow-y-auto overflow-x-hidden pb-3 sidebar-scroll"
				style={{
					maskImage:
						"linear-gradient(to bottom, transparent, white 1rem, white calc(100% - 2rem), transparent 100%)",
				}}
			>
				<MotionConfig transition={{ duration: 0.35, type: "spring", bounce: 0 }}>
					<div className="flex flex-col">
						{discoverCategories.map((cat, index) => (
							<div key={cat.id}>
								{/* Category Header Button */}
								<button
									type="button"
									className={cn(
										"border-b border-foreground/6 w-full text-left flex gap-2 items-center px-4 py-2.5 transition-colors",
										"font-medium text-sm tracking-wider",
										currentOpen === index
											? "text-foreground bg-foreground/3"
											: "text-foreground/70 hover:text-foreground hover:bg-foreground/3",
									)}
									onClick={() => {
										setCurrentOpen((prev) => (prev === index ? -1 : index));
									}}
								>
									<cat.Icon className="size-4.5" />
									<span className="grow tracking-normal">{cat.name}</span>
									<ChevronDownIcon
										className={cn(
											"h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
											currentOpen === index ? "rotate-180" : "",
										)}
									/>
								</button>

								{/* Subcategory List */}
								<AnimatePresence initial={false}>
									{currentOpen === index && (
										<motion.div
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: "auto" }}
											exit={{ opacity: 0, height: 0 }}
											className="relative overflow-hidden"
										>
											<motion.div className="text-sm pt-0 pb-1">
												{cat.subcategories.length === 0 ? (
													<p className="px-4 py-2 text-[13px] text-foreground/35 italic">
														No subcategories yet
													</p>
												) : (
													cat.subcategories.map((sub) => {
														const href = `/discover/${cat.slug}/${sub.slug}`;
														const active = pathname === href || pathname.startsWith(`${href}/`);
														const SubIcon = cat.icons[sub.id] || cat.defaultIcon;
														return (
															<Link
																key={sub.id}
																href={href}
																data-active={active || undefined}
																className={cn(
																	"relative flex w-full items-center gap-2.5 px-4 py-1 text-[14px] transition-all duration-150",
																	active
																		? "text-foreground bg-foreground/6"
																		: "text-foreground/65 hover:text-foreground/90 hover:bg-foreground/3",
																)}
															>
																<span className="flex size-5 shrink-0 items-center justify-center [&>svg]:size-[14px]">
																	<SubIcon className="text-foreground/75" />
																</span>
																<span className="min-w-0 grow truncate">
																	{sub.name}
																</span>
															</Link>
														);
													})
												)}
											</motion.div>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						))}
					</div>
				</MotionConfig>
			</nav>

			{/* Footer */}
			<div className="flex items-center gap-1 p-2 border-t border-foreground/5 text-foreground/40">
				<div className="ms-auto [&_button]:text-foreground/40 [&_button:hover]:text-foreground/70">
					<ThemeToggle />
				</div>
			</div>
		</motion.aside>
	);
}

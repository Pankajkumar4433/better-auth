"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
	ShieldIcon,
	AIIcon,
	DesignIcon,
	StreamingIcon,
	ListeningIcon,
	GamingIcon,
	ReadingIcon,
	EducationIcon,
	DeveloperIcon,
} from "@/components/icons/category";
import {
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from "react";
import type { ContributorInfo } from "@/lib/community-stats";
import { cn } from "@/lib/utils";
import {
	DatabaseSection,
	IntegrationsSection,
	PluginEcosystem,
	ServerClientTabs,
	SocialProvidersSection,
} from "./framework-sections";
import { TrustedBy } from "./trusted-by";

const mcpCommands = [
	{ name: "Cursor", command: "npx auth mcp --cursor" },
	{ name: "Claude Code", command: "npx auth mcp --claude-code" },
	{ name: "Open Code", command: "npx auth mcp --open-code" },
	{ name: "Manual", command: "npx auth mcp --manual" },
];

const aiPromptText = `Set up authentication in my project using Better Auth (better-auth npm package).

1. Install better-auth. If I already have a database configured in this project, use that — don't set up a new one.

2. Create lib/auth.ts — call betterAuth() with:
   - My existing database connection (or a new SQLite/Postgres setup if none exists)
   - emailAndPassword enabled
   - Any social providers if I have OAuth credentials in my env

3. Create lib/auth-client.ts — use the correct framework import:
   - React/Next.js: "better-auth/react"
   - Vue: "better-auth/vue"
   - Svelte: "better-auth/svelte"
   - Vanilla: "better-auth/client"

4. Add the API route handler for my framework (e.g. app/api/auth/[...all]/route.ts for Next.js App Router).

5. Add BETTER_AUTH_SECRET to my .env if it doesn't exist (generate a 32+ char secret).

6. Run npx auth migrate to apply database migrations.

Refer to better-auth.com/docs for exact API and plugin syntax.`;

function CredentialFields() {
	const emailText = "user@email.com";
	const passwordDots = "••••••••";
	const [emailDisplay, setEmailDisplay] = useState(emailText);
	const [passwordDisplay, setPasswordDisplay] = useState(passwordDots);
	const [isTyping, setIsTyping] = useState(false);
	const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
	const isTypingRef = useRef(false);

	const startTyping = useCallback(() => {
		if (isTypingRef.current) return;
		isTypingRef.current = true;
		setIsTyping(true);

		// Clear previous timeouts
		for (const t of timeoutsRef.current) clearTimeout(t);
		timeoutsRef.current = [];

		// Reset to empty
		setEmailDisplay("");
		setPasswordDisplay("");

		// Type email character by character
		for (let i = 0; i <= emailText.length; i++) {
			const t = setTimeout(() => {
				setEmailDisplay(emailText.slice(0, i));
			}, i * 60);
			timeoutsRef.current.push(t);
		}

		// Type password dots after email finishes
		const passwordStart = (emailText.length + 2) * 60;
		for (let i = 0; i <= passwordDots.length; i++) {
			const t = setTimeout(
				() => {
					setPasswordDisplay(passwordDots.slice(0, i));
					if (i === passwordDots.length) {
						isTypingRef.current = false;
						setIsTyping(false);
					}
				},
				passwordStart + i * 50,
			);
			timeoutsRef.current.push(t);
		}
	}, []);

	useEffect(() => {
		return () => {
			for (const t of timeoutsRef.current) clearTimeout(t);
		};
	}, []);

	return (
		<div className="mt-3 flex items-center gap-1.5" onMouseEnter={startTyping}>
			<div className="flex items-center h-5 px-2 border border-foreground/[0.08] bg-foreground/[0.02] flex-1 min-w-0">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="8"
					height="8"
					viewBox="0 0 24 24"
					className="text-foreground/45 dark:text-foreground/30 shrink-0 mr-1.5"
				>
					<path
						fill="currentColor"
						d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"
					/>
				</svg>
				<span className="text-[9px] font-mono text-foreground/50 dark:text-foreground/35 truncate">
					{emailDisplay}
					{isTyping && emailDisplay.length < emailText.length && (
						<span className="inline-block w-px h-2.5 bg-foreground/50 ml-px animate-[blink_0.8s_step-end_infinite] align-middle" />
					)}
				</span>
			</div>
			<div className="flex items-center h-5 px-2 border border-foreground/[0.08] bg-foreground/[0.02] flex-1 min-w-0">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="8"
					height="8"
					viewBox="0 0 24 24"
					className="text-foreground/45 dark:text-foreground/30 shrink-0 mr-1.5"
				>
					<path
						fill="currentColor"
						d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2M9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2z"
					/>
				</svg>
				<span className="text-[9px] font-mono text-foreground/50 dark:text-foreground/35 tracking-[0.1em]">
					{passwordDisplay}
					{isTyping &&
						emailDisplay.length >= emailText.length &&
						passwordDisplay.length < passwordDots.length && (
							<span className="inline-block w-px h-2.5 bg-foreground/50 ml-px animate-[blink_0.8s_step-end_infinite] align-middle" />
						)}
				</span>
			</div>
		</div>
	);
}

function InstallBlock() {
	const [mode, setMode] = useState<"cli" | "prompt" | "mcp" | "skills">("cli");
	const [copied, setCopied] = useState(false);
	const [pmOpen, setPmOpen] = useState(false);
	const [promptOpen, setPromptOpen] = useState(false);
	const contentRef = useRef<HTMLDivElement>(null);
	const [contentHeight, setContentHeight] = useState<number | "auto">("auto");
	const [overflow, setOverflow] = useState<"hidden" | "visible">("visible");

	useEffect(() => {
		const el = contentRef.current;
		if (!el) return;
		const ro = new ResizeObserver(() => {
			setContentHeight(el.offsetHeight);
		});
		ro.observe(el);
		return () => ro.disconnect();
	}, []);

	useLayoutEffect(() => {
		setOverflow("hidden");
	}, [mode]);

	useLayoutEffect(() => {
		if (pmOpen) {
			setOverflow("visible");
		}
	}, [pmOpen]);

	const copy = (text: string) => {
		navigator.clipboard.writeText(text);
		setCopied(true);
		setPmOpen(false);
		setTimeout(() => setCopied(false), 1500);
	};

	return (
		<div className="mb-6 rounded-md border border-foreground/[0.1] relative">
			{/* Tabs */}
			<div className="flex items-center border-b border-foreground/[0.1]">
				<button
					onClick={() => {
						setMode("cli");
						setCopied(false);
						setPmOpen(false);
					}}
					className={cn(
						"px-4 py-2 text-[12px] transition-colors duration-150 relative",
						mode === "cli"
							? "text-neutral-800 dark:text-neutral-200"
							: "text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-400",
					)}
				>
					CLI
					{mode === "cli" && (
						<div className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-neutral-600 dark:bg-neutral-400" />
					)}
				</button>
				<button
					onClick={() => {
						setMode("prompt");
						setCopied(false);
						setPmOpen(false);
					}}
					className={cn(
						"px-4 py-2 text-[12px] transition-colors duration-150 relative",
						mode === "prompt"
							? "text-neutral-800 dark:text-neutral-200"
							: "text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-400",
					)}
				>
					Prompt
					{mode === "prompt" && (
						<div className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-neutral-600 dark:bg-neutral-400" />
					)}
				</button>
				<button
					onClick={() => {
						setMode("mcp");
						setCopied(false);
						setPmOpen(false);
					}}
					className={cn(
						"px-4 py-2 text-[12px] transition-colors duration-150 relative",
						mode === "mcp"
							? "text-neutral-800 dark:text-neutral-200"
							: "text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-400",
					)}
				>
					MCP
					{mode === "mcp" && (
						<div className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-neutral-600 dark:bg-neutral-400" />
					)}
				</button>
				<button
					onClick={() => {
						setMode("skills");
						setCopied(false);
						setPmOpen(false);
					}}
					className={cn(
						"px-4 py-2 text-[12px] transition-colors duration-150 relative",
						mode === "skills"
							? "text-neutral-800 dark:text-neutral-200"
							: "text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-400",
					)}
				>
					Skills
					{mode === "skills" && (
						<div className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-neutral-600 dark:bg-neutral-400" />
					)}
				</button>
			</div>

			{/* Content */}
			<motion.div
				animate={{ height: contentHeight }}
				initial={false}
				transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
				onAnimationComplete={() => setOverflow("visible")}
				style={{ overflow }}
			>
				<div ref={contentRef}>
					<AnimatePresence mode="wait" initial={false}>
						<div>
							{mode === "cli" || mode === "skills" ? (
								<div className="flex items-center justify-between bg-neutral-100/50 dark:bg-[#050505] px-4 py-3">
									<code
										className="text-[13px]"
										style={{ fontFamily: "var(--font-geist-pixel-square)" }}
									>
										{mode === "skills" ? (
											<>
												<span className="text-purple-600/90 dark:text-purple-400/90">
													npx
												</span>{" "}
												<span className="text-neutral-700 dark:text-neutral-300">
													skills add better-auth/skills
												</span>
											</>
										) : (
											<>
												<span className="text-purple-600/90 dark:text-purple-400/90">
													npx
												</span>{" "}
												<span className="text-neutral-700 dark:text-neutral-300">
													auth init
												</span>
											</>
										)}
									</code>
									<div className="relative">
										{mode === "skills" ? (
											<button
												onClick={() =>
													copy("npx skills add better-auth/skills")
												}
												className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors p-1"
												aria-label="Copy command"
											>
												{copied ? (
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24"
														className="h-4 w-4"
													>
														<path
															fill="currentColor"
															d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"
														/>
													</svg>
												) : (
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24"
														className="h-4 w-4"
													>
														<path
															fill="currentColor"
															d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
														/>
													</svg>
												)}
											</button>
										) : (
											<button
												onClick={() => copy("npx auth init")}
												className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors p-1"
												aria-label="Copy command"
											>
												{copied ? (
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24"
														className="h-4 w-4"
													>
														<path
															fill="currentColor"
															d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"
														/>
													</svg>
												) : (
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24"
														className="h-4 w-4"
													>
														<path
															fill="currentColor"
															d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
														/>
													</svg>
												)}
											</button>
										)}
									</div>
								</div>
							) : mode === "mcp" ? (
								<div className="flex items-center justify-between bg-neutral-100/50 dark:bg-[#050505] px-4 py-3">
									<code
										className="text-[13px] truncate"
										style={{ fontFamily: "var(--font-geist-pixel-square)" }}
									>
										<span className="text-purple-600/90 dark:text-purple-400/90">
											npx
										</span>{" "}
										<span className="text-neutral-700 dark:text-neutral-300">
											auth mcp
										</span>
									</code>
									<div className="relative">
										<button
											onClick={() => {
												if (copied) return;
												setPmOpen(!pmOpen);
											}}
											className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors p-1"
											aria-label="Add MCP"
										>
											{copied ? (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													className="h-4 w-4"
												>
													<path
														fill="currentColor"
														d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"
													/>
												</svg>
											) : (
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													className="h-4 w-4"
												>
													<path
														fill="currentColor"
														d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
													/>
												</svg>
											)}
										</button>
										{pmOpen && (
											<>
												<div
													className="fixed inset-0 z-40"
													role="button"
													tabIndex={-1}
													aria-label="Close dropdown"
													onClick={() => setPmOpen(false)}
													onKeyDown={(e) => {
														if (e.key === "Escape") setPmOpen(false);
													}}
												/>
												<div className="absolute right-0 top-full mt-2 w-[160px] bg-white dark:bg-[#050505] border border-neutral-200 dark:border-white/[0.07] shadow-2xl shadow-black/10 dark:shadow-black/80 z-50 rounded-sm">
													{mcpCommands.map((mc, i) => (
														<button
															key={mc.name}
															onClick={() => copy(mc.command)}
															className={cn(
																"flex items-center gap-2.5 w-full px-3 py-2 text-[12px] text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/[0.05] transition-all text-left",
																i < mcpCommands.length - 1 &&
																"border-b border-neutral-100 dark:border-white/[0.06]",
															)}
														>
															<span className="flex items-center justify-center w-3.5 h-3.5 shrink-0">
																{mc.name === "Cursor" && (
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		className="h-3.5 w-3.5"
																		viewBox="0 0 24 24"
																	>
																		<path
																			fill="currentColor"
																			d="M11.503.131L1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23"
																		/>
																	</svg>
																)}
																{mc.name === "Claude Code" && (
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		className="h-3.5 w-3.5"
																		viewBox="0 0 16 16"
																	>
																		<path
																			fill="currentColor"
																			d="m6.96 15.2l.224-.992l.256-1.28l.208-1.024l.192-1.264l.112-.416l-.016-.032l-.08.016l-.96 1.312l-1.456 1.968l-1.152 1.216l-.272.112l-.48-.24l.048-.448l.272-.384l1.584-2.032l.96-1.264l.624-.72l-.016-.096h-.032l-4.224 2.752L2 12.48l-.336-.304l.048-.496l.16-.16l1.264-.88l3.152-1.76l.048-.16l-.048-.08h-.16L5.6 8.608L3.808 8.56l-1.552-.064l-1.52-.08l-.384-.08L0 7.856l.032-.24l.32-.208l.464.032l1.008.08l1.52.096l1.104.064l1.632.176h.256l.032-.112l-.08-.064l-.064-.064L4.64 6.56L2.944 5.44l-.896-.656l-.48-.336l-.24-.304l-.096-.672l.432-.48l.592.048l.144.032l.592.464l1.264.976L5.92 5.744l.24.192l.112-.064v-.048l-.112-.176l-.896-1.632l-.96-1.664l-.432-.688l-.112-.416a1.7 1.7 0 0 1-.064-.48l.496-.672L4.464 0l.672.096l.272.24l.416.944l.656 1.488l1.04 2.016l.304.608l.16.544l.064.176h.112v-.096l.08-1.152l.16-1.392l.16-1.792l.048-.512l.256-.608l.496-.32l.384.176l.32.464l-.048.288L9.84 2.4l-.384 1.936l-.24 1.312h.144l.16-.176l.656-.864l1.104-1.376l.48-.544l.576-.608l.368-.288h.688l.496.752l-.224.784l-.704.896l-.592.752l-.848 1.136l-.512.912l.048.064h.112l1.904-.416l1.04-.176l1.216-.208l.56.256l.064.256l-.224.544l-1.312.32l-1.536.304l-2.288.544l-.032.016l.032.048l1.024.096l.448.032h1.088l2.016.144l.528.352l.304.416l-.048.336l-.816.4l-1.088-.256l-2.56-.608l-.864-.208h-.128v.064l.736.72l1.328 1.2l1.68 1.552l.08.384l-.208.32l-.224-.032l-1.472-1.12l-.576-.496l-1.28-1.072h-.08v.112l.288.432l1.568 2.352l.08.72l-.112.224l-.416.144l-.432-.08l-.928-1.28l-.944-1.456l-.768-1.296l-.08.064l-.464 4.832l-.208.24l-.48.192l-.4-.304z"
																		/>
																	</svg>
																)}
																{mc.name === "Open Code" && (
																	<svg
																		className="h-3.5 w-3.5"
																		viewBox="0 0 32 40"
																		fill="none"
																		xmlns="http://www.w3.org/2000/svg"
																	>
																		<g clipPath="url(#oc)">
																			<path
																				d="M24 32H8V16H24V32Z"
																				fill="currentColor"
																				opacity="0.5"
																			/>
																			<path
																				d="M24 8H8V32H24V8ZM32 40H0V0H32V40Z"
																				fill="currentColor"
																			/>
																		</g>
																		<defs>
																			<clipPath id="oc">
																				<rect
																					width="32"
																					height="40"
																					fill="white"
																				/>
																			</clipPath>
																		</defs>
																	</svg>
																)}
																{mc.name === "Manual" && (
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		className="h-3.5 w-3.5"
																		viewBox="0 0 24 24"
																	>
																		<path
																			fill="none"
																			stroke="currentColor"
																			strokeLinecap="round"
																			strokeLinejoin="round"
																			strokeWidth="2"
																			d="M12 19h8M4 17l6-6l-6-6"
																		/>
																	</svg>
																)}
															</span>
															<span className="font-mono text-[11px]">
																{mc.name}
															</span>
														</button>
													))}
												</div>
											</>
										)}
									</div>
								</div>
							) : (
								<div className="bg-neutral-100/50 dark:bg-[#050505] px-5 py-4">
									<p className="text-[13px] font-medium text-neutral-700 dark:text-neutral-200 leading-relaxed">
										Set up authentication in my project using Better Auth.
									</p>
									<div className="relative mt-1.5">
										<p className="text-[11px] text-neutral-400 dark:text-neutral-500 leading-relaxed line-clamp-2">
											Install better-auth. If I already have a database
											configured, use that. Create lib/auth.ts with{" "}
											<code className="text-neutral-500 dark:text-neutral-400">
												betterAuth()
											</code>
											, create auth-client.ts, add the route handler, run
											migrations...
										</p>
										<div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-neutral-100/50 dark:from-[#050505] to-transparent pointer-events-none" />
									</div>
									<div className="flex items-center justify-between mt-3 pt-2 border-t border-foreground/[0.04]">
										<button
											onClick={() => setPromptOpen(true)}
											className="flex items-center gap-1 text-[11px] text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												className="h-3 w-3"
											>
												<path
													fill="currentColor"
													d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3"
												/>
											</svg>
											View full prompt
										</button>
										<button
											onClick={() => copy(aiPromptText)}
											className="flex items-center gap-1.5 text-[11px] text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
										>
											{copied ? (
												<>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24"
														className="h-3.5 w-3.5"
													>
														<path
															fill="currentColor"
															d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"
														/>
													</svg>
													Copied
												</>
											) : (
												<>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 24 24"
														className="h-3.5 w-3.5"
													>
														<path
															fill="currentColor"
															d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
														/>
													</svg>
													Copy prompt
												</>
											)}
										</button>
									</div>
								</div>
							)}
						</div>
					</AnimatePresence>
				</div>
			</motion.div>

			{/* Prompt dialog */}
			<AnimatePresence>
				{promptOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="fixed inset-0 lg:left-[40%] z-50 flex items-center justify-center"
						onClick={() => setPromptOpen(false)}
					>
						{/* Backdrop - only covers right/content side */}
						<div className="absolute inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm" />

						{/* Dialog */}
						<motion.div
							initial={{ opacity: 0, y: 8, scale: 0.98 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: 8, scale: 0.98 }}
							transition={{ duration: 0.2, ease: "easeOut" }}
							onClick={(e) => e.stopPropagation()}
							className="relative w-[calc(100%-2rem)] max-w-lg mx-4 bg-neutral-50 dark:bg-[#0a0a0a] border border-neutral-200 dark:border-white/[0.06] rounded-sm shadow-2xl"
						>
							{/* Close */}
							<button
								onClick={() => setPromptOpen(false)}
								className="absolute top-3 right-3 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors z-10"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									className="h-4 w-4"
								>
									<path
										fill="currentColor"
										d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
									/>
								</svg>
							</button>

							{/* Content */}
							<div className="px-5 py-5 max-h-[60vh] overflow-y-auto">
								<p className="text-[12px] font-mono text-neutral-600 dark:text-neutral-400 leading-[1.9] whitespace-pre-line">
									{aiPromptText}
								</p>
							</div>

							{/* Footer */}
							<div className="flex justify-end px-5 py-3 border-t border-neutral-200 dark:border-white/[0.06]">
								<button
									onClick={() => copy(aiPromptText)}
									className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] rounded-sm border border-neutral-200 dark:border-white/[0.08] text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-white/[0.04] transition-colors"
								>
									{copied ? (
										<>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												className="h-3.5 w-3.5"
											>
												<path
													fill="currentColor"
													d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"
												/>
											</svg>
											Copied
										</>
									) : (
										<>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												className="h-3.5 w-3.5"
											>
												<path
													fill="currentColor"
													d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
												/>
											</svg>
											Copy prompt
										</>
									)}
								</button>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

const EMPTY_CONTRIBUTORS: ContributorInfo[] = [];

type CommunityHeroStats = {
	npmDownloads: number;
	npmWeeklyHistory: number[];
	githubStars: number;
	contributors: number;
};

function ContributorsSection({
	contributors = EMPTY_CONTRIBUTORS,
	contributorCount,
}: {
	contributors: ContributorInfo[];
	contributorCount: number;
}) {
	if (contributors.length === 0) return null;

	const colCount = 18;
	const columns = Array.from({ length: colCount }, (_, i) => {
		const perCol = Math.ceil(contributors.length / colCount);
		return contributors.slice(i * perCol, (i + 1) * perCol);
	});

	const speeds = [
		160, 190, 140, 176, 150, 184, 164, 144, 180, 156, 170, 136, 186, 152, 174,
		146, 182, 158,
	];

	return (
		<div className="mt-10 pt-8">
			<div className="flex items-center gap-4 mb-2">
				<span className="text-lg font-medium text-foreground/90 dark:text-foreground/80 tracking-tight shrink-0">
					Contributors
				</span>
				<div className="flex-1 border-t border-foreground/10" />
			</div>
			<p className="text-[13px] text-foreground/50 dark:text-foreground/40 mb-5 leading-relaxed">
				Built by a community of{" "}
				<span className="text-foreground/70 dark:text-foreground/60 font-medium tabular-nums">
					{contributorCount}+
				</span>{" "}
				contributors.
			</p>

			{contributors.length > 0 && (
				<div
					className="relative overflow-hidden h-[220px] rounded-md"
					style={{
						perspective: "600px",
						maskImage:
							"linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
						WebkitMaskImage:
							"linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
					}}
				>
					<div
						className="absolute inset-0 pointer-events-none"
						style={{
							backgroundImage:
								"radial-gradient(circle, currentColor 0.5px, transparent 0.5px)",
							backgroundSize: "12px 12px",
							opacity: 0.04,
						}}
					/>
					<div
						className="grid h-full relative"
						style={{
							gridTemplateColumns: `repeat(${colCount}, 1fr)`,
							transform: "rotateX(18deg)",
							transformOrigin: "center center",
						}}
					>
						{columns.map((col, i) => (
							<div key={i} className="relative overflow-hidden h-full">
								<div
									className="flex flex-col gap-1 items-center"
									style={{
										animation: `vertical-marquee ${speeds[i]}s linear infinite`,
									}}
								>
									{[...col, ...col].map((c, j) => (
										<a
											key={`${c.login}-${j}`}
											href={c.html_url}
											target="_blank"
											rel="noopener noreferrer"
											title={c.login}
											className="relative group shrink-0"
										>
											<img
												src={`${c.avatar_url}&s=64`}
												alt={c.login}
												width={32}
												height={32}
												loading="lazy"
												className="rounded-sm grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-200 hover:scale-125 hover:z-10 relative"
											/>
											<div className="absolute -top-7 left-1/2 -translate-x-1/2 px-1.5 py-0.5 bg-foreground text-background text-[8px] font-mono rounded-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
												{c.login}
											</div>
										</a>
									))}
								</div>
							</div>
						))}
					</div>
					<div className="absolute inset-y-0 left-0 w-8 bg-linear-to-r from-background to-transparent pointer-events-none z-10" />
					<div className="absolute inset-y-0 right-0 w-8 bg-linear-to-l from-background to-transparent pointer-events-none z-10" />
				</div>
			)}
		</div>
	);
}

function formatCount(num: number | null | undefined): string {
	if (num == null) return "—";
	if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`;
	if (num >= 1_000) return `${(num / 1_000).toFixed(num >= 10_000 ? 0 : 1)}k`;
	return num.toString();
}

function _NpmSparkline({ data: raw }: { data: number[] }) {
	// Drop the last bucket — it's the incomplete current week
	const data = raw.length > 2 ? raw.slice(0, -1) : raw;
	const w = 120;
	const h = 32;
	const pad = 1;
	const max = Math.max(...data);
	const min = Math.min(...data);
	const range = max - min || 1;
	const points = data.map((v, i) => {
		const x = pad + (i / (data.length - 1)) * (w - pad * 2);
		const y = h - pad - ((v - min) / range) * (h - pad * 2);
		return `${x},${y}`;
	});
	const line = points.join(" ");
	const areaPath = `M${points[0]} ${points.map((p) => `L${p}`).join(" ")} L${w - pad},${h} L${pad},${h} Z`;

	return (
		<svg
			width={w}
			height={h}
			viewBox={`0 0 ${w} ${h}`}
			className="shrink-0 ml-auto"
		>
			<defs>
				<linearGradient id="npm-spark-fill" x1="0" y1="0" x2="0" y2="1">
					<stop
						offset="0%"
						className="[stop-color:theme(colors.emerald.500)]"
						stopOpacity="0.15"
					/>
					<stop
						offset="100%"
						className="[stop-color:theme(colors.emerald.500)]"
						stopOpacity="0"
					/>
				</linearGradient>
			</defs>
			<path d={areaPath} fill="url(#npm-spark-fill)" />
			<polyline
				points={line}
				fill="none"
				className="stroke-emerald-500/50"
				strokeWidth="1.5"
				strokeLinejoin="round"
				strokeLinecap="round"
			/>
		</svg>
	);
}

function ReadmeFooter({ stats }: { stats: CommunityHeroStats }) {
	return (
		<div className="relative mt-10 pt-8 pb-16 overflow-hidden">
			{/* Watermark logo */}
			<div
				className="absolute -right-10 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03] dark:opacity-[0.04]"
				aria-hidden="true"
			>
				<svg
					width="300"
					height="225"
					viewBox="0 0 60 45"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M0 0H15V15H30V30H15V45H0V30V15V0ZM45 30V15H30V0H45H60V15V30V45H45H30V30H45Z"
						className="fill-foreground"
					/>
				</svg>
			</div>

			{/* Dot grid */}
			<div
				className="absolute inset-0 pointer-events-none select-none"
				aria-hidden="true"
				style={{
					backgroundImage:
						"radial-gradient(circle, currentColor 0.5px, transparent 0.5px)",
					backgroundSize: "24px 24px",
					opacity: 0.03,
				}}
			/>

			{/* CTA */}
			<div className="relative space-y-6">
				<p className="text-center text-lg text-balance text-foreground/60 dark:text-foreground/50 tracking-tight">
					Roll your own auth with confidence in minutes.
				</p>

				<div className="flex items-center justify-center gap-2">
					{stats.npmDownloads > 0 && (
						<a
							href="https://www.npmjs.com/package/better-auth"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="flex items-center gap-1.5 px-2.5 hover:bg-foreground/4 rounded-sm transition-colors text-foreground/50 dark:text-foreground/50">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="11"
									height="11"
									viewBox="0 0 128 128"
								>
									<path
										fill="#cb3837"
										d="M0 7.062C0 3.225 3.225 0 7.062 0h113.88c3.838 0 7.063 3.225 7.063 7.062v113.88c0 3.838-3.225 7.063-7.063 7.063H7.062c-3.837 0-7.062-3.225-7.062-7.063zm23.69 97.518h40.395l.05-58.532h19.494l-.05 58.581h19.543l.05-78.075l-78.075-.1l-.1 78.126z"
									/>
									<path
										fill="#fff"
										d="M25.105 65.52V26.512H40.96c8.72 0 26.274.034 39.008.075l23.153.075v77.866H83.645v-58.54H64.057v58.54H25.105z"
									/>
								</svg>
								<span className="text-xs font-mono">
									{formatCount(stats.npmDownloads)} / week
								</span>
							</div>
						</a>
					)}
					{stats.githubStars > 0 && (
						<a
							href="https://github.com/better-auth/better-auth"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="flex items-center gap-1.5 px-2.5 hover:bg-foreground/4 rounded-sm transition-colors text-foreground/50 dark:text-foreground/50">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="11"
									height="11"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
								</svg>
								<span className="text-xs font-mono">
									{formatCount(stats.githubStars)} stars
								</span>
							</div>
						</a>
					)}
				</div>

				<div className="flex flex-wrap items-center justify-center gap-4 pt-1">
					<Link
						href="/docs/installation"
						className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 text-xs sm:text-sm font-medium hover:opacity-90 transition-colors"
					>
						Get Started
					</Link>
					<Link
						href="https://dash.better-auth.com/sign-in"
						className="relative inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm font-medium transition-colors group"
					>
						<span
							className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity"
							style={{
								backgroundImage: `repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 4px,
                  currentColor 4px,
                  currentColor 5px
                )`,
							}}
						/>
						<span className="absolute top-0 -left-[6px] -right-[6px] h-px bg-foreground/20 group-hover:bg-foreground/30 transition-colors" />
						<span className="absolute bottom-0 -left-[6px] -right-[6px] h-px bg-foreground/20 group-hover:bg-foreground/30 transition-colors" />
						<span className="absolute left-0 -top-[6px] -bottom-[6px] w-px bg-foreground/20 group-hover:bg-foreground/30 transition-colors" />
						<span className="absolute right-0 -top-[6px] -bottom-[6px] w-px bg-foreground/20 group-hover:bg-foreground/30 transition-colors" />
						<span className="absolute -bottom-[6px] -right-[6px] font-mono text-[8px] text-foreground/40 dark:text-foreground/50 leading-none select-none translate-x-1/2 translate-y-1/2">
							+
						</span>
						<span className="relative">Sign In </span>
					</Link>
				</div>
			</div>
		</div>
	);
}

export function HeroReadMe({
	contributors,
	stats,
}: {
	contributors: ContributorInfo[];
	stats: CommunityHeroStats;
}) {
	const [socialHovered, setSocialHovered] = useState(false);
	const [frameworkTab, setFrameworkTab] = useState<
		"declarative" | "database" | "oauth" | "integrations"
	>("declarative");

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
			className="flex flex-col w-full"
		>
			{/* Markdown content */}
			<div className="flex-1 overflow-x-hidden no-scrollbar">
				<div className="p-5 lg:px-8 lg:pt-20">
					<motion.article
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.4, delay: 0.3 }}
						className="no-scrollbar pb-0"
					>

						<div className="flex items-center gap-4 my-4">
							<span className="text-lg font-medium text-foreground/90 dark:text-foreground/80 tracking-tight shrink-0">
								Browser
							</span>
							<div className="flex-1 border-t border-foreground/10" />
						</div>

						<div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-2 border border-foreground/[0.08] overflow-hidden">
							{[
								{
									label: "Privacy",
									headline: "Privacy",
									desc: "Protect your data and online identity.",
									icon: ShieldIcon,
									href: "/docs",
								},
								{
									label: "AI",
									headline: "AI",
									desc: "Explore artificial intelligence tools and apps.",
									icon: AIIcon,
									href: "/docs",
								},
								{
									label: "Design",
									headline: "Design",
									desc: "Find templates, graphics, inspiration and many more.",
									icon: DesignIcon,
									href: "/docs",
								},
								{
									label: "Streaming",
									headline: "Streaming",
									desc: "Watch or listen to content seamlessly",
									icon: StreamingIcon,
									href: "/docs",
								},
								{
									label: "Listening",
									headline: "Listening",
									desc: "Music, podcasts, and audiobooks.",
									icon: ListeningIcon,
									href: "/docs",
								},
								{
									label: "Gaming",
									headline: "Gaming",
									desc: "Games, guides, and mods for all.",
									icon: GamingIcon,
									href: "/docs",
								},
								{
									label: "Reading",
									headline: "Reading",
									desc: "eBooks, articles, and tutorials.",
									icon: ReadingIcon,
									href: "/docs",
								},
								{
									label: "Education",
									headline: "Education",
									desc: "Courses and learning resources.",
									icon: EducationIcon,
									href: "/pricing",
								},
								{
									label: "Developer Tools",
									headline: "Developer Tools",
									desc: "Coding libraries and APIs.",
									icon: DeveloperIcon,
									href: "/pricing",
								},
							].map((feature, i) => (
								<Link
									key={feature.label}
									href={"href" in feature ? feature.href : "#"}
									className="contents"
								>
									<motion.div
										whileHover={{
											y: -2,
											transition: { duration: 0.2, ease: "easeOut" },
										}}
										onMouseEnter={() => {
											if ("social" in feature && feature.social) {
												setSocialHovered(true);
											}
										}}
										onMouseLeave={() => {
											if ("social" in feature && feature.social) {
												setSocialHovered(false);
											}
										}}
										className={cn(
											"group/card relative p-4 lg:p-5 border-foreground/[0.08] min-h-[100px] transition-all duration-200 hover:bg-foreground/[0.02] hover:shadow-[inset_0_1px_0_0_rgba(128,128,128,0.1)] hover:z-10",
											// Bottom border: all except last; 3-col last row starts at 6
											i < 8 && "border-b",
											i >= 6 && "md:border-b-0",
											// Right border: none on mobile
											// 2-col: left column (even indices) gets right border
											i % 2 === 0 && i < 8 && "sm:border-r",
											// 3-col: remove right border on 3rd column, add on odd indices that need it
											i % 3 === 2 && "md:border-r-0",
											i % 2 !== 0 && i % 3 !== 2 && "md:border-r",
										)}
									>
										{/* Arrow icon — top right, visible on hover */}
										<span className="absolute top-3 right-3 lg:top-4 lg:right-4 opacity-0 -translate-y-0.5 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-200">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="text-foreground/40 dark:text-foreground/50"
											>
												<line x1="7" y1="17" x2="17" y2="7" />
												<polyline points="7 7 17 7 17 17" />
											</svg>
										</span>
										<div className="mb-2">
											<div className="text-foreground/45 dark:text-foreground/30 mb-2 transition-colors duration-200 group-hover/card:text-foreground/60 dark:group-hover/card:text-foreground/40">
												<feature.icon className="w-5 h-5" strokeWidth={1.5} />
											</div>
											<div className="text-[13px] font-medium text-foreground/80 dark:text-neutral-100 transition-colors duration-200">
												{feature.headline}
											</div>
										</div>
										<div className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed transition-colors duration-200 group-hover/card:text-neutral-400 dark:group-hover/card:text-neutral-300">
											{feature.desc}
										</div>
									</motion.div>
								</Link>
							))}
							{/* + marks at grid intersections */}
							<span className="hidden md:block absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 font-mono  -mt-[1px] -ml-[.5px] text-[10px] text-foreground/35 dark:text-foreground/20 select-none z-10">
								+
							</span>
							<span className="hidden md:block absolute top-1/3 left-2/3 -translate-x-1/2 -translate-y-1/2 font-mono -mt-[1px] -ml-[.5px] text-[10px] text-foreground/35 dark:text-foreground/20 select-none z-10">
								+
							</span>
							<span className="hidden md:block absolute top-2/3 left-1/3 -translate-x-1/2 -translate-y-1/2 font-mono  -mt-[1px] -ml-[.5px] text-[10px] text-foreground/35 dark:text-foreground/20 select-none z-10">
								+
							</span>
							<span className="hidden md:block absolute top-2/3 left-2/3 -translate-x-1/2 -translate-y-1/2 font-mono  -mt-[1px] -ml-[.5px] text-[10px] text-foreground/35 dark:text-foreground/20 select-none z-10">
								+
							</span>
						</div>



						{/* <ContributorsSection
							contributors={contributors}
							contributorCount={stats.contributors}
						/>

						<ReadmeFooter stats={stats} /> */}
					</motion.article>
				</div>
			</div>
		</motion.div>
	);
}

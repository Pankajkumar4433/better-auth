"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { brandLogoPreviews } from "@/lib/brand-assets";

export default function DiscoverPage() {
	return (
		<div className="flex-1 overflow-x-hidden no-scrollbar w-full pb-12">
			<div className="px-8 ">
				{/* Browser Grid Component */}
				<div className="flex items-center gap-4 my-4">
					<span className="text-lg font-medium text-foreground/90 dark:text-foreground/80 tracking-tight shrink-0">
						Browser
					</span>
					<div className="flex-1 border-t border-foreground/10" />
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-2">
					{Array.from({ length: 9 }).map((_, i) => {
						const logo = brandLogoPreviews[i % brandLogoPreviews.length];
						return (
							<motion.a
								key={i}
								href={logo.src}
								download
								whileHover={{
									y: -2,
									transition: { duration: 0.2, ease: "easeOut" },
								}}
								className="group/card relative h-full w-full border border-foreground/10 bg-background transition-all duration-200 flex flex-col justify-between"
							>
								<div
									className={cn(
										"w-full aspect-[16/9] flex items-center justify-center p-6",
										logo.bg,
									)}
								>
									<Image
										src={logo.src}
										alt={logo.label}
										width={120}
										height={60}
										loading="eager"
										className="max-h-12 w-auto max-w-full object-contain"
									/>
								</div>

								{/* Card Footer: Fully same as brand page logo card */}
								<div className="flex items-center justify-between border-t border-foreground/10 px-3 py-2 w-full gap-2">
									<div className="flex items-center gap-1.5 min-w-0">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="1.1em"
											height="1.1em"
											viewBox="0 0 24 24"
											className="text-foreground/50 group-hover/card:text-foreground/90 transition-colors shrink-0"
										>
											<path d="M0 0h24v24H0z" fill="none" />
											<path fill="currentColor" d="M6.26 21.388H6c-.943 0-1.414 0-1.707-.293C4 20.804 4 20.332 4 19.389v-1.112c0-.518 0-.777.133-1.009s.334-.348.736-.582c2.646-1.539 6.403-2.405 8.91-.91q.253.151.45.368a1.49 1.49 0 0 1-.126 2.134a1 1 0 0 1-.427.24q.18-.021.345-.047c.911-.145 1.676-.633 2.376-1.162l1.808-1.365a1.89 1.89 0 0 1 2.22 0c.573.433.749 1.146.386 1.728c-.423.678-1.019 1.545-1.591 2.075s-1.426 1.004-2.122 1.34c-.772.373-1.624.587-2.491.728c-1.758.284-3.59.24-5.33-.118a15 15 0 0 0-3.017-.308" opacity=".5" />
											<path fill="currentColor" d="M10.861 3.363C11.368 2.454 11.621 2 12 2s.632.454 1.139 1.363l.13.235c.145.259.217.388.329.473s.252.117.532.18l.254.058c.984.222 1.476.334 1.593.71s-.218.769-.889 1.553l-.174.203c-.19.223-.285.334-.328.472s-.029.287 0 .584l.026.27c.102 1.047.152 1.57-.154 1.803s-.767.02-1.688-.404l-.239-.11c-.261-.12-.392-.18-.531-.18s-.27.06-.531.18l-.239.11c-.92.425-1.382.637-1.688.404s-.256-.756-.154-1.802l.026-.271c.029-.297.043-.446 0-.584s-.138-.25-.328-.472l-.174-.203c-.67-.784-1.006-1.177-.889-1.553s.609-.488 1.593-.71l.254-.058c.28-.063.42-.095.532-.18s.184-.214.328-.473zm8.569 4.319c.254-.455.38-.682.57-.682s.316.227.57.682l.065.117c.072.13.108.194.164.237s.126.058.266.09l.127.028c.492.112.738.167.796.356s-.109.384-.444.776l-.087.101c-.095.112-.143.168-.164.237s-.014.15.022-.224c-.021-.07-.069-.125-.164-.237l-.087-.101c-.335-.392-.503-.588-.444-.776s.304-.244.796-.356l.127-.028c.14-.032.21-.048.266-.09c.056-.043.092-.108.164-.237zm-16 0C3.685 7.227 3.81 7 4 7s.316.227.57.682l.065.117c.072.13.108.194.164.237s.126.058.266.09l.127.028c.492.112.738.167.797.356c.058.188-.11.384-.445.776l-.087.101c-.095.112-.143.168-.164.237s-.014.143 0 .292l.013.135c.05.523.076.785-.077.901s-.384.01-.844-.202l-.12-.055c-.13-.06-.196-.09-.265-.09c-.07 0-.135.03-.266.09l-.119.055c-.46.212-.69.318-.844.202c-.153-.116-.128-.378-.077-.901l.013-.135c.014-.15.022-.224 0-.292c-.021-.07-.069-.125-.164-.237l-.087-.101c-.335-.392-.503-.588-.445-.776c.059-.189.305-.244.797-.356l.127-.028c.14-.032.21-.048.266-.09c.056-.043.092-.108.164-.237z" />
										</svg>
										<p className="text-[11px] font-medium text-foreground/80 dark:text-neutral-200 truncate">
											{logo.label}
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
					})}
				</div>

				{/* Feature Grid Component */}
				<div className="flex items-center gap-4 my-8">
					<span className="text-lg font-medium text-foreground/90 dark:text-foreground/80 tracking-tight shrink-0">
						Feature
					</span>
					<div className="flex-1 border-t border-foreground/10" />
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-2">
					{Array.from({ length: 9 }).map((_, i) => {
						const logo = brandLogoPreviews[i % brandLogoPreviews.length];
						return (
							<motion.a
								key={i}
								href={logo.src}
								download
								whileHover={{
									y: -2,
									transition: { duration: 0.2, ease: "easeOut" },
								}}
								className="group/card relative h-full w-full border border-foreground/10 bg-background transition-all duration-200 flex flex-col justify-between"
							>
								<div
									className={cn(
										"w-full aspect-[16/9] flex items-center justify-center p-6",
										logo.bg,
									)}
								>
									<Image
										src={logo.src}
										alt={logo.label}
										width={120}
										height={60}
										className="max-h-12 w-auto max-w-full object-contain"
									/>
								</div>

								{/* Card Footer: Fully same as brand page logo card */}
								<div className="flex items-center justify-between border-t border-foreground/10 px-3 py-2 w-full gap-2">
									<div className="flex items-center gap-1.5 min-w-0">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="1.1em"
											height="1.1em"
											viewBox="0 0 24 24"
											className="text-foreground/50 group-hover/card:text-foreground/90 transition-colors shrink-0"
										>
											<path d="M0 0h24v24H0z" fill="none" />
											<path fill="currentColor" d="M6.26 21.388H6c-.943 0-1.414 0-1.707-.293C4 20.804 4 20.332 4 19.389v-1.112c0-.518 0-.777.133-1.009s.334-.348.736-.582c2.646-1.539 6.403-2.405 8.91-.91q.253.151.45.368a1.49 1.49 0 0 1-.126 2.134a1 1 0 0 1-.427.24q.18-.021.345-.047c.911-.145 1.676-.633 2.376-1.162l1.808-1.365a1.89 1.89 0 0 1 2.22 0c.573.433.749 1.146.386 1.728c-.423.678-1.019 1.545-1.591 2.075s-1.426 1.004-2.122 1.34c-.772.373-1.624.587-2.491.728c-1.758.284-3.59.24-5.33-.118a15 15 0 0 0-3.017-.308" opacity=".5" />
											<path fill="currentColor" d="M10.861 3.363C11.368 2.454 11.621 2 12 2s.632.454 1.139 1.363l.13.235c.145.259.217.388.329.473s.252.117.532.18l.254.058c.984.222 1.476.334 1.593.71s-.218.769-.889 1.553l-.174.203c-.19.223-.285.334-.328.472s-.029.287 0 .584l.026.27c.102 1.047.152 1.57-.154 1.803s-.767.02-1.688-.404l-.239-.11c-.261-.12-.392-.18-.531-.18s-.27.06-.531.18l-.239.11c-.92.425-1.382.637-1.688.404s-.256-.756-.154-1.802l.026-.271c.029-.297.043-.446 0-.584s-.138-.25-.328-.472l-.174-.203c-.67-.784-1.006-1.177-.889-1.553s.609-.488 1.593-.71l.254-.058c.28-.063.42-.095.532-.18s.184-.214.328-.473zm8.569 4.319c.254-.455.38-.682.57-.682s.316.227.57.682l.065.117c.072.13.108.194.164.237s.126.058.266.09l.127.028c.492.112.738.167.796.356s-.109.384-.444.776l-.087.101c-.095.112-.143.168-.164.237s-.014.15.022-.224c-.021-.07-.069-.125-.164-.237l-.087-.101c-.335-.392-.503-.588-.444-.776s.304-.244.796-.356l.127-.028c.14-.032.21-.048.266-.09c.056-.043.092-.108.164-.237zm-16 0C3.685 7.227 3.81 7 4 7s.316.227.57.682l.065.117c.072.13.108.194.164.237s.126.058.266.09l.127.028c.492.112.738.167.797.356c.058.188-.11.384-.445.776l-.087.101c-.095.112-.143.168-.164.237s-.014.143 0 .292l.013.135c.05.523.076.785-.077.901s-.384.01-.844-.202l-.12-.055c-.13-.06-.196-.09-.265-.09c-.07 0-.135.03-.266.09l-.119.055c-.46.212-.69.318-.844.202c-.153-.116-.128-.378-.077-.901l.013-.135c.014-.15.022-.224 0-.292c-.021-.07-.069-.125-.164-.237l-.087-.101c-.335-.392-.503-.588-.445-.776c.059-.189.305-.244.797-.356l.127-.028c.14-.032.21-.048.266-.09c.056-.043.092-.108.164-.237z" />
										</svg>
										<p className="text-[11px] font-medium text-foreground/80 dark:text-neutral-200 truncate">
											{logo.label}
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
					})}
				</div>
			</div>
		</div>
	);
}

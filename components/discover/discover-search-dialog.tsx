"use client";

import React, { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowRight, ExternalLink } from "lucide-react";
import { categoryDataMap } from "@/lib/discover-categories";
import {
	SearchDialog,
	SearchDialogClose,
	SearchDialogContent,
	SearchDialogHeader,
	SearchDialogInput,
	SearchDialogList,
	SearchDialogListItem,
	SearchDialogOverlay,
} from "fumadocs-ui/components/dialog/search";
import { useDiscoverSearch } from "./discover-search-provider";
import type { SearchItemType } from "fumadocs-ui/components/dialog/search";
import { RootProvider } from "fumadocs-ui/provider/next";

const CategoryIcon = ({ className }: { className?: string }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className={className}>
		<path d="M0 0h24v24H0z" fill="none" />
		<path fill="currentColor" d="M5.684 12c0 .584-.47 1.059-1.052 1.059a1.056 1.056 0 0 1-1.053-1.06c0-.584.471-1.058 1.053-1.058c.581 0 1.052.474 1.052 1.059m0 6.353c0 .584-.47 1.058-1.052 1.058a1.056 1.056 0 0 1-1.053-1.058c0-.585.471-1.06 1.053-1.06c.581 0 1.052.475 1.052 1.06m0-12.706c0 .584-.47 1.059-1.052 1.059a1.056 1.056 0 0 1-1.053-1.06c0-.584.471-1.058 1.053-1.058c.581 0 1.052.474 1.052 1.059" />
		<path fill="currentColor" fillRule="evenodd" d="M3.516 15.725c.271-.019.618-.02 1.116-.02h14.736c.498 0 .845.001 1.117.02c.266.018.422.052.54.102c.387.161.695.47.855.86c.049.119.083.275.101.543c.019.273.019.622.019 1.123c0 .5 0 .85-.019 1.123c-.018.268-.052.424-.101.544c-.16.389-.468.698-.855.86c-.118.049-.274.083-.54.101c-.272.019-.619.019-1.117.019H4.632c-.498 0-.845 0-1.116-.019c-.267-.018-.423-.053-.541-.102a1.58 1.58 0 0 1-.855-.86c-.049-.119-.083-.275-.101-.543A18 18 0 0 1 2 18.353c0-.5 0-.85.019-1.123c.018-.268.052-.424.101-.544c.16-.389.468-.698.855-.86c.118-.049.274-.083.54-.101m1.116 3.687c.58 0 1.052-.474 1.052-1.06c0-.584-.471-1.058-1.052-1.058s-1.053.474-1.053 1.059s.471 1.059 1.053 1.059m.001-11.118c-.498 0-.845 0-1.116-.019c-.267-.018-.423-.052-.541-.102a1.58 1.58 0 0 1-.855-.86c-.049-.119-.083-.275-.101-.543A18 18 0 0 1 2 5.647c0-.5 0-.85.019-1.123c.018-.268.052-.424.101-.544c.16-.389.468-.698.855-.86c.118-.049.274-.083.54-.101A18 18 0 0 1 4.633 3h14.736c.498 0 .845 0 1.117.019c.266.018.422.052.54.102c.387.161.695.47.855.86c.049.119.083.275.101.543c.019.274.019.622.019 1.123c0 .5 0 .85-.019 1.123c-.018.268-.052.424-.101.544c-.16.389-.468.698-.855.86c-.118.049-.274.083-.54.101a18 18 0 0 1-1.117.02zm0 1.059c-.498 0-.845 0-1.116.019c-.267.018-.423.052-.541.102a1.58 1.58 0 0 0-.855.86c-.049.119-.083.275-.101.543C2 11.15 2 11.5 2 12s0 .85.019 1.123c.018.268.052.424.101.544c.16.389.468.698.855.86c.118.049.274.083.54.101c.272.019.619.02 1.117.02h14.736c.498 0 .845-.001 1.117-.02c.266-.018.422-.052.54-.102a1.58 1.58 0 0 0 .855-.86c.049-.119.083-.275.101-.543C22 12.85 22 12.5 22 12s0-.85-.019-1.123c-.018-.268-.052-.424-.101-.544a1.58 1.58 0 0 0-.855-.86c-.118-.049-.274-.083-.54-.101a18 18 0 0 0-1.117-.02zM5.684 12c0 .585-.471 1.059-1.052 1.059A1.056 1.056 0 0 1 3.579 12c0-.585.471-1.059 1.053-1.059c.58 0 1.052.474 1.052 1.059M4.632 6.706c.58 0 1.052-.474 1.052-1.059s-.471-1.059-1.052-1.059s-1.053.474-1.053 1.06c0 .584.471 1.058 1.053 1.058" clipRule="evenodd" opacity=".5" />
	</svg>
);

const SubCategoryIcon = ({ className }: { className?: string }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className={className}>
		<path d="M0 0h24v24H0z" fill="none" />
		<path fill="currentColor" d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" />
		<path fill="currentColor" fillRule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clipRule="evenodd" />
		<path fill="currentColor" d="m5.766 10l-.787.315C2.993 11.109 2 11.507 2 12s.993.89 2.979 1.685l2.808 1.124C9.773 15.603 10.767 16 12 16s2.227-.397 4.213-1.191l2.808-1.124C21.007 12.891 22 12.493 22 12s-.993-.89-2.979-1.685L18.234 10l-2.021.809C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" opacity=".7" />
		<path fill="currentColor" d="m5.766 14l-.787.315C2.993 15.109 2 15.507 2 16s.993.89 2.979 1.685l2.808 1.124C9.773 19.603 10.767 20 12 20s2.227-.397 4.213-1.192l2.808-1.123C21.007 16.891 22 16.494 22 16c0-.493-.993-.89-2.979-1.685L18.234 14l-2.021.809C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191z" opacity=".4" />
	</svg>
);

const SectionIcon = ({ className }: { className?: string }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className={className}>
		<path d="M0 0h24v24H0z" fill="none" />
		<path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5" />
		<path fill="currentColor" fillRule="evenodd" d="M11.718 7.215a.75.75 0 0 0-1.436-.43l-.74 2.465H7a.75.75 0 0 0 0 1.5h2.092l-.75 2.5H6a.75.75 0 1 0 0 1.5h1.892l-.61 2.034a.75.75 0 0 0 1.436.431l.74-2.465h3.434l-.61 2.034a.75.75 0 0 0 1.436.431l.74-2.465H17a.75.75 0 0 0 0-1.5h-2.092l.75-2.5H18a.75.75 0 0 0 0-1.5h-1.892l.61-2.035a.75.75 0 0 0-1.436-.43l-.74 2.465h-3.434zm2.374 3.535l-.75 2.5H9.908l.75-2.5z" clipRule="evenodd" />
	</svg>
);

const ResourceIcon = ({ className }: { className?: string }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className={className}>
		<path d="M0 0h24v24H0z" fill="none" />
		<path fill="currentColor" d="M2 6.5c0-2.121 0-3.182.659-3.841S4.379 2 6.5 2s3.182 0 3.841.659S11 4.379 11 6.5s0 3.182-.659 3.841S8.621 11 6.5 11s-3.182 0-3.841-.659S2 8.621 2 6.5m11 11c0-2.121 0-3.182.659-3.841S15.379 13 17.5 13s3.182 0 3.841.659S22 15.379 22 17.5s0 3.182-.659 3.841S19.621 22 17.5 22s-3.182 0-3.841-.659S13 19.621 13 17.5" opacity=".5" />
		<path fill="currentColor" d="M2 17.5c0-2.121 0-3.182.659-3.841S4.379 13 6.5 13s3.182 0 3.841.659S11 15.379 11 17.5s0 3.182-.659 3.841S8.621 22 6.5 22s-3.182 0-3.841-.659S2 19.621 2 17.5m11-11c0-2.121 0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11s-3.182 0-3.841-.659S13 8.621 13 6.5" />
	</svg>
);

export function DiscoverSearchDialog() {
	const { isOpen, setIsOpen } = useDiscoverSearch();
	const router = useRouter();
	const [searchQuery, setSearchQuery] = useState("");

	const searchIndex = useMemo(() => {
		const index: any[] = [];
		Object.keys(categoryDataMap).forEach((catKey) => {
			const cat = categoryDataMap[catKey];
			if (!cat || !cat.subcategories) return;

			// Add the Category itself to the index
			index.push({
				itemType: "category",
				id: cat.slug,
				name: cat.name,
				description: `Explore all ${cat.name} resources`,
				categoryName: cat.name,
				subcategoryName: "Overview",
				href: `/discover/${cat.slug}`,
				searchText: `${cat.name} explore category`.toLowerCase()
			});
			
			cat.subcategories.forEach((sub: any) => {
				// Add the Subcategory itself to the index
				index.push({
					itemType: "subcategory",
					id: sub.slug,
					name: sub.name,
					description: `View ${sub.name} in ${cat.name}`,
					categoryName: cat.name,
					subcategoryName: sub.name,
					href: `/discover/${cat.slug}/${sub.slug}`,
					searchText: `${sub.name} ${cat.name} subcategory`.toLowerCase()
				});

				if (!sub.sections) return;
				
				sub.sections.forEach((sec: any) => {
					// Add the Section itself to the index
					if (sec.section_title || sec.label) {
						const title = sec.section_title || sec.label;
						index.push({
							itemType: "section",
							id: sec.id || sec.section_id || title.toLowerCase().replace(/\s+/g, '-'),
							name: title,
							description: `Section in ${sub.name}`,
							categoryName: cat.name,
							subcategoryName: sub.name,
							href: `/discover/${cat.slug}/${sub.slug}#${sec.id || sec.section_id || title.toLowerCase().replace(/\s+/g, '-')}`,
							searchText: `${title} ${sub.name} section`.toLowerCase()
						});
					}

					if (!sec.resources) return;
					
					sec.resources.forEach((res: any) => {
						index.push({
							itemType: "resource",
							id: res.id,
							name: res.name,
							description: res.description,
							categoryName: cat.name,
							subcategoryName: sub.name,
							href: `/discover/${cat.slug}/${sub.slug}#${res.id}`,
							searchText: `${res.name} ${res.description || ""} ${cat.name} ${sub.name}`.toLowerCase()
						});
					});
				});
			});
		});
		return index;
	}, []);

	const handleSelect = (href: string) => {
		setIsOpen(false);
		router.push(href);
		
		// Wait for navigation and then scroll to hash if present
		if (href.includes("#")) {
			setTimeout(() => {
				const id = href.split("#")[1];
				const el = document.getElementById(id);
				if (el) {
					// Use a small offset so the item isn't hidden under a sticky header
					const y = el.getBoundingClientRect().top + window.scrollY - 100;
					window.scrollTo({ top: y, behavior: 'smooth' });
					
					// Add a temporary highlight effect using Tailwind classes
					el.classList.add('ring-2', 'ring-foreground', 'ring-offset-2', 'ring-offset-background', 'transition-all', 'duration-500');
					setTimeout(() => {
						el.classList.remove('ring-2', 'ring-foreground', 'ring-offset-2', 'ring-offset-background');
					}, 5000);
				}
			}, 300); // Wait for page transition
		}
	};

	const filteredItems = useMemo<SearchItemType[]>(() => {
		let results = searchIndex;
		if (searchQuery) {
			const query = searchQuery.toLowerCase();
			results = searchIndex.filter((res) => res.searchText.includes(query));
		}
		
		return results.slice(0, 50).map((res) => {
			let badgeText = "";
			let Icon = ResourceIcon;
			if (res.itemType === "category") {
				badgeText = "Category";
				Icon = CategoryIcon;
			} else if (res.itemType === "subcategory") {
				badgeText = `${res.categoryName} Subcategory`;
				Icon = SubCategoryIcon;
			} else if (res.itemType === "section") {
				badgeText = `${res.subcategoryName} Section`;
				Icon = SectionIcon;
			} else {
				badgeText = `${res.categoryName} > ${res.subcategoryName}`;
				Icon = ResourceIcon;
			}

			return {
				id: res.id,
				type: "action",
				node: (
					<div className="flex flex-col items-start gap-1 w-full text-left">
						<div className="flex items-center justify-between w-full gap-4">
							<div className="flex items-center gap-2 overflow-hidden">
								<Icon className="size-4 shrink-0 text-fd-muted-foreground/70" />
								<span className="font-semibold text-fd-foreground truncate">{res.name}</span>
							</div>
							<span className={
								res.itemType === "category" 
								? "text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded uppercase tracking-wider whitespace-nowrap shrink-0"
								: "text-[10px] text-fd-muted-foreground bg-fd-foreground/5 px-2 py-0.5 rounded uppercase tracking-wider whitespace-nowrap shrink-0"
							}>
								{badgeText}
							</span>
						</div>
						{res.description && (
							<span className="text-xs text-fd-muted-foreground line-clamp-1 w-full opacity-80 pl-6">
								{res.description}
							</span>
						)}
					</div>
				),
				onSelect: () => handleSelect(res.href),
			};
		});
	}, [searchIndex, searchQuery]);

	// Reset search query when dialog closes
	useEffect(() => {
		if (!isOpen) {
			setTimeout(() => setSearchQuery(""), 200);
		}
	}, [isOpen]);

	return (
		<RootProvider>
			<SearchDialog 
				open={isOpen} 
				onOpenChange={setIsOpen}
				search={searchQuery}
				onSearchChange={setSearchQuery}
				isLoading={false}
			>
				<SearchDialogOverlay className="z-200" />
				<SearchDialogContent className="z-200">
					<SearchDialogHeader>
						<Search className="size-5 text-fd-muted-foreground" />
						<SearchDialogInput placeholder="Search over 4,000 resources..." />
						<SearchDialogClose />
					</SearchDialogHeader>
					<SearchDialogList
						items={filteredItems}
						Item={({ item, onClick }) => (
							<SearchDialogListItem
								item={item}
								onClick={onClick}
							/>
						)}
					/>
				</SearchDialogContent>
			</SearchDialog>
		</RootProvider>
	);
}

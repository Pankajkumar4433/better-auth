"use client";

import { ResourceCard } from "./resource-card";

interface Resource {
	id: string;
	name: string;
	url: string;
	banner?: string;
	description?: string;
	featured?: boolean;
	tags?: string[];
	isPaid?: boolean;
	isOpenSource?: boolean;
}

interface Section {
	section_id?: string;
	section_title?: string;
	id?: string;
	label?: string;
	resources: Resource[];
}

export function ResourceSection({ section }: { section: Section }) {
	const title = section.section_title || section.label || "";
	const resources = section.resources || [];

	if (resources.length === 0) return null;

	return (
		<div className="mb-8" id={section.id || section.section_id || title.toLowerCase().replace(/\s+/g, '-')}>
			{/* Section Header */}
			<div className="flex items-center gap-4 my-4">
				<span className="text-lg font-medium text-foreground/90 dark:text-foreground/80 tracking-tight shrink-0">
					{title}
				</span>
				<div className="flex-1 border-t border-foreground/10" />
			</div>

			{/* Resource Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3">
				{resources.map((resource) => (
					<ResourceCard key={resource.id} resource={resource} />
				))}
			</div>
		</div>
	);
}

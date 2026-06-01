import { notFound } from "next/navigation";
import { ResourceSection } from "@/components/discover/resource-section";
import { discoverCategories, categoryDataMap } from "@/lib/discover-categories";

export default async function SubcategoryPage({
	params,
}: {
	params: Promise<{ folder: string; slug: string }>;
}) {
	const { folder, slug } = await params;

	// Find category metadata
	const category = discoverCategories.find((c) => c.slug === folder);
	if (!category) return notFound();

	// Find subcategory metadata
	const subcategory = category.subcategories.find((s) => s.slug === slug);
	if (!subcategory) return notFound();

	// Load the category data file
	const categoryData = categoryDataMap[folder];
	if (!categoryData) return notFound();

	// Find matching subcategory data
	const subcategoryData = categoryData.subcategories?.find(
		(s: any) => s.slug === slug
	);
	if (!subcategoryData) return notFound();

	const sections = subcategoryData.sections || [];
	const totalResources = sections.reduce(
		(acc: number, s: any) => acc + (s.resources?.length || 0),
		0
	);

	return (
		<div className="flex-1 overflow-x-hidden no-scrollbar w-full pb-16">
			<div className="px-5 pt-5 max-w-7xl mx-auto">
				{/* Breadcrumb */}
				{/* <div className="flex items-center gap-1.5 text-xs text-foreground/40 mb-6">
					<span className="capitalize">{category.name}</span>
					<span>/</span>
					<span className="text-foreground/70 font-medium">{subcategory.name}</span>
				</div>

				
				<div className="mb-10">
					<h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">
						{subcategory.name}
					</h1>
					<p className="text-foreground/50 text-sm">
						{totalResources} resource{totalResources !== 1 ? "s" : ""} across {sections.length} section{sections.length !== 1 ? "s" : ""}
					</p>
				</div> */}

				{/* Sections */}
				{sections.length === 0 ? (
					<div className="flex flex-col items-center justify-center py-24 text-foreground/30">
						<p className="text-lg font-medium">No resources yet</p>
						<p className="text-sm mt-1">Check back soon!</p>
					</div>
				) : (
					sections.map((section: any) => (
						<ResourceSection
							key={section.section_id || section.id}
							section={section}
						/>
					))
				)}
			</div>
		</div>
	);
}

import { BotIcon, ImageIcon, VideoIcon, Activity, AppWindow, Book, Server, ShieldCheck, ScrollTextIcon, Music, Gamepad2 } from "lucide-react";
import type { SVGProps, ReactNode } from "react";

// Import per-category data files (new format)
import aiData from "@/lib/data/ai/data.json";
import { icons as aiIcons, defaultIcon as aiDefaultIcon } from "@/lib/data/ai/icons";
import designData from "@/lib/data/design/data.json";
import { icons as designIcons, defaultIcon as designDefaultIcon } from "@/lib/data/design/icons";
import developerToolsData from "@/lib/data/developer-tools/data.json";
import { icons as developerToolsIcons, defaultIcon as developerToolsDefaultIcon } from "@/lib/data/developer-tools/icons";
import educationData from "@/lib/data/education/data.json";
import { icons as educationIcons, defaultIcon as educationDefaultIcon } from "@/lib/data/education/icons";
import gamingData from "@/lib/data/gaming/data.json";
import { icons as gamingIcons, defaultIcon as gamingDefaultIcon } from "@/lib/data/gaming/icons";
import listeningData from "@/lib/data/listening/data.json";
import { icons as listeningIcons, defaultIcon as listeningDefaultIcon } from "@/lib/data/listening/icons";
import privacyData from "@/lib/data/privacy/data.json";
import { icons as privacyIcons, defaultIcon as privacyDefaultIcon } from "@/lib/data/privacy/icons";
import readingData from "@/lib/data/reading/data.json";
import { icons as readingIcons, defaultIcon as readingDefaultIcon } from "@/lib/data/reading/icons";
import streamingData from "@/lib/data/streaming/data.json";
import { icons as streamingIcons, defaultIcon as streamingDefaultIcon } from "@/lib/data/streaming/icons";
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

export interface DiscoverSubcategory {
	id: string;
	name: string;
	slug: string;
}

export interface DiscoverCategory {
	id: string;
	name: string;
	slug: string;
	description: string;
	Icon: (props?: SVGProps<any>) => ReactNode;
	subcategories: DiscoverSubcategory[];
	icons: Record<string, (props: SVGProps<any>) => ReactNode>;
	defaultIcon: (props: SVGProps<any>) => ReactNode;
}

function getCategoryData(data: any): DiscoverSubcategory[] {
	if (!data?.subcategories || !Array.isArray(data.subcategories)) return [];
	return data.subcategories.map((sub: any) => ({
		id: sub.id,
		name: sub.name,
		slug: sub.slug,
	}));
}

export const discoverCategories: DiscoverCategory[] = [
	{
		id: "ai",
		name: "AI",
		slug: "ai",
		description: (aiData as any).description || "AI resources",
		Icon: (props?: any) => <AIIcon {...props} />,
		subcategories: getCategoryData(aiData),
		icons: aiIcons as any,
		defaultIcon: aiDefaultIcon as any,
	},
	{
		id: "design",
		name: "Design",
		slug: "design",
		description: (designData as any).description || "Design tools and resources",
		Icon: (props?: any) => <DesignIcon {...props} />,
		subcategories: getCategoryData(designData),
		icons: designIcons as any,
		defaultIcon: designDefaultIcon as any,
	},
	{
		id: "developer-tools",
		name: "Developer Tools",
		slug: "developer-tools",
		description: (developerToolsData as any).description || "Developer tools",
		Icon: (props?: any) => <DeveloperIcon {...props} />,
		subcategories: getCategoryData(developerToolsData),
		icons: developerToolsIcons as any,
		defaultIcon: developerToolsDefaultIcon as any,
	},
	{
		id: "education",
		name: "Education",
		slug: "education",
		description: (educationData as any).description || "Educational resources",
		Icon: (props?: any) => <EducationIcon {...props} />,
		subcategories: getCategoryData(educationData),
		icons: educationIcons as any,
		defaultIcon: educationDefaultIcon as any,
	},
	{
		id: "gaming",
		name: "Gaming",
		slug: "gaming",
		description: (gamingData as any).description || "Gaming resources",
		Icon: (props?: any) => <GamingIcon {...props} />,
		subcategories: getCategoryData(gamingData),
		icons: gamingIcons as any,
		defaultIcon: gamingDefaultIcon as any,
	},
	{
		id: "listening",
		name: "Listening",
		slug: "listening",
		description: (listeningData as any).description || "Music and audio",
		Icon: (props?: any) => <ListeningIcon {...props} />,
		subcategories: getCategoryData(listeningData),
		icons: listeningIcons as any,
		defaultIcon: listeningDefaultIcon as any,
	},
	{
		id: "privacy",
		name: "Privacy",
		slug: "privacy",
		description: (privacyData as any).description || "Privacy tools",
		Icon: (props?: any) => <ShieldIcon {...props} />,
		subcategories: getCategoryData(privacyData),
		icons: privacyIcons as any,
		defaultIcon: privacyDefaultIcon as any,
	},
	{
		id: "reading",
		name: "Reading",
		slug: "reading",
		description: (readingData as any).description || "Reading resources",
		Icon: (props?: any) => <ReadingIcon {...props} />,
		subcategories: getCategoryData(readingData),
		icons: readingIcons as any,
		defaultIcon: readingDefaultIcon as any,
	},
	{
		id: "streaming",
		name: "Streaming",
		slug: "streaming",
		description: (streamingData as any).description || "Streaming platforms",
		Icon: (props?: any) => <StreamingIcon {...props} />,
		subcategories: getCategoryData(streamingData),
		icons: streamingIcons as any,
		defaultIcon: streamingDefaultIcon as any,
	},
];

export const categoryDataMap: Record<string, any> = {
	"ai": aiData,
	"design": designData,
	"developer-tools": developerToolsData,
	"education": educationData,
	"gaming": gamingData,
	"listening": listeningData,
	"privacy": privacyData,
	"reading": readingData,
	"streaming": streamingData,
};

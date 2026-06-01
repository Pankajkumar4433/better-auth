import { BotIcon, ImageIcon, VideoIcon, PenIcon, HeadphonesIcon, TerminalIcon, WrenchIcon, BookIcon, ActivityIcon } from "lucide-react";
import type { SVGProps, ReactNode } from "react";

// Keys = subcategory "id" from data.json
export const icons: Record<string, (props: SVGProps<SVGSVGElement>) => ReactNode> = {
    "chatbots":         (props) => <BotIcon {...(props as any)} />,
    "ai-writing-tools": (props) => <PenIcon {...(props as any)} />,
    "video-generation": (props) => <VideoIcon {...(props as any)} />,
    "image-generation": (props) => <ImageIcon {...(props as any)} />,
    "audio-generation": (props) => <HeadphonesIcon {...(props as any)} />,
    "ai-coding-tools":  (props) => <TerminalIcon {...(props as any)} />,
    "ai-tools":         (props) => <WrenchIcon {...(props as any)} />,
    "ai-indexes":       (props) => <BookIcon {...(props as any)} />,
    "ai-benchmarks":    (props) => <ActivityIcon {...(props as any)} />,
};

export const defaultIcon = (props: SVGProps<SVGSVGElement>) => <BotIcon {...(props as any)} />;

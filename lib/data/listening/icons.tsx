import { 
    Activity, 
    Headphones, 
    Star, 
    Radio, 
    Music, 
    Disc, 
    Magnet, 
    PlayCircle, 
    Clapperboard, 
    Database, 
    Wrench, 
    Scissors 
} from "lucide-react";
import type { SVGProps, ReactNode } from "react";

export const icons: Record<string, (props: SVGProps<SVGSVGElement>) => ReactNode> = {
    "audio-streaming": (props) => <Headphones {...(props as any)} />,
    "specialty-streaming": (props) => <Star {...(props as any)} />,
    "radio-streaming": (props) => <Radio {...(props as any)} />,
    "spotify-tools": (props) => <Music {...(props as any)} />,
    "audio-ripping": (props) => <Disc {...(props as any)} />,
    "audio-torrenting": (props) => <Magnet {...(props as any)} />,
    "royalty-free-music": (props) => <PlayCircle {...(props as any)} />,
    "media-soundtracks": (props) => <Clapperboard {...(props as any)} />,
    "tracking-databases": (props) => <Database {...(props as any)} />,
    "audio-tools": (props) => <Wrench {...(props as any)} />,
    "audio-editing": (props) => <Scissors {...(props as any)} />
};

export const defaultIcon = (props: SVGProps<SVGSVGElement>) => <Activity {...(props as any)} />;

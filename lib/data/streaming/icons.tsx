import { 
    Activity, 
    FilmIcon, 
    StarIcon, 
    TvIcon, 
    MonitorPlayIcon, 
    DownloadIcon, 
    CpuIcon, 
    MagnetIcon, 
    DatabaseIcon, 
    LanguagesIcon, 
    WrenchIcon 
} from "lucide-react";
import type { SVGProps, ReactNode } from "react";

export const icons: Record<string, (props: SVGProps<SVGSVGElement>) => ReactNode> = {
    "streaming-sites": (props) => <FilmIcon {...(props as any)} />,
    "specialty-streaming": (props) => <StarIcon {...(props as any)} />,
    "live-tv-sports": (props) => <TvIcon {...(props as any)} />,
    "smart-tv": (props) => <MonitorPlayIcon {...(props as any)} />,
    "download-sites": (props) => <DownloadIcon {...(props as any)} />,
    "torrent-apps": (props) => <CpuIcon {...(props as any)} />,
    "torrent-sites": (props) => <MagnetIcon {...(props as any)} />,
    "tracking-databases": (props) => <DatabaseIcon {...(props as any)} />,
    "subtitle-tools": (props) => <LanguagesIcon {...(props as any)} />,
    "helpful-sites-tools": (props) => <WrenchIcon {...(props as any)} />
};

export const defaultIcon = (props: SVGProps<SVGSVGElement>) => <Activity {...(props as any)} />;

import { 
    Activity, 
    Download, 
    Star, 
    Gamepad, 
    Puzzle, 
    Dices, 
    Globe 
} from "lucide-react";
import type { SVGProps, ReactNode } from "react";

export const icons: Record<string, (props: SVGProps<SVGSVGElement>) => ReactNode> = {
    "download-games": (props) => <Download {...(props as any)} />,
    "special-interest": (props) => <Star {...(props as any)} />,
    "emulation-roms": (props) => <Gamepad {...(props as any)} />,
    "puzzle-games": (props) => <Puzzle {...(props as any)} />,
    "tabletop-games": (props) => <Dices {...(props as any)} />,
    "browser-games": (props) => <Globe {...(props as any)} />
};

export const defaultIcon = (props: SVGProps<SVGSVGElement>) => <Activity {...(props as any)} />;

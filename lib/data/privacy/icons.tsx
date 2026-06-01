import { 
    Activity, 
    ShieldAlert, 
    ShieldCheck, 
    Lock, 
    EyeOff, 
    Network, 
    Server 
} from "lucide-react";
import type { SVGProps, ReactNode } from "react";

export const icons: Record<string, (props: SVGProps<SVGSVGElement>) => ReactNode> = {
    "adblocking": (props) => <ShieldAlert {...(props as any)} />,
    "antivirus-anti-malware": (props) => <ShieldCheck {...(props as any)} />,
    "privacy-security": (props) => <Lock {...(props as any)} />,
    "web-privacy": (props) => <EyeOff {...(props as any)} />,
    "vpn": (props) => <Network {...(props as any)} />,
    "proxy": (props) => <Server {...(props as any)} />
};

export const defaultIcon = (props: SVGProps<SVGSVGElement>) => <Activity {...(props as any)} />;

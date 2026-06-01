import { 
    Cloud, 
    Layers, 
    Database, 
    Wrench, 
    GitBranch, 
    Code, 
    Activity,
    Shield,
    Server
} from "lucide-react";
import type { SVGProps, ReactNode } from "react";

export const icons: Record<string, (props: SVGProps<SVGSVGElement>) => ReactNode> = {
    "hosting": (props) => <Cloud {...(props as any)} />,
    "frameworks": (props) => <Layers {...(props as any)} />,
    "databases": (props) => <Database {...(props as any)} />,
    "dev-utilities": (props) => <Wrench {...(props as any)} />,
    "version-control": (props) => <GitBranch {...(props as any)} />,
    "editors": (props) => <Code {...(props as any)} />,
    "monitoring": (props) => <Activity {...(props as any)} />,
    "security": (props) => <Shield {...(props as any)} />
};

export const defaultIcon = (props: SVGProps<SVGSVGElement>) => <Server {...(props as any)} />;

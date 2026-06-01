import { 
    LayoutTemplate, 
    Image, 
    Palette, 
    Type, 
    Lightbulb, 
    Presentation, 
    Package,
    AppWindow
} from "lucide-react";
import type { SVGProps, ReactNode } from "react";

export const icons: Record<string, (props: SVGProps<SVGSVGElement>) => ReactNode> = {
    "ui-ux-design": (props) => <LayoutTemplate {...(props as any)} />,
    "graphics-illustrations": (props) => <Image {...(props as any)} />,
    "colors-gradients": (props) => <Palette {...(props as any)} />,
    "typography": (props) => <Type {...(props as any)} />,
    "inspiration": (props) => <Lightbulb {...(props as any)} />,
    "mockups-presentation": (props) => <Presentation {...(props as any)} />,
    "assets-toolkits": (props) => <Package {...(props as any)} />
};

export const defaultIcon = (props: SVGProps<SVGSVGElement>) => <AppWindow {...(props as any)} />;

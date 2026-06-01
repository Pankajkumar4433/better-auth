import { 
    Activity, 
    Book, 
    Star, 
    Headphones, 
    Image, 
    GraduationCap, 
    FileText, 
    Compass, 
    Database, 
    Wrench 
} from "lucide-react";
import type { SVGProps, ReactNode } from "react";

export const icons: Record<string, (props: SVGProps<SVGSVGElement>) => ReactNode> = {
    "ebooks": (props) => <Book {...(props as any)} />,
    "special-interest": (props) => <Star {...(props as any)} />,
    "audiobooks": (props) => <Headphones {...(props as any)} />,
    "visual-media": (props) => <Image {...(props as any)} />,
    "educational-books": (props) => <GraduationCap {...(props as any)} />,
    "documents-articles": (props) => <FileText {...(props as any)} />,
    "esoteric-cultural": (props) => <Compass {...(props as any)} />,
    "tracking-database": (props) => <Database {...(props as any)} />,
    "helpful-sites-apps": (props) => <Wrench {...(props as any)} />
};

export const defaultIcon = (props: SVGProps<SVGSVGElement>) => <Activity {...(props as any)} />;

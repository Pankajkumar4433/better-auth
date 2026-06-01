import { 
    Activity, 
    Film, 
    GraduationCap, 
    BookOpen, 
    FlaskConical, 
    Rocket, 
    Landmark, 
    Library, 
    Hammer, 
    Languages, 
    Code, 
    Pencil, 
    PenTool 
} from "lucide-react";
import type { SVGProps, ReactNode } from "react";

export const icons: Record<string, (props: SVGProps<SVGSVGElement>) => ReactNode> = {
    "documentaries": (props) => <Film {...(props as any)} />,
    "courses": (props) => <GraduationCap {...(props as any)} />,
    "learning-sites": (props) => <BookOpen {...(props as any)} />,
    "science-math": (props) => <FlaskConical {...(props as any)} />,
    "space": (props) => <Rocket {...(props as any)} />,
    "history": (props) => <Landmark {...(props as any)} />,
    "humanities": (props) => <Library {...(props as any)} />,
    "skills-hobbies-diy": (props) => <Hammer {...(props as any)} />,
    "language-learning": (props) => <Languages {...(props as any)} />,
    "developer-learning": (props) => <Code {...(props as any)} />,
    "exam-prep": (props) => <Pencil {...(props as any)} />,
    "educational-tools": (props) => <PenTool {...(props as any)} />
};

export const defaultIcon = (props: SVGProps<SVGSVGElement>) => <Activity {...(props as any)} />;

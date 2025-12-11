import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority"; // Need to add cva if I use it, but keeping it simple for now without extra dependency if not needed. 
// Actually I don't have cva installed. I will just use simple props.

interface BadgeProps {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "secondary" | "outline";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
    const variants = {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "text-foreground border border-input hover:bg-accent hover:text-accent-foreground"
    };

    return (
        <span className={cn(
            "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
            variants[variant],
            className
        )}>
            {children}
        </span>
    );
}

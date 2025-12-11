import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
}

export function Card({ children, className }: CardProps) {
    return (
        <div
            className={cn(
                "bg-card text-card-foreground rounded-xl border p-6 shadow-sm",
                "hover:shadow-md transition-shadow duration-300",
                className
            )}
        >
            {children}
        </div>
    );
}

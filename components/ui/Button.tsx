import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline" | "ghost";
    size?: "default" | "sm" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", ...props }, ref) => {

        // Simple variant mapping without class-variance-authority
        const getVariantClass = (v: string) => {
            switch (v) {
                case "outline": return "border border-input bg-background hover:bg-accent hover:text-accent-foreground";
                case "ghost": return "hover:bg-accent hover:text-accent-foreground";
                default: return "bg-primary text-primary-foreground hover:bg-primary/90";
            }
        }

        const getSizeClass = (s: string) => {
            switch (s) {
                case "sm": return "h-9 rounded-md px-3";
                case "lg": return "h-11 rounded-md px-8";
                default: return "h-10 px-4 py-2";
            }
        }

        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                    getVariantClass(variant),
                    getSizeClass(size),
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

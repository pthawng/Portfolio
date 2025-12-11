"use client";

import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { INFO } from "@/lib/data";

export function Footer() {
    const { t } = useLanguage();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative border-t py-8 text-sm text-muted-foreground bg-background/50 backdrop-blur-sm mt-12">
            <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 px-4">
                <p>&copy; {new Date().getFullYear()} {INFO.name}. {t.footer.rights}</p>

                <button
                    onClick={scrollToTop}
                    className="group flex items-center gap-2 rounded-full border bg-background px-4 py-2 hover:bg-accent transition-colors"
                >
                    <span className="text-xs font-medium">{t.footer.backToTop}</span>
                    <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
                </button>
            </div>
        </footer>
    );
}

"use client"

import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/Button"

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage()

    return (
        <Button
            variant="ghost"
            size="sm"
            className="w-12 px-0 font-bold"
            onClick={() => setLanguage(language === "en" ? "vi" : "en")}
        >
            {language.toUpperCase()}
        </Button>
    )
}

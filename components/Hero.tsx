"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { INFO, SOCIALS } from "@/lib/data";
import { useLanguage } from "@/context/language-context";

export function Hero() {
    const { t } = useLanguage();

    return (
        <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center overflow-hidden">

            {/* Background blobs for premium feel - Adjusted for Light/Dark in Layout but keeping subtle local ones if needed, or rely on global layout */}
            <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-primary/20 blur-[100px] -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-purple-500/20 blur-[100px] -z-10 animate-pulse delay-1000" />

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="mb-8"
            >
                <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-primary to-purple-600 text-5xl font-bold text-white shadow-2xl ring-4 ring-background/50 backdrop-blur-sm">
                    {INFO.name.charAt(0)}
                </div>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6 text-5xl font-extrabold tracking-tighter sm:text-7xl md:text-8xl"
            >
                <span className="bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">{INFO.name}</span>
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mb-4 text-2xl font-semibold text-foreground/80"
            >
                {t.hero.role}
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-10 max-w-2xl text-xl text-muted-foreground sm:text-2xl leading-relaxed"
            >
                {t.hero.about}
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex gap-6"
            >
                {SOCIALS.map((social) => (
                    <Link
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        className="group relative flex items-center justify-center rounded-full bg-muted/50 p-4 text-muted-foreground transition-all hover:bg-primary hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
                    >
                        <social.icon className="h-6 w-6" />
                        <span className="sr-only">{social.name}</span>
                    </Link>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 animate-bounce cursor-pointer"
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <ArrowDown className="h-8 w-8 text-muted-foreground/50 hover:text-primary transition-colors" />
            </motion.div>
        </section>
    );
}

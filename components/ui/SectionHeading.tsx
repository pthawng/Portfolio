"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
    return (
        <div className={`mb-12 text-center ${className}`}>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mt-4 text-lg text-muted-foreground"
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
}

"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { Badge } from "./ui/Badge";
import { Card } from "./ui/Card";
import { useLanguage } from "@/context/language-context";
import { Code2, Database, Layout, Lightbulb, Settings, Terminal } from "lucide-react";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

// Map categories to icons
const getIcon = (category: string) => {
    if (category.includes("Language")) return <Code2 className="h-6 w-6 text-blue-500" />;
    if (category.includes("Frontend")) return <Layout className="h-6 w-6 text-purple-500" />;
    if (category.includes("Backend")) return <Database className="h-6 w-6 text-green-500" />;
    if (category.includes("Concepts")) return <Lightbulb className="h-6 w-6 text-yellow-500" />;
    return <Terminal className="h-6 w-6 text-gray-500" />;
};

export function Skills() {
    const { t } = useLanguage();

    return (
        <section id="skills" className="py-24 px-4 relative">
            {/* Decorative background element specific to section */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 blur-[80px] rounded-full -z-10" />

            <div className="container mx-auto max-w-5xl">
                <SectionHeading title={t.skills.title} subtitle={t.skills.subtitle} />

                <div className="grid gap-6 md:grid-cols-2">
                    {SKILLS.map((category: { category: string; items: string[] }, idx: number) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <Card className="h-full bg-white/70 dark:bg-slate-900/50 backdrop-blur-md border border-blue-200/50 dark:border-white/10 overflow-hidden group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 shadow-sm">
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-3 rounded-xl bg-muted/50 group-hover:bg-primary/10 transition-colors">
                                            {getIcon(category.category)}
                                        </div>
                                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 group-hover:from-primary group-hover:to-purple-500 transition-all">
                                            {category.category}
                                        </h3>
                                    </div>

                                    <motion.div
                                        variants={container}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true }}
                                        className="flex flex-wrap gap-2"
                                    >
                                        {category.items.map((skill: string) => (
                                            <motion.div key={skill} variants={item}>
                                                <Badge
                                                    variant="secondary"
                                                    className="bg-muted/50 hover:bg-primary hover:text-white transition-colors duration-300 px-3 py-1.5 text-sm font-medium border border-transparent hover:border-primary/20 cursor-default"
                                                >
                                                    {skill}
                                                </Badge>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </div>

                                {/* Decorative glow bar at bottom */}
                                <div className="h-1 w-0 bg-gradient-to-r from-primary to-purple-600 transition-all duration-500 group-hover:w-full" />
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

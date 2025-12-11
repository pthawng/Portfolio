"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/language-context";

export function Projects() {
    const { t } = useLanguage();
    const projects = t.projects.list;

    return (
        <section id="projects" className="py-24 px-4 relative">
            {/* Decorative bg */}
            <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-background via-background to-transparent -z-10" />

            <div className="container mx-auto max-w-6xl">
                <SectionHeading title={t.projects.title} subtitle={t.projects.subtitle} />

                {/* Changed grid to simple 2-col for better balance with 2 items */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group h-full"
                        >
                            <Card className="h-full flex flex-col overflow-hidden border border-white/20 bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">

                                {/* Image Placeholder Area */}
                                <div className="relative h-56 w-full overflow-hidden">
                                    {/* Gradient Background instead of solid color */}
                                    <div className={cn(
                                        "absolute inset-0 bg-gradient-to-br transition-transform duration-700 group-hover:scale-110",
                                        index % 2 === 0 ? "from-blue-600/20 via-primary/20 to-purple-600/20" : "from-emerald-500/20 via-teal-500/20 to-cyan-500/20"
                                    )} />

                                    {/* Pattern Overlay */}
                                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />

                                    {/* Central Icon/Text */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                                        <FolderGit2 className="w-12 h-12 mb-2 opacity-50" />
                                        <span className="font-semibold tracking-wider uppercase text-sm">Project Preview</span>
                                    </div>

                                    {/* Hover Overlay with Actions */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                                        <Link href={project.link} className="p-3 bg-white text-black rounded-full hover:bg-primary hover:text-white transition-all transform hover:scale-110 shadow-lg">
                                            <ExternalLink size={20} />
                                        </Link>
                                        <Link href={project.github} className="p-3 bg-white text-black rounded-full hover:bg-primary hover:text-white transition-all transform hover:scale-110 shadow-lg">
                                            <Github size={20} />
                                        </Link>
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed flex-grow">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map((tag) => (
                                            <Badge
                                                key={tag}
                                                variant="secondary"
                                                className="bg-secondary/50 border border-transparent hover:border-primary/30 transition-colors"
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

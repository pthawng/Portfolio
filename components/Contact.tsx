
"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, User, Loader2 } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "./ui/SectionHeading";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { useLanguage } from "@/context/language-context";
import { SOCIALS } from "@/lib/data";
import { cn } from "@/lib/utils";

// Improved UI Components locally
function ContactInput({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            className={cn(
                "flex h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 hover:bg-white/10 dark:hover:bg-white/10 text-foreground",
                className
            )}
            {...props}
        />
    )
}

function ContactTextarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <textarea
            className={cn(
                "flex min-h-[150px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 hover:bg-white/10 dark:hover:bg-white/10 text-foreground resize-none",
                className
            )}
            {...props}
        />
    )
}

export function Contact() {
    const { t } = useLanguage();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Store form reference before async operations
        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to send message");
            }

            setIsSuccess(true);
            form.reset();
            setTimeout(() => setIsSuccess(false), 5000);
        } catch (error) {
            console.error("Error sending message:", error);
            alert(error instanceof Error ? error.message : t.contact.form.error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 px-4 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto max-w-6xl">
                <SectionHeading title={t.contact.title} subtitle={t.contact.subtitle} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">

                    {/* LEFT COLUMN: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                                Let&apos;s Work Together
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                {t.contact.text}
                            </p>
                        </div>

                        <div className="space-y-6">
                            <Card className="p-5 flex items-center gap-5 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/10 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <Mail size={22} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Email</p>
                                    <a href={`mailto:${t.contact.info.email}`} className="text-lg font-semibold hover:text-primary transition-colors">
                                        {t.contact.info.email}
                                    </a>
                                </div>
                            </Card>

                            <Card className="p-5 flex items-center gap-5 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/10 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <Phone size={22} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Phone</p>
                                    <p className="text-lg font-semibold">{t.contact.info.phone}</p>
                                </div>
                            </Card>

                            <Card className="p-5 flex items-center gap-5 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-white/10 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 group">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <MapPin size={22} />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Location</p>
                                    <p className="text-lg font-semibold">{t.contact.info.address}</p>
                                </div>
                            </Card>
                        </div>

                        <div className="pt-6 flex gap-4">
                            {SOCIALS.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-background border border-border hover:bg-primary hover:text-white hover:border-primary transition-all hover:scale-110 shadow-sm"
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Card className="p-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/20 shadow-2xl h-full relative overflow-hidden">
                            {/* Subtle top sheen */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid gap-2">
                                    <label htmlFor="name" className="text-sm font-semibold text-foreground/80 ml-1">
                                        {t.contact.form.name}
                                    </label>
                                    <div className="relative group">
                                        <User className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                        <ContactInput id="name" name="name" placeholder="John Doe" className="pl-12" required />
                                    </div>
                                </div>

                                <div className="grid gap-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-foreground/80 ml-1">
                                        {t.contact.form.email}
                                    </label>
                                    <div className="relative group">
                                        <Mail className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                        <ContactInput id="email" name="email" type="email" placeholder="john@example.com" className="pl-12" required />
                                    </div>
                                </div>

                                <div className="grid gap-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-foreground/80 ml-1">
                                        {t.contact.form.message}
                                    </label>
                                    <ContactTextarea id="message" name="message" placeholder="Hello, I'd like to discuss a project..." required />
                                </div>

                                <Button
                                    className="w-full h-14 text-lg font-bold shadow-lg shadow-primary/25 rounded-xl hover:scale-[1.02] transition-transform"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : isSuccess ? (
                                        <span className="text-green-500 flex items-center justify-center gap-2">
                                            {t.contact.form.success}
                                        </span>
                                    ) : (
                                        <>
                                            <Send className="mr-2 h-5 w-5" />
                                            {t.contact.form.btn}
                                        </>
                                    )}
                                </Button>
                            </form>
                        </Card>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

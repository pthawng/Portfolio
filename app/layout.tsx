import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/context/language-context";
import { Metadata as NextMetadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: NextMetadata = {
    title: "Ray Paradis | Full Stack Developer",
    description: "Portfolio of Ray Paradis, a Full Stack Developer specializing in Next.js and Modern Web Design.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark scroll-pt-24" suppressHydrationWarning>
            {/* Added !bg-transparent to body to let fixed backgrounds show through */}
            <body className={cn(inter.className, "min-h-screen !bg-transparent text-foreground antialiased relative selection:bg-primary/30")}>
                <LanguageProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="dark"
                        enableSystem
                        disableTransitionOnChange
                    >
                        {/* THEME BACKGROUNDS */}

                        {/* 1. DARK MODE: Starry Night */}
                        <div className="fixed inset-0 -z-50 hidden dark:block bg-[#0f172a] transition-colors duration-500 overflow-hidden">
                            {/* Base gradient */}
                            <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#1e1b4b]"></div>

                            {/* Stars Layer 1 (Small) */}
                            <div className="absolute inset-0 bg-[url('/stars.svg')] opacity-30 animate-[twinkle_5s_infinite_ease-in-out]"></div>

                            {/* Stars Layer 2 (Larger/Offset) */}
                            <div className="absolute inset-0 bg-[url('/stars.svg')] opacity-50 bg-[length:300px_300px] animate-[twinkle_7s_infinite_ease-in-out_1s]"></div>

                            {/* Shooting Star */}
                            <div className="absolute top-[10%] right-[10%] w-1 h-1 bg-white shadow-[0_0_20px_2px_#fff] rounded-full animate-shooting-star"></div>

                            {/* Nebula Glow */}
                            <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-purple-900/20 blur-[100px] rounded-full"></div>
                        </div>

                        {/* 2. LIGHT MODE: Sunny Day */}
                        <div className="fixed inset-0 -z-50 dark:hidden bg-blue-50 transition-colors duration-500 overflow-hidden">
                            {/* Sky Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-sky-100 to-white"></div>

                            {/* The Sun */}
                            <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px]">
                                <div className="w-full h-full bg-yellow-300/30 blur-[80px] rounded-full animate-pulse"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-[300px] h-[300px] bg-yellow-400/20 blur-[50px] rounded-full"></div>
                                </div>
                            </div>

                            {/* RAINBOW EFFECT */}
                            <div className="absolute top-[10%] left-[-10%] w-[80%] h-[50%] opacity-40 blur-[60px] animate-pulse">
                                <div className="w-full h-full rounded-full bg-gradient-to-r from-red-400/30 via-yellow-400/30 via-green-400/30 via-blue-400/30 to-purple-400/30 rotate-12 transform origin-bottom-left"></div>
                            </div>

                            {/* Floating Clouds (CSS Shapes) */}
                            <div className="absolute top-[20%] left-[10%] w-32 h-12 bg-white/60 blur-xl rounded-full animate-float"></div>
                            <div className="absolute top-[40%] right-[20%] w-48 h-16 bg-white/40 blur-xl rounded-full animate-[float_8s_infinite_ease-in-out_2s]"></div>
                        </div>

                        <Header />
                        {children}
                    </ThemeProvider>
                </LanguageProvider>
            </body>
        </html>
    );
}

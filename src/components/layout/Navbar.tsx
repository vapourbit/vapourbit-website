"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "SERVICES", href: "#services" },
    { name: "WORK", href: "#portfolio" },
    { name: "PROCESS", href: "#process" },
    { name: "TECH", href: "#tech-stack" },
    { name: "CONTACT", href: "#contact" },
];
export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const navLinks = [
        { name: "SERVICES", href: "#services" },
        { name: "WORK", href: "#work" },
        { name: "PROCESS", href: "#process" },
        { name: "TECH", href: "#tech" },
        { name: "CONTACT", href: "#contact" },
    ];

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const elem = document.getElementById(targetId);

        if (elem) {
            const navbarHeight = 80;
            const elementPosition = elem.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight;
            const startPosition = window.pageYOffset;
            const distance = offsetPosition - startPosition;
            const duration = 1000; // 1 second explicitly
            let start: number | null = null;

            function animation(currentTime: number) {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const progress = Math.min(timeElapsed / duration, 1);

                // Ease-in-out quintic function for "butter smooth" feel
                const ease = progress < 0.5
                    ? 16 * progress * progress * progress * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 5) / 2;

                window.scrollTo(0, startPosition + distance * ease);

                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                }
            }

            requestAnimationFrame(animation);

            // Close mobile menu if open
            setIsMobileMenuOpen(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Calculate scroll progress for the top bar
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            setScrollProgress(scrolled);

            // Sticky Shrinking Logic
            if (currentScrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-in-out border-b border-transparent",
                    isScrolled
                        ? "h-[60px] py-3 bg-[#0a0a0f]/95 backdrop-blur-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.5)] border-white/10"
                        : "h-[80px] py-6 bg-transparent"
                )}
            >
                {/* Scroll Progress Bar */}
                <div
                    className="absolute top-0 left-0 h-[2px] bg-vapor-cyan shadow-[0_0_10px_rgba(0,212,255,0.7)] z-50 transition-all duration-100 ease-out"
                    style={{ width: `${scrollProgress}%` }}
                />

                <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center transition-all duration-400 ease-in-out">
                    {/* Logo */}
                    <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="relative group z-50 flex items-center">
                        <span
                            className={cn(
                                "font-orbitron font-bold text-white tracking-wider group-hover:text-vapor-cyan transition-all duration-400 ease-in-out",
                                isScrolled ? "text-xl scale-85 origin-left" : "text-2xl"
                            )}
                        >
                            VAPOURBIT
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className={cn(
                        "hidden md:flex items-center transition-all duration-400 ease-in-out",
                        isScrolled ? "gap-6" : "gap-8"
                    )}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-vapor-cyan transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            href="#contact"
                            onClick={(e) => handleLinkClick(e, "#contact")}
                        >
                            <button
                                className={cn(
                                    "rounded-full bg-gradient-to-r from-vapor-cyan to-vapor-blue text-black font-bold tracking-wider hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:scale-105 transition-all duration-400 ease-in-out",
                                    isScrolled ? "px-5 py-2 text-xs" : "px-6 py-2.5 text-sm"
                                )}
                            >
                                LET'S TALK
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden z-50 flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={cn(
                                "text-white transition-all duration-400",
                                isScrolled ? "scale-90" : "scale-100"
                            )}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className="text-2xl font-orbitron font-bold text-white hover:text-vapor-cyan transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button
                            onClick={(e) => {
                                setIsMobileMenuOpen(false);
                                handleLinkClick(e as any, "#contact");
                            }}
                            className="mt-4 px-8 py-3 rounded-full bg-vapor-cyan text-black font-bold tracking-wider"
                        >
                            LET'S TALK
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

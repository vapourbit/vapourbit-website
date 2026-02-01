"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import dynamic from "next/dynamic";

const LiquidBackground = dynamic(() => import("./2d/LiquidBackground"), { ssr: false });


gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const title = "VAPOURBIT";
    const tagline = "INNOVATIVE SOFTWARE SOLUTIONS & WEB DEVELOPMENT";

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#000000]"
        >
            {/* 1. Interactive Liquid Fluid Background */}
            <div className="absolute inset-0 z-0">
                <LiquidBackground />
            </div>

            {/* 2. Grain/Noise Overlay (Preserved for texture) */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            {/* Content */}
            <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto flex flex-col items-center">

                {/* Massive Typography */}
                <h1 className="font-orbitron font-bold text-5xl md:text-8xl lg:text-[140px] leading-[0.9] tracking-tighter text-white mb-6">
                    {title.split("").map((char, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 100, rotateX: 90 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.05 }}
                            className="inline-block"
                        >
                            {char}
                        </motion.span>
                    ))}
                </h1>

                {/* Tagline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="mb-12"
                >
                    <p className="text-vapor-cyan font-inter font-medium tracking-[0.2em] text-xs md:text-lg uppercase">
                        {tagline}
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.8 }}
                    className="flex flex-col md:flex-row gap-6"
                >
                    <Link href="/discover">
                        <button className="px-10 py-4 border-2 border-white text-white font-bold uppercase tracking-wider rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
                            Discover More
                        </button>
                    </Link>
                    <Link href="#work" className="scroll-smooth-link">
                        <button className="px-10 py-4 bg-transparent text-gray-300 font-bold uppercase tracking-wider rounded-full hover:text-vapor-cyan transition-colors duration-300 flex items-center gap-2 group">
                            View Our Work
                            <span className="block h-[1px] w-8 bg-gray-300 group-hover:w-12 group-hover:bg-vapor-cyan transition-all" />
                        </button>
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-vapor-cyan to-transparent animate-pulse" />
            </motion.div>

            {/* Stats Overlay Bottom */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-black/40 backdrop-blur-sm py-4 z-20 hidden md:block" // Hidden on mobile to save space
            >
                <div className="max-w-7xl mx-auto flex justify-around items-center text-[10px] md:text-xs font-mono text-gray-400 tracking-widest uppercase">
                    <span>100+ Projects Delivered</span>
                    <span className="text-vapor-cyan">•</span>
                    <span>10x Faster Development</span>
                    <span className="text-vapor-cyan">•</span>
                    <span>24/7 Support</span>
                    <span className="text-vapor-cyan">•</span>
                    <span>99% Client Satisfaction</span>
                </div>
            </motion.div>
        </section>
    );
}

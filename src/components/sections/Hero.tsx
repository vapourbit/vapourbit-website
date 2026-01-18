"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Any specific GSAP triggers if needed, currently handling via Framer Motion
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const title = "VAPOURBIT";
    const tagline = "INNOVATIVE SOFTWARE SOLUTIONS & WEB DEVELOPMENT";

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden"
        >
            {/* Background Gradients */}
            <motion.div
                className="absolute inset-0 bg-vapor-dark"
                style={{ y: y1 }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vapor-blue/20 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[10s]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-vapor-cyan/10 rounded-full blur-[100px] mix-blend-screen translate-x-20 -translate-y-20 animate-pulse duration-[7s]" />
            </motion.div>

            {/* Noise Overlay */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                {/* Main Title */}
                <h1 ref={textRef} className="font-orbitron font-bold text-6xl md:text-8xl lg:text-[10rem] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-6">
                    {title.split("").map((char, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                            className="inline-block"
                        >
                            {char}
                        </motion.span>
                    ))}
                </h1>

                {/* Tagline */}
                <div className="overflow-hidden mb-12">
                    <motion.p
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                        className="text-vapor-cyan/80 font-inter tracking-[0.2em] text-sm md:text-base uppercase"
                    >
                        {tagline}
                    </motion.p>
                </div>

                {/* CTA Button */}
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider rounded-full hover:bg-vapor-cyan transition-colors duration-300"
                >
                    Discover More
                </motion.button>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <span className="text-[10px] uppercase tracking-widest text-white/50">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="w-[1px] h-12 bg-gradient-to-b from-vapor-cyan to-transparent"
                />
            </motion.div>
        </section>
    );
}

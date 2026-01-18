"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function CTA() {
    return (
        <section className="py-40 px-6 relative z-10 overflow-hidden flex flex-col items-center justify-center text-center">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-vapor-dark to-vapor-blue/20" />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] animate-pulse" /> {/* Fallback noise if file missing, handled by CSS usually */}

            <motion.h2
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-12 relative z-20"
            >
                Ready to build something <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-vapor-cyan to-vapor-blue animate-pulse">
                    extraordinary?
                </span>
            </motion.h2>

            <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-400 max-w-xl mx-auto mb-16 relative z-20 text-lg"
            >
                Let's turn your vision into a digital masterpiece. Schedule a free consultation today.
            </motion.p>

            <div className="relative z-20">
                <Link href="mailto:hello@vaporbit.com">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-5 bg-vapor-cyan text-black font-orbitron font-bold text-lg rounded-full shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:shadow-[0_0_50px_rgba(0,212,255,0.6)] transition-all duration-300"
                    >
                        START YOUR PROJECT
                    </motion.button>
                </Link>
            </div>
        </section>
    );
}

"use client";
import { motion } from "framer-motion";

const items = [
    "10+ PROJECTS DELIVERED",
    "10x FASTER DEVELOPMENT",
    "$50M+ CLIENT REVENUE GENERATED",
    "AWARD WINNING DESIGN",
    "24/7 DEDICATED SUPPORT",
];

export default function StatsMarquee() {
    return (
        <div className="py-8 bg-vapor-blue overflow-hidden relative z-20">
            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                    }}
                    className="flex gap-16 px-8"
                >
                    {[...items, ...items, ...items, ...items].map((item, i) => ( // Duplicate for seamless loop
                        <span
                            key={i}
                            className="font-orbitron text-xl md:text-2xl font-bold text-white tracking-widest uppercase opacity-90"
                        >
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

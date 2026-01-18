"use client";
import { motion } from "framer-motion";

export default function StatsMarquee() {
    const stats = [
        "100+ PROJECTS DELIVERED",
        "•",
        "10x FASTER DEVELOPMENT",
        "•",
        "24/7 SUPPORT",
        "•",
        "99% CLIENT SATISFACTION",
        "•",
        "50+ HAPPY CLIENTS",
        "•",
    ];

    return (
        <section className="relative bg-black border-y border-white/5 py-4 overflow-hidden z-20">
            <div className="flex w-full whitespace-nowrap">
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="flex gap-12 font-orbitron text-sm md:text-base font-bold tracking-widest text-[#B4B4B4] px-6 items-center"
                        animate={{ x: "-100%" }}
                        transition={{
                            duration: 30, // Slow, premium feeling
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {stats.map((stat, idx) => (
                            <span key={idx} className={stat === "•" ? "text-vapor-cyan" : ""}>
                                {stat}
                            </span>
                        ))}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

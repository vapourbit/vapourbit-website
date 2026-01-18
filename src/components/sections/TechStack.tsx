"use client";
import { motion } from "framer-motion";
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
    SiFramer, SiGreensock, SiNodedotjs, SiPython
} from "react-icons/si";

const techs = [
    { icon: SiReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiTailwindcss, name: "Tailwind" },
    { icon: SiFramer, name: "Framer" },
    { icon: SiGreensock, name: "GSAP" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiPython, name: "Python" },
];

export default function TechStack() {
    return (
        <section id="tech" className="py-20 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-vapor-blue/10 blur-[100px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto text-center relative z-20">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="font-orbitron text-4xl font-bold text-white mb-16"
                >
                    POWERED BY MODERN TECHNOLOGY
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-12 md:gap-20">
                    {techs.map((Tech, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.08, type: "spring" }}
                            whileHover={{ scale: 1.2, rotate: 5, color: "#00d4ff" }}
                            className="text-gray-500 hover:text-vapor-cyan transition-colors duration-300 flex flex-col items-center gap-4 group"
                        >
                            <Tech.icon size={50} />
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm font-bold tracking-widest">{Tech.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

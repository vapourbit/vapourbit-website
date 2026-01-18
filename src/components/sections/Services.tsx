"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    Code,
    Palette,
    Layers,
    Smartphone,
    TrendingUp,
    Network,
    ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

// Explicit grid order for perfect 3x3 layout
// Row 1: [ Web Dev (2) ] [ UI/UX (1) ]
// Row 2: [ Mobile (1, tall) ] [ Full Stack (1) ] [ API (1) ]
// Row 3: [ Mobile (cont.) ] [ Digital Strategy (2) ]

const services = [
    {
        title: "Custom Web Development",
        description: "Building scalable, high-performance web applications with cutting-edge technologies.",
        icon: Code,
        color: "#00d4ff",
        colSpan: "md:col-span-2",
        rowSpan: "md:row-span-1",
        bgGradient: "from-[#00d4ff]/20 to-transparent",
    },
    {
        title: "UI/UX Design",
        description: "Crafting intuitive, beautiful interfaces that users love.",
        icon: Palette,
        color: "#ff006e",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-1",
        bgGradient: "from-[#ff006e]/20 to-transparent",
    },
    {
        title: "Mobile App Development",
        description: "Native and cross-platform mobile apps engineered for performance and engagement on iOS and Android devices.",
        icon: Smartphone,
        color: "#00d4ff",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-2", // Tall card on left
        bgGradient: "from-[#00d4ff]/20 to-transparent",
    },
    {
        title: "Full-Stack Solutions",
        description: "Robust end-to-end solutions from database architecture to frontend mastery.",
        icon: Layers,
        color: "#8b5cf6",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-1",
        bgGradient: "from-[#8b5cf6]/20 to-transparent",
    },
    {
        title: "API Integration",
        description: "Seamless connections ensuring your systems talk to each other perfectly.",
        icon: Network,
        color: "#ff8800",
        colSpan: "md:col-span-1",
        rowSpan: "md:row-span-1",
        bgGradient: "from-[#ff8800]/20 to-transparent",
    },
    {
        title: "Digital Strategy",
        description: "Data-driven roadmaps to amplify your digital presence, optimize conversion, and accelerate growth.",
        icon: TrendingUp,
        color: "#00ff88",
        colSpan: "md:col-span-2", // Spans bottom right
        rowSpan: "md:row-span-1",
        bgGradient: "from-[#00ff88]/20 to-transparent",
    },
];

export default function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="services" className="relative py-32 bg-[#020203] text-white overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Subtle Grid */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                        backgroundSize: "40px 40px"
                    }}
                />
                {/* Noise Texture */}
                <div className="absolute inset-0 opacity-[0.07] bg-[url('/noise.png')] mix-blend-overlay" />
                {/* Ambient Glows */}
                <div className="absolute -top-[500px] left-0 w-[1000px] h-[1000px] bg-vapor-cyan/10 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen" />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="mb-20 md:mb-32 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <h2 className="font-sans font-bold text-6xl md:text-[80px] leading-[0.9] tracking-tighter">
                            WHAT WE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-cyan-400 to-blue-500">
                                CREATE
                            </span>
                        </h2>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "120px" }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                            className="mt-8 h-2 bg-[#00d4ff]"
                        />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-md text-lg leading-relaxed"
                    >
                        We blend technical excellence with award-winning design to build digital products that define the future.
                    </motion.p>
                </div>

                {/* Asymmetric Bento Grid */}
                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-flow-row-dense">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
                                whileHover={{ y: -8, scale: 1.01 }}
                                className={cn(
                                    "group relative flex flex-col justify-between rounded-[32px] p-8 md:p-10",
                                    "bg-[#0f0f16]/60 backdrop-blur-2xl border border-white/5",
                                    "overflow-hidden hover:z-10", // Fix for corner bleed and stacking context
                                    "transition-all duration-500 ease-out",
                                    "hover:border-white/20 hover:shadow-[0_20px_40px_-15px_rgba(0,212,255,0.15)]",
                                    service.colSpan,
                                    service.rowSpan
                                )
                                }
                            >
                                {/* Vivid Hover Glow Gradient */}
                                <div className={cn(
                                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none",
                                    "bg-gradient-to-br",
                                    service.bgGradient
                                )} />

                                {/* Inner Border Highlight for Glass Effect */}
                                <div className="absolute inset-0 rounded-[32px] border border-white/10 pointer-events-none" />

                                <div className="relative z-10 flex flex-col h-full justify-between">
                                    {/* Top Section: Icon & Index */}
                                    <div className="flex justify-between items-start mb-8">
                                        <div
                                            className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors duration-300"
                                            style={{ boxShadow: `0 0 0 1px ${service.color}20` }}
                                        >
                                            <Icon
                                                size={32}
                                                color={service.color}
                                                strokeWidth={2}
                                                className="group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <span className="text-white/10 font-mono text-xl font-bold tracking-widest group-hover:text-white/30 transition-colors">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    {/* Bottom Section: Content */}
                                    <div className="space-y-4">
                                        <h3 className="text-3xl font-bold text-white group-hover:text-[#00d4ff] transition-colors duration-300">
                                            {service.title}
                                        </h3>

                                        <p className="text-[#888899] text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                                            {service.description}
                                        </p>

                                        <div className="pt-4 flex items-center gap-3 text-[#00d4ff] font-bold text-sm tracking-wider uppercase opacity-80 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                                            <span>Explore</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

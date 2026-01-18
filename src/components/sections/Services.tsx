"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Palette, Layers, Smartphone, TrendingUp, Network } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        title: "Custom Web Development",
        description: "Building scalable, high-performance web applications with cutting-edge technologies.",
        icon: <Code className="w-8 h-8 text-vapor-cyan" />,
        colSpan: "md:col-span-2",
        bgGradient: "from-vapor-blue/10 to-transparent",
    },
    {
        title: "UI/UX Design",
        description: "Crafting intuitive, beautiful interfaces that users love and convert.",
        icon: <Palette className="w-8 h-8 text-[#ff006e]" />,
        colSpan: "md:col-span-1",
        bgGradient: "from-[#ff006e]/10 to-transparent",
    },
    {
        title: "Full-Stack Solutions",
        description: "End-to-end development from database to frontend with seamless integration.",
        icon: <Layers className="w-8 h-8 text-[#8b5cf6]" />,
        colSpan: "md:col-span-1",
        bgGradient: "from-[#8b5cf6]/10 to-transparent",
    },
    {
        title: "Mobile Apps",
        description: "Responsive, mobile-first applications that work perfectly on any device.",
        icon: <Smartphone className="w-8 h-8 text-vapor-cyan" />,
        colSpan: "md:col-span-1",
        bgGradient: "from-vapor-cyan/10 to-transparent",
    },
    {
        title: "Digital Strategy",
        description: "Strategic planning to amplify your digital presence and drive results.",
        icon: <TrendingUp className="w-8 h-8 text-green-400" />,
        colSpan: "md:col-span-1",
        bgGradient: "from-green-400/10 to-transparent",
    },
    {
        title: "API Integration",
        description: "Seamless third-party integrations and custom API development.",
        icon: <Network className="w-8 h-8 text-orange-400" />,
        colSpan: "md:col-span-2", // Make this span 2 columns to balance the grid if needed, or keeping it 1 for asymmetrical feel. Let's try 2 for balance at bottom.
        bgGradient: "from-orange-400/10 to-transparent",
    },
];

export default function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="services" className="relative py-32 bg-[#050508] text-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-orbitron text-5xl md:text-7xl font-bold mb-6"
                    >
                        WHAT WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-vapor-cyan to-vapor-blue">CREATE</span>
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100px" }}
                        viewport={{ once: true }}
                        className="h-1 bg-vapor-cyan"
                    />
                </div>

                {/* Bento Grid */}
                <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className={cn(
                                "group relative overflow-hidden rounded-3xl p-8 border border-white/5 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]",
                                service.colSpan
                            )}
                        >
                            {/* Hover Gradient Background */}
                            <div className={cn(
                                "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                                service.bgGradient
                            )} />

                            {/* Content */}
                            <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                                <div className="p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>

                                <div>
                                    <h3 className="font-orbitron text-2xl font-bold mb-3">{service.title}</h3>
                                    <p className="text-gray-400 leading-relaxed font-light group-hover:text-gray-200 transition-colors">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

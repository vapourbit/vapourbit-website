"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Palette, Smartphone, Zap } from "lucide-react";

const services = [
    {
        icon: <Code2 size={40} />,
        title: "Web Development",
        desc: "High-performance, scalable web applications built with modern stacks like React, Next.js, and Node.js.",
    },
    {
        icon: <Palette size={40} />,
        title: "UI/UX Design",
        desc: "User-centric design that creates seamless and engaging brand experiences across all digital touchpoints.",
    },
    {
        icon: <Smartphone size={40} />,
        title: "Mobile Apps",
        desc: "Native and cross-platform mobile solutions for iOS and Android that deliver native performance.",
    },
    {
        icon: <Zap size={40} />,
        title: "Digital Strategy",
        desc: "Data-driven insights to guide your digital transformation journey and ensure market fit.",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-32 px-6 relative z-10 w-full max-w-7xl mx-auto">
            <div className="mb-20">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="font-orbitron text-5xl md:text-7xl font-bold text-white mb-6"
                >
                    We craft digital <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-vapor-blue to-vapor-cyan">
                        solutions that drive growth.
                    </span>
                </motion.h2>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-1 bg-vapor-cyan"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                    <ServiceCard key={index} service={service} index={index} />
                ))}
            </div>
        </section>
    );
}

function ServiceCard({ service, index }: { service: any; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group p-8 md:p-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-vapor-cyan/50 hover:bg-white/10 transition-all duration-300 cursor-pointer"
        >
            <div className="mb-6 text-vapor-cyan group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                {service.icon}
            </div>
            <h3 className="font-orbitron text-2xl font-bold text-white mb-4 group-hover:text-vapor-cyan transition-colors">
                {service.title}
            </h3>
            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">
                {service.desc}
            </p>
        </motion.div>
    );
}

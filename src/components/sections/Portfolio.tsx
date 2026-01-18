"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        title: "Nova Finance Dashboard",
        category: "FinTech / Data Visualization",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        offset: 0,
    },
    {
        title: "Luxe Retail Platform",
        category: "E-Commerce / Branding",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
        offset: 50,
    },
    {
        title: "MediConnect SaaS",
        category: "Healthcare / System Architecture",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
        offset: 0,
    },
    {
        title: "Vision AI Tool",
        category: "AI / Machine Learning",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
        offset: 50,
    },
];

export default function Portfolio() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    return (
        <section ref={containerRef} id="work" className="py-32 px-6 bg-vapor-dark relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="font-orbitron text-5xl md:text-8xl font-bold text-white mb-24 leading-none"
                >
                    OUR <span className="text-stroke-cyan text-transparent">MASTERPIECES</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-y-32">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, project.offset - 50]);

    return (
        <motion.div
            ref={cardRef}
            style={{ y }}
            className={`group relative ${index % 2 === 1 ? "md:mt-32" : ""}`}
        >
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6 border border-white/5 group-hover:border-vapor-cyan/50 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-300 flex items-end p-8">
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        whileHover={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-vapor-cyan font-bold flex items-center gap-2"
                    >
                        View Project <span>→</span>
                    </motion.div>
                </div>

                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            <h3 className="font-orbitron text-3xl font-bold text-white mb-2 group-hover:text-vapor-cyan transition-colors">
                {project.title}
            </h3>
            <p className="text-gray-400 font-inter tracking-wide uppercase text-sm">
                {project.category}
            </p>
        </motion.div>
    );
}

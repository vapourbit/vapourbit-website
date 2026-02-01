"use client";
import React, { useState, useRef, useEffect } from "react";
import InfiniteMenu from "@/components/ui/InfiniteMenu";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Code2, Layers, Zap, ShoppingBag, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Project Data
const projects = [
    {
        id: 1,
        title: "HYUZZ",
        category: "PLATFORM",
        description: "AI-powered visual discovery engine transforming how creatives find aesthetic inspiration through mood analysis and color theory.",
        tech: ["Next.js", "TypeScript", "Tailwind", "AI"],
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop", // Abstract colorful
        link: "https://www.hyuzz.xyz",
        featured: true,
    },
    {
        id: 2,
        title: "VV HOTSPOTS",
        category: "WEB APP",
        description: "Hyper-local social discovery platform helping users find hidden gems, cafes, and hangouts with AI-generated itineraries.",
        tech: ["Next.js", "Google Maps", "Vercel", "AI"],
        image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=2662&auto=format&fit=crop", // Map/City vibe
        link: "https://vv-hotspots.vercel.app",
        featured: true,
    },
    {
        id: 3,
        title: "TRENDI PROMPTS",
        category: "AI TOOL",
        description: "Comprehensive marketplace for AI prompts, empowering creators to unlock the full potential of generative models like GPT-4 and Midjourney.",
        tech: ["Flutter", "Dart", "Firebase"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop", // AI/Abstract
        link: "https://trendi-prompts.vercel.app",
        featured: false,
    },
    {
        id: 4,
        title: "COCOA CAFE",
        category: "BRAND SITE",
        description: "Immersive digital experience for an artisanal cafe, featuring smooth interactions, elegant typography, and a warm aesthetic.",
        tech: ["React", "Tailwind", "Framer Motion"],
        image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2487&auto=format&fit=crop", // Coffee shop
        link: "https://cocoa-cafe.vercel.app",
        featured: false,
    },
    {
        id: 5,
        title: "AI WITH YOU",
        category: "AI TOOL",
        description: "Curated directory of the world's best AI tools, streamlining the discovery of cutting-edge artificial intelligence solutions.",
        tech: ["Next.js", "Algolia", "Vercel"],
        image: "https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=2564&auto=format&fit=crop", // Tech/Matrix
        link: "https://aiwithyou.vercel.app",
        featured: true, // Making this featured for the 3rd row layout
    },
];

const filters = ["All", "Web Apps", "AI Tools", "Brand Site", "Platforms"];

export default function Portfolio() {
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Map existing projects to InfiniteMenu format
    const vapourbitProjects = projects.map(p => ({
        image: p.image,
        link: p.link,
        title: p.title,
        description: p.description
    }));

    return (
        <section ref={containerRef} id="work" className="min-h-screen bg-black py-20 relative z-10 overflow-hidden">
            <div className="container mx-auto px-4 h-full flex flex-col">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 bg-vapor-cyan/10 border border-vapor-cyan/30 rounded-full text-vapor-cyan text-sm font-medium mb-4">
                        OUR MASTERPIECES
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black text-white mb-4 font-orbitron">
                        Selected <span className="text-vapor-cyan">Works</span>
                    </h2>
                </div>

                {/* Content Area */}
                <div className="flex-grow w-full h-[600px] md:h-[800px] relative">
                    {!isMobile ? (
                        <InfiniteMenu
                            items={vapourbitProjects}
                            scale={1.0}
                        />
                    ) : (
                        <div className="grid grid-cols-1 gap-8">
                            {projects.map((project, index) => (
                                <ProjectCard key={project.id} project={project} index={index} />
                            ))}
                        </div>
                    )}
                </div>

                {/* Desktop Hint */}
                {!isMobile && (
                    <div className="text-center mt-8">
                        <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
                            <span className="inline-block w-2 h-2 bg-vapor-cyan rounded-full animate-pulse"></span>
                            Drag to rotate • Click to explore
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
    const isLarge = project.featured; // Use this to span cols if needed, but for now strict 2-col or 1-col

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={cn(
                "group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-vapor-cyan/50 transition-colors duration-500",
                // Featured logic could go here, e.g., if we want the 5th item to span full width
                index === 4 ? "md:col-span-2" : ""
            )}
        >
            <Link href={project.link} target="_blank" className="block w-full h-full">
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                    <div className="absolute top-6 left-6 z-20">
                        <span className="px-3 py-1 bg-vapor-cyan text-black text-xs font-bold rounded-full uppercase tracking-wider">
                            {project.category}
                        </span>
                    </div>

                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                    {/* Custom Cursor Trigger Area (invisible) */}
                    <div className="absolute inset-0 z-10 cursor-none" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="mb-3 flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                            <span key={t} className="text-xs font-mono text-vapor-cyan/80 bg-vapor-cyan/10 px-2 py-1 rounded">
                                {t}
                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-2 font-orbitron group-hover:text-vapor-cyan transition-colors">{project.title}</h3>
                            <p className="text-gray-300 max-w-md text-sm md:text-base line-clamp-2 group-hover:text-white transition-colors">
                                {project.description}
                            </p>
                        </div>

                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-vapor-cyan group-hover:text-black transition-all duration-300 transform group-hover:rotate-45">
                            <ArrowUpRight className="w-6 h-6" />
                        </div>
                    </div>

                    <div className="mt-6 overflow-hidden h-0 group-hover:h-8 transition-all duration-300">
                        <span className="text-vapor-cyan text-sm font-bold flex items-center gap-2">
                            DISCOVER CASE STUDY <ArrowUpRight className="w-4 h-4" />
                        </span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

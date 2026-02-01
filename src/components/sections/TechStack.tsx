"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    SiNextdotjs, SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiHtml5, SiCss3,
    SiFramer, SiGreensock, SiRedux, SiVuedotjs, SiSvelte,
    SiNodedotjs, SiExpress, SiPython, SiFastify, SiGraphql,
    SiMongodb, SiPostgresql, SiMysql, SiPrisma, SiSupabase, SiFirebase, SiRedis,
    SiVercel, SiAmazonwebservices, SiGooglecloud, SiDocker, SiKubernetes, SiNetlify,
    SiOpenai, SiGithub, SiGit, SiFigma, SiStripe, SiPostman, SiJest
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { VscAzure, VscVscode } from "react-icons/vsc";
import { cn } from "@/lib/utils";

const technologies = [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React", icon: SiReact },
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss3 },
    { name: "Framer", icon: SiFramer },
    { name: "GSAP", icon: SiGreensock },
    { name: "Redux", icon: SiRedux },
    { name: "Vue.js", icon: SiVuedotjs },
    { name: "Svelte", icon: SiSvelte },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "Python", icon: SiPython },
    { name: "Fastify", icon: SiFastify },
    { name: "GraphQL", icon: SiGraphql },
    { name: "REST API", icon: FaDatabase },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MySQL", icon: SiMysql },
    { name: "Prisma", icon: SiPrisma },
    { name: "Supabase", icon: SiSupabase },
    { name: "Firebase", icon: SiFirebase },
    { name: "Redis", icon: SiRedis },
    { name: "Vercel", icon: SiVercel },
    { name: "AWS", icon: SiAmazonwebservices },
    { name: "Google Cloud", icon: SiGooglecloud },
    { name: "Azure", icon: VscAzure },
    { name: "Docker", icon: SiDocker },
    { name: "Kubernetes", icon: SiKubernetes },
    { name: "Netlify", icon: SiNetlify },
    { name: "OpenAI", icon: SiOpenai },
    { name: "GitHub", icon: SiGithub },
    { name: "Git", icon: SiGit },
    { name: "VS Code", icon: VscVscode },
    { name: "Figma", icon: SiFigma },
    { name: "Stripe", icon: SiStripe },
    { name: "Postman", icon: SiPostman },
    { name: "Jest", icon: SiJest },
];

export default function TechStack() {
    return (
        <section id="tech" className="relative py-32 bg-[#0a0a0f] overflow-hidden">
            {/* Background Noise */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-overlay">
                <div className="absolute inset-0 bg-[url('/noise.png')]" />
            </div>

            <div className="relative z-10 container mx-auto px-6 mb-24 text-center">
                <h2 className="font-orbitron font-bold text-4xl md:text-5xl tracking-widest text-white uppercase">
                    Powered by Modern Technology
                </h2>
            </div>

            {/* Infinite Scroll Carousel */}
            <div className="w-full overflow-hidden mask-gradient">
                <div className="flex w-max animate-scroll md:hover:[animation-play-state:paused]">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="flex items-start shrink-0">
                            {technologies.map((tech, index) => {
                                const Icon = tech.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group relative flex flex-col items-center justify-start mx-8 md:mx-12 min-w-[80px] cursor-pointer"
                                    >
                                        <div className="p-2 transition-transform duration-300 transform group-hover:scale-125">
                                            <Icon
                                                size={48}
                                                className="text-gray-600 transition-colors duration-300 group-hover:text-white"
                                            />
                                        </div>

                                        {/* Name Label */}
                                        <span className={cn(
                                            "absolute top-full mt-4 text-sm font-bold tracking-wider text-vapor-cyan opacity-0 transform translate-y-2 transition-all duration-300",
                                            "group-hover:opacity-100 group-hover:translate-y-0"
                                        )}>
                                            {tech.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

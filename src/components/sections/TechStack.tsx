"use client";
import React, { useState, useEffect } from "react";
import CurvedLoop from "@/components/ui/CurvedLoop";
import GridBackground from "@/components/ui/GridBackground";

export default function TechStack() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section id="tech" className="relative min-h-screen bg-[#0a0a0f] py-20 overflow-hidden flex flex-col justify-center">
            {/* Background Grid & Noise */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Noise texture with mix-blend-overlay for texture without hiding grid */}
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay z-20" />

                {/* Grid Background - fully visible now */}
                <div className="absolute inset-0 z-0 opacity-60">
                    <GridBackground />
                </div>
            </div>

            {/* Section Header */}
            <div className="container mx-auto px-4 mb-16 relative z-10">
                <div className="text-center">
                    <span className="inline-block px-4 py-2 bg-vapor-cyan/10 border border-vapor-cyan/30 rounded-full text-vapor-cyan text-sm font-medium mb-4 tracking-wider">
                        OUR ARSENAL
                    </span>
                    <h2 className="font-orbitron font-black text-5xl md:text-7xl text-white mb-4">
                        TECH <span className="text-vapor-cyan">STACK</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
                        Cutting-edge technologies powering exceptional digital experiences.
                    </p>
                </div>
            </div>

            {/* Curved Loop Marquees */}
            <div className="space-y-4 md:space-y-12 relative z-10 w-full">
                {/* Loop 1: Frontend (Cyan) */}
                <CurvedLoop
                    marqueeText="React ✦ Next.js ✦ TypeScript ✦ Tailwind CSS ✦ Three.js ✦ WebGL ✦ Framer Motion ✦ GSAP ✦ "
                    speed={isMobile ? 1.5 : 2}
                    curveAmount={isMobile ? 100 : 250}
                    direction="right"
                    interactive={!isMobile}
                    className="text-vapor-cyan font-bold drop-shadow-[0_0_10px_rgba(0,212,255,0.5)] text-[3rem] md:text-[6rem]"
                />

                {/* Loop 2: Backend (Purple) */}
                <CurvedLoop
                    marqueeText="Node.js ✦ Python ✦ Express ✦ FastAPI ✦ PostgreSQL ✦ MongoDB ✦ Redis ✦ GraphQL ✦ "
                    speed={isMobile ? 1.5 : 2.5}
                    curveAmount={isMobile ? -100 : -250}
                    direction="left"
                    interactive={!isMobile}
                    className="text-vapor-purple font-bold drop-shadow-[0_0_10px_rgba(139,92,246,0.5)] text-[3rem] md:text-[6rem]"
                />

                {/* Loop 3: Tools (Blue) - Desktop Only for now to avoid clutter, or simplified for mobile */}
                {!isMobile && (
                    <CurvedLoop
                        marqueeText="Git ✦ Docker ✦ AWS ✦ Vercel ✦ Figma ✦ WebStorm ✦ Postman ✦ GitHub Actions ✦ CI/CD ✦ "
                        speed={2}
                        curveAmount={250}
                        direction="right"
                        interactive={true}
                        className="text-blue-400 font-bold drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] text-[6rem]"
                    />
                )}
            </div>

            {/* Accessibility Alternative */}
            <div className="sr-only">
                <h3>Our Technology Stack</h3>
                <p>Frontend: React, Next.js, TypeScript, Tailwind CSS, Three.js, WebGL, Framer Motion, GSAP</p>
                <p>Backend: Node.js, Python, Express, FastAPI, PostgreSQL, MongoDB, Redis, GraphQL</p>
                <p>Tools: Git, Docker, AWS, Vercel, Figma, WebStorm, Postman, GitHub Actions, CI/CD</p>
            </div>
        </section>
    );
}

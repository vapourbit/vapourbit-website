"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const kocoaImagesRaw = [
    "/images/projects/kocoa/hero.png",
    "/images/projects/kocoa/vibe.png",
    "/images/projects/kocoa/menu.png",
    "/images/projects/kocoa/story.png",
];

const studentAppImagesRaw = [
    "/images/projects/student_app/notes.jpg",
    "/images/projects/student_app/analytics.jpg",
    "/images/projects/student_app/dashboard.jpg",
    "/images/projects/student_app/login.jpg",
];

// Duplicate the array to create a seamless loop
const kocoaImages = [...kocoaImagesRaw, ...kocoaImagesRaw, ...kocoaImagesRaw, ...kocoaImagesRaw];
const studentAppImages = [...studentAppImagesRaw, ...studentAppImagesRaw, ...studentAppImagesRaw, ...studentAppImagesRaw];

export default function DiscoverPage() {
    return (
        <main className="min-h-screen bg-vapor-dark text-white overflow-x-hidden selection:bg-vapor-cyan/30">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center mix-blend-difference">
                <Link href="/" className="flex items-center gap-2 text-white hover:text-vapor-cyan transition-colors group">
                    <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-orbitron font-bold tracking-widest">BACK</span>
                </Link>
                <span className="font-orbitron font-bold text-xl tracking-wider">VAPOURBIT</span>
            </nav>

            {/* Content Container */}
            <div className="pt-32 pb-20 w-full flex flex-col gap-24">

                {/* 1. Kocoa Restaurant Project */}
                <div>
                    <div className="max-w-7xl mx-auto px-6 mb-8">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-vapor-cyan font-bold tracking-[0.2em] uppercase text-xs mb-2"
                        >
                            Our Best Work
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="font-orbitron text-2xl md:text-4xl font-bold text-white mb-2"
                        >
                            Kocoa Restaurant
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 text-sm md:text-base font-light max-w-xl"
                        >
                            A premium e-commerce experience designed for a modern artisan cafe.
                            Blending aesthetic visuals with seamless ordering functionality.
                        </motion.p>
                    </div>

                    {/* Marquee Section */}
                    <div className="relative w-full overflow-hidden py-10">
                        <div className="absolute inset-0 bg-gradient-to-r from-vapor-dark/80 via-transparent to-vapor-dark/80 z-10 pointer-events-none w-full" />

                        {/* Sliding Track */}
                        <motion.div
                            className="flex gap-8 w-max"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 35
                            }}
                        >
                            {kocoaImages.map((src, index) => (
                                <div
                                    key={index}
                                    className="relative w-[400px] h-[250px] md:w-[500px] md:h-[320px] flex-shrink-0 rounded-2xl overflow-hidden border border-white/10 group cursor-pointer"
                                >
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                                    <Image
                                        src={src}
                                        alt={`Kocoa Project Screenshot ${index}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* 2. Student App Project */}
                <div>
                    <div className="max-w-7xl mx-auto px-6 mb-8">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-vapor-cyan font-bold tracking-[0.2em] uppercase text-xs mb-2"
                        >
                            Mobile Application
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="font-orbitron text-2xl md:text-4xl font-bold text-white mb-2"
                        >
                            Student App
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-400 text-sm md:text-base font-light max-w-xl"
                        >
                            End to end app from admin to student to parent all authorities. Comprehensive management system for modern education.
                        </motion.p>
                    </div>

                    {/* Marquee Section - Adjusted for Vertical Screenshots */}
                    <div className="relative w-full overflow-hidden py-10">
                        <div className="absolute inset-0 bg-gradient-to-r from-vapor-dark/80 via-transparent to-vapor-dark/80 z-10 pointer-events-none w-full" />

                        {/* Sliding Track (Reverse Direction for variety) */}
                        <motion.div
                            className="flex gap-8 w-max"
                            animate={{ x: ["-50%", "0%"] }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 40
                            }}
                        >
                            {studentAppImages.map((src, index) => (
                                <div
                                    key={index}
                                    className="relative w-[220px] h-[400px] md:w-[320px] md:h-[600px] flex-shrink-0 rounded-3xl overflow-hidden border border-white/10 group cursor-pointer"
                                >
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                                    <Image
                                        src={src}
                                        alt={`Student App Screenshot ${index}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

            </div>
        </main>
    );
}

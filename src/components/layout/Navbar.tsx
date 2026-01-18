"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    return (
        <motion.nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 flex justify-between items-center",
                scrolled ? "bg-black/50 backdrop-blur-md border-b border-white/5" : "bg-transparent"
            )}
            variants={{
                visible: { y: 0 },
                hidden: { y: -100 },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
        >
            <Link href="/" className="relative group">
                <span className="font-orbitron font-bold text-2xl text-white tracking-wider group-hover:text-vapor-cyan transition-colors duration-300">
                    VAPORBIT
                </span>
            </Link>

            <div className="hidden md:flex gap-8 items-center">
                {["Services", "Work", "Process", "Tech"].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-sm uppercase tracking-widest text-gray-300 hover:text-vapor-cyan transition-colors relative group"
                    >
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-vapor-cyan transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                ))}
            </div>

            <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-vapor-blue to-vapor-cyan rounded-full font-bold text-white text-sm uppercase tracking-wide hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] transition-shadow duration-300">
                Let's Talk
            </button>
        </motion.nav>
    );
}

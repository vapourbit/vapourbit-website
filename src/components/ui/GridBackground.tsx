"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface GridBackgroundProps {
    className?: string;
}

export default function GridBackground({ className }: GridBackgroundProps) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            // Get mouse position relative to the viewport
            const { clientX, clientY } = event;
            // Calculate position from the center of the screen
            const x = clientX - window.innerWidth / 2;
            const y = clientY - window.innerHeight / 2;
            setMousePosition({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            className={cn("absolute inset-0 w-full h-full overflow-hidden transition-transform duration-300 ease-out pointer-events-none", className)}
            style={{
                backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
        `,
                backgroundSize: "40px 40px",
                animation: "moveGrid 20s linear infinite",
                // Apply a subtle transform based on mouse position for a parallax effect
                transform: `translate(${mousePosition.x / 40}px, ${mousePosition.y / 40}px)`,
            }}
        >
            {/* Glow effect - increased opacity */}
            <div className="absolute top-1/2 left-1/2 w-[60vmin] h-[60vmin] bg-vapor-cyan/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 mix-blend-screen" />

            {/* Keyframes for the animation */}
            <style jsx>{`
        @keyframes moveGrid {
          0% { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }
      `}</style>
        </div>
    );
}

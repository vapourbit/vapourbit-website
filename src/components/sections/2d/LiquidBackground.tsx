"use client";

import { useEffect, useRef } from "react";

class Blob {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    color: string;
    originalX: number;
    originalY: number;
    friction: number = 0.9; // For smooth mouse interaction damping
    springFactor: number = 0.05; // Return to original position strength

    constructor(x: number, y: number, radius: number, color: string) {
        this.x = x;
        this.y = y;
        this.originalX = x;
        this.originalY = y;
        this.vx = (Math.random() - 0.5) * 1.5; // Random drifting velocity
        this.vy = (Math.random() - 0.5) * 1.5;
        this.radius = radius;
        this.color = color;
    }

    update(width: number, height: number, mouseX: number | null, mouseY: number | null) {
        // Natural drifting
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges (margin for seamless feel)
        if (this.x < -100 || this.x > width + 100) this.vx *= -1;
        if (this.y < -100 || this.y > height + 100) this.vy *= -1;

        // Mouse Attraction / Repulsion
        if (mouseX !== null && mouseY !== null) {
            const dx = mouseX - this.x;
            const dy = mouseY - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDist = 600; // Increased interaction radius for earlier response

            if (distance < maxDist) {
                // Strong attraction for low latency feel
                const force = (maxDist - distance) / maxDist;
                const angle = Math.atan2(dy, dx);

                // Significantly increased acceleration for "snappy" liquid feel
                this.vx += Math.cos(angle) * force * 2.5;
                this.vy += Math.sin(angle) * force * 2.5;
            }
        }

        // Apply friction to prevent "floating away" too much at high speeds
        this.vx *= 0.96;
        this.vy *= 0.96;

        // Limit maximum speed (increased for faster movement)
        const maxSpeed = 12; // 4x faster than before
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (speed > maxSpeed) {
            this.vx = (this.vx / speed) * maxSpeed;
            this.vy = (this.vy / speed) * maxSpeed;
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        // Create radial gradient for soft, glowing blob look
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }
}

export default function LiquidBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>(0);
    const mouseRef = useRef<{ x: number | null, y: number | null }>({ x: null, y: null });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const handleMouseMove = (e: MouseEvent) => {
            // Get position relative to canvas
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        };

        const handleMouseLeave = () => {
            mouseRef.current = { x: null, y: null };
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseleave", handleMouseLeave);

        handleResize(); // Initial setup

        // Initialize Blobs
        // Colors: Cyan, Blue, Purple, Pink
        const colors = [
            "rgba(0, 212, 255, 0.6)", // Cyan
            "rgba(26, 115, 232, 0.6)", // Blue
            "rgba(139, 92, 246, 0.6)", // Purple
            "rgba(255, 0, 110, 0.5)"   // Pink
        ];

        const blobs: Blob[] = [];
        const blobCount = 6;

        for (let i = 0; i < blobCount; i++) {
            const radius = Math.random() * 150 + 200; // 200-350px radius
            const x = Math.random() * width;
            const y = Math.random() * height;
            const color = colors[i % colors.length];
            blobs.push(new Blob(x, y, radius, color));
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Optional: Composite operation for blending
            ctx.globalCompositeOperation = "screen";

            blobs.forEach(blob => {
                blob.update(width, height, mouseRef.current.x, mouseRef.current.y);
                blob.draw(ctx);
            });

            // Restore
            ctx.globalCompositeOperation = "source-over";

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            canvas.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-full opacity-80 blur-[60px]" // High blur for metaball/liquid effect
            style={{
                background: "transparent",
            }}
        />
    );
}

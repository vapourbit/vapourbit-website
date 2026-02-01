import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                vapor: {
                    blue: "#1a73e8",
                    cyan: "#00d4ff",
                    dark: "#0a0a0f",
                },
            },
            fontFamily: {
                orbitron: ["var(--font-orbitron)"],
                inter: ["var(--font-inter)"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
            animation: {
                scroll: "scroll 40s linear infinite",
                "glitch-after": "glitch var(--after-duration) infinite linear alternate-reverse",
                "glitch-before": "glitch var(--before-duration) infinite linear alternate-reverse",
            },
            keyframes: {
                scroll: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-33.333333%)" },
                },
                glitch: {
                    "0%": { clipPath: "inset(20% 0 50% 0)" },
                    "5%": { clipPath: "inset(10% 0 60% 0)" },
                    "10%": { clipPath: "inset(15% 0 55% 0)" },
                    "15%": { clipPath: "inset(25% 0 35% 0)" },
                    "20%": { clipPath: "inset(30% 0 40% 0)" },
                    "25%": { clipPath: "inset(40% 0 20% 0)" },
                    "30%": { clipPath: "inset(10% 0 60% 0)" },
                    "35%": { clipPath: "inset(15% 0 55% 0)" },
                    "40%": { clipPath: "inset(25% 0 35% 0)" },
                    "45%": { clipPath: "inset(30% 0 40% 0)" },
                    "50%": { clipPath: "inset(20% 0 50% 0)" },
                    "55%": { clipPath: "inset(10% 0 60% 0)" },
                    "60%": { clipPath: "inset(15% 0 55% 0)" },
                    "65%": { clipPath: "inset(25% 0 35% 0)" },
                    "70%": { clipPath: "inset(30% 0 40% 0)" },
                    "75%": { clipPath: "inset(40% 0 20% 0)" },
                    "80%": { clipPath: "inset(20% 0 50% 0)" },
                    "85%": { clipPath: "inset(10% 0 60% 0)" },
                    "90%": { clipPath: "inset(15% 0 55% 0)" },
                    "95%": { clipPath: "inset(25% 0 35% 0)" },
                    "100%": { clipPath: "inset(30% 0 40% 0)" },
                },
            },
        },
    },
    plugins: [],
};
export default config;


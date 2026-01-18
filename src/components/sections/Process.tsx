"use client";
import { motion } from "framer-motion";

const steps = [
    {
        num: "01",
        title: "DISCOVERY",
        description: "We start by understanding your vision, goals, and target audience to create a strategic roadmap."
    },
    {
        num: "02",
        title: "DESIGN",
        description: "Our designers craft pixel-perfect interfaces with focus on user experience and brand identity."
    },
    {
        num: "03",
        title: "DEVELOP",
        description: "Expert developers bring designs to life with clean, scalable code and modern technologies."
    },
    {
        num: "04",
        title: "LAUNCH",
        description: "We deploy your product with confidence, providing ongoing support and optimization."
    }
];

export default function Process() {
    return (
        <section id="process" className="py-32 bg-[#0a0a0f] text-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="font-orbitron text-5xl md:text-7xl font-bold mb-4">
                        FROM IDEA TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-vapor-cyan to-vapor-blue">REALITY</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="relative group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-vapor-cyan/30 transition-colors duration-300"
                        >
                            {/* Number */}
                            <div className="mb-6">
                                <span className="font-orbitron text-6xl font-bold text-white/5 group-hover:text-vapor-cyan/20 transition-colors duration-300">
                                    {step.num}
                                </span>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold font-orbitron mb-4 group-hover:text-vapor-cyan transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {step.description}
                            </p>

                            {/* Connecting Line (Only for desktop and not last item) */}
                            {index < 3 && (
                                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] bg-white/10 z-10" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

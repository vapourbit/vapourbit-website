"use client";
import { motion } from "framer-motion";

const steps = [
    { num: "01", title: "Discovery", desc: "We deep dive into your business goals, user needs, and market landscape." },
    { num: "02", title: "Design", desc: "We craft intuitive, high-fidelity prototypes that visualize the solution." },
    { num: "03", title: "Build", desc: "Our engineers architect robust, scalable software using cutting-edge tech." },
    { num: "04", title: "Launch", desc: "We deploy, test, and monitor performance to ensure successful liftoff." },
];

export default function Process() {
    return (
        <section id="process" className="py-32 px-6 bg-vapor-dark relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="md:flex md:justify-between mb-20">
                    <h2 className="font-orbitron text-4xl md:text-6xl text-white font-bold max-w-lg">
                        How we minimize <span className="text-vapor-cyan">risk</span> and maximize <span className="text-vapor-blue">value</span>.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[28px] left-0 w-full h-[1px] bg-white/10 z-0" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative z-10 group"
                        >
                            <div className="w-14 h-14 rounded-full bg-vapor-dark border border-white/20 flex items-center justify-center font-orbitron text-white text-xl font-bold mb-8 group-hover:border-vapor-cyan group-hover:text-vapor-cyan transition-colors duration-300">
                                {step.num}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-vapor-cyan transition-colors">{step.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

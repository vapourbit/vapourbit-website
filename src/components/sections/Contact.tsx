"use client";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

type FormData = {
    name: string;
    email: string;
    company?: string;
    budget: string;
    message: string;
};

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    // Replace these with your actual EmailJS credentials
    const SERVICE_ID = "service_id_placeholder";
    const TEMPLATE_ID = "template_id_placeholder";
    const PUBLIC_KEY = "public_key_placeholder";

    const onSubmit = async (data: FormData) => {
        setStatus("loading");

        // Simulating email send for demonstration if no keys provided, or real send if keys exist
        try {
            if (SERVICE_ID === "service_id_placeholder") {
                // Mock success for demo
                await new Promise(resolve => setTimeout(resolve, 2000));
                console.log("Form Data:", data);
            } else {
                await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, PUBLIC_KEY);
            }
            setStatus("success");
        } catch (error) {
            console.error("Email Error:", error);
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="relative py-32 overflow-hidden bg-[#050508]">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-[#0a0a0f] to-black" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-20">

                {/* Text Side */}
                <div className="lg:w-1/2">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-orbitron text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
                    >
                        READY TO BUILD SOMETHING <span className="text-transparent bg-clip-text bg-gradient-to-r from-vapor-cyan to-vapor-blue">EXTRAORDINARY?</span>
                    </motion.h2>

                    <p className="text-gray-400 text-lg mb-12 max-w-lg">
                        Let's turn your ideas into a digital masterpiece. Schedule a free consultation with our team and let's discuss your vision.
                    </p>

                    <div className="flex flex-col gap-6">
                        <a href="mailto:hello@vapourbit.com" className="flex items-center gap-4 text-white hover:text-vapor-cyan transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-vapor-cyan/20 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Email us</p>
                                <p className="text-lg font-medium">vapourbit@gmail.com</p>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Form Side */}
                <div className="lg:w-1/2">
                    <motion.form
                        ref={formRef}
                        onSubmit={handleSubmit(onSubmit)}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 ml-1">Full Name *</label>
                                <input
                                    {...register("name", { required: true })}
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-vapor-cyan transition-colors"
                                    placeholder="John Doe"
                                />
                                {errors.name && <span className="text-red-500 text-xs ml-1">Name is required</span>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 ml-1">Email Address *</label>
                                <input
                                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-vapor-cyan transition-colors"
                                    placeholder="john@company.com"
                                />
                                {errors.email && <span className="text-red-500 text-xs ml-1">Valid email is required</span>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 ml-1">Company Name</label>
                                <input
                                    {...register("company")}
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-vapor-cyan transition-colors"
                                    placeholder="Vapourbit Inc."
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400 ml-1">Budget</label>
                                <select
                                    {...register("budget")}
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-vapor-cyan transition-colors appearance-none"
                                >
                                    <option value="<5k" className="bg-black text-gray-300">&lt; $5,000</option>
                                    <option value="5k-10k" className="bg-black text-gray-300">$5,000 - $10,000</option>
                                    <option value="10k-25k" className="bg-black text-gray-300">$10,000 - $25,000</option>
                                    <option value="25k-50k" className="bg-black text-gray-300">$25,000 - $50,000</option>
                                    <option value="50k+" className="bg-black text-gray-300">$50,000+</option>
                                </select>
                            </div>
                        </div>

                        <div className="mb-8 space-y-2">
                            <label className="text-sm text-gray-400 ml-1">Project Details *</label>
                            <textarea
                                {...register("message", { required: true })}
                                rows={4}
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-vapor-cyan transition-colors resize-none"
                                placeholder="Tell us about your project..."
                            />
                            {errors.message && <span className="text-red-500 text-xs ml-1">Message is required</span>}
                        </div>

                        <button
                            disabled={status === "loading" || status === "success"}
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-vapor-cyan to-vapor-blue text-black font-bold uppercase tracking-wider hover:opacity-90 transition-opacity disabled:opacity-50 flex justify-center items-center gap-2"
                        >
                            {status === "loading" ? (
                                <>
                                    <Loader2 className="animate-spin" /> Sending...
                                </>
                            ) : status === "success" ? (
                                "Message Sent!"
                            ) : (
                                "Start Your Project"
                            )}
                        </button>

                        {status === "success" && (
                            <p className="mt-4 text-green-400 text-center text-sm">Thanks! We'll get back to you within 24 hours.</p>
                        )}
                        {status === "error" && (
                            <p className="mt-4 text-red-500 text-center text-sm">Something went wrong. Please try email directly.</p>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    );
}

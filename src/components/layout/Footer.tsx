import Link from "next/link";
import { SiX, SiLinkedin, SiInstagram, SiGithub } from "react-icons/si";

export default function Footer() {
    return (
        <footer className="bg-[#0a0a0f] pt-20 pb-10 px-6 border-t border-white/5 relative z-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                {/* Column 1: Brand */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-tr from-vapor-blue to-vapor-cyan rounded-md" />
                        <span className="font-orbitron font-bold text-xl text-white">VAPOURBIT</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                        Crafting Digital Excellence. We build the future of the web with precision and passion.
                    </p>
                </div>

                {/* Column 2: Company */}
                <div className="flex flex-col gap-4">
                    <h4 className="font-orbitron font-bold text-white">COMPANY</h4>
                    <Link href="#about" className="text-gray-400 hover:text-vapor-cyan transition-colors text-sm">About</Link>
                    <Link href="#services" className="text-gray-400 hover:text-vapor-cyan transition-colors text-sm">Services</Link>
                    <Link href="#portfolio" className="text-gray-400 hover:text-vapor-cyan transition-colors text-sm">Work</Link>
                    <Link href="#contact" className="text-gray-400 hover:text-vapor-cyan transition-colors text-sm">Contact</Link>
                </div>

                {/* Column 3: Services */}
                <div className="flex flex-col gap-4">
                    <h4 className="font-orbitron font-bold text-white">SERVICES</h4>
                    <span className="text-gray-400 text-sm">Web Development</span>
                    <span className="text-gray-400 text-sm">UI/UX Design</span>
                    <span className="text-gray-400 text-sm">Mobile Apps</span>
                    <span className="text-gray-400 text-sm">Full-Stack Solutions</span>
                </div>

                {/* Column 4: Connect */}
                <div className="flex flex-col gap-6">
                    <h4 className="font-orbitron font-bold text-white">CONNECT</h4>
                    <a href="mailto:vapourbit@gmail.com" className="text-gray-400 hover:text-vapor-cyan transition-colors text-sm">vapourbit@gmail.com</a>

                    <div className="flex gap-4">
                        <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-vapor-cyan hover:text-black transition-all">
                            <SiLinkedin />
                        </Link>
                        <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-vapor-cyan hover:text-black transition-all">
                            <SiX />
                        </Link>
                        <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-vapor-cyan hover:text-black transition-all">
                            <SiGithub />
                        </Link>
                        <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-vapor-cyan hover:text-black transition-all">
                            <SiInstagram />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                <p>© 2026 Vapourbit. All rights reserved.</p>
                <div className="flex gap-8">
                    <Link href="#" className="hover:text-vapor-cyan transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-vapor-cyan transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}

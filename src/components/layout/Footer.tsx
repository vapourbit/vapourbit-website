import Link from "next/link";
import { SiX, SiLinkedin, SiInstagram } from "react-icons/si";

export default function Footer() {
    return (
        <footer className="bg-black py-12 px-6 border-t border-white/5 relative z-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-2">
                    {/* Simple Logo Icon */}
                    <div className="w-8 h-8 bg-gradient-to-tr from-vapor-blue to-vapor-cyan rounded-md" />
                    <span className="font-orbitron font-bold text-xl text-white">VAPOURBIT</span>
                </div>

                <div className="flex gap-8 text-sm text-gray-400">
                    <Link href="#" className="hover:text-vapor-cyan transition-colors">Privacy</Link>
                    <Link href="#" className="hover:text-vapor-cyan transition-colors">Terms</Link>
                    <Link href="#" className="hover:text-vapor-cyan transition-colors">Twitter</Link>
                    <Link href="#" className="hover:text-vapor-cyan transition-colors">LinkedIn</Link>
                </div>

                <p className="text-gray-600 text-xs">© 2026 Vapourbit Inc.</p>
            </div>
        </footer>
    );
}

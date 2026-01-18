import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata: Metadata = {
  title: "Vapourbit | Premium Software Development & Web Solutions",
  description: "Transform your digital presence with Vapourbit. We build cutting-edge web applications, stunning UI/UX designs, and custom software solutions. Trusted by 50+ startups.",
  keywords: ["web development", "software solutions", "UI/UX design", "Next.js development", "custom software", "React development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className={`${inter.variable} ${orbitron.variable} bg-vapor-dark overflow-x-hidden`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

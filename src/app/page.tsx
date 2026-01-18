"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import StatsMarquee from "@/components/sections/StatsMarquee";
import Services from "@/components/sections/Services";

import Portfolio from "@/components/sections/Portfolio";
import TechStack from "@/components/sections/TechStack";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="min-h-screen bg-vapor-dark w-full overflow-hidden">
      <Navbar />
      <Hero />
      <StatsMarquee />
      <Services />
      <Portfolio />
      <TechStack />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}

"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  ChevronDown,
  Zap,
  Shield,
  Flame,
} from "lucide-react";
import { VantaCells } from "@/components/ui/vanta-cells";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const manifestoRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Epic staggered reveal
      tl.fromTo(
        ".hero-badge",
        { y: 30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8 }
      )
        .fromTo(
          headlineRef.current,
          { y: 100, opacity: 0, filter: "blur(20px)" },
          { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.4 },
          "-=0.4"
        )
        .fromTo(
          manifestoRef.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.7"
        )
        .fromTo(
          ctaRef.current?.children || [],
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.2, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          ".hero-stats > div",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.6 },
          "-=0.3"
        );

      // Parallax fade on scroll
      gsap.to(containerRef.current, {
        opacity: 0,
        scale: 0.95,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Vanta.js Cells Background */}
      <VantaCells
        color1="#0d9488"
        color2="#14b8a6"
        size={2.5}
        speed={0.8}
      />

      {/* Gradient Overlays for depth and readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-carbon-950/50 via-carbon-950/20 to-carbon-950/70 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-carbon-950/30 via-transparent to-carbon-950/30 pointer-events-none" />
      
      {/* Radial glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-forest-500/10 via-transparent to-transparent pointer-events-none" />

      {/* Hero Content */}
      <div className="relative container-wide text-center z-10 pt-28 pb-20">
        {/* Main Headline - Cult-building copy */}
        <h1
          ref={headlineRef}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white max-w-6xl mx-auto leading-[0.95] mb-10 tracking-tight"
        >
          <span className="block text-carbon-100">Dari Alam,</span>
          <span className="block bg-gradient-to-r from-forest-300 via-microbe-300 to-moss-300 bg-clip-text text-transparent">
            Untuk Alam.
          </span>
        </h1>

        {/* Manifesto - Provocative subtitle */}
        <div
          ref={manifestoRef}
          className="max-w-3xl mx-auto mb-14"
        >
          <p className="text-xl md:text-2xl lg:text-3xl text-carbon-200 leading-relaxed font-light">
            Apapun yang ada di alam, solusinya ada di alam juga. Mari bergabung dan mengambil inspirasi dari alam untuk memecahkan tantangan pertanian dan peternakan Anda.
          </p>
        </div>

        {/* Power CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 px-2">
          <Link 
            href="/contact" 
            className="group relative overflow-hidden w-full sm:w-auto px-6 sm:px-8 py-4 bg-gradient-to-r from-forest-500 to-forest-600 hover:from-forest-400 hover:to-forest-500 rounded-xl text-white font-bold text-base sm:text-lg shadow-2xl shadow-forest-900/50 transition-all duration-300 hover:scale-105 hover:shadow-forest-500/30 text-center"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
              <Zap className="w-5 h-5 shrink-0" />
              <span className="leading-snug">Konsultasi Gratis dengan Ahli Bioteknologi</span>
              <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform hidden sm:block" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </Link>
          <Link 
            href="/solutions" 
            className="group w-full sm:w-auto px-6 sm:px-8 py-4 bg-white/5 border-2 border-white/20 hover:border-forest-400/50 hover:bg-white/10 rounded-xl text-white font-semibold text-base sm:text-lg backdrop-blur-sm transition-all duration-300 text-center"
          >
            <span className="flex items-center justify-center gap-2 sm:gap-3">
              <Shield className="w-5 h-5 text-forest-400 shrink-0" />
              <span>Lihat Produk Kami</span>
            </span>
          </Link>
        </div>

        {/* Stats - Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="hero-stats flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-20 pt-10 border-t border-white/10"
        >
          {[
            { value: "19", label: "Provinsi Terjangkau", suffix: "" },
            { value: "14", label: "Tahun Riset & Inovasi", suffix: "+" },
            { value: "8", label: "Produk Unggulan", suffix: "+" },
            { value: "1000", label: "Mitra Petani Aktif", suffix: "+" },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white mb-2 group-hover:text-forest-300 transition-colors">
                {stat.value}
                <span className="text-forest-400">{stat.suffix}</span>
              </div>
              <div className="text-sm md:text-base text-carbon-400 font-medium tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-xs text-carbon-400 uppercase tracking-[0.2em] font-medium">
          Temukan Lebih Banyak
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm"
        >
          <ChevronDown className="w-5 h-5 text-forest-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}

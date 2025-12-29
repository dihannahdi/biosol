"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, Home, Microscope, FlaskConical, Leaf } from "lucide-react";

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create floating microbe particles
    const particlesContainer = particlesRef.current;
    if (!particlesContainer) return;

    const particleCount = 50;
    const particles: HTMLDivElement[] = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      const size = Math.random() * 8 + 4;
      const isCircle = Math.random() > 0.5;
      
      particle.className = `absolute rounded-full opacity-40 pointer-events-none`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.background = `linear-gradient(135deg, 
        ${Math.random() > 0.5 ? '#22c55e' : Math.random() > 0.5 ? '#16a34a' : '#86efac'}, 
        ${Math.random() > 0.5 ? '#15803d' : '#4ade80'})`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.filter = `blur(${Math.random() * 2}px)`;
      
      if (!isCircle) {
        particle.style.borderRadius = `${Math.random() * 50 + 20}% ${Math.random() * 50 + 20}% ${Math.random() * 50 + 20}% ${Math.random() * 50 + 20}%`;
      }

      // Animation
      const duration = Math.random() * 20 + 15;
      const delay = Math.random() * -20;
      particle.style.animation = `floatParticle ${duration}s ease-in-out ${delay}s infinite`;
      
      particlesContainer.appendChild(particle);
      particles.push(particle);
    }

    return () => {
      particles.forEach((p) => p.remove());
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-carbon-950 via-forest-950 to-carbon-900"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_rgba(34,197,94,0.15)_0%,_transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_rgba(22,163,74,0.1)_0%,_transparent_50%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(74,222,128,0.05)_0%,_transparent_70%)]" />
      </div>

      {/* Floating particles container */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden" />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        
        {/* 404 number with creative design */}
        <div className="relative mb-8">
          <div className="flex items-center justify-center gap-4">
            {/* 4 */}
            <div className="relative">
              <span className="text-[150px] md:text-[200px] font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-br from-forest-400 via-moss-400 to-microbe-500 leading-none">
                4
              </span>
              <Leaf className="absolute top-4 -right-2 w-8 h-8 text-forest-500/60 animate-pulse" />
            </div>
            
            {/* 0 as petri dish */}
            <div className="relative">
              <div className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-full border-4 border-forest-500/40 bg-gradient-to-br from-forest-900/50 to-carbon-900/50 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                <div className="absolute inset-4 rounded-full border-2 border-forest-600/30" />
                <Microscope className="w-12 h-12 md:w-16 md:h-16 text-forest-400/80" />
                {/* Floating "bacteria" dots */}
                <div className="absolute top-6 left-8 w-3 h-3 rounded-full bg-microbe-400/60 animate-ping" style={{ animationDuration: '2s' }} />
                <div className="absolute bottom-8 right-6 w-2 h-2 rounded-full bg-moss-400/60 animate-ping" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
                <div className="absolute top-10 right-10 w-2 h-2 rounded-full bg-forest-300/60 animate-ping" style={{ animationDuration: '2.5s', animationDelay: '1s' }} />
              </div>
            </div>

            {/* 4 */}
            <div className="relative">
              <span className="text-[150px] md:text-[200px] font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-br from-forest-400 via-moss-400 to-microbe-500 leading-none">
                4
              </span>
              <FlaskConical className="absolute bottom-8 -left-2 w-8 h-8 text-moss-500/60 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-white/90 mb-4">
          Halaman Tidak Ditemukan
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-lg md:text-xl text-white/60 max-w-lg mb-4">
          Mikroba kami telah mencari di seluruh laboratorium, namun halaman yang Anda cari tampaknya tidak ada dalam kultur kami.
        </p>

        {/* Technical detail */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-carbon-800/50 border border-carbon-700/50 mb-10">
          <span className="font-mono text-sm text-forest-400">ERROR_CODE:</span>
          <span className="font-mono text-sm text-white/50">404_NOT_FOUND</span>
        </div>

        {/* Navigation buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-forest-600 to-forest-700 hover:from-forest-500 hover:to-forest-600 text-white font-medium rounded-full transition-all duration-300 shadow-lg shadow-forest-900/30 hover:shadow-forest-800/40"
          >
            <Home className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span>Kembali ke Beranda</span>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-carbon-800/50 hover:bg-carbon-700/50 text-white/80 hover:text-white font-medium rounded-full border border-carbon-700/50 hover:border-carbon-600/50 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span>Halaman Sebelumnya</span>
          </button>
        </div>

        {/* Quick links */}
        <div className="mt-16 pt-8 border-t border-carbon-700/30">
          <p className="text-white/40 text-sm mb-4">Atau jelajahi halaman populer kami</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/solutions", label: "Solusi" },
              { href: "/research", label: "Riset" },
              { href: "/about", label: "Tentang Kami" },
              { href: "/contact", label: "Hubungi Kami" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-white/60 hover:text-white bg-carbon-800/30 hover:bg-carbon-700/40 rounded-lg border border-carbon-700/30 hover:border-carbon-600/40 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Custom animation styles */}
      <style jsx global>{`
        @keyframes floatParticle {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(30px, -30px) rotate(90deg);
          }
          50% {
            transform: translate(-20px, -50px) rotate(180deg);
          }
          75% {
            transform: translate(-40px, -20px) rotate(270deg);
          }
        }
      `}</style>
    </div>
  );
}

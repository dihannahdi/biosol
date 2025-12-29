"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      gsap.fromTo(
        ".cta-content",
        { y: 60, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-20 lg:py-32 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-50 via-white to-microbe-50/50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-forest-100/50 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="relative container-wide">
        <div className="cta-content max-w-5xl mx-auto">
          {/* Main Card */}
          <div className="relative bg-gradient-to-br from-forest-600 via-forest-700 to-carbon-900 rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 md:p-12 lg:p-16 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-microbe-500/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-forest-400/20 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2" />
              
              {/* Floating circles - hidden on mobile for performance */}
              <div className="hidden sm:block">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 rounded-full bg-white/10"
                    style={{
                      left: `${10 + i * 15}%`,
                      top: `${20 + (i % 3) * 25}%`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.4,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="relative z-10 text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs sm:text-sm font-medium text-white/90 mb-6 sm:mb-8"
              >
                <span className="w-2 h-2 bg-microbe-400 rounded-full animate-pulse" />
                Siap Memulai Transformasi?
              </motion.div>

              {/* Headline */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white mb-4 sm:mb-6 leading-tight">
                Mari Wujudkan Pertanian
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                <span className="bg-gradient-to-r from-microbe-300 to-forest-300 bg-clip-text text-transparent">
                  Berkelanjutan Bersama
                </span>
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-6 sm:mb-8">
                Konsultasikan kebutuhan <strong className="text-white/90">pupuk hayati</strong>, <strong className="text-white/90">jasa maklon pupuk</strong>, dan solusi bioteknologi lainnya dengan tim ahli kami. Dapatkan solusi yang disesuaikan untuk industri dan skala bisnis Anda.
              </p>

              {/* Quick Links */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                <Link
                  href="/pupuk-hayati"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-microbe-500/20 text-microbe-200 text-sm font-medium rounded-full border border-microbe-400/30 hover:bg-microbe-500/30 transition-all"
                >
                  🌱 Pupuk Hayati Organik
                </Link>
                <Link
                  href="/maklon"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-forest-500/20 text-forest-200 text-sm font-medium rounded-full border border-forest-400/30 hover:bg-forest-500/30 transition-all"
                >
                  🏭 Jasa Maklon Pupuk
                </Link>
              </div>

              {/* Trust Signals - Risk Reversal */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-10">
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <span className="w-5 h-5 rounded-full bg-microbe-400/20 flex items-center justify-center text-microbe-300 text-xs">✓</span>
                  <span>Konsultasi Gratis</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <span className="w-5 h-5 rounded-full bg-microbe-400/20 flex items-center justify-center text-microbe-300 text-xs">✓</span>
                  <span>Respon Dalam 24 Jam</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/80">
                  <span className="w-5 h-5 rounded-full bg-microbe-400/20 flex items-center justify-center text-microbe-300 text-xs">✓</span>
                  <span>Garansi Kepuasan</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-forest-700 font-semibold rounded-full hover:bg-forest-50 transition-all shadow-xl shadow-black/10 group"
                >
                  <span>Hubungi Tim Kami</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/solutions"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all"
                >
                  Jelajahi Solusi
                </Link>
              </div>

              {/* Contact Options */}
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 text-white/60 text-sm sm:text-base">
                <a
                  href="tel:+6285742249591"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+62 857-4224-9591</span>
                </a>
                <a
                  href="mailto:info@biosolution.tech"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>info@biosolution.tech</span>
                </a>
                <a
                  href="https://wa.me/6285742249591"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 sm:mt-12 text-center px-2">
            <p className="text-xs sm:text-sm text-carbon-500 mb-4 sm:mb-6">Dipercaya oleh perusahaan terkemuka di Indonesia</p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 opacity-50">
              {[
                "Institut Pertanian Bogor (IPB)", 
                "Masyarakat Petani dan Pertanian Organik Indonesia (Maporina)", 
                "Kementerian Pertanian Republik Indonesia", 
                "Petani dan Kelompok Tani di Seluruh Indonesia"
              ].map(
                (partner, i) => (
                  <span key={i} className="text-xs sm:text-sm text-carbon-400 font-medium">
                    {partner}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

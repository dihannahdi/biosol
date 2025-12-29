"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  Clock,
  TrendingUp,
  Users,
  MapPin,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    id: 1,
    title: "Peningkatan Hasil Panen Padi 40% di Klaten",
    excerpt:
      "Petani padi di Kabupaten Klaten meningkatkan hasil panen dari 5,2 ton/ha menjadi 7,3 ton/ha setelah menggunakan FloraOne dan BIOJAGAT. ROI tercapai dalam 1 musim tanam.",
    category: "Pertanian",
    date: "2024-01-15",
    readTime: "5 min",
    stats: {
      improvement: "+40%",
      area: "25 hektar",
      farmers: "Rp 52 juta/ha",
    },
    image: "/images/Case Study 1 - Rice Farming Success.png",
    href: "/news/peningkatan-hasil-panen-padi-klaten",
  },
  {
    id: 2,
    title: "Peternakan Ayam Zero Antibiotic dengan MEGABIO",
    excerpt:
      "PT Agro Makmur menerapkan sistem peternakan tanpa antibiotik. FCR turun dari 1.72 ke 1.58, mortalitas turun 35%, hemat biaya pakan Rp 847 juta/tahun.",
    category: "Peternakan",
    date: "2023-12-20",
    readTime: "7 min",
    stats: {
      improvement: "-35% mortalitas",
      area: "50,000 ekor",
      farmers: "Rp 847 jt/thn",
    },
    image: "/images/Case Study 2 - Poultry Farm Transformation.png",
    href: "/news/peternakan-ayam-zero-antibiotic",
  },
  {
    id: 3,
    title: "Budidaya Udang Vaname Berkelanjutan di Situbondo",
    excerpt:
      "Survival rate meningkat dari 65% menjadi 82%. Panen rata-rata 8,5 ton/kolam dengan ukuran size 50. Pendapatan bersih naik Rp 127 juta per siklus.",
    category: "Perikanan",
    date: "2023-11-08",
    readTime: "6 min",
    stats: {
      improvement: "+25% SR",
      area: "10 kolam",
      farmers: "+Rp 127 jt/siklus",
    },
    image: "/images/Case Study 3 - Soil Restoration Project.png",
    href: "/news/budidaya-udang-vaname-situbondo",
  },
];

export function CaseStudiesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Animate header
      gsap.fromTo(
        ".case-studies-header",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".case-studies-header",
            start: "top 80%",
          },
        }
      );

      // Animate cards
      gsap.fromTo(
        ".case-study-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".case-studies-grid",
            start: "top 75%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-forest-950 via-carbon-950 to-carbon-900 text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-forest-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-microbe-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative container-wide">
        {/* Section Header */}
        <div className="case-studies-header flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-8 mb-10 lg:mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs sm:text-sm font-medium text-forest-400 mb-4 sm:mb-6">
              <TrendingUp className="w-4 h-4" />
              Studi Kasus
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-3 sm:mb-4">
              Kisah Sukses{" "}
              <span className="bg-gradient-to-r from-forest-400 to-microbe-400 bg-clip-text text-transparent">
                Nyata
              </span>
            </h2>
            <p className="text-base sm:text-lg text-carbon-400">
              Lihat bagaimana partner kami mencapai hasil luar biasa dengan solusi bioteknologi kami.
            </p>
          </div>
          <Link
            href="/news"
            className="btn-secondary border-white/20 text-white hover:bg-white/10 shrink-0 w-full sm:w-auto text-center justify-center"
          >
            Lihat Semua Studi Kasus
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Case Studies Grid */}
        <div className="case-studies-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              href={study.href}
              className="case-study-card group relative bg-carbon-800/50 border border-carbon-700/50 rounded-2xl overflow-hidden hover:border-forest-500/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="px-3 py-1 bg-forest-500/20 backdrop-blur-sm text-forest-400 rounded-full text-sm font-medium">
                    {study.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-carbon-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(study.date).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {study.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-bold text-white group-hover:text-forest-400 transition-colors mb-3 line-clamp-2">
                  {study.title}
                </h3>

                {/* Excerpt */}
                <p className="text-carbon-400 text-sm mb-6 line-clamp-2">
                  {study.excerpt}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-carbon-700/50">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-sm">
                      <TrendingUp className="w-4 h-4 text-forest-500" />
                      <span className="text-forest-400 font-semibold">
                        {study.stats.improvement}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-carbon-500">
                      <MapPin className="w-4 h-4" />
                      {study.stats.area}
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-carbon-500 group-hover:text-forest-400 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

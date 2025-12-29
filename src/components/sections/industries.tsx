"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Wheat, Heart, Fish } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    id: "plant",
    title: "Biosekuriti Tanaman",
    subtitle: "Plant Biosecurity",
    description:
      "Pupuk hayati organik, insektisida hayati, dan fungisida organik untuk tanaman pangan, hortikultura, dan perkebunan. Tingkatkan hasil panen 20-30% dengan pupuk hayati cair premium.",
    icon: Wheat,
    color: "forest",
    products: ["FloraOne", "BIOKILLER SL", "BIOJAGAT", "SIMBIOS", "TRICO-Z WP"],
    stats: { value: "50%", label: "Hemat pupuk kimia" },
    image: "/images/Agriculture Industry Card.png",
    href: "/solutions/plant",
  },
  {
    id: "animal",
    title: "Kesehatan Hewan",
    subtitle: "Animal Health",
    description:
      "Probiotik dan suplemen ternak berbasis mikroba untuk unggas, ruminansia, babi, dan akuakultur. Tingkatkan efisiensi pakan dan kesehatan ternak.",
    icon: Heart,
    color: "soil",
    products: ["RAJABIO", "MEGABIO", "SIMBIOS", "MASHITAM"],
    stats: { value: "14+", label: "Tahun pengalaman" },
    image: "/images/Livestock Industry Card.png",
    href: "/solutions/animal",
  },
  {
    id: "aquaculture",
    title: "Akuakultur",
    subtitle: "Aquaculture",
    description:
      "Solusi probiotik dan bioremediasi untuk budidaya ikan, udang, dan organisme akuatik lainnya. Tingkatkan kualitas air dan pertumbuhan optimal.",
    icon: Fish,
    color: "microbe",
    products: ["BIOJAGAT", "Aqua Probiotic", "Water Treatment"],
    stats: { value: "30%", label: "Peningkatan survival rate" },
    image: "/images/Aquaculture Industry Card.png",
    href: "/solutions/aquaculture",
  },
];

const colorClasses = {
  forest: {
    bg: "bg-forest-50",
    border: "border-forest-200",
    icon: "bg-forest-100 text-forest-600",
    iconHover: "group-hover:bg-forest-500 group-hover:text-white",
    badge: "bg-forest-100 text-forest-700",
    button: "bg-forest-600 hover:bg-forest-500",
    gradient: "from-forest-500/20 to-transparent",
  },
  soil: {
    bg: "bg-soil-50",
    border: "border-soil-200",
    icon: "bg-soil-100 text-soil-600",
    iconHover: "group-hover:bg-soil-500 group-hover:text-white",
    badge: "bg-soil-100 text-soil-700",
    button: "bg-soil-600 hover:bg-soil-500",
    gradient: "from-soil-500/20 to-transparent",
  },
  microbe: {
    bg: "bg-microbe-50",
    border: "border-microbe-200",
    icon: "bg-microbe-100 text-microbe-600",
    iconHover: "group-hover:bg-microbe-500 group-hover:text-white",
    badge: "bg-microbe-100 text-microbe-700",
    button: "bg-microbe-600 hover:bg-microbe-500",
    gradient: "from-microbe-500/20 to-transparent",
  },
};

export function IndustriesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );

      // Cards stagger animation
      const cards = cardsRef.current?.querySelectorAll(".industry-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 100, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 75%",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-20 lg:py-32 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />

      <div className="relative container-wide">
        {/* Section Header */}
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-20">
          <span className="inline-block px-3 sm:px-4 py-1.5 bg-forest-50 border border-forest-200 rounded-full text-xs sm:text-sm font-medium text-forest-700 mb-4 sm:mb-6">
            Industri yang Kami Layani
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-carbon-900 mb-4 sm:mb-6">
            Solusi <span className="text-forest-600">Terbukti</span> untuk
            <br className="hidden sm:block" /> <span className="sm:hidden"> </span>Setiap Sektor
          </h2>
          <p className="text-base sm:text-lg text-carbon-600 px-2">
            14+ tahun melayani petani, peternak, dan pembudidaya ikan di 19 provinsi. Hasil terukur, bukan klaim.
          </p>
        </div>

        {/* Industry Cards */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {industries.map((industry) => {
            const colors = colorClasses[industry.color as keyof typeof colorClasses];
            const Icon = industry.icon;

            return (
              <Link
                key={industry.id}
                href={industry.href}
                className={`industry-card group relative rounded-2xl sm:rounded-3xl border ${colors.border} ${colors.bg} overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-${industry.color}-500/10 hover:-translate-y-2`}
              >
                {/* Image Background */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon-900/80 via-carbon-900/40 to-transparent" />
                </div>

                {/* Gradient Overlay on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10 p-5 sm:p-8 lg:p-10">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl ${colors.icon} ${colors.iconHover} flex items-center justify-center mb-4 sm:mb-6 transition-all duration-300`}
                  >
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>

                  {/* Content */}
                  <span className="text-xs sm:text-sm text-carbon-400 font-medium uppercase tracking-wider">
                    {industry.subtitle}
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-carbon-900 mt-1 mb-3 sm:mb-4">
                    {industry.title}
                  </h3>
                  <p className="text-sm sm:text-base text-carbon-600 mb-4 sm:mb-6 line-clamp-3">
                    {industry.description}
                  </p>

                  {/* Products */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {industry.products.map((product) => (
                      <span
                        key={product}
                        className={`px-2 sm:px-3 py-0.5 sm:py-1 ${colors.badge} rounded-full text-xs font-medium`}
                      >
                        {product}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-carbon-200/50">
                    <div>
                      <div className="text-xl sm:text-2xl font-display font-bold text-carbon-900">
                        {industry.stats.value}
                      </div>
                      <div className="text-xs sm:text-sm text-carbon-500">{industry.stats.label}</div>
                    </div>
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 ${colors.button} rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0`}
                    >
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

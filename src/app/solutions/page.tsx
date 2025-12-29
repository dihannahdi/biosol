"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";
import Link from "next/link";
import { GSAPProvider } from "@/lib/gsap-provider";
import { Header, Footer } from "@/components/layout";
import {
  ArrowRight,
  Wheat,
  Heart,
  Leaf,
  Shield,
  Zap,
  TrendingUp,
  CheckCircle2,
  Fish,
  Home,
  Factory,
  Beef,
} from "lucide-react";

const solutions = [
  {
    id: "plant",
    title: "Biosekuriti Tanaman",
    subtitle: "Plant Biosecurity",
    description:
      "Solusi lengkap untuk perlindungan dan peningkatan produktivitas tanaman. Mencakup tanaman pangan, hortikultura, perkebunan, dan tanaman hobi dengan produk berbasis riset universitas.",
    icon: Wheat,
    color: "forest",
    href: "/solutions/plant",
    products: ["FloraOne", "BIOKILLER SL", "BIOJAGAT", "RAJABIO"],
    benefits: [
      "Peningkatan hasil panen hingga 50%",
      "Pengurangan pupuk kimia hingga 50%",
      "Perlindungan dari hama dan penyakit",
      "Perbaikan kesehatan tanah jangka panjang",
    ],
    stats: [
      { value: "50%", label: "Hemat Pupuk Kimia" },
      { value: "2,02", label: "R/C Ratio FloraOne" },
      { value: "76%", label: "Efikasi Fungisida" },
    ],
  },
  {
    id: "livestock",
    title: "Peternakan",
    subtitle: "Livestock Health",
    description:
      "Probiotik dan suplemen untuk ternak unggas, ruminansia, dan babi. Tingkatkan efisiensi pakan, kurangi mortalitas, dan optimalkan produktivitas peternakan.",
    icon: Beef,
    color: "soil",
    href: "/solutions/livestock",
    products: ["SIMBIOS", "SILASE BIO", "MEGABIO"],
    benefits: [
      "Peningkatan FCR yang signifikan",
      "Penurunan mortalitas ternak",
      "Mengurangi ketergantungan antibiotik",
      "Kualitas produk ternak lebih baik",
    ],
    stats: [
      { value: "15%", label: "Peningkatan Bobot" },
      { value: "20%", label: "Hemat Pakan" },
      { value: "30%", label: "Kurangi Mortalitas" },
    ],
  },
  {
    id: "fishery",
    title: "Perikanan",
    subtitle: "Aquaculture",
    description:
      "Solusi bioteknologi untuk budidaya perikanan. Menjaga kualitas air tambak dan meningkatkan survival rate udang serta ikan.",
    icon: Fish,
    color: "microbe",
    href: "/solutions/fishery",
    products: ["TRICO-Z WP"],
    benefits: [
      "Menstabilkan pH dan kualitas air",
      "Mengurai bahan organik berbahaya",
      "Mencegah pertumbuhan bakteri patogen",
      "Meningkatkan survival rate hingga 25%",
    ],
    stats: [
      { value: "25%", label: "Peningkatan SR" },
      { value: "50+", label: "Tambak Mitra" },
      { value: "100+", label: "Hektar Kolam" },
    ],
  },
  {
    id: "household",
    title: "Household Care",
    subtitle: "Rumah Tangga & Hotel",
    description:
      "Diformulasikan untuk rumah tangga dan hotel, solusi biologis kami memastikan kebersihan maksimal sekaligus menjaga keberlanjutan lingkungan.",
    icon: Home,
    color: "teal",
    href: "/solutions/household",
    products: ["SEPTIC CLEAN", "BIO FRESH"],
    benefits: [
      "Mengurai limbah septictank alami",
      "Menghilangkan bau dari sumbernya",
      "Ramah lingkungan dan aman",
      "Mencegah penyumbatan saluran",
    ],
    stats: [
      { value: "500+", label: "Rumah Tangga" },
      { value: "50+", label: "Hotel Mitra" },
      { value: "95%", label: "Kepuasan" },
    ],
  },
  {
    id: "industrial",
    title: "Bioproses Industri",
    subtitle: "Industrial Bioprocess",
    description:
      "Dirancang untuk bioproses industri, solusi bio kami memungkinkan optimalisasi proses dan peningkatan efisiensi produksi secara berkelanjutan.",
    icon: Factory,
    color: "indigo",
    href: "/solutions/industrial",
    products: ["INDUS WASTE", "AGRI DECOMPOSER"],
    benefits: [
      "Menurunkan BOD/COD hingga 90%",
      "Mengurai senyawa organik kompleks",
      "Mempercepat proses pengolahan",
      "Memenuhi baku mutu lingkungan",
    ],
    stats: [
      { value: "90%", label: "Penurunan COD" },
      { value: "30+", label: "Industri Mitra" },
      { value: "500K", label: "Ton/Tahun" },
    ],
  },
];

const colorClasses = {
  forest: {
    light: "bg-forest-50",
    border: "border-forest-200",
    badge: "bg-forest-100 text-forest-700",
    icon: "bg-forest-100 text-forest-600",
    button: "bg-forest-600 hover:bg-forest-500",
    gradient: "from-forest-500 to-forest-600",
  },
  soil: {
    light: "bg-soil-50",
    border: "border-soil-200",
    badge: "bg-soil-100 text-soil-700",
    icon: "bg-soil-100 text-soil-600",
    button: "bg-soil-600 hover:bg-soil-500",
    gradient: "from-soil-500 to-soil-600",
  },
  microbe: {
    light: "bg-microbe-50",
    border: "border-microbe-200",
    badge: "bg-microbe-100 text-microbe-700",
    icon: "bg-microbe-100 text-microbe-600",
    button: "bg-microbe-600 hover:bg-microbe-500",
    gradient: "from-microbe-500 to-microbe-600",
  },
  teal: {
    light: "bg-teal-50",
    border: "border-teal-200",
    badge: "bg-teal-100 text-teal-700",
    icon: "bg-teal-100 text-teal-600",
    button: "bg-teal-600 hover:bg-teal-500",
    gradient: "from-teal-500 to-teal-600",
  },
  indigo: {
    light: "bg-indigo-50",
    border: "border-indigo-200",
    badge: "bg-indigo-100 text-indigo-700",
    icon: "bg-indigo-100 text-indigo-600",
    button: "bg-indigo-600 hover:bg-indigo-500",
    gradient: "from-indigo-500 to-indigo-600",
  },
};

export default function SolutionsPage() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".solutions-hero-content > *",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
        }
      );
    },
    { scope: heroRef }
  );

  return (
    <GSAPProvider>
      <Header />

      <main>
        {/* Hero */}
        <section
          ref={heroRef}
          className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-forest-50 to-white overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-forest-200/40 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-microbe-200/30 rounded-full blur-[80px]" />
          </div>

          <div className="relative container-wide">
            <div className="solutions-hero-content text-center max-w-4xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-forest-100 border border-forest-200 rounded-full text-sm font-medium text-forest-700 mb-6">
                <Leaf className="w-4 h-4" />
                Solusi Bioteknologi
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-carbon-900 mb-6 leading-tight">
                Ada{" "}
                <span className="bg-gradient-to-r from-forest-600 to-microbe-500 bg-clip-text text-transparent">
                  Biosolusi
                </span>{" "}
                untuk (Hampir) Segalanya
              </h1>
              <p className="text-lg md:text-xl text-carbon-600 mb-8">
                Temukan solusi bioteknologi terintegrasi untuk berbagai sektor industri. Dari pertanian hingga perikanan, kami menyediakan produk yang telah terbukti efektif.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container-wide space-y-16 lg:space-y-24">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              const colors = colorClasses[solution.color as keyof typeof colorClasses];
              const isReversed = index % 2 !== 0;

              return (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={isReversed ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 ${colors.icon} rounded-xl flex items-center justify-center`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-sm px-3 py-1 ${colors.badge} rounded-full font-medium`}>
                        {solution.subtitle}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-carbon-900 mb-4">
                      {solution.title}
                    </h2>

                    <p className="text-lg text-carbon-600 mb-6">
                      {solution.description}
                    </p>

                    {/* Benefits */}
                    <div className="space-y-3 mb-8">
                      {solution.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-forest-500 shrink-0" />
                          <span className="text-carbon-700">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Products */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      <span className="text-sm text-carbon-500 mr-2">Produk:</span>
                      {solution.products.map((product) => (
                        <span
                          key={product}
                          className={`px-3 py-1 ${colors.badge} rounded-full text-sm`}
                        >
                          {product}
                        </span>
                      ))}
                    </div>

                    <Link href={solution.href} className="btn-primary">
                      Pelajari Lebih Lanjut
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>

                  {/* Stats Card */}
                  <div className={`${isReversed ? "lg:order-1" : ""}`}>
                    <div className={`${colors.light} ${colors.border} border-2 rounded-3xl p-8 lg:p-12`}>
                      <div className="grid grid-cols-3 gap-6 mb-8">
                        {solution.stats.map((stat, i) => (
                          <div key={i} className="text-center">
                            <div className={`text-3xl lg:text-4xl font-display font-bold bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}>
                              {stat.value}
                            </div>
                            <div className="text-sm text-carbon-500 mt-1">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Visual placeholder */}
                      <div className="aspect-video bg-gradient-to-br from-white/50 to-transparent rounded-2xl flex items-center justify-center">
                        <Icon className="w-24 h-24 text-carbon-200" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-forest-600 to-carbon-900 text-white">
          <div className="container-wide text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Butuh Solusi Khusus?
              </h2>
              <p className="text-lg text-white/70 mb-8">
                Tim riset kami siap mengembangkan formulasi yang disesuaikan dengan kebutuhan spesifik bisnis Anda.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary bg-white text-forest-700 hover:bg-forest-50">
                  Konsultasi Gratis
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/research" className="btn-secondary border-white/30 text-white hover:bg-white/10">
                  Lihat Riset Kami
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </GSAPProvider>
  );
}

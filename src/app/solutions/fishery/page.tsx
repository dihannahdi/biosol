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
  ArrowLeft,
  Fish,
  Waves,
  Shield,
  TrendingUp,
  CheckCircle2,
  Beaker,
  Droplets,
  Users,
  ThermometerSun,
} from "lucide-react";

const products = [
  {
    id: "trico-z-wp",
    name: "TRICO-Z WP",
    tagline: "Probiotik Air Tambak",
    description:
      "Probiotik khusus untuk menjaga kualitas air tambak udang dan ikan. Mengandung bakteri pengurai yang menstabilkan parameter air dan mencegah penyakit.",
    color: "microbe",
    benefits: [
      "Menstabilkan pH dan kualitas air",
      "Mengurai bahan organik berbahaya",
      "Mencegah pertumbuhan bakteri patogen",
      "Meningkatkan survival rate hingga 25%",
    ],
    application: "Aplikasikan 1-2 kg per hektar setiap 2 minggu",
    species: ["Udang Vaname", "Udang Windu", "Ikan Nila", "Ikan Bandeng"],
    icon: Droplets,
  },
  {
    id: "mashitam",
    name: "MASHITAM",
    tagline: "Pengelola Dasar Tambak",
    description:
      "Bioremediator untuk mengelola lumpur dan bahan organik di dasar tambak. Memperbaiki kualitas dasar tambak dan mencegah akumulasi gas beracun.",
    color: "forest",
    benefits: [
      "Mengurai lumpur dan sisa pakan",
      "Mencegah pembentukan H2S dan NH3",
      "Memperbaiki kondisi dasar tambak",
      "Mendukung pertumbuhan plankton alami",
    ],
    application: "Tebarkan 2-3 kg per hektar setiap 2 minggu",
    species: ["Semua Tambak", "Kolam Budidaya", "Keramba"],
    icon: Waves,
  },
];

const testimonials = [
  {
    name: "Pak Sugeng",
    role: "Pembudidaya Udang, Situbondo",
    quote:
      "TRICO-Z WP sangat membantu menjaga kualitas air tambak. Survival rate udang naik dari 65% menjadi 85%. Hasil panen jauh lebih baik.",
    rating: 5,
  },
  {
    name: "Pak Ridwan",
    role: "Pembudidaya Ikan Nila, Sukabumi",
    quote:
      "Kualitas air lebih stabil dan ikan tumbuh optimal. MASHITAM juga membantu mengurangi lumpur di dasar kolam. Sangat recommended!",
    rating: 5,
  },
];

const stats = [
  { value: "50+", label: "Tambak Mitra", icon: Waves },
  { value: "100+", label: "Hektar Kolam", icon: Fish },
  { value: "25%", label: "Peningkatan SR", icon: TrendingUp },
  { value: "2", label: "Produk Unggulan", icon: Beaker },
];

const waterParams = [
  { name: "pH", optimal: "7.5 - 8.5", icon: ThermometerSun },
  { name: "Oksigen", optimal: "> 5 mg/L", icon: Droplets },
  { name: "Amonia", optimal: "< 0.1 mg/L", icon: Waves },
  { name: "Salinitas", optimal: "15 - 25 ppt", icon: Fish },
];

export default function FisheryPage() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".fishery-hero-content > *",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        }
      );
      tl.fromTo(
        ".stat-item",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.3"
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
          className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-microbe-800 via-microbe-700 to-microbe-600 text-white overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,0.3),transparent_50%)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,211,238,0.2),transparent_50%)]" />
          </div>

          <div className="relative container-wide">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-microbe-200 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Solusi
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="fishery-hero-content">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-microbe-500/30 rounded-2xl flex items-center justify-center">
                    <Fish className="w-7 h-7 text-microbe-200" />
                  </div>
                  <span className="px-4 py-1.5 bg-microbe-500/30 text-microbe-200 rounded-full text-sm font-medium">
                    Aquaculture Biotechnology
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                  Solusi Bioteknologi{" "}
                  <span className="text-microbe-200">Perikanan</span>
                </h1>

                <p className="text-lg text-microbe-100 mb-8">
                  Optimalkan budidaya perikanan Anda dengan bioteknologi untuk pengelolaan kualitas air dan kesehatan akuatik. Solusi untuk tambak udang, kolam ikan, dan keramba.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary bg-white text-microbe-700 hover:bg-microbe-50">
                    Konsultasi Gratis
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a href="#products" className="btn-secondary border-microbe-300 text-white hover:bg-microbe-500">
                    Lihat Produk
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="stat-item p-6 bg-white/10 backdrop-blur-sm border border-microbe-300/30 rounded-2xl text-center"
                    >
                      <Icon className="w-8 h-8 text-microbe-200 mx-auto mb-3" />
                      <div className="text-3xl font-display font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-sm text-microbe-200">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Water Parameters */}
        <section className="py-12 bg-microbe-900 text-white">
          <div className="container-wide">
            <div className="text-center mb-8">
              <h3 className="text-lg font-medium text-microbe-300 mb-2">
                Parameter Air Optimal yang Kami Bantu Jaga
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {waterParams.map((param) => {
                const Icon = param.icon;
                return (
                  <div
                    key={param.name}
                    className="p-4 bg-white/5 rounded-xl text-center"
                  >
                    <Icon className="w-6 h-6 text-microbe-400 mx-auto mb-2" />
                    <p className="font-medium text-white">{param.name}</p>
                    <p className="text-sm text-microbe-300">{param.optimal}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="py-20 lg:py-28 bg-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-microbe-100 text-microbe-700 rounded-full text-sm font-medium mb-4">
                Produk Perikanan
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-carbon-900 mb-4">
                Produk Unggulan Kami
              </h2>
              <p className="text-lg text-carbon-600">
                Solusi bioteknologi untuk menjaga kualitas air dan produktivitas budidaya
              </p>
            </div>

            <div className="space-y-16">
              {products.map((product, index) => {
                const Icon = product.icon;
                const isReversed = index % 2 !== 0;
                const colorClasses = {
                  forest: "bg-forest-100 text-forest-600 border-forest-200",
                  microbe: "bg-microbe-100 text-microbe-600 border-microbe-200",
                  soil: "bg-soil-100 text-soil-600 border-soil-200",
                };

                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`grid lg:grid-cols-2 gap-12 items-center ${
                      isReversed ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div className={isReversed ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`w-12 h-12 ${
                            colorClasses[product.color as keyof typeof colorClasses]
                          } rounded-xl flex items-center justify-center border`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-sm text-carbon-500">
                          {product.tagline}
                        </span>
                      </div>

                      <h3 className="text-3xl font-display font-bold text-carbon-900 mb-4">
                        {product.name}
                      </h3>

                      <p className="text-lg text-carbon-600 mb-6">
                        {product.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        {product.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-microbe-500 shrink-0" />
                            <span className="text-carbon-700">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 bg-microbe-50 rounded-xl mb-6">
                        <p className="text-sm text-microbe-700">
                          <strong>Aplikasi:</strong> {product.application}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {product.species.map((species) => (
                          <span
                            key={species}
                            className="px-3 py-1 bg-carbon-100 text-carbon-600 rounded-full text-sm"
                          >
                            {species}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={isReversed ? "lg:order-1" : ""}>
                      <div className="aspect-square bg-gradient-to-br from-microbe-100 to-microbe-50 rounded-3xl flex items-center justify-center">
                        <Icon className="w-32 h-32 text-microbe-200" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 lg:py-28 bg-microbe-50">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-carbon-900 mb-4">
                Kata Pembudidaya Kami
              </h2>
              <p className="text-lg text-carbon-600">
                Pengalaman langsung dari pembudidaya yang telah menggunakan produk kami
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-carbon-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-carbon-900">{testimonial.name}</p>
                    <p className="text-sm text-carbon-500">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-microbe-600 to-microbe-800 text-white">
          <div className="container-wide text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Siap Meningkatkan Hasil Budidaya?
              </h2>
              <p className="text-lg text-microbe-100 mb-8">
                Konsultasikan kebutuhan budidaya perikanan Anda dengan tim ahli kami. Gratis dan tanpa komitmen.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary bg-white text-microbe-700 hover:bg-microbe-50">
                  Hubungi Kami
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/news" className="btn-secondary border-white/30 text-white hover:bg-white/10">
                  Lihat Studi Kasus
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

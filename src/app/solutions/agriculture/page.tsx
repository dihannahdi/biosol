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
  Wheat,
  Leaf,
  Droplets,
  Bug,
  Shield,
  TrendingUp,
  CheckCircle2,
  Beaker,
  Sprout,
  Factory,
  Users,
} from "lucide-react";

const products = [
  {
    id: "floraone",
    name: "FloraOne",
    tagline: "Pupuk Hayati Premium",
    description:
      "Pupuk hayati berbasis mikroba yang meningkatkan kesuburan tanah dan memperbaiki struktur tanah secara alami. Mengandung bakteri penambat nitrogen dan pelarut fosfat.",
    color: "forest",
    benefits: [
      "Meningkatkan ketersediaan nitrogen alami",
      "Memperbaiki struktur dan porositas tanah",
      "Meningkatkan serapan nutrisi tanaman",
      "Memperkuat sistem perakaran",
    ],
    application: "Semprotkan 2-3 liter per hektar setiap 2 minggu",
    crops: ["Padi", "Jagung", "Sayuran", "Buah-buahan"],
    icon: Sprout,
  },
  {
    id: "biokiller",
    name: "BioKiller",
    tagline: "Pestisida Hayati",
    description:
      "Pestisida organik berbasis Beauveria bassiana dan Metarhizium anisopliae yang efektif mengendalikan hama tanaman tanpa merusak ekosistem.",
    color: "microbe",
    benefits: [
      "Efektif terhadap berbagai hama",
      "Aman bagi musuh alami hama",
      "Tidak meninggalkan residu kimia",
      "Ramah lingkungan",
    ],
    application: "Semprot 1-2 liter per hektar saat populasi hama tinggi",
    crops: ["Semua tanaman", "Hortikultura", "Perkebunan"],
    icon: Bug,
  },
  {
    id: "biojagat",
    name: "BIOJAGAT",
    tagline: "Dekomposer Organik",
    description:
      "Dekomposer berbasis mikroba untuk mempercepat penguraian bahan organik dan limbah pertanian menjadi pupuk kompos berkualitas.",
    color: "soil",
    benefits: [
      "Proses komposting 2x lebih cepat",
      "Menghasilkan pupuk kompos berkualitas",
      "Mengurangi limbah pertanian",
      "Memperkaya mikrobioma tanah",
    ],
    application: "Campurkan 1 liter per ton bahan organik",
    crops: ["Pengomposan", "Pengelolaan Limbah"],
    icon: Factory,
  },
];

const testimonials = [
  {
    name: "Pak Sutrisno",
    role: "Petani Padi, Klaten",
    quote:
      "Setelah pakai FloraOne selama 2 musim, hasil panen meningkat 40% dan tanah terasa lebih gembur. Saya sangat puas.",
    rating: 5,
  },
  {
    name: "Bu Wati",
    role: "Petani Sayur, Batu",
    quote:
      "BioKiller sangat efektif mengatasi ulat dan hama lainnya. Sayuran saya bebas residu kimia dan laku keras di pasar organik.",
    rating: 5,
  },
];

const stats = [
  { value: "5000+", label: "Hektar Terolah", icon: Wheat },
  { value: "500+", label: "Petani Mitra", icon: Users },
  { value: "40%", label: "Rata-rata Peningkatan", icon: TrendingUp },
  { value: "3", label: "Produk Unggulan", icon: Beaker },
];

export default function AgriculturePage() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".agri-hero-content > *",
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
          className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-forest-900 via-forest-800 to-forest-700 text-white overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(34,197,94,0.3),transparent_50%)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,197,94,0.2),transparent_50%)]" />
          </div>

          <div className="relative container-wide">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-forest-200 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Solusi
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="agri-hero-content">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-forest-500/30 rounded-2xl flex items-center justify-center">
                    <Wheat className="w-7 h-7 text-forest-200" />
                  </div>
                  <span className="px-4 py-1.5 bg-forest-500/30 text-forest-200 rounded-full text-sm font-medium">
                    Agricultural Biotechnology
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                  Solusi Bioteknologi{" "}
                  <span className="text-forest-300">Pertanian</span>
                </h1>

                <p className="text-lg text-forest-100 mb-8">
                  Tingkatkan produktivitas pertanian Anda dengan produk bioteknologi yang terbukti efektif. Dari pupuk hayati hingga pestisida organik, kami menyediakan solusi lengkap untuk pertanian berkelanjutan.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary bg-white text-forest-700 hover:bg-forest-50">
                    Konsultasi Gratis
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a href="#products" className="btn-secondary border-forest-400 text-white hover:bg-forest-600">
                    Lihat Produk
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="stat-item p-6 bg-white/10 backdrop-blur-sm border border-forest-400/30 rounded-2xl text-center"
                    >
                      <Icon className="w-8 h-8 text-forest-300 mx-auto mb-3" />
                      <div className="text-3xl font-display font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-sm text-forest-200">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="py-20 lg:py-28 bg-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-forest-100 text-forest-700 rounded-full text-sm font-medium mb-4">
                Produk Pertanian
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-carbon-900 mb-4">
                Produk Unggulan Kami
              </h2>
              <p className="text-lg text-carbon-600">
                Tiga produk andalan untuk meningkatkan hasil pertanian Anda secara berkelanjutan
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
                            <CheckCircle2 className="w-5 h-5 text-forest-500 shrink-0" />
                            <span className="text-carbon-700">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 bg-forest-50 rounded-xl mb-6">
                        <p className="text-sm text-forest-700">
                          <strong>Aplikasi:</strong> {product.application}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {product.crops.map((crop) => (
                          <span
                            key={crop}
                            className="px-3 py-1 bg-carbon-100 text-carbon-600 rounded-full text-sm"
                          >
                            {crop}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={isReversed ? "lg:order-1" : ""}>
                      <div className="aspect-square bg-gradient-to-br from-forest-100 to-forest-50 rounded-3xl flex items-center justify-center">
                        <Icon className="w-32 h-32 text-forest-200" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 lg:py-28 bg-forest-50">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-carbon-900 mb-4">
                Kata Petani Kami
              </h2>
              <p className="text-lg text-carbon-600">
                Dengarkan pengalaman langsung dari petani yang telah menggunakan produk kami
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
        <section className="py-20 lg:py-28 bg-gradient-to-br from-forest-600 to-forest-800 text-white">
          <div className="container-wide text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Siap Meningkatkan Hasil Panen?
              </h2>
              <p className="text-lg text-forest-100 mb-8">
                Konsultasikan kebutuhan pertanian Anda dengan tim ahli kami. Gratis dan tanpa komitmen.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary bg-white text-forest-700 hover:bg-forest-50">
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

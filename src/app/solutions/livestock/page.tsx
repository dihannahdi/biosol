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
  Bird,
  Heart,
  Shield,
  TrendingUp,
  CheckCircle2,
  Beaker,
  Factory,
  Users,
  Egg,
  Milk,
} from "lucide-react";

const products = [
  {
    id: "rajabio",
    name: "RAJABIO",
    tagline: "Probiotik Unggas Premium",
    description:
      "Probiotik multi-strain khusus unggas yang meningkatkan kesehatan pencernaan, imunitas, dan produktivitas ayam broiler maupun layer.",
    color: "soil",
    benefits: [
      "Meningkatkan FCR (Feed Conversion Ratio)",
      "Mengurangi mortalitas hingga 35%",
      "Memperkuat sistem imun alami",
      "Mengurangi bau kandang",
    ],
    application: "Campurkan 1 ml per liter air minum",
    animals: ["Ayam Broiler", "Ayam Layer", "Bebek", "Puyuh"],
    icon: Bird,
  },
  {
    id: "megabio",
    name: "MEGABIO",
    tagline: "Suplemen Ternak Ruminansia",
    description:
      "Suplemen probiotik untuk sapi, kambing, dan domba yang meningkatkan kesehatan rumen, penyerapan nutrisi, dan produktivitas ternak.",
    color: "forest",
    benefits: [
      "Meningkatkan produksi susu hingga 20%",
      "Memperbaiki kesehatan pencernaan",
      "Optimalisasi penyerapan nutrisi",
      "Mengurangi risiko kembung (bloat)",
    ],
    application: "Campurkan 50 ml per ekor per hari dalam pakan",
    animals: ["Sapi Perah", "Sapi Potong", "Kambing", "Domba"],
    icon: Milk,
  },
  {
    id: "simbios",
    name: "SIMBIOS",
    tagline: "Pengelola Limbah Kandang",
    description:
      "Bioaktivator untuk mempercepat penguraian limbah kandang, mengurangi bau, dan menghasilkan pupuk organik berkualitas.",
    color: "microbe",
    benefits: [
      "Mengurangi bau kandang 70%",
      "Proses penguraian lebih cepat",
      "Menghasilkan pupuk organik",
      "Mengendalikan lalat dan serangga",
    ],
    application: "Semprotkan 1 liter per 10 m² area kandang",
    animals: ["Semua Ternak", "Kandang Unggas", "Kandang Ruminansia"],
    icon: Factory,
  },
];

const testimonials = [
  {
    name: "H. Bambang Sutopo",
    role: "Peternak Ayam, Surabaya",
    quote:
      "Setelah menggunakan RAJABIO, mortalitas ayam turun drastis. FCR juga membaik, dari 1.8 menjadi 1.5. Hasil sangat memuaskan.",
    rating: 5,
  },
  {
    name: "Pak Darmanto",
    role: "Peternak Sapi Perah, Lembang",
    quote:
      "MEGABIO benar-benar membantu produksi susu. Rata-rata naik 3-4 liter per ekor per hari. Kesehatan sapi juga lebih baik.",
    rating: 5,
  },
];

const stats = [
  { value: "100+", label: "Farm Mitra", icon: Factory },
  { value: "1M+", label: "Ekor Ternak", icon: Bird },
  { value: "35%", label: "Penurunan Mortalitas", icon: Shield },
  { value: "3", label: "Produk Unggulan", icon: Beaker },
];

export default function LivestockPage() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".livestock-hero-content > *",
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
          className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-soil-800 via-soil-700 to-soil-600 text-white overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(180,140,100,0.3),transparent_50%)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(180,140,100,0.2),transparent_50%)]" />
          </div>

          <div className="relative container-wide">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-soil-200 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Solusi
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="livestock-hero-content">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-soil-500/30 rounded-2xl flex items-center justify-center">
                    <Bird className="w-7 h-7 text-soil-200" />
                  </div>
                  <span className="px-4 py-1.5 bg-soil-500/30 text-soil-200 rounded-full text-sm font-medium">
                    Livestock Biotechnology
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                  Solusi Bioteknologi{" "}
                  <span className="text-soil-200">Peternakan</span>
                </h1>

                <p className="text-lg text-soil-100 mb-8">
                  Tingkatkan produktivitas dan kesehatan ternak Anda dengan probiotik dan suplemen berbasis mikroba. Solusi alami untuk peternakan modern yang berkelanjutan.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary bg-white text-soil-700 hover:bg-soil-50">
                    Konsultasi Gratis
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a href="#products" className="btn-secondary border-soil-300 text-white hover:bg-soil-500">
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
                      className="stat-item p-6 bg-white/10 backdrop-blur-sm border border-soil-300/30 rounded-2xl text-center"
                    >
                      <Icon className="w-8 h-8 text-soil-200 mx-auto mb-3" />
                      <div className="text-3xl font-display font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-sm text-soil-200">{stat.label}</div>
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
              <span className="inline-block px-4 py-1.5 bg-soil-100 text-soil-700 rounded-full text-sm font-medium mb-4">
                Produk Peternakan
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-carbon-900 mb-4">
                Produk Unggulan Kami
              </h2>
              <p className="text-lg text-carbon-600">
                Probiotik dan suplemen berkualitas untuk berbagai jenis ternak
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
                            <CheckCircle2 className="w-5 h-5 text-soil-500 shrink-0" />
                            <span className="text-carbon-700">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 bg-soil-50 rounded-xl mb-6">
                        <p className="text-sm text-soil-700">
                          <strong>Aplikasi:</strong> {product.application}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {product.animals.map((animal) => (
                          <span
                            key={animal}
                            className="px-3 py-1 bg-carbon-100 text-carbon-600 rounded-full text-sm"
                          >
                            {animal}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={isReversed ? "lg:order-1" : ""}>
                      <div className="aspect-square bg-gradient-to-br from-soil-100 to-soil-50 rounded-3xl flex items-center justify-center">
                        <Icon className="w-32 h-32 text-soil-200" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 lg:py-28 bg-soil-50">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-carbon-900 mb-4">
                Kata Peternak Kami
              </h2>
              <p className="text-lg text-carbon-600">
                Pengalaman langsung dari peternak yang telah menggunakan produk kami
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
        <section className="py-20 lg:py-28 bg-gradient-to-br from-soil-600 to-soil-800 text-white">
          <div className="container-wide text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Siap Meningkatkan Produktivitas Ternak?
              </h2>
              <p className="text-lg text-soil-100 mb-8">
                Konsultasikan kebutuhan peternakan Anda dengan tim ahli kami. Gratis dan tanpa komitmen.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary bg-white text-soil-700 hover:bg-soil-50">
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

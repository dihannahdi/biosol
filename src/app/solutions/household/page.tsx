"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";
import Link from "next/link";
import { GSAPProvider } from "@/lib/gsap-provider";
import { Header, Footer } from "@/components/layout";
import { getProductsByCategory } from "@/lib/products-data";
import {
  ArrowRight,
  ArrowLeft,
  Home,
  Sparkles,
  Shield,
  TrendingUp,
  CheckCircle2,
  Beaker,
  Droplets,
  Users,
  Building,
  Wind,
  Leaf,
  BadgeCheck,
} from "lucide-react";

const products = [
  {
    id: "septic-clean",
    slug: "formula-pengurai-septictank",
    name: "SEPTIC CLEAN",
    tagline: "Pengurai Septictank Bio-Aktif",
    description:
      "Formula bio-enzim canggih untuk mengurai limbah septictank secara alami. Menghilangkan bau tidak sedap dan mencegah penyumbatan saluran pembuangan.",
    color: "forest",
    benefits: [
      "Mengurai limbah organik 3x lebih cepat",
      "Menghilangkan bau tidak sedap",
      "Mencegah penyumbatan saluran",
      "Ramah lingkungan dan aman digunakan",
    ],
    application: "Gunakan 1 sachet per minggu untuk septictank standar",
    targets: ["Rumah Tangga", "Hotel", "Restoran", "Perkantoran", "Rumah Sakit"],
    icon: Droplets,
  },
  {
    id: "bio-fresh",
    slug: "formula-penghilang-bau",
    name: "BIO FRESH",
    tagline: "Penghilang Bau Biologis",
    description:
      "Solusi penghilang bau berbasis mikroba menguntungkan. Tidak hanya menutupi bau, tetapi mengurai sumber bau secara biologis untuk hasil yang permanen.",
    color: "microbe",
    benefits: [
      "Menghilangkan bau dari sumbernya",
      "Efektif untuk berbagai jenis bau",
      "Aman untuk manusia dan hewan peliharaan",
      "Ramah lingkungan tanpa bahan kimia keras",
    ],
    application: "Semprotkan langsung pada area berbau, biarkan bekerja",
    targets: ["Kamar Mandi", "Dapur", "Tempat Sampah", "Area Hewan", "Saluran Air"],
    icon: Wind,
  },
];

const testimonials = [
  {
    name: "Ibu Dewi",
    role: "Housekeeping Manager, Grand Hotel Surabaya",
    quote:
      "SEPTIC CLEAN benar-benar solusi untuk masalah septictank hotel kami. Tidak ada lagi bau tidak sedap dan penyumbatan. Tamu sangat puas!",
    rating: 5,
  },
  {
    name: "Pak Hendra",
    role: "Pemilik Rumah, Jakarta Selatan",
    quote:
      "BIO FRESH sangat efektif menghilangkan bau di area tempat sampah dan kamar mandi. Tidak seperti produk lain yang hanya menutupi bau sementara.",
    rating: 5,
  },
];

const stats = [
  { value: "500+", label: "Rumah Tangga", icon: Home },
  { value: "50+", label: "Hotel Mitra", icon: Building },
  { value: "95%", label: "Tingkat Kepuasan", icon: BadgeCheck },
  { value: "2", label: "Produk Unggulan", icon: Beaker },
];

const useCases = [
  { 
    name: "Rumah Tangga", 
    description: "Solusi lengkap untuk septictank dan penghilang bau rumahan",
    icon: Home 
  },
  { 
    name: "Hotel & Hospitality", 
    description: "Menjaga kebersihan dan kenyamanan tamu hotel",
    icon: Building 
  },
  { 
    name: "Restoran & Kuliner", 
    description: "Pengelolaan limbah dapur dan area sanitasi",
    icon: Sparkles 
  },
  { 
    name: "Perkantoran", 
    description: "Fasilitas toilet dan area umum yang bersih",
    icon: Users 
  },
];

export default function HouseholdPage() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".household-hero-content > *",
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
          className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-teal-800 via-teal-700 to-teal-600 text-white overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(20,184,166,0.3),transparent_50%)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(20,184,166,0.2),transparent_50%)]" />
          </div>

          <div className="relative container-wide">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-teal-200 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Solusi
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="household-hero-content">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-teal-500/30 rounded-2xl flex items-center justify-center">
                    <Home className="w-7 h-7 text-teal-200" />
                  </div>
                  <span className="px-4 py-1.5 bg-teal-500/30 text-teal-200 rounded-full text-sm font-medium">
                    Household Biotechnology
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                  Solusi Bioteknologi{" "}
                  <span className="text-teal-200">Rumah Tangga</span>
                </h1>

                <p className="text-lg text-teal-100 mb-8">
                  Diformulasikan untuk rumah tangga dan hotel, solusi biologis kami memastikan kebersihan maksimal sekaligus menjaga keberlanjutan lingkungan.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary bg-white text-teal-700 hover:bg-teal-50">
                    Konsultasi Gratis
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a href="#products" className="btn-secondary border-teal-300 text-white hover:bg-teal-500">
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
                      className="stat-item p-6 bg-white/10 backdrop-blur-sm border border-teal-300/30 rounded-2xl text-center"
                    >
                      <Icon className="w-8 h-8 text-teal-200 mx-auto mb-3" />
                      <div className="text-3xl font-display font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-sm text-teal-200">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container-wide">
            <div className="text-center mb-12">
              <span className="text-teal-600 font-medium mb-2 block">APLIKASI</span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-carbon-900">
                Cocok untuk Berbagai Kebutuhan
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase) => {
                const Icon = useCase.icon;
                return (
                  <motion.div
                    key={useCase.name}
                    whileHover={{ y: -5 }}
                    className="p-6 bg-gradient-to-br from-teal-50 to-white rounded-2xl border border-teal-100"
                  >
                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-carbon-900 mb-2">
                      {useCase.name}
                    </h3>
                    <p className="text-carbon-600 text-sm">{useCase.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="py-16 lg:py-24 bg-gradient-to-b from-soil-50 to-white">
          <div className="container-wide">
            <div className="text-center mb-12">
              <span className="text-teal-600 font-medium mb-2 block">PRODUK</span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-carbon-900 mb-4">
                Produk Household Care
              </h2>
              <p className="text-carbon-600 max-w-2xl mx-auto">
                Solusi biologis yang efektif dan ramah lingkungan untuk kebutuhan kebersihan rumah tangga dan hospitality.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {products.map((product, index) => {
                const Icon = product.icon;
                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-3xl shadow-lg border border-carbon-100 overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className={`p-6 bg-gradient-to-r ${product.color === 'forest' ? 'from-teal-600 to-teal-700' : 'from-cyan-600 to-cyan-700'} text-white`}>
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                          <Icon className="w-7 h-7" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-display font-bold">{product.name}</h3>
                          <p className="text-white/80">{product.tagline}</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-carbon-600 mb-6">{product.description}</p>

                      <h4 className="font-semibold text-carbon-900 mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-teal-600" />
                        Manfaat Utama
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {product.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-carbon-700 text-sm">
                            <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {product.targets.map((target, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-medium"
                          >
                            {target}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <Link
                          href={`/products/${product.slug}`}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-colors"
                        >
                          Detail Produk
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a
                          href={`https://wa.me/6285742249591?text=Halo,%20saya%20tertarik%20dengan%20produk%20${product.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-3 border-2 border-teal-200 text-teal-700 rounded-xl font-semibold hover:bg-teal-50 transition-colors"
                        >
                          Hubungi
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Bio-Based */}
        <section className="py-16 lg:py-20 bg-gradient-to-r from-teal-700 to-teal-800 text-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                  Mengapa Memilih Solusi Biologis?
                </h2>
                <p className="text-teal-100 mb-8">
                  Produk berbasis bioteknologi kami bekerja dengan alam, bukan melawannya. Mikroba menguntungkan mengurai limbah dan menghilangkan bau secara alami, tanpa bahan kimia keras yang dapat merusak lingkungan.
                </p>

                <ul className="space-y-4">
                  {[
                    "Ramah lingkungan dan biodegradable",
                    "Aman untuk septictank dan saluran air",
                    "Tidak mengandung bahan kimia berbahaya",
                    "Efektif mengatasi masalah dari sumbernya",
                    "Hemat biaya dalam jangka panjang",
                  ].map((point, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Leaf, title: "100% Alami", desc: "Berbasis mikroba" },
                  { icon: Shield, title: "Aman", desc: "Non-toxic formula" },
                  { icon: Sparkles, title: "Efektif", desc: "Hasil permanen" },
                  { icon: BadgeCheck, title: "Terpercaya", desc: "Lab-tested" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                      <Icon className="w-10 h-10 text-teal-300 mx-auto mb-3" />
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-teal-200 text-sm">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-carbon-900 mb-4">
                Testimoni Pengguna
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.blockquote
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-3xl border border-teal-100"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Sparkles key={i} className="w-5 h-5 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-lg text-carbon-700 italic mb-6">"{testimonial.quote}"</p>
                  <footer>
                    <p className="font-semibold text-carbon-900">{testimonial.name}</p>
                    <p className="text-sm text-carbon-500">{testimonial.role}</p>
                  </footer>
                </motion.blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-20 bg-gradient-to-r from-teal-600 to-teal-700">
          <div className="container-wide text-center">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
              Siap untuk Rumah yang Lebih Bersih & Sehat?
            </h2>
            <p className="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
              Konsultasikan kebutuhan Anda dengan tim ahli kami dan dapatkan solusi yang tepat.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/6285742249591?text=Halo,%20saya%20tertarik%20dengan%20produk%20Household%20Care"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-700 rounded-xl font-semibold text-lg hover:bg-teal-50 transition-colors"
              >
                WhatsApp Sekarang
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                Lihat Semua Produk
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </GSAPProvider>
  );
}

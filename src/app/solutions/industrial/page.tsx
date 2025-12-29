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
  Factory,
  Recycle,
  Shield,
  TrendingUp,
  CheckCircle2,
  Beaker,
  Droplets,
  Cog,
  Leaf,
  BadgeCheck,
  Zap,
  Gauge,
  FlaskConical,
} from "lucide-react";

const products = [
  {
    id: "indus-waste",
    slug: "formula-pengurai-limbah-industri",
    name: "INDUS WASTE",
    tagline: "Bioremediator Limbah Industri",
    description:
      "Konsorsium mikroba khusus untuk pengolahan limbah industri. Efektif mengurai senyawa organik kompleks dan menurunkan parameter pencemaran (BOD, COD, TSS).",
    color: "indigo",
    benefits: [
      "Menurunkan BOD/COD hingga 90%",
      "Mengurai senyawa organik kompleks",
      "Mempercepat proses pengolahan limbah",
      "Memenuhi baku mutu lingkungan",
    ],
    application: "Aplikasikan sesuai volume IPAL, konsultasi untuk dosis optimal",
    targets: ["Pabrik Makanan", "Tekstil", "Kertas", "Farmasi", "Kimia"],
    icon: Factory,
  },
  {
    id: "agri-decomposer",
    slug: "formula-pengurai-limbah-pertanian",
    name: "AGRI DECOMPOSER",
    tagline: "Pengurai Limbah Organik Industri",
    description:
      "Formula khusus untuk mengurai limbah pertanian dan tekstil. Mengubah limbah menjadi pupuk organik berkualitas tinggi, mendukung ekonomi sirkular.",
    color: "emerald",
    benefits: [
      "Mengurai limbah pertanian 5x lebih cepat",
      "Menghasilkan pupuk organik berkualitas",
      "Mengurangi volume limbah signifikan",
      "Mendukung ekonomi sirkular",
    ],
    application: "Campurkan dengan limbah, aduk rata, biarkan fermentasi",
    targets: ["Pabrik Gula", "Sawit", "Karet", "Tekstil", "Kertas"],
    icon: Recycle,
  },
];

const testimonials = [
  {
    name: "Pak Bambang",
    role: "Environmental Manager, PT Textile Indonesia",
    quote:
      "INDUS WASTE membantu kami memenuhi baku mutu limbah. COD turun dari 800 menjadi 80 mg/L. Proses lebih efisien dan biaya operasional menurun.",
    rating: 5,
  },
  {
    name: "Ibu Ratna",
    role: "Plant Manager, PT Agro Industri",
    quote:
      "AGRI DECOMPOSER mengubah limbah sawit kami menjadi pupuk berkualitas. Sekarang limbah menjadi sumber pendapatan tambahan, bukan beban.",
    rating: 5,
  },
];

const stats = [
  { value: "30+", label: "Industri Mitra", icon: Factory },
  { value: "90%", label: "Penurunan COD", icon: TrendingUp },
  { value: "500K", label: "Ton Limbah/Tahun", icon: Recycle },
  { value: "2", label: "Produk Unggulan", icon: Beaker },
];

const industries = [
  { 
    name: "Industri Makanan", 
    description: "Pengolahan limbah organik pabrik makanan dan minuman",
    icon: Cog 
  },
  { 
    name: "Industri Tekstil", 
    description: "Bioremediasi limbah pewarnaan dan proses tekstil",
    icon: Factory 
  },
  { 
    name: "Industri Kertas", 
    description: "Pengolahan limbah pulp dan serat kertas",
    icon: Recycle 
  },
  { 
    name: "Agro-Industri", 
    description: "Pengolahan limbah sawit, karet, dan pertanian",
    icon: Leaf 
  },
];

export default function IndustrialPage() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".industrial-hero-content > *",
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
          className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-700 text-white overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.3),transparent_50%)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.2),transparent_50%)]" />
          </div>

          <div className="relative container-wide">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-indigo-200 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Solusi
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="industrial-hero-content">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-indigo-500/30 rounded-2xl flex items-center justify-center">
                    <Factory className="w-7 h-7 text-indigo-200" />
                  </div>
                  <span className="px-4 py-1.5 bg-indigo-500/30 text-indigo-200 rounded-full text-sm font-medium">
                    Industrial Biotechnology
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                  Solusi Bioteknologi{" "}
                  <span className="text-indigo-200">Bioproses Industri</span>
                </h1>

                <p className="text-lg text-indigo-100 mb-8">
                  Dirancang untuk bioproses industri, solusi bio kami memungkinkan optimalisasi proses dan peningkatan efisiensi produksi secara berkelanjutan.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary bg-white text-indigo-700 hover:bg-indigo-50">
                    Konsultasi Gratis
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a href="#products" className="btn-secondary border-indigo-300 text-white hover:bg-indigo-500">
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
                      className="stat-item p-6 bg-white/10 backdrop-blur-sm border border-indigo-300/30 rounded-2xl text-center"
                    >
                      <Icon className="w-8 h-8 text-indigo-200 mx-auto mb-3" />
                      <div className="text-3xl font-display font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-sm text-indigo-200">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container-wide">
            <div className="text-center mb-12">
              <span className="text-indigo-600 font-medium mb-2 block">SEKTOR INDUSTRI</span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-carbon-900">
                Melayani Berbagai Sektor Industri
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <motion.div
                    key={industry.name}
                    whileHover={{ y: -5 }}
                    className="p-6 bg-gradient-to-br from-indigo-50 to-white rounded-2xl border border-indigo-100"
                  >
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-carbon-900 mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-carbon-600 text-sm">{industry.description}</p>
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
              <span className="text-indigo-600 font-medium mb-2 block">PRODUK</span>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-carbon-900 mb-4">
                Produk Bioproses Industri
              </h2>
              <p className="text-carbon-600 max-w-2xl mx-auto">
                Solusi bioremediasi dan pengolahan limbah berbasis bioteknologi untuk industri yang berkelanjutan.
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
                    <div className={`p-6 bg-gradient-to-r ${product.color === 'indigo' ? 'from-indigo-600 to-indigo-700' : 'from-emerald-600 to-emerald-700'} text-white`}>
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
                        <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                        Manfaat Utama
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {product.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-carbon-700 text-sm">
                            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-1.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {product.targets.map((target, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium"
                          >
                            {target}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <Link
                          href={`/products/${product.slug}`}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
                        >
                          Detail Produk
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a
                          href={`https://wa.me/6285742249591?text=Halo,%20saya%20tertarik%20dengan%20produk%20${product.name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-3 border-2 border-indigo-200 text-indigo-700 rounded-xl font-semibold hover:bg-indigo-50 transition-colors"
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

        {/* Process */}
        <section className="py-16 lg:py-20 bg-gradient-to-r from-indigo-800 to-indigo-900 text-white">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
                Proses Bioremediasi Kami
              </h2>
              <p className="text-indigo-200 max-w-2xl mx-auto">
                Pendekatan sistematis untuk pengolahan limbah industri yang efektif dan berkelanjutan.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Analisis", desc: "Karakterisasi limbah dan identifikasi parameter kunci", icon: FlaskConical },
                { step: "02", title: "Formulasi", desc: "Pemilihan konsorsium mikroba yang tepat", icon: Beaker },
                { step: "03", title: "Aplikasi", desc: "Implementasi sistem bioremediasi", icon: Cog },
                { step: "04", title: "Monitoring", desc: "Pemantauan dan optimalisasi berkelanjutan", icon: Gauge },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.step}
                    whileHover={{ y: -5 }}
                    className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-indigo-400/30 text-center"
                  >
                    <div className="text-4xl font-display font-bold text-indigo-300 mb-4">
                      {item.step}
                    </div>
                    <Icon className="w-10 h-10 text-indigo-200 mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-indigo-200 text-sm">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-indigo-600 font-medium mb-2 block">KEUNGGULAN</span>
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-carbon-900 mb-6">
                  Mengapa Bioremediasi?
                </h2>
                <p className="text-carbon-600 mb-8">
                  Pendekatan biologis untuk pengolahan limbah industri menawarkan keunggulan signifikan dibandingkan metode konvensional.
                </p>

                <ul className="space-y-4">
                  {[
                    { title: "Biaya Lebih Rendah", desc: "Operasional lebih hemat dibanding treatment kimia" },
                    { title: "Ramah Lingkungan", desc: "Tidak menghasilkan limbah sekunder berbahaya" },
                    { title: "Efektif", desc: "Menurunkan parameter pencemaran hingga 90%" },
                    { title: "Berkelanjutan", desc: "Mendukung prinsip ekonomi sirkular" },
                    { title: "Regulasi", desc: "Membantu memenuhi baku mutu lingkungan" },
                  ].map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-carbon-900">{point.title}:</span>{" "}
                        <span className="text-carbon-600">{point.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Zap, title: "Efisien", value: "50%", label: "Hemat Biaya" },
                  { icon: Recycle, title: "Berkelanjutan", value: "100%", label: "Biodegradable" },
                  { icon: Shield, title: "Aman", value: "0", label: "Limbah Sekunder" },
                  { icon: BadgeCheck, title: "Terpercaya", value: "30+", label: "Klien Industri" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="p-6 bg-gradient-to-br from-indigo-50 to-white rounded-2xl border border-indigo-100 text-center">
                      <Icon className="w-10 h-10 text-indigo-600 mx-auto mb-3" />
                      <div className="text-2xl font-display font-bold text-indigo-700">{item.value}</div>
                      <p className="text-carbon-600 text-sm">{item.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-soil-50 to-white">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-carbon-900 mb-4">
                Testimoni Klien Industri
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
                  className="bg-white p-8 rounded-3xl border border-indigo-100 shadow-lg"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <BadgeCheck key={i} className="w-5 h-5 text-indigo-500" />
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
        <section className="py-16 lg:py-20 bg-gradient-to-r from-indigo-700 to-indigo-800">
          <div className="container-wide text-center">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
              Siap Mengoptimalkan Pengolahan Limbah Industri Anda?
            </h2>
            <p className="text-lg text-indigo-200 mb-8 max-w-2xl mx-auto">
              Tim ahli kami siap membantu menganalisis kebutuhan dan memberikan solusi yang tepat untuk industri Anda.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/6285742249591?text=Halo,%20saya%20tertarik%20dengan%20solusi%20Bioproses%20Industri"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-700 rounded-xl font-semibold text-lg hover:bg-indigo-50 transition-colors"
              >
                Konsultasi Sekarang
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

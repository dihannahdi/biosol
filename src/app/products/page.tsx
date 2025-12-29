"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Leaf,
  Bug,
  Fish,
  Warehouse,
  Beef,
  ArrowRight,
  Sparkles,
  Shield,
  Droplets,
  FlaskConical,
  CheckCircle2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const productCategories = [
  {
    id: "plant",
    icon: Leaf,
    title: "Formula Biosekuriti Tanaman",
    subtitle: "Perlindungan & Nutrisi Tanaman",
    description:
      "Formula hayati untuk melindungi tanaman dari hama dan penyakit, meningkatkan kesuburan tanah, dan memaksimalkan hasil panen secara organik.",
    products: [
      "Formula Pengendalian Ulat Grayak",
      "Formula Insektisida Anti-Resistensi",
      "Formula Pupuk Hayati Cair",
      "Formula Kesuburan Tanah Optimal",
    ],
    href: "/solutions/plant",
    color: "emerald",
    stats: { products: "15+", efficacy: "85%", farmers: "1000+" },
  },
  {
    id: "agriculture",
    icon: Warehouse,
    title: "Formula Pertanian Terpadu",
    subtitle: "Solusi Pertanian Berkelanjutan",
    description:
      "Formula komprehensif untuk sistem pertanian berkelanjutan, mulai dari pengolahan lahan hingga pasca panen.",
    products: [
      "Formula Restorasi Lahan Kritis",
      "Formula Pembenah Tanah Organik",
      "Formula Simbiosis Mikroba",
      "Formula Padi Organik",
    ],
    href: "/solutions/agriculture",
    color: "amber",
    stats: { products: "12+", area: "50K Ha", organic: "100%" },
  },
  {
    id: "fishery",
    icon: Fish,
    title: "Formula Budidaya Perikanan",
    subtitle: "Akuakultur Berkelanjutan",
    description:
      "Formula probiotik dan biosekuriti untuk meningkatkan kesehatan ikan, kualitas air, dan produktivitas tambak.",
    products: [
      "Formula Probiotik Ikan",
      "Formula Kualitas Air Tambak",
      "Formula Anti-Patogen Akuatik",
      "Formula Nutrisi Udang",
    ],
    href: "/solutions/fishery",
    color: "cyan",
    stats: { products: "10+", survival: "95%", ponds: "500+" },
  },
  {
    id: "livestock",
    icon: Beef,
    title: "Formula Peternakan Modern",
    subtitle: "Kesehatan & Produktivitas Ternak",
    description:
      "Formula probiotik dan nutrisi untuk meningkatkan kesehatan, pertumbuhan, dan produktivitas ternak besar.",
    products: [
      "Formula Probiotik Sapi",
      "Formula Nutrisi Ternak",
      "Formula Kesehatan Pencernaan",
      "Formula Produktivitas Susu",
    ],
    href: "/solutions/livestock",
    color: "orange",
    stats: { products: "8+", health: "90%", farms: "200+" },
  },
  {
    id: "animal",
    icon: Bug,
    title: "Formula Kesehatan Hewan",
    subtitle: "Peternakan Unggas & Kecil",
    description:
      "Formula khusus untuk kesehatan dan produktivitas unggas serta hewan ternak kecil.",
    products: [
      "Formula Probiotik Unggas",
      "Formula Imunitas Ayam",
      "Formula Produktivitas Telur",
      "Formula Kesehatan Kambing",
    ],
    href: "/solutions/animal",
    color: "rose",
    stats: { products: "10+", immunity: "85%", poultry: "1M+" },
  },
];

const features = [
  {
    icon: FlaskConical,
    title: "Berbasis Riset",
    description: "Dikembangkan oleh tim ahli bioteknologi Indonesia",
  },
  {
    icon: Shield,
    title: "100% Organik",
    description: "Aman untuk lingkungan, petani, dan konsumen",
  },
  {
    icon: Droplets,
    title: "Mudah Aplikasi",
    description: "Formula siap pakai dengan panduan lengkap",
  },
  {
    icon: Sparkles,
    title: "Hasil Terukur",
    description: "Peningkatan produktivitas yang terbukti",
  },
];

export default function ProductsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".product-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".products-grid",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".feature-item",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".features-section",
            start: "top 85%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; icon: string }> = {
      emerald: {
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/30 hover:border-emerald-400/50",
        text: "text-emerald-400",
        icon: "bg-emerald-500/20",
      },
      amber: {
        bg: "bg-amber-500/10",
        border: "border-amber-500/30 hover:border-amber-400/50",
        text: "text-amber-400",
        icon: "bg-amber-500/20",
      },
      cyan: {
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/30 hover:border-cyan-400/50",
        text: "text-cyan-400",
        icon: "bg-cyan-500/20",
      },
      orange: {
        bg: "bg-orange-500/10",
        border: "border-orange-500/30 hover:border-orange-400/50",
        text: "text-orange-400",
        icon: "bg-orange-500/20",
      },
      rose: {
        bg: "bg-rose-500/10",
        border: "border-rose-500/30 hover:border-rose-400/50",
        text: "text-rose-400",
        icon: "bg-rose-500/20",
      },
    };
    return colors[color] || colors.emerald;
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Produk Bioteknologi Biosolution",
            description:
              "Katalog lengkap formula bioteknologi untuk pertanian, perikanan, dan peternakan berkelanjutan",
            url: "https://www.biosolution.tech/products",
            numberOfItems: productCategories.length,
            itemListElement: productCategories.map((cat, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: cat.title,
              description: cat.description,
              url: `https://www.biosolution.tech${cat.href}`,
            })),
          }),
        }}
      />

      <div
        ref={containerRef}
        className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950"
      >
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
                                  radial-gradient(circle at 75% 75%, rgba(20, 184, 166, 0.3) 0%, transparent 50%)`,
              }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-1.5 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium border border-emerald-500/30 mb-6">
                Katalog Formula Bioteknologi
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Formula{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Berbasis Manfaat
                </span>
              </h1>

              <p className="text-xl text-emerald-100/80 leading-relaxed mb-8">
                Solusi bioteknologi inovatif yang dirancang berdasarkan kebutuhan nyata
                petani, peternak, dan pembudidaya Indonesia
              </p>

              {/* Quick Stats */}
              <div className="flex justify-center gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-white">55+</div>
                  <div className="text-sm text-emerald-300/70">Formula Produk</div>
                </div>
                <div className="w-px bg-emerald-700/50" />
                <div>
                  <div className="text-3xl font-bold text-white">5</div>
                  <div className="text-sm text-emerald-300/70">Kategori Solusi</div>
                </div>
                <div className="w-px bg-emerald-700/50" />
                <div>
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-sm text-emerald-300/70">Organik</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="features-section py-12 bg-emerald-900/30 border-y border-emerald-700/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="feature-item flex items-center gap-4 p-4"
                >
                  <div className="p-3 bg-emerald-500/20 rounded-xl">
                    <feature.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{feature.title}</div>
                    <div className="text-sm text-emerald-300/70">
                      {feature.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="products-grid space-y-8">
              {productCategories.map((category) => {
                const colorClasses = getColorClasses(category.color);
                const IconComponent = category.icon;

                return (
                  <motion.article
                    key={category.id}
                    className={`product-card group p-8 rounded-2xl border ${colorClasses.border} ${colorClasses.bg} transition-all duration-300`}
                  >
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Left: Icon & Title */}
                      <div className="lg:col-span-1">
                        <div
                          className={`inline-flex p-4 rounded-2xl ${colorClasses.icon} mb-4`}
                        >
                          <IconComponent
                            className={`w-8 h-8 ${colorClasses.text}`}
                          />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">
                          {category.title}
                        </h2>
                        <p className={`text-sm ${colorClasses.text} font-medium mb-4`}>
                          {category.subtitle}
                        </p>
                        <p className="text-emerald-100/70 leading-relaxed">
                          {category.description}
                        </p>
                      </div>

                      {/* Middle: Products List */}
                      <div className="lg:col-span-1">
                        <h3 className="text-sm font-medium text-emerald-300/70 uppercase tracking-wider mb-4">
                          Formula Unggulan
                        </h3>
                        <ul className="space-y-3">
                          {category.products.map((product, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-3 text-emerald-100"
                            >
                              <CheckCircle2
                                className={`w-4 h-4 ${colorClasses.text} flex-shrink-0`}
                              />
                              <span>{product}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right: Stats & CTA */}
                      <div className="lg:col-span-1 flex flex-col justify-between">
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {Object.entries(category.stats).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div className="text-2xl font-bold text-white">
                                {value}
                              </div>
                              <div className="text-xs text-emerald-300/60 capitalize">
                                {key}
                              </div>
                            </div>
                          ))}
                        </div>
                        <Link
                          href={category.href}
                          className={`inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-all border border-white/10 group-hover:border-white/30`}
                        >
                          Lihat Semua Formula
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-800/50 to-teal-800/50">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Butuh Formula Khusus?
              </h2>
              <p className="text-xl text-emerald-100/80 mb-8 max-w-2xl mx-auto">
                Tim R&D kami siap mengembangkan formula sesuai kebutuhan spesifik
                usaha Anda
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors"
                >
                  Konsultasi Gratis
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/research"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-colors border border-white/20"
                >
                  Lihat Riset Kami
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

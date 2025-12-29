"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Beaker,
  FlaskConical,
  Leaf,
  Bug,
  Sprout,
  Sparkles,
  ChevronRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: "floraone",
    slug: "formula-nutrisi-tanaman-lengkap", // Link to actual product page
    name: "Formula Nutrisi Tanaman Lengkap",
    category: "Pupuk Hayati",
    tagline: "Mitra Pertumbuhan Tanaman Anda",
    description:
      "Formulasi konsorsium mikroba unggul yang meningkatkan ketersediaan nutrisi dan memperkuat sistem perakaran tanaman. Cocok untuk berbagai jenis tanaman pertanian.",
    benefits: [
      "Meningkatkan penyerapan nutrisi hingga 40%",
      "Memperkuat sistem perakaran",
      "Memperbaiki struktur tanah",
      "Meningkatkan ketahanan terhadap stress",
    ],
    icon: Sprout,
    color: "forest",
    featured: true,
    image: "/images/Formula Nutrisi Tanaman Lengkap (FloraOne).png",
  },
  {
    id: "biokiller",
    slug: "formula-pengendalian-hama-hayati",
    name: "Formula Pengendalian Hama Hayati",
    category: "Insektisida Hayati",
    tagline: "Perlindungan Alami dari Hama",
    description:
      "Bioinsektisida berbasis mikroba antagonis yang efektif mengendalikan berbagai jenis hama tanpa residu berbahaya. Aman untuk lingkungan dan aplikator.",
    benefits: [
      "Efektif terhadap berbagai jenis hama",
      "Tidak meninggalkan residu kimia",
      "Aman untuk predator alami",
      "Tidak menyebabkan resistensi",
    ],
    icon: Bug,
    color: "microbe",
    featured: true,
    image: "/images/Formula Pengendalian Hama Hayati (BioKiller).png",
  },
  {
    id: "biojagat",
    slug: "formula-kesuburan-tanah",
    name: "Formula Kesuburan Tanah",
    category: "Fungisida Hayati",
    tagline: "Pelindung Tanaman dari Jamur Patogen",
    description:
      "Biofungisida dengan spektrum luas untuk mengendalikan penyakit tanaman yang disebabkan oleh jamur patogen. Formulasi stabil dan mudah diaplikasikan.",
    benefits: [
      "Mengendalikan jamur patogen",
      "Memperkuat dinding sel tanaman",
      "Merangsang sistem imun tanaman",
      "Aplikasi mudah dan fleksibel",
    ],
    icon: FlaskConical,
    color: "moss",
    featured: true,
    image: "/images/Formula Kesuburan Tanah (BIOJAGAT).png",
  },
  {
    id: "rajabio",
    slug: "formula-probiotik-unggas",
    name: "Formula Probiotik Unggas",
    category: "Probiotik Ternak",
    tagline: "Kesehatan Ternak dari Dalam",
    description:
      "Probiotik ternak formulasi khusus untuk meningkatkan kesehatan pencernaan dan produktivitas hewan ternak. Meningkatkan FCR dan mengurangi mortalitas.",
    benefits: [
      "Meningkatkan FCR ternak",
      "Mengurangi bau kandang",
      "Meningkatkan kualitas daging",
      "Mengurangi penggunaan antibiotik",
    ],
    icon: Beaker,
    color: "soil",
    featured: false,
    image: "/images/Formula Probiotik Unggas (RAJABIO).png",
  },
  {
    id: "megabio",
    slug: "formula-probiotik-ruminansia",
    name: "Formula Probiotik Ruminansia",
    category: "Probiotik Ternak",
    tagline: "Formula Super untuk Ayam Broiler",
    description:
      "Probiotik premium khusus untuk ayam broiler dengan konsentrasi tinggi bakteri menguntungkan. Hasil terbukti dalam skala komersial.",
    benefits: [
      "Pertumbuhan lebih cepat",
      "Kualitas daging premium",
      "Mengurangi mortalitas",
      "ROI tinggi",
    ],
    icon: Sparkles,
    color: "microbe",
    featured: false,
    image: "/images/Formula Probiotik Ruminansia (MEGABIO).png",
  },
  {
    id: "simbios",
    slug: "formula-fungisida-tanaman",
    name: "Formula Fungisida Tanaman",
    category: "Probiotik Ternak",
    tagline: "Simbiosis Sempurna untuk Ternak",
    description:
      "Formulasi simbiosis mikroba untuk berbagai jenis ternak ruminansia. Meningkatkan efisiensi pencernaan serat dan produksi susu.",
    benefits: [
      "Meningkatkan produksi susu",
      "Efisiensi pakan lebih baik",
      "Kesehatan rumen optimal",
      "Mudah dicampur pakan",
    ],
    icon: Leaf,
    color: "forest",
    featured: false,
    image: "/images/Formula Fungisida Tanaman (SIMBIOS).png",
  },
];

const colorClasses = {
  forest: {
    bg: "bg-forest-50",
    border: "border-forest-200",
    icon: "bg-forest-100 text-forest-600",
    badge: "bg-forest-100 text-forest-700",
    hover: "hover:border-forest-400",
    gradient: "from-forest-500 to-forest-600",
  },
  microbe: {
    bg: "bg-microbe-50",
    border: "border-microbe-200",
    icon: "bg-microbe-100 text-microbe-600",
    badge: "bg-microbe-100 text-microbe-700",
    hover: "hover:border-microbe-400",
    gradient: "from-microbe-500 to-microbe-600",
  },
  moss: {
    bg: "bg-moss-50",
    border: "border-moss-200",
    icon: "bg-moss-100 text-moss-600",
    badge: "bg-moss-100 text-moss-700",
    hover: "hover:border-moss-400",
    gradient: "from-moss-500 to-moss-600",
  },
  soil: {
    bg: "bg-soil-50",
    border: "border-soil-200",
    icon: "bg-soil-100 text-soil-600",
    badge: "bg-soil-100 text-soil-700",
    hover: "hover:border-soil-400",
    gradient: "from-soil-500 to-soil-600",
  },
};

export function ProductsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeProduct, setActiveProduct] = useState(products[0]);
  const featuredProducts = products.filter((p) => p.featured);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Animate section header
      gsap.fromTo(
        ".products-header",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".products-header",
            start: "top 80%",
          },
        }
      );

      // Animate product showcase
      gsap.fromTo(
        ".product-showcase",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".product-showcase",
            start: "top 75%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const colors = colorClasses[activeProduct.color as keyof typeof colorClasses];
  const Icon = activeProduct.icon;

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-32 bg-gradient-to-b from-forest-50/50 via-white to-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-forest-100/50 to-transparent rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-microbe-100/50 to-transparent rounded-full blur-[60px]" />
      </div>

      <div className="relative container-wide">
        {/* Section Header */}
        <div className="products-header text-center max-w-3xl mx-auto mb-10 sm:mb-16 lg:mb-20 px-2">
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-forest-50 border border-forest-200 rounded-full text-xs sm:text-sm font-medium text-forest-700 mb-4 sm:mb-6">
            <FlaskConical className="w-4 h-4" />
            Produk Unggulan
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-carbon-900 mb-4 sm:mb-6">
            8+ Produk{" "}
            <span className="bg-gradient-to-r from-forest-600 to-microbe-500 bg-clip-text text-transparent">
              Terdaftar Kementan
            </span>
          </h2>
          <p className="text-base sm:text-lg text-carbon-600">
            Setiap produk dikembangkan bersama IPB, UB, UNUD, dan UNPAD. Bukan sekadar klaim—hasil riset terukur dengan R/C Ratio hingga 2,02.
          </p>
        </div>

        {/* Product Showcase */}
        <div className="product-showcase grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          {/* Product Selector */}
          <div className="space-y-2 sm:space-y-3">
            {featuredProducts.map((product) => {
              const productColors = colorClasses[product.color as keyof typeof colorClasses];
              const ProductIcon = product.icon;
              const isActive = activeProduct.id === product.id;

              return (
                <button
                  key={product.id}
                  onClick={() => setActiveProduct(product)}
                  className={`w-full flex items-center gap-3 sm:gap-4 p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 text-left ${
                    isActive
                      ? `${productColors.bg} ${productColors.border} shadow-lg`
                      : `bg-white border-carbon-100 ${productColors.hover}`
                  }`}
                >
                  <div
                    className={`w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 transition-all ${
                      isActive ? productColors.icon : "bg-carbon-100 text-carbon-400"
                    }`}
                  >
                    <ProductIcon className="w-5 h-5 sm:w-7 sm:h-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-0.5 sm:mb-1">
                      <h3
                        className={`font-display font-bold text-base sm:text-lg transition-colors ${
                          isActive ? "text-carbon-900" : "text-carbon-700"
                        }`}
                      >
                        {product.name}
                      </h3>
                      <span
                        className={`text-xs px-1.5 sm:px-2 py-0.5 rounded-full ${productColors.badge} hidden sm:inline-block`}
                      >
                        {product.category}
                      </span>
                    </div>
                    <p
                      className={`text-xs sm:text-sm transition-colors line-clamp-1 ${
                        isActive ? "text-carbon-600" : "text-carbon-400"
                      }`}
                    >
                      {product.tagline}
                    </p>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 sm:w-5 sm:h-5 transition-all shrink-0 ${
                      isActive
                        ? "text-carbon-900 translate-x-0"
                        : "text-carbon-300 -translate-x-2"
                    }`}
                  />
                </button>
              );
            })}

            <Link
              href="/products"
              className="flex items-center justify-center gap-2 w-full p-3 sm:p-4 text-forest-600 font-medium hover:bg-forest-50 rounded-xl transition-colors text-sm sm:text-base"
            >
              Lihat Semua Produk
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Product Detail Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className={`lg:sticky lg:top-24 ${colors.bg} border-2 ${colors.border} rounded-2xl sm:rounded-3xl overflow-hidden`}
            >
              {/* Product Image */}
              {activeProduct.image && (
                <div className="relative h-48 sm:h-56 lg:h-64 w-full">
                  <Image
                    src={activeProduct.image}
                    alt={activeProduct.name}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-${activeProduct.color}-50 via-transparent to-transparent`} />
                </div>
              )}

              <div className="p-5 sm:p-6 lg:p-8 xl:p-10">
              {/* Header */}
              <div className="flex items-start justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex-1 min-w-0">
                  <span className={`text-xs sm:text-sm font-medium ${colors.badge} px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full`}>
                    {activeProduct.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-display font-bold text-carbon-900 mt-2 sm:mt-3">
                    {activeProduct.name}
                  </h3>
                  <p className="text-sm sm:text-base text-carbon-500 mt-1">{activeProduct.tagline}</p>
                </div>
                <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl ${colors.icon} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-carbon-600 mb-5 sm:mb-6 lg:mb-8 leading-relaxed">
                {activeProduct.description}
              </p>

              {/* Benefits */}
              <div className="space-y-2 sm:space-y-3 mb-5 sm:mb-6 lg:mb-8">
                <h4 className="text-sm sm:text-base font-display font-semibold text-carbon-900">
                  Keunggulan Produk
                </h4>
                <div className="grid gap-1.5 sm:gap-2">
                  {activeProduct.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start sm:items-center gap-2 sm:gap-3">
                      <div
                        className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0`}
                      >
                        <svg
                          className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-sm sm:text-base text-carbon-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <Link
                  href={`/products/${activeProduct.slug}`}
                  className="btn-primary w-full sm:w-auto justify-center text-sm sm:text-base"
                >
                  Detail Produk
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary w-full sm:w-auto justify-center text-sm sm:text-base"
                >
                  Minta Penawaran
                </Link>
              </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

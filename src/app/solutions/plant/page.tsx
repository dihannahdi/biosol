"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Wheat,
  Sprout,
  TreePine,
  Flower2,
  Shield,
  FlaskConical,
  CheckCircle2,
  Microscope,
  Bug,
  Leaf,
} from "lucide-react";
import { GSAPProvider } from "@/lib/gsap-provider";
import { Header, Footer } from "@/components/layout";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    icon: Wheat,
    title: "Tanaman Pangan",
    description: "Padi, jagung, kedelai, dan komoditas pangan strategis lainnya.",
    examples: ["Padi sawah", "Jagung", "Kedelai", "Ubi kayu"],
  },
  {
    icon: Sprout,
    title: "Hortikultura",
    description: "Sayuran, buah-buahan, dan tanaman hortikultura bernilai tinggi.",
    examples: ["Bawang merah", "Cabai", "Tomat", "Kentang"],
  },
  {
    icon: TreePine,
    title: "Perkebunan",
    description: "Komoditas perkebunan strategis untuk ekspor dan industri.",
    examples: ["Kelapa sawit", "Karet", "Kakao", "Kopi"],
  },
  {
    icon: Flower2,
    title: "Tanaman Hobi",
    description: "Tanaman hias, bunga potong, dan tanaman landscape.",
    examples: ["Anggrek", "Mawar", "Tanaman hias daun", "Rumput taman"],
  },
];

const products = [
  {
    name: "FloraOne",
    type: "Pupuk Hayati Cair",
    description: "Konsorsium mikroba unggul untuk meningkatkan ketersediaan hara dan pertumbuhan tanaman. Mengandung Azotobacter, Azospirillum, Bacillus, dan Pseudomonas.",
    benefits: [
      "Mengurangi penggunaan pupuk kimia hingga 50%",
      "Meningkatkan hasil panen secara signifikan",
      "Memperbaiki struktur dan kesehatan tanah",
      "R/C Ratio mencapai 2,02",
    ],
    registration: "Terdaftar Kementan RI",
    icon: FlaskConical,
    research: "Hasil riset bersama IPB",
  },
  {
    name: "SIMBIOS",
    type: "Pupuk Hayati",
    description: "Formulasi mikroba penghasil hormon pertumbuhan dan efisiensi penyerapan hara. Hasil kolaborasi riset dengan Institut Pertanian Bogor.",
    benefits: [
      "Meningkatkan efisiensi penyerapan nutrisi",
      "Mempercepat pertumbuhan vegetatif",
      "Meningkatkan ketahanan tanaman",
      "Hemat biaya produksi",
    ],
    registration: "Terdaftar Kementan RI",
    icon: Microscope,
    research: "Hasil riset bersama IPB",
  },
  {
    name: "RAJABIO",
    type: "Pupuk Organik",
    description: "Pupuk organik yang memaksimalkan aktivitas mikroba tanah. Meningkatkan kesuburan dan kelestarian lahan pertanian.",
    benefits: [
      "Memperbaiki struktur tanah",
      "Meningkatkan populasi mikroba menguntungkan",
      "Menyediakan nutrisi secara bertahap",
      "Mendukung pertanian berkelanjutan",
    ],
    registration: "Terdaftar Kementan RI",
    icon: Leaf,
    research: "Hasil riset bersama IPB",
  },
  {
    name: "BIOKILLER SL",
    type: "Insektisida Hayati",
    description: "Insektisida hayati berbasis Beauveria bassiana dan Metarhizium anisopliae. Efektif mengendalikan hama tanpa residu berbahaya.",
    benefits: [
      "Efikasi lebih dari 70% terhadap hama",
      "Aman bagi predator alami",
      "Tidak meninggalkan residu kimia",
      "Tidak menyebabkan resistensi hama",
    ],
    registration: "Memenuhi Permentan No. 43/2019",
    icon: Bug,
    research: "Hasil riset UNUD & UNPAD",
  },
  {
    name: "BIOJAGAT",
    type: "Pupuk Hayati Majemuk",
    description: "Mikroba pelarut hara dan penambat nitrogen. Hasil pengembangan bersama Universitas Brawijaya.",
    benefits: [
      "Meningkatkan ketersediaan fosfor",
      "Menambat nitrogen dari udara",
      "Memperbaiki kesehatan tanah",
      "Meningkatkan hasil panen",
    ],
    registration: "Terdaftar Kementan RI",
    icon: FlaskConical,
    research: "Hasil riset bersama UB",
  },
  {
    name: "TRICO-Z WP",
    type: "Fungisida Hayati",
    description: "Fungisida hayati berbahan aktif Trichoderma harzianum (1x10^7 cfu/g). Teruji efikasi terhadap penyakit hawar pelepah.",
    benefits: [
      "Efikasi 76,84% terhadap hawar pelepah",
      "Mencegah penyakit jamur tanah",
      "Memperkuat sistem kekebalan tanaman",
      "Ramah lingkungan",
    ],
    registration: "Memenuhi Permentan No. 43/2019",
    icon: Shield,
    research: "Hasil riset bersama UNUD",
  },
];

const benefits = [
  {
    title: "Terdaftar Kementerian Pertanian",
    description: "Semua produk memiliki nomor registrasi resmi dari Kementan RI.",
  },
  {
    title: "Hasil Riset Universitas",
    description: "Dikembangkan bersama IPB, UB, UNUD, dan UNPAD.",
  },
  {
    title: "Ramah Lingkungan",
    description: "Tidak mencemari tanah, air, dan ekosistem sekitar.",
  },
  {
    title: "Pendampingan Teknis",
    description: "Tim ahli siap membantu aplikasi di lapangan.",
  },
];

export default function PlantSolutionsPage() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".hero-content > *",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }
      );
    },
    { scope: heroRef }
  );

  return (
    <GSAPProvider>
      <Header />

      <main>
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative pt-32 pb-20 bg-gradient-to-b from-forest-50 via-white to-moss-50/30 overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-forest-200/30 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-microbe-200/20 rounded-full blur-[80px]" />
          </div>

          <div className="relative container-wide">
            <div className="hero-content max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-forest-50 border border-forest-200 rounded-full mb-8">
                <Shield className="w-4 h-4 text-forest-600" />
                <span className="text-sm font-medium text-forest-700">
                  Biosekuriti Tanaman
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-carbon-900 mb-6 leading-tight">
                Tingkatkan Hasil Panen{" "}
                <span className="bg-gradient-to-r from-forest-600 to-microbe-500 bg-clip-text text-transparent">
                  hingga 40%
                </span>{" "}
                dengan Bioteknologi
              </h1>

              <p className="text-lg md:text-xl text-carbon-600 mb-8 leading-relaxed max-w-3xl">
                Solusi pupuk dan pestisida hayati yang terbukti efektif. Hemat biaya pupuk kimia hingga 50%, kurangi ketergantungan pestisida, dan tingkatkan kualitas hasil panen. Semua produk terdaftar Kementan RI.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary group">
                  Konsultasi Produk
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/research" className="btn-secondary">
                  Lihat Hasil Riset
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-carbon-900 mb-4">
                Cakupan Biosekuriti Tanaman
              </h2>
              <p className="text-carbon-600">
                Kami melayani berbagai sektor pertanian dengan solusi yang disesuaikan 
                untuk kebutuhan spesifik setiap jenis tanaman.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, i) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gradient-to-br from-forest-50 to-white border border-forest-100 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6 text-forest-600" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-carbon-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-carbon-600 mb-4">{category.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {category.examples.map((example) => (
                      <span
                        key={example}
                        className="text-xs px-2 py-1 bg-forest-100/50 text-forest-700 rounded"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 bg-gradient-to-b from-moss-50/30 to-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-carbon-900 mb-4">
                Produk untuk Tanaman
              </h2>
              <p className="text-carbon-600">
                Setiap produk dikembangkan melalui riset ilmiah dan teruji efektivitasnya di lapangan.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, i) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-carbon-100 rounded-2xl p-6 hover:shadow-xl hover:border-forest-200 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center">
                      <product.icon className="w-6 h-6 text-forest-600" />
                    </div>
                    <span className="text-xs px-3 py-1 bg-forest-50 text-forest-700 rounded-full font-medium">
                      {product.type}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-carbon-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-carbon-600 mb-4">{product.description}</p>
                  <ul className="space-y-2 mb-4">
                    {product.benefits.slice(0, 3).map((benefit, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-carbon-600">
                        <CheckCircle2 className="w-4 h-4 text-forest-500 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-carbon-100">
                    <p className="text-xs text-forest-600 font-medium">{product.research}</p>
                    <p className="text-xs text-carbon-500">{product.registration}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-carbon-950 text-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Mengapa Memilih Biosolution?
              </h2>
              <p className="text-carbon-400">
                Keunggulan produk biosekuriti tanaman dari Biosolution.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, i) => (
                <div
                  key={benefit.title}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
                >
                  <CheckCircle2 className="w-8 h-8 text-forest-400 mb-4" />
                  <h3 className="font-display font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-carbon-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-forest-600 to-forest-700">
          <div className="container-wide text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Siap Meningkatkan Produktivitas Tanaman Anda?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Konsultasikan kebutuhan biosekuriti tanaman Anda dengan tim ahli kami. 
                Kami siap membantu memilih produk yang tepat untuk kondisi lahan Anda.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="btn-primary bg-white text-forest-700 hover:bg-white/90"
                >
                  Hubungi Tim Kami
                </Link>
                <a
                  href="https://wa.me/6285742249591?text=Halo%20Biosolution%2C%20saya%20ingin%20konsultasi%20mengenai%20produk%20untuk%20tanaman."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary border-white/30 text-white hover:bg-white/10"
                >
                  WhatsApp: 0857-4224-9591
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </GSAPProvider>
  );
}

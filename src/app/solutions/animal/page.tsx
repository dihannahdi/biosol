"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Bird,
  Fish,
  Heart,
  FlaskConical,
  CheckCircle2,
  Microscope,
  Beaker,
  Shield,
} from "lucide-react";
import { GSAPProvider } from "@/lib/gsap-provider";
import { Header, Footer } from "@/components/layout";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    icon: Bird,
    title: "Ternak Unggas",
    description: "Ayam broiler, layer, bebek, dan unggas lainnya.",
    examples: ["Ayam broiler", "Ayam layer", "Bebek", "Puyuh"],
  },
  {
    icon: Heart,
    title: "Ternak Ruminansia",
    description: "Sapi, kambing, domba, dan ternak ruminansia lainnya.",
    examples: ["Sapi potong", "Sapi perah", "Kambing", "Domba"],
  },
  {
    icon: Bird,
    title: "Ternak Babi",
    description: "Berbagai fase pemeliharaan babi dari starter hingga finisher.",
    examples: ["Babi starter", "Babi grower", "Babi finisher", "Induk babi"],
  },
  {
    icon: Fish,
    title: "Akuakultur",
    description: "Budidaya ikan dan udang air tawar maupun payau.",
    examples: ["Lele", "Nila", "Udang vaname", "Gurami"],
  },
];

const products = [
  {
    name: "RAJABIO",
    type: "Probiotik Ternak",
    description: "Probiotik ternak formulasi khusus untuk meningkatkan kesehatan pencernaan dan produktivitas hewan. Meningkatkan FCR dan mengurangi mortalitas.",
    benefits: [
      "Meningkatkan Feed Conversion Ratio (FCR)",
      "Mengurangi bau kandang secara signifikan",
      "Meningkatkan kualitas daging dan telur",
      "Mengurangi ketergantungan antibiotik",
    ],
    registration: "Terdaftar Kementan RI",
    icon: Beaker,
    application: "Unggas, ruminansia, babi",
  },
  {
    name: "MEGABIO",
    type: "Probiotik Premium",
    description: "Probiotik premium dengan konsentrasi tinggi bakteri menguntungkan. Hasil riset bersama Universitas Brawijaya.",
    benefits: [
      "Pertumbuhan lebih cepat dan seragam",
      "Kualitas daging premium",
      "Mengurangi tingkat mortalitas",
      "Return on Investment tinggi",
    ],
    registration: "Terdaftar Kementan RI",
    icon: Microscope,
    application: "Khusus ayam broiler",
  },
  {
    name: "SIMBIOS",
    type: "Probiotik Ternak",
    description: "Formulasi simbiosis mikroba untuk berbagai jenis ternak. Meningkatkan efisiensi pencernaan dan produksi.",
    benefits: [
      "Meningkatkan produksi susu pada sapi perah",
      "Efisiensi pakan lebih optimal",
      "Menjaga kesehatan rumen",
      "Mudah dicampur dengan pakan",
    ],
    registration: "Terdaftar Kementan RI",
    icon: FlaskConical,
    application: "Ternak ruminansia",
  },
  {
    name: "MASHITAM",
    type: "Pembenah Tanah/Air",
    description: "Berbasis senyawa humat aktif. Untuk akuakultur, membantu menjaga kualitas air dan kesehatan kolam budidaya.",
    benefits: [
      "Memperbaiki kualitas air kolam",
      "Menekan pertumbuhan patogen",
      "Meningkatkan kelangsungan hidup ikan/udang",
      "Hasil riset R/C Ratio 1,95",
    ],
    registration: "Terdaftar Kementan RI",
    icon: Shield,
    application: "Akuakultur",
  },
];

const benefits = [
  {
    title: "Meningkatkan FCR",
    description: "Feed Conversion Ratio lebih efisien, hemat biaya pakan.",
  },
  {
    title: "Mengurangi Mortalitas",
    description: "Tingkat kematian ternak menurun signifikan.",
  },
  {
    title: "Bebas Residu",
    description: "Produk aman tanpa residu antibiotik atau kimia.",
  },
  {
    title: "Ramah Lingkungan",
    description: "Mengurangi bau kandang dan pencemaran.",
  },
];

export default function AnimalSolutionsPage() {
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
          className="relative pt-32 pb-20 bg-gradient-to-b from-soil-50 via-white to-moss-50/30 overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-soil-200/30 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-microbe-200/20 rounded-full blur-[80px]" />
          </div>

          <div className="relative container-wide">
            <div className="hero-content max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-soil-50 border border-soil-200 rounded-full mb-8">
                <Heart className="w-4 h-4 text-soil-600" />
                <span className="text-sm font-medium text-soil-700">
                  Kesehatan Hewan
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-carbon-900 mb-6 leading-tight">
                FCR Lebih Baik,{" "}
                <span className="bg-gradient-to-r from-soil-600 to-microbe-500 bg-clip-text text-transparent">
                  Mortalitas Lebih Rendah
                </span>
              </h1>

              <p className="text-lg md:text-xl text-carbon-600 mb-8 leading-relaxed max-w-3xl">
                Probiotik ternak yang terbukti menurunkan FCR hingga 0.14 poin dan mortalitas 35%. Hasil kolaborasi riset dengan Universitas Brawijaya dan FKH UNAIR. Hemat biaya pakan ratusan juta per tahun.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary bg-soil-600 hover:bg-soil-500 group">
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
                Sektor yang Kami Layani
              </h2>
              <p className="text-carbon-600">
                Solusi kesehatan hewan untuk berbagai jenis ternak dan budidaya akuakultur.
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
                  className="bg-gradient-to-br from-soil-50 to-white border border-soil-100 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-soil-100 rounded-xl flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6 text-soil-600" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-carbon-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-carbon-600 mb-4">{category.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {category.examples.map((example) => (
                      <span
                        key={example}
                        className="text-xs px-2 py-1 bg-soil-100/50 text-soil-700 rounded"
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
                Produk Kesehatan Hewan
              </h2>
              <p className="text-carbon-600">
                Probiotik dan suplemen berkualitas tinggi untuk meningkatkan performa ternak.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {products.map((product, i) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-carbon-100 rounded-2xl p-8 hover:shadow-xl hover:border-soil-200 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-soil-100 rounded-xl flex items-center justify-center">
                      <product.icon className="w-7 h-7 text-soil-600" />
                    </div>
                    <span className="text-xs px-3 py-1 bg-soil-50 text-soil-700 rounded-full font-medium">
                      {product.type}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-carbon-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-carbon-600 mb-6">{product.description}</p>
                  <ul className="space-y-3 mb-6">
                    {product.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-start gap-2 text-carbon-600">
                        <CheckCircle2 className="w-5 h-5 text-soil-500 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-carbon-100 flex justify-between items-center">
                    <div>
                      <p className="text-sm text-carbon-500">{product.registration}</p>
                      <p className="text-xs text-soil-600 font-medium">Untuk: {product.application}</p>
                    </div>
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
                Keuntungan Menggunakan Probiotik Biosolution
              </h2>
              <p className="text-carbon-400">
                Hasil nyata yang dirasakan oleh peternak mitra kami.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, i) => (
                <div
                  key={benefit.title}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
                >
                  <CheckCircle2 className="w-8 h-8 text-soil-400 mb-4" />
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
        <section className="py-20 bg-gradient-to-r from-soil-600 to-soil-700">
          <div className="container-wide text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Optimalkan Produktivitas Peternakan Anda
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Konsultasikan kebutuhan probiotik dan suplemen ternak dengan tim ahli kami. 
                Kami siap membantu meningkatkan efisiensi dan keuntungan usaha Anda.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="btn-primary bg-white text-soil-700 hover:bg-white/90"
                >
                  Hubungi Tim Kami
                </Link>
                <a
                  href="https://wa.me/6285742249591?text=Halo%20Biosolution%2C%20saya%20ingin%20konsultasi%20mengenai%20produk%20untuk%20peternakan."
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

"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Link from "next/link";
import { GSAPProvider } from "@/lib/gsap-provider";
import { Header, Footer } from "@/components/layout";
import {
  ArrowRight,
  Leaf,
  Target,
  Eye,
  Heart,
  Users,
  Award,
  FlaskConical,
  Building2,
  GraduationCap,
  Lightbulb,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// AJAIB - Nilai Perusahaan Biosolution
const values = [
  {
    icon: Heart,
    title: "Amanah",
    description: "Mengemban kepercayaan dengan penuh tanggung jawab. Setiap produk dan layanan kami adalah bukti komitmen terhadap mitra.",
  },
  {
    icon: Award,
    title: "Jujur",
    description: "Integritas dalam setiap interaksi. Kami menyampaikan fakta apa adanya kepada mitra dan pelanggan.",
  },
  {
    icon: Lightbulb,
    title: "Antusias",
    description: "Semangat tinggi dalam mengembangkan solusi bioteknologi terbaik untuk pertanian Indonesia.",
  },
  {
    icon: FlaskConical,
    title: "Inisiatif",
    description: "Proaktif dalam riset dan inovasi. Kami terus mencari cara baru untuk meningkatkan hasil pertanian.",
  },
  {
    icon: Eye,
    title: "Berwawasan",
    description: "Memiliki visi jangka panjang untuk pertanian berkelanjutan dan kesejahteraan petani Indonesia.",
  },
];

// Perjalanan Biosolution sejak 2010
const milestones = [
  { year: "2010", title: "Pendirian Biosolution", description: "Didirikan 10 Februari 2010 di Klaten, Jawa Tengah oleh Bintang Sediyoadi Putra." },
  { year: "2012", title: "Registrasi Kementerian Pertanian", description: "Produk pertama memperoleh nomor registrasi resmi dari Kementan" },
  { year: "2015", title: "Kolaborasi Riset Universitas", description: "Memulai kerjasama riset dengan IPB dan Universitas Brawijaya" },
  { year: "2018", title: "Sertifikasi Organik", description: "Memperoleh sertifikasi organik nasional dan akreditasi KAN" },
  { year: "2021", title: "Ekspansi Nasional", description: "Memperluas distribusi ke 15 provinsi di Indonesia" },
  { year: "2024", title: "19 Provinsi Terjangkau", description: "Kini melayani mitra dan pelanggan di 19 provinsi dengan 14+ tahun pengalaman" },
];

// Pendiri Biosolution - hanya data yang terverifikasi
const team = [
  {
    name: "Bintang Sediyoadi Putra",
    role: "Pendiri & Pemilik",
    bio: "Mendirikan Biosolution pada 10 Februari 2010 dengan visi menghadirkan solusi bioteknologi berkelanjutan untuk Indonesia.",
  },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".about-hero-content > *",
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
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-forest-50 to-white overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-forest-200/40 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-microbe-200/30 rounded-full blur-[80px]" />
          </div>

          <div className="relative container-wide">
            <div className="about-hero-content max-w-4xl">
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-forest-100 border border-forest-200 rounded-full text-xs sm:text-sm font-medium text-forest-700 mb-4 sm:mb-6">
                <Building2 className="w-4 h-4" />
                Tentang Kami
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-carbon-900 mb-4 sm:mb-6 leading-tight">
                14 Tahun Membuktikan{" "}
                <span className="bg-gradient-to-r from-forest-600 to-microbe-500 bg-clip-text text-transparent">
                  Kekuatan Mikroba
                </span>{" "}
                untuk Pertanian Indonesia
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-carbon-600 mb-6 sm:mb-8 leading-relaxed">
                Sejak 10 Februari 2010, kami telah membantu ribuan petani dan peternak di 19 provinsi meningkatkan hasil panen hingga 40% dengan solusi bioteknologi ramah lingkungan. Berkantor di Klaten, dipercaya se-Indonesia.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/contact" className="w-full sm:w-auto text-center justify-center btn-primary px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base">
                  Hubungi Kami
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/solutions" className="w-full sm:w-auto text-center justify-center btn-secondary px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base">
                  Lihat Solusi Kami
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-forest-50 to-moss-50 rounded-3xl p-8 lg:p-12"
              >
                <div className="w-14 h-14 bg-forest-100 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-forest-600" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-carbon-900 mb-4">
                  Visi 2035
                </h2>
                <p className="text-carbon-600 text-lg leading-relaxed">
                  Menjadi TOP 3 produsen pupuk hayati di Indonesia dan mensejahterakan 100.000+ petani dengan produk ramah lingkungan. Bukan sekadar mimpi—ini adalah target terukur dengan timeline jelas.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-microbe-50 to-forest-50 rounded-3xl p-8 lg:p-12"
              >
                <div className="w-14 h-14 bg-microbe-100 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-microbe-600" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-carbon-900 mb-4">
                  Misi Kami
                </h2>
                <ul className="space-y-3 text-carbon-600">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-microbe-500 rounded-full mt-2.5 shrink-0" />
                    Mengembangkan produk bioteknologi berkualitas tinggi berbasis riset
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-microbe-500 rounded-full mt-2.5 shrink-0" />
                    Memberdayakan petani dengan teknologi yang mudah diakses dan terjangkau
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-microbe-500 rounded-full mt-2.5 shrink-0" />
                    Mendukung transisi ke pertanian organik dan berkelanjutan
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-microbe-500 rounded-full mt-2.5 shrink-0" />
                    Berkolaborasi dengan berbagai pihak untuk dampak yang lebih luas
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-forest-50/50">
          <div className="container-wide">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-carbon-900 mb-4">
                Nilai-Nilai Kami
              </h2>
              <p className="text-carbon-600">
                Prinsip yang memandu setiap langkah dan keputusan kami dalam mengembangkan solusi bioteknologi.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white border border-carbon-100 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-forest-600" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-carbon-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-carbon-600">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 lg:py-28 bg-carbon-950 text-white">
          <div className="container-wide">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                Perjalanan Kami
              </h2>
              <p className="text-carbon-400">
                Dari startup kecil di Klaten hingga menjangkau seluruh Indonesia.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-carbon-800" />

              <div className="space-y-8">
                {milestones.map((milestone, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center gap-6 ${
                      i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"} pl-12 lg:pl-0`}>
                      <span className="text-forest-400 font-mono text-sm">{milestone.year}</span>
                      <h3 className="font-display font-bold text-xl text-white mt-1 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-carbon-400 text-sm">{milestone.description}</p>
                    </div>
                    <div className="absolute left-4 lg:left-1/2 w-3 h-3 bg-forest-500 rounded-full -translate-x-1/2 ring-4 ring-carbon-950" />
                    <div className="hidden lg:block flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container-wide">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-forest-50 border border-forest-200 rounded-full text-sm font-medium text-forest-700 mb-6">
                <Users className="w-4 h-4" />
                Kepemimpinan
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-carbon-900 mb-4">
                Pendiri Biosolution
              </h2>
              <p className="text-carbon-600">
                Didirikan oleh praktisi berpengalaman dengan dedikasi tinggi terhadap kemajuan pertanian Indonesia.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              {team.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gradient-to-br from-forest-50 to-white border border-forest-100 rounded-2xl p-6 text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-forest-200 to-microbe-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-forest-700" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-carbon-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-forest-600 text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-carbon-500 text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </GSAPProvider>
  );
}

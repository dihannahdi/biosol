"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  FlaskConical,
  FileText,
  Award,
  Microscope,
  Beaker,
  TrendingUp,
  Users,
  CheckCircle2,
} from "lucide-react";
import { GSAPProvider } from "@/lib/gsap-provider";
import { Header, Footer } from "@/components/layout";

gsap.registerPlugin(ScrollTrigger);

const researchPartners = [
  {
    name: "Institut Pertanian Bogor (IPB)",
    department: "Fakultas Pertanian",
    logo: "/partners/ipb.png",
    products: ["FloraOne", "RAJABIO", "SIMBIOS"],
    description: "Kolaborasi riset pupuk hayati cair dan organik untuk padi sawah. Hasil uji lapangan membuktikan peningkatan hasil panen hingga 50% dengan pengurangan pupuk kimia.",
    achievements: [
      "R/C Ratio 2,02 untuk FloraOne",
      "Pengurangan pupuk NPK hingga 50%",
      "Peningkatan efisiensi penyerapan hara",
    ],
    location: "Karawang, Jawa Barat",
    year: "2021-2023",
  },
  {
    name: "Universitas Brawijaya",
    department: "Fakultas Pertanian",
    logo: "/partners/ub.png",
    products: ["BIOJAGAT", "MEGABIO", "MASHITAM"],
    description: "Riset bersama dalam pengembangan pupuk hayati majemuk dan pembenah tanah. Pengujian lapangan di Malang dengan hasil signifikan.",
    achievements: [
      "Peningkatan tinggi tanaman dan jumlah anakan",
      "Perbaikan struktur dan kesuburan tanah",
      "R/C Ratio 1,95 untuk MASHITAM",
    ],
    location: "Karangploso, Malang",
    year: "2022-2024",
  },
  {
    name: "Universitas Udayana",
    department: "Fakultas Pertanian",
    logo: "/partners/unud.png",
    products: ["BIOKILLER SL", "TRICO-Z WP"],
    description: "Pengembangan insektisida dan fungisida hayati dengan uji efikasi semi-lapangan. Produk terbukti efektif mengendalikan hama tanpa mencemari lingkungan.",
    achievements: [
      "Efikasi 76,84% melawan hawar pelepah",
      "Pengendalian ulat grayak secara alami",
      "Memenuhi standar Permentan No. 43/2019",
    ],
    location: "Bali",
    year: "2023-2024",
  },
  {
    name: "Universitas Padjadjaran",
    department: "Fakultas Pertanian",
    logo: "/partners/unpad.png",
    products: ["BIOKILLER SL"],
    description: "Riset pengendalian hama pengorok daun pada bawang merah. Hasil membuktikan efikasi lebih dari 70% tanpa residu berbahaya.",
    achievements: [
      "Efikasi >70% pada hama pengorok daun",
      "Aman bagi petani dan konsumen",
      "Mendukung pertanian berkelanjutan",
    ],
    location: "Jawa Barat",
    year: "2022",
  },
];

const products = [
  {
    name: "FloraOne",
    type: "Pupuk Hayati Cair",
    icon: Beaker,
    description: "Konsorsium mikroba unggul untuk padi. Mengandung Azotobacter, Azospirillum, Bacillus, dan Pseudomonas.",
    result: "Mengurangi pupuk kimia 50%, R/C Ratio 2,02",
  },
  {
    name: "BIOJAGAT",
    type: "Pupuk Hayati Majemuk",
    icon: FlaskConical,
    description: "Hasil riset Universitas Brawijaya. Mikroba pelarut hara dan penambat nitrogen.",
    result: "Peningkatan pertumbuhan dan kesehatan tanah",
  },
  {
    name: "SIMBIOS",
    type: "Pupuk Hayati",
    icon: Microscope,
    description: "Hasil riset IPB. Penghasil hormon pertumbuhan dan efisiensi penyerapan hara.",
    result: "Panen lebih tinggi, hemat biaya",
  },
  {
    name: "RAJABIO",
    type: "Pupuk Organik",
    icon: FlaskConical,
    description: "Kolaborasi IPB. Memaksimalkan aktivitas mikroba tanah.",
    result: "Lahan lebih subur dan lestari",
  },
  {
    name: "BIOKILLER SL",
    type: "Insektisida Hayati",
    icon: Beaker,
    description: "Berbasis Beauveria bassiana dan Metarhizium anisopliae.",
    result: "Efektif basmi wereng, ulat grayak >70%",
  },
  {
    name: "TRICO-Z WP",
    type: "Fungisida Hayati",
    icon: FlaskConical,
    description: "Berbahan aktif Trichoderma harzianum (1x10^7 cfu/g).",
    result: "Tekan hawar pelepah hingga 76,84%",
  },
  {
    name: "MEGABIO",
    type: "Pupuk Hayati Majemuk",
    icon: Microscope,
    description: "Hasil riset Universitas Brawijaya. Mikroorganisme unggul majemuk.",
    result: "Tingkatkan kesehatan dan hasil panen",
  },
  {
    name: "MASHITAM",
    type: "Pembenah Tanah",
    icon: Beaker,
    description: "Berbasis senyawa humat aktif. Meningkatkan pH tanah masam.",
    result: "Hasil panen bawang merah +25,5%",
  },
];

const certifications = [
  { name: "Kementerian Pertanian RI", description: "Registrasi produk pupuk dan pestisida" },
  { name: "Sertifikat Organik Indonesia", description: "Standar pertanian organik nasional" },
  { name: "KAN Accredited", description: "Komite Akreditasi Nasional" },
  { name: "TKDN", description: "Tingkat Komponen Dalam Negeri" },
  { name: "IAF", description: "International Accreditation Forum" },
];

export default function ResearchPage() {
  const heroRef = useRef<HTMLElement>(null);
  const partnersRef = useRef<HTMLElement>(null);
  const productsRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Hero animation
      gsap.fromTo(
        heroRef.current?.querySelectorAll(".animate-in") || [],
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }
      );

      // Partners stagger
      gsap.fromTo(
        partnersRef.current?.querySelectorAll(".partner-card") || [],
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: partnersRef.current,
            start: "top 80%",
          },
        }
      );

      // Products grid
      gsap.fromTo(
        productsRef.current?.querySelectorAll(".product-card") || [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: productsRef.current,
            start: "top 80%",
          },
        }
      );
    },
    { scope: heroRef }
  );

  return (
    <GSAPProvider>
      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative pt-32 pb-20 bg-gradient-to-b from-forest-50 via-white to-moss-50/30 overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-forest-200/30 to-transparent rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-microbe-200/20 to-transparent rounded-full blur-[80px]" />
          </div>

          <div className="container-wide relative">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-forest-50 border border-forest-200 rounded-full mb-8"
              >
                <GraduationCap className="w-4 h-4 text-forest-600" />
                <span className="text-sm font-medium text-forest-700">
                  Riset Berbasis Sains
                </span>
              </motion.div>

              <h1 className="animate-in font-display text-4xl sm:text-5xl md:text-6xl font-bold text-carbon-900 mb-6 leading-tight">
                Bukan Klaim—Ini{" "}
                <span className="bg-gradient-to-r from-forest-600 to-microbe-500 bg-clip-text text-transparent">
                  Bukti Ilmiah
                </span>
              </h1>

              <p className="animate-in text-lg md:text-xl text-carbon-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                Setiap produk kami diuji di lapangan bersama IPB, UB, UNUD, UNPAD, dan FKH UNAIR. 
                Dengan R/C Ratio hingga 2,02 dan efikasi terukur 76,84%, hasil riset kami bukan teori—melainkan data nyata dari lahan pertanian Indonesia.
              </p>

              <div className="animate-in flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="btn-primary group bg-forest-600 hover:bg-forest-500"
                >
                  <span>Ajukan Kolaborasi Riset</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/news" className="btn-secondary">
                  Lihat Publikasi
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="animate-in mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: GraduationCap, value: "4+", label: "Universitas Mitra" },
                { icon: FileText, value: "12+", label: "Laporan Uji Lapangan" },
                { icon: FlaskConical, value: "8+", label: "Produk Teruji" },
                { icon: Award, value: "5", label: "Sertifikasi" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-carbon-100"
                >
                  <stat.icon className="w-8 h-8 text-forest-600 mx-auto mb-3" />
                  <div className="text-3xl font-display font-bold text-carbon-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-carbon-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Partners Section */}
        <section ref={partnersRef} className="py-20 bg-white">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-carbon-900 mb-4">
                Mitra Riset Universitas
              </h2>
              <p className="text-carbon-600 max-w-2xl mx-auto">
                Kolaborasi intensif dengan fakultas pertanian universitas terkemuka 
                menghasilkan produk berkualitas tinggi yang teruji secara ilmiah.
              </p>
            </div>

            <div className="grid gap-8">
              {researchPartners.map((partner, i) => (
                <div
                  key={partner.name}
                  className="partner-card bg-gradient-to-br from-forest-50/50 to-white rounded-3xl border border-forest-100 p-8 md:p-10"
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Partner Info */}
                    <div className="lg:w-1/3">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-forest-100 rounded-2xl flex items-center justify-center">
                          <GraduationCap className="w-8 h-8 text-forest-600" />
                        </div>
                        <div>
                          <h3 className="font-display text-xl font-bold text-carbon-900">
                            {partner.name}
                          </h3>
                          <p className="text-sm text-carbon-500">{partner.department}</p>
                        </div>
                      </div>
                      <p className="text-carbon-600 mb-4">{partner.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs px-3 py-1 bg-forest-100 text-forest-700 rounded-full">
                          {partner.location}
                        </span>
                        <span className="text-xs px-3 py-1 bg-microbe-100 text-microbe-700 rounded-full">
                          {partner.year}
                        </span>
                      </div>
                    </div>

                    {/* Products */}
                    <div className="lg:w-1/3">
                      <h4 className="font-semibold text-carbon-900 mb-3">Produk Hasil Riset</h4>
                      <div className="flex flex-wrap gap-2">
                        {partner.products.map((product) => (
                          <span
                            key={product}
                            className="px-4 py-2 bg-white rounded-lg border border-carbon-100 text-sm font-medium text-carbon-700"
                          >
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="lg:w-1/3">
                      <h4 className="font-semibold text-carbon-900 mb-3">Hasil Pencapaian</h4>
                      <ul className="space-y-2">
                        {partner.achievements.map((achievement, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-carbon-600">
                            <CheckCircle2 className="w-4 h-4 text-forest-500 shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products from Research Section */}
        <section ref={productsRef} className="py-20 bg-gradient-to-b from-moss-50/30 to-white">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-carbon-900 mb-4">
                Produk Hasil Riset Ilmiah
              </h2>
              <p className="text-carbon-600 max-w-2xl mx-auto">
                Setiap produk Biosolution dikembangkan melalui proses riset ketat 
                dan uji lapangan bersama universitas mitra.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, i) => (
                <div
                  key={product.name}
                  className="product-card bg-white rounded-2xl border border-carbon-100 p-6 hover:shadow-lg hover:border-forest-200 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center mb-4">
                    <product.icon className="w-6 h-6 text-forest-600" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-carbon-900 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-forest-600 font-medium mb-3">{product.type}</p>
                  <p className="text-sm text-carbon-600 mb-4">{product.description}</p>
                  <div className="pt-4 border-t border-carbon-100">
                    <p className="text-xs text-carbon-500 flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-forest-500 shrink-0" />
                      <span>{product.result}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 bg-carbon-950 text-white">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Sertifikasi dan Akreditasi
              </h2>
              <p className="text-carbon-400 max-w-2xl mx-auto">
                Produk Biosolution memenuhi standar regulasi dan sertifikasi nasional maupun internasional.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {certifications.map((cert, i) => (
                <div
                  key={cert.name}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:bg-white/10 transition-colors"
                >
                  <Award className="w-8 h-8 text-forest-400 mx-auto mb-3" />
                  <h3 className="font-medium text-white mb-1">{cert.name}</h3>
                  <p className="text-xs text-carbon-400">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-forest-600 to-forest-700">
          <div className="container-wide text-center">
            <div className="max-w-3xl mx-auto">
              <Users className="w-16 h-16 text-white/80 mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Tertarik Berkolaborasi dalam Riset?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Kami terbuka untuk kerjasama riset dengan universitas, lembaga penelitian, 
                dan institusi pertanian dalam pengembangan produk bioteknologi.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="btn-primary bg-white text-forest-700 hover:bg-white/90"
                >
                  Hubungi Tim Riset
                </Link>
                <a
                  href="mailto:info@biosolution.tech"
                  className="btn-secondary border-white/30 text-white hover:bg-white/10"
                >
                  info@biosolution.tech
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

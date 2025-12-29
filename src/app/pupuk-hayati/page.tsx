"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { GSAPProvider } from "@/lib/gsap-provider";
import { Header, Footer } from "@/components/layout";
import {
  Leaf,
  Droplets,
  FlaskConical,
  Shield,
  Sprout,
  TreeDeciduous,
  ArrowRight,
  Phone,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Star,
  Award,
  Factory,
  ChevronDown,
  Beaker,
  CircleDot,
  Microscope,
  Target,
  TrendingUp,
  Wheat,
  Apple,
  GraduationCap,
  Clock,
  Percent,
  BadgeCheck,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Jenis pupuk hayati Biosolution
const pupukHayatiProducts = [
  {
    name: "FloraOne",
    tagline: "Pupuk Hayati Cair Premium",
    description: "Konsorsium 4 mikroba unggul: Azotobacter, Azospirillum, Bacillus, dan Pseudomonas. Meningkatkan penyerapan NPK dan efisiensi pemupukan hingga 50%.",
    benefits: ["Penambat Nitrogen", "Pelarut Fosfat", "Penghasil Hormon Tumbuh"],
    applications: ["Padi", "Jagung", "Sayuran", "Perkebunan"],
    image: "/images/products/floraone.webp",
    slug: "/products/formula-nutrisi-tanaman-lengkap",
  },
  {
    name: "BIOJAGAT",
    tagline: "Pupuk Hayati Organik Serbaguna",
    description: "Formula pupuk hayati organik lengkap dengan bakteri pengurai bahan organik dan penyedia unsur hara mikro untuk kesuburan tanah jangka panjang.",
    benefits: ["Memperbaiki Struktur Tanah", "Pengurai Bahan Organik", "Penyedia Hara Mikro"],
    applications: ["Hortikultura", "Padi Sawah", "Palawija", "Buah-buahan"],
    image: "/images/products/biojagat.webp",
    slug: "/products/formula-kesehatan-tanah",
  },
  {
    name: "MEGABIO",
    tagline: "Pupuk Hayati Padat Granul",
    description: "Pupuk hayati padat berbentuk granul dengan dosis aplikasi lebih praktis. Cocok untuk pertanian skala besar dengan sistem tabur atau dicampur pupuk dasar.",
    benefits: ["Aplikasi Praktis", "Dosis Terukur", "Tahan Simpan"],
    applications: ["Perkebunan Kelapa Sawit", "Tebu", "Karet", "Kakao"],
    image: "/images/products/megabio.webp",
    slug: "/products/formula-produktivitas-ternak",
  },
];

// Keunggulan pupuk hayati vs pupuk kimia
const advantages = [
  {
    icon: Leaf,
    title: "Ramah Lingkungan",
    description: "Pupuk hayati tidak meninggalkan residu kimia berbahaya di tanah maupun hasil panen. Aman untuk lingkungan dan konsumen.",
  },
  {
    icon: TrendingUp,
    title: "Meningkatkan Hasil Panen 20-30%",
    description: "Mikroba dalam pupuk hayati mengoptimalkan penyerapan nutrisi, menghasilkan pertumbuhan tanaman lebih baik dan hasil panen lebih tinggi.",
  },
  {
    icon: Percent,
    title: "Hemat Biaya Pupuk hingga 50%",
    description: "Dengan efisiensi penyerapan hara yang lebih baik, kebutuhan pupuk kimia dapat dikurangi signifikan tanpa mengorbankan produktivitas.",
  },
  {
    icon: Shield,
    title: "Memperbaiki Struktur Tanah",
    description: "Mikroorganisme dalam pupuk hayati meningkatkan kesuburan dan struktur tanah, menciptakan ekosistem yang lebih sehat jangka panjang.",
  },
  {
    icon: Sprout,
    title: "Meningkatkan Ketahanan Tanaman",
    description: "Pupuk hayati memperkuat sistem kekebalan alami tanaman terhadap serangan hama, penyakit, dan stress lingkungan.",
  },
  {
    icon: CircleDot,
    title: "Mikroba Unggul Terseleksi",
    description: "Setiap produk pupuk hayati Biosolution mengandung strain mikroba unggul hasil riset dengan konsentrasi tinggi 10⁸ CFU/ml.",
  },
];

// Cara kerja pupuk hayati
const howItWorks = [
  {
    step: 1,
    title: "Fiksasi Nitrogen",
    description: "Bakteri Azotobacter dan Azospirillum mengikat nitrogen dari udara dan mengubahnya menjadi bentuk yang dapat diserap tanaman.",
    microbe: "Azotobacter, Azospirillum",
  },
  {
    step: 2,
    title: "Pelarutan Fosfat",
    description: "Bakteri Bacillus melarutkan fosfat terikat di tanah menjadi fosfat tersedia, meningkatkan ketersediaan unsur P.",
    microbe: "Bacillus subtilis",
  },
  {
    step: 3,
    title: "Produksi Hormon Tumbuh",
    description: "Pseudomonas menghasilkan hormon auksin, giberelin, dan sitokinin yang memacu pertumbuhan akar dan tunas.",
    microbe: "Pseudomonas fluorescens",
  },
  {
    step: 4,
    title: "Penguraian Bahan Organik",
    description: "Mikroba pengurai mengubah bahan organik menjadi humus dan nutrisi tersedia untuk tanaman.",
    microbe: "Trichoderma, Aspergillus",
  },
];

// Aplikasi pupuk hayati per komoditas
const applications = [
  {
    icon: Wheat,
    title: "Tanaman Pangan",
    crops: ["Padi", "Jagung", "Kedelai", "Kacang Tanah"],
    benefit: "Meningkatkan hasil panen padi hingga 15-25% dengan pengurangan pupuk urea 30%.",
  },
  {
    icon: Apple,
    title: "Hortikultura",
    crops: ["Cabai", "Tomat", "Bawang", "Sayuran Daun"],
    benefit: "Memperbaiki kualitas buah, meningkatkan ketahanan terhadap layu fusarium.",
  },
  {
    icon: TreeDeciduous,
    title: "Perkebunan",
    crops: ["Kelapa Sawit", "Karet", "Kakao", "Kopi"],
    benefit: "Meremajakan tanah, meningkatkan produktivitas tanaman tahunan secara berkelanjutan.",
  },
];

// FAQ tentang pupuk hayati
const faqs = [
  {
    q: "Apa perbedaan pupuk hayati dan pupuk organik?",
    a: "Pupuk hayati (biofertilizer) mengandung mikroorganisme hidup yang aktif meningkatkan ketersediaan nutrisi di tanah. Pupuk organik adalah hasil pengomposan bahan organik yang menyediakan nutrisi secara langsung. Keduanya saling melengkapi—pupuk hayati bekerja seperti \"pabrik nutrisi\" yang terus menghasilkan hara, sementara pupuk organik menyediakan bahan baku dan memperbaiki struktur tanah.",
  },
  {
    q: "Bagaimana cara menggunakan pupuk hayati cair?",
    a: "Pupuk hayati cair dapat diaplikasikan dengan cara: (1) Penyemprotan foliar dengan dosis 2-3 ml/liter air, (2) Pengocoran ke tanah sekitar perakaran, (3) Dicampur dengan air irigasi (fertigasi). Aplikasi sebaiknya dilakukan pagi atau sore hari, setiap 7-14 hari sekali.",
  },
  {
    q: "Apakah pupuk hayati aman untuk tanaman organik?",
    a: "Ya, pupuk hayati 100% aman untuk sistem pertanian organik. Produk Biosolution tidak mengandung bahan kimia sintetis dan kompatibel dengan standar pertanian organik Indonesia. Bahkan, pupuk hayati merupakan komponen penting dalam sistem pertanian organik berkelanjutan.",
  },
  {
    q: "Berapa lama pupuk hayati mulai menunjukkan hasil?",
    a: "Efek pupuk hayati mulai terlihat dalam 2-4 minggu setelah aplikasi pertama, tergantung kondisi tanah dan jenis tanaman. Untuk hasil optimal, aplikasi rutin selama satu musim tanam disarankan karena mikroba membutuhkan waktu untuk berkembang dan mengkolonisasi zona perakaran.",
  },
  {
    q: "Apakah bisa mencampur pupuk hayati dengan pupuk kimia?",
    a: "Ya, pupuk hayati Biosolution kompatibel dengan pupuk kimia NPK dan pupuk dasar lainnya. Namun, hindari mencampur langsung dengan pestisida kimia atau fungisida karena dapat membunuh mikroba. Beri jeda minimal 3-5 hari antara aplikasi.",
  },
  {
    q: "Bagaimana cara menyimpan pupuk hayati agar tetap efektif?",
    a: "Simpan pupuk hayati di tempat sejuk (suhu ruang 15-30°C), kering, dan terhindar dari sinar matahari langsung. Tutup rapat setelah digunakan. Masa simpan produk Biosolution adalah 12 bulan dari tanggal produksi jika disimpan dengan benar.",
  },
];

// Statistik keunggulan
const stats = [
  { value: "10⁸", label: "CFU/ml Konsentrasi Mikroba", suffix: "+" },
  { value: "50", label: "Hemat Pupuk Kimia", suffix: "%" },
  { value: "20-30", label: "Peningkatan Hasil Panen", suffix: "%" },
  { value: "14", label: "Tahun Riset & Pengembangan", suffix: "+" },
];

export default function PupukHayatiPage() {
  const heroRef = useRef<HTMLElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useGSAP(
    () => {
      gsap.fromTo(
        ".pupuk-hero-content > *",
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

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Halo Biosolution,\n\nSaya tertarik dengan produk pupuk hayati untuk:\n\n[Jelaskan jenis tanaman dan kebutuhan Anda]\n\nMohon informasi lebih lanjut mengenai:\n- Produk yang sesuai\n- Dosis dan cara aplikasi\n- Harga dan pemesanan\n\nTerima kasih.`
    );
    window.open(`https://wa.me/6285742249591?text=${message}`, "_blank");
  };

  return (
    <GSAPProvider>
      <Header />

      <main>
        {/* Hero Section - SEO Optimized */}
        <section
          ref={heroRef}
          className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-forest-950 via-forest-900 to-moss-950 text-white overflow-hidden"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-moss-500/20 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-forest-500/15 rounded-full blur-[120px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-microbe-500/10 rounded-full blur-[200px]" />
          </div>

          {/* Organic Pattern Background */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative container-wide">
            <div className="pupuk-hero-content max-w-4xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-moss-500/20 border border-moss-500/30 rounded-full text-sm font-medium text-moss-400 mb-6">
                <Leaf className="w-4 h-4" />
                Produsen Pupuk Hayati Terpercaya di Indonesia
              </span>

              {/* SEO-Optimized H1 */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-[1.1]">
                Pupuk Hayati Organik{" "}
                <span className="bg-gradient-to-r from-moss-400 via-forest-400 to-microbe-400 bg-clip-text text-transparent">
                  Berkualitas Tinggi
                </span>{" "}
                untuk Pertanian Berkelanjutan
              </h1>

              <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
                Tingkatkan hasil panen <strong className="text-moss-400">20-30%</strong> dan kurangi ketergantungan pupuk kimia dengan{" "}
                <strong>pupuk hayati</strong> berbasis mikroorganisme unggul. Produk terdaftar Kementan, telah dipercaya petani di 19 provinsi Indonesia.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-sm text-white/80">
                  <BadgeCheck className="w-4 h-4 text-moss-400" />
                  Terdaftar Kementan
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-sm text-white/80">
                  <Microscope className="w-4 h-4 text-moss-400" />
                  Lab Tested
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-sm text-white/80">
                  <Award className="w-4 h-4 text-moss-400" />
                  14+ Tahun Pengalaman
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsApp}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-moss-600 to-forest-600 hover:from-moss-500 hover:to-forest-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-moss-500/25 hover:shadow-xl hover:shadow-moss-500/30"
                >
                  <MessageCircle className="w-5 h-5" />
                  Konsultasi Gratis via WhatsApp
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  href="/solutions/plant"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl transition-all duration-300"
                >
                  <Sprout className="w-5 h-5" />
                  Lihat Semua Produk Tanaman
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gradient-to-b from-forest-950 to-soil-100 border-t border-white/5">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl sm:text-5xl font-display font-bold text-moss-500 mb-2">
                    {stat.value}<span className="text-forest-500">{stat.suffix}</span>
                  </div>
                  <div className="text-sm sm:text-base text-carbon-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Intro Section - What is Pupuk Hayati */}
        <section className="py-20 lg:py-28 bg-soil-50">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-forest-100 border border-forest-200 rounded-full text-sm font-medium text-forest-700 mb-6">
                  <GraduationCap className="w-4 h-4" />
                  Edukasi Pupuk Hayati
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-carbon-900 mb-6">
                  Apa itu <span className="text-forest-600">Pupuk Hayati</span>?
                </h2>
                <div className="prose prose-lg text-carbon-600">
                  <p>
                    <strong>Pupuk hayati</strong> atau <em>biofertilizer</em> adalah pupuk yang mengandung{" "}
                    <strong>mikroorganisme hidup</strong> seperti bakteri, jamur, dan alga yang bekerja aktif
                    memperbaiki kesuburan tanah dan meningkatkan ketersediaan nutrisi untuk tanaman.
                  </p>
                  <p>
                    Berbeda dengan pupuk kimia yang menyediakan nutrisi secara langsung, <strong>pupuk hayati organik</strong>{" "}
                    bekerja seperti &quot;pabrik nutrisi alami&quot; yang terus menghasilkan unsur hara secara berkelanjutan,
                    sekaligus memperbaiki ekosistem tanah.
                  </p>
                  <p>
                    Biosolution adalah <strong>produsen pupuk hayati</strong> terkemuka di Indonesia dengan pengalaman
                    14+ tahun dalam pengembangan formulasi mikroba unggul untuk berbagai komoditas pertanian.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-carbon-100">
                <h3 className="text-xl font-display font-bold text-carbon-900 mb-6">
                  Kandungan Mikroba Pupuk Hayati Biosolution
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "Azotobacter sp.", function: "Penambat nitrogen dari udara", cfu: "10⁸ CFU/ml" },
                    { name: "Azospirillum sp.", function: "Penghasil hormon pertumbuhan", cfu: "10⁸ CFU/ml" },
                    { name: "Bacillus subtilis", function: "Pelarut fosfat & kalium", cfu: "10⁸ CFU/ml" },
                    { name: "Pseudomonas fluorescens", function: "Produksi antibiotik alami", cfu: "10⁸ CFU/ml" },
                    { name: "Trichoderma harzianum", function: "Pengendali jamur patogen", cfu: "10⁷ CFU/ml" },
                  ].map((microbe, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-forest-50 rounded-xl">
                      <div className="w-10 h-10 shrink-0 bg-forest-100 rounded-full flex items-center justify-center">
                        <CircleDot className="w-5 h-5 text-forest-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-carbon-900 italic">{microbe.name}</span>
                          <span className="text-sm text-forest-600 font-mono">{microbe.cfu}</span>
                        </div>
                        <span className="text-sm text-carbon-600">{microbe.function}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-microbe-100 border border-microbe-200 rounded-full text-sm font-medium text-microbe-700 mb-6">
                <Beaker className="w-4 h-4" />
                Mekanisme Kerja
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-carbon-900 mb-6">
                Bagaimana Pupuk Hayati Bekerja?
              </h2>
              <p className="text-lg text-carbon-600">
                Pupuk hayati cair dan padat dari Biosolution mengandung mikroorganisme yang bekerja
                secara sinergis untuk meningkatkan kesuburan tanah dan produktivitas tanaman.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {howItWorks.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-gradient-to-br from-soil-50 to-white rounded-2xl p-6 border border-carbon-100 hover:border-forest-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="absolute -top-4 left-6 w-10 h-10 bg-gradient-to-br from-forest-500 to-moss-600 rounded-xl flex items-center justify-center font-display font-bold text-lg text-white shadow-lg">
                    {item.step}
                  </div>
                  <div className="pt-4">
                    <h3 className="text-lg font-display font-bold text-carbon-900 mb-3">{item.title}</h3>
                    <p className="text-carbon-600 text-sm mb-4">{item.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-xs text-forest-600 bg-forest-50 px-3 py-1.5 rounded-full italic">
                      <CircleDot className="w-3 h-3" />
                      {item.microbe}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages Section - Pupuk Hayati vs Kimia */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-forest-900 to-moss-950 text-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-moss-400 mb-6">
                <Sparkles className="w-4 h-4" />
                Keunggulan Pupuk Hayati
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Mengapa Beralih ke Pupuk Hayati Organik?
              </h2>
              <p className="text-lg text-white/70">
                Pupuk hayati dari Biosolution memberikan solusi pertanian berkelanjutan yang lebih ramah
                lingkungan dan menguntungkan secara ekonomi dibanding pupuk kimia konvensional.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {advantages.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-moss-500/50 transition-colors duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-moss-500/20 to-forest-500/20 rounded-2xl flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-moss-400" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 lg:py-28 bg-soil-50">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-forest-100 border border-forest-200 rounded-full text-sm font-medium text-forest-700 mb-6">
                <Droplets className="w-4 h-4" />
                Produk Pupuk Hayati
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-carbon-900 mb-6">
                Pilihan Pupuk Hayati Cair & Padat Biosolution
              </h2>
              <p className="text-lg text-carbon-600">
                Kami menyediakan berbagai jenis pupuk hayati organik berkualitas tinggi untuk
                memenuhi kebutuhan berbagai komoditas pertanian di Indonesia.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {pupukHayatiProducts.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-carbon-100 hover:border-forest-200 transition-all duration-300 group"
                >
                  <div className="h-48 bg-gradient-to-br from-forest-100 to-moss-100 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <FlaskConical className="w-12 h-12 text-forest-600" />
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-forest-600 font-medium">{product.tagline}</span>
                    <h3 className="text-2xl font-display font-bold text-carbon-900 mt-1 mb-3">
                      {product.name}
                    </h3>
                    <p className="text-carbon-600 text-sm mb-4">{product.description}</p>
                    
                    <div className="mb-4">
                      <div className="text-xs font-semibold text-carbon-500 uppercase tracking-wider mb-2">Manfaat Utama</div>
                      <div className="flex flex-wrap gap-2">
                        {product.benefits.map((benefit) => (
                          <span key={benefit} className="inline-flex items-center gap-1 px-2 py-1 bg-forest-50 text-forest-700 text-xs rounded-full">
                            <CheckCircle2 className="w-3 h-3" />
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="text-xs font-semibold text-carbon-500 uppercase tracking-wider mb-2">Aplikasi</div>
                      <div className="flex flex-wrap gap-1">
                        {product.applications.map((app) => (
                          <span key={app} className="px-2 py-1 bg-moss-50 text-moss-700 text-xs rounded-full">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={product.slug}
                      className="inline-flex items-center gap-2 text-forest-600 font-semibold hover:text-forest-700 transition-colors group/link"
                    >
                      Lihat Detail Produk
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/solutions/plant"
                className="inline-flex items-center gap-3 px-8 py-4 bg-forest-600 hover:bg-forest-700 text-white font-semibold rounded-xl transition-all duration-300"
              >
                Lihat Semua Produk Biosecurity Tanaman
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Applications by Commodity */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-moss-100 border border-moss-200 rounded-full text-sm font-medium text-moss-700 mb-6">
                <Target className="w-4 h-4" />
                Aplikasi Pupuk Hayati
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-carbon-900 mb-6">
                Pupuk Hayati untuk Berbagai Komoditas
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {applications.map((app, index) => (
                <motion.div
                  key={app.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-soil-50 to-white rounded-2xl p-8 border border-carbon-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-forest-100 to-moss-100 rounded-2xl flex items-center justify-center mb-6">
                    <app.icon className="w-8 h-8 text-forest-600" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-carbon-900 mb-3">{app.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {app.crops.map((crop) => (
                      <span key={crop} className="px-3 py-1 bg-forest-50 text-forest-700 text-sm rounded-full">
                        {crop}
                      </span>
                    ))}
                  </div>
                  <p className="text-carbon-600">{app.benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Maklon CTA */}
        <section className="py-16 bg-gradient-to-r from-microbe-600 to-forest-600 text-white">
          <div className="container-wide">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Factory className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold mb-2">Ingin Produksi Pupuk Hayati dengan Brand Sendiri?</h3>
                  <p className="text-white/80">Kami menyediakan jasa maklon pupuk hayati dengan formulasi custom sesuai kebutuhan Anda.</p>
                </div>
              </div>
              <Link
                href="/maklon"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-forest-700 font-semibold rounded-xl hover:bg-forest-50 transition-all duration-300 shrink-0"
              >
                Pelajari Jasa Maklon Pupuk
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 lg:py-28 bg-soil-50">
          <div className="container-wide max-w-4xl">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-forest-100 border border-forest-200 rounded-full text-sm font-medium text-forest-700 mb-6">
                <MessageCircle className="w-4 h-4" />
                FAQ Pupuk Hayati
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-carbon-900 mb-6">
                Pertanyaan Umum tentang Pupuk Hayati
              </h2>
              <p className="text-lg text-carbon-600">
                Temukan jawaban atas pertanyaan yang sering diajukan tentang pupuk hayati organik dan cara penggunaannya.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl border border-carbon-100 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-lg font-semibold text-carbon-900 pr-4">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-carbon-500 shrink-0 transition-transform duration-300 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-carbon-600 leading-relaxed border-t border-carbon-100 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-forest-600 via-forest-700 to-moss-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-moss-500/20 rounded-full blur-[100px]" />
          </div>

          <div className="relative container-wide text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Siap Meningkatkan Hasil Panen dengan Pupuk Hayati?
              </h2>
              <p className="text-xl text-white/80 mb-10">
                Konsultasikan kebutuhan pupuk hayati Anda dengan tim ahli bioteknologi kami. Gratis dan tanpa komitmen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleWhatsApp}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-forest-700 font-semibold rounded-xl hover:bg-forest-50 transition-all duration-300 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Hubungi via WhatsApp
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="tel:+6285742249591"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 font-semibold rounded-xl transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +62 857-4224-9591
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </GSAPProvider>
  );
}

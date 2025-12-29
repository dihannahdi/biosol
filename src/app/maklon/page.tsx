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
  Factory,
  FlaskConical,
  Shield,
  FileCheck,
  Truck,
  Users,
  Award,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
  Sparkles,
  Package,
  Beaker,
  ClipboardCheck,
  TrendingUp,
  Building2,
  Leaf,
  Fish,
  Beef,
  Home,
  ChevronDown,
  Clock,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Jenis layanan maklon
const maklonServices = [
  {
    icon: Leaf,
    title: "Maklon Pupuk Hayati",
    description: "Produksi pupuk hayati cair dan padat dengan formulasi custom sesuai kebutuhan Anda.",
    products: ["Pupuk Hayati Cair", "Pupuk Organik Granul", "Decomposer", "Bio-Fertilizer"],
  },
  {
    icon: Shield,
    title: "Maklon Pestisida Hayati",
    description: "Insektisida dan fungisida hayati berbasis mikroorganisme unggul.",
    products: ["Insektisida Hayati", "Fungisida Hayati", "Nematisida Hayati", "Bio-Pesticide"],
  },
  {
    icon: Beef,
    title: "Maklon Probiotik Ternak",
    description: "Probiotik untuk unggas, ruminansia, dan ternak dengan strain pilihan.",
    products: ["Probiotik Ayam", "Probiotik Sapi", "Probiotik Kambing", "Feed Additive"],
  },
  {
    icon: Fish,
    title: "Maklon Probiotik Akuakultur",
    description: "Probiotik ikan dan udang untuk meningkatkan produktivitas tambak.",
    products: ["Probiotik Ikan", "Probiotik Udang", "Pengurai Limbah", "Water Treatment"],
  },
  {
    icon: Home,
    title: "Maklon Produk Rumah Tangga",
    description: "Produk enzim dan probiotik untuk solusi rumah tangga ramah lingkungan.",
    products: ["Septic Tank Treatment", "Pembersih Enzim", "Pengurai Organik", "Bio-Cleaner"],
  },
  {
    icon: Factory,
    title: "Maklon Produk Industri",
    description: "Solusi bioteknologi untuk industri pengolahan dan manufaktur.",
    products: ["Pengurai Limbah Industri", "Bioremediasi", "Enzim Industri", "WWTP Treatment"],
  },
];

// Keunggulan maklon
const advantages = [
  {
    icon: FlaskConical,
    title: "R&D Support Penuh",
    description: "Tim riset berpengalaman membantu mengembangkan formulasi optimal sesuai target pasar Anda.",
  },
  {
    icon: Award,
    title: "Terdaftar Kementan",
    description: "Fasilitas produksi terdaftar dan produk dapat diregistrasikan ke Kementerian Pertanian.",
  },
  {
    icon: Package,
    title: "Fleksibilitas Kemasan",
    description: "Pilihan kemasan dari 100ml hingga 1000L sesuai kebutuhan distribusi Anda.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Kontrol kualitas ketat dengan pengujian laboratorium di setiap batch produksi.",
  },
  {
    icon: FileCheck,
    title: "Dokumentasi Lengkap",
    description: "COA, MSDS, dan dokumen teknis lengkap untuk setiap produk yang diproduksi.",
  },
  {
    icon: Truck,
    title: "Pengiriman Nasional",
    description: "Jaringan distribusi ke seluruh Indonesia dengan armada berpendingin.",
  },
];

// Proses maklon
const maklonProcess = [
  {
    step: 1,
    title: "Konsultasi & Analisis",
    description: "Diskusi kebutuhan produk, target pasar, dan spesifikasi yang diinginkan.",
    duration: "1-2 hari",
  },
  {
    step: 2,
    title: "Pengembangan Formulasi",
    description: "Tim R&D mengembangkan formulasi sesuai brief atau mengoptimasi formula existing.",
    duration: "2-4 minggu",
  },
  {
    step: 3,
    title: "Trial Production",
    description: "Produksi sampel untuk pengujian kualitas dan validasi formulasi.",
    duration: "1-2 minggu",
  },
  {
    step: 4,
    title: "Approval & Agreement",
    description: "Finalisasi spesifikasi produk, harga, dan penandatanganan kontrak kerjasama.",
    duration: "3-5 hari",
  },
  {
    step: 5,
    title: "Produksi Massal",
    description: "Produksi sesuai MOQ yang disepakati dengan quality control ketat.",
    duration: "2-4 minggu",
  },
  {
    step: 6,
    title: "Pengiriman & Support",
    description: "Pengiriman ke lokasi Anda dengan dukungan teknis berkelanjutan.",
    duration: "3-7 hari",
  },
];

// Statistik
const stats = [
  { value: "14+", label: "Tahun Pengalaman" },
  { value: "50+", label: "Mitra Maklon Aktif" },
  { value: "100+", label: "Formulasi Dikembangkan" },
  { value: "19", label: "Provinsi Terjangkau" },
];

// FAQ Maklon
const faqs = [
  {
    q: "Berapa MOQ (Minimum Order Quantity) untuk maklon?",
    a: "MOQ kami mulai dari 500 liter untuk produk cair dan 500 kg untuk produk padat. Untuk order perdana, kami dapat menyesuaikan dengan kebutuhan Anda untuk uji pasar.",
  },
  {
    q: "Apakah bisa menggunakan merek sendiri (private label)?",
    a: "Ya, kami menyediakan layanan private label dan white label. Anda bisa menggunakan brand, logo, dan desain kemasan sendiri.",
  },
  {
    q: "Berapa lama waktu produksi dari PO hingga pengiriman?",
    a: "Untuk produk dengan formulasi existing, lead time sekitar 2-4 minggu. Untuk pengembangan formulasi baru, tambahan 2-4 minggu untuk R&D.",
  },
  {
    q: "Apakah produk maklon bisa didaftarkan ke Kementan?",
    a: "Ya, kami membantu proses registrasi produk ke Kementerian Pertanian. Fasilitas kami sudah terdaftar dan memenuhi persyaratan regulasi.",
  },
  {
    q: "Apa saja dokumen yang disediakan?",
    a: "Setiap produk dilengkapi dengan COA (Certificate of Analysis), MSDS (Material Safety Data Sheet), Technical Data Sheet, dan dokumen pendukung registrasi.",
  },
  {
    q: "Apakah bisa request formulasi khusus?",
    a: "Tentu! Tim R&D kami dapat mengembangkan formulasi custom sesuai kebutuhan target pasar atau komoditas spesifik Anda.",
  },
];

export default function MaklonPage() {
  const heroRef = useRef<HTMLElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useGSAP(
    () => {
      gsap.fromTo(
        ".maklon-hero-content > *",
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
      `Halo Biosolution,\n\nSaya tertarik dengan layanan maklon/contract manufacturing untuk:\n\n[Jelaskan produk yang ingin diproduksi]\n\nMohon informasi lebih lanjut mengenai:\n- Formulasi yang tersedia\n- MOQ dan harga\n- Proses kerjasama\n\nTerima kasih.`
    );
    window.open(`https://wa.me/6285742249591?text=${message}`, "_blank");
  };

  return (
    <GSAPProvider>
      <Header />

      <main>
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-carbon-950 via-carbon-900 to-forest-950 text-white overflow-hidden"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-forest-500/20 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-microbe-500/15 rounded-full blur-[120px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-moss-500/10 rounded-full blur-[200px]" />
          </div>

          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          <div className="relative container-wide">
            <div className="maklon-hero-content max-w-4xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-forest-500/20 border border-forest-500/30 rounded-full text-sm font-medium text-forest-400 mb-6">
                <Factory className="w-4 h-4" />
                Contract Manufacturing Partner
              </span>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-[1.1]">
                Jasa Maklon{" "}
                <span className="bg-gradient-to-r from-forest-400 via-microbe-400 to-moss-400 bg-clip-text text-transparent">
                  Bioteknologi
                </span>{" "}
                Terpercaya
              </h1>
              
              <p className="text-lg sm:text-xl text-white/70 mb-8 leading-relaxed max-w-2xl">
                Wujudkan produk bioteknologi dengan brand Anda sendiri. Dari pupuk hayati hingga probiotik—kami produksi, Anda yang jual.
                <span className="text-forest-400 font-medium"> 14+ tahun pengalaman, 50+ mitra aktif.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsApp}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-forest-600 to-forest-500 hover:from-forest-500 hover:to-forest-400 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-forest-500/25 hover:shadow-xl hover:shadow-forest-500/30"
                >
                  <MessageCircle className="w-5 h-5" />
                  Konsultasi Gratis via WhatsApp
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  href="#layanan"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl transition-all duration-300"
                >
                  Lihat Layanan
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gradient-to-b from-carbon-950 to-carbon-900 border-t border-white/5">
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
                  <div className="text-4xl sm:text-5xl font-display font-bold text-forest-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="layanan" className="py-20 lg:py-28 bg-gradient-to-b from-carbon-900 to-soil-50">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-forest-100 border border-forest-200 rounded-full text-sm font-medium text-forest-700 mb-6">
                <Package className="w-4 h-4" />
                Layanan Maklon
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-carbon-900 mb-6">
                Produk Apa yang Ingin Anda Produksi?
              </h2>
              <p className="text-lg text-carbon-600">
                Kami menyediakan layanan maklon untuk berbagai kategori produk bioteknologi. Pilih sesuai kebutuhan bisnis Anda.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {maklonServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl border border-carbon-100 hover:border-forest-200 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-forest-100 to-moss-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-forest-600" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-carbon-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-carbon-600 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.products.map((product) => (
                      <span
                        key={product}
                        className="px-3 py-1 bg-forest-50 text-forest-700 text-sm rounded-full"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-microbe-100 border border-microbe-200 rounded-full text-sm font-medium text-microbe-700 mb-6">
                <Sparkles className="w-4 h-4" />
                Keunggulan Kami
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-carbon-900 mb-6">
                Mengapa Memilih Biosolution sebagai Partner Maklon?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {advantages.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex gap-4 p-6 bg-gradient-to-br from-soil-50 to-white rounded-2xl border border-carbon-100"
                >
                  <div className="w-12 h-12 shrink-0 bg-gradient-to-br from-microbe-100 to-forest-100 rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-forest-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-carbon-900 mb-2">{item.title}</h3>
                    <p className="text-carbon-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-forest-900 to-carbon-950 text-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-forest-400 mb-6">
                <ClipboardCheck className="w-4 h-4" />
                Proses Kerjasama
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Dari Konsultasi Hingga Pengiriman
              </h2>
              <p className="text-lg text-white/70">
                Proses maklon yang transparan dan terstruktur untuk memastikan kualitas produk Anda.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {maklonProcess.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-forest-500/50 transition-colors duration-300"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-forest-500 to-forest-600 rounded-xl flex items-center justify-center font-display font-bold text-lg shadow-lg">
                    {item.step}
                  </div>
                  <div className="pt-4">
                    <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
                    <p className="text-white/70 mb-4">{item.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm text-forest-400">
                      <Clock className="w-4 h-4" />
                      {item.duration}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 lg:py-28 bg-soil-50">
          <div className="container-wide max-w-4xl">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-forest-100 border border-forest-200 rounded-full text-sm font-medium text-forest-700 mb-6">
                <MessageCircle className="w-4 h-4" />
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-carbon-900 mb-6">
                Pertanyaan Umum tentang Maklon
              </h2>
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
        <section className="py-20 lg:py-28 bg-gradient-to-br from-forest-600 via-forest-700 to-forest-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-microbe-500/20 rounded-full blur-[100px]" />
          </div>

          <div className="relative container-wide text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Siap Memulai Produksi dengan Brand Anda?
              </h2>
              <p className="text-xl text-white/80 mb-10">
                Konsultasikan kebutuhan maklon Anda dengan tim kami. Gratis tanpa komitmen.
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

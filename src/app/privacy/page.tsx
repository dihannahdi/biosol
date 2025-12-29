"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Shield, Lock, Eye, Database, UserCheck, Bell, Mail, FileText, Calendar, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

gsap.registerPlugin(ScrollTrigger);

export default function PrivacyPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Hero animation
      gsap.from(heroRef.current?.querySelectorAll(".hero-animate") || [], {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Sections animation
      const sections = sectionsRef.current?.querySelectorAll(".policy-section");
      sections?.forEach((section) => {
        gsap.from(section, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
          },
        });
      });
    },
    { scope: containerRef }
  );

  const lastUpdated = "15 Januari 2025";

  return (
    <div ref={containerRef} className="min-h-screen bg-soil-50">
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-16 px-6 bg-gradient-to-b from-forest-900 via-forest-800 to-forest-900 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="hero-animate inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-forest-200 text-sm mb-6">
            <Shield className="w-4 h-4" />
            <span>Dokumen Legal</span>
          </div>

          <h1 className="hero-animate text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">
            Kebijakan Privasi
          </h1>

          <p className="hero-animate text-lg md:text-xl text-forest-100/90 max-w-2xl mx-auto mb-8">
            Kami berkomitmen untuk melindungi privasi dan keamanan data Anda. 
            Dokumen ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda.
          </p>

          <div className="hero-animate flex items-center justify-center gap-2 text-forest-200 text-sm">
            <Calendar className="w-4 h-4" />
            <span>Terakhir diperbarui: {lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={sectionsRef} className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <div className="policy-section bg-white rounded-2xl p-8 shadow-sm border border-forest-100 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-forest-100 rounded-xl text-forest-600">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-playfair font-bold text-carbon-900 mb-2">Pendahuluan</h2>
                <p className="text-carbon-600 leading-relaxed">
                  PT Centra Biotech Indonesia (&quot;Biosolution&quot;, &quot;kami&quot;, &quot;kita&quot;) menghargai kepercayaan Anda dalam memberikan informasi pribadi kepada kami. 
                  Kebijakan Privasi ini menjelaskan praktik kami terkait pengumpulan, penggunaan, pengungkapan, dan perlindungan informasi Anda 
                  ketika menggunakan website kami di www.biosolution.tech dan layanan terkait.
                </p>
              </div>
            </div>
            <div className="bg-forest-50 rounded-xl p-4 border border-forest-100">
              <p className="text-sm text-forest-700">
                <strong>Catatan Penting:</strong> Dengan mengakses atau menggunakan layanan kami, Anda menyetujui praktik yang dijelaskan dalam Kebijakan Privasi ini. 
                Jika Anda tidak setuju dengan kebijakan ini, mohon untuk tidak menggunakan layanan kami.
              </p>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="policy-section bg-white rounded-2xl p-8 shadow-sm border border-forest-100 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-microbe-100 rounded-xl text-microbe-600">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-playfair font-bold text-carbon-900 mb-2">Informasi yang Kami Kumpulkan</h2>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-carbon-900 mb-3">1. Informasi yang Anda Berikan Langsung</h3>
                <ul className="space-y-2 text-carbon-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-forest-500 rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Data Identitas:</strong> Nama lengkap, jabatan, nama perusahaan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-forest-500 rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Data Kontak:</strong> Alamat email, nomor telepon, alamat bisnis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-forest-500 rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Data Bisnis:</strong> Informasi tentang kebutuhan pertanian, peternakan, atau perikanan Anda</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-forest-500 rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Komunikasi:</strong> Pesan yang Anda kirim melalui formulir kontak atau email</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-carbon-900 mb-3">2. Informasi yang Dikumpulkan Otomatis</h3>
                <ul className="space-y-2 text-carbon-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-microbe-500 rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Data Perangkat:</strong> Jenis browser, sistem operasi, identifikasi perangkat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-microbe-500 rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Data Log:</strong> Alamat IP, waktu akses, halaman yang dikunjungi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-microbe-500 rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Cookies dan Teknologi Serupa:</strong> Untuk meningkatkan pengalaman pengguna</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="policy-section bg-white rounded-2xl p-8 shadow-sm border border-forest-100 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-moss-100 rounded-xl text-moss-600">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-playfair font-bold text-carbon-900 mb-2">Bagaimana Kami Menggunakan Informasi</h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Layanan Pelanggan", desc: "Menanggapi pertanyaan dan memberikan dukungan teknis" },
                { title: "Pemenuhan Pesanan", desc: "Memproses dan mengirimkan produk yang Anda pesan" },
                { title: "Komunikasi Bisnis", desc: "Mengirimkan informasi produk baru dan penawaran khusus" },
                { title: "Peningkatan Layanan", desc: "Menganalisis penggunaan untuk meningkatkan website dan produk" },
                { title: "Kepatuhan Hukum", desc: "Memenuhi kewajiban hukum dan regulasi yang berlaku" },
                { title: "Keamanan", desc: "Melindungi dari penipuan dan aktivitas tidak sah" },
              ].map((item, index) => (
                <div key={index} className="bg-soil-50 rounded-xl p-4 border border-soil-100">
                  <h4 className="font-semibold text-carbon-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-carbon-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Data Protection */}
          <div className="policy-section bg-white rounded-2xl p-8 shadow-sm border border-forest-100 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-forest-100 rounded-xl text-forest-600">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-playfair font-bold text-carbon-900 mb-2">Perlindungan Data</h2>
                <p className="text-carbon-600 leading-relaxed">
                  Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang sesuai untuk melindungi data pribadi Anda:
                </p>
              </div>
            </div>

            <ul className="space-y-3 text-carbon-600">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-forest-500 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">✓</div>
                <span>Enkripsi SSL/TLS untuk semua transmisi data</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-forest-500 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">✓</div>
                <span>Akses terbatas hanya untuk personel yang berwenang</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-forest-500 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">✓</div>
                <span>Penyimpanan data yang aman dengan backup reguler</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-forest-500 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">✓</div>
                <span>Pelatihan keamanan data untuk seluruh karyawan</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-forest-500 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">✓</div>
                <span>Audit keamanan berkala</span>
              </li>
            </ul>
          </div>

          {/* Your Rights */}
          <div className="policy-section bg-white rounded-2xl p-8 shadow-sm border border-forest-100 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-microbe-100 rounded-xl text-microbe-600">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-playfair font-bold text-carbon-900 mb-2">Hak-Hak Anda</h2>
                <p className="text-carbon-600 leading-relaxed mb-4">
                  Sesuai dengan UU Perlindungan Data Pribadi Indonesia (UU No. 27 Tahun 2022), Anda memiliki hak-hak berikut:
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { title: "Hak Akses", desc: "Meminta salinan data pribadi yang kami miliki tentang Anda" },
                { title: "Hak Perbaikan", desc: "Meminta koreksi data yang tidak akurat atau tidak lengkap" },
                { title: "Hak Penghapusan", desc: "Meminta penghapusan data pribadi dalam kondisi tertentu" },
                { title: "Hak Pembatasan", desc: "Meminta pembatasan pemrosesan data Anda" },
                { title: "Hak Portabilitas", desc: "Meminta transfer data ke pihak ketiga" },
                { title: "Hak Keberatan", desc: "Menolak pemrosesan data untuk tujuan pemasaran langsung" },
              ].map((right, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-soil-50 rounded-xl border border-soil-100">
                  <div className="w-8 h-8 bg-microbe-500 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-carbon-900">{right.title}</h4>
                    <p className="text-sm text-carbon-600">{right.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cookies */}
          <div className="policy-section bg-white rounded-2xl p-8 shadow-sm border border-forest-100 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-moss-100 rounded-xl text-moss-600">
                <Bell className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-playfair font-bold text-carbon-900 mb-2">Cookies dan Pelacakan</h2>
                <p className="text-carbon-600 leading-relaxed">
                  Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna. Untuk informasi lebih lanjut tentang penggunaan cookies, 
                  silakan lihat <a href="/cookies" className="text-forest-600 hover:text-forest-700 underline">Kebijakan Cookies</a> kami.
                </p>
              </div>
            </div>
          </div>

          {/* Data Retention */}
          <div className="policy-section bg-white rounded-2xl p-8 shadow-sm border border-forest-100 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-forest-100 rounded-xl text-forest-600">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-playfair font-bold text-carbon-900 mb-2">Retensi Data</h2>
                <p className="text-carbon-600 leading-relaxed">
                  Kami menyimpan data pribadi Anda selama diperlukan untuk tujuan yang dijelaskan dalam kebijakan ini, 
                  atau selama diwajibkan oleh hukum. Periode retensi dapat bervariasi tergantung pada konteks layanan dan kewajiban hukum kami.
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="policy-section bg-gradient-to-br from-forest-600 to-forest-700 rounded-2xl p-8 text-white">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-playfair font-bold mb-2">Hubungi Kami</h2>
                <p className="text-forest-100 leading-relaxed">
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin menggunakan hak-hak Anda, silakan hubungi kami:
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <p className="text-sm text-forest-200 mb-1">Email</p>
                <a href="mailto:info@biosolution.tech" className="text-white font-semibold hover:text-forest-100">
                  info@biosolution.tech
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <p className="text-sm text-forest-200 mb-1">WhatsApp</p>
                <a href="https://wa.me/6285742249591" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-forest-100">
                  +62 857-4224-9591
                </a>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-sm text-forest-200">
                <strong>PT Centra Biotech Indonesia</strong><br />
                Jl. Raya Lowokwaru No. 100, Malang, Jawa Timur, Indonesia
              </p>
            </div>
          </div>

          {/* Language Switch */}
          <div className="mt-8 text-center">
            <a 
              href="/en/privacy" 
              className="inline-flex items-center gap-2 text-forest-600 hover:text-forest-700 font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Read this page in English
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

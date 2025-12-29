"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Scale, FileCheck, AlertTriangle, Handshake, Ban, CreditCard, Package, MessageSquare, Calendar, ExternalLink, Gavel } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function TermsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(heroRef.current?.querySelectorAll(".hero-animate") || [], {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      const sections = sectionsRef.current?.querySelectorAll(".terms-section");
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
        className="relative pt-32 pb-16 px-6 bg-gradient-to-b from-carbon-900 via-carbon-800 to-carbon-900 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="hero-animate inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-carbon-200 text-sm mb-6">
            <Scale className="w-4 h-4" />
            <span>Dokumen Legal</span>
          </div>

          <h1 className="hero-animate text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">
            Syarat & Ketentuan
          </h1>

          <p className="hero-animate text-lg md:text-xl text-carbon-100/90 max-w-2xl mx-auto mb-8">
            Syarat dan ketentuan ini mengatur penggunaan website dan layanan Biosolution. 
            Mohon baca dengan seksama sebelum menggunakan layanan kami.
          </p>

          <div className="hero-animate flex items-center justify-center gap-2 text-carbon-200 text-sm">
            <Calendar className="w-4 h-4" />
            <span>Terakhir diperbarui: {lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={sectionsRef} className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Agreement */}
          <div className="terms-section bg-white rounded-2xl p-8 shadow-sm border border-forest-100 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-forest-100 rounded-xl text-forest-600">
                <FileCheck className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-playfair font-bold text-carbon-900 mb-2">1. Persetujuan Ketentuan</h2>
                <p className="text-carbon-600 leading-relaxed">
                  Dengan mengakses atau menggunakan website www.biosolution.tech (&quot;Website&quot;) dan layanan PT Centra Biotech Indonesia 
                  (&quot;Biosolution&quot;, &quot;kami&quot;, &quot;kita&quot;), Anda (&quot;Pengguna&quot;, &quot;Anda&quot;) menyetujui untuk terikat oleh Syarat & Ketentuan ini.
                </p>
              </div>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800">
                  <strong>Perhatian:</strong> Jika Anda tidak menyetujui syarat dan ketentuan ini, mohon untuk tidak menggunakan Website atau layanan kami. 
                  Penggunaan berkelanjutan setelah perubahan ketentuan dianggap sebagai persetujuan terhadap perubahan tersebut.
                </p>
              </div>
            </div>
          </div>

          {/* Services Description */}
          <div className="terms-section bg-white rounded-2xl p-8 shadow-sm border border-forest-100 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-microbe-100 rounded-xl text-microbe-600">
                <Package className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-playfair font-bold text-carbon-900 mb-2">2. Deskripsi Layanan</h2>
                <p className="text-carbon-600 leading-relaxed mb-4">
                  Biosolution menyediakan produk dan layanan bioteknologi pertanian, peternakan, dan perikanan, termasuk namun tidak terbatas pada:
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Produk Biosecurity Tanaman", desc: "Pupuk hayati, insektisida hayati, dan produk perlindungan tanaman" },
                { title: "Produk Kesehatan Hewan", desc: "Probiotik ternak, suplemen nutrisi, dan sanitasi peternakan" },
                { title: "Solusi Akuakultur", desc: "Produk untuk kesehatan ikan dan udang" },
                { title: "Layanan Maklon", desc: "Contract manufacturing untuk produk pertanian" },
                { title: "Konsultasi Teknis", desc: "Dukungan teknis dan aplikasi produk" },
                { title: "Household Solutions", desc: "Produk untuk rumah tangga dan lingkungan" },
              ].map((item, index) => (
                <div key={index} className="bg-soil-50 rounded-xl p-4 border border-soil-100">
                  <h4 className="font-semibold text-carbon-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-carbon-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* B2B Terms */}
          <div className="terms-section bg-white rounded-2xl p-8 shadow-sm border border-forest-100 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-moss-100 rounded-xl text-moss-600">
                <Handshake className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-playfair font-bold text-carbon-900 mb-2">3. Ketentuan Transaksi B2B</h2>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-carbon-900 mb-3">3.1. Pemesanan dan Kontrak</h3>
                <ul className="space-y-2 text-carbon-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-forest-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Semua pemesanan memerlukan Surat Pemesanan (PO) resmi dari perusahaan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-forest-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Minimum Order Quantity (MOQ) berlaku sesuai jenis produk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-forest-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Harga dapat berubah berdasarkan volume, frekuensi, dan durasi kontrak</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-forest-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Kontrak kerjasama jangka panjang tersedia untuk distributor dan reseller</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-carbon-900 mb-3">3.2. Kualifikasi Mitra Bisnis</h3>
                <ul className="space-y-2 text-carbon-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-microbe-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Mitra harus memiliki badan usaha yang sah (CV, PT, atau UD)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-microbe-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Dokumen legalitas usaha harus lengkap (SIUP, NIB, NPWP)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-microbe-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Kapasitas teknis untuk menangani dan menyimpan produk bioteknologi</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="terms-section bg-white rounded-2xl p-8 shadow-sm border border-forest-100 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-forest-100 rounded-xl text-forest-600">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-playfair font-bold text-carbon-900 mb-2">4. Syarat Pembayaran</h2>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-carbon-600">Ketentuan pembayaran untuk transaksi B2B:</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-soil-50 rounded-xl border border-soil-100">
                  <h4 className="font-semibold text-carbon-900 mb-2">Pembayaran Pertama</h4>
                  <p className="text-sm text-carbon-600">100% pembayaran di muka untuk pesanan pertama</p>
                </div>
                <div className="p-4 bg-soil-50 rounded-xl border border-soil-100">
                  <h4 className="font-semibold text-carbon-900 mb-2">Mitra Reguler</h4>
                  <p className="text-sm text-carbon-600">Syarat kredit 30 hari setelah evaluasi</p>
                </div>
              </div>

              <ul className="space-y-2 text-carbon-600 mt-4">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-forest-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Pembayaran melalui transfer bank ke rekening resmi perusahaan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-forest-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Faktur akan diterbitkan setelah konfirmasi pesanan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-forest-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Denda keterlambatan 2% per bulan untuk pembayaran yang melewati jatuh tempo</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Product Warranty */}
          <div className="terms-section bg-white rounded-2xl p-8 shadow-sm border border-forest-100 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-microbe-100 rounded-xl text-microbe-600">
                <FileCheck className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-playfair font-bold text-carbon-900 mb-2">5. Jaminan Produk</h2>
                <p className="text-carbon-600 leading-relaxed mb-4">
                  Semua produk Biosolution dijamin sesuai dengan spesifikasi yang tercantum pada label dan dokumentasi produk.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-forest-50 rounded-xl border border-forest-100">
                <h4 className="font-semibold text-forest-900 mb-2">Garansi yang Berlaku:</h4>
                <ul className="space-y-1 text-sm text-forest-700">
                  <li>• Produk sesuai dengan standar mutu yang ditetapkan</li>
                  <li>• Kemasan dalam kondisi baik saat pengiriman</li>
                  <li>• Masa kadaluarsa sesuai yang tercantum</li>
                </ul>
              </div>

              <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                <h4 className="font-semibold text-amber-900 mb-2">Pengecualian Garansi:</h4>
                <ul className="space-y-1 text-sm text-amber-800">
                  <li>• Kerusakan akibat penyimpanan yang tidak sesuai</li>
                  <li>• Penggunaan yang tidak sesuai petunjuk</li>
                  <li>• Modifikasi produk oleh pihak ketiga</li>
                  <li>• Force majeure (bencana alam, dll)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Prohibited Activities */}
          <div className="terms-section bg-white rounded-2xl p-8 shadow-sm border border-forest-100 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-red-100 rounded-xl text-red-600">
                <Ban className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-playfair font-bold text-carbon-900 mb-2">6. Aktivitas yang Dilarang</h2>
                <p className="text-carbon-600 leading-relaxed">
                  Pengguna dilarang melakukan aktivitas berikut:
                </p>
              </div>
            </div>

            <ul className="space-y-3 text-carbon-600">
              {[
                "Menggunakan Website untuk tujuan ilegal atau tidak sah",
                "Menyalin, memodifikasi, atau mendistribusikan konten tanpa izin",
                "Menjual kembali produk di bawah merek lain tanpa perjanjian maklon",
                "Memberikan informasi palsu dalam pemesanan atau pendaftaran",
                "Mengganggu keamanan atau integritas Website",
                "Melakukan tindakan yang merugikan reputasi Biosolution",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">✗</div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Intellectual Property */}
          <div className="terms-section bg-white rounded-2xl p-8 shadow-sm border border-forest-100 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-moss-100 rounded-xl text-moss-600">
                <Gavel className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-playfair font-bold text-carbon-900 mb-2">7. Hak Kekayaan Intelektual</h2>
                <p className="text-carbon-600 leading-relaxed">
                  Semua konten di Website termasuk teks, gambar, logo, merek dagang (FloraOne, BioKiller, BIOJAGAT, SIMBIOS, RAJABIO, MEGABIO), 
                  formula produk, dan materi lainnya adalah hak milik PT Centra Biotech Indonesia dan dilindungi oleh hukum hak cipta Indonesia.
                </p>
              </div>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="terms-section bg-white rounded-2xl p-8 shadow-sm border border-forest-100 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-forest-100 rounded-xl text-forest-600">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-playfair font-bold text-carbon-900 mb-2">8. Batasan Tanggung Jawab</h2>
                <p className="text-carbon-600 leading-relaxed">
                  Dalam batas maksimum yang diizinkan oleh hukum, Biosolution tidak bertanggung jawab atas kerugian tidak langsung, 
                  insidental, khusus, atau konsekuensial yang timbul dari penggunaan layanan atau produk kami.
                </p>
              </div>
            </div>
          </div>

          {/* Dispute Resolution */}
          <div className="terms-section bg-white rounded-2xl p-8 shadow-sm border border-forest-100 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-microbe-100 rounded-xl text-microbe-600">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-playfair font-bold text-carbon-900 mb-2">9. Penyelesaian Sengketa</h2>
              </div>
            </div>

            <div className="space-y-4 text-carbon-600">
              <p>
                Setiap sengketa yang timbul dari atau terkait dengan Syarat & Ketentuan ini akan diselesaikan melalui:
              </p>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-forest-500 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                  <div>
                    <strong>Musyawarah Mufakat</strong> - Tahap pertama penyelesaian secara damai antara para pihak
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-forest-500 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                  <div>
                    <strong>Mediasi</strong> - Jika musyawarah tidak berhasil dalam 30 hari
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-forest-500 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                  <div>
                    <strong>Pengadilan Negeri Malang</strong> - Sebagai pilihan yurisdiksi akhir
                  </div>
                </li>
              </ol>
            </div>
          </div>

          {/* Governing Law */}
          <div className="terms-section bg-gradient-to-br from-carbon-700 to-carbon-800 rounded-2xl p-8 text-white">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-playfair font-bold mb-2">10. Hukum yang Berlaku</h2>
                <p className="text-carbon-100 leading-relaxed">
                  Syarat & Ketentuan ini diatur dan ditafsirkan sesuai dengan hukum Republik Indonesia. 
                  Dengan menggunakan layanan kami, Anda tunduk pada yurisdiksi eksklusif pengadilan Indonesia.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-sm text-carbon-200">
                Untuk pertanyaan tentang Syarat & Ketentuan ini, hubungi:<br />
                <strong>Email:</strong> info@biosolution.tech | <strong>WhatsApp:</strong> +62 857-4224-9591
              </p>
            </div>
          </div>

          {/* Language Switch */}
          <div className="mt-8 text-center">
            <a 
              href="/en/terms" 
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

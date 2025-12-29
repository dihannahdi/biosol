"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Cookie, Settings, Shield, BarChart3, Target, Calendar, ExternalLink, Check, X, Info } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface CookiePreference {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export default function CookiesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);

  const [preferences, setPreferences] = useState<CookiePreference>({
    essential: true, // Always true, cannot be disabled
    analytics: true,
    marketing: false,
    functional: true,
  });

  const [saved, setSaved] = useState(false);

  useGSAP(
    () => {
      gsap.from(heroRef.current?.querySelectorAll(".hero-animate") || [], {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      const sections = sectionsRef.current?.querySelectorAll(".cookie-section");
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

  const handleToggle = (key: keyof CookiePreference) => {
    if (key === "essential") return; // Cannot disable essential cookies
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
    setSaved(false);
  };

  const handleSavePreferences = () => {
    // In a real implementation, this would save to localStorage/cookies
    console.log("Saving preferences:", preferences);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleAcceptAll = () => {
    setPreferences({
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleRejectNonEssential = () => {
    setPreferences({
      essential: true,
      analytics: false,
      marketing: false,
      functional: false,
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const lastUpdated = "15 Januari 2025";

  const cookieTypes = [
    {
      key: "essential" as const,
      icon: Shield,
      title: "Cookie Esensial",
      description: "Cookie ini diperlukan agar website berfungsi dengan baik. Tidak dapat dinonaktifkan.",
      examples: ["Session cookies", "Security tokens", "Load balancing"],
      required: true,
    },
    {
      key: "analytics" as const,
      icon: BarChart3,
      title: "Cookie Analitik",
      description: "Membantu kami memahami bagaimana pengunjung berinteraksi dengan website untuk meningkatkan pengalaman pengguna.",
      examples: ["Google Analytics", "Pengukuran performa", "Statistik pengunjung"],
      required: false,
    },
    {
      key: "functional" as const,
      icon: Settings,
      title: "Cookie Fungsional",
      description: "Mengingat preferensi Anda seperti bahasa, wilayah, dan pengaturan tampilan.",
      examples: ["Preferensi bahasa", "Pengaturan tema", "Formulir yang tersimpan"],
      required: false,
    },
    {
      key: "marketing" as const,
      icon: Target,
      title: "Cookie Pemasaran",
      description: "Digunakan untuk menampilkan iklan yang relevan dengan minat Anda di berbagai platform.",
      examples: ["Retargeting ads", "Social media pixels", "Conversion tracking"],
      required: false,
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-soil-50">
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-16 px-6 bg-gradient-to-b from-microbe-800 via-microbe-700 to-microbe-800 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="hero-animate inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-microbe-100 text-sm mb-6">
            <Cookie className="w-4 h-4" />
            <span>Pengaturan Privasi</span>
          </div>

          <h1 className="hero-animate text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">
            Kebijakan Cookies
          </h1>

          <p className="hero-animate text-lg md:text-xl text-microbe-100/90 max-w-2xl mx-auto mb-8">
            Kami menggunakan cookies untuk meningkatkan pengalaman Anda di website kami. 
            Pelajari lebih lanjut dan kelola preferensi Anda di sini.
          </p>

          <div className="hero-animate flex items-center justify-center gap-2 text-microbe-200 text-sm">
            <Calendar className="w-4 h-4" />
            <span>Terakhir diperbarui: {lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={sectionsRef} className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* What Are Cookies */}
          <div className="cookie-section bg-white rounded-2xl p-8 shadow-sm border border-forest-100 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-microbe-100 rounded-xl text-microbe-600">
                <Info className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-playfair font-bold text-carbon-900 mb-2">Apa itu Cookies?</h2>
                <p className="text-carbon-600 leading-relaxed">
                  Cookies adalah file teks kecil yang disimpan di perangkat Anda saat mengunjungi website. 
                  Cookies membantu website mengingat informasi tentang kunjungan Anda, seperti preferensi bahasa 
                  dan pengaturan lainnya. Ini membuat kunjungan berikutnya menjadi lebih mudah dan website lebih berguna bagi Anda.
                </p>
              </div>
            </div>
          </div>

          {/* Cookie Preferences */}
          <div className="cookie-section bg-white rounded-2xl p-8 shadow-sm border border-forest-100 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-playfair font-bold text-carbon-900">Pengaturan Cookie Anda</h2>
              {saved && (
                <div className="flex items-center gap-2 bg-forest-100 text-forest-700 px-4 py-2 rounded-full text-sm">
                  <Check className="w-4 h-4" />
                  Tersimpan!
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3 mb-8">
              <button
                onClick={handleAcceptAll}
                className="px-6 py-3 bg-forest-600 text-white rounded-xl font-medium hover:bg-forest-700 transition-colors"
              >
                Terima Semua
              </button>
              <button
                onClick={handleRejectNonEssential}
                className="px-6 py-3 bg-carbon-100 text-carbon-700 rounded-xl font-medium hover:bg-carbon-200 transition-colors"
              >
                Tolak Non-Esensial
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-6 py-3 border-2 border-forest-600 text-forest-600 rounded-xl font-medium hover:bg-forest-50 transition-colors"
              >
                Simpan Preferensi
              </button>
            </div>

            {/* Cookie Type Cards */}
            <div className="space-y-4">
              {cookieTypes.map((type) => {
                const Icon = type.icon;
                const isEnabled = preferences[type.key];
                
                return (
                  <div
                    key={type.key}
                    className={`p-6 rounded-xl border-2 transition-all ${
                      isEnabled
                        ? "border-forest-200 bg-forest-50/50"
                        : "border-carbon-200 bg-carbon-50/50"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${isEnabled ? "bg-forest-100 text-forest-600" : "bg-carbon-100 text-carbon-500"}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-carbon-900">{type.title}</h3>
                            {type.required && (
                              <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
                                Wajib
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-carbon-600 mb-3">{type.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {type.examples.map((example, i) => (
                              <span
                                key={i}
                                className="text-xs bg-white px-2 py-1 rounded-md border border-carbon-200 text-carbon-600"
                              >
                                {example}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Toggle Switch */}
                      <button
                        onClick={() => handleToggle(type.key)}
                        disabled={type.required}
                        className={`relative w-14 h-8 rounded-full transition-colors ${
                          type.required
                            ? "cursor-not-allowed opacity-50"
                            : "cursor-pointer"
                        } ${isEnabled ? "bg-forest-500" : "bg-carbon-300"}`}
                      >
                        <span
                          className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-sm transition-transform ${
                            isEnabled ? "left-7" : "left-1"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* How We Use Cookies */}
          <div className="cookie-section bg-white rounded-2xl p-8 shadow-sm border border-forest-100 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-forest-100 rounded-xl text-forest-600">
                <Cookie className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-playfair font-bold text-carbon-900 mb-2">Bagaimana Kami Menggunakan Cookies</h2>
              </div>
            </div>

            <div className="space-y-4 text-carbon-600">
              <p>Website Biosolution menggunakan cookies untuk berbagai tujuan:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-forest-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Keamanan:</strong> Melindungi akun dan data Anda</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-forest-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Preferensi:</strong> Mengingat pilihan bahasa dan pengaturan Anda</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-forest-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Analitik:</strong> Memahami bagaimana website digunakan untuk peningkatan</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-forest-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Performa:</strong> Memastikan website berjalan dengan lancar</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Managing Cookies */}
          <div className="cookie-section bg-white rounded-2xl p-8 shadow-sm border border-forest-100 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-moss-100 rounded-xl text-moss-600">
                <Settings className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-playfair font-bold text-carbon-900 mb-2">Mengelola Cookies di Browser</h2>
                <p className="text-carbon-600 leading-relaxed mb-4">
                  Selain pengaturan di halaman ini, Anda juga dapat mengontrol cookies melalui pengaturan browser Anda:
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { browser: "Google Chrome", url: "chrome://settings/cookies" },
                { browser: "Mozilla Firefox", url: "about:preferences#privacy" },
                { browser: "Safari", url: "Preferensi > Privasi" },
                { browser: "Microsoft Edge", url: "edge://settings/privacy" },
              ].map((item, index) => (
                <div key={index} className="p-4 bg-soil-50 rounded-xl border border-soil-100">
                  <h4 className="font-semibold text-carbon-900 mb-1">{item.browser}</h4>
                  <p className="text-sm text-carbon-600 font-mono">{item.url}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800">
                  <strong>Catatan:</strong> Menonaktifkan cookies tertentu dapat mempengaruhi fungsionalitas website. 
                  Beberapa fitur mungkin tidak berfungsi dengan baik tanpa cookies yang diperlukan.
                </p>
              </div>
            </div>
          </div>

          {/* Third-Party Cookies */}
          <div className="cookie-section bg-white rounded-2xl p-8 shadow-sm border border-forest-100 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-microbe-100 rounded-xl text-microbe-600">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-playfair font-bold text-carbon-900 mb-2">Cookies Pihak Ketiga</h2>
                <p className="text-carbon-600 leading-relaxed">
                  Kami mungkin menggunakan layanan pihak ketiga yang menetapkan cookies mereka sendiri:
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { name: "Google Analytics", purpose: "Analisis pengunjung dan perilaku pengguna", policy: "https://policies.google.com/privacy" },
                { name: "WhatsApp Business", purpose: "Tombol chat dan integrasi pesan", policy: "https://www.whatsapp.com/legal/privacy-policy" },
              ].map((service, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-soil-50 rounded-xl border border-soil-100">
                  <div>
                    <h4 className="font-semibold text-carbon-900">{service.name}</h4>
                    <p className="text-sm text-carbon-600">{service.purpose}</p>
                  </div>
                  <a
                    href={service.policy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-forest-600 hover:text-forest-700 text-sm font-medium"
                  >
                    Kebijakan Privasi →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="cookie-section bg-gradient-to-br from-microbe-600 to-microbe-700 rounded-2xl p-8 text-white">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                <Cookie className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-playfair font-bold mb-2">Pertanyaan tentang Cookies?</h2>
                <p className="text-microbe-100 leading-relaxed">
                  Jika Anda memiliki pertanyaan tentang penggunaan cookies di website kami, silakan hubungi tim privasi kami.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <p className="text-sm text-microbe-200 mb-1">Email</p>
                <a href="mailto:info@biosolution.tech" className="text-white font-semibold hover:text-microbe-100">
                  info@biosolution.tech
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <p className="text-sm text-microbe-200 mb-1">Kebijakan Privasi Lengkap</p>
                <a href="/privacy" className="text-white font-semibold hover:text-microbe-100">
                  Lihat Kebijakan Privasi →
                </a>
              </div>
            </div>
          </div>

          {/* Language Switch */}
          <div className="mt-8 text-center">
            <a 
              href="/en/cookies" 
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

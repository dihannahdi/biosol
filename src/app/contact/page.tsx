"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { GSAPProvider } from "@/lib/gsap-provider";
import { Header, Footer } from "@/components/layout";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Building2,
  User,
  Briefcase,
  ChevronDown,
  Check,
} from "lucide-react";

const industries = [
  { value: "plant", label: "Biosekuriti Tanaman" },
  { value: "animal", label: "Kesehatan Hewan" },
  { value: "agriculture", label: "Pertanian Umum" },
  { value: "aquaculture", label: "Akuakultur" },
  { value: "other", label: "Lainnya" },
];

const inquiryTypes = [
  { value: "product", label: "Informasi Produk" },
  { value: "partnership", label: "Kemitraan Bisnis" },
  { value: "distribution", label: "Distribusi" },
  { value: "research", label: "Riset & Kolaborasi" },
  { value: "support", label: "Dukungan Teknis" },
];

export default function ContactPage() {
  const heroRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useGSAP(
    () => {
      gsap.fromTo(
        ".contact-hero-content > *",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Build WhatsApp message from form data
    const industryLabel = industries.find(i => i.value === formState.industry)?.label || formState.industry;
    const inquiryLabel = inquiryTypes.find(t => t.value === formState.inquiryType)?.label || formState.inquiryType;
    
    const message = `Halo Biosolution,

*Pesan Baru dari Website*

*Nama:* ${formState.name}
*Email:* ${formState.email}
*Telepon:* ${formState.phone}
*Perusahaan:* ${formState.company || "Tidak disebutkan"}
*Industri:* ${industryLabel}
*Jenis Pertanyaan:* ${inquiryLabel}

*Pesan:*
${formState.message}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6285742249591?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <GSAPProvider>
      <Header />

      <main>
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-b from-forest-50 to-white overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-microbe-200/30 rounded-full blur-[100px]" />
          </div>

          <div className="relative container-wide">
            <div className="contact-hero-content text-center max-w-3xl mx-auto px-2">
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-forest-100 border border-forest-200 rounded-full text-xs sm:text-sm font-medium text-forest-700 mb-4 sm:mb-6">
                <Phone className="w-4 h-4" />
                Hubungi Kami
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-carbon-900 mb-4 sm:mb-6">
                Konsultasi{" "}
                <span className="bg-gradient-to-r from-forest-600 to-microbe-500 bg-clip-text text-transparent">
                  Gratis
                </span>{" "}
                dengan Ahli Bioteknologi
              </h1>
              <p className="text-base sm:text-lg text-carbon-600 mb-4">
                14 tahun pengalaman, 19 provinsi terjangkau, 1000+ mitra puas. Tim kami siap membantu menemukan solusi tepat untuk tantangan pertanian dan peternakan Anda.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-carbon-500">
                <span className="flex items-center gap-2"><span className="w-2 h-2 bg-forest-500 rounded-full"></span>Respon dalam 24 jam</span>
                <span className="flex items-center gap-2"><span className="w-2 h-2 bg-forest-500 rounded-full"></span>Konsultasi gratis</span>
                <span className="flex items-center gap-2"><span className="w-2 h-2 bg-forest-500 rounded-full"></span>Garansi kepuasan</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-16">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                <div>
                  <h2 className="text-2xl font-display font-bold text-carbon-900 mb-6">
                    Informasi Kontak
                  </h2>
                  <div className="space-y-6">
                    <a
                      href="https://maps.google.com/?q=Sawahan+RT+02+RW+07+Pasungan+Ceper+Klaten"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-forest-200 transition-colors">
                        <MapPin className="w-5 h-5 text-forest-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-carbon-900 mb-1">Alamat Kantor</h3>
                        <p className="text-carbon-600 text-sm">
                          Sawahan RT 02 RW 07 Pasungan, Ceper<br />
                          Klaten, Jawa Tengah 57465<br />
                          Indonesia
                        </p>
                      </div>
                    </a>

                    <a
                      href="tel:+6285742249591"
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-forest-200 transition-colors">
                        <Phone className="w-5 h-5 text-forest-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-carbon-900 mb-1">Telepon</h3>
                        <p className="text-carbon-600 text-sm">+62 857-4224-9591</p>
                      </div>
                    </a>

                    <a
                      href="mailto:info@biosolution.tech"
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-forest-200 transition-colors">
                        <Mail className="w-5 h-5 text-forest-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-carbon-900 mb-1">Email</h3>
                        <p className="text-carbon-600 text-sm">info@biosolution.tech</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-forest-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-carbon-900 mb-1">Jam Operasional</h3>
                        <p className="text-carbon-600 text-sm">
                          Senin - Jumat: 08:00 - 17:00 WIB<br />
                          Sabtu: 08:00 - 12:00 WIB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/6285742249591?text=Halo,%20saya%20ingin%20konsultasi%20tentang%20produk%20bioteknologi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl text-white hover:shadow-lg hover:shadow-green-500/20 transition-all group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Chat via WhatsApp</h3>
                    <p className="text-white/80 text-sm">Respon cepat untuk pertanyaan Anda</p>
                  </div>
                  <Send className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-gradient-to-br from-forest-50 to-white border border-forest-100 rounded-3xl p-8 lg:p-10">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check className="w-10 h-10 text-forest-600" />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-carbon-900 mb-3">
                        Pesan Terkirim!
                      </h3>
                      <p className="text-carbon-600 mb-6">
                        Terima kasih telah menghubungi kami. Tim kami akan segera merespons dalam 1-2 hari kerja.
                      </p>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormState({
                            name: "",
                            email: "",
                            phone: "",
                            company: "",
                            industry: "",
                            inquiryType: "",
                            message: "",
                          });
                        }}
                        className="btn-secondary"
                      >
                        Kirim Pesan Lain
                      </button>
                    </motion.div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-display font-bold text-carbon-900 mb-2">
                        Kirim Pesan
                      </h2>
                      <p className="text-carbon-600 mb-8">
                        Isi formulir di bawah dan tim kami akan menghubungi Anda segera.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                          {/* Name */}
                          <div>
                            <label className="block text-sm font-medium text-carbon-700 mb-2">
                              Nama Lengkap *
                            </label>
                            <div className="relative">
                              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-carbon-400" />
                              <input
                                type="text"
                                name="name"
                                value={formState.name}
                                onChange={handleChange}
                                required
                                placeholder="John Doe"
                                className="w-full pl-12 pr-4 py-3 bg-white border border-carbon-200 rounded-xl focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 transition-all"
                              />
                            </div>
                          </div>

                          {/* Email */}
                          <div>
                            <label className="block text-sm font-medium text-carbon-700 mb-2">
                              Email *
                            </label>
                            <div className="relative">
                              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-carbon-400" />
                              <input
                                type="email"
                                name="email"
                                value={formState.email}
                                onChange={handleChange}
                                required
                                placeholder="john@company.com"
                                className="w-full pl-12 pr-4 py-3 bg-white border border-carbon-200 rounded-xl focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 transition-all"
                              />
                            </div>
                          </div>

                          {/* Phone */}
                          <div>
                            <label className="block text-sm font-medium text-carbon-700 mb-2">
                              No. Telepon *
                            </label>
                            <div className="relative">
                              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-carbon-400" />
                              <input
                                type="tel"
                                name="phone"
                                value={formState.phone}
                                onChange={handleChange}
                                required
                                placeholder="+62 812 3456 7890"
                                className="w-full pl-12 pr-4 py-3 bg-white border border-carbon-200 rounded-xl focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 transition-all"
                              />
                            </div>
                          </div>

                          {/* Company */}
                          <div>
                            <label className="block text-sm font-medium text-carbon-700 mb-2">
                              Perusahaan
                            </label>
                            <div className="relative">
                              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-carbon-400" />
                              <input
                                type="text"
                                name="company"
                                value={formState.company}
                                onChange={handleChange}
                                placeholder="PT Company Indonesia"
                                className="w-full pl-12 pr-4 py-3 bg-white border border-carbon-200 rounded-xl focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 transition-all"
                              />
                            </div>
                          </div>

                          {/* Industry */}
                          <div>
                            <label className="block text-sm font-medium text-carbon-700 mb-2">
                              Industri *
                            </label>
                            <div className="relative">
                              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-carbon-400" />
                              <select
                                name="industry"
                                value={formState.industry}
                                onChange={handleChange}
                                required
                                className="w-full pl-12 pr-10 py-3 bg-white border border-carbon-200 rounded-xl focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 transition-all appearance-none"
                              >
                                <option value="">Pilih Industri</option>
                                {industries.map((ind) => (
                                  <option key={ind.value} value={ind.value}>
                                    {ind.label}
                                  </option>
                                ))}
                              </select>
                              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-carbon-400 pointer-events-none" />
                            </div>
                          </div>

                          {/* Inquiry Type */}
                          <div>
                            <label className="block text-sm font-medium text-carbon-700 mb-2">
                              Jenis Pertanyaan *
                            </label>
                            <div className="relative">
                              <select
                                name="inquiryType"
                                value={formState.inquiryType}
                                onChange={handleChange}
                                required
                                className="w-full pl-4 pr-10 py-3 bg-white border border-carbon-200 rounded-xl focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 transition-all appearance-none"
                              >
                                <option value="">Pilih Jenis</option>
                                {inquiryTypes.map((type) => (
                                  <option key={type.value} value={type.value}>
                                    {type.label}
                                  </option>
                                ))}
                              </select>
                              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-carbon-400 pointer-events-none" />
                            </div>
                          </div>
                        </div>

                        {/* Message */}
                        <div>
                          <label className="block text-sm font-medium text-carbon-700 mb-2">
                            Pesan *
                          </label>
                          <textarea
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            placeholder="Ceritakan kebutuhan Anda..."
                            className="w-full px-4 py-3 bg-white border border-carbon-200 rounded-xl focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 transition-all resize-none"
                          />
                        </div>

                        {/* Submit */}
                        <div className="space-y-3">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? (
                              <>
                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Mengirim...
                              </>
                            ) : (
                              <>
                                <MessageCircle className="w-5 h-5" />
                                Kirim via WhatsApp
                              </>
                            )}
                          </button>
                          <p className="text-xs text-carbon-500 text-center">
                            Klik tombol di atas akan membuka WhatsApp untuk mengirim pesan langsung ke tim kami
                          </p>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-[400px] bg-carbon-100 relative" aria-label="Lokasi Kantor">
          <iframe
            title="Peta Lokasi Kantor PT Biosolution Indo Nusantara di Ceper, Klaten, Jawa Tengah"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.8761961397!2d110.69388251477735!3d-7.700861994436499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a3f8c8a05e3e5%3A0x4e1f9c0c4f0a0e0c!2sCeper%2C%20Klaten%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1634567890123!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
        </section>
      </main>

      <Footer />
    </GSAPProvider>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  ArrowUpRight,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { BioLogo } from "@/components/ui/bio-logo";

const footerLinks = {
  company: [
    { name: "Tentang Kami", href: "/about" },
    { name: "Riset", href: "/research" },
    { name: "Berita", href: "/news" },
    { name: "Kontak", href: "/contact" },
  ],
  solutions: [
    { name: "Biosekuriti Tanaman", href: "/solutions/plant" },
    { name: "Kesehatan Hewan", href: "/solutions/animal" },
    { name: "Semua Produk", href: "/solutions" },
  ],
  resources: [
    { name: "Konsultasi Pertanian", href: "https://www.doktertani.co.id/", external: true },
    { name: "Jadi Mitra Bisnis", href: "/contact" },
    { name: "English Version", href: "/en" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/pt-centra-biotech-indonesia/" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/centrabiotech_id/" },
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/centrabiotech/?locale=id_ID" },
  { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@centrabiotechindonesiachan3312" },
];

const certifications = [
  "Kementerian Pertanian RI",
  "Sertifikat Organik Indonesia",
  "KAN Accredited",
  "TKDN",
  "IAF",
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");
    
    if (!email.trim()) {
      setEmailError("Email wajib diisi");
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError("Format email tidak valid");
      return;
    }

    setNewsletterStatus("loading");
    
    // Simulate API call - in production, replace with actual newsletter subscription
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // For now, open WhatsApp with subscription request
    const message = `Halo Biosolution, saya ingin berlangganan newsletter dengan email: ${email}`;
    window.open(`https://wa.me/6285742249591?text=${encodeURIComponent(message)}`, "_blank");
    
    setNewsletterStatus("success");
    setEmail("");
    
    // Reset status after 5 seconds
    setTimeout(() => setNewsletterStatus("idle"), 5000);
  };

  return (
    <footer className="relative bg-carbon-950 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-forest-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-microbe-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Newsletter Section */}
      <div className="relative border-b border-white/10">
        <div className="container-wide py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
            <div className="max-w-xl">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold mb-3">
                Dapatkan Insight Bioteknologi Terkini
              </h3>
              <p className="text-sm sm:text-base text-carbon-400">
                Berlangganan newsletter kami untuk mendapatkan riset terbaru, studi kasus, dan inovasi di bidang bioteknologi pertanian.
              </p>
            </div>
            <div className="w-full lg:w-auto">
              <form onSubmit={handleNewsletterSubmit} className="flex gap-3 flex-col sm:flex-row">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError("");
                    }}
                    placeholder="Email bisnis Anda"
                    aria-label="Email untuk newsletter"
                    aria-invalid={!!emailError}
                    aria-describedby={emailError ? "email-error" : undefined}
                    className={`w-full px-5 sm:px-6 py-3.5 sm:py-4 bg-white/5 border rounded-full text-white placeholder:text-carbon-400 focus:outline-none focus:ring-2 focus:ring-forest-500/20 transition-all min-w-0 sm:min-w-[280px] text-base ${
                      emailError 
                        ? "border-red-500 focus:border-red-500" 
                        : "border-white/10 focus:border-forest-500"
                    }`}
                    disabled={newsletterStatus === "loading" || newsletterStatus === "success"}
                  />
                  {emailError && (
                    <p id="email-error" className="absolute -bottom-6 left-4 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {emailError}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={newsletterStatus === "loading" || newsletterStatus === "success"}
                  className="btn-primary bg-forest-500 hover:bg-forest-400 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap px-6 py-3.5 sm:py-4 flex items-center justify-center gap-2"
                >
                  {newsletterStatus === "loading" && (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  )}
                  {newsletterStatus === "success" && (
                    <CheckCircle2 className="w-4 h-4" />
                  )}
                  {newsletterStatus === "success" ? "Terkirim!" : "Berlangganan"}
                </button>
              </form>
              {newsletterStatus === "success" && (
                <p className="mt-3 text-sm text-forest-400 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" />
                  Terima kasih! Kami akan menghubungi Anda via WhatsApp.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative container-wide py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <BioLogo size={48} />
              <div>
                <span className="block font-display text-xl font-bold">
                  Biosolution
                </span>
                <span className="block text-xs text-carbon-500 tracking-wider uppercase">
                  Biotechnology Partner
                </span>
              </div>
            </Link>
            <p className="text-carbon-400 mb-6 max-w-sm">
              Menghadirkan kekuatan alam ke pertanian modern melalui inovasi bioteknologi yang berkelanjutan dan ramah lingkungan. Melayani 19 provinsi di Indonesia sejak 2010.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <a
                href="https://maps.app.goo.gl/jrzvpmv3gxQXVSST7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-carbon-400 hover:text-white transition-colors group"
              >
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span className="text-sm">
                  Sawahan RT 02 RW 07 Pasungan, Ceper, Klaten<br />
                  Jawa Tengah, Indonesia 57465
                </span>
              </a>
              <a
                href="tel:+6285742249591"
                className="flex items-center gap-3 text-carbon-400 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm">+62 857-4224-9591</span>
              </a>
              <a
                href="mailto:info@biosolution.tech"
                className="flex items-center gap-3 text-carbon-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">info@biosolution.tech</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-carbon-400 hover:bg-forest-500 hover:border-forest-500 hover:text-white transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-white">Perusahaan</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-carbon-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-white">Solusi</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-carbon-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-white">Sumber Daya</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  {'external' in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-carbon-400 hover:text-white transition-colors flex items-center gap-1"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-carbon-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="text-sm text-carbon-500">Tersertifikasi oleh:</span>
            {certifications.map((cert) => (
              <span
                key={cert}
                className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-carbon-400"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-carbon-500">
              © {currentYear} PT Centra Biotech Indonesia. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://doktertani.co.id" target="_blank" rel="noopener noreferrer" className="text-sm text-carbon-500 hover:text-white transition-colors flex items-center gap-1">
                Dokter Tani <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react";
import { BioLogo } from "@/components/ui/bio-logo";

const footerLinks = {
  solutions: [
    { name: "Plant Biosecurity", href: "/en/solutions/plant" },
    { name: "Animal Health", href: "/en/solutions/animal" },
    { name: "Our Products", href: "/en/solutions" },
  ],
  company: [
    { name: "About Us", href: "/en/about" },
    { name: "Research", href: "/en/research" },
    { name: "News", href: "/en/news" },
    { name: "Contact", href: "/en/contact" },
  ],
  resources: [
    { name: "Agricultural Consulting", href: "https://www.doktertani.co.id/", external: true },
    { name: "Partner With Us", href: "/en/contact" },
    { name: "Bahasa Indonesia", href: "/" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/centrabiotech/?locale=id_ID" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/centrabiotech_id/" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/pt-centra-biotech-indonesia/" },
  { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@centrabiotechindonesiachan3312" },
];

export function FooterEN() {
  return (
    <footer className="bg-carbon-950 text-white">
      {/* Main Footer */}
      <div className="container-wide py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/en" className="flex items-center gap-2 mb-6">
              <BioLogo size={40} />
              <div>
                <span className="font-display font-bold text-lg block leading-none text-white">
                  Biosolution
                </span>
                <span className="text-xs text-forest-400">Biotechnology Partner</span>
              </div>
            </Link>
            <p className="text-carbon-400 mb-6 max-w-sm">
              Agricultural biotechnology company developing research-backed microbial solutions 
              for sustainable farming. Serving 19 provinces since 2010.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-forest-500 transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-carbon-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-5 grid sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display font-semibold text-white mb-4">Solutions</h3>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-carbon-400 hover:text-forest-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-carbon-400 hover:text-forest-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-carbon-400 hover:text-forest-400 transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-carbon-400 hover:text-forest-400 transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-forest-400 shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/jrzvpmv3gxQXVSST7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-carbon-400 hover:text-forest-400 transition-colors"
                >
                  Sawahan RT 02 RW 07, Pasungan, Ceper, Klaten, Central Java 57465
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-forest-400 shrink-0" />
                <a
                  href="tel:+6285742249591"
                  className="text-sm text-carbon-400 hover:text-forest-400 transition-colors"
                >
                  +62 857-4224-9591
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-forest-400 shrink-0" />
                <a
                  href="mailto:info@biosolution.tech"
                  className="text-sm text-carbon-400 hover:text-forest-400 transition-colors"
                >
                  info@biosolution.tech
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <Link
                href="/en/contact"
                className="inline-flex items-center gap-2 text-forest-400 hover:text-forest-300 transition-colors text-sm font-medium"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-carbon-500">
              &copy; {new Date().getFullYear()} PT Centra Biotech Indonesia. All rights reserved.
            </p>
            <p className="text-sm text-carbon-500">
              Registered: AHU-20782.AH.01.01.Tahun 2010
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

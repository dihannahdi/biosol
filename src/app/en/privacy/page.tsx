"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeaderEN as Header, FooterEN as Footer } from "@/components/layout/en";
import { Shield, Lock, Eye, Database, UserCheck, Bell, Mail, FileText, Calendar, ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function PrivacyPageEN() {
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

  const lastUpdated = "January 15, 2025";

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
            <span>Legal Document</span>
          </div>

          <h1 className="hero-animate text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">
            Privacy Policy
          </h1>

          <p className="hero-animate text-lg md:text-xl text-forest-100/90 max-w-2xl mx-auto mb-8">
            We are committed to protecting your privacy and data security. 
            This document explains how we collect, use, and protect your information.
          </p>

          <div className="hero-animate flex items-center justify-center gap-2 text-forest-200 text-sm">
            <Calendar className="w-4 h-4" />
            <span>Last updated: {lastUpdated}</span>
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
                <h2 className="text-2xl font-playfair font-bold text-carbon-900 mb-2">Introduction</h2>
                <p className="text-carbon-600 leading-relaxed">
                  PT Centra Biotech Indonesia (&quot;Biosolution&quot;, &quot;we&quot;, &quot;us&quot;) values your trust in providing us with your personal information. 
                  This Privacy Policy explains our practices regarding the collection, use, disclosure, and protection of your information 
                  when you use our website at www.biosolution.tech and related services.
                </p>
              </div>
            </div>
            <div className="bg-forest-50 rounded-xl p-4 border border-forest-100">
              <p className="text-sm text-forest-700">
                <strong>Important Notice:</strong> By accessing or using our services, you agree to the practices described in this Privacy Policy. 
                If you do not agree with this policy, please do not use our services.
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
                <h2 className="text-2xl font-playfair font-bold text-carbon-900 mb-2">Information We Collect</h2>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-carbon-900 mb-3">1. Information You Provide Directly</h3>
                <ul className="space-y-2 text-carbon-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-forest-500 rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Identity Data:</strong> Full name, job title, company name</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-forest-500 rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Contact Data:</strong> Email address, phone number, business address</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-forest-500 rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Business Data:</strong> Information about your agricultural, livestock, or aquaculture needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-forest-500 rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Communications:</strong> Messages you send through contact forms or email</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-carbon-900 mb-3">2. Information Collected Automatically</h3>
                <ul className="space-y-2 text-carbon-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-microbe-500 rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Device Data:</strong> Browser type, operating system, device identifiers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-microbe-500 rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Log Data:</strong> IP address, access times, pages visited</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-microbe-500 rounded-full mt-2 flex-shrink-0" />
                    <span><strong>Cookies and Similar Technologies:</strong> To enhance user experience</span>
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
                <h2 className="text-2xl font-playfair font-bold text-carbon-900 mb-2">How We Use Your Information</h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Customer Service", desc: "Responding to inquiries and providing technical support" },
                { title: "Order Fulfillment", desc: "Processing and delivering products you order" },
                { title: "Business Communications", desc: "Sending information about new products and special offers" },
                { title: "Service Improvement", desc: "Analyzing usage to improve our website and products" },
                { title: "Legal Compliance", desc: "Fulfilling legal obligations and applicable regulations" },
                { title: "Security", desc: "Protecting against fraud and unauthorized activities" },
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
                <h2 className="text-2xl font-playfair font-bold text-carbon-900 mb-2">Data Protection</h2>
                <p className="text-carbon-600 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal data:
                </p>
              </div>
            </div>

            <ul className="space-y-3 text-carbon-600">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-forest-500 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">✓</div>
                <span>SSL/TLS encryption for all data transmissions</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-forest-500 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">✓</div>
                <span>Restricted access only to authorized personnel</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-forest-500 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">✓</div>
                <span>Secure data storage with regular backups</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-forest-500 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">✓</div>
                <span>Data security training for all employees</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-forest-500 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">✓</div>
                <span>Regular security audits</span>
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
                <h2 className="text-2xl font-playfair font-bold text-carbon-900 mb-2">Your Rights</h2>
                <p className="text-carbon-600 leading-relaxed mb-4">
                  In accordance with Indonesia&apos;s Personal Data Protection Law (Law No. 27 of 2022), you have the following rights:
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { title: "Right to Access", desc: "Request a copy of the personal data we hold about you" },
                { title: "Right to Rectification", desc: "Request correction of inaccurate or incomplete data" },
                { title: "Right to Erasure", desc: "Request deletion of personal data under certain conditions" },
                { title: "Right to Restriction", desc: "Request restriction of processing of your data" },
                { title: "Right to Portability", desc: "Request transfer of data to third parties" },
                { title: "Right to Object", desc: "Object to processing of data for direct marketing purposes" },
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
                <h2 className="text-2xl font-playfair font-bold text-carbon-900 mb-2">Cookies and Tracking</h2>
                <p className="text-carbon-600 leading-relaxed">
                  Our website uses cookies to enhance user experience. For more information about cookie usage, 
                  please see our <a href="/en/cookies" className="text-forest-600 hover:text-forest-700 underline">Cookie Policy</a>.
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
                <h2 className="text-2xl font-playfair font-bold text-carbon-900 mb-2">Data Retention</h2>
                <p className="text-carbon-600 leading-relaxed">
                  We retain your personal data for as long as necessary for the purposes described in this policy, 
                  or as required by law. Retention periods may vary depending on the context of our services and our legal obligations.
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
                <h2 className="text-2xl font-playfair font-bold mb-2">Contact Us</h2>
                <p className="text-forest-100 leading-relaxed">
                  If you have questions about this Privacy Policy or want to exercise your rights, please contact us:
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
                Jl. Raya Lowokwaru No. 100, Malang, East Java, Indonesia
              </p>
            </div>
          </div>

          {/* Language Switch */}
          <div className="mt-8 text-center">
            <a 
              href="/privacy" 
              className="inline-flex items-center gap-2 text-forest-600 hover:text-forest-700 font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Baca halaman ini dalam Bahasa Indonesia
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

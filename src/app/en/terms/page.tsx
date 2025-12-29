"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeaderEN as Header, FooterEN as Footer } from "@/components/layout/en";
import { Scale, FileCheck, AlertTriangle, Handshake, Ban, CreditCard, Package, MessageSquare, Calendar, ExternalLink, Gavel } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function TermsPageEN() {
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

  const lastUpdated = "January 15, 2025";

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
            <span>Legal Document</span>
          </div>

          <h1 className="hero-animate text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">
            Terms & Conditions
          </h1>

          <p className="hero-animate text-lg md:text-xl text-carbon-100/90 max-w-2xl mx-auto mb-8">
            These terms and conditions govern your use of the Biosolution website and services. 
            Please read carefully before using our services.
          </p>

          <div className="hero-animate flex items-center justify-center gap-2 text-carbon-200 text-sm">
            <Calendar className="w-4 h-4" />
            <span>Last updated: {lastUpdated}</span>
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
                <h2 className="text-2xl font-playfair font-bold text-carbon-900 mb-2">1. Agreement to Terms</h2>
                <p className="text-carbon-600 leading-relaxed">
                  By accessing or using the website www.biosolution.tech (&quot;Website&quot;) and services of PT Centra Biotech Indonesia 
                  (&quot;Biosolution&quot;, &quot;we&quot;, &quot;us&quot;), you (&quot;User&quot;, &quot;you&quot;) agree to be bound by these Terms & Conditions.
                </p>
              </div>
            </div>
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800">
                  <strong>Notice:</strong> If you do not agree to these terms and conditions, please do not use the Website or our services. 
                  Continued use after changes to terms constitutes acceptance of those changes.
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
                <h2 className="text-2xl font-playfair font-bold text-carbon-900 mb-2">2. Description of Services</h2>
                <p className="text-carbon-600 leading-relaxed mb-4">
                  Biosolution provides biotechnology products and services for agriculture, livestock, and aquaculture, including but not limited to:
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "Plant Biosecurity Products", desc: "Bio-fertilizers, bio-insecticides, and plant protection products" },
                { title: "Animal Health Products", desc: "Livestock probiotics, nutritional supplements, and farm sanitation" },
                { title: "Aquaculture Solutions", desc: "Products for fish and shrimp health" },
                { title: "Contract Manufacturing", desc: "White-label and private label manufacturing services" },
                { title: "Technical Consulting", desc: "Technical support and product application guidance" },
                { title: "Household Solutions", desc: "Products for household and environmental use" },
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
                <h2 className="text-2xl font-playfair font-bold text-carbon-900 mb-2">3. B2B Transaction Terms</h2>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-carbon-900 mb-3">3.1. Ordering and Contracts</h3>
                <ul className="space-y-2 text-carbon-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-forest-500 rounded-full mt-2 flex-shrink-0" />
                    <span>All orders require an official Purchase Order (PO) from the company</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-forest-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Minimum Order Quantity (MOQ) applies based on product type</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-forest-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Pricing may vary based on volume, frequency, and contract duration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-forest-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Long-term partnership agreements available for distributors and resellers</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-carbon-900 mb-3">3.2. Business Partner Qualifications</h3>
                <ul className="space-y-2 text-carbon-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-microbe-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Partners must have a legitimate business entity (LLC, Corporation, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-microbe-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Complete business legality documents required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-microbe-500 rounded-full mt-2 flex-shrink-0" />
                    <span>Technical capacity to handle and store biotechnology products</span>
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
                <h2 className="text-2xl font-playfair font-bold text-carbon-900 mb-2">4. Payment Terms</h2>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-carbon-600">Payment terms for B2B transactions:</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-soil-50 rounded-xl border border-soil-100">
                  <h4 className="font-semibold text-carbon-900 mb-2">First Order</h4>
                  <p className="text-sm text-carbon-600">100% upfront payment for initial orders</p>
                </div>
                <div className="p-4 bg-soil-50 rounded-xl border border-soil-100">
                  <h4 className="font-semibold text-carbon-900 mb-2">Regular Partners</h4>
                  <p className="text-sm text-carbon-600">Net 30 credit terms after evaluation</p>
                </div>
              </div>

              <ul className="space-y-2 text-carbon-600 mt-4">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-forest-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Payment via bank transfer to official company accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-forest-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Invoices issued upon order confirmation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-forest-500 rounded-full mt-2 flex-shrink-0" />
                  <span>Late payment penalty of 2% per month for overdue payments</span>
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
                <h2 className="text-2xl font-playfair font-bold text-carbon-900 mb-2">5. Product Warranty</h2>
                <p className="text-carbon-600 leading-relaxed mb-4">
                  All Biosolution products are warranted to conform to the specifications stated on the label and product documentation.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-forest-50 rounded-xl border border-forest-100">
                <h4 className="font-semibold text-forest-900 mb-2">Warranty Coverage:</h4>
                <ul className="space-y-1 text-sm text-forest-700">
                  <li>• Products meet established quality standards</li>
                  <li>• Packaging in good condition upon delivery</li>
                  <li>• Expiration dates as indicated</li>
                </ul>
              </div>

              <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                <h4 className="font-semibold text-amber-900 mb-2">Warranty Exclusions:</h4>
                <ul className="space-y-1 text-sm text-amber-800">
                  <li>• Damage due to improper storage</li>
                  <li>• Use not in accordance with instructions</li>
                  <li>• Product modification by third parties</li>
                  <li>• Force majeure (natural disasters, etc.)</li>
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
                <h2 className="text-2xl font-playfair font-bold text-carbon-900 mb-2">6. Prohibited Activities</h2>
                <p className="text-carbon-600 leading-relaxed">
                  Users are prohibited from the following activities:
                </p>
              </div>
            </div>

            <ul className="space-y-3 text-carbon-600">
              {[
                "Using the Website for illegal or unauthorized purposes",
                "Copying, modifying, or distributing content without permission",
                "Reselling products under another brand without manufacturing agreement",
                "Providing false information in orders or registration",
                "Disrupting the security or integrity of the Website",
                "Actions that harm Biosolution's reputation",
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
                <h2 className="text-2xl font-playfair font-bold text-carbon-900 mb-2">7. Intellectual Property</h2>
                <p className="text-carbon-600 leading-relaxed">
                  All content on the Website including text, images, logos, trademarks (FloraOne, BioKiller, BIOJAGAT, SIMBIOS, RAJABIO, MEGABIO), 
                  product formulas, and other materials are the property of PT Centra Biotech Indonesia and are protected by Indonesian copyright law.
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
                <h2 className="text-2xl font-playfair font-bold text-carbon-900 mb-2">8. Limitation of Liability</h2>
                <p className="text-carbon-600 leading-relaxed">
                  To the maximum extent permitted by law, Biosolution is not liable for indirect, incidental, 
                  special, or consequential damages arising from the use of our services or products.
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
                <h2 className="text-2xl font-playfair font-bold text-carbon-900 mb-2">9. Dispute Resolution</h2>
              </div>
            </div>

            <div className="space-y-4 text-carbon-600">
              <p>
                Any dispute arising from or related to these Terms & Conditions shall be resolved through:
              </p>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-forest-500 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                  <div>
                    <strong>Amicable Settlement</strong> - First stage peaceful resolution between parties
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-forest-500 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                  <div>
                    <strong>Mediation</strong> - If settlement fails within 30 days
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-forest-500 text-white rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                  <div>
                    <strong>Malang District Court</strong> - As final jurisdiction choice
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
                <h2 className="text-2xl font-playfair font-bold mb-2">10. Governing Law</h2>
                <p className="text-carbon-100 leading-relaxed">
                  These Terms & Conditions are governed by and construed in accordance with the laws of the Republic of Indonesia. 
                  By using our services, you submit to the exclusive jurisdiction of Indonesian courts.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-sm text-carbon-200">
                For questions about these Terms & Conditions, contact:<br />
                <strong>Email:</strong> info@biosolution.tech | <strong>WhatsApp:</strong> +62 857-4224-9591
              </p>
            </div>
          </div>

          {/* Language Switch */}
          <div className="mt-8 text-center">
            <a 
              href="/terms" 
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

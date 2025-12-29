"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { GSAPProvider } from "@/lib/gsap-provider";
import { HeaderEN, FooterEN } from "@/components/layout/en";
import {
  Factory,
  FlaskConical,
  Shield,
  FileCheck,
  Truck,
  Award,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
  Sparkles,
  Package,
  Beaker,
  ClipboardCheck,
  Clock,
  Leaf,
  Fish,
  Beef,
  Home,
  ChevronDown,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Maklon service types
const maklonServices = [
  {
    icon: Leaf,
    title: "Bio-Fertilizer Manufacturing",
    description: "Production of liquid and solid bio-fertilizers with custom formulation to meet your needs.",
    products: ["Liquid Bio-Fertilizer", "Organic Granule", "Decomposer", "Plant Growth Promoter"],
  },
  {
    icon: Shield,
    title: "Bio-Pesticide Manufacturing",
    description: "Microbial-based insecticides and fungicides using premium microorganisms.",
    products: ["Bio-Insecticide", "Bio-Fungicide", "Bio-Nematicide", "Organic Pest Control"],
  },
  {
    icon: Beef,
    title: "Livestock Probiotic Manufacturing",
    description: "Probiotics for poultry, ruminants, and livestock with selected strains.",
    products: ["Poultry Probiotic", "Cattle Probiotic", "Goat Probiotic", "Feed Additive"],
  },
  {
    icon: Fish,
    title: "Aquaculture Probiotic Manufacturing",
    description: "Fish and shrimp probiotics to boost pond productivity.",
    products: ["Fish Probiotic", "Shrimp Probiotic", "Waste Decomposer", "Water Treatment"],
  },
  {
    icon: Home,
    title: "Household Product Manufacturing",
    description: "Enzyme and probiotic products for eco-friendly household solutions.",
    products: ["Septic Tank Treatment", "Enzyme Cleaner", "Organic Decomposer", "Bio-Cleaner"],
  },
  {
    icon: Factory,
    title: "Industrial Product Manufacturing",
    description: "Biotechnology solutions for processing and manufacturing industries.",
    products: ["Industrial Waste Treatment", "Bioremediation", "Industrial Enzyme", "WWTP Treatment"],
  },
];

// Advantages
const advantages = [
  {
    icon: FlaskConical,
    title: "Full R&D Support",
    description: "Experienced research team helps develop optimal formulations for your target market.",
  },
  {
    icon: Award,
    title: "Government Registered",
    description: "Production facility registered and products can be registered with Ministry of Agriculture.",
  },
  {
    icon: Package,
    title: "Flexible Packaging",
    description: "Packaging options from 100ml to 1000L according to your distribution needs.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Strict quality control with laboratory testing on every production batch.",
  },
  {
    icon: FileCheck,
    title: "Complete Documentation",
    description: "COA, MSDS, and complete technical documents for every manufactured product.",
  },
  {
    icon: Truck,
    title: "Nationwide Shipping",
    description: "Distribution network throughout Indonesia with temperature-controlled fleet.",
  },
];

// Maklon process
const maklonProcess = [
  {
    step: 1,
    title: "Consultation & Analysis",
    description: "Discuss product needs, target market, and desired specifications.",
    duration: "1-2 days",
  },
  {
    step: 2,
    title: "Formulation Development",
    description: "R&D team develops formulation according to brief or optimizes existing formula.",
    duration: "2-4 weeks",
  },
  {
    step: 3,
    title: "Trial Production",
    description: "Sample production for quality testing and formulation validation.",
    duration: "1-2 weeks",
  },
  {
    step: 4,
    title: "Approval & Agreement",
    description: "Finalize product specifications, pricing, and sign cooperation contract.",
    duration: "3-5 days",
  },
  {
    step: 5,
    title: "Mass Production",
    description: "Production according to agreed MOQ with strict quality control.",
    duration: "2-4 weeks",
  },
  {
    step: 6,
    title: "Delivery & Support",
    description: "Delivery to your location with ongoing technical support.",
    duration: "3-7 days",
  },
];

// Statistics
const stats = [
  { value: "14+", label: "Years Experience" },
  { value: "50+", label: "Active Partners" },
  { value: "100+", label: "Formulations Developed" },
  { value: "19", label: "Provinces Covered" },
];

// FAQ
const faqs = [
  {
    q: "What is the MOQ (Minimum Order Quantity)?",
    a: "Our MOQ starts from 500 liters for liquid products and 500 kg for solid products. For first orders, we can adjust to your needs for market testing.",
  },
  {
    q: "Can I use my own brand (private label)?",
    a: "Yes, we provide private label and white label services. You can use your own brand, logo, and packaging design.",
  },
  {
    q: "How long is the production time from PO to delivery?",
    a: "For products with existing formulation, lead time is about 2-4 weeks. For new formulation development, add 2-4 weeks for R&D.",
  },
  {
    q: "Can manufactured products be registered with the government?",
    a: "Yes, we assist with product registration to the Ministry of Agriculture. Our facility is registered and meets regulatory requirements.",
  },
  {
    q: "What documents are provided?",
    a: "Each product comes with COA (Certificate of Analysis), MSDS (Material Safety Data Sheet), Technical Data Sheet, and registration support documents.",
  },
  {
    q: "Can I request custom formulation?",
    a: "Absolutely! Our R&D team can develop custom formulations according to your target market or specific commodity needs.",
  },
];

export default function MaklonPageEN() {
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
      `Hello Biosolution,\n\nI'm interested in your contract manufacturing services for:\n\n[Describe the product you want to manufacture]\n\nPlease provide more information about:\n- Available formulations\n- MOQ and pricing\n- Cooperation process\n\nThank you.`
    );
    window.open(`https://wa.me/6285742249591?text=${message}`, "_blank");
  };

  return (
    <GSAPProvider>
      <HeaderEN />

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
                Trusted{" "}
                <span className="bg-gradient-to-r from-forest-400 via-microbe-400 to-moss-400 bg-clip-text text-transparent">
                  Biotechnology
                </span>{" "}
                Contract Manufacturing
              </h1>
              
              <p className="text-lg sm:text-xl text-white/70 mb-8 leading-relaxed max-w-2xl">
                Create biotechnology products with your own brand. From bio-fertilizers to probiotics—we manufacture, you sell.
                <span className="text-forest-400 font-medium"> 14+ years experience, 50+ active partners.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsApp}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-forest-600 to-forest-500 hover:from-forest-500 hover:to-forest-400 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-forest-500/25 hover:shadow-xl hover:shadow-forest-500/30"
                >
                  <MessageCircle className="w-5 h-5" />
                  Free Consultation via WhatsApp
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl transition-all duration-300"
                >
                  View Services
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
        <section id="services" className="py-20 lg:py-28 bg-gradient-to-b from-carbon-900 to-soil-50">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-forest-100 border border-forest-200 rounded-full text-sm font-medium text-forest-700 mb-6">
                <Package className="w-4 h-4" />
                Manufacturing Services
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-carbon-900 mb-6">
                What Products Do You Want to Manufacture?
              </h2>
              <p className="text-lg text-carbon-600">
                We provide contract manufacturing for various biotechnology product categories. Choose according to your business needs.
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
                Our Advantages
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-carbon-900 mb-6">
                Why Choose Biosolution as Your Manufacturing Partner?
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
                Cooperation Process
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                From Consultation to Delivery
              </h2>
              <p className="text-lg text-white/70">
                Transparent and structured manufacturing process to ensure your product quality.
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
                Frequently Asked Questions
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
                Ready to Start Manufacturing with Your Brand?
              </h2>
              <p className="text-xl text-white/80 mb-10">
                Consult your manufacturing needs with our team. Free, no commitment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleWhatsApp}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-forest-700 font-semibold rounded-xl hover:bg-forest-50 transition-all duration-300 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contact via WhatsApp
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

      <FooterEN />
    </GSAPProvider>
  );
}

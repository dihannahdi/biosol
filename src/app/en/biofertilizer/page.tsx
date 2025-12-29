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
  Leaf,
  Droplets,
  FlaskConical,
  Shield,
  Sprout,
  TreeDeciduous,
  ArrowRight,
  Phone,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Award,
  Factory,
  ChevronDown,
  Beaker,
  CircleDot,
  Microscope,
  Target,
  TrendingUp,
  Wheat,
  Apple,
  GraduationCap,
  Percent,
  BadgeCheck,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Biosolution bio-fertilizer products
const biofertilizerProducts = [
  {
    name: "FloraOne",
    tagline: "Premium Liquid Bio-Fertilizer",
    description: "Consortium of 4 superior microbes: Azotobacter, Azospirillum, Bacillus, and Pseudomonas. Increases NPK absorption and fertilizer efficiency by up to 50%.",
    benefits: ["Nitrogen Fixation", "Phosphate Solubilization", "Growth Hormone Production"],
    applications: ["Rice", "Corn", "Vegetables", "Plantations"],
    image: "/images/products/floraone.webp",
    slug: "/en/products/complete-plant-nutrition-formula",
  },
  {
    name: "BIOJAGAT",
    tagline: "Multi-Purpose Organic Bio-Fertilizer",
    description: "Complete organic bio-fertilizer formula with organic matter decomposing bacteria and micro-nutrient providers for long-term soil fertility.",
    benefits: ["Soil Structure Improvement", "Organic Decomposition", "Micronutrient Supply"],
    applications: ["Horticulture", "Paddy Fields", "Food Crops", "Fruits"],
    image: "/images/products/biojagat.webp",
    slug: "/en/products/soil-health-formula",
  },
  {
    name: "MEGABIO",
    tagline: "Granular Solid Bio-Fertilizer",
    description: "Solid granular bio-fertilizer with more practical application dosage. Suitable for large-scale farming with broadcast or base fertilizer mixing systems.",
    benefits: ["Easy Application", "Measured Dosage", "Long Shelf Life"],
    applications: ["Oil Palm", "Sugarcane", "Rubber", "Cocoa"],
    image: "/images/products/megabio.webp",
    slug: "/en/products/livestock-productivity-formula",
  },
];

// Bio-fertilizer advantages vs chemical fertilizers
const advantages = [
  {
    icon: Leaf,
    title: "Environmentally Friendly",
    description: "Bio-fertilizers leave no harmful chemical residues in soil or harvests. Safe for the environment and consumers.",
  },
  {
    icon: TrendingUp,
    title: "20-30% Yield Increase",
    description: "Microbes in bio-fertilizers optimize nutrient absorption, resulting in better plant growth and higher yields.",
  },
  {
    icon: Percent,
    title: "Up to 50% Fertilizer Cost Savings",
    description: "With better nutrient absorption efficiency, chemical fertilizer needs can be significantly reduced without sacrificing productivity.",
  },
  {
    icon: Shield,
    title: "Improved Soil Structure",
    description: "Microorganisms in bio-fertilizers enhance soil fertility and structure, creating a healthier long-term ecosystem.",
  },
  {
    icon: Sprout,
    title: "Enhanced Plant Resistance",
    description: "Bio-fertilizers strengthen plants' natural immune systems against pest attacks, diseases, and environmental stress.",
  },
  {
    icon: CircleDot,
    title: "Selected Superior Microbes",
    description: "Every Biosolution bio-fertilizer product contains research-selected superior microbial strains with high concentrations of 10⁸ CFU/ml.",
  },
];

// How bio-fertilizers work
const howItWorks = [
  {
    step: 1,
    title: "Nitrogen Fixation",
    description: "Azotobacter and Azospirillum bacteria capture nitrogen from air and convert it into plant-absorbable forms.",
    microbe: "Azotobacter, Azospirillum",
  },
  {
    step: 2,
    title: "Phosphate Solubilization",
    description: "Bacillus bacteria dissolve bound phosphate in soil into available phosphate, increasing P element availability.",
    microbe: "Bacillus subtilis",
  },
  {
    step: 3,
    title: "Growth Hormone Production",
    description: "Pseudomonas produces auxin, gibberellin, and cytokinin hormones that stimulate root and shoot growth.",
    microbe: "Pseudomonas fluorescens",
  },
  {
    step: 4,
    title: "Organic Matter Decomposition",
    description: "Decomposing microbes convert organic matter into humus and available nutrients for plants.",
    microbe: "Trichoderma, Aspergillus",
  },
];

// Bio-fertilizer applications by commodity
const applications = [
  {
    icon: Wheat,
    title: "Food Crops",
    crops: ["Rice", "Corn", "Soybean", "Peanuts"],
    benefit: "Increase rice yields by 15-25% with 30% urea fertilizer reduction.",
  },
  {
    icon: Apple,
    title: "Horticulture",
    crops: ["Chili", "Tomato", "Onion", "Leafy Vegetables"],
    benefit: "Improve fruit quality, enhance resistance to fusarium wilt.",
  },
  {
    icon: TreeDeciduous,
    title: "Plantations",
    crops: ["Oil Palm", "Rubber", "Cocoa", "Coffee"],
    benefit: "Rejuvenate soil, sustainably increase annual crop productivity.",
  },
];

// Bio-fertilizer FAQs
const faqs = [
  {
    q: "What is the difference between bio-fertilizer and organic fertilizer?",
    a: "Bio-fertilizer contains living microorganisms that actively increase nutrient availability in soil. Organic fertilizer is the result of organic matter composting that provides nutrients directly. Both complement each other—bio-fertilizer works like a \"natural nutrient factory\" that continuously produces nutrients, while organic fertilizer provides raw materials and improves soil structure.",
  },
  {
    q: "How to use liquid bio-fertilizer?",
    a: "Liquid bio-fertilizer can be applied by: (1) Foliar spraying at 2-3 ml/liter of water, (2) Drenching to soil around the root zone, (3) Mixed with irrigation water (fertigation). Application should be done in morning or afternoon, every 7-14 days.",
  },
  {
    q: "Is bio-fertilizer safe for organic farming?",
    a: "Yes, bio-fertilizer is 100% safe for organic farming systems. Biosolution products contain no synthetic chemicals and are compatible with Indonesian organic farming standards. In fact, bio-fertilizer is an important component in sustainable organic farming systems.",
  },
  {
    q: "How long until bio-fertilizer shows results?",
    a: "Bio-fertilizer effects start to show within 2-4 weeks after first application, depending on soil conditions and plant type. For optimal results, regular application throughout one growing season is recommended as microbes need time to develop and colonize the root zone.",
  },
  {
    q: "Can bio-fertilizer be mixed with chemical fertilizers?",
    a: "Yes, Biosolution bio-fertilizers are compatible with NPK and other base chemical fertilizers. However, avoid direct mixing with chemical pesticides or fungicides as they may kill the microbes. Allow at least 3-5 days interval between applications.",
  },
  {
    q: "How to store bio-fertilizer to maintain effectiveness?",
    a: "Store bio-fertilizer in a cool place (room temperature 15-30°C), dry, and protected from direct sunlight. Close tightly after use. Biosolution product shelf life is 12 months from production date when stored properly.",
  },
];

// Statistics
const stats = [
  { value: "10⁸", label: "CFU/ml Microbial Concentration", suffix: "+" },
  { value: "50", label: "Chemical Fertilizer Savings", suffix: "%" },
  { value: "20-30", label: "Yield Increase", suffix: "%" },
  { value: "14", label: "Years of R&D", suffix: "+" },
];

export default function BiofertilizerPage() {
  const heroRef = useRef<HTMLElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useGSAP(
    () => {
      gsap.fromTo(
        ".biofertilizer-hero-content > *",
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
      `Hello Biosolution,\n\nI'm interested in bio-fertilizer products for:\n\n[Describe your crop type and needs]\n\nPlease provide more information about:\n- Suitable products\n- Dosage and application method\n- Pricing and ordering\n\nThank you.`
    );
    window.open(`https://wa.me/6285742249591?text=${message}`, "_blank");
  };

  return (
    <GSAPProvider>
      <HeaderEN />

      <main>
        {/* Hero Section - SEO Optimized */}
        <section
          ref={heroRef}
          className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-forest-950 via-forest-900 to-moss-950 text-white overflow-hidden"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-moss-500/20 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-forest-500/15 rounded-full blur-[120px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-microbe-500/10 rounded-full blur-[200px]" />
          </div>

          {/* Organic Pattern Background */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative container-wide">
            <div className="biofertilizer-hero-content max-w-4xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-moss-500/20 border border-moss-500/30 rounded-full text-sm font-medium text-moss-400 mb-6">
                <Leaf className="w-4 h-4" />
                Trusted Bio-Fertilizer Manufacturer in Indonesia
              </span>

              {/* SEO-Optimized H1 */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-[1.1]">
                High-Quality{" "}
                <span className="bg-gradient-to-r from-moss-400 via-forest-400 to-microbe-400 bg-clip-text text-transparent">
                  Organic Bio-Fertilizers
                </span>{" "}
                for Sustainable Agriculture
              </h1>

              <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
                Increase crop yields by <strong className="text-moss-400">20-30%</strong> and reduce chemical fertilizer dependency with{" "}
                <strong>bio-fertilizers</strong> based on superior microorganisms. Ministry of Agriculture registered products, trusted by farmers across 19 Indonesian provinces.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-sm text-white/80">
                  <BadgeCheck className="w-4 h-4 text-moss-400" />
                  Ministry Registered
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-sm text-white/80">
                  <Microscope className="w-4 h-4 text-moss-400" />
                  Lab Tested
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-sm text-white/80">
                  <Award className="w-4 h-4 text-moss-400" />
                  14+ Years Experience
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsApp}
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-moss-600 to-forest-600 hover:from-moss-500 hover:to-forest-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-moss-500/25 hover:shadow-xl hover:shadow-moss-500/30"
                >
                  <MessageCircle className="w-5 h-5" />
                  Free WhatsApp Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  href="/en/solutions/plant"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl transition-all duration-300"
                >
                  <Sprout className="w-5 h-5" />
                  View All Plant Products
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gradient-to-b from-forest-950 to-soil-100 border-t border-white/5">
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
                  <div className="text-4xl sm:text-5xl font-display font-bold text-moss-500 mb-2">
                    {stat.value}<span className="text-forest-500">{stat.suffix}</span>
                  </div>
                  <div className="text-sm sm:text-base text-carbon-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Intro Section - What is Bio-Fertilizer */}
        <section className="py-20 lg:py-28 bg-soil-50">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-forest-100 border border-forest-200 rounded-full text-sm font-medium text-forest-700 mb-6">
                  <GraduationCap className="w-4 h-4" />
                  Bio-Fertilizer Education
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-carbon-900 mb-6">
                  What is <span className="text-forest-600">Bio-Fertilizer</span>?
                </h2>
                <div className="prose prose-lg text-carbon-600">
                  <p>
                    <strong>Bio-fertilizer</strong> or <em>biofertilizer</em> is a fertilizer containing{" "}
                    <strong>living microorganisms</strong> such as bacteria, fungi, and algae that actively work to
                    improve soil fertility and increase nutrient availability for plants.
                  </p>
                  <p>
                    Unlike chemical fertilizers that provide nutrients directly, <strong>organic bio-fertilizers</strong>{" "}
                    work like a &quot;natural nutrient factory&quot; that continuously produces nutrients sustainably,
                    while also improving the soil ecosystem.
                  </p>
                  <p>
                    Biosolution is a <strong>leading bio-fertilizer manufacturer</strong> in Indonesia with
                    14+ years of experience in developing superior microbial formulations for various agricultural commodities.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-carbon-100">
                <h3 className="text-xl font-display font-bold text-carbon-900 mb-6">
                  Biosolution Bio-Fertilizer Microbial Content
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "Azotobacter sp.", function: "Nitrogen fixation from air", cfu: "10⁸ CFU/ml" },
                    { name: "Azospirillum sp.", function: "Growth hormone production", cfu: "10⁸ CFU/ml" },
                    { name: "Bacillus subtilis", function: "Phosphate & potassium solubilization", cfu: "10⁸ CFU/ml" },
                    { name: "Pseudomonas fluorescens", function: "Natural antibiotic production", cfu: "10⁸ CFU/ml" },
                    { name: "Trichoderma harzianum", function: "Pathogenic fungi control", cfu: "10⁷ CFU/ml" },
                  ].map((microbe, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-forest-50 rounded-xl">
                      <div className="w-10 h-10 shrink-0 bg-forest-100 rounded-full flex items-center justify-center">
                        <CircleDot className="w-5 h-5 text-forest-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-carbon-900 italic">{microbe.name}</span>
                          <span className="text-sm text-forest-600 font-mono">{microbe.cfu}</span>
                        </div>
                        <span className="text-sm text-carbon-600">{microbe.function}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-microbe-100 border border-microbe-200 rounded-full text-sm font-medium text-microbe-700 mb-6">
                <Beaker className="w-4 h-4" />
                Mechanism of Action
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-carbon-900 mb-6">
                How Does Bio-Fertilizer Work?
              </h2>
              <p className="text-lg text-carbon-600">
                Liquid and solid bio-fertilizers from Biosolution contain microorganisms that work
                synergistically to improve soil fertility and plant productivity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {howItWorks.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-gradient-to-br from-soil-50 to-white rounded-2xl p-6 border border-carbon-100 hover:border-forest-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="absolute -top-4 left-6 w-10 h-10 bg-gradient-to-br from-forest-500 to-moss-600 rounded-xl flex items-center justify-center font-display font-bold text-lg text-white shadow-lg">
                    {item.step}
                  </div>
                  <div className="pt-4">
                    <h3 className="text-lg font-display font-bold text-carbon-900 mb-3">{item.title}</h3>
                    <p className="text-carbon-600 text-sm mb-4">{item.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-xs text-forest-600 bg-forest-50 px-3 py-1.5 rounded-full italic">
                      <CircleDot className="w-3 h-3" />
                      {item.microbe}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-br from-forest-900 to-moss-950 text-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-moss-400 mb-6">
                <Sparkles className="w-4 h-4" />
                Bio-Fertilizer Advantages
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Why Switch to Organic Bio-Fertilizers?
              </h2>
              <p className="text-lg text-white/70">
                Bio-fertilizers from Biosolution provide sustainable agricultural solutions that are more
                environmentally friendly and economically beneficial than conventional chemical fertilizers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {advantages.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-moss-500/50 transition-colors duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-moss-500/20 to-forest-500/20 rounded-2xl flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-moss-400" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 lg:py-28 bg-soil-50">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-forest-100 border border-forest-200 rounded-full text-sm font-medium text-forest-700 mb-6">
                <Droplets className="w-4 h-4" />
                Bio-Fertilizer Products
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-carbon-900 mb-6">
                Biosolution Liquid & Solid Bio-Fertilizer Selection
              </h2>
              <p className="text-lg text-carbon-600">
                We provide various high-quality organic bio-fertilizers to meet the needs of
                various agricultural commodities in Indonesia.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {biofertilizerProducts.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-carbon-100 hover:border-forest-200 transition-all duration-300 group"
                >
                  <div className="h-48 bg-gradient-to-br from-forest-100 to-moss-100 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <FlaskConical className="w-12 h-12 text-forest-600" />
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-forest-600 font-medium">{product.tagline}</span>
                    <h3 className="text-2xl font-display font-bold text-carbon-900 mt-1 mb-3">
                      {product.name}
                    </h3>
                    <p className="text-carbon-600 text-sm mb-4">{product.description}</p>
                    
                    <div className="mb-4">
                      <div className="text-xs font-semibold text-carbon-500 uppercase tracking-wider mb-2">Key Benefits</div>
                      <div className="flex flex-wrap gap-2">
                        {product.benefits.map((benefit) => (
                          <span key={benefit} className="inline-flex items-center gap-1 px-2 py-1 bg-forest-50 text-forest-700 text-xs rounded-full">
                            <CheckCircle2 className="w-3 h-3" />
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="text-xs font-semibold text-carbon-500 uppercase tracking-wider mb-2">Applications</div>
                      <div className="flex flex-wrap gap-1">
                        {product.applications.map((app) => (
                          <span key={app} className="px-2 py-1 bg-moss-50 text-moss-700 text-xs rounded-full">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={product.slug}
                      className="inline-flex items-center gap-2 text-forest-600 font-semibold hover:text-forest-700 transition-colors group/link"
                    >
                      View Product Details
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/en/solutions/plant"
                className="inline-flex items-center gap-3 px-8 py-4 bg-forest-600 hover:bg-forest-700 text-white font-semibold rounded-xl transition-all duration-300"
              >
                View All Plant Biosecurity Products
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Applications by Commodity */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-moss-100 border border-moss-200 rounded-full text-sm font-medium text-moss-700 mb-6">
                <Target className="w-4 h-4" />
                Bio-Fertilizer Applications
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-carbon-900 mb-6">
                Bio-Fertilizers for Various Commodities
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {applications.map((app, index) => (
                <motion.div
                  key={app.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-soil-50 to-white rounded-2xl p-8 border border-carbon-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-forest-100 to-moss-100 rounded-2xl flex items-center justify-center mb-6">
                    <app.icon className="w-8 h-8 text-forest-600" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-carbon-900 mb-3">{app.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {app.crops.map((crop) => (
                      <span key={crop} className="px-3 py-1 bg-forest-50 text-forest-700 text-sm rounded-full">
                        {crop}
                      </span>
                    ))}
                  </div>
                  <p className="text-carbon-600">{app.benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contract Manufacturing CTA */}
        <section className="py-16 bg-gradient-to-r from-microbe-600 to-forest-600 text-white">
          <div className="container-wide">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Factory className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold mb-2">Want to Produce Bio-Fertilizers Under Your Own Brand?</h3>
                  <p className="text-white/80">We provide bio-fertilizer contract manufacturing services with custom formulations to your specifications.</p>
                </div>
              </div>
              <Link
                href="/en/maklon"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-forest-700 font-semibold rounded-xl hover:bg-forest-50 transition-all duration-300 shrink-0"
              >
                Learn About Contract Manufacturing
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 lg:py-28 bg-soil-50">
          <div className="container-wide max-w-4xl">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-forest-100 border border-forest-200 rounded-full text-sm font-medium text-forest-700 mb-6">
                <MessageCircle className="w-4 h-4" />
                Bio-Fertilizer FAQ
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-carbon-900 mb-6">
                Frequently Asked Questions About Bio-Fertilizers
              </h2>
              <p className="text-lg text-carbon-600">
                Find answers to commonly asked questions about organic bio-fertilizers and their usage.
              </p>
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
        <section className="py-20 lg:py-28 bg-gradient-to-br from-forest-600 via-forest-700 to-moss-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-moss-500/20 rounded-full blur-[100px]" />
          </div>

          <div className="relative container-wide text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Ready to Increase Yields with Bio-Fertilizers?
              </h2>
              <p className="text-xl text-white/80 mb-10">
                Consult your bio-fertilizer needs with our biotechnology experts. Free and no commitment.
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

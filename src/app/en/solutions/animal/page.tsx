"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Bird,
  Fish,
  Heart,
  FlaskConical,
  CheckCircle2,
  Microscope,
  Beaker,
  Shield,
} from "lucide-react";
import { GSAPProvider } from "@/lib/gsap-provider";
import { HeaderEN as Header, FooterEN as Footer } from "@/components/layout/en";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    icon: Bird,
    title: "Poultry",
    description: "Broilers, layers, ducks, and other poultry.",
    examples: ["Broilers", "Layers", "Ducks", "Quails"],
  },
  {
    icon: Heart,
    title: "Ruminants",
    description: "Cattle, goats, sheep, and other ruminant livestock.",
    examples: ["Beef cattle", "Dairy cattle", "Goats", "Sheep"],
  },
  {
    icon: Bird,
    title: "Swine",
    description: "Various phases of pig farming from starter to finisher.",
    examples: ["Starter pigs", "Grower pigs", "Finisher pigs", "Sows"],
  },
  {
    icon: Fish,
    title: "Aquaculture",
    description: "Freshwater and brackish water fish and shrimp farming.",
    examples: ["Catfish", "Tilapia", "Vannamei shrimp", "Gourami"],
  },
];

const products = [
  {
    name: "RAJABIO",
    type: "Livestock Probiotic",
    description: "Specially formulated livestock probiotic to improve digestive health and animal productivity. Improves FCR and reduces mortality.",
    benefits: [
      "Improve Feed Conversion Ratio (FCR)",
      "Significantly reduce barn odor",
      "Improve meat and egg quality",
      "Reduce antibiotic dependency",
    ],
    registration: "Registered with Indonesian Ministry of Agriculture",
    icon: Beaker,
    application: "Poultry, ruminants, swine",
  },
  {
    name: "MEGABIO",
    type: "Premium Probiotic",
    description: "Premium probiotic with high concentration of beneficial bacteria. Joint research result with Brawijaya University.",
    benefits: [
      "Faster and more uniform growth",
      "Premium meat quality",
      "Reduce mortality rate",
      "High Return on Investment",
    ],
    registration: "Registered with Indonesian Ministry of Agriculture",
    icon: Microscope,
    application: "Specifically for broilers",
  },
  {
    name: "SIMBIOS",
    type: "Livestock Probiotic",
    description: "Microbial symbiosis formulation for various types of livestock. Improves digestive efficiency and production.",
    benefits: [
      "Increase milk production in dairy cattle",
      "More optimal feed efficiency",
      "Maintain rumen health",
      "Easy to mix with feed",
    ],
    registration: "Registered with Indonesian Ministry of Agriculture",
    icon: FlaskConical,
    application: "Ruminant livestock",
  },
  {
    name: "MASHITAM",
    type: "Soil/Water Conditioner",
    description: "Based on active humic compounds. For aquaculture, helps maintain water quality and health of cultivation ponds.",
    benefits: [
      "Improve pond water quality",
      "Suppress pathogen growth",
      "Increase fish/shrimp survival rate",
      "Research R/C Ratio of 1.95",
    ],
    registration: "Registered with Indonesian Ministry of Agriculture",
    icon: Shield,
    application: "Aquaculture",
  },
];

const benefits = [
  {
    title: "Improved FCR",
    description: "More efficient Feed Conversion Ratio, saving feed costs.",
  },
  {
    title: "Reduced Mortality",
    description: "Significantly decreased livestock mortality rate.",
  },
  {
    title: "Residue-Free",
    description: "Safe products without antibiotic or chemical residues.",
  },
  {
    title: "Environmentally Friendly",
    description: "Reduces barn odor and pollution.",
  },
];

export default function AnimalSolutionsPage() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".hero-content > *",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }
      );
    },
    { scope: heroRef }
  );

  return (
    <GSAPProvider>
      <Header />

      <main>
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative pt-32 pb-20 bg-gradient-to-b from-soil-50 via-white to-moss-50/30 overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-soil-200/30 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-microbe-200/20 rounded-full blur-[80px]" />
          </div>

          <div className="relative container-wide">
            <div className="hero-content max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-soil-50 border border-soil-200 rounded-full mb-8">
                <Heart className="w-4 h-4 text-soil-600" />
                <span className="text-sm font-medium text-soil-700">
                  Animal Health
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-carbon-900 mb-6 leading-tight">
                Better FCR,{" "}
                <span className="bg-gradient-to-r from-soil-600 to-microbe-500 bg-clip-text text-transparent">
                  Lower Mortality
                </span>
              </h1>

              <p className="text-lg md:text-xl text-carbon-600 mb-8 leading-relaxed max-w-3xl">
                Proven results: FCR improved 1.72→1.58, mortality reduced 35%, shrimp survival 65%→82%. 
                Save hundreds of millions in annual feed costs. Research-backed probiotics with 
                Ministry of Agriculture registration—not just claims, measurable data.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/en/contact" className="btn-primary bg-soil-600 hover:bg-soil-500 group">
                  Product Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/en/research" className="btn-secondary">
                  View Research Results
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-carbon-900 mb-4">
                Sectors We Serve
              </h2>
              <p className="text-carbon-600">
                Animal health solutions for various types of livestock and aquaculture.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, i) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gradient-to-br from-soil-50 to-white border border-soil-100 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-soil-100 rounded-xl flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6 text-soil-600" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-carbon-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-carbon-600 mb-4">{category.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {category.examples.map((example) => (
                      <span
                        key={example}
                        className="text-xs px-2 py-1 bg-soil-100/50 text-soil-700 rounded"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 bg-gradient-to-b from-moss-50/30 to-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-carbon-900 mb-4">
                Animal Health Products
              </h2>
              <p className="text-carbon-600">
                High-quality probiotics and supplements to improve livestock performance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {products.map((product, i) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-carbon-100 rounded-2xl p-8 hover:shadow-xl hover:border-soil-200 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-soil-100 rounded-xl flex items-center justify-center">
                      <product.icon className="w-7 h-7 text-soil-600" />
                    </div>
                    <span className="text-xs px-3 py-1 bg-soil-50 text-soil-700 rounded-full font-medium">
                      {product.type}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-carbon-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-carbon-600 mb-6">{product.description}</p>
                  <ul className="space-y-3 mb-6">
                    {product.benefits.map((benefit, j) => (
                      <li key={j} className="flex items-start gap-2 text-carbon-600">
                        <CheckCircle2 className="w-5 h-5 text-soil-500 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-carbon-100 flex justify-between items-center">
                    <div>
                      <p className="text-sm text-carbon-500">{product.registration}</p>
                      <p className="text-xs text-soil-600 font-medium">For: {product.application}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-carbon-950 text-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Benefits of Using Biosolution Probiotics
              </h2>
              <p className="text-carbon-400">
                Real results experienced by our partner farmers.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, i) => (
                <div
                  key={benefit.title}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
                >
                  <CheckCircle2 className="w-8 h-8 text-soil-400 mb-4" />
                  <h3 className="font-display font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-carbon-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-soil-600 to-soil-700">
          <div className="container-wide text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Optimize Your Farm Productivity
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Consult your probiotic and livestock supplement needs with our expert team. 
                We are ready to help improve your business efficiency and profits.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/en/contact"
                  className="btn-primary bg-white text-soil-700 hover:bg-white/90"
                >
                  Contact Our Team
                </Link>
                <a
                  href="https://wa.me/6285742249591?text=Hello%20Biosolution%2C%20I%20would%20like%20to%20consult%20about%20livestock%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary border-white/30 text-white hover:bg-white/10"
                >
                  WhatsApp: 0857-4224-9591
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </GSAPProvider>
  );
}

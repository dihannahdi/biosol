"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Wheat,
  Sprout,
  TreePine,
  Flower2,
  Shield,
  FlaskConical,
  CheckCircle2,
  Microscope,
  Bug,
  Leaf,
} from "lucide-react";
import { GSAPProvider } from "@/lib/gsap-provider";
import { HeaderEN as Header, FooterEN as Footer } from "@/components/layout/en";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    icon: Wheat,
    title: "Food Crops",
    description: "Rice, corn, soybeans, and other strategic food commodities.",
    examples: ["Rice paddies", "Corn", "Soybeans", "Cassava"],
  },
  {
    icon: Sprout,
    title: "Horticulture",
    description: "Vegetables, fruits, and high-value horticultural crops.",
    examples: ["Shallots", "Chili", "Tomatoes", "Potatoes"],
  },
  {
    icon: TreePine,
    title: "Plantations",
    description: "Strategic plantation commodities for export and industry.",
    examples: ["Palm oil", "Rubber", "Cocoa", "Coffee"],
  },
  {
    icon: Flower2,
    title: "Hobby Plants",
    description: "Ornamental plants, cut flowers, and landscape plants.",
    examples: ["Orchids", "Roses", "Foliage plants", "Lawn grass"],
  },
];

const products = [
  {
    name: "FloraOne",
    type: "Liquid Biofertilizer",
    description: "Premium microbial consortium to increase nutrient availability and plant growth. Contains Azotobacter, Azospirillum, Bacillus, and Pseudomonas.",
    benefits: [
      "Reduce chemical fertilizer use by up to 50%",
      "Significantly increase crop yields",
      "Improve soil structure and health",
      "R/C Ratio reaches 2.02",
    ],
    registration: "Registered with Indonesian Ministry of Agriculture",
    icon: FlaskConical,
    research: "Joint research with IPB University",
  },
  {
    name: "SIMBIOS",
    type: "Biofertilizer",
    description: "Microbial formulation producing growth hormones and nutrient absorption efficiency. Result of research collaboration with IPB University.",
    benefits: [
      "Increase nutrient absorption efficiency",
      "Accelerate vegetative growth",
      "Improve plant resistance",
      "Production cost savings",
    ],
    registration: "Registered with Indonesian Ministry of Agriculture",
    icon: Microscope,
    research: "Joint research with IPB University",
  },
  {
    name: "RAJABIO",
    type: "Organic Fertilizer",
    description: "Organic fertilizer that maximizes soil microbial activity. Improves fertility and sustainability of agricultural land.",
    benefits: [
      "Improve soil structure",
      "Increase beneficial microbial population",
      "Provide nutrients gradually",
      "Support sustainable agriculture",
    ],
    registration: "Registered with Indonesian Ministry of Agriculture",
    icon: Leaf,
    research: "Joint research with IPB University",
  },
  {
    name: "BIOKILLER SL",
    type: "Biological Insecticide",
    description: "Biological insecticide based on Beauveria bassiana and Metarhizium anisopliae. Effectively controls pests without harmful residues.",
    benefits: [
      "More than 70% efficacy against pests",
      "Safe for natural predators",
      "Leaves no chemical residue",
      "Does not cause pest resistance",
    ],
    registration: "Complies with Permentan No. 43/2019",
    icon: Bug,
    research: "Research with UNUD & UNPAD",
  },
  {
    name: "BIOJAGAT",
    type: "Compound Biofertilizer",
    description: "Nutrient-solubilizing and nitrogen-fixing microbes. Developed jointly with Brawijaya University.",
    benefits: [
      "Increase phosphorus availability",
      "Fix nitrogen from the air",
      "Improve soil health",
      "Increase crop yields",
    ],
    registration: "Registered with Indonesian Ministry of Agriculture",
    icon: FlaskConical,
    research: "Joint research with UB",
  },
  {
    name: "TRICO-Z WP",
    type: "Biological Fungicide",
    description: "Biological fungicide with Trichoderma harzianum active ingredient (1x10^7 cfu/g). Tested efficacy against sheath blight disease.",
    benefits: [
      "76.84% efficacy against sheath blight",
      "Prevent soil-borne fungal diseases",
      "Strengthen plant immune system",
      "Environmentally friendly",
    ],
    registration: "Complies with Permentan No. 43/2019",
    icon: Shield,
    research: "Joint research with UNUD",
  },
];

const benefits = [
  {
    title: "Ministry of Agriculture Registered",
    description: "All products have official registration from the Indonesian Ministry of Agriculture.",
  },
  {
    title: "University Research-Based",
    description: "Developed jointly with IPB, UB, UNUD, and UNPAD.",
  },
  {
    title: "Environmentally Friendly",
    description: "Does not pollute soil, water, and surrounding ecosystems.",
  },
  {
    title: "Technical Assistance",
    description: "Expert team ready to help with field application.",
  },
];

export default function PlantSolutionsPage() {
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
          className="relative pt-32 pb-20 bg-gradient-to-b from-forest-50 via-white to-moss-50/30 overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-forest-200/30 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-microbe-200/20 rounded-full blur-[80px]" />
          </div>

          <div className="relative container-wide">
            <div className="hero-content max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-forest-50 border border-forest-200 rounded-full mb-8">
                <Shield className="w-4 h-4 text-forest-600" />
                <span className="text-sm font-medium text-forest-700">
                  Plant Biosecurity
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-carbon-900 mb-6 leading-tight">
                Increase Yields{" "}
                <span className="bg-gradient-to-r from-forest-600 to-microbe-500 bg-clip-text text-transparent">
                  Up to 40%
                </span>{" "}
                with Biotechnology
              </h1>

              <p className="text-lg md:text-xl text-carbon-600 mb-8 leading-relaxed max-w-3xl">
                Proven results: 5.2→7.3 ton/ha rice, R/C Ratio 2.02, 76.84% disease efficacy. 
                Cut chemical fertilizer costs by 50%, reduce pesticide dependency—all backed by 
                university research and Ministry of Agriculture registration.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/en/contact" className="btn-primary group">
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
                Plant Biosecurity Coverage
              </h2>
              <p className="text-carbon-600">
                We serve various agricultural sectors with solutions tailored 
                for the specific needs of each plant type.
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
                  className="bg-gradient-to-br from-forest-50 to-white border border-forest-100 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6 text-forest-600" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-carbon-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-carbon-600 mb-4">{category.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {category.examples.map((example) => (
                      <span
                        key={example}
                        className="text-xs px-2 py-1 bg-forest-100/50 text-forest-700 rounded"
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
                Products for Plants
              </h2>
              <p className="text-carbon-600">
                Each product is developed through scientific research and field-tested for effectiveness.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, i) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-carbon-100 rounded-2xl p-6 hover:shadow-xl hover:border-forest-200 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center">
                      <product.icon className="w-6 h-6 text-forest-600" />
                    </div>
                    <span className="text-xs px-3 py-1 bg-forest-50 text-forest-700 rounded-full font-medium">
                      {product.type}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-carbon-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-carbon-600 mb-4">{product.description}</p>
                  <ul className="space-y-2 mb-4">
                    {product.benefits.slice(0, 3).map((benefit, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-carbon-600">
                        <CheckCircle2 className="w-4 h-4 text-forest-500 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-carbon-100">
                    <p className="text-xs text-forest-600 font-medium">{product.research}</p>
                    <p className="text-xs text-carbon-500">{product.registration}</p>
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
                Why Choose Biosolution?
              </h2>
              <p className="text-carbon-400">
                Advantages of plant biosecurity products from Biosolution.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, i) => (
                <div
                  key={benefit.title}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
                >
                  <CheckCircle2 className="w-8 h-8 text-forest-400 mb-4" />
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
        <section className="py-20 bg-gradient-to-r from-forest-600 to-forest-700">
          <div className="container-wide text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Ready to Improve Your Plant Productivity?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Consult your plant biosecurity needs with our expert team. 
                We are ready to help select the right products for your land conditions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/en/contact"
                  className="btn-primary bg-white text-forest-700 hover:bg-white/90"
                >
                  Contact Our Team
                </Link>
                <a
                  href="https://wa.me/6285742249591?text=Hello%20Biosolution%2C%20I%20would%20like%20to%20consult%20about%20plant%20products."
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

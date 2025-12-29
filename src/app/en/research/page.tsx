"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import {
  GraduationCap,
  FlaskConical,
  FileText,
  Award,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Users,
  Leaf,
  Bug,
  Shield,
  Sprout,
} from "lucide-react";

import { GSAPProvider } from "@/lib/gsap-provider";
import { HeaderEN as Header, FooterEN as Footer } from "@/components/layout/en";

const researchPartners = [
  {
    name: "Bogor Agricultural University (IPB)",
    department: "Faculty of Agriculture",
    location: "Bogor, West Java",
    year: "Partner since 2012",
    products: ["FloraOne", "RAJABIO", "SIMBIOS"],
    description:
      "Field efficacy trials for biofertilizer and biocontrol products on food crops and horticulture.",
    achievements: [
      "FloraOne increased rice yield with R/C ratio of 2.02",
      "RAJABIO validated on vegetable crops with significant growth improvement",
      "SIMBIOS proven effective for seed treatment",
    ],
  },
  {
    name: "Brawijaya University",
    department: "Faculty of Agriculture",
    location: "Malang, East Java",
    year: "Partner since 2015",
    products: ["BIOJAGAT", "MEGABIO", "MASHITAM"],
    description:
      "Research on organic fertilizers and animal nutrition products for poultry and ruminants.",
    achievements: [
      "MASHITAM increased poultry production efficiency with R/C ratio of 1.95",
      "MEGABIO optimized for ruminant nutrition",
      "BIOJAGAT validated on plantation crops",
    ],
  },
  {
    name: "Udayana University",
    department: "Faculty of Agriculture",
    location: "Bali",
    year: "Partner since 2018",
    products: ["BIOKILLER SL", "TRICO-Z WP"],
    description:
      "Field trials for biopesticides on horticulture and perennial crops in tropical environments.",
    achievements: [
      "TRICO-Z WP achieved 76.84% efficacy against Phytophthora",
      "BIOKILLER SL validated on chili pepper crops",
      "Research on tropical disease management",
    ],
  },
  {
    name: "Padjadjaran University",
    department: "Faculty of Agriculture",
    location: "Bandung, West Java",
    year: "Partner since 2020",
    products: ["BIOKILLER SL"],
    description:
      "Research on biological pest control agents for highland horticulture crops.",
    achievements: [
      "Efficacy testing on highland vegetable crops",
      "Environmental impact assessment of biocontrol agents",
      "Integration with sustainable farming practices",
    ],
  },
];

const products = [
  {
    name: "FloraOne",
    type: "Biofertilizer",
    icon: Sprout,
    description: "Compound biofertilizer consortium for rice and food crops",
    result: "Field trial R/C ratio 2.02 (IPB collaboration)",
  },
  {
    name: "SIMBIOS",
    type: "Biofertilizer",
    icon: Leaf,
    description: "Organic fertilizer with nitrogen-fixing and phosphate-solubilizing microbes",
    result: "Significant growth improvement on vegetable crops",
  },
  {
    name: "RAJABIO",
    type: "Biofertilizer",
    icon: Leaf,
    description: "Liquid organic fertilizer for various crops",
    result: "Yield increase of 15-25% compared to control",
  },
  {
    name: "BIOKILLER SL",
    type: "Biopesticide",
    icon: Bug,
    description: "Biological insecticide for pest control",
    result: "Effective control on chili pepper and vegetable crops",
  },
  {
    name: "BIOJAGAT",
    type: "Soil Conditioner",
    icon: Leaf,
    description: "Soil conditioner with beneficial microbes for plantations",
    result: "Improved soil health and crop productivity",
  },
  {
    name: "TRICO-Z WP",
    type: "Biofungicide",
    icon: Shield,
    description: "Trichoderma-based fungicide for disease control",
    result: "76.84% efficacy against Phytophthora (UNUD trial)",
  },
  {
    name: "MEGABIO",
    type: "Animal Nutrition",
    icon: FlaskConical,
    description: "Probiotic supplement for ruminant nutrition",
    result: "Improved feed conversion ratio",
  },
  {
    name: "MASHITAM",
    type: "Poultry Probiotic",
    icon: FlaskConical,
    description: "Probiotic for poultry health and productivity",
    result: "R/C ratio 1.95 on poultry production (Brawijaya trial)",
  },
];

const certifications = [
  {
    name: "Ministry of Agriculture",
    description: "Official product registration",
  },
  {
    name: "Organic Indonesia",
    description: "Organic certification",
  },
  {
    name: "KAN Accredited",
    description: "National Accreditation Committee",
  },
  {
    name: "TKDN Certified",
    description: "Domestic Component Level",
  },
  {
    name: "IAF Member",
    description: "International Accreditation",
  },
];

export default function ResearchPage() {
  const heroRef = useRef<HTMLElement>(null);
  const partnersRef = useRef<HTMLElement>(null);
  const productsRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".animate-in", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });
    },
    { scope: heroRef }
  );

  return (
    <GSAPProvider>
      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative pt-32 pb-20 bg-gradient-to-b from-forest-50 via-white to-moss-50/30 overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-gradient-to-br from-forest-200/30 to-transparent rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-microbe-200/20 to-transparent rounded-full blur-[80px]" />
          </div>

          <div className="container-wide relative">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-forest-50 border border-forest-200 rounded-full mb-8"
              >
                <GraduationCap className="w-4 h-4 text-forest-600" />
                <span className="text-sm font-medium text-forest-700">
                  Science-Based Research
                </span>
              </motion.div>

              <h1 className="animate-in font-display text-4xl sm:text-5xl md:text-6xl font-bold text-carbon-900 mb-6 leading-tight">
                Not Claims—{" "}
                <span className="bg-gradient-to-r from-forest-600 to-microbe-500 bg-clip-text text-transparent">
                  Scientific Proof
                </span>
              </h1>

              <p className="animate-in text-lg md:text-xl text-carbon-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                R/C Ratio up to 2.02, 76.84% proven efficacy. Our results aren't theory—they're 
                real data from field trials with IPB, Brawijaya, Udayana, and Padjadjaran universities. 
                Every product tested, registered, and ready for your farm.
              </p>

              <div className="animate-in flex flex-wrap justify-center gap-4">
                <Link
                  href="/en/contact"
                  className="btn-primary group bg-forest-600 hover:bg-forest-500"
                >
                  <span>Propose Research Collaboration</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/en/news" className="btn-secondary">
                  View Publications
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="animate-in mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: GraduationCap, value: "4+", label: "University Partners" },
                { icon: FileText, value: "12+", label: "Field Trial Reports" },
                { icon: FlaskConical, value: "8+", label: "Tested Products" },
                { icon: Award, value: "5", label: "Certifications" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-carbon-100"
                >
                  <stat.icon className="w-8 h-8 text-forest-600 mx-auto mb-3" />
                  <div className="text-3xl font-display font-bold text-carbon-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-carbon-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Partners Section */}
        <section ref={partnersRef} className="py-20 bg-white">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-carbon-900 mb-4">
                University Research Partners
              </h2>
              <p className="text-carbon-600 max-w-2xl mx-auto">
                Intensive collaboration with agricultural faculties of leading universities 
                produces high-quality products that are scientifically validated.
              </p>
            </div>

            <div className="grid gap-8">
              {researchPartners.map((partner, i) => (
                <div
                  key={partner.name}
                  className="partner-card bg-gradient-to-br from-forest-50/50 to-white rounded-3xl border border-forest-100 p-8 md:p-10"
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Partner Info */}
                    <div className="lg:w-1/3">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-forest-100 rounded-2xl flex items-center justify-center">
                          <GraduationCap className="w-8 h-8 text-forest-600" />
                        </div>
                        <div>
                          <h3 className="font-display text-xl font-bold text-carbon-900">
                            {partner.name}
                          </h3>
                          <p className="text-sm text-carbon-500">{partner.department}</p>
                        </div>
                      </div>
                      <p className="text-carbon-600 mb-4">{partner.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs px-3 py-1 bg-forest-100 text-forest-700 rounded-full">
                          {partner.location}
                        </span>
                        <span className="text-xs px-3 py-1 bg-microbe-100 text-microbe-700 rounded-full">
                          {partner.year}
                        </span>
                      </div>
                    </div>

                    {/* Products */}
                    <div className="lg:w-1/3">
                      <h4 className="font-semibold text-carbon-900 mb-3">Research-Based Products</h4>
                      <div className="flex flex-wrap gap-2">
                        {partner.products.map((product) => (
                          <span
                            key={product}
                            className="px-4 py-2 bg-white rounded-lg border border-carbon-100 text-sm font-medium text-carbon-700"
                          >
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="lg:w-1/3">
                      <h4 className="font-semibold text-carbon-900 mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {partner.achievements.map((achievement, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-carbon-600">
                            <CheckCircle2 className="w-4 h-4 text-forest-500 shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products from Research Section */}
        <section ref={productsRef} className="py-20 bg-gradient-to-b from-moss-50/30 to-white">
          <div className="container-wide">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-carbon-900 mb-4">
                Research-Validated Products
              </h2>
              <p className="text-carbon-600 max-w-2xl mx-auto">
                Every Biosolution product is developed through rigorous research processes 
                and field trials conducted with university partners.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, i) => (
                <div
                  key={product.name}
                  className="product-card bg-white rounded-2xl border border-carbon-100 p-6 hover:shadow-lg hover:border-forest-200 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center mb-4">
                    <product.icon className="w-6 h-6 text-forest-600" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-carbon-900 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-forest-600 font-medium mb-3">{product.type}</p>
                  <p className="text-sm text-carbon-600 mb-4">{product.description}</p>
                  <div className="pt-4 border-t border-carbon-100">
                    <p className="text-xs text-carbon-500 flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-forest-500 shrink-0" />
                      <span>{product.result}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 bg-carbon-950 text-white">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Certifications and Accreditations
              </h2>
              <p className="text-carbon-400 max-w-2xl mx-auto">
                Biosolution products meet national and international regulatory standards and certifications.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {certifications.map((cert, i) => (
                <div
                  key={cert.name}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:bg-white/10 transition-colors"
                >
                  <Award className="w-8 h-8 text-forest-400 mx-auto mb-3" />
                  <h3 className="font-medium text-white mb-1">{cert.name}</h3>
                  <p className="text-xs text-carbon-400">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-forest-600 to-forest-700">
          <div className="container-wide text-center">
            <div className="max-w-3xl mx-auto">
              <Users className="w-16 h-16 text-white/80 mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Interested in Research Collaboration?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                We are open to research collaborations with universities, research institutions, 
                and agricultural organizations in the development of biotechnology products.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/en/contact"
                  className="btn-primary bg-white text-forest-700 hover:bg-white/90"
                >
                  Contact Research Team
                </Link>
                <a
                  href="mailto:info@biosolution.tech"
                  className="btn-secondary border-white/30 text-white hover:bg-white/10"
                >
                  info@biosolution.tech
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

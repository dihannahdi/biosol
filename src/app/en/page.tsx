"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Microscope,
  Beaker,
  FlaskConical,
  Leaf,
  Shield,
  TrendingUp,
  Users,
  Award,
  CheckCircle2,
  Phone,
  Calendar,
  Clock,
  MapPin,
} from "lucide-react";
import { GSAPProvider } from "@/lib/gsap-provider";
import { HeaderEN, FooterEN } from "@/components/layout/en";
import { VantaCells } from "@/components/ui/vanta-cells";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Users, value: "19", label: "Provinces Covered" },
  { icon: Award, value: "14+", label: "Years Proven Track Record" },
  { icon: Microscope, value: "8+", label: "Registered Products" },
  { icon: TrendingUp, value: "40%", label: "Average Yield Boost" },
];

const features = [
  {
    icon: FlaskConical,
    title: "University-Researched",
    description: "Developed with IPB, Brawijaya, Udayana & Padjadjaran universities. R/C Ratio up to 2.02, 76.84% proven efficacy.",
  },
  {
    icon: Leaf,
    title: "Cut Costs, Not Corners",
    description: "Reduce chemical fertilizer costs by 50% while improving soil health. Better margins, sustainable growth.",
  },
  {
    icon: Shield,
    title: "Fully Certified",
    description: "Ministry of Agriculture registered, organic certified (LSO), KAN accredited lab testing. No shortcuts.",
  },
];

const industries = [
  {
    title: "Plant Biosecurity",
    subtitle: "Rice, Corn, Horticulture, Plantations",
    description: "Boost yields 40%, cut chemical inputs 50%. Proven with 5.2→7.3 ton/ha rice results. ROI in one harvest.",
    products: ["FloraOne", "BIOKILLER SL", "BIOJAGAT", "TRICO-Z WP"],
    href: "/en/solutions/plant",
  },
  {
    title: "Animal Health",
    subtitle: "Poultry, Ruminants & Aquaculture",
    description: "FCR improvement 1.72→1.58, mortality down 35%. Save hundreds of millions in feed costs annually.",
    products: ["RAJABIO", "MEGABIO", "SIMBIOS", "MASHITAM"],
    href: "/en/solutions/animal",
  },
];

export default function HomePageEN() {
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Hero text animation
      const heroTimeline = gsap.timeline();
      heroTimeline
        .fromTo(
          ".hero-badge",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
        )
        .fromTo(
          ".hero-headline",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.3"
        )
        .fromTo(
          ".hero-subheadline",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out" },
          "-=0.3"
        );

      // Stats counter animation
      gsap.fromTo(
        statsRef.current?.querySelectorAll(".stat-item") || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
          },
        }
      );
    },
    { scope: heroRef }
  );

  return (
    <GSAPProvider>
      <HeaderEN />

      <main>
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        >
          {/* Vanta.js Cells Background */}
          <VantaCells
            color1="#047857"
            color2="#14b8a6"
            size={1.8}
            speed={0.8}
          />

          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-carbon-950/30 via-transparent to-carbon-950/50 pointer-events-none" />

          <div className="relative container-wide py-16 sm:py-20 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="hero-badge inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm mb-6 sm:mb-8"
                >
                  <Microscope className="w-4 h-4 text-forest-400" />
                  <span className="text-xs sm:text-sm font-medium text-carbon-200">
                    Agricultural Biotechnology Solutions
                  </span>
                </motion.div>

                <h1 className="hero-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight mb-4 sm:mb-6">
                  Increase Yields{" "}
                  <span className="bg-gradient-to-r from-forest-400 via-microbe-400 to-moss-400 bg-clip-text text-transparent">
                    Up to 40%
                  </span>{" "}
                  Naturally
                </h1>

                <p className="hero-subheadline text-base sm:text-lg lg:text-xl text-carbon-300 mb-6 sm:mb-8 max-w-xl leading-relaxed">
                  14+ years of proven results across 19 Indonesian provinces. Our university-researched 
                  biotechnology products reduce chemical inputs by 50% while boosting productivity. 
                  Free consultation included.
                </p>

                <div className="hero-cta flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <Link
                    href="/en/contact"
                    className="w-full sm:w-auto text-center justify-center btn-primary group bg-forest-500 hover:bg-forest-400 px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base"
                  >
                    <span>Free Expert Consultation</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="/en/solutions" className="w-full sm:w-auto text-center justify-center btn-secondary border-white/20 text-white hover:bg-white/10 px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base">
                    See Proven Results
                  </Link>
                </div>

                {/* Trust Signals */}
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-carbon-300">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-forest-400" />
                    Free Consultation
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-forest-400" />
                    24h Response
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-forest-400" />
                    Satisfaction Guaranteed
                  </span>
                </div>

                {/* Business Partner CTA */}
                <div className="hero-cta">
                  <a
                    href="https://wa.me/6285742249591?text=Hello%20Biosolution%2C%20I%27m%20interested%20in%20exploring%20a%20business%20partnership%20for%20biotechnology%20products.%20Could%20we%20schedule%20a%20consultation%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-4 sm:px-5 py-3 bg-gradient-to-r from-forest-600/20 to-microbe-600/20 border border-forest-500/30 rounded-xl hover:border-forest-400/50 transition-colors group"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-forest-500/20 rounded-lg flex items-center justify-center group-hover:bg-forest-500/30 transition-colors shrink-0">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-forest-400" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-carbon-400">Become a Business Partner</p>
                      <p className="text-xs sm:text-sm font-medium text-white">+62 857-4224-9591</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div ref={statsRef} className="grid grid-cols-2 gap-3 sm:gap-4">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="stat-item bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-colors"
                  >
                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-forest-400 mb-2 sm:mb-3" />
                    <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-carbon-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 lg:py-28 bg-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 px-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-carbon-900 mb-4 sm:mb-6">
                Why 1,000+ Partners Trust Us
              </h2>
              <p className="text-base sm:text-lg text-carbon-600">
                Not just claims—every result backed by university research, Ministry of Agriculture 
                registration, and measurable ROI from real farms.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gradient-to-br from-forest-50 to-white border border-forest-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-forest-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                    <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-forest-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-carbon-900 mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-carbon-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Trust-Building Visual Section */}
            <div className="mt-14 sm:mt-20 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6 sm:space-y-8"
              >
                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-carbon-900 mb-3 sm:mb-4">
                    Research-Driven Innovation
                  </h3>
                  <p className="text-base sm:text-lg text-carbon-600 leading-relaxed">
                    Our state-of-the-art laboratory facilities and partnerships with leading Indonesian universities ensure every product is backed by rigorous scientific research and field testing.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-white rounded-xl p-4 sm:p-6 border border-forest-100">
                    <div className="text-2xl sm:text-3xl font-bold text-forest-600 mb-1">14+</div>
                    <div className="text-xs sm:text-sm text-carbon-600">Years Experience</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-microbe-100">
                    <div className="text-3xl font-bold text-microbe-600 mb-1">8+</div>
                    <div className="text-sm text-carbon-600">Research Products</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/LaboratoryProduction Facility.png"
                  alt="Laboratory & Production Facility"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1"
              >
                <Image
                  src="/images/Field Trial Articles.png"
                  alt="Field Trials & Research"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8 order-1 md:order-2"
              >
                <div>
                  <h3 className="text-3xl font-display font-bold text-carbon-900 mb-4">
                    Proven in the Field
                  </h3>
                  <p className="text-lg text-carbon-600 leading-relaxed">
                    Every formula undergoes extensive field trials across diverse Indonesian agricultural conditions. We work directly with farmers to ensure real-world effectiveness and sustainability.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-6 border border-forest-100">
                    <div className="text-3xl font-bold text-forest-600 mb-1">19</div>
                    <div className="text-sm text-carbon-600">Provinces Served</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-microbe-100">
                    <div className="text-3xl font-bold text-microbe-600 mb-1">1000+</div>
                    <div className="text-sm text-carbon-600">Partner Farmers</div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-3xl font-display font-bold text-carbon-900 mb-4">
                    Comprehensive Support Network
                  </h3>
                  <p className="text-lg text-carbon-600 leading-relaxed">
                    From farmer training programs to technical support and nationwide distribution, we ensure our partners have everything they need for success with our biotechnology solutions.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-forest-600" />
                  <span className="text-carbon-700">Free farmer training programs</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-forest-600" />
                  <span className="text-carbon-700">24/7 technical support</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-forest-600" />
                  <span className="text-carbon-700">Nationwide distribution network</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/Distribution Network.png"
                  alt="Distribution & Support Network"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-32 bg-gradient-to-br from-forest-50 to-microbe-50 relative overflow-hidden">
          <div className="container-custom relative">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-100 text-forest-800 text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                Real Success Stories
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-carbon-900">
                Proven Results
                <span className="block mt-2 bg-gradient-to-r from-forest-600 to-microbe-600 bg-clip-text text-transparent">
                  Across Indonesia
                </span>
              </h2>
              <p className="text-xl text-carbon-600">
                Thousands of farmers and companies trust BIOSOL for sustainable agricultural solutions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Case Study 1 */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="/images/Corn Farm Success Story.png"
                    alt="Corn Farm Success"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white/90 text-sm mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>Central Java</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-carbon-900 mb-3 group-hover:text-forest-600 transition-colors">
                    Corn Revolution
                  </h3>
                  <p className="text-carbon-600 mb-6 leading-relaxed">
                    Corn farmers in Wonosobo increased their yield by 42% while reducing chemical pesticide use by 65% using our bio-pesticide formula.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-forest-50 rounded-xl p-4">
                      <div className="text-3xl font-bold text-forest-600 mb-1">+42%</div>
                      <div className="text-sm text-carbon-600">Yield Increase</div>
                    </div>
                    <div className="bg-microbe-50 rounded-xl p-4">
                      <div className="text-3xl font-bold text-microbe-600 mb-1">-65%</div>
                      <div className="text-sm text-carbon-600">Pesticide Reduction</div>
                    </div>
                  </div>
                  <Link href="/en/news/fall-armyworm-control-formula" className="group/btn flex items-center gap-2 text-forest-600 font-medium hover:gap-3 transition-all">
                    <span>Read Full Story</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Case Study 2 */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="/images/Rice Field Success Story.png"
                    alt="Rice Field Success"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white/90 text-sm mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>East Java</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-carbon-900 mb-3 group-hover:text-forest-600 transition-colors">
                    Organic Rice Transformation
                  </h3>
                  <p className="text-carbon-600 mb-6 leading-relaxed">
                    Rice farmers in Jember successfully transitioned to organic farming with our biological fertilizer system, earning premium prices.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-forest-50 rounded-xl p-4">
                      <div className="text-3xl font-bold text-forest-600 mb-1">+38%</div>
                      <div className="text-sm text-carbon-600">Revenue Growth</div>
                    </div>
                    <div className="bg-microbe-50 rounded-xl p-4">
                      <div className="text-3xl font-bold text-microbe-600 mb-1">100%</div>
                      <div className="text-sm text-carbon-600">Organic Certified</div>
                    </div>
                  </div>
                  <Link href="/en/news/organic-rice-paddy-formula" className="group/btn flex items-center gap-2 text-forest-600 font-medium hover:gap-3 transition-all">
                    <span>Read Full Story</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Case Study 3 */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="/images/Shrimp Farm Success Story.png"
                    alt="Shrimp Farm Success"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white/90 text-sm mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>West Java</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-carbon-900 mb-3 group-hover:text-forest-600 transition-colors">
                    Shrimp Farming Excellence
                  </h3>
                  <p className="text-carbon-600 mb-6 leading-relaxed">
                    Shrimp farmers in Indramayu improved survival rates and water quality with our aquaculture probiotic solutions.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-forest-50 rounded-xl p-4">
                      <div className="text-3xl font-bold text-forest-600 mb-1">+52%</div>
                      <div className="text-sm text-carbon-600">Survival Rate</div>
                    </div>
                    <div className="bg-microbe-50 rounded-xl p-4">
                      <div className="text-3xl font-bold text-microbe-600 mb-1">-70%</div>
                      <div className="text-sm text-carbon-600">Disease Cases</div>
                    </div>
                  </div>
                  <Link href="/en/news/vannamei-shrimp-farming-situbondo" className="group/btn flex items-center gap-2 text-forest-600 font-medium hover:gap-3 transition-all">
                    <span>Read Full Story</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-moss-50/30 to-white">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-carbon-900 mb-6">
                Our Solutions
              </h2>
              <p className="text-lg text-carbon-600">
                Comprehensive biotechnology solutions for plant biosecurity and animal health.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {industries.map((industry, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-white border border-carbon-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group"
                >
                  <h3 className="text-2xl font-display font-bold text-carbon-900 mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-forest-600 font-medium mb-4">{industry.subtitle}</p>
                  <p className="text-carbon-600 mb-6">{industry.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {industry.products.map((product) => (
                      <span
                        key={product}
                        className="px-3 py-1 bg-forest-50 text-forest-700 text-sm rounded-full"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={industry.href}
                    className="inline-flex items-center gap-2 text-forest-600 font-medium group-hover:text-forest-500 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-r from-forest-600 to-forest-700">
          <div className="container-wide text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                Ready to Transform Your Agricultural Business?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Join our network of partners across 19 provinces. Let us help you 
                achieve sustainable growth with our proven biotechnology solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/en/contact"
                  className="btn-primary bg-white text-forest-700 hover:bg-white/90"
                >
                  Contact Our Team
                </Link>
                <Link
                  href="/en/research"
                  className="btn-secondary border-white/30 text-white hover:bg-white/10"
                >
                  View Research
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterEN />
    </GSAPProvider>
  );
}

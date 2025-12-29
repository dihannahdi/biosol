"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Link from "next/link";
import { GSAPProvider } from "@/lib/gsap-provider";
import { HeaderEN as Header, FooterEN as Footer } from "@/components/layout/en";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Users,
  Award,
  FlaskConical,
  Building2,
  GraduationCap,
  Lightbulb,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// AJAIB - Biosolution Core Values
const values = [
  {
    icon: Heart,
    title: "Amanah (Trustworthy)",
    description: "Bearing trust with full responsibility. Every product and service reflects our commitment to partners.",
  },
  {
    icon: Award,
    title: "Jujur (Honest)",
    description: "Integrity in every interaction. We communicate facts transparently to partners and customers.",
  },
  {
    icon: Lightbulb,
    title: "Antusias (Enthusiastic)",
    description: "High spirit in developing the best biotechnology solutions for Indonesian agriculture.",
  },
  {
    icon: FlaskConical,
    title: "Inisiatif (Initiative)",
    description: "Proactive in research and innovation. We continuously seek new ways to improve agricultural outcomes.",
  },
  {
    icon: Eye,
    title: "Berwawasan (Visionary)",
    description: "Long-term vision for sustainable agriculture and the welfare of Indonesian farmers.",
  },
];

// Biosolution Journey since 2010
const milestones = [
  { year: "2010", title: "Biosolution Founded", description: "Established on February 10, 2010 in Klaten, Central Java by Bintang Sediyoadi Putra." },
  { year: "2012", title: "Ministry Registration", description: "First product obtained official registration from the Ministry of Agriculture" },
  { year: "2015", title: "University Research Collaboration", description: "Initiated research partnerships with IPB and Brawijaya University" },
  { year: "2018", title: "Organic Certification", description: "Obtained national organic certification and KAN accreditation" },
  { year: "2021", title: "National Expansion", description: "Expanded distribution to 15 provinces across Indonesia" },
  { year: "2024", title: "19 Provinces Covered", description: "Now serving partners and customers in 19 provinces with 14+ years of experience" },
];

// Biosolution Founder - verified data only
const team = [
  {
    name: "Bintang Sediyoadi Putra",
    role: "Founder & Owner",
    bio: "Founded Biosolution on February 10, 2010 with a vision to bring sustainable biotechnology solutions to Indonesia.",
  },
];

export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".about-hero-content > *",
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

  return (
    <GSAPProvider>
      <Header />

      <main>
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-forest-50 to-white overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-forest-200/40 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-microbe-200/30 rounded-full blur-[80px]" />
          </div>

          <div className="relative container-wide">
            <div className="about-hero-content max-w-4xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-forest-100 border border-forest-200 rounded-full text-sm font-medium text-forest-700 mb-6">
                <Building2 className="w-4 h-4" />
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-carbon-900 mb-6 leading-tight">
                14 Years Proving{" "}
                <span className="bg-gradient-to-r from-forest-600 to-microbe-500 bg-clip-text text-transparent">
                  Microbial Power
                </span>{" "}
                for Indonesian Agriculture
              </h1>
              <p className="text-lg md:text-xl text-carbon-600 mb-8 leading-relaxed">
                Since February 10, 2010, thousands of farmers and livestock producers across 19 provinces 
                have increased yields up to 40% using our university-researched biotechnology. 
                Not claims—measurable results with R/C Ratio up to 2.02.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/en/contact" className="btn-primary">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/en/solutions" className="btn-secondary">
                  View Our Solutions
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-forest-50 to-moss-50 rounded-3xl p-8 lg:p-12"
              >
                <div className="w-14 h-14 bg-forest-100 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-forest-600" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-carbon-900 mb-4">
                  Vision 2035
                </h2>
                <p className="text-carbon-600 text-lg leading-relaxed">
                  TOP 3 biofertilizer producer in Indonesia, empowering 100,000+ farmers and 
                  livestock producers with proven, sustainable biotechnology. Not just selling products—transforming 
                  Indonesian agriculture.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-microbe-50 to-forest-50 rounded-3xl p-8 lg:p-12"
              >
                <div className="w-14 h-14 bg-microbe-100 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-microbe-600" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-carbon-900 mb-4">
                  Our Mission
                </h2>
                <ul className="space-y-3 text-carbon-600">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-microbe-500 rounded-full mt-2.5 shrink-0" />
                    Develop high-quality biotechnology products based on research
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-microbe-500 rounded-full mt-2.5 shrink-0" />
                    Empower farmers with accessible and affordable technology
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-microbe-500 rounded-full mt-2.5 shrink-0" />
                    Support the transition to organic and sustainable agriculture
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-microbe-500 rounded-full mt-2.5 shrink-0" />
                    Collaborate with stakeholders for broader impact
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-forest-50/50">
          <div className="container-wide">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-carbon-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-carbon-600">
                Principles that guide every step and decision in developing biotechnology solutions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white border border-carbon-100 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-forest-600" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-carbon-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-carbon-600">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 lg:py-28 bg-carbon-950 text-white">
          <div className="container-wide">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                Our Journey
              </h2>
              <p className="text-carbon-400">
                From a small startup in Klaten to reaching all of Indonesia.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-carbon-800" />

              <div className="space-y-8">
                {milestones.map((milestone, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center gap-6 ${
                      i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"} pl-12 lg:pl-0`}>
                      <span className="text-forest-400 font-mono text-sm">{milestone.year}</span>
                      <h3 className="font-display font-bold text-xl text-white mt-1 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-carbon-400 text-sm">{milestone.description}</p>
                    </div>
                    <div className="absolute left-4 lg:left-1/2 w-3 h-3 bg-forest-500 rounded-full -translate-x-1/2 ring-4 ring-carbon-950" />
                    <div className="hidden lg:block flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container-wide">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-forest-50 border border-forest-200 rounded-full text-sm font-medium text-forest-700 mb-6">
                <Users className="w-4 h-4" />
                Leadership
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-carbon-900 mb-4">
                Biosolution Founder
              </h2>
              <p className="text-carbon-600">
                Founded by an experienced practitioner with high dedication to the advancement of Indonesian agriculture.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              {team.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gradient-to-br from-forest-50 to-white border border-forest-100 rounded-2xl p-6 text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-forest-200 to-microbe-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-forest-700" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-carbon-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-forest-600 text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-carbon-500 text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </GSAPProvider>
  );
}

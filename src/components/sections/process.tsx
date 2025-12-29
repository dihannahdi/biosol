"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { CheckCircle2, Leaf, Recycle, Shield, Zap, TreeDeciduous, Droplet } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: 1,
    title: "Isolasi Mikroba",
    description: "Kami mengisolasi mikroba menguntungkan dari ekosistem alami Indonesia yang kaya biodiversitas.",
    icon: TreeDeciduous,
    detail: "100+ strain lokal",
  },
  {
    id: 2,
    title: "Riset & Pengembangan",
    description: "Tim ilmuwan kami meneliti dan mengoptimalkan formulasi untuk kondisi iklim tropis Indonesia.",
    icon: Shield,
    detail: "Lab tersertifikasi",
  },
  {
    id: 3,
    title: "Produksi Massal",
    description: "Fasilitas fermentasi modern dengan kontrol kualitas ketat untuk menghasilkan produk berkualitas tinggi.",
    icon: Zap,
    detail: "Kapasitas 50 ton/bulan",
  },
  {
    id: 4,
    title: "Distribusi Nasional",
    description: "Jaringan distribusi yang luas menjangkau petani dan pelaku industri di seluruh Indonesia.",
    icon: Recycle,
    detail: "34 provinsi",
  },
];

const benefits = [
  "Mengurangi ketergantungan pada pupuk kimia",
  "Meningkatkan kesuburan tanah jangka panjang",
  "Aman untuk lingkungan dan pengguna",
  "Meningkatkan ketahanan tanaman terhadap penyakit",
  "Mendukung pertanian organik berkelanjutan",
  "Biaya lebih efisien dalam jangka panjang",
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || !timelineRef.current) return;

      // Progress line animation
      gsap.fromTo(
        progressRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        }
      );

      // Step cards animation
      const stepCards = timelineRef.current.querySelectorAll(".step-card");
      stepCards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { x: i % 2 === 0 ? -80 : 80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-gradient-to-b from-carbon-950 to-carbon-900 text-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-forest-500/50 to-transparent" />
        <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-forest-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 -right-32 w-[400px] h-[400px] bg-microbe-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-forest-400 mb-6"
          >
            <Leaf className="w-4 h-4" />
            Dari Alam, Untuk Alam
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
          >
            Proses Inovasi{" "}
            <span className="bg-gradient-to-r from-forest-400 to-microbe-400 bg-clip-text text-transparent">
              Bioteknologi
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-carbon-400"
          >
            Setiap produk kami melewati proses riset dan pengembangan yang ketat untuk memastikan kualitas dan efektivitas tertinggi.
          </motion.p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-5xl mx-auto mb-20">
          {/* Progress Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-carbon-800 -translate-x-1/2 hidden lg:block">
            <div
              ref={progressRef}
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-forest-500 to-microbe-500 origin-top"
              style={{ height: "100%" }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 0;

              return (
                <div
                  key={step.id}
                  className={`step-card relative lg:flex items-center ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } lg:py-8`}
                >
                  {/* Content Card */}
                  <div className={`lg:w-1/2 ${isEven ? "lg:pr-16 lg:text-right" : "lg:pl-16"}`}>
                    <div className="bg-carbon-800/50 border border-carbon-700/50 rounded-2xl p-6 lg:p-8 backdrop-blur-sm">
                      <div className={`flex items-center gap-4 mb-4 ${isEven ? "lg:justify-end" : ""}`}>
                        <div className="w-12 h-12 bg-gradient-to-br from-forest-500/20 to-microbe-500/20 rounded-xl flex items-center justify-center border border-forest-500/30">
                          <Icon className="w-6 h-6 text-forest-400" />
                        </div>
                        <span className="text-sm text-forest-400 font-mono">
                          Step 0{step.id}
                        </span>
                      </div>
                      <h3 className="text-xl lg:text-2xl font-display font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-carbon-400 mb-4">{step.description}</p>
                      <span className="inline-block px-3 py-1 bg-forest-500/20 text-forest-400 rounded-full text-sm">
                        {step.detail}
                      </span>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-carbon-900 border-4 border-forest-500 rounded-full items-center justify-center z-10">
                    <span className="text-sm font-bold text-forest-400">{step.id}</span>
                  </div>

                  {/* Empty Space */}
                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 px-5 py-4 bg-carbon-800/30 border border-carbon-700/50 rounded-xl"
            >
              <CheckCircle2 className="w-5 h-5 text-forest-500 shrink-0" />
              <span className="text-carbon-300">{benefit}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

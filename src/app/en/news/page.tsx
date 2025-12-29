"use client";

import { useRef, useState, useMemo } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";
import Link from "next/link";
import { GSAPProvider } from "@/lib/gsap-provider";
import { HeaderEN as Header, FooterEN as Footer } from "@/components/layout/en";
import {
  ArrowRight,
  Calendar,
  Clock,
  TrendingUp,
  MapPin,
  Newspaper,
} from "lucide-react";
import { articlesEN } from "@/lib/articles-data";

// Use centralized articles data with benefit-based naming
const caseStudies = articlesEN;

const categories = ["All", "Plant Biosecurity", "Animal Health", "Aquaculture"];

export default function NewsPage() {
  const heroRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const ITEMS_PER_PAGE = 6;

  useGSAP(
    () => {
      gsap.fromTo(
        ".news-hero-content > *",
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

  const featuredStudies = caseStudies.filter((s) => s.featured);
  
  // Filter case studies based on active category
  const filteredStudies = useMemo(() => {
    if (activeCategory === "All") return caseStudies;
    return caseStudies.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  // Get visible studies based on visibleCount
  const visibleStudies = useMemo(() => {
    return filteredStudies.slice(0, visibleCount);
  }, [filteredStudies, visibleCount]);

  const hasMoreStudies = visibleCount < filteredStudies.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  // Reset visible count when category changes
  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(6);
  };

  return (
    <GSAPProvider>
      <Header />

      <main>
        {/* Hero */}
        <section
          ref={heroRef}
          className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-b from-carbon-950 to-carbon-900 text-white overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-forest-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-microbe-500/10 rounded-full blur-[100px]" />
          </div>

          <div className="relative container-wide">
            <div className="news-hero-content text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-forest-400 mb-6">
                <Newspaper className="w-4 h-4" />
                Case Studies & News
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Real{" "}
                <span className="bg-gradient-to-r from-forest-400 to-microbe-400 bg-clip-text text-transparent">
                  Success Stories
                </span>
              </h1>
              <p className="text-lg text-carbon-400">
                Discover how our clients achieve extraordinary results with our biotechnology solutions through case studies and latest articles.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-wide">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-carbon-900">
                Featured Case Studies
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {featuredStudies.map((study, index) => (
                <motion.article
                  key={study.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group relative rounded-3xl overflow-hidden ${
                    index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                  }`}
                >
                  <Link href={`/en/news/${study.slug}`} className="block h-full">
                    <div
                      className={`relative h-full ${
                        index === 0 ? "min-h-[500px]" : "min-h-[280px]"
                      } bg-gradient-to-br from-forest-600 to-carbon-900 p-8 flex flex-col justify-end`}
                    >
                      {/* Background Pattern */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(34,197,94,0.2),transparent_50%)]" />

                      {/* Category Badge */}
                      <span className="absolute top-6 left-6 px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                        {study.category}
                      </span>

                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 text-white/60 text-sm mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(study.date).toLocaleDateString("en-US", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {study.location}
                          </span>
                        </div>

                        <h3
                          className={`font-display font-bold text-white group-hover:text-forest-300 transition-colors mb-3 ${
                            index === 0 ? "text-2xl lg:text-3xl" : "text-xl"
                          }`}
                        >
                          {study.title}
                        </h3>

                        <p className="text-white/70 text-sm mb-4 line-clamp-2">
                          {study.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-forest-400" />
                            <span className="text-forest-400 font-semibold">
                              {study.stats.improvement}
                            </span>
                          </div>
                          <span className="text-white/60 group-hover:text-white flex items-center gap-1 transition-colors">
                            Read more
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* All Case Studies */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-forest-50/30">
          <div className="container-wide">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10">
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-carbon-900">
                All Case Studies
              </h2>

              <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    aria-pressed={activeCategory === cat}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 focus-visible:ring-offset-2 ${
                      activeCategory === cat
                        ? "bg-forest-600 text-white"
                        : "bg-forest-50 text-forest-700 hover:bg-forest-100"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleStudies.length === 0 ? (
                <div className="col-span-full text-center py-12">
                  <p className="text-carbon-500">No case studies found in this category.</p>
                </div>
              ) : (
                visibleStudies.map((study, index) => (
                <motion.article
                  key={study.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-white border border-carbon-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <Link href={`/en/news/${study.slug}`}>
                    {/* Image placeholder */}
                    <div className="h-48 bg-gradient-to-br from-forest-100 to-microbe-50 flex items-center justify-center">
                      <span className="px-3 py-1 bg-white/80 text-forest-700 text-sm font-medium rounded-full">
                        {study.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-sm text-carbon-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(study.date).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {study.readTime}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-lg text-carbon-900 group-hover:text-forest-600 transition-colors mb-2 line-clamp-2">
                        {study.title}
                      </h3>

                      <p className="text-carbon-600 text-sm line-clamp-2 mb-4">
                        {study.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-carbon-100">
                        <div className="flex items-center gap-1 text-sm">
                          <TrendingUp className="w-4 h-4 text-forest-500" />
                          <span className="text-forest-600 font-semibold">
                            {study.stats.improvement}
                          </span>
                        </div>
                        <span className="text-forest-600 flex items-center gap-1 text-sm font-medium">
                          Read
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))
              )}
            </div>

            {/* Load More */}
            {hasMoreStudies && (
              <div className="text-center mt-12">
                <button 
                  onClick={handleLoadMore}
                  className="btn-secondary"
                >
                  Load More ({filteredStudies.length - visibleCount} remaining)
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </GSAPProvider>
  );
}

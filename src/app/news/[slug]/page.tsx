"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  TrendingUp,
  Users,
  Leaf,
  Share2,
  CheckCircle2,
  Beaker,
  BookOpen,
  MessageCircle,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { getArticleBySlug, articles } from "@/lib/articles-data";
import { notFound } from "next/navigation";
import { MarkdownRenderer } from "@/components/ui/markdown-renderer";
import { Header, Footer } from "@/components/layout";

gsap.registerPlugin(ScrollTrigger);

interface PageProps {
  params: { slug: string };
}

export default function NewsDetailPage({ params }: PageProps) {
  const slug = params.slug;
  const containerRef = useRef<HTMLDivElement>(null);

  const article = slug ? getArticleBySlug(slug) : null;

  useEffect(() => {
    if (!containerRef.current || !article) return;

    const ctx = gsap.context(() => {
      // Animate content sections
      gsap.fromTo(
        ".content-section",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [article]);

  if (!article) {
    notFound();
  }

  // Get related articles
  const relatedArticles = articles
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, 3);

  return (
    <>
      <Header />
      
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.excerpt,
            datePublished: article.date,
            dateModified: article.date,
            author: {
              "@type": "Organization",
              name: "Biosolution Indonesia",
              url: "https://www.biosolution.tech",
            },
            publisher: {
              "@type": "Organization",
              name: "Biosolution Indonesia",
              logo: {
                "@type": "ImageObject",
                url: "https://www.biosolution.tech/logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://www.biosolution.tech/news/${article.slug}`,
            },
            articleSection: article.category,
            keywords: [
              "bioteknologi pertanian",
              "pertanian organik",
              "biosekuriti tanaman",
              article.productName,
              article.benefitTitle,
            ],
          }),
        }}
      />

      <div
        ref={containerRef}
        className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950"
      >
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Breadcrumb */}
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-100 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Kembali ke Berita</span>
              </Link>
            </motion.nav>

            {/* Article Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-4xl"
            >
              <span className="inline-block px-4 py-1.5 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium border border-emerald-500/30 mb-6">
                {article.category}
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {article.title}
              </h1>

              <p className="text-xl text-emerald-100/80 mb-8 leading-relaxed">
                {article.excerpt}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-6 text-emerald-200/70">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(article.date).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime} baca</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{article.location}</span>
                </div>
              </div>
            </motion.div>
            
            {/* Featured Image */}
            {article.image && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-10 max-w-4xl"
              >
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-emerald-700/30">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Stats Banner */}
        <section className="py-8 bg-emerald-900/50 border-y border-emerald-700/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                  <span className="text-2xl font-bold text-white">
                    {article.stats.improvement}
                  </span>
                </div>
                <span className="text-sm text-emerald-300/70">Hasil</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Leaf className="w-5 h-5 text-emerald-400" />
                  <span className="text-2xl font-bold text-white">
                    {article.stats.area}
                  </span>
                </div>
                <span className="text-sm text-emerald-300/70">Area</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-emerald-400" />
                  <span className="text-2xl font-bold text-white">
                    {article.stats.farmers}
                  </span>
                </div>
                <span className="text-sm text-emerald-300/70">Keunggulan</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Article Content */}
              <div className="lg:col-span-2">
                <article className="content-section">
                  <MarkdownRenderer content={article.fullContent} />
                </article>

                {/* Benefits Section */}
                {article.benefits && (
                  <div className="content-section mt-12 p-8 bg-emerald-900/30 rounded-2xl border border-emerald-700/30">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                      Manfaat Utama
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {article.benefits.map((benefit, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 text-emerald-100"
                        >
                          <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Ingredients Section */}
                {article.ingredients && (
                  <div className="content-section mt-8 p-8 bg-teal-900/30 rounded-2xl border border-teal-700/30">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                      <Beaker className="w-6 h-6 text-teal-400" />
                      Kandungan Aktif
                    </h3>
                    <ul className="space-y-3">
                      {article.ingredients.map((ingredient, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-3 text-teal-100"
                        >
                          <div className="w-2 h-2 bg-teal-400 rounded-full" />
                          <span>{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Usage Section */}
                {article.usage && (
                  <div className="content-section mt-8 p-8 bg-cyan-900/30 rounded-2xl border border-cyan-700/30">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                      <BookOpen className="w-6 h-6 text-cyan-400" />
                      Cara Penggunaan
                    </h3>
                    <p className="text-cyan-100">{article.usage}</p>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                {/* Product Card */}
                <div className="content-section sticky top-24 space-y-8">
                  <div className="p-6 bg-gradient-to-br from-emerald-800/50 to-teal-800/50 rounded-2xl border border-emerald-600/30">
                    <div className="text-sm text-emerald-400 mb-2">
                      Produk Terkait
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {article.productName}
                    </h3>
                    <p className="text-emerald-100/70 mb-6">
                      {article.benefitTitle}
                    </p>
                    <Link
                      href="/solutions/plant"
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors"
                    >
                      Lihat Produk
                    </Link>
                  </div>

                  {/* Share */}
                  <div className="p-6 bg-emerald-900/30 rounded-2xl border border-emerald-700/30">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <Share2 className="w-5 h-5" />
                      Bagikan Artikel
                    </h4>
                    <div className="flex gap-3">
                      <a 
                        href={`https://wa.me/?text=${encodeURIComponent(article.title + " - " + "https://www.biosolution.tech/news/" + article.slug)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 px-4 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors text-sm font-medium flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </a>
                      <a 
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://www.biosolution.tech/news/" + article.slug)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors text-sm font-medium flex items-center justify-center gap-2"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </a>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="p-6 bg-gradient-to-br from-teal-700/50 to-cyan-700/50 rounded-2xl border border-teal-500/30">
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Butuh Konsultasi?
                    </h4>
                    <p className="text-teal-100/70 text-sm mb-4">
                      Tim ahli kami siap membantu kebutuhan bioteknologi Anda
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-colors border border-white/20"
                    >
                      Hubungi Kami
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-16 bg-emerald-950/50">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-white mb-8">
                Artikel Terkait
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((related, index) => (
                  <motion.article
                    key={related.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      href={`/news/${related.slug}`}
                      className="block p-6 bg-emerald-900/30 rounded-xl border border-emerald-700/30 hover:border-emerald-500/50 transition-all group"
                    >
                      <span className="text-xs text-emerald-400 font-medium">
                        {related.category}
                      </span>
                      <h3 className="text-lg font-semibold text-white mt-2 mb-3 group-hover:text-emerald-300 transition-colors line-clamp-2">
                        {related.benefitTitle}
                      </h3>
                      <p className="text-emerald-100/60 text-sm line-clamp-2">
                        {related.excerpt}
                      </p>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
      
      <Footer />
    </>
  );
}

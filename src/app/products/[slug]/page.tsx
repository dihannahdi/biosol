"use client";

import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { GSAPProvider } from "@/lib/gsap-provider";
import { Header, Footer } from "@/components/layout";
import { products, getProductBySlug } from "@/lib/products-data";
import {
  generateProductSchema,
  generateBreadcrumbSchema,
  JsonLdScript,
} from "@/lib/schema";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Beaker,
  Target,
  Leaf,
  Clock,
  Shield,
  Star,
  MessageCircle,
  ChevronDown,
  Package,
  AlertTriangle,
  FlaskConical,
  Send,
  User,
  Mail,
  Building2,
  FileText,
} from "lucide-react";

interface ProductPageProps {
  params: { slug: string };
}

// Accordion Component
function Accordion({ 
  title, 
  icon: Icon, 
  children, 
  defaultOpen = false,
  accentColor = "forest"
}: { 
  title: string; 
  icon: React.ElementType;
  children: React.ReactNode;
  defaultOpen?: boolean;
  accentColor?: "forest" | "microbe" | "amber";
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  const colorClasses = {
    forest: {
      bg: "bg-forest-50",
      border: "border-forest-200",
      icon: "text-forest-600",
      hover: "hover:bg-forest-100",
      headerBg: "bg-forest-600",
      headerText: "text-white",
    },
    microbe: {
      bg: "bg-microbe-50",
      border: "border-microbe-200",
      icon: "text-microbe-600",
      hover: "hover:bg-microbe-100",
      headerBg: "bg-microbe-600",
      headerText: "text-white",
    },
    amber: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      icon: "text-amber-600",
      hover: "hover:bg-amber-100",
      headerBg: "bg-amber-600",
      headerText: "text-white",
    },
  };
  
  const colors = colorClasses[accentColor];

  return (
    <div className={`rounded-2xl overflow-hidden border ${colors.border} shadow-sm`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-5 ${colors.headerBg} ${colors.headerText} transition-colors`}
      >
        <div className="flex items-center gap-3">
          <Icon className="w-6 h-6" />
          <span className="text-lg font-display font-bold">{title}</span>
        </div>
        <ChevronDown 
          className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className={`p-6 ${colors.bg}`}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Sample Request Form Component
function SampleRequestForm({ productName }: { productName: string }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    affiliation: "",
    details: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct WhatsApp message
    const message = `*Permintaan Sampel Produk*%0A%0A` +
      `Produk: ${productName}%0A` +
      `Nama: ${formData.firstName} ${formData.lastName}%0A` +
      `Email: ${formData.email}%0A` +
      `Afiliasi: ${formData.affiliation}%0A` +
      `Detail: ${formData.details}`;
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/6285742249591?text=${message}`, '_blank');
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-forest-50 to-microbe-50 rounded-3xl p-8 text-center"
      >
        <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-forest-600" />
        </div>
        <h3 className="text-xl font-display font-bold text-carbon-900 mb-2">
          Terima Kasih!
        </h3>
        <p className="text-carbon-600">
          WhatsApp telah terbuka. Silakan kirim pesan untuk melanjutkan permintaan sampel Anda.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-carbon-700 mb-2">
            <User className="w-4 h-4 text-forest-600" />
            Nama Depan
          </label>
          <input
            type="text"
            required
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-carbon-200 focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors bg-white"
            placeholder="Masukkan nama depan"
          />
        </div>
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold text-carbon-700 mb-2">
            <User className="w-4 h-4 text-forest-600" />
            Nama Belakang
          </label>
          <input
            type="text"
            required
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-carbon-200 focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors bg-white"
            placeholder="Masukkan nama belakang"
          />
        </div>
      </div>

      <div>
        <label className="flex items-center gap-2 text-sm font-semibold text-carbon-700 mb-2">
          <Mail className="w-4 h-4 text-forest-600" />
          Email
        </label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-carbon-200 focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors bg-white"
          placeholder="nama@email.com"
        />
      </div>

      <div>
        <label className="flex items-center gap-2 text-sm font-semibold text-carbon-700 mb-2">
          <Building2 className="w-4 h-4 text-forest-600" />
          Afiliasi Profesional
        </label>
        <select
          required
          value={formData.affiliation}
          onChange={(e) => setFormData({ ...formData, affiliation: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-carbon-200 focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors bg-white appearance-none cursor-pointer"
        >
          <option value="">Pilih afiliasi Anda</option>
          <option value="Petani / Peternak">Petani / Peternak</option>
          <option value="Kelompok Tani">Kelompok Tani</option>
          <option value="Distributor / Reseller">Distributor / Reseller</option>
          <option value="Perusahaan Pertanian">Perusahaan Pertanian</option>
          <option value="Perusahaan Peternakan">Perusahaan Peternakan</option>
          <option value="Perusahaan Perikanan">Perusahaan Perikanan</option>
          <option value="Industri / Manufaktur">Industri / Manufaktur</option>
          <option value="Hotel / Hospitality">Hotel / Hospitality</option>
          <option value="Peneliti / Akademisi">Peneliti / Akademisi</option>
          <option value="Pemerintah / Dinas">Pemerintah / Dinas</option>
          <option value="Lainnya">Lainnya</option>
        </select>
      </div>

      <div>
        <label className="flex items-center gap-2 text-sm font-semibold text-carbon-700 mb-2">
          <FileText className="w-4 h-4 text-forest-600" />
          Detail Permintaan
        </label>
        <textarea
          rows={4}
          value={formData.details}
          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-carbon-200 focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors bg-white resize-none"
          placeholder="Jelaskan kebutuhan Anda, luas lahan, jenis tanaman/ternak, atau pertanyaan lainnya..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-forest-600 to-forest-700 text-white rounded-xl font-semibold text-lg hover:from-forest-700 hover:to-forest-800 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Mengirim...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Ajukan Permintaan Sampel
          </>
        )}
      </button>
    </form>
  );
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 2);

  const breadcrumbData = generateBreadcrumbSchema([
    { name: "Beranda", url: "https://www.biosolution.tech" },
    { name: "Produk", url: "https://www.biosolution.tech/products" },
    { name: product.benefitTitle, url: `https://www.biosolution.tech/products/${product.slug}` },
  ]);

  const productSchema = generateProductSchema({
    name: product.name,
    description: product.description,
    category: product.categoryLabel,
  });

  return (
    <GSAPProvider>
      <Header />

      {/* JSON-LD Schema */}
      <JsonLdScript data={breadcrumbData} />
      <JsonLdScript data={productSchema} />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 lg:py-20 bg-gradient-to-br from-forest-50 via-white to-microbe-50">
          <div className="container-wide">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center gap-2 text-sm">
                <li>
                  <Link href="/" className="text-carbon-500 hover:text-forest-600 transition-colors">
                    Beranda
                  </Link>
                </li>
                <li className="text-carbon-300">/</li>
                <li>
                  <Link href="/products" className="text-carbon-500 hover:text-forest-600 transition-colors">
                    Produk
                  </Link>
                </li>
                <li className="text-carbon-300">/</li>
                <li className="text-forest-600 font-medium">{product.benefitTitle}</li>
              </ol>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Product Info */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 bg-forest-100 text-forest-700 rounded-full text-sm font-medium mb-4">
                  {product.categoryLabel}
                </span>
                
                <h1 className="text-3xl lg:text-5xl font-display font-bold text-carbon-900 mb-4 leading-tight">
                  {product.benefitTitle}
                </h1>
                
                <p className="text-xl text-forest-600 font-semibold mb-2">
                  {product.name} — {product.tagline}
                </p>
                
                <p className="text-lg text-carbon-600 mb-8 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={`https://wa.me/6285742249591?text=Halo,%20saya%20tertarik%20dengan%20produk%20${product.name}%20(${product.benefitTitle})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-forest-600 text-white rounded-xl font-semibold hover:bg-forest-700 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Hubungi Kami
                  </a>
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-forest-200 text-forest-700 rounded-xl font-semibold hover:bg-forest-50 transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Lihat Semua Produk
                  </Link>
                </div>
              </motion.div>

              {/* Product Visual */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-forest-100 to-microbe-100 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <Beaker className="w-32 h-32 text-forest-500 mx-auto mb-6" />
                    <p className="text-2xl font-display font-bold text-forest-700">{product.name}</p>
                    <p className="text-forest-600">{product.tagline}</p>
                  </div>
                </div>
                
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 px-4 py-2 bg-white shadow-lg rounded-xl">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-forest-600" />
                    <span className="text-sm font-semibold text-carbon-700">Terdaftar Kementan</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Accordion Sections - Manfaat, Detail, Penanganan */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto space-y-4"
            >
              {/* Accordion: Manfaat */}
              <Accordion title="Manfaat" icon={Target} defaultOpen={true} accentColor="forest">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-carbon-900 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-forest-600" />
                      Manfaat Utama
                    </h4>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2 text-carbon-700">
                          <span className="w-1.5 h-1.5 bg-forest-500 rounded-full mt-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-carbon-900 mb-3 flex items-center gap-2">
                      <Star className="w-5 h-5 text-microbe-600" />
                      Keunggulan Produk
                    </h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-carbon-700">
                          <span className="w-1.5 h-1.5 bg-microbe-500 rounded-full mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Accordion>

              {/* Accordion: Detail */}
              <Accordion title="Detail" icon={Package} accentColor="microbe">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Formulation & Ingredients */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-carbon-900 mb-2 flex items-center gap-2">
                        <FlaskConical className="w-5 h-5 text-microbe-600" />
                        Formulasi
                      </h4>
                      <p className="text-carbon-700 bg-white p-3 rounded-lg">
                        {product.details.formulation}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-carbon-900 mb-2 flex items-center gap-2">
                        <Beaker className="w-5 h-5 text-microbe-600" />
                        Komposisi Bahan Aktif
                      </h4>
                      <ul className="bg-white p-3 rounded-lg space-y-1.5">
                        {product.ingredients.map((ingredient, index) => (
                          <li key={index} className="flex items-center gap-2 text-carbon-700 text-sm">
                            <span className="w-1.5 h-1.5 bg-microbe-500 rounded-full" />
                            {ingredient}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Packaging & Storage */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-carbon-900 mb-2 flex items-center gap-2">
                        <Package className="w-5 h-5 text-microbe-600" />
                        Kemasan Tersedia
                      </h4>
                      <ul className="bg-white p-3 rounded-lg space-y-1.5">
                        {product.details.packaging.map((pack, index) => (
                          <li key={index} className="flex items-center gap-2 text-carbon-700">
                            <span className="w-1.5 h-1.5 bg-microbe-500 rounded-full" />
                            {pack}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white p-3 rounded-lg space-y-2">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-microbe-600" />
                        <span className="font-semibold text-carbon-900">Masa Simpan:</span>
                        <span className="text-carbon-700">{product.details.shelfLife}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Shield className="w-5 h-5 text-microbe-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-carbon-900">Penyimpanan:</span>
                          <p className="text-carbon-700 text-sm">{product.details.storage}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Application */}
                <div className="mt-6 pt-6 border-t border-microbe-100">
                  <h4 className="font-semibold text-carbon-900 mb-4 flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-microbe-600" />
                    Cara Aplikasi
                  </h4>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center">
                      <span className="text-xs text-microbe-600 font-medium uppercase tracking-wide">Metode</span>
                      <p className="text-carbon-900 font-semibold mt-1">{product.application.method}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <span className="text-xs text-microbe-600 font-medium uppercase tracking-wide">Dosis</span>
                      <p className="text-carbon-900 font-semibold mt-1">{product.application.dosage}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <span className="text-xs text-microbe-600 font-medium uppercase tracking-wide">Frekuensi</span>
                      <p className="text-carbon-900 font-semibold mt-1">{product.application.frequency}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <span className="text-xs text-microbe-600 font-medium uppercase tracking-wide">Waktu</span>
                      <p className="text-carbon-900 font-semibold mt-1">{product.application.timing}</p>
                    </div>
                  </div>
                </div>
              </Accordion>

              {/* Accordion: Penanganan yang Aman */}
              <Accordion title="Penanganan yang Aman" icon={AlertTriangle} accentColor="amber">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-carbon-900 mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-amber-600" />
                      Tindakan Pencegahan
                    </h4>
                    <ul className="space-y-2">
                      {product.safeHandling.precautions.map((precaution, index) => (
                        <li key={index} className="flex items-start gap-2 text-carbon-700 bg-white p-2 rounded-lg">
                          <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                          {precaution}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-carbon-900 mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-amber-600" />
                        Pertolongan Pertama
                      </h4>
                      <ul className="space-y-2">
                        {product.safeHandling.firstAid.map((aid, index) => (
                          <li key={index} className="flex items-start gap-2 text-carbon-700 bg-white p-2 rounded-lg">
                            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                            {aid}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-amber-200">
                      <h4 className="font-semibold text-carbon-900 mb-2 flex items-center gap-2">
                        <Leaf className="w-5 h-5 text-amber-600" />
                        Pembuangan
                      </h4>
                      <p className="text-carbon-700 text-sm">{product.safeHandling.disposal}</p>
                    </div>
                  </div>
                </div>
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Target Crops/Animals/Applications */}
        {(product.targetCrops || product.targetAnimals || product.targetApplications) && (
          <section className="py-12 bg-gradient-to-r from-forest-600 to-forest-700">
            <div className="container-wide">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-xl font-display font-bold text-white mb-4">
                  {product.targetCrops && "Cocok untuk Tanaman:"}
                  {product.targetAnimals && "Cocok untuk Ternak:"}
                  {product.targetApplications && "Cocok untuk Aplikasi:"}
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {(product.targetCrops || product.targetAnimals || product.targetApplications)?.map((target, index) => (
                    <span key={index} className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                      {target}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Sample Request Form */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-soil-50 to-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-xl border border-carbon-100"
              >
                <div className="mb-6">
                  <h2 className="text-2xl lg:text-3xl font-display font-bold text-carbon-900 mb-2">
                    Minta Sampel Produk
                  </h2>
                  <p className="text-carbon-600">
                    Tertarik mencoba {product.name}? Isi formulir di bawah untuk mengajukan permintaan sampel.
                  </p>
                </div>
                
                <SampleRequestForm productName={product.name} />
              </motion.div>

              {/* Info Panel */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:sticky lg:top-32"
              >
                <div className="bg-gradient-to-br from-forest-600 to-forest-700 p-8 rounded-3xl text-white">
                  <h3 className="text-xl font-display font-bold mb-4">
                    Mengapa Mencoba {product.name}?
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {product.benefits.slice(0, 4).map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-forest-200 flex-shrink-0 mt-0.5" />
                        <span className="text-white/90">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-6 border-t border-white/20">
                    <p className="text-sm text-white/70 mb-2">Butuh bantuan?</p>
                    <a
                      href="https://wa.me/6285742249591"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white font-semibold hover:text-forest-200 transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Hubungi Tim Kami
                    </a>
                  </div>
                </div>

                {/* Certifications */}
                {product.certifications && product.certifications.length > 0 && (
                  <div className="mt-6 bg-white p-6 rounded-2xl border border-carbon-100">
                    <h4 className="font-semibold text-carbon-900 mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-forest-600" />
                      Sertifikasi & Registrasi
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.certifications.map((cert, index) => (
                        <span key={index} className="px-3 py-1.5 bg-forest-50 text-forest-700 rounded-full text-sm font-medium">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        {product.testimonials && product.testimonials.length > 0 && (
          <section className="py-16 lg:py-20 bg-white">
            <div className="container-wide">
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-carbon-900 mb-8 text-center">
                Testimoni Pengguna
              </h2>
              <div className="max-w-2xl mx-auto">
                {product.testimonials.map((testimonial, index) => (
                  <motion.blockquote
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-forest-50 p-8 rounded-3xl text-center"
                  >
                    <p className="text-lg text-carbon-700 italic mb-4">"{testimonial.quote}"</p>
                    <footer>
                      <p className="font-semibold text-carbon-900">{testimonial.name}</p>
                      <p className="text-sm text-carbon-500">{testimonial.role}</p>
                    </footer>
                  </motion.blockquote>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-16 lg:py-20 bg-gradient-to-b from-soil-50 to-white">
            <div className="container-wide">
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-carbon-900 mb-8">
                Produk Terkait
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedProducts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/products/${related.slug}`}
                    className="group bg-white p-6 rounded-2xl border border-carbon-100 hover:shadow-xl hover:-translate-y-1 transition-all"
                  >
                    <span className="text-sm text-forest-600 font-medium">{related.categoryLabel}</span>
                    <h3 className="text-xl font-display font-bold text-carbon-900 mt-2 group-hover:text-forest-600 transition-colors">
                      {related.benefitTitle}
                    </h3>
                    <p className="text-forest-600 font-medium">{related.name}</p>
                    <p className="text-carbon-600 mt-2 text-sm line-clamp-2">{related.description}</p>
                    <span className="inline-flex items-center gap-1 text-forest-600 font-semibold mt-4">
                      Lihat Detail
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-r from-forest-700 to-forest-800">
          <div className="container-wide text-center">
            <h2 className="text-2xl lg:text-4xl font-display font-bold text-white mb-4">
              Tertarik dengan {product.name}?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Hubungi tim kami untuk konsultasi gratis dan informasi pemesanan.
            </p>
            <a
              href={`https://wa.me/6285742249591?text=Halo,%20saya%20tertarik%20dengan%20produk%20${product.name}%20(${product.benefitTitle}).%20Mohon%20informasi%20lebih%20lanjut.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-forest-700 rounded-xl font-semibold text-lg hover:bg-forest-50 transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp Sekarang
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </GSAPProvider>
  );
}

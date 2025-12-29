"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { GSAPProvider } from "@/lib/gsap-provider";
import { HeaderEN as Header, FooterEN as Footer } from "@/components/layout/en";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Building2,
  User,
  Briefcase,
  ChevronDown,
  Check,
  CheckCircle2,
} from "lucide-react";

const industries = [
  { value: "plant", label: "Plant Biosecurity" },
  { value: "animal", label: "Animal Health" },
  { value: "agriculture", label: "General Agriculture" },
  { value: "aquaculture", label: "Aquaculture" },
  { value: "other", label: "Other" },
];

const inquiryTypes = [
  { value: "product", label: "Product Information" },
  { value: "partnership", label: "Business Partnership" },
  { value: "distribution", label: "Distribution" },
  { value: "research", label: "Research & Collaboration" },
  { value: "support", label: "Technical Support" },
];

export default function ContactPage() {
  const heroRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useGSAP(
    () => {
      gsap.fromTo(
        ".contact-hero-content > *",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Build WhatsApp message from form data
    const industryLabel = industries.find(i => i.value === formState.industry)?.label || formState.industry;
    const inquiryLabel = inquiryTypes.find(t => t.value === formState.inquiryType)?.label || formState.inquiryType;
    
    const message = `Hello Biosolution,

*New Inquiry from Website*

*Name:* ${formState.name}
*Email:* ${formState.email}
*Phone:* ${formState.phone}
*Company:* ${formState.company || "Not specified"}
*Industry:* ${industryLabel}
*Inquiry Type:* ${inquiryLabel}

*Message:*
${formState.message}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6285742249591?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, "_blank");
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <GSAPProvider>
      <Header />

      <main>
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-b from-forest-50 to-white overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-microbe-200/30 rounded-full blur-[100px]" />
          </div>

          <div className="relative container-wide">
            <div className="contact-hero-content text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-forest-100 border border-forest-200 rounded-full text-sm font-medium text-forest-700 mb-6">
                <Phone className="w-4 h-4" />
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-carbon-900 mb-6">
                Free Expert{" "}
                <span className="bg-gradient-to-r from-forest-600 to-microbe-500 bg-clip-text text-transparent">
                  Consultation
                </span>
              </h1>
              <p className="text-lg text-carbon-600 mb-6">
                14 years of biotechnology expertise. Real solutions for real agricultural challenges.
                Tell us your problem—we'll provide the proven solution.
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-4 text-sm text-carbon-600">
                <span className="flex items-center gap-1.5 bg-forest-50 px-3 py-1.5 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-forest-500" />
                  24h Response
                </span>
                <span className="flex items-center gap-1.5 bg-forest-50 px-3 py-1.5 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-forest-500" />
                  Free Consultation
                </span>
                <span className="flex items-center gap-1.5 bg-forest-50 px-3 py-1.5 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-forest-500" />
                  Satisfaction Guaranteed
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Credibility Line */}
        <div className="bg-forest-600 py-4">
          <div className="container-wide text-center text-white text-sm">
            <span className="font-semibold">14 years experience</span> • <span className="font-semibold">19 provinces</span> covered • <span className="font-semibold">1,000+ satisfied partners</span>
          </div>
        </div>

        {/* Contact Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-wide">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-display font-bold text-carbon-900 mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    <a
                      href="https://maps.google.com/?q=Sawahan+RT+02+RW+07+Pasungan+Ceper+Klaten"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-forest-200 transition-colors">
                        <MapPin className="w-5 h-5 text-forest-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-carbon-900 mb-1">Office Address</h3>
                        <p className="text-carbon-600 text-sm">
                          Sawahan RT 02 RW 07 Pasungan, Ceper<br />
                          Klaten, Central Java 57465<br />
                          Indonesia
                        </p>
                      </div>
                    </a>

                    <a
                      href="tel:+6285742249591"
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-forest-200 transition-colors">
                        <Phone className="w-5 h-5 text-forest-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-carbon-900 mb-1">Phone</h3>
                        <p className="text-carbon-600 text-sm">+62 857-4224-9591</p>
                      </div>
                    </a>

                    <a
                      href="mailto:info@biosolution.tech"
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-forest-200 transition-colors">
                        <Mail className="w-5 h-5 text-forest-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-carbon-900 mb-1">Email</h3>
                        <p className="text-carbon-600 text-sm">info@biosolution.tech</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-forest-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-carbon-900 mb-1">Business Hours</h3>
                        <p className="text-carbon-600 text-sm">
                          Monday - Friday: 08:00 - 17:00 WIB<br />
                          Saturday: 08:00 - 12:00 WIB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/6285742249591?text=Hello,%20I%20would%20like%20to%20inquire%20about%20your%20biotechnology%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl text-white hover:shadow-lg hover:shadow-green-500/20 transition-all group"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Chat via WhatsApp</h3>
                    <p className="text-white/80 text-sm">Quick response for your inquiries</p>
                  </div>
                  <Send className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-gradient-to-br from-forest-50 to-white border border-forest-100 rounded-3xl p-8 lg:p-10">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check className="w-10 h-10 text-forest-600" />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-carbon-900 mb-3">
                        Message Sent!
                      </h3>
                      <p className="text-carbon-600 mb-6">
                        Thank you for contacting us. Our team will respond within 1-2 business days.
                      </p>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormState({
                            name: "",
                            email: "",
                            phone: "",
                            company: "",
                            industry: "",
                            inquiryType: "",
                            message: "",
                          });
                        }}
                        className="btn-secondary"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-display font-bold text-carbon-900 mb-2">
                        Send a Message
                      </h2>
                      <p className="text-carbon-600 mb-8">
                        Fill out the form below and our team will contact you shortly.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                          {/* Name */}
                          <div>
                            <label className="block text-sm font-medium text-carbon-700 mb-2">
                              Full Name *
                            </label>
                            <div className="relative">
                              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-carbon-400" />
                              <input
                                type="text"
                                name="name"
                                value={formState.name}
                                onChange={handleChange}
                                required
                                placeholder="John Doe"
                                className="w-full pl-12 pr-4 py-3 bg-white border border-carbon-200 rounded-xl focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 transition-all"
                              />
                            </div>
                          </div>

                          {/* Email */}
                          <div>
                            <label className="block text-sm font-medium text-carbon-700 mb-2">
                              Email *
                            </label>
                            <div className="relative">
                              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-carbon-400" />
                              <input
                                type="email"
                                name="email"
                                value={formState.email}
                                onChange={handleChange}
                                required
                                placeholder="john@company.com"
                                className="w-full pl-12 pr-4 py-3 bg-white border border-carbon-200 rounded-xl focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 transition-all"
                              />
                            </div>
                          </div>

                          {/* Phone */}
                          <div>
                            <label className="block text-sm font-medium text-carbon-700 mb-2">
                              Phone Number *
                            </label>
                            <div className="relative">
                              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-carbon-400" />
                              <input
                                type="tel"
                                name="phone"
                                value={formState.phone}
                                onChange={handleChange}
                                required
                                placeholder="+62 812 3456 7890"
                                className="w-full pl-12 pr-4 py-3 bg-white border border-carbon-200 rounded-xl focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 transition-all"
                              />
                            </div>
                          </div>

                          {/* Company */}
                          <div>
                            <label className="block text-sm font-medium text-carbon-700 mb-2">
                              Company
                            </label>
                            <div className="relative">
                              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-carbon-400" />
                              <input
                                type="text"
                                name="company"
                                value={formState.company}
                                onChange={handleChange}
                                placeholder="Company Name"
                                className="w-full pl-12 pr-4 py-3 bg-white border border-carbon-200 rounded-xl focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 transition-all"
                              />
                            </div>
                          </div>

                          {/* Industry */}
                          <div>
                            <label className="block text-sm font-medium text-carbon-700 mb-2">
                              Industry *
                            </label>
                            <div className="relative">
                              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-carbon-400" />
                              <select
                                name="industry"
                                value={formState.industry}
                                onChange={handleChange}
                                required
                                className="w-full pl-12 pr-10 py-3 bg-white border border-carbon-200 rounded-xl focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 transition-all appearance-none"
                              >
                                <option value="">Select Industry</option>
                                {industries.map((ind) => (
                                  <option key={ind.value} value={ind.value}>
                                    {ind.label}
                                  </option>
                                ))}
                              </select>
                              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-carbon-400 pointer-events-none" />
                            </div>
                          </div>

                          {/* Inquiry Type */}
                          <div>
                            <label className="block text-sm font-medium text-carbon-700 mb-2">
                              Inquiry Type *
                            </label>
                            <div className="relative">
                              <select
                                name="inquiryType"
                                value={formState.inquiryType}
                                onChange={handleChange}
                                required
                                className="w-full pl-4 pr-10 py-3 bg-white border border-carbon-200 rounded-xl focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 transition-all appearance-none"
                              >
                                <option value="">Select Type</option>
                                {inquiryTypes.map((type) => (
                                  <option key={type.value} value={type.value}>
                                    {type.label}
                                  </option>
                                ))}
                              </select>
                              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-carbon-400 pointer-events-none" />
                            </div>
                          </div>
                        </div>

                        {/* Message */}
                        <div>
                          <label className="block text-sm font-medium text-carbon-700 mb-2">
                            Message *
                          </label>
                          <textarea
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            placeholder="Tell us about your needs..."
                            className="w-full px-4 py-3 bg-white border border-carbon-200 rounded-xl focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/20 transition-all resize-none"
                          />
                        </div>

                        {/* Submit */}
                        <div className="space-y-3">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? (
                              <>
                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Sending...
                              </>
                            ) : (
                              <>
                                <MessageCircle className="w-5 h-5" />
                                Send via WhatsApp
                              </>
                            )}
                          </button>
                          <p className="text-xs text-carbon-500 text-center">
                            Clicking this button will open WhatsApp to send your message directly to our team
                          </p>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-[400px] bg-carbon-100 relative" aria-label="Office Location">
          <iframe
            title="Map showing PT Biosolution Indo Nusantara office location in Ceper, Klaten, Central Java"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.8761961397!2d110.69388251477735!3d-7.700861994436499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a3f8c8a05e3e5%3A0x4e1f9c0c4f0a0e0c!2sCeper%2C%20Klaten%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1634567890123!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
        </section>
      </main>

      <Footer />
    </GSAPProvider>
  );
}

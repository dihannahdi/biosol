"use client";

import { GSAPProvider } from "@/lib/gsap-provider";
import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  IndustriesSection,
  ProductsSection,
  CaseStudiesSection,
  CTASection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <GSAPProvider>
      <Header />
      
      <main>
        {/* Hero Section - Full viewport intro */}
        <HeroSection />

        {/* Industries Section - B2B focus areas */}
        <IndustriesSection />

        {/* Products Section - Featured products showcase */}
        <ProductsSection />

        {/* Case Studies Section - Success stories */}
        <CaseStudiesSection />

        {/* CTA Section - Contact conversion */}
        <CTASection />
      </main>

      <Footer />
    </GSAPProvider>
  );
}

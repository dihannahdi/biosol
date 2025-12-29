import type { Metadata } from "next";
import { generateComprehensiveSchema, JsonLdScript } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    default: "Biosolution | Indonesia's #1 Agricultural Biotechnology - Bio-Fertilizers & Biosecurity",
    template: "%s | Biosolution - Leading Biotechnology Solutions",
  },
  description:
    "Biosolution (PT Centra Biotech Indonesia) - Indonesia's leading agricultural biotechnology company. Specialists in bio-fertilizers, bio-insecticides, horticulture biosecurity, animal probiotics, and contract manufacturing. Serving 19 provinces since 2010. WhatsApp: +62 857-4224-9591.",
  keywords: [
    // Primary Keywords - English
    "biotechnology",
    "agricultural biotechnology",
    "Indonesia biotechnology",
    "biosolutions",
    "biosecurity",
    "horticulture biosecurity",
    
    // Product Keywords
    "bio-fertilizer",
    "organic fertilizer",
    "liquid bio-fertilizer",
    "solid bio-fertilizer",
    "bio-insecticide",
    "organic pesticide",
    "bio-pesticide",
    "biological pest control",
    
    // Service Keywords
    "contract manufacturing",
    "toll manufacturing",
    "private label manufacturing",
    "white label manufacturing",
    "OEM manufacturing",
    "agricultural contract manufacturing",
    
    // Industry Keywords
    "horticulture",
    "sustainable agriculture",
    "organic farming",
    "green agriculture",
    "eco-farming",
    
    // Microbiology Keywords
    "microbes",
    "microorganisms",
    "beneficial bacteria",
    "microbial synthesis",
    "bacterial synthesis",
    "microbial solutions",
    "plant probiotics",
    "animal probiotics",
    "aquaculture probiotics",
    
    // Animal & Aquaculture Keywords
    "livestock",
    "poultry",
    "aquaculture",
    "fish farming",
    "shrimp farming",
    
    // Environmental Keywords
    "household solution",
    "environmental solution",
    "eco-friendly",
    "sustainable solutions",
    "green technology",
    
    // Product Brand Names
    "FloraOne",
    "BioKiller",
    "BIOJAGAT",
    "SIMBIOS",
    "RAJABIO",
    "MEGABIO",
    
    // Location Keywords
    "Indonesia",
    "Malang",
    "East Java",
    "Indonesian agribusiness",
    "Southeast Asia biotechnology",
    
    // B2B Keywords
    "B2B",
    "fertilizer distributor",
    "agricultural supplier",
    "agricultural business partner",
  ],
  alternates: {
    canonical: "https://www.biosolution.tech/en",
    languages: {
      "id-ID": "https://www.biosolution.tech",
      "en-US": "https://www.biosolution.tech/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["id_ID"],
    url: "https://www.biosolution.tech/en",
    siteName: "Biosolution",
    title: "Biosolution | Indonesia's Leading Agricultural Biotechnology Company",
    description:
      "Pioneer in agricultural biotechnology since 2010. Specialists in bio-fertilizers, bio-insecticides, biosecurity, probiotics, and contract manufacturing. Serving 19 provinces with sustainable agricultural solutions.",
    images: [
      {
        url: "/og-image-en.jpg",
        width: 1200,
        height: 630,
        alt: "Biosolution - Indonesia's Leading Agricultural Biotechnology Solutions",
        type: "image/jpeg",
      },
    ],
    countryName: "Indonesia",
    emails: ["info@biosolution.tech"],
    phoneNumbers: ["+62 857-4224-9591"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biosolution | Indonesia's #1 Agricultural Biotechnology",
    description: "Leading biotechnology solutions - Bio-fertilizers, horticulture biosecurity, probiotics, and contract manufacturing. Serving 19 provinces since 2010.",
    images: ["/og-image-en.jpg"],
    creator: "@biosolution_id",
    site: "@biosolution_id",
  },
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* JSON-LD Structured Data for English pages */}
      <JsonLdScript data={generateComprehensiveSchema('en')} />
      
      {/* Dublin Core Metadata for English */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.documentElement.lang = 'en';
          `,
        }}
      />
      
      {children}
    </>
  );
}

import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { generateComprehensiveSchema, JsonLdScript } from "@/lib/schema";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.biosolution.tech"),
  title: {
    default: "Biosolution | Bioteknologi Pertanian Indonesia #1 - Pupuk Hayati & Biosecurity",
    template: "%s | Biosolution - Solusi Bioteknologi Terdepan",
  },
  description:
    "Biosolution (PT Centra Biotech Indonesia) - Perusahaan bioteknologi pertanian terdepan Indonesia. Spesialis pupuk hayati, insektisida hayati, biosecurity hortikultura, probiotik hewan, dan jasa maklon. Melayani 19 provinsi sejak 2010. WhatsApp: +62 857-4224-9591.",
  keywords: [
    // Primary Keywords - Indonesian
    "bioteknologi",
    "bioteknologi pertanian",
    "bioteknologi Indonesia",
    "biotechnology",
    "biosolutions",
    "biosecurity",
    "biosecurity hortikultura",
    
    // Product Keywords
    "pupuk hayati",
    "pupuk organik",
    "pupuk hayati cair",
    "pupuk hayati padat",
    "insektisida hayati",
    "pestisida organik",
    "bio-fertilizer",
    "bio-insecticide",
    "bio-pesticide",
    
    // Service Keywords
    "pabrik maklon",
    "jasa maklon",
    "contract manufacturing",
    "toll manufacturing",
    "maklon pupuk",
    "maklon pertanian",
    "private label pertanian",
    "white label pertanian",
    
    // Industry Keywords
    "hortikultura",
    "horticulture",
    "pertanian berkelanjutan",
    "sustainable agriculture",
    "organic farming",
    "pertanian organik",
    
    // Microbiology Keywords
    "mikroba",
    "mikroorganisme",
    "bakteri menguntungkan",
    "sintesis mikroba",
    "sintesis bakteri",
    "microbial solutions",
    "beneficial bacteria",
    "probiotik tanaman",
    "probiotik hewan",
    "probiotik ikan",
    
    // Animal & Aquaculture Keywords
    "peternakan",
    "perikanan",
    "aquaculture",
    "livestock",
    "poultry farming",
    
    // Environmental Keywords
    "household solution",
    "environmental solution",
    "solusi rumah tangga",
    "solusi lingkungan",
    "eco-friendly",
    "ramah lingkungan",
    
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
    "Jawa Timur",
    "agribisnis Indonesia",
    
    // B2B Keywords
    "B2B",
    "distributor pupuk",
    "supplier pertanian",
    "mitra bisnis pertanian",
  ],
  authors: [{ name: "Biosolution" }, { name: "PT Centra Biotech Indonesia" }],
  creator: "Biosolution - PT Centra Biotech Indonesia",
  publisher: "Biosolution",
  category: "Biotechnology",
  classification: "Agricultural Biotechnology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.biosolution.tech",
    languages: {
      "id-ID": "https://www.biosolution.tech",
      "en-US": "https://www.biosolution.tech/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: ["en_US"],
    url: "https://www.biosolution.tech",
    siteName: "Biosolution",
    title: "Biosolution | Bioteknologi Pertanian Indonesia - Pupuk Hayati & Biosecurity Hortikultura",
    description:
      "Pelopor inovasi bioteknologi pertanian Indonesia sejak 2010. Spesialis pupuk hayati, insektisida hayati, biosecurity, probiotik, dan jasa maklon. Melayani 19 provinsi dengan solusi pertanian berkelanjutan.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Biosolution - Solusi Bioteknologi Pertanian Terdepan Indonesia",
        type: "image/jpeg",
      },
      {
        url: "/og-image-square.jpg",
        width: 800,
        height: 800,
        alt: "Biosolution Logo",
        type: "image/jpeg",
      },
    ],
    countryName: "Indonesia",
    emails: ["info@biosolution.tech"],
    phoneNumbers: ["+62 857-4224-9591"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biosolution | Bioteknologi Pertanian Indonesia #1",
    description: "Solusi bioteknologi pertanian terdepan - Pupuk hayati, biosecurity hortikultura, probiotik, dan jasa maklon. Melayani 19 provinsi sejak 2010.",
    images: ["/og-image.jpg"],
    creator: "@biosolution_id",
    site: "@biosolution_id",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token",
    yandex: "yandex_verification",
    other: {
      "msvalidate.01": "bing_verification",
    },
  },
  other: {
    "geo.region": "ID-JI",
    "geo.placename": "Malang, East Java, Indonesia",
    "geo.position": "-7.9543;112.6128",
    ICBM: "-7.9543, 112.6128",
    "contact:phone_number": "+62 857-4224-9591",
    "contact:email": "info@biosolution.tech",
    "business:contact_data:street_address": "Jl. Raya Lowokwaru No. 100",
    "business:contact_data:locality": "Malang",
    "business:contact_data:region": "Jawa Timur",
    "business:contact_data:postal_code": "65141",
    "business:contact_data:country_name": "Indonesia",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${dmSans.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* JSON-LD Structured Data for SEO and GEO */}
        <JsonLdScript data={generateComprehensiveSchema('id')} />
        
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Favicons and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Additional SEO meta tags */}
        <meta name="application-name" content="Biosolution" />
        <meta name="apple-mobile-web-app-title" content="Biosolution" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Dublin Core Metadata for academic/research visibility */}
        <meta name="DC.title" content="Biosolution - Bioteknologi Pertanian Indonesia" />
        <meta name="DC.creator" content="PT Centra Biotech Indonesia" />
        <meta name="DC.subject" content="Biotechnology, Agriculture, Bio-fertilizers, Biosecurity" />
        <meta name="DC.description" content="Leading Indonesian biotechnology company specializing in sustainable agricultural solutions" />
        <meta name="DC.publisher" content="Biosolution" />
        <meta name="DC.type" content="Service" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.language" content="id" />
        <meta name="DC.coverage" content="Indonesia" />
      </head>
      <body className="bg-soil-50 text-carbon-900 antialiased">
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-forest-600 focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-400 focus:ring-offset-2"
        >
          Lewati ke konten utama
        </a>
        
        <div className="relative min-h-screen">
          {/* Ambient background gradient */}
          <div className="fixed inset-0 pointer-events-none -z-10">
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-forest-200/30 rounded-full blur-[120px] animate-float-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-microbe-200/20 rounded-full blur-[100px] animate-float-medium" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-moss-100/20 rounded-full blur-[150px]" />
          </div>
          
          {/* Main content */}
          <div id="main-content">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

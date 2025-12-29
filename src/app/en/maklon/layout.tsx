import { Metadata } from 'next';
import { generateMaklonSchema, JsonLdScript } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Contract Manufacturing (Maklon) - Bio-Fertilizer & Probiotics | Biosolution',
  description: 'Professional contract manufacturing services for bio-fertilizers, bio-pesticides, and animal probiotics in Indonesia. Private label & white label with your own brand. MOQ from 500L, full R&D support, Ministry registered facility. 14+ years experience, 50+ active partners. Free consultation: +62 857-4224-9591.',
  keywords: [
    'contract manufacturing',
    'toll manufacturing Indonesia',
    'bio-fertilizer manufacturing',
    'biofertilizer contract manufacturing',
    'probiotic manufacturing',
    'private label agriculture',
    'white label fertilizer',
    'OEM bio-fertilizer',
    'biotechnology manufacturing',
    'Indonesia contract manufacturing',
    'maklon Indonesia',
    'bio-pesticide manufacturing',
    'agricultural biotechnology OEM',
    'custom formulation',
  ],
  alternates: {
    canonical: 'https://www.biosolution.tech/en/maklon',
    languages: {
      'id-ID': 'https://www.biosolution.tech/maklon',
      'en-US': 'https://www.biosolution.tech/en/maklon',
    },
  },
  openGraph: {
    title: 'Contract Manufacturing - Bio-Fertilizers, Bio-Pesticides & Probiotics',
    description: 'Trusted manufacturing partner for biotechnology products in Indonesia. Create with your own brand. Full R&D support, Ministry registered, 50+ active partners.',
    url: 'https://www.biosolution.tech/en/maklon',
    siteName: 'Biosolution',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-maklon.jpg',
        width: 1200,
        height: 630,
        alt: 'Biosolution - Contract Manufacturing Services Indonesia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contract Manufacturing Services | Biosolution',
    description: 'Trusted manufacturing partner for biotechnology products. Private label & white label.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function MaklonLayoutEN({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLdScript data={generateMaklonSchema('en')} />
      {children}
    </>
  );
}

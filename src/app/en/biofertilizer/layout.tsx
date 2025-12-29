import { Metadata } from 'next';
import { generatePupukHayatiSchema, JsonLdScript } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Organic Bio-Fertilizer - Premium Biofertilizer Manufacturer | Biosolution',
  description: 'Trusted organic bio-fertilizer manufacturer in Indonesia. Liquid & solid biofertilizers with superior microorganisms: Azotobacter, Bacillus, Pseudomonas. Increase yields 20-30%, save fertilizer costs 50%. Ministry registered. Contact: +62 857-4224-9591.',
  keywords: [
    'bio-fertilizer',
    'biofertilizer',
    'biofertilizer Indonesia',
    'organic bio-fertilizer',
    'liquid bio-fertilizer',
    'solid bio-fertilizer',
    'bio-fertilizer manufacturer',
    'organic fertilizer',
    'microbial fertilizer',
    'sustainable agriculture',
    'nitrogen fixing bacteria',
    'phosphate solubilizing bacteria',
    'Azotobacter',
    'Bacillus',
    'Pseudomonas',
    'FloraOne',
    'BIOJAGAT',
    'Biosolution',
    'Indonesian agriculture',
    'eco-friendly fertilizer',
  ],
  alternates: {
    canonical: 'https://www.biosolution.tech/en/biofertilizer',
    languages: {
      'id-ID': 'https://www.biosolution.tech/pupuk-hayati',
      'en-US': 'https://www.biosolution.tech/en/biofertilizer',
    },
  },
  openGraph: {
    title: 'Organic Bio-Fertilizer - Premium Biofertilizer Manufacturer Indonesia',
    description: 'Increase crop yields 20-30% with organic bio-fertilizers from Biosolution. Superior microorganisms, Ministry registered, serving 19 Indonesian provinces.',
    url: 'https://www.biosolution.tech/en/biofertilizer',
    siteName: 'Biosolution',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-biofertilizer.jpg',
        width: 1200,
        height: 630,
        alt: 'Biosolution - Organic Bio-Fertilizer Manufacturer Indonesia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Organic Bio-Fertilizer | Biosolution',
    description: 'Trusted organic bio-fertilizer manufacturer. Increase yields 20-30% with premium biofertilizers.',
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

export default function BiofertilizerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLdScript data={generatePupukHayatiSchema('en')} />
      {children}
    </>
  );
}

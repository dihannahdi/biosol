import { Metadata } from 'next';
import { generatePupukHayatiSchema, JsonLdScript } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Pupuk Hayati Organik Berkualitas - Produsen Terpercaya | Biosolution',
  description: 'Produsen pupuk hayati organik terpercaya di Indonesia. Pupuk hayati cair & padat dengan mikroorganisme unggul: Azotobacter, Bacillus, Pseudomonas. Meningkatkan hasil panen 20-30%, hemat pupuk 50%. Terdaftar Kementan. Hubungi: +62 857-4224-9591.',
  keywords: [
    'pupuk hayati',
    'pupuk hayati organik',
    'pupuk hayati cair',
    'pupuk hayati padat',
    'biofertilizer',
    'biofertilizer Indonesia',
    'produsen pupuk hayati',
    'pupuk organik cair',
    'POC pupuk organik cair',
    'pupuk cair organik',
    'pupuk organik cair berkualitas',
    'pupuk organik cair bakteri aktif',
    'pupuk hayati untuk tanaman padi',
    'pupuk organik ramah lingkungan',
    'mikroorganisme pupuk hayati',
    'pupuk hayati untuk peningkatan produksi',
    'perbedaan pupuk hayati dan pupuk organik',
    'FloraOne',
    'BIOJAGAT',
    'Biosolution',
  ],
  alternates: {
    canonical: 'https://www.biosolution.tech/pupuk-hayati',
    languages: {
      'id-ID': 'https://www.biosolution.tech/pupuk-hayati',
      'en-US': 'https://www.biosolution.tech/en/biofertilizer',
    },
  },
  openGraph: {
    title: 'Pupuk Hayati Organik - Produsen Pupuk Hayati Cair & Padat Terpercaya',
    description: 'Tingkatkan hasil panen 20-30% dengan pupuk hayati organik dari Biosolution. Mikroorganisme unggul, terdaftar Kementan, melayani 19 provinsi Indonesia.',
    url: 'https://www.biosolution.tech/pupuk-hayati',
    siteName: 'Biosolution',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/og-pupuk-hayati.jpg',
        width: 1200,
        height: 630,
        alt: 'Biosolution - Produsen Pupuk Hayati Organik Indonesia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pupuk Hayati Organik | Biosolution',
    description: 'Produsen pupuk hayati organik terpercaya. Tingkatkan hasil panen 20-30% dengan biofertilizer berkualitas.',
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

export default function PupukHayatiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLdScript data={generatePupukHayatiSchema('id')} />
      {children}
    </>
  );
}

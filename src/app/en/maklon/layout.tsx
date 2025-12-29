import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contract Manufacturing Services | Biosolution',
  description: 'Contract manufacturing for bio-fertilizers, bio-pesticides, and animal probiotics. Private label & white label. 14+ years experience, government registered. Free consultation: +62 857-4224-9591.',
  keywords: [
    'contract manufacturing',
    'toll manufacturing',
    'bio-fertilizer manufacturing',
    'probiotic manufacturing',
    'private label agriculture',
    'white label fertilizer',
    'OEM bio-fertilizer',
    'biotechnology manufacturing',
    'Indonesia contract manufacturing',
  ],
  alternates: {
    canonical: 'https://www.biosolution.tech/en/maklon',
    languages: {
      'id-ID': 'https://www.biosolution.tech/maklon',
      'en-US': 'https://www.biosolution.tech/en/maklon',
    },
  },
  openGraph: {
    title: 'Biotechnology Contract Manufacturing - Bio-Fertilizers & Probiotics',
    description: 'Trusted manufacturing partner for biotechnology products. Create with your own brand. R&D support, government registered, 50+ active partners.',
    url: 'https://www.biosolution.tech/en/maklon',
    images: [
      {
        url: '/og-maklon.jpg',
        width: 1200,
        height: 630,
        alt: 'Biosolution - Contract Manufacturing Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contract Manufacturing Services | Biosolution',
    description: 'Trusted manufacturing partner for biotechnology products. Private label & white label.',
  },
};

export default function MaklonLayoutEN({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

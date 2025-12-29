import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jasa Maklon Pupuk Hayati & Probiotik | Biosolution',
  description: 'Jasa maklon/contract manufacturing pupuk hayati, pestisida hayati, dan probiotik ternak. Private label & white label. 14+ tahun pengalaman, terdaftar Kementan. Konsultasi gratis: +62 857-4224-9591.',
  keywords: [
    'jasa maklon',
    'maklon pupuk',
    'maklon pupuk hayati',
    'maklon probiotik',
    'maklon pestisida',
    'contract manufacturing',
    'toll manufacturing',
    'private label pertanian',
    'white label pupuk',
    'pabrik maklon',
    'OEM pupuk hayati',
    'produsen pupuk hayati',
    'maklon bioteknologi',
  ],
  alternates: {
    canonical: 'https://www.biosolution.tech/maklon',
    languages: {
      'id-ID': 'https://www.biosolution.tech/maklon',
      'en-US': 'https://www.biosolution.tech/en/maklon',
    },
  },
  openGraph: {
    title: 'Jasa Maklon Bioteknologi Pertanian - Pupuk Hayati & Probiotik',
    description: 'Partner maklon terpercaya untuk produk bioteknologi. Produksi dengan brand Anda sendiri. R&D support, terdaftar Kementan, 50+ mitra aktif.',
    url: 'https://www.biosolution.tech/maklon',
    images: [
      {
        url: '/og-maklon.jpg',
        width: 1200,
        height: 630,
        alt: 'Biosolution - Jasa Maklon Bioteknologi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jasa Maklon Pupuk Hayati & Probiotik | Biosolution',
    description: 'Partner maklon terpercaya untuk produk bioteknologi. Private label & white label.',
  },
};

export default function MaklonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

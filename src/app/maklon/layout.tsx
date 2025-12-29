import { Metadata } from 'next';
import { generateMaklonSchema, JsonLdScript } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Jasa Maklon Pupuk Hayati & Bioteknologi | Biosolution',
  description: 'Jasa maklon profesional untuk pupuk hayati, pestisida hayati, dan probiotik ternak. Private label & white label dengan brand Anda sendiri. MOQ mulai 500L, dukungan R&D penuh, fasilitas terdaftar Kementan. 14+ tahun pengalaman, 50+ mitra aktif. Konsultasi gratis: +62 857-4224-9591.',
  keywords: [
    'jasa maklon',
    'maklon pupuk',
    'maklon pupuk hayati',
    'jasa maklon pupuk',
    'maklon pupuk tanaman',
    'layanan maklon pupuk',
    'maklon produk pertanian',
    'maklon probiotik',
    'maklon pestisida hayati',
    'contract manufacturing',
    'toll manufacturing',
    'private label pertanian',
    'white label pupuk',
    'pabrik maklon pupuk hayati',
    'OEM pupuk hayati',
    'produsen pupuk hayati',
    'maklon bioteknologi',
    'produsen pupuk organik',
    'maklon pupuk organik cair',
  ],
  alternates: {
    canonical: 'https://www.biosolution.tech/maklon',
    languages: {
      'id-ID': 'https://www.biosolution.tech/maklon',
      'en-US': 'https://www.biosolution.tech/en/maklon',
    },
  },
  openGraph: {
    title: 'Jasa Maklon Pupuk Hayati & Bioteknologi Terpercaya - Biosolution',
    description: 'Partner maklon terpercaya untuk produk bioteknologi. Produksi pupuk hayati, pestisida hayati, probiotik dengan brand Anda sendiri. R&D support, terdaftar Kementan, 50+ mitra aktif.',
    url: 'https://www.biosolution.tech/maklon',
    siteName: 'Biosolution',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/og-maklon.jpg',
        width: 1200,
        height: 630,
        alt: 'Biosolution - Jasa Maklon Pupuk Hayati & Bioteknologi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jasa Maklon Pupuk Hayati & Probiotik | Biosolution',
    description: 'Partner maklon terpercaya untuk produk bioteknologi pertanian. Private label & white label.',
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

export default function MaklonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLdScript data={generateMaklonSchema('id')} />
      {children}
    </>
  );
}

import { Metadata } from 'next';

const baseUrl = 'https://www.biosolution.tech';

// Indonesian Page Metadata
export const homeMetadata: Metadata = {
  title: 'Biosolution | Bioteknologi Pertanian #1 Indonesia',
  description: 'Biosolution - Perusahaan bioteknologi pertanian terdepan Indonesia. Spesialis pupuk hayati, insektisida hayati, biosecurity hortikultura, probiotik hewan, dan jasa maklon. 14+ tahun pengalaman, melayani 19 provinsi. Hubungi: +62 857-4224-9591.',
  keywords: ['bioteknologi pertanian', 'pupuk hayati', 'biosecurity', 'hortikultura', 'maklon', 'probiotik', 'Indonesia'],
  alternates: {
    canonical: baseUrl,
    languages: { 'id-ID': baseUrl, 'en-US': `${baseUrl}/en` },
  },
};

export const aboutMetadata: Metadata = {
  title: 'Tentang Biosolution - Bioteknologi Pertanian Sejak 2010',
  description: 'Pelajari tentang Biosolution (PT Centra Biotech Indonesia) - pelopor bioteknologi pertanian Indonesia. Didirikan 2010, melayani 19 provinsi dengan produk pupuk hayati, insektisida hayati, dan solusi biosecurity berkualitas tinggi.',
  keywords: ['tentang biosolution', 'sejarah biosolution', 'PT Centra Biotech Indonesia', 'bioteknologi Indonesia', 'pendiri biosolution'],
  alternates: {
    canonical: `${baseUrl}/about`,
    languages: { 'id-ID': `${baseUrl}/about`, 'en-US': `${baseUrl}/en/about` },
  },
  openGraph: {
    title: 'Tentang Biosolution - Perusahaan Bioteknologi Pertanian Indonesia',
    description: 'Kenali Biosolution - pelopor bioteknologi pertanian Indonesia sejak 2010. Visi, misi, nilai AJAIB, dan perjalanan kami.',
    url: `${baseUrl}/about`,
  },
};

export const solutionsMetadata: Metadata = {
  title: 'Solusi Bioteknologi Pertanian & Peternakan | Biosolution',
  description: 'Jelajahi solusi bioteknologi lengkap dari Biosolution: pupuk hayati, insektisida hayati, probiotik ternak, probiotik ikan, dan produk biosecurity untuk pertanian berkelanjutan Indonesia.',
  keywords: ['solusi bioteknologi', 'produk pertanian', 'pupuk hayati', 'insektisida hayati', 'probiotik ternak', 'probiotik ikan', 'biosecurity'],
  alternates: {
    canonical: `${baseUrl}/solutions`,
    languages: { 'id-ID': `${baseUrl}/solutions`, 'en-US': `${baseUrl}/en/solutions` },
  },
  openGraph: {
    title: 'Solusi Bioteknologi Lengkap - Pertanian, Peternakan & Perikanan',
    description: 'Produk bioteknologi berkualitas tinggi untuk pertanian, peternakan, dan perikanan Indonesia.',
    url: `${baseUrl}/solutions`,
  },
};

export const solutionsPlantMetadata: Metadata = {
  title: 'Biosecurity Tanaman - Pupuk & Insektisida Hayati',
  description: 'Produk biosecurity tanaman premium: FloraOne, BioKiller, BIOJAGAT, dan lainnya. Pupuk hayati dan insektisida hayati untuk hortikultura, perkebunan, dan pertanian berkelanjutan.',
  keywords: ['biosecurity tanaman', 'pupuk hayati', 'insektisida hayati', 'FloraOne', 'BioKiller', 'BIOJAGAT', 'hortikultura', 'pertanian organik'],
  alternates: {
    canonical: `${baseUrl}/solutions/plant`,
    languages: { 'id-ID': `${baseUrl}/solutions/plant`, 'en-US': `${baseUrl}/en/solutions/plant` },
  },
  openGraph: {
    title: 'Biosecurity Tanaman - Pupuk Hayati & Insektisida Hayati Premium',
    description: 'Lindungi dan tingkatkan hasil panen dengan produk biosecurity tanaman dari Biosolution.',
    url: `${baseUrl}/solutions/plant`,
  },
};

export const solutionsAnimalMetadata: Metadata = {
  title: 'Biosecurity Hewan - Probiotik Ternak & Unggas',
  description: 'Produk biosecurity hewan premium: SIMBIOS, RAJABIO, MEGABIO untuk ternak, unggas, dan akuakultur. Tingkatkan produktivitas peternakan dan perikanan dengan probiotik berkualitas.',
  keywords: ['biosecurity hewan', 'probiotik ternak', 'probiotik unggas', 'probiotik ikan', 'SIMBIOS', 'RAJABIO', 'MEGABIO', 'akuakultur', 'peternakan'],
  alternates: {
    canonical: `${baseUrl}/solutions/animal`,
    languages: { 'id-ID': `${baseUrl}/solutions/animal`, 'en-US': `${baseUrl}/en/solutions/animal` },
  },
  openGraph: {
    title: 'Biosecurity Hewan - Probiotik Ternak & Akuakultur Premium',
    description: 'Tingkatkan kesehatan dan produktivitas ternak dengan produk probiotik dari Biosolution.',
    url: `${baseUrl}/solutions/animal`,
  },
};

export const researchMetadata: Metadata = {
  title: 'Riset & Inovasi Bioteknologi | Biosolution',
  description: 'Pusat riset bioteknologi Biosolution: mikrobiologi, formulasi produk, uji lapangan, dan kolaborasi dengan universitas terkemuka Indonesia. Inovasi berkelanjutan untuk pertanian Indonesia.',
  keywords: ['riset bioteknologi', 'laboratorium mikrobiologi', 'penelitian pertanian', 'inovasi bioteknologi', 'pengembangan produk'],
  alternates: {
    canonical: `${baseUrl}/research`,
    languages: { 'id-ID': `${baseUrl}/research`, 'en-US': `${baseUrl}/en/research` },
  },
  openGraph: {
    title: 'Riset & Inovasi Bioteknologi Biosolution',
    description: 'Inovasi berbasis riset untuk solusi pertanian berkelanjutan Indonesia.',
    url: `${baseUrl}/research`,
  },
};

export const newsMetadata: Metadata = {
  title: 'Berita & Artikel Bioteknologi | Biosolution',
  description: 'Berita terbaru, artikel edukasi, dan insight tentang bioteknologi pertanian, tips budidaya, manajemen hama, dan tren industri dari Biosolution.',
  keywords: ['berita bioteknologi', 'artikel pertanian', 'tips budidaya', 'manajemen hama', 'tren pertanian'],
  alternates: {
    canonical: `${baseUrl}/news`,
    languages: { 'id-ID': `${baseUrl}/news`, 'en-US': `${baseUrl}/en/news` },
  },
  openGraph: {
    title: 'Berita & Artikel Bioteknologi Pertanian',
    description: 'Update terbaru seputar bioteknologi, pertanian berkelanjutan, dan industri agrikultur Indonesia.',
    url: `${baseUrl}/news`,
  },
};

export const contactMetadata: Metadata = {
  title: 'Hubungi Kami - Konsultasi & Kerjasama | Biosolution',
  description: 'Hubungi Biosolution untuk konsultasi produk, kerjasama distribusi, jasa maklon, atau kemitraan B2B. WhatsApp: +62 857-4224-9591. Email: info@biosolution.tech.',
  keywords: ['kontak biosolution', 'konsultasi', 'kerjasama', 'distributor', 'maklon', 'B2B'],
  alternates: {
    canonical: `${baseUrl}/contact`,
    languages: { 'id-ID': `${baseUrl}/contact`, 'en-US': `${baseUrl}/en/contact` },
  },
  openGraph: {
    title: 'Hubungi Biosolution - Konsultasi & Kerjasama Bisnis',
    description: 'Siap melayani konsultasi dan kerjasama. WhatsApp: +62 857-4224-9591.',
    url: `${baseUrl}/contact`,
  },
};

// English Page Metadata
export const homeMetadataEN: Metadata = {
  title: "Biosolution | Indonesia's #1 Agricultural Biotechnology",
  description: "Biosolution - Indonesia's leading agricultural biotechnology company. Specialists in bio-fertilizers, bio-insecticides, horticulture biosecurity, animal probiotics, and contract manufacturing. 14+ years experience, serving 19 provinces. Contact: +62 857-4224-9591.",
  keywords: ['agricultural biotechnology', 'bio-fertilizer', 'biosecurity', 'horticulture', 'contract manufacturing', 'probiotics', 'Indonesia'],
  alternates: {
    canonical: `${baseUrl}/en`,
    languages: { 'id-ID': baseUrl, 'en-US': `${baseUrl}/en` },
  },
};

export const aboutMetadataEN: Metadata = {
  title: "About Biosolution - Agricultural Biotech Since 2010",
  description: "Learn about Biosolution (PT Centra Biotech Indonesia) - pioneer of Indonesian agricultural biotechnology. Founded 2010, serving 19 provinces with premium bio-fertilizers, bio-insecticides, and biosecurity solutions.",
  keywords: ['about biosolution', 'biosolution history', 'PT Centra Biotech Indonesia', 'Indonesia biotechnology', 'biosolution founder'],
  alternates: {
    canonical: `${baseUrl}/en/about`,
    languages: { 'id-ID': `${baseUrl}/about`, 'en-US': `${baseUrl}/en/about` },
  },
  openGraph: {
    title: "About Biosolution - Indonesia's Agricultural Biotechnology Pioneer",
    description: 'Discover Biosolution - pioneer of Indonesian agricultural biotechnology since 2010. Our vision, mission, AJAIB values, and journey.',
    url: `${baseUrl}/en/about`,
  },
};

export const solutionsMetadataEN: Metadata = {
  title: 'Biotechnology Solutions - Agriculture & Livestock',
  description: "Explore Biosolution's complete biotechnology solutions: bio-fertilizers, bio-insecticides, livestock probiotics, fish probiotics, and biosecurity products for sustainable Indonesian agriculture.",
  keywords: ['biotechnology solutions', 'agricultural products', 'bio-fertilizer', 'bio-insecticide', 'livestock probiotics', 'fish probiotics', 'biosecurity'],
  alternates: {
    canonical: `${baseUrl}/en/solutions`,
    languages: { 'id-ID': `${baseUrl}/solutions`, 'en-US': `${baseUrl}/en/solutions` },
  },
  openGraph: {
    title: 'Complete Biotechnology Solutions - Agriculture, Livestock & Aquaculture',
    description: 'Premium biotechnology products for Indonesian agriculture, livestock, and aquaculture.',
    url: `${baseUrl}/en/solutions`,
  },
};

export const solutionsPlantMetadataEN: Metadata = {
  title: 'Plant Biosecurity - Bio-Fertilizers & Insecticides',
  description: 'Premium plant biosecurity products: FloraOne, BioKiller, BIOJAGAT, and more. Bio-fertilizers and bio-insecticides for horticulture, plantations, and sustainable agriculture.',
  keywords: ['plant biosecurity', 'bio-fertilizer', 'bio-insecticide', 'FloraOne', 'BioKiller', 'BIOJAGAT', 'horticulture', 'organic farming'],
  alternates: {
    canonical: `${baseUrl}/en/solutions/plant`,
    languages: { 'id-ID': `${baseUrl}/solutions/plant`, 'en-US': `${baseUrl}/en/solutions/plant` },
  },
  openGraph: {
    title: 'Plant Biosecurity - Premium Bio-Fertilizers & Bio-Insecticides',
    description: 'Protect and boost your harvest with Biosolution plant biosecurity products.',
    url: `${baseUrl}/en/solutions/plant`,
  },
};

export const solutionsAnimalMetadataEN: Metadata = {
  title: 'Animal Biosecurity - Livestock & Poultry Probiotics',
  description: 'Premium animal biosecurity products: SIMBIOS, RAJABIO, MEGABIO for livestock, poultry, and aquaculture. Boost farm productivity with quality probiotics.',
  keywords: ['animal biosecurity', 'livestock probiotics', 'poultry probiotics', 'fish probiotics', 'SIMBIOS', 'RAJABIO', 'MEGABIO', 'aquaculture', 'livestock'],
  alternates: {
    canonical: `${baseUrl}/en/solutions/animal`,
    languages: { 'id-ID': `${baseUrl}/solutions/animal`, 'en-US': `${baseUrl}/en/solutions/animal` },
  },
  openGraph: {
    title: 'Animal Biosecurity - Premium Livestock & Aquaculture Probiotics',
    description: 'Enhance livestock health and productivity with Biosolution probiotic products.',
    url: `${baseUrl}/en/solutions/animal`,
  },
};

export const researchMetadataEN: Metadata = {
  title: 'Research & Innovation | Biosolution',
  description: "Biosolution's biotechnology research center: microbiology, product formulation, field testing, and collaboration with leading Indonesian universities. Continuous innovation for Indonesian agriculture.",
  keywords: ['biotechnology research', 'microbiology laboratory', 'agricultural research', 'biotechnology innovation', 'product development'],
  alternates: {
    canonical: `${baseUrl}/en/research`,
    languages: { 'id-ID': `${baseUrl}/research`, 'en-US': `${baseUrl}/en/research` },
  },
  openGraph: {
    title: 'Biosolution Research & Biotechnology Innovation',
    description: 'Research-based innovation for sustainable Indonesian agricultural solutions.',
    url: `${baseUrl}/en/research`,
  },
};

export const newsMetadataEN: Metadata = {
  title: 'News & Articles - Agricultural Biotech | Biosolution',
  description: 'Latest news, educational articles, and insights about agricultural biotechnology, farming tips, pest management, and industry trends from Biosolution.',
  keywords: ['biotechnology news', 'agricultural articles', 'farming tips', 'pest management', 'agricultural trends'],
  alternates: {
    canonical: `${baseUrl}/en/news`,
    languages: { 'id-ID': `${baseUrl}/news`, 'en-US': `${baseUrl}/en/news` },
  },
  openGraph: {
    title: 'Agricultural Biotechnology News & Articles',
    description: 'Latest updates on biotechnology, sustainable agriculture, and Indonesian agricultural industry.',
    url: `${baseUrl}/en/news`,
  },
};

export const contactMetadataEN: Metadata = {
  title: 'Contact Us - Consultation & Partnership | Biosolution',
  description: 'Contact Biosolution for product consultation, distribution partnership, contract manufacturing, or B2B cooperation. WhatsApp: +62 857-4224-9591. Email: info@biosolution.tech.',
  keywords: ['contact biosolution', 'consultation', 'partnership', 'distributor', 'contract manufacturing', 'B2B'],
  alternates: {
    canonical: `${baseUrl}/en/contact`,
    languages: { 'id-ID': `${baseUrl}/contact`, 'en-US': `${baseUrl}/en/contact` },
  },
  openGraph: {
    title: 'Contact Biosolution - Consultation & Business Partnership',
    description: 'Ready to serve consultation and partnership. WhatsApp: +62 857-4224-9591.',
    url: `${baseUrl}/en/contact`,
  },
};

// Legal Pages Metadata
export const privacyMetadata: Metadata = {
  title: 'Kebijakan Privasi',
  description: 'Kebijakan privasi Biosolution - bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda sesuai UU No. 27 Tahun 2022 tentang Perlindungan Data Pribadi.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${baseUrl}/privacy`,
    languages: { 'id-ID': `${baseUrl}/privacy`, 'en-US': `${baseUrl}/en/privacy` },
  },
};

export const privacyMetadataEN: Metadata = {
  title: 'Privacy Policy',
  description: "Biosolution's privacy policy - how we collect, use, and protect your personal data in compliance with Indonesian data protection regulations.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${baseUrl}/en/privacy`,
    languages: { 'id-ID': `${baseUrl}/privacy`, 'en-US': `${baseUrl}/en/privacy` },
  },
};

export const termsMetadata: Metadata = {
  title: 'Syarat dan Ketentuan',
  description: 'Syarat dan ketentuan penggunaan layanan Biosolution - ketentuan transaksi B2B, garansi produk, dan aturan penggunaan situs.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${baseUrl}/terms`,
    languages: { 'id-ID': `${baseUrl}/terms`, 'en-US': `${baseUrl}/en/terms` },
  },
};

export const termsMetadataEN: Metadata = {
  title: 'Terms of Service',
  description: "Biosolution's terms of service - B2B transaction terms, product warranty, and website usage rules.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${baseUrl}/en/terms`,
    languages: { 'id-ID': `${baseUrl}/terms`, 'en-US': `${baseUrl}/en/terms` },
  },
};

export const cookiesMetadata: Metadata = {
  title: 'Pengaturan Cookie',
  description: 'Kelola preferensi cookie Anda di situs Biosolution - cookie esensial, analitik, fungsional, dan pemasaran.',
  robots: { index: false, follow: false },
  alternates: {
    canonical: `${baseUrl}/cookies`,
    languages: { 'id-ID': `${baseUrl}/cookies`, 'en-US': `${baseUrl}/en/cookies` },
  },
};

export const cookiesMetadataEN: Metadata = {
  title: 'Cookie Settings',
  description: 'Manage your cookie preferences on Biosolution website - essential, analytics, functional, and marketing cookies.',
  robots: { index: false, follow: false },
  alternates: {
    canonical: `${baseUrl}/en/cookies`,
    languages: { 'id-ID': `${baseUrl}/cookies`, 'en-US': `${baseUrl}/en/cookies` },
  },
};

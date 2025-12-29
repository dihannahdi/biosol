// JSON-LD Structured Data for SEO and GEO Optimization
// This file contains schema.org structured data for better search engine visibility

export interface OrganizationSchemaProps {
  locale?: 'id' | 'en';
}

export function generateOrganizationSchema(locale: 'id' | 'en' = 'id') {
  const isEnglish = locale === 'en';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.biosolution.tech/#organization',
    name: 'Biosolution',
    alternateName: ['PT Centra Biotech Indonesia', 'Centra Biotech', 'Biosolutions Indonesia'],
    url: 'https://www.biosolution.tech',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.biosolution.tech/logo.png',
      width: '512',
      height: '512',
    },
    image: 'https://www.biosolution.tech/og-image.jpg',
    description: isEnglish 
      ? 'Leading Indonesian biotechnology company specializing in bio-fertilizers, bio-insecticides, and sustainable agricultural solutions. Serving 19 provinces since 2010.'
      : 'Perusahaan bioteknologi Indonesia terkemuka yang mengkhususkan diri dalam pupuk hayati, insektisida hayati, dan solusi pertanian berkelanjutan. Melayani 19 provinsi sejak 2010.',
    foundingDate: '2010',
    slogan: isEnglish 
      ? 'Harnessing Nature\'s Wisdom Through Science' 
      : 'Memanfaatkan Kearifan Alam Melalui Sains',
    email: 'info@biosolution.tech',
    telephone: '+62-857-4224-9591',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Raya Lowokwaru No. 100',
      addressLocality: 'Malang',
      addressRegion: 'Jawa Timur',
      postalCode: '65141',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-7.9543',
      longitude: '112.6128',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Indonesia',
    },
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 50,
      maxValue: 100,
    },
    sameAs: [
      'https://wa.me/6285742249591',
      'https://maps.app.goo.gl/jrzvpmv3gxQXVSST7',
    ],
    knowsAbout: [
      'Biotechnology',
      'Agricultural Biotechnology',
      'Bio-fertilizers',
      'Bio-insecticides',
      'Microbial Solutions',
      'Sustainable Agriculture',
      'Plant Biosecurity',
      'Animal Probiotics',
      'Aquaculture Solutions',
      'Organic Farming',
      'Contract Manufacturing',
      'Horticulture',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: isEnglish ? 'Biosolution Product Catalog' : 'Katalog Produk Biosolution',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: isEnglish ? 'Plant Biosecurity' : 'Biosecurity Tanaman',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'FloraOne' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'BioKiller' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'BIOJAGAT' } },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: isEnglish ? 'Animal Health' : 'Kesehatan Hewan',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'SIMBIOS' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'RAJABIO' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'MEGABIO' } },
          ],
        },
      ],
    },
  };
}

export function generateLocalBusinessSchema(locale: 'id' | 'en' = 'id') {
  const isEnglish = locale === 'en';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.biosolution.tech/#localbusiness',
    name: 'Biosolution - PT Centra Biotech Indonesia',
    image: 'https://www.biosolution.tech/og-image.jpg',
    telephone: '+62-857-4224-9591',
    email: 'info@biosolution.tech',
    url: 'https://www.biosolution.tech',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Raya Lowokwaru No. 100',
      addressLocality: 'Malang',
      addressRegion: 'Jawa Timur',
      postalCode: '65141',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-7.9543',
      longitude: '112.6128',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '12:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
  };
}

export function generateProductSchema(product: {
  name: string;
  description: string;
  image?: string;
  category: string;
  sku?: string;
}, locale: 'id' | 'en' = 'id') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image || 'https://www.biosolution.tech/products/default.jpg',
    brand: {
      '@type': 'Brand',
      name: 'Biosolution',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'PT Centra Biotech Indonesia',
    },
    category: product.category,
    sku: product.sku || product.name.toUpperCase().replace(/\s/g, '-'),
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'IDR',
      seller: {
        '@type': 'Organization',
        name: 'Biosolution',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.7',
      reviewCount: '89',
    },
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateWebsiteSchema(locale: 'id' | 'en' = 'id') {
  const isEnglish = locale === 'en';
  const baseUrl = 'https://www.biosolution.tech';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'Biosolution',
    description: isEnglish
      ? 'Biosolution - Leading Biotechnology Solutions for Sustainable Agriculture in Indonesia'
      : 'Biosolution - Solusi Bioteknologi Terdepan untuk Pertanian Berkelanjutan di Indonesia',
    publisher: {
      '@id': `${baseUrl}/#organization`,
    },
    inLanguage: isEnglish ? 'en-US' : 'id-ID',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image || 'https://www.biosolution.tech/og-image.jpg',
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Organization',
      name: article.author || 'Biosolution',
      url: 'https://www.biosolution.tech',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Biosolution',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.biosolution.tech/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  };
}

// GEO-Optimized Comprehensive Schema for AI Search Engines
export function generateComprehensiveSchema(locale: 'id' | 'en' = 'id') {
  const isEnglish = locale === 'en';
  
  return {
    '@context': 'https://schema.org',
    '@graph': [
      generateWebsiteSchema(locale),
      generateOrganizationSchema(locale),
      generateLocalBusinessSchema(locale),
      // Service offerings for contract manufacturing
      {
        '@type': 'Service',
        '@id': 'https://www.biosolution.tech/#contractmanufacturing',
        name: isEnglish ? 'Contract Manufacturing (Maklon)' : 'Jasa Maklon Produk Pertanian',
        description: isEnglish
          ? 'Private label and white label manufacturing services for agricultural biotechnology products including bio-fertilizers, bio-pesticides, and animal probiotics.'
          : 'Layanan pembuatan produk dengan merek sendiri (private label/white label) untuk produk bioteknologi pertanian termasuk pupuk hayati, pestisida hayati, dan probiotik hewan.',
        provider: {
          '@id': 'https://www.biosolution.tech/#organization',
        },
        areaServed: 'Indonesia',
        serviceType: 'Contract Manufacturing',
      },
      // FAQ for common biotechnology questions
      generateFAQSchema([
        {
          question: isEnglish 
            ? 'What is biotechnology in agriculture?' 
            : 'Apa itu bioteknologi pertanian?',
          answer: isEnglish
            ? 'Agricultural biotechnology is the application of scientific techniques to improve crops, livestock, and microorganisms for sustainable farming. Biosolution specializes in microbial biotechnology, creating bio-fertilizers and bio-insecticides that enhance plant health naturally.'
            : 'Bioteknologi pertanian adalah penerapan teknik ilmiah untuk meningkatkan tanaman, ternak, dan mikroorganisme untuk pertanian berkelanjutan. Biosolution mengkhususkan diri dalam bioteknologi mikroba, menciptakan pupuk hayati dan insektisida hayati yang meningkatkan kesehatan tanaman secara alami.',
        },
        {
          question: isEnglish
            ? 'What are bio-fertilizers and how do they work?'
            : 'Apa itu pupuk hayati dan bagaimana cara kerjanya?',
          answer: isEnglish
            ? 'Bio-fertilizers are products containing living microorganisms that enhance nutrient availability in soil. Biosolution products like FloraOne and BIOJAGAT contain beneficial bacteria and fungi that fix nitrogen, solubilize phosphorus, and produce plant growth hormones naturally.'
            : 'Pupuk hayati adalah produk yang mengandung mikroorganisme hidup yang meningkatkan ketersediaan nutrisi di tanah. Produk Biosolution seperti FloraOne dan BIOJAGAT mengandung bakteri dan jamur menguntungkan yang mengikat nitrogen, melarutkan fosfor, dan menghasilkan hormon pertumbuhan tanaman secara alami.',
        },
        {
          question: isEnglish
            ? 'What is biosecurity in horticulture?'
            : 'Apa itu biosecurity dalam hortikultura?',
          answer: isEnglish
            ? 'Biosecurity in horticulture refers to measures that protect crops from pests, diseases, and invasive species. Biosolution provides comprehensive biosecurity solutions including biological pest control agents like BioKiller and plant protection products for sustainable crop management.'
            : 'Biosecurity dalam hortikultura mengacu pada langkah-langkah yang melindungi tanaman dari hama, penyakit, dan spesies invasif. Biosolution menyediakan solusi biosecurity komprehensif termasuk agen pengendali hama biologis seperti BioKiller dan produk perlindungan tanaman untuk manajemen tanaman berkelanjutan.',
        },
        {
          question: isEnglish
            ? 'Does Biosolution offer contract manufacturing (maklon) services?'
            : 'Apakah Biosolution menyediakan jasa maklon?',
          answer: isEnglish
            ? 'Yes, Biosolution offers comprehensive contract manufacturing (maklon) services for agricultural and biotechnology products. We provide private label and white label manufacturing with full R&D support, quality assurance, and regulatory compliance assistance.'
            : 'Ya, Biosolution menyediakan layanan maklon komprehensif untuk produk pertanian dan bioteknologi. Kami menyediakan pembuatan private label dan white label dengan dukungan R&D penuh, jaminan kualitas, dan bantuan kepatuhan regulasi.',
        },
        {
          question: isEnglish
            ? 'What areas in Indonesia does Biosolution serve?'
            : 'Wilayah mana saja di Indonesia yang dilayani Biosolution?',
          answer: isEnglish
            ? 'Biosolution serves 19 provinces across Indonesia, with a strong presence in Java, Sumatra, Kalimantan, Sulawesi, and Bali. We have an extensive distribution network and provide technical support to agricultural businesses nationwide.'
            : 'Biosolution melayani 19 provinsi di seluruh Indonesia, dengan kehadiran kuat di Jawa, Sumatera, Kalimantan, Sulawesi, dan Bali. Kami memiliki jaringan distribusi yang luas dan menyediakan dukungan teknis untuk bisnis pertanian di seluruh negeri.',
        },
      ]),
    ],
  };
}

// Component to inject JSON-LD into page head
export function JsonLdScript({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

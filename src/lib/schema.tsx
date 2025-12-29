// JSON-LD Structured Data for SEO and GEO Optimization
// This file contains schema.org structured data for better search engine visibility

export interface OrganizationSchemaProps {
  locale?: 'id' | 'en';
}

export function generateOrganizationSchema(locale: 'id' | 'en' = 'id') {
  const isEnglish = locale === 'en';
  
  return {
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
    image: product.image || 'https://www.biosolution.tech/og-image.jpg',
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
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@type': 'FAQPage',
    '@id': 'https://www.biosolution.tech/#faq',
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

// Schema for Pupuk Hayati / Bio-Fertilizer pages
export function generatePupukHayatiSchema(locale: 'id' | 'en' = 'id') {
  const isEnglish = locale === 'en';
  const baseUrl = 'https://www.biosolution.tech';
  
  return {
    '@context': 'https://schema.org',
    '@graph': [
      generateWebsiteSchema(locale),
      generateOrganizationSchema(locale),
      {
        '@type': 'Product',
        '@id': `${baseUrl}/${isEnglish ? 'en/biofertilizer' : 'pupuk-hayati'}/#product`,
        name: isEnglish ? 'Biosolution Organic Bio-Fertilizer' : 'Pupuk Hayati Organik Biosolution',
        description: isEnglish
          ? 'Premium organic bio-fertilizers containing superior microorganisms (Azotobacter, Bacillus, Pseudomonas) for sustainable agriculture. Increase yields 20-30%, reduce chemical fertilizer dependency by 50%.'
          : 'Pupuk hayati organik premium mengandung mikroorganisme unggul (Azotobacter, Bacillus, Pseudomonas) untuk pertanian berkelanjutan. Meningkatkan hasil panen 20-30%, mengurangi ketergantungan pupuk kimia 50%.',
        image: `${baseUrl}/og-pupuk-hayati.jpg`,
        brand: {
          '@type': 'Brand',
          name: 'Biosolution',
        },
        manufacturer: {
          '@type': 'Organization',
          name: 'PT Centra Biotech Indonesia',
          '@id': `${baseUrl}/#organization`,
        },
        category: isEnglish ? 'Bio-Fertilizer' : 'Pupuk Hayati',
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'IDR',
          availability: 'https://schema.org/InStock',
          seller: {
            '@id': `${baseUrl}/#organization`,
          },
        },
      },
      {
        '@type': 'ItemList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@type': 'Product',
              name: 'FloraOne',
              description: isEnglish 
                ? 'Premium liquid bio-fertilizer with 4 superior microbe consortium'
                : 'Pupuk hayati cair premium dengan konsorsium 4 mikroba unggul',
              url: `${baseUrl}/${isEnglish ? 'en/' : ''}products/formula-nutrisi-tanaman-lengkap`,
            },
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@type': 'Product',
              name: 'BIOJAGAT',
              description: isEnglish
                ? 'Multi-purpose organic bio-fertilizer for soil health'
                : 'Pupuk hayati organik serbaguna untuk kesehatan tanah',
              url: `${baseUrl}/${isEnglish ? 'en/' : ''}products/formula-kesehatan-tanah`,
            },
          },
          {
            '@type': 'ListItem',
            position: 3,
            item: {
              '@type': 'Product',
              name: 'MEGABIO',
              description: isEnglish
                ? 'Granular solid bio-fertilizer for large-scale farming'
                : 'Pupuk hayati padat granul untuk pertanian skala besar',
              url: `${baseUrl}/${isEnglish ? 'en/' : ''}products/formula-produktivitas-ternak`,
            },
          },
        ],
      },
      generateFAQSchema([
        {
          question: isEnglish 
            ? 'What is the difference between bio-fertilizer and organic fertilizer?' 
            : 'Apa perbedaan pupuk hayati dan pupuk organik?',
          answer: isEnglish
            ? 'Bio-fertilizer contains living microorganisms that actively increase nutrient availability in soil. Organic fertilizer is the result of organic matter composting that provides nutrients directly. Both complement each other.'
            : 'Pupuk hayati mengandung mikroorganisme hidup yang aktif meningkatkan ketersediaan nutrisi di tanah. Pupuk organik adalah hasil pengomposan bahan organik yang menyediakan nutrisi secara langsung. Keduanya saling melengkapi.',
        },
        {
          question: isEnglish
            ? 'How to use liquid bio-fertilizer?'
            : 'Bagaimana cara menggunakan pupuk hayati cair?',
          answer: isEnglish
            ? 'Liquid bio-fertilizer can be applied by foliar spraying (2-3 ml/liter), soil drenching around roots, or mixed with irrigation water. Apply in morning or afternoon, every 7-14 days.'
            : 'Pupuk hayati cair dapat diaplikasikan dengan penyemprotan foliar (2-3 ml/liter), pengocoran ke tanah sekitar perakaran, atau dicampur air irigasi. Aplikasi pagi atau sore, setiap 7-14 hari.',
        },
        {
          question: isEnglish
            ? 'Is bio-fertilizer safe for organic farming?'
            : 'Apakah pupuk hayati aman untuk tanaman organik?',
          answer: isEnglish
            ? 'Yes, bio-fertilizer is 100% safe for organic farming systems. Biosolution products contain no synthetic chemicals and are compatible with organic farming standards.'
            : 'Ya, pupuk hayati 100% aman untuk sistem pertanian organik. Produk Biosolution tidak mengandung bahan kimia sintetis dan kompatibel dengan standar pertanian organik.',
        },
        {
          question: isEnglish
            ? 'How long until bio-fertilizer shows results?'
            : 'Berapa lama pupuk hayati mulai menunjukkan hasil?',
          answer: isEnglish
            ? 'Bio-fertilizer effects start to show within 2-4 weeks after first application. For optimal results, regular application throughout one growing season is recommended.'
            : 'Efek pupuk hayati mulai terlihat dalam 2-4 minggu setelah aplikasi pertama. Untuk hasil optimal, aplikasi rutin selama satu musim tanam disarankan.',
        },
      ]),
    ],
  };
}

// Schema for Maklon / Contract Manufacturing pages
export function generateMaklonSchema(locale: 'id' | 'en' = 'id') {
  const isEnglish = locale === 'en';
  const baseUrl = 'https://www.biosolution.tech';
  
  return {
    '@context': 'https://schema.org',
    '@graph': [
      generateWebsiteSchema(locale),
      generateOrganizationSchema(locale),
      {
        '@type': 'Service',
        '@id': `${baseUrl}/${isEnglish ? 'en/' : ''}maklon/#service`,
        name: isEnglish ? 'Contract Manufacturing (Maklon) Services' : 'Jasa Maklon Pupuk Hayati & Bioteknologi',
        description: isEnglish
          ? 'Professional contract manufacturing (maklon) services for agricultural biotechnology products. Private label and white label manufacturing for bio-fertilizers, bio-pesticides, and animal probiotics. Full R&D support, Ministry registered facility.'
          : 'Jasa maklon profesional untuk produk bioteknologi pertanian. Produksi private label dan white label untuk pupuk hayati, pestisida hayati, dan probiotik hewan. Dukungan R&D penuh, fasilitas terdaftar Kementan.',
        provider: {
          '@id': `${baseUrl}/#organization`,
        },
        serviceType: isEnglish ? 'Contract Manufacturing' : 'Jasa Maklon',
        areaServed: {
          '@type': 'Country',
          name: 'Indonesia',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: isEnglish ? 'Maklon Service Categories' : 'Kategori Layanan Maklon',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: isEnglish ? 'Bio-Fertilizer Contract Manufacturing' : 'Maklon Pupuk Hayati',
                description: isEnglish 
                  ? 'Custom production of liquid and solid bio-fertilizers with your brand'
                  : 'Produksi custom pupuk hayati cair dan padat dengan brand Anda',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: isEnglish ? 'Bio-Pesticide Contract Manufacturing' : 'Maklon Pestisida Hayati',
                description: isEnglish
                  ? 'Production of bio-insecticides and bio-fungicides'
                  : 'Produksi insektisida dan fungisida hayati',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: isEnglish ? 'Probiotic Contract Manufacturing' : 'Maklon Probiotik Ternak',
                description: isEnglish
                  ? 'Probiotics for poultry, livestock, and aquaculture'
                  : 'Probiotik untuk unggas, ternak, dan akuakultur',
              },
            },
          ],
        },
        termsOfService: `${baseUrl}/${isEnglish ? 'en/' : ''}terms`,
      },
      generateFAQSchema([
        {
          question: isEnglish 
            ? 'What is the minimum order quantity (MOQ) for contract manufacturing?' 
            : 'Berapa MOQ (Minimum Order Quantity) untuk maklon?',
          answer: isEnglish
            ? 'Our MOQ starts from 500 liters for liquid products and 500 kg for solid products. For first orders, we can adjust to your market testing needs.'
            : 'MOQ kami mulai dari 500 liter untuk produk cair dan 500 kg untuk produk padat. Untuk order perdana, kami dapat menyesuaikan dengan kebutuhan uji pasar Anda.',
        },
        {
          question: isEnglish
            ? 'Can I use my own brand (private label)?'
            : 'Apakah bisa menggunakan merek sendiri (private label)?',
          answer: isEnglish
            ? 'Yes, we provide private label and white label services. You can use your own brand, logo, and packaging design.'
            : 'Ya, kami menyediakan layanan private label dan white label. Anda bisa menggunakan brand, logo, dan desain kemasan sendiri.',
        },
        {
          question: isEnglish
            ? 'How long is the production lead time?'
            : 'Berapa lama waktu produksi dari PO hingga pengiriman?',
          answer: isEnglish
            ? 'For existing formulations, lead time is about 2-4 weeks. For new formulation development, add 2-4 weeks for R&D.'
            : 'Untuk formulasi existing, lead time sekitar 2-4 minggu. Untuk pengembangan formulasi baru, tambahan 2-4 minggu untuk R&D.',
        },
        {
          question: isEnglish
            ? 'Can the products be registered with the Ministry of Agriculture?'
            : 'Apakah produk maklon bisa didaftarkan ke Kementan?',
          answer: isEnglish
            ? 'Yes, we assist with Ministry of Agriculture product registration. Our facility is registered and meets regulatory requirements.'
            : 'Ya, kami membantu proses registrasi produk ke Kementerian Pertanian. Fasilitas kami sudah terdaftar dan memenuhi persyaratan regulasi.',
        },
        {
          question: isEnglish
            ? 'What documents are provided?'
            : 'Apa saja dokumen yang disediakan?',
          answer: isEnglish
            ? 'Each product includes COA (Certificate of Analysis), MSDS (Material Safety Data Sheet), Technical Data Sheet, and registration support documents.'
            : 'Setiap produk dilengkapi COA (Certificate of Analysis), MSDS (Material Safety Data Sheet), Technical Data Sheet, dan dokumen pendukung registrasi.',
        },
        {
          question: isEnglish
            ? 'Can I request custom formulations?'
            : 'Apakah bisa request formulasi khusus?',
          answer: isEnglish
            ? 'Absolutely! Our R&D team can develop custom formulations tailored to your target market or specific commodity requirements.'
            : 'Tentu! Tim R&D kami dapat mengembangkan formulasi custom sesuai kebutuhan target pasar atau komoditas spesifik Anda.',
        },
      ]),
      generateBreadcrumbSchema([
        { name: isEnglish ? 'Home' : 'Beranda', url: baseUrl + (isEnglish ? '/en' : '') },
        { name: isEnglish ? 'Contract Manufacturing' : 'Jasa Maklon', url: `${baseUrl}/${isEnglish ? 'en/' : ''}maklon` },
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

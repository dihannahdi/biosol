// Centralized products data for individual product pages
// Benefit-based naming philosophy: "Formula [Benefit]" first, product name secondary
// Philosophy: "Biotechnology for a Sustainable Indonesia"
// Inovasi berbasis biotechnology dan enzyme yang teruji secara laboratorium untuk berbagai sektor

export interface Product {
  id: string;
  slug: string;
  name: string;
  benefitTitle: string;
  tagline: string;
  description: string;
  fullDescription: string;
  category: 'plant' | 'animal' | 'fishery' | 'livestock' | 'household' | 'industrial';
  categoryLabel: string;
  features: string[];
  benefits: string[];
  ingredients: string[];
  application: {
    method: string;
    dosage: string;
    frequency: string;
    timing: string;
  };
  // Enhanced product details for accordion sections
  details: {
    formulation: string;
    packaging: string[];
    shelfLife: string;
    storage: string;
  };
  safeHandling: {
    precautions: string[];
    firstAid: string[];
    disposal: string;
  };
  targetCrops?: string[];
  targetAnimals?: string[];
  targetApplications?: string[];
  certifications?: string[];
  testimonials?: {
    name: string;
    role: string;
    quote: string;
  }[];
}

export const products: Product[] = [
  // ============================================
  // BIOSEKURITI TANAMAN (Plant Biosecurity)
  // ============================================
  {
    id: 'floraone',
    slug: 'formula-nutrisi-tanaman-lengkap',
    name: 'FloraOne',
    benefitTitle: 'Formula Nutrisi Tanaman Lengkap',
    tagline: 'Pupuk Hayati Cair Premium',
    description: 'Konsorsium mikroba unggul untuk meningkatkan ketersediaan hara dan pertumbuhan tanaman secara optimal.',
    fullDescription: `FloraOne adalah pupuk hayati cair premium yang mengandung konsorsium mikroba unggul hasil pengembangan riset Biosolution. Produk ini dirancang untuk meningkatkan ketersediaan nutrisi di dalam tanah dan memacu pertumbuhan tanaman secara optimal.

Dengan kandungan bakteri penambat nitrogen (Azotobacter, Azospirillum), bakteri pelarut fosfat (Bacillus), dan bakteri penghasil hormon pertumbuhan (Pseudomonas), FloraOne mampu meningkatkan efisiensi pemupukan hingga 50%.`,
    category: 'plant',
    categoryLabel: 'Biosekuriti Tanaman',
    features: [
      'Mengandung 4 jenis mikroba unggul',
      'Konsentrasi tinggi 10⁸ cfu/ml',
      'Formula cair mudah aplikasi',
      'Kompatibel dengan pupuk lain'
    ],
    benefits: [
      'Mengurangi kebutuhan pupuk kimia hingga 50%',
      'Meningkatkan hasil panen 20-30%',
      'Memperbaiki struktur dan kesuburan tanah',
      'Meningkatkan ketahanan tanaman terhadap stress'
    ],
    ingredients: [
      'Azotobacter sp. 1×10⁸ cfu/ml',
      'Azospirillum sp. 1×10⁸ cfu/ml',
      'Bacillus sp. 1×10⁸ cfu/ml',
      'Pseudomonas sp. 1×10⁸ cfu/ml'
    ],
    application: {
      method: 'Penyemprotan foliar atau pengocoran ke tanah',
      dosage: '2-3 ml per liter air',
      frequency: 'Setiap 7-14 hari',
      timing: 'Pagi atau sore hari'
    },
    details: {
      formulation: 'Suspensi cair (Liquid Suspension)',
      packaging: ['500 ml', '1 Liter', '5 Liter', '20 Liter'],
      shelfLife: '12 bulan dari tanggal produksi',
      storage: 'Simpan di tempat sejuk dan kering, hindari sinar matahari langsung'
    },
    safeHandling: {
      precautions: [
        'Gunakan sarung tangan saat aplikasi',
        'Hindari kontak langsung dengan mata',
        'Jauhkan dari jangkauan anak-anak',
        'Jangan dicampur dengan fungisida kimia'
      ],
      firstAid: [
        'Jika terkena mata: Bilas dengan air bersih selama 15 menit',
        'Jika tertelan: Minum air putih dan konsultasi dokter',
        'Jika terkena kulit: Cuci dengan sabun dan air mengalir'
      ],
      disposal: 'Kemasan bekas dapat didaur ulang. Sisa produk dapat dibuang ke tanah pertanian.'
    },
    targetCrops: ['Padi', 'Jagung', 'Sayuran', 'Buah-buahan', 'Tanaman hias'],
    certifications: ['Kementan RI', 'Sertifikat Organik'],
    testimonials: [
      {
        name: 'Pak Suroto',
        role: 'Petani Padi, Klaten',
        quote: 'Hasil panen meningkat 25% dan biaya pupuk turun drastis. FloraOne benar-benar mengubah cara bertani saya.'
      }
    ]
  },
  {
    id: 'biokiller-sl',
    slug: 'formula-pengendalian-hama-hayati',
    name: 'BIOKILLER SL',
    benefitTitle: 'Formula Pengendalian Hama Hayati',
    tagline: 'Insektisida Hayati Spektrum Luas',
    description: 'Insektisida hayati berbasis jamur entomopatogen untuk pengendalian hama tanaman secara biologis.',
    fullDescription: `BIOKILLER SL adalah insektisida hayati yang mengandung dua jenis jamur entomopatogen yaitu Beauveria bassiana dan Metarhizium anisopliae. Produk ini efektif mengendalikan berbagai jenis hama tanaman termasuk ulat grayak, wereng, kutu daun, dan hama penggerek.

Mekanisme kerja biologis membuat BIOKILLER SL tidak menyebabkan resistensi pada hama, aman untuk lingkungan, dan tidak meninggalkan residu berbahaya pada hasil panen.`,
    category: 'plant',
    categoryLabel: 'Biosekuriti Tanaman',
    features: [
      'Dual action dengan 2 jamur entomopatogen',
      'Efektif terhadap hama resisten',
      'Formulasi SL mudah larut',
      'Tidak merusak ekosistem'
    ],
    benefits: [
      'Efikasi tinggi 80-85% terhadap hama target',
      'Tidak menyebabkan resistensi hama',
      'Aman untuk musuh alami dan serangga bermanfaat',
      'Bebas residu pada hasil panen'
    ],
    ingredients: [
      'Beauveria bassiana 1×10⁶ cfu/ml',
      'Metarhizium anisopliae 1×10⁶ cfu/ml',
      'Carrier dan adjuvant organik'
    ],
    application: {
      method: 'Penyemprotan pada tanaman',
      dosage: '2-3 ml per liter air',
      frequency: 'Setiap 7-10 hari atau saat populasi hama tinggi',
      timing: 'Pagi atau sore hari, hindari siang terik'
    },
    details: {
      formulation: 'Suspensi cair (Soluble Liquid)',
      packaging: ['250 ml', '500 ml', '1 Liter', '5 Liter'],
      shelfLife: '12 bulan dari tanggal produksi',
      storage: 'Simpan di tempat sejuk (15-25°C), hindari sinar matahari langsung'
    },
    safeHandling: {
      precautions: [
        'Gunakan APD lengkap saat aplikasi',
        'Hindari menghirup semprotan',
        'Jauhkan dari sumber makanan',
        'Jangan aplikasikan saat cuaca berangin kencang'
      ],
      firstAid: [
        'Jika terhirup: Pindah ke tempat dengan udara segar',
        'Jika terkena mata: Bilas dengan air bersih selama 15 menit',
        'Jika tertelan: Jangan dimuntahkan, segera ke dokter'
      ],
      disposal: 'Kemasan bekas harus dibilas 3x sebelum dibuang. Sisa produk dapat diencerkan dan diaplikasikan ke tanah.'
    },
    targetCrops: ['Jagung', 'Padi', 'Sayuran', 'Cabai', 'Kedelai'],
    certifications: ['Kementan RI', 'Uji Efikasi Univ. Udayana'],
    testimonials: [
      {
        name: 'Pak Bambang',
        role: 'Petani Jagung, Jombang',
        quote: 'Serangan ulat grayak bisa dikendalikan dengan BIOKILLER SL tanpa harus pakai pestisida kimia berbahaya.'
      }
    ]
  },
  {
    id: 'biojagat',
    slug: 'formula-kesuburan-tanah',
    name: 'BIOJAGAT',
    benefitTitle: 'Formula Kesuburan Tanah',
    tagline: 'Bioremediator Tanah Premium',
    description: 'Bioremediator untuk memperbaiki tanah rusak dan meningkatkan kesuburan tanah secara alami.',
    fullDescription: `BIOJAGAT adalah produk bioremediator yang dirancang untuk memulihkan tanah yang rusak akibat penggunaan pupuk kimia berlebihan. Produk ini mengandung konsorsium mikroba yang mampu:

- Mengurai residu pestisida dan polutan
- Memperbaiki struktur agregat tanah
- Meningkatkan C-organik tanah
- Mengaktifkan kembali kehidupan mikroba tanah

Cocok untuk lahan pertanian yang sudah lama menggunakan input kimia dan membutuhkan pemulihan kesuburan alami.`,
    category: 'plant',
    categoryLabel: 'Biosekuriti Tanaman',
    features: [
      'Formulasi khusus bioremediasi',
      'Mengandung mikroba pendegradasi',
      'Memperbaiki struktur tanah',
      'Meningkatkan mikroba tanah'
    ],
    benefits: [
      'Memulihkan tanah rusak dalam 1-2 musim',
      'Meningkatkan C-organik tanah hingga 40%',
      'Mengurangi ketergantungan pupuk kimia',
      'Mendukung transisi ke pertanian organik'
    ],
    ingredients: [
      'Konsorsium bakteri pendegradasi',
      'Jamur mikoriza vesikular arbuskular',
      'Trichoderma sp.',
      'Bahan organik fermentasi'
    ],
    application: {
      method: 'Ditebarkan merata dan dicampur tanah',
      dosage: '100-200 kg per hektar',
      frequency: 'Setiap awal musim tanam',
      timing: '1-2 minggu sebelum tanam'
    },
    details: {
      formulation: 'Granul (Granule)',
      packaging: ['5 kg', '10 kg', '25 kg', '50 kg'],
      shelfLife: '18 bulan dari tanggal produksi',
      storage: 'Simpan di tempat kering dan berventilasi, hindari kelembaban tinggi'
    },
    safeHandling: {
      precautions: [
        'Gunakan masker saat aplikasi untuk menghindari debu',
        'Cuci tangan setelah penggunaan',
        'Simpan jauh dari pupuk kimia',
        'Tidak berbahaya untuk lingkungan'
      ],
      firstAid: [
        'Jika terhirup: Pindah ke tempat dengan udara segar',
        'Jika terkena mata: Bilas dengan air bersih',
        'Jika tertelan: Minum air putih, tidak perlu tindakan khusus'
      ],
      disposal: 'Produk alami, dapat langsung dibuang ke tanah. Kemasan dapat didaur ulang.'
    },
    targetCrops: ['Semua jenis tanaman', 'Lahan pertanian intensif', 'Kebun monokultur'],
    certifications: ['Kementan RI'],
    testimonials: [
      {
        name: 'Pak Wahyu',
        role: 'Petani Sayuran, Malang',
        quote: 'Tanah yang tadinya keras dan tandus sekarang sudah gembur dan subur berkat BIOJAGAT.'
      }
    ]
  },
  {
    id: 'rajabio',
    slug: 'formula-padi-organik',
    name: 'RAJABIO',
    benefitTitle: 'Formula Padi Organik',
    tagline: 'Pupuk Hayati Khusus Padi',
    description: 'Pupuk hayati yang dikembangkan khusus untuk kebutuhan nutrisi dan pertumbuhan tanaman padi.',
    fullDescription: `RAJABIO adalah pupuk hayati premium yang dikembangkan khusus untuk memenuhi kebutuhan nutrisi tanaman padi. Produk ini mengandung konsorsium mikroba yang dioptimalkan untuk lingkungan sawah dengan karakteristik:

- Bakteri penambat nitrogen yang aktif di kondisi anaerob
- Bakteri pelarut fosfat untuk sawah
- Bakteri penghasil siderophore untuk penyerapan besi
- PGPR (Plant Growth Promoting Rhizobacteria)

RAJABIO membantu petani padi meningkatkan produktivitas sekaligus mengurangi ketergantungan pada pupuk kimia.`,
    category: 'plant',
    categoryLabel: 'Biosekuriti Tanaman',
    features: [
      'Diformulasi khusus untuk padi',
      'Aktif di kondisi sawah tergenang',
      'Mengandung PGPR khusus padi',
      'Meningkatkan gabah isi'
    ],
    benefits: [
      'Meningkatkan hasil panen padi hingga 40%',
      'Mengurangi penggunaan urea hingga 50%',
      'Meningkatkan kualitas beras',
      'Memperkuat batang, mengurangi rebah'
    ],
    ingredients: [
      'Azolla-Anabaena association',
      'Bacillus megaterium',
      'Pseudomonas fluorescens',
      'Azospirillum brasilense'
    ],
    application: {
      method: 'Dicampur pupuk organik atau disemprotkan',
      dosage: '5-10 liter per hektar',
      frequency: '3x selama musim tanam',
      timing: 'Fase vegetatif, primordia, dan pengisian bulir'
    },
    details: {
      formulation: 'Suspensi cair (Liquid Suspension)',
      packaging: ['1 Liter', '5 Liter', '20 Liter'],
      shelfLife: '12 bulan dari tanggal produksi',
      storage: 'Simpan di tempat sejuk, kocok sebelum digunakan'
    },
    safeHandling: {
      precautions: [
        'Gunakan sarung tangan saat aplikasi',
        'Hindari kontak langsung dengan mata',
        'Aplikasikan saat cuaca cerah',
        'Jangan dicampur dengan pestisida kimia keras'
      ],
      firstAid: [
        'Jika terkena mata: Bilas dengan air bersih selama 15 menit',
        'Jika tertelan: Minum air putih dan konsultasi dokter',
        'Jika terkena kulit: Cuci dengan sabun dan air'
      ],
      disposal: 'Sisa produk dapat dibuang ke sawah. Kemasan dapat didaur ulang.'
    },
    targetCrops: ['Padi sawah', 'Padi gogo', 'Padi hibrida'],
    certifications: ['Kementan RI', 'Riset Univ. Brawijaya'],
    testimonials: [
      {
        name: 'Kelompok Tani Sejahtera',
        role: 'Klaten, Jawa Tengah',
        quote: 'Produktivitas padi naik dari 6 ton menjadi 8,5 ton per hektar dengan RAJABIO. Luar biasa!'
      }
    ]
  },

  // ============================================
  // KESEHATAN HEWAN - PETERNAKAN (Livestock)
  // ============================================
  {
    id: 'simbios',
    slug: 'formula-probiotik-ternak',
    name: 'SIMBIOS',
    benefitTitle: 'Formula Probiotik Ternak',
    tagline: 'Probiotik Hewan Premium',
    description: 'Probiotik untuk meningkatkan kesehatan pencernaan dan produktivitas ternak unggas dan ruminansia.',
    fullDescription: `SIMBIOS adalah probiotik hewan premium yang mengandung strain bakteri asam laktat dan Bacillus yang telah diseleksi untuk meningkatkan kesehatan pencernaan ternak. Produk ini bermanfaat untuk:

- Meningkatkan efisiensi pakan (FCR)
- Menjaga kesehatan saluran pencernaan
- Meningkatkan kekebalan tubuh alami
- Mengurangi penggunaan antibiotik

Cocok untuk ternak unggas (ayam broiler, layer, bebek) dan ruminansia (sapi, kambing).`,
    category: 'livestock',
    categoryLabel: 'Peternakan',
    features: [
      'Multi-strain probiotik',
      'Stabil pada suhu tinggi',
      'Kompatibel dengan pakan',
      'Tidak mengandung antibiotik'
    ],
    benefits: [
      'Meningkatkan FCR 10-15%',
      'Mengurangi mortalitas unggas',
      'Meningkatkan produksi telur dan daging',
      'Mengurangi bau kotoran kandang'
    ],
    ingredients: [
      'Lactobacillus acidophilus 1×10⁹ cfu/g',
      'Bacillus subtilis 1×10⁹ cfu/g',
      'Saccharomyces cerevisiae 1×10⁸ cfu/g'
    ],
    application: {
      method: 'Dicampur pakan atau air minum',
      dosage: '1-2 gram per kg pakan',
      frequency: 'Setiap hari',
      timing: 'Diberikan rutin dari DOC/starter'
    },
    details: {
      formulation: 'Serbuk (Powder)',
      packaging: ['100 gram', '500 gram', '1 kg', '5 kg', '25 kg'],
      shelfLife: '24 bulan dari tanggal produksi',
      storage: 'Simpan di tempat sejuk dan kering, suhu di bawah 30°C'
    },
    safeHandling: {
      precautions: [
        'Gunakan masker saat mencampur dengan pakan',
        'Cuci tangan setelah penggunaan',
        'Simpan dalam wadah tertutup rapat',
        'Jauhkan dari jangkauan anak-anak'
      ],
      firstAid: [
        'Jika terhirup: Pindah ke tempat dengan udara segar',
        'Jika terkena mata: Bilas dengan air bersih',
        'Jika tertelan: Tidak berbahaya, minum air putih'
      ],
      disposal: 'Produk alami, dapat dibuang bersama limbah organik. Kemasan dapat didaur ulang.'
    },
    targetAnimals: ['Ayam broiler', 'Ayam layer', 'Bebek', 'Sapi', 'Kambing'],
    certifications: ['Kementan RI', 'Uji Lab Fakultas Peternakan UGM'],
    testimonials: [
      {
        name: 'Pak Hendra',
        role: 'Peternak Ayam, Blitar',
        quote: 'FCR turun dari 1.7 ke 1.5 dan ayam lebih sehat. SIMBIOS sudah jadi kebutuhan wajib peternakan saya.'
      }
    ]
  },
  {
    id: 'silase-bio',
    slug: 'formula-silase-fermentasi',
    name: 'SILASE BIO',
    benefitTitle: 'Formula Silase Fermentasi',
    tagline: 'Inokulan Silase Premium',
    description: 'Inokulan bakteri asam laktat untuk pembuatan silase berkualitas tinggi dengan fermentasi optimal.',
    fullDescription: `SILASE BIO adalah inokulan silase yang mengandung bakteri asam laktat terseleksi untuk mempercepat dan mengoptimalkan proses fermentasi silase. Produk ini dirancang untuk:

- Mempercepat penurunan pH silase
- Mencegah pertumbuhan jamur dan bakteri pembusuk
- Mempertahankan nilai nutrisi hijauan
- Meningkatkan palatabilitas dan kecernaan

Cocok untuk silase rumput, jagung, tebon, dan berbagai hijauan pakan ternak lainnya.`,
    category: 'livestock',
    categoryLabel: 'Peternakan',
    features: [
      'Bakteri asam laktat homofermentatif',
      'Konsentrasi tinggi 1×10¹¹ cfu/g',
      'Mempercepat fermentasi',
      'Tahan penyimpanan lama'
    ],
    benefits: [
      'pH silase optimal dalam 3-5 hari',
      'Mengurangi kehilangan bahan kering',
      'Mencegah pertumbuhan jamur',
      'Meningkatkan kualitas silase hingga 30%'
    ],
    ingredients: [
      'Lactobacillus plantarum 1×10¹¹ cfu/g',
      'Lactobacillus buchneri 1×10¹⁰ cfu/g',
      'Pediococcus acidilactici 1×10¹⁰ cfu/g',
      'Carrier maltodextrin'
    ],
    application: {
      method: 'Dilarutkan dalam air dan disemprotkan merata pada hijauan',
      dosage: '1 gram per 100 kg hijauan segar',
      frequency: 'Sekali saat pembuatan silase',
      timing: 'Segera setelah pemotongan hijauan'
    },
    details: {
      formulation: 'Serbuk lyophilized (Freeze-dried Powder)',
      packaging: ['50 gram', '100 gram', '500 gram', '1 kg'],
      shelfLife: '24 bulan dari tanggal produksi (dalam kemasan tertutup)',
      storage: 'Simpan di tempat sejuk dan kering, idealnya di kulkas (2-8°C)'
    },
    safeHandling: {
      precautions: [
        'Gunakan masker saat aplikasi',
        'Larutkan dalam air bersih non-klorin',
        'Gunakan segera setelah dilarutkan',
        'Simpan dalam kondisi tertutup rapat'
      ],
      firstAid: [
        'Jika terhirup: Pindah ke tempat dengan udara segar',
        'Jika terkena mata: Bilas dengan air bersih',
        'Jika tertelan: Tidak berbahaya, produk food-grade'
      ],
      disposal: 'Produk alami dan aman lingkungan. Kemasan dapat didaur ulang.'
    },
    targetAnimals: ['Sapi perah', 'Sapi potong', 'Kambing', 'Domba', 'Kerbau'],
    certifications: ['Kementan RI', 'SNI Inokulan Silase'],
    testimonials: [
      {
        name: 'Pak Sutarno',
        role: 'Peternak Sapi Perah, Boyolali',
        quote: 'Silase jagung dengan SILASE BIO hasilnya lebih harum dan sapi lebih lahap makannya. Produksi susu juga meningkat.'
      }
    ]
  },
  {
    id: 'megabio',
    slug: 'formula-penggemukan-ternak',
    name: 'MEGABIO',
    benefitTitle: 'Formula Penggemukan Ternak',
    tagline: 'Feed Additive Penggemukan',
    description: 'Suplemen pakan untuk mempercepat pertumbuhan dan penggemukan ternak ruminansia.',
    fullDescription: `MEGABIO adalah suplemen pakan yang diformulasikan khusus untuk mempercepat pertumbuhan dan penggemukan ternak ruminansia. Produk ini mengandung:

- Probiotik untuk optimalisasi pencernaan rumen
- Enzim pencerna serat untuk meningkatkan kecernaan pakan
- Mineral dan vitamin esensial
- Stimulan nafsu makan alami

Cocok untuk program penggemukan sapi potong, kambing, dan domba dengan hasil yang terukur.`,
    category: 'livestock',
    categoryLabel: 'Peternakan',
    features: [
      'Formula lengkap probiotik + enzim',
      'Meningkatkan nafsu makan',
      'Memperbaiki pencernaan rumen',
      'Hasil terukur dalam 30 hari'
    ],
    benefits: [
      'ADG (pertambahan bobot harian) meningkat 15-25%',
      'Efisiensi pakan meningkat 10-15%',
      'Kualitas karkas lebih baik',
      'Mengurangi biaya pakan per kg bobot'
    ],
    ingredients: [
      'Saccharomyces cerevisiae 1×10⁹ cfu/g',
      'Aspergillus oryzae extract',
      'Selulase dan hemiselulase',
      'Mineral chelate kompleks'
    ],
    application: {
      method: 'Dicampur dengan pakan konsentrat',
      dosage: '20-30 gram per ekor per hari',
      frequency: 'Setiap hari selama periode penggemukan',
      timing: 'Dicampur saat penyajian pakan pagi'
    },
    details: {
      formulation: 'Serbuk premix (Premix Powder)',
      packaging: ['500 gram', '1 kg', '5 kg', '25 kg'],
      shelfLife: '18 bulan dari tanggal produksi',
      storage: 'Simpan di tempat sejuk dan kering, hindari sinar matahari langsung'
    },
    safeHandling: {
      precautions: [
        'Gunakan masker saat mencampur pakan',
        'Cuci tangan setelah penggunaan',
        'Tidak untuk konsumsi manusia',
        'Simpan dalam wadah tertutup'
      ],
      firstAid: [
        'Jika terhirup: Pindah ke tempat dengan udara segar',
        'Jika terkena mata: Bilas dengan air bersih',
        'Jika tertelan: Konsultasi dokter jika ada keluhan'
      ],
      disposal: 'Limbah organik dapat dikompos. Kemasan dapat didaur ulang.'
    },
    targetAnimals: ['Sapi potong', 'Kambing', 'Domba'],
    certifications: ['Kementan RI', 'BPOM Pakan'],
    testimonials: [
      {
        name: 'Pak Ruslan',
        role: 'Peternak Sapi, Tuban',
        quote: 'Sapi penggemukan dengan MEGABIO bisa capai ADG 1.2 kg/hari. Luar biasa hasilnya!'
      }
    ]
  },

  // ============================================
  // AKUAKULTUR / PERIKANAN (Fishery)
  // ============================================
  {
    id: 'trico-z-wp',
    slug: 'formula-probiotik-akuakultur',
    name: 'TRICO-Z WP',
    benefitTitle: 'Formula Probiotik Akuakultur',
    tagline: 'Probiotik Air Tambak',
    description: 'Probiotik khusus untuk menjaga kualitas air dan kesehatan ikan/udang di tambak dan kolam budidaya.',
    fullDescription: `TRICO-Z WP adalah probiotik khusus akuakultur yang dikembangkan untuk menjaga kualitas air dan kesehatan ikan/udang di tambak. Produk ini mengandung bakteri pengurai yang:

- Menstabilkan parameter air (pH, DO, amonia)
- Mengurai bahan organik di dasar tambak
- Menekan pertumbuhan bakteri patogen (Vibrio, Aeromonas)
- Meningkatkan plankton alami sebagai pakan alami

Cocok untuk budidaya udang vaname, udang windu, ikan nila, ikan lele, dan spesies akuakultur lainnya.`,
    category: 'fishery',
    categoryLabel: 'Akuakultur',
    features: [
      'Formulasi khusus perairan',
      'Aktif di air payau dan tawar',
      'Menekan bakteri patogen',
      'Meningkatkan kualitas air'
    ],
    benefits: [
      'Meningkatkan survival rate hingga 25%',
      'Menstabilkan parameter air',
      'Mengurangi penggunaan antibiotik',
      'Meningkatkan hasil panen per siklus'
    ],
    ingredients: [
      'Bacillus subtilis aqua strain',
      'Bacillus licheniformis',
      'Lactobacillus sp.',
      'Nitrosomonas sp.'
    ],
    application: {
      method: 'Ditebarkan langsung ke kolam/tambak',
      dosage: '1-2 kg per hektar',
      frequency: 'Setiap 2 minggu',
      timing: 'Pagi hari saat aerator aktif'
    },
    details: {
      formulation: 'Serbuk larut air (Wettable Powder)',
      packaging: ['500 gram', '1 kg', '5 kg', '25 kg'],
      shelfLife: '18 bulan dari tanggal produksi',
      storage: 'Simpan di tempat sejuk dan kering, suhu di bawah 30°C'
    },
    safeHandling: {
      precautions: [
        'Gunakan sarung tangan saat aplikasi',
        'Larutkan dalam air tambak sebelum disebarkan',
        'Aplikasikan saat aerator menyala',
        'Tidak berbahaya untuk ikan dan udang'
      ],
      firstAid: [
        'Jika terkena mata: Bilas dengan air bersih',
        'Jika tertelan: Tidak berbahaya, minum air putih',
        'Jika terkena kulit: Cuci dengan air mengalir'
      ],
      disposal: 'Produk ramah lingkungan, dapat langsung dibuang ke perairan. Kemasan dapat didaur ulang.'
    },
    targetAnimals: ['Udang Vaname', 'Udang Windu', 'Ikan Nila', 'Ikan Lele', 'Ikan Bandeng'],
    certifications: ['Kementan RI', 'BPPBAP Situbondo'],
    testimonials: [
      {
        name: 'Pak Sugeng',
        role: 'Pembudidaya Udang, Situbondo',
        quote: 'Survival rate naik dari 65% ke 85% sejak pakai TRICO-Z WP. Kualitas air juga lebih stabil.'
      }
    ]
  },

  // ============================================
  // HOUSEHOLD CARE (Rumah Tangga & Hotel)
  // ============================================
  {
    id: 'septic-clean',
    slug: 'formula-pengurai-septictank',
    name: 'SEPTIC CLEAN',
    benefitTitle: 'Formula Pengurai Septictank',
    tagline: 'Bioaktivator Septictank Premium',
    description: 'Formulasi bakteri pengurai untuk mengoptimalkan kerja septictank dan mencegah penumpukan limbah organik.',
    fullDescription: `SEPTIC CLEAN adalah bioaktivator septictank yang diformulasikan khusus untuk rumah tangga dan hotel. Produk ini mengandung konsorsium bakteri pengurai yang:

- Mempercepat penguraian limbah organik padat
- Mencegah penyumbatan dan overflow septictank
- Menghilangkan bau tidak sedap dari saluran
- Memperpanjang umur pakai septictank

Solusi biologis yang aman untuk lingkungan, tidak mengandung bahan kimia keras yang dapat merusak sistem septictank atau mencemari tanah.`,
    category: 'household',
    categoryLabel: 'Household Care',
    features: [
      'Bakteri pengurai khusus limbah domestik',
      'Formulasi enzim aktif',
      'Aman untuk semua jenis septictank',
      'Ramah lingkungan, tanpa bahan kimia keras'
    ],
    benefits: [
      'Mencegah septictank penuh dan overflow',
      'Menghilangkan bau tidak sedap',
      'Memperpanjang interval pengurasan',
      'Mencegah penyumbatan pipa saluran'
    ],
    ingredients: [
      'Bacillus subtilis 1×10⁹ cfu/g',
      'Bacillus licheniformis 1×10⁹ cfu/g',
      'Lipase, protease, amylase enzymes',
      'Bio-surfactant alami'
    ],
    application: {
      method: 'Larutkan dalam air dan tuang ke closet/saluran',
      dosage: '50-100 gram per minggu untuk rumah tangga, 200-500 gram untuk hotel',
      frequency: 'Mingguan untuk perawatan rutin',
      timing: 'Malam hari sebelum tidur untuk hasil optimal'
    },
    details: {
      formulation: 'Serbuk larut air (Water Soluble Powder)',
      packaging: ['100 gram', '250 gram', '500 gram', '1 kg', '5 kg'],
      shelfLife: '24 bulan dari tanggal produksi',
      storage: 'Simpan di tempat kering, suhu ruangan, hindari kelembaban tinggi'
    },
    safeHandling: {
      precautions: [
        'Gunakan sarung tangan saat aplikasi',
        'Jauhkan dari jangkauan anak-anak',
        'Tidak untuk dikonsumsi',
        'Hindari kontak dengan mata'
      ],
      firstAid: [
        'Jika terkena mata: Bilas dengan air bersih selama 15 menit',
        'Jika tertelan: Minum air putih dan konsultasi dokter',
        'Jika terkena kulit: Cuci dengan sabun dan air'
      ],
      disposal: 'Produk biodegradable. Kemasan dapat didaur ulang.'
    },
    targetApplications: ['Septictank rumah tangga', 'Hotel & penginapan', 'Rumah sakit', 'Gedung perkantoran', 'Apartemen'],
    certifications: ['BPOM', 'Sertifikat Ramah Lingkungan'],
    testimonials: [
      {
        name: 'Ibu Ratna',
        role: 'Ibu Rumah Tangga, Jakarta',
        quote: 'Sudah 3 tahun pakai SEPTIC CLEAN, septictank tidak pernah bermasalah dan tidak ada bau lagi.'
      }
    ]
  },
  {
    id: 'odor-eliminator',
    slug: 'formula-penghilang-bau',
    name: 'BIO FRESH',
    benefitTitle: 'Formula Penghilang Bau Biologis',
    tagline: 'Bio-Deodorizer Premium',
    description: 'Penghilang bau biologis yang bekerja dengan mengurai sumber bau, bukan hanya menutupinya.',
    fullDescription: `BIO FRESH adalah penghilang bau biologis yang bekerja dengan cara berbeda dari pengharum ruangan biasa. Produk ini mengandung bakteri dan enzim yang:

- Mengurai molekul penyebab bau di sumbernya
- Menghilangkan bau secara permanen, bukan sementara
- Aman untuk semua permukaan dan area
- Tidak mengandung bahan kimia berbahaya

Cocok untuk kamar mandi, dapur, tempat sampah, area hewan peliharaan, dan berbagai sumber bau lainnya.`,
    category: 'household',
    categoryLabel: 'Household Care',
    features: [
      'Mengurai sumber bau, bukan menutupi',
      'Formula bakteri dan enzim aktif',
      'Aman untuk semua permukaan',
      'Aroma segar alami'
    ],
    benefits: [
      'Menghilangkan bau secara permanen',
      'Efektif untuk berbagai jenis bau',
      'Aman untuk hewan peliharaan dan anak-anak',
      'Tidak meninggalkan residu berbahaya'
    ],
    ingredients: [
      'Bacillus sp. 1×10⁸ cfu/ml',
      'Protease enzymes',
      'Lipase enzymes',
      'Essential oil blend (citrus)',
      'Bio-surfactant alami'
    ],
    application: {
      method: 'Semprotkan langsung ke sumber bau atau permukaan',
      dosage: '3-5 semprotan per area',
      frequency: 'Sesuai kebutuhan',
      timing: 'Kapan saja, hasil optimal setelah 30 menit'
    },
    details: {
      formulation: 'Larutan siap pakai (Ready-to-Use Spray)',
      packaging: ['250 ml spray', '500 ml spray', '1 Liter refill', '5 Liter jerigen'],
      shelfLife: '18 bulan dari tanggal produksi',
      storage: 'Simpan di tempat sejuk, jauhkan dari sinar matahari langsung'
    },
    safeHandling: {
      precautions: [
        'Hindari penyemprotan langsung ke wajah',
        'Jauhkan dari jangkauan anak-anak',
        'Jangan disemprotkan ke makanan',
        'Gunakan di ruangan berventilasi baik'
      ],
      firstAid: [
        'Jika terkena mata: Bilas dengan air bersih selama 10 menit',
        'Jika tertelan: Minum air putih dan konsultasi dokter',
        'Jika iritasi kulit: Cuci dengan sabun dan air'
      ],
      disposal: 'Produk biodegradable. Botol dapat didaur ulang.'
    },
    targetApplications: ['Kamar mandi', 'Dapur', 'Tempat sampah', 'Area hewan peliharaan', 'Mobil', 'Sepatu'],
    certifications: ['BPOM', 'Dermatologically tested'],
    testimonials: [
      {
        name: 'Pak Agus',
        role: 'Manager Hotel, Bali',
        quote: 'BIO FRESH solusi terbaik untuk menghilangkan bau di kamar hotel. Tamu sangat puas dengan kebersihannya.'
      }
    ]
  },

  // ============================================
  // BIOPROSES INDUSTRI (Industrial Bioprocess)
  // ============================================
  {
    id: 'indus-waste',
    slug: 'formula-pengurai-limbah-industri',
    name: 'INDUS WASTE',
    benefitTitle: 'Formula Pengurai Limbah Industri',
    tagline: 'Bioremediator Limbah Industri',
    description: 'Konsorsium bakteri pengurai untuk pengolahan limbah cair industri secara biologis dan efisien.',
    fullDescription: `INDUS WASTE adalah bioremediator yang dirancang khusus untuk bioproses industri dalam mengolah limbah cair. Produk ini mengandung konsorsium bakteri yang:

- Mengurai senyawa organik kompleks (COD, BOD)
- Menurunkan kadar amonia dan nitrogen
- Mengurangi bau tidak sedap dari IPAL
- Mempercepat proses sedimentasi lumpur

Cocok untuk berbagai jenis industri termasuk makanan/minuman, tekstil, pulp & paper, dan manufaktur lainnya.`,
    category: 'industrial',
    categoryLabel: 'Bioproses Industri',
    features: [
      'Konsorsium bakteri industri terseleksi',
      'Tahan terhadap fluktuasi beban limbah',
      'Adaptif terhadap berbagai jenis limbah',
      'Mempercepat start-up IPAL'
    ],
    benefits: [
      'Menurunkan COD hingga 85%',
      'Menurunkan BOD hingga 90%',
      'Mengurangi volume lumpur IPAL',
      'Memenuhi baku mutu limbah'
    ],
    ingredients: [
      'Pseudomonas sp. 1×10¹⁰ cfu/g',
      'Bacillus sp. 1×10¹⁰ cfu/g',
      'Rhodococcus sp. 1×10⁹ cfu/g',
      'Nitrosomonas sp. 1×10⁹ cfu/g',
      'Trace minerals dan nutrient'
    ],
    application: {
      method: 'Ditebarkan ke kolam aerasi IPAL',
      dosage: '10-50 ppm tergantung beban limbah',
      frequency: 'Harian untuk maintenance, dosis tinggi untuk start-up',
      timing: 'Saat aerator aktif untuk oksigenasi optimal'
    },
    details: {
      formulation: 'Serbuk konsentrat (Concentrated Powder)',
      packaging: ['1 kg', '5 kg', '25 kg', 'Drum 50 kg'],
      shelfLife: '24 bulan dari tanggal produksi',
      storage: 'Simpan di tempat sejuk dan kering, hindari kelembaban tinggi'
    },
    safeHandling: {
      precautions: [
        'Gunakan APD lengkap saat aplikasi di IPAL',
        'Hindari menghirup debu produk',
        'Cuci tangan dengan sabun setelah handling',
        'Tidak berbahaya untuk lingkungan'
      ],
      firstAid: [
        'Jika terhirup: Pindah ke tempat dengan udara segar',
        'Jika terkena mata: Bilas dengan air bersih selama 15 menit',
        'Jika terkena kulit: Cuci dengan sabun dan air mengalir'
      ],
      disposal: 'Produk ramah lingkungan. Kemasan dapat didaur ulang atau insinerasi.'
    },
    targetApplications: ['Industri makanan & minuman', 'Industri tekstil', 'Industri pulp & paper', 'Industri farmasi', 'Rumah potong hewan'],
    certifications: ['Kementerian LHK', 'ISO 14001 Compatible'],
    testimonials: [
      {
        name: 'Pak Darmawan',
        role: 'Manager IPAL, PT. Tekstil Jaya',
        quote: 'Setelah pakai INDUS WASTE, efisiensi IPAL meningkat drastis. BOD dan COD selalu di bawah baku mutu.'
      }
    ]
  },
  {
    id: 'agri-decomposer',
    slug: 'formula-pengurai-limbah-pertanian',
    name: 'AGRI DECOMPOSER',
    benefitTitle: 'Formula Pengurai Limbah Pertanian',
    tagline: 'Bioaktivator Kompos Premium',
    description: 'Bakteri dan jamur pengurai untuk mempercepat dekomposisi limbah pertanian dan tekstil organik.',
    fullDescription: `AGRI DECOMPOSER adalah bioaktivator yang diformulasikan untuk mempercepat penguraian berbagai limbah organik. Produk ini efektif untuk:

- Limbah pertanian (jerami, sekam, kulit kopi)
- Limbah perkebunan (pelepah sawit, bonggol pisang)
- Limbah industri tekstil (kapas, rayon, viscose)
- Limbah rumah potong hewan (kotoran, sisa jaringan)

Mempercepat proses komposting dari 3-4 bulan menjadi hanya 3-4 minggu dengan kualitas kompos yang lebih baik.`,
    category: 'industrial',
    categoryLabel: 'Bioproses Industri',
    features: [
      'Konsorsium bakteri + jamur pengurai',
      'Aktif di berbagai kondisi pH',
      'Mempercepat komposting hingga 4x',
      'Meningkatkan kualitas kompos'
    ],
    benefits: [
      'Kompos matang dalam 3-4 minggu',
      'Menghilangkan bau limbah organik',
      'Menghasilkan pupuk organik berkualitas',
      'Mengurangi volume limbah hingga 60%'
    ],
    ingredients: [
      'Trichoderma harzianum 1×10⁸ cfu/g',
      'Aspergillus niger 1×10⁸ cfu/g',
      'Bacillus subtilis 1×10⁹ cfu/g',
      'Streptomyces sp. 1×10⁷ cfu/g',
      'Selulase dan ligninase enzymes'
    ],
    application: {
      method: 'Dicampur merata dengan limbah organik',
      dosage: '1 kg per 1 ton limbah organik',
      frequency: 'Sekali di awal proses komposting',
      timing: 'Saat penyusunan tumpukan kompos'
    },
    details: {
      formulation: 'Serbuk granul (Granulated Powder)',
      packaging: ['1 kg', '5 kg', '25 kg', 'Bag 50 kg'],
      shelfLife: '18 bulan dari tanggal produksi',
      storage: 'Simpan di tempat kering, suhu ruangan, hindari sinar matahari langsung'
    },
    safeHandling: {
      precautions: [
        'Gunakan masker dan sarung tangan saat aplikasi',
        'Hindari menghirup debu produk',
        'Cuci tangan setelah penggunaan',
        'Simpan dalam kondisi kering'
      ],
      firstAid: [
        'Jika terhirup: Pindah ke tempat dengan udara segar',
        'Jika terkena mata: Bilas dengan air bersih',
        'Jika tertelan: Tidak berbahaya, minum air putih'
      ],
      disposal: 'Produk organik, dapat langsung dibuang ke tanah atau dicampur dengan kompos.'
    },
    targetApplications: ['Limbah jerami & sekam', 'Limbah perkebunan', 'Limbah tekstil organik', 'Limbah RPH', 'Limbah pasar'],
    certifications: ['Kementan RI', 'SNI Kompos'],
    testimonials: [
      {
        name: 'Pak Sunarto',
        role: 'Pengusaha Pupuk Organik, Solo',
        quote: 'AGRI DECOMPOSER bikin proses komposting jauh lebih cepat. Dari 3 bulan jadi cuma 1 bulan. Kapasitas produksi naik 3x lipat!'
      }
    ]
  }
];

// Helper functions
export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getProductsByCategory = (category: Product['category']): Product[] => {
  return products.filter(p => p.category === category);
};

export const getFeaturedProducts = (limit: number = 4): Product[] => {
  return products.slice(0, limit);
};

// Get all unique categories with labels
export const getCategories = () => {
  const categoryMap: Record<Product['category'], string> = {
    plant: 'Biosekuriti Tanaman',
    animal: 'Kesehatan Hewan',
    livestock: 'Peternakan',
    fishery: 'Akuakultur',
    household: 'Household Care',
    industrial: 'Bioproses Industri'
  };
  return categoryMap;
};

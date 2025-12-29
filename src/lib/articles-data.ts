// Centralized article/news data with benefit-based naming philosophy
// Format: "Formula [Manfaat]" first, then product name in copywriting

export interface Article {
  id: string;
  slug: string;
  title: string;
  benefitTitle: string; // Benefit-based title
  productName: string; // Actual product name
  excerpt: string;
  fullContent: string;
  category: string;
  date: string;
  readTime: string;
  location: string;
  stats: {
    improvement: string;
    area: string;
    farmers: string;
  };
  featured: boolean;
  ingredients?: string[];
  benefits?: string[];
  usage?: string;
  image?: string;
}

export const articles: Article[] = [
  {
    id: "formula-pengendalian-ulat-grayak",
    slug: "formula-pengendalian-ulat-grayak",
    title: "Revolusi di Ladang Jagung: Formula Pengendalian Ulat Grayak",
    benefitTitle: "Formula Pengendalian Ulat Grayak",
    productName: "BIOKILLER SL",
    excerpt:
      "Ulat grayak (Spodoptera frugiperda) telah menyebabkan kerugian ekonomi besar bagi petani jagung di Indonesia. Formula pengendalian hayati dengan Beauveria bassiana dan Metarhizium anisopliae memberikan solusi biologis yang efektif.",
    fullContent: `
## Ancaman Ulat Grayak pada Pertanian Jagung

Ulat grayak (Spodoptera frugiperda) atau Fall Armyworm telah menjadi ancaman serius bagi produksi jagung di Indonesia sejak pertama kali terdeteksi pada tahun 2019. Hama invasif ini mampu menyebabkan kerusakan hingga 70% pada tanaman jagung jika tidak ditangani dengan tepat.

## Solusi Bioteknologi: Formula Pengendalian Ulat Grayak

**BIOKILLER SL** merupakan formula pengendalian hayati yang dikembangkan khusus untuk mengatasi serangan ulat grayak. Produk ini mengandung:

- **Beauveria bassiana** dengan konsentrasi 1×10⁶ cfu/ml
- **Metarhizium anisopliae** dengan konsentrasi 1×10⁶ cfu/ml

Kedua jamur entomopatogen ini bekerja sinergis menginfeksi dan mematikan ulat grayak tanpa meninggalkan residu kimia berbahaya.

## Hasil Penelitian

Berdasarkan laporan penelitian dari Universitas Udayana (B/1705/UN14.2.6/HK.07.00/2025), formula ini menunjukkan:

- **Efikasi 85%** dalam pengendalian ulat grayak
- **Tidak ada resistensi** karena menggunakan agen hayati
- **Aman untuk lingkungan** dan musuh alami
- **Bebas residu** pada hasil panen

## Cara Aplikasi

1. Larutkan 2-3 ml BIOKILLER SL per liter air
2. Aplikasikan pada pagi atau sore hari
3. Semprotkan merata pada seluruh bagian tanaman
4. Ulangi aplikasi setiap 7-10 hari

## Keunggulan Formula Pengendalian Hayati

- Tidak merusak ekosistem
- Aman untuk petani dan konsumen
- Dapat dikombinasikan dengan praktik pertanian organik
- Mendukung pertanian berkelanjutan
    `,
    category: "Biosekuriti Tanaman",
    date: "2025-01-15",
    readTime: "6 min",
    location: "Jawa Tengah",
    stats: {
      improvement: "Efektif 85%",
      area: "Lahan jagung",
      farmers: "Bebas residu",
    },
    featured: true,
    ingredients: ["Beauveria bassiana 1×10⁶ cfu/ml", "Metarhizium anisopliae 1×10⁶ cfu/ml"],
    benefits: ["Efektif 85% melawan ulat grayak", "Tanpa resistensi", "Ramah lingkungan", "Bebas residu"],
    usage: "2-3 ml per liter air, aplikasi setiap 7-10 hari",
    image: "/images/Revolusi di Ladang Jagung Formula Pengendalian Ulat Grayak.png",
  },
  {
    id: "formula-insektisida-anti-resistensi",
    slug: "formula-insektisida-anti-resistensi",
    title: "Formula Insektisida Alami Anti-Resistensi untuk Pertanian Modern",
    benefitTitle: "Formula Insektisida Anti-Resistensi",
    productName: "Bio Magic",
    excerpt:
      "Formula insektisida hayati berbasis mikroorganisme antagonis yang ramah lingkungan untuk mengendalikan hama tanaman tanpa risiko resistensi.",
    fullContent: `
## Masalah Resistensi Pestisida

Penggunaan pestisida kimia secara berlebihan telah menyebabkan banyak hama menjadi resisten, memaksa petani untuk menggunakan dosis yang semakin tinggi dengan biaya yang semakin besar.

## Formula Insektisida Anti-Resistensi

**Bio Magic** hadir sebagai solusi inovatif dengan pendekatan berbeda. Formula ini menggunakan mikroorganisme antagonis yang:

- Menyerang hama melalui mekanisme biologis alami
- Tidak memicu mutasi resistensi pada populasi hama
- Aman untuk serangga bermanfaat seperti lebah dan predator alami

## Keunggulan

- **0% Risiko Resistensi** - mekanisme aksi biologis
- **100% Organik** - sertifikasi pertanian organik
- **Multi-spektrum** - efektif untuk berbagai jenis hama
- **Ramah lingkungan** - tidak mencemari air dan tanah
    `,
    category: "Biosekuriti Tanaman",
    date: "2025-01-10",
    readTime: "5 min",
    location: "Seluruh Indonesia",
    stats: {
      improvement: "0% Resistensi",
      area: "Multi-komoditas",
      farmers: "100% organik",
    },
    featured: true,
    benefits: ["Tanpa risiko resistensi", "100% organik", "Multi-spektrum", "Ramah lingkungan"],
    image: "/images/Formula Insektisida Alami Anti-Resistensi.png",
  },
  {
    id: "formula-organik-padi-sawah",
    slug: "formula-organik-padi-sawah",
    title: "Revolusi Organik untuk Padi Sawah Indonesia",
    benefitTitle: "Formula Organik Padi Sawah",
    productName: "RAJABIO",
    excerpt:
      "Formula organik khusus padi sawah yang meningkatkan produktivitas sekaligus menjaga kelestarian lingkungan melalui pendekatan bioteknologi.",
    fullContent: `
## Transformasi Pertanian Padi

Indonesia sebagai negara agraris dengan padi sebagai komoditas utama membutuhkan pendekatan baru yang berkelanjutan untuk meningkatkan produktivitas tanpa merusak lingkungan.

## Formula Organik Padi Sawah

**RAJABIO** adalah formula organik yang dirancang khusus untuk kebutuhan nutrisi dan perlindungan tanaman padi. Produk ini mengandung:

- Konsorsium bakteri penambat nitrogen
- Mikroba pelarut fosfat dan kalium
- Agen hayati pengendali patogen tular tanah

## Hasil di Lapangan

Petani padi di Jawa Tengah dan Jawa Timur yang menggunakan formula ini melaporkan:

- **Peningkatan hasil panen 40%**
- Kualitas gabah lebih baik
- Pengurangan biaya pupuk kimia
- Tanah menjadi lebih subur setiap musim
    `,
    category: "Biosekuriti Tanaman",
    date: "2025-01-08",
    readTime: "7 min",
    location: "Jawa Tengah & Jawa Timur",
    stats: {
      improvement: "+40% hasil",
      area: "Padi sawah",
      farmers: "25+ petani",
    },
    featured: true,
    benefits: ["+40% hasil panen", "Kualitas gabah lebih baik", "Hemat biaya pupuk", "Tanah lebih subur"],
    image: "/images/Revolusi Organik untuk Padi Sawah Indonesia.png",
  },
  {
    id: "formula-kesuburan-tanah-optimal",
    slug: "formula-kesuburan-tanah-optimal",
    title: "Formula Kesuburan Tanah Optimal dengan Pupuk Hayati Majemuk",
    benefitTitle: "Formula Kesuburan Tanah Optimal",
    productName: "MEGABIO",
    excerpt:
      "Formula pupuk hayati majemuk mengandung konsorsium mikroba bermanfaat yang memperbaiki struktur tanah, meningkatkan ketersediaan unsur hara, dan menekan patogen tular tanah.",
    fullContent: `
## Pentingnya Kesehatan Tanah

Tanah yang sehat adalah fondasi pertanian yang produktif. Penggunaan pupuk kimia berlebihan telah merusak biologi tanah di banyak lahan pertanian Indonesia.

## Formula Kesuburan Tanah Optimal

**MEGABIO** adalah formula pupuk hayati majemuk yang mengembalikan keseimbangan biologi tanah dengan:

- Bakteri penambat nitrogen (Azotobacter, Azospirillum)
- Bakteri pelarut fosfat (Bacillus megaterium)
- Bakteri pelarut kalium (Bacillus mucilaginosus)
- Trichoderma untuk pengendalian patogen

## Manfaat

- Meningkatkan kesuburan tanah 35%
- Memperbaiki struktur tanah
- Meningkatkan efisiensi pemupukan
- Menekan penyakit tular tanah
    `,
    category: "Biosekuriti Tanaman",
    date: "2025-01-05",
    readTime: "5 min",
    location: "Klaten, Jawa Tengah",
    stats: {
      improvement: "+35% kesuburan",
      area: "50+ hektar",
      farmers: "30 petani",
    },
    featured: false,
    benefits: ["+35% kesuburan tanah", "Struktur tanah lebih baik", "Efisiensi pupuk tinggi", "Tekan penyakit tanah"],
    image: "/images/Formula Kesuburan Tanah Optimal dengan Pupuk Hayati Majemuk.png",
  },
  {
    id: "formula-pengendalian-wereng-cokelat",
    slug: "formula-pengendalian-wereng-cokelat",
    title: "Formula Pengendalian Wereng Cokelat pada Padi",
    benefitTitle: "Formula Pengendalian Wereng Cokelat",
    productName: "BIOKILLER SL",
    excerpt:
      "Wereng cokelat menjadi ancaman serius bagi produksi padi nasional. Formula pengendalian hayati dengan entomopatogen khusus untuk mengendalikan populasi wereng.",
    fullContent: `
## Ancaman Wereng Cokelat

Wereng cokelat (Nilaparvata lugens) adalah salah satu hama paling merusak pada tanaman padi di Indonesia. Hama ini tidak hanya merusak tanaman secara langsung tetapi juga menjadi vektor penyakit virus tungro.

## Formula Pengendalian Hayati

**BIOKILLER SL** dengan formulasi khusus entomopatogen efektif mengendalikan wereng cokelat melalui:

- Infeksi jamur pada kutikula serangga
- Produksi toksin yang mematikan hama
- Penyebaran alami dalam populasi wereng

## Keunggulan

- **80% efikasi** dalam pengendalian wereng
- Ramah lingkungan
- Tidak membunuh musuh alami wereng
- Dapat digunakan pada pertanian organik

## Aplikasi

Aplikasikan pada sore hari saat wereng aktif, semprotkan pada pangkal tanaman padi dimana wereng biasa berkumpul.
    `,
    category: "Biosekuriti Tanaman",
    date: "2024-12-28",
    readTime: "6 min",
    location: "Jawa Barat & Jawa Tengah",
    stats: {
      improvement: "80% efikasi",
      area: "Padi sawah",
      farmers: "Ramah lingkungan",
    },
    featured: false,
    benefits: ["80% efikasi", "Ramah lingkungan", "Aman musuh alami", "Cocok pertanian organik"],
    image: "/images/Formula Pengendalian Wereng Cokelat pada Padi.png",
  },
  {
    id: "formula-pupuk-hayati-cair",
    slug: "formula-pupuk-hayati-cair",
    title: "Formula Pupuk Hayati Cair untuk Pertumbuhan Tanaman Maksimal",
    benefitTitle: "Formula Pupuk Hayati Cair",
    productName: "FloraOne",
    excerpt:
      "Formula pupuk hayati cair dengan kandungan mikroba penambat nitrogen dan pelarut fosfat menjadi pilihan petani modern untuk meningkatkan pertumbuhan tanaman secara organik.",
    fullContent: `
## Kebutuhan Nutrisi Tanaman

Tanaman membutuhkan nutrisi yang tersedia dalam bentuk yang dapat diserap. Pupuk hayati cair menyediakan nutrisi melalui aktivitas mikroba yang mengubah unsur hara menjadi bentuk tersedia.

## Formula Pupuk Hayati Cair

**FloraOne** adalah formula pupuk hayati cair yang mengandung:

- Bakteri penambat nitrogen bebas (Azotobacter sp.)
- Bakteri pelarut fosfat (Bacillus sp.)
- Fitohormon alami untuk pertumbuhan

## Manfaat

- Meningkatkan pertumbuhan tanaman 30%
- Memperkuat sistem perakaran
- Meningkatkan serapan nutrisi
- Sertifikasi organik
    `,
    category: "Biosekuriti Tanaman",
    date: "2024-12-20",
    readTime: "4 min",
    location: "19 Provinsi Indonesia",
    stats: {
      improvement: "+30% pertumbuhan",
      area: "Multi-tanaman",
      farmers: "Sertifikasi organik",
    },
    featured: false,
    benefits: ["+30% pertumbuhan", "Akar lebih kuat", "Serapan nutrisi tinggi", "Sertifikasi organik"],
    image: "/images/Formula Pupuk Hayati Cair untuk Pertumbuhan Tanaman Maksimal.png",
  },
  {
    id: "formula-restorasi-lahan-kritis",
    slug: "formula-restorasi-lahan-kritis",
    title: "Formula Restorasi Lahan Kritis Menjadi Produktif",
    benefitTitle: "Formula Restorasi Lahan Kritis",
    productName: "BIOJAGAT",
    excerpt:
      "Formula restorasi lahan yang membantu petani mengubah lahan kritis dan marginal menjadi lahan produktif melalui restorasi biologi tanah yang komprehensif.",
    fullContent: `
## Tantangan Lahan Kritis

Indonesia memiliki jutaan hektar lahan kritis yang tidak produktif akibat degradasi tanah, erosi, dan kehilangan bahan organik.

## Formula Restorasi Lahan

**BIOJAGAT** adalah formula komprehensif untuk restorasi lahan kritis yang bekerja melalui:

- Penambahan bahan organik terdekomposisi
- Inokulasi mikroba bermanfaat
- Perbaikan struktur fisik tanah

## Hasil

Lahan yang sebelumnya kritis dapat kembali produktif dalam 1-2 musim tanam dengan aplikasi yang konsisten.
    `,
    category: "Biosekuriti Tanaman",
    date: "2024-12-15",
    readTime: "5 min",
    location: "Jawa Timur & NTB",
    stats: {
      improvement: "Lahan produktif",
      area: "Lahan kritis",
      farmers: "15 kelompok tani",
    },
    featured: false,
    benefits: ["Restorasi lahan", "Tambah bahan organik", "Perbaiki struktur tanah", "1-2 musim produktif"],
    image: "/images/Formula Restorasi Lahan Kritis Menjadi Produktif.png",
  },
  {
    id: "formula-simbiosis-mikroba-padi",
    slug: "formula-simbiosis-mikroba-padi",
    title: "Formula Simbiosis Mikroba untuk Produktivitas Padi",
    benefitTitle: "Formula Simbiosis Mikroba Padi",
    productName: "SIMBIOS",
    excerpt:
      "Formula yang memanfaatkan simbiosis mutualisme antara tanaman padi dan mikroba rhizosfer untuk meningkatkan serapan hara dan ketahanan terhadap stres.",
    fullContent: `
## Kekuatan Simbiosis

Tanaman padi secara alami bersimbiosis dengan berbagai mikroorganisme di zona perakaran (rhizosfer). Simbiosis ini dapat dimaksimalkan untuk meningkatkan produktivitas.

## Formula Simbiosis Mikroba

**SIMBIOS** mengandung konsorsium mikroba rhizosfer yang telah diseleksi untuk:

- Meningkatkan serapan nitrogen dan fosfor
- Menghasilkan fitohormon pertumbuhan
- Meningkatkan ketahanan terhadap stres kekeringan
- Menekan patogen akar

## Aplikasi

Aplikasikan pada saat tanam dan fase vegetatif untuk hasil optimal.
    `,
    category: "Biosekuriti Tanaman",
    date: "2024-12-10",
    readTime: "6 min",
    location: "Jawa Tengah",
    stats: {
      improvement: "+25% produktivitas",
      area: "Padi sawah",
      farmers: "20 hektar",
    },
    featured: false,
    benefits: ["+25% produktivitas", "Serapan hara optimal", "Tahan kekeringan", "Tekan patogen akar"],
    image: "/images/Formula Simbiosis Mikroba untuk Produktivitas Padi.png",
  },
  {
    id: "formula-fungisida-hayati-hawar-pelepah",
    slug: "formula-fungisida-hayati-hawar-pelepah",
    title: "Formula Fungisida Hayati untuk Hawar Pelepah Padi",
    benefitTitle: "Formula Fungisida Hayati",
    productName: "TRICO-Z WP",
    excerpt:
      "Formula fungisida hayati dengan bahan aktif Trichoderma sp. yang efektif mengendalikan jamur Rhizoctonia solani penyebab hawar pelepah pada tanaman padi.",
    fullContent: `
## Ancaman Hawar Pelepah

Hawar pelepah (Sheath Blight) yang disebabkan oleh Rhizoctonia solani adalah penyakit jamur penting pada padi yang dapat menurunkan hasil hingga 30%.

## Formula Fungisida Hayati

**TRICO-Z WP** mengandung Trichoderma sp. yang bekerja sebagai:

- Antagonis langsung terhadap Rhizoctonia
- Penghasil enzim pemecah dinding sel jamur patogen
- Induktor ketahanan tanaman

## Keunggulan

- 75% efektif mencegah hawar pelepah
- Aman untuk lingkungan
- Tidak meninggalkan residu
- Dapat dikombinasikan dengan fungisida lain
    `,
    category: "Biosekuriti Tanaman",
    date: "2024-12-05",
    readTime: "5 min",
    location: "Jawa Barat & Jawa Tengah",
    stats: {
      improvement: "75% proteksi",
      area: "Padi & palawija",
      farmers: "Aman residu",
    },
    featured: false,
    benefits: ["75% proteksi", "Ramah lingkungan", "Tanpa residu", "Bisa kombinasi"],
    image: "/images/Formula Fungisida Hayati untuk Hawar Pelepah Padi.png",
  },
  {
    id: "formula-pembenah-tanah-organik",
    slug: "formula-pembenah-tanah-organik",
    title: "Formula Pembenah Tanah untuk Kesehatan Lahan Berkelanjutan",
    benefitTitle: "Formula Pembenah Tanah",
    productName: "MASHITAM",
    excerpt:
      "Formula pembenah tanah berbasis karbon organik dan mikroba bermanfaat untuk memperbaiki struktur tanah yang rusak akibat penggunaan pupuk kimia berlebihan.",
    fullContent: `
## Kerusakan Tanah oleh Pupuk Kimia

Penggunaan pupuk kimia secara berlebihan selama puluhan tahun telah menyebabkan penurunan kualitas tanah di banyak lahan pertanian Indonesia.

## Formula Pembenah Tanah

**MASHITAM** adalah formula pembenah tanah yang:

- Menambah kandungan karbon organik tanah
- Memperbaiki struktur dan porositas tanah
- Meningkatkan kapasitas tukar kation (KTK)
- Mengembalikan kehidupan biologi tanah

## Hasil

Penggunaan rutin dapat meningkatkan C-organik tanah hingga 40% dalam satu musim tanam.
    `,
    category: "Biosekuriti Tanaman",
    date: "2024-11-28",
    readTime: "4 min",
    location: "Seluruh Indonesia",
    stats: {
      improvement: "+40% C-organik",
      area: "Tanah kritis",
      farmers: "Berkelanjutan",
    },
    featured: false,
    benefits: ["+40% C-organik", "Struktur tanah baik", "KTK meningkat", "Biologi tanah pulih"],
    image: "/images/Formula Pembenah Tanah untuk Kesehatan Lahan Berkelanjutan.png",
  },
  {
    id: "kolaborasi-unair-bioprotektan",
    slug: "kolaborasi-unair-bioprotektan",
    title: "Kolaborasi FKH UNAIR & PT Centra Biotech: Inovasi Bioprotektan Ramah Lingkungan untuk Ayam Komersial",
    benefitTitle: "Bioprotektan Ramah Lingkungan",
    productName: "Bioprotektan Bacillus",
    excerpt:
      "Tim peneliti dari Fakultas Kedokteran Hewan Universitas Airlangga berkolaborasi dengan PT Centra Biotech Indonesia menciptakan bioprotektan berbasis Bacillus subtilis dan Bacillus coagulans yang ramah lingkungan untuk meningkatkan kesehatan ayam komersial.",
    fullContent: `
## Inovasi Bioprotektan dari Kolaborasi Perguruan Tinggi dan Industri

Fakultas Kedokteran Hewan (FKH) Universitas Airlangga (UNAIR) telah mengukir prestasi gemilang melalui kolaborasi riset dengan PT Centra Biotech Indonesia. Tim peneliti yang dipimpin oleh **Prof. Dr. Iwan Sahrial Hamid drh., M.Si** berhasil menciptakan "Sediaan Bioprotektan yang Mengandung Isolat Bacillus subtilis dan Bacillus coagulans" untuk meningkatkan kesehatan dan produktivitas ayam komersial.

## Tim Peneliti

Kolaborasi ilmiah ini melibatkan para ahli terkemuka:

- **Prof. Dr. Iwan Sahrial Hamid drh., M.Si** - Ketua Tim, FKH UNAIR
- **Dr. Moh. Sukmanadi drh., M.Kes** - Anggota Tim, FKH UNAIR
- **Prof. Dr. Mirni Lamid MP drh** - Anggota Tim, FKH UNAIR
- **Dr. Rondius Solfaine MP drh** - Kolaborator dari FKH Universitas Wijaya Kusuma Surabaya

## Manfaat Bioprotektan

Bioprotektan ini dikembangkan sebagai solusi inovatif untuk industri perunggasan dengan beberapa keunggulan:

1. **Meningkatkan Kualitas Pakan** - Probiotik Bacillus meningkatkan efisiensi penyerapan nutrisi
2. **Mengurangi Ketergantungan Antibiotik** - Pendekatan ramah lingkungan yang mendukung program pengurangan AGP (Antibiotic Growth Promoter)
3. **Meningkatkan Imunitas Ayam** - Memperkuat sistem kekebalan tubuh secara alami
4. **Ramah Lingkungan** - Tidak meninggalkan residu berbahaya pada produk ternak

## Tentang PT Centra Biotech Indonesia

PT Centra Biotech Indonesia, yang dipimpin oleh **Bintang Sediyoadi Putra** sebagai Direktur Utama, merupakan perusahaan bioteknologi yang berfokus pada pengembangan solusi hayati untuk sektor:

- Pertanian (agriculture)
- Peternakan (livestock)
- Perikanan (aquaculture)

Kolaborasi antara perguruan tinggi dan industri ini merupakan contoh nyata sinergi yang menghasilkan inovasi bernilai tinggi untuk kemajuan pertanian dan peternakan Indonesia.

## Sumber

Artikel ini berdasarkan berita resmi dari UNAIR News (12 Mei 2023).
    `,
    category: "Kolaborasi & Riset",
    date: "2023-05-12",
    readTime: "5 min",
    location: "Surabaya, Jawa Timur",
    stats: {
      improvement: "Inovasi Hayati",
      area: "Peternakan Ayam",
      farmers: "Ramah Lingkungan",
    },
    featured: true,
    ingredients: ["Bacillus subtilis", "Bacillus coagulans"],
    benefits: ["Meningkatkan efisiensi pakan", "Mengurangi antibiotik", "Meningkatkan imunitas", "Ramah lingkungan"],
    image: "/images/kolaborasi-unair-bioprotektan.png",
  },
  {
    id: "peningkatan-hasil-panen-padi-klaten",
    slug: "peningkatan-hasil-panen-padi-klaten",
    title: "Peningkatan Hasil Panen Padi 40% di Klaten dengan FloraOne dan BIOJAGAT",
    benefitTitle: "Hasil Panen Padi +40%",
    productName: "FloraOne & BIOJAGAT",
    excerpt:
      "Petani padi di Kabupaten Klaten meningkatkan hasil panen dari 5,2 ton/ha menjadi 7,3 ton/ha setelah menggunakan FloraOne dan BIOJAGAT. ROI tercapai dalam 1 musim tanam dengan penghematan Rp 52 juta per hektar.",
    fullContent: `
## Transformasi Pertanian Padi di Klaten

Kabupaten Klaten, Jawa Tengah, dikenal sebagai salah satu sentra produksi padi di Indonesia. Namun, petani di daerah ini menghadapi tantangan menurunnya kesuburan tanah akibat penggunaan pupuk kimia berlebihan selama puluhan tahun.

## Masalah yang Dihadapi

Sebelum menggunakan produk Biosolution, petani di Klaten menghadapi beberapa kendala:

- **Produktivitas stagnan** di angka 5,2 ton/ha
- **Biaya pupuk kimia tinggi** mencapai Rp 3-4 juta/ha
- **Tanah semakin keras** dan sulit diolah
- **Serangan hama meningkat** setiap musim

## Solusi Biosolution

Kelompok tani di Klaten mulai mengadopsi teknologi bioteknologi Biosolution dengan kombinasi:

1. **FloraOne** - Pupuk hayati cair mengandung konsorsium mikroba yang meningkatkan ketersediaan unsur hara
2. **BIOJAGAT** - Pembenah tanah organik yang memperbaiki struktur dan kesuburan tanah

## Hasil yang Dicapai

Setelah 2 musim tanam, hasilnya sangat mengesankan:

- **Produktivitas naik 40%**: dari 5,2 ton/ha menjadi 7,3 ton/ha
- **Penghematan pupuk kimia 50%**: dari Rp 3,5 juta menjadi Rp 1,75 juta/ha
- **Pendapatan bersih naik Rp 52 juta/ha** per tahun
- **ROI tercapai dalam 1 musim tanam**

## Testimoni Petani

"Kami tidak menyangka hasilnya bisa sedramatis ini. Tanah yang tadinya keras sekarang gembur, tanaman lebih sehat, dan hasil panen jauh melebihi ekspektasi," ujar Pak Sukirman, Ketua Kelompok Tani Makmur Jaya.

## Rekomendasi Aplikasi

- FloraOne: 2-3 liter/ha, diaplikasikan 2 kali (vegetatif dan generatif)
- BIOJAGAT: 10-15 kg/ha, dicampur dengan pupuk organik sebelum tanam

## Kesimpulan

Keberhasilan petani Klaten membuktikan bahwa bioteknologi dapat menjadi solusi untuk meningkatkan produktivitas pertanian secara berkelanjutan.
    `,
    category: "Pertanian",
    date: "2024-01-15",
    readTime: "5 min",
    location: "Klaten, Jawa Tengah",
    stats: {
      improvement: "+40%",
      area: "25 hektar",
      farmers: "Rp 52 juta/ha",
    },
    featured: true,
    ingredients: ["Azotobacter", "Azospirillum", "Bacillus", "Pseudomonas"],
    benefits: ["Produktivitas +40%", "Hemat pupuk 50%", "Tanah lebih subur", "ROI 1 musim"],
    image: "/images/Case Study 1 - Rice Farming Success.png",
  },
  {
    id: "peternakan-ayam-zero-antibiotic",
    slug: "peternakan-ayam-zero-antibiotic",
    title: "Peternakan Ayam Zero Antibiotic dengan MEGABIO: Studi Kasus PT Agro Makmur",
    benefitTitle: "Peternakan Zero Antibiotic",
    productName: "MEGABIO",
    excerpt:
      "PT Agro Makmur berhasil menerapkan sistem peternakan ayam broiler tanpa antibiotik menggunakan probiotik MEGABIO. FCR turun dari 1.72 ke 1.58, mortalitas berkurang 35%, hemat biaya pakan Rp 847 juta per tahun.",
    fullContent: `
## Tantangan Industri Perunggasan Modern

Industri peternakan ayam di Indonesia menghadapi tekanan untuk mengurangi penggunaan antibiotik sebagai pemacu pertumbuhan (AGP). Regulasi pemerintah dan kesadaran konsumen mendorong perubahan menuju sistem peternakan yang lebih sehat.

## Profil PT Agro Makmur

PT Agro Makmur merupakan peternakan ayam broiler dengan kapasitas 50.000 ekor per siklus, berlokasi di Jawa Timur. Perusahaan ini menjadi pionir dalam penerapan sistem zero-antibiotic dengan dukungan teknologi probiotik Biosolution.

## Implementasi MEGABIO

MEGABIO adalah probiotik unggas berbasis Bacillus dan Lactobacillus yang dikembangkan khusus untuk:

1. **Meningkatkan kesehatan usus** ayam
2. **Menekan pertumbuhan bakteri patogen** secara alami
3. **Meningkatkan efisiensi pakan** (FCR)
4. **Mengurangi mortalitas** akibat penyakit pencernaan

## Protokol Aplikasi

- Fase starter (0-14 hari): 1 gram MEGABIO per liter air minum
- Fase grower (15-28 hari): 0.5 gram per liter air minum
- Fase finisher (29-35 hari): 0.5 gram per liter air minum

## Hasil Setelah 6 Bulan Implementasi

Perbandingan sebelum dan sesudah menggunakan MEGABIO:

| Parameter | Sebelum | Sesudah | Perubahan |
|-----------|---------|---------|-----------|
| FCR | 1.72 | 1.58 | -0.14 |
| Mortalitas | 5.2% | 3.4% | -35% |
| Berat Panen | 2.1 kg | 2.25 kg | +7% |
| Biaya Obat | Rp 450/ekor | Rp 120/ekor | -73% |

## Dampak Finansial

Dengan populasi 50.000 ekor dan 8 siklus per tahun:

- **Penghematan pakan**: Rp 672 juta/tahun
- **Penghematan obat**: Rp 132 juta/tahun
- **Peningkatan berat jual**: Rp 43 juta/tahun
- **Total penghematan**: Rp 847 juta/tahun

## Testimoni

"MEGABIO mengubah cara kami beternak. Tanpa antibiotik, ayam justru lebih sehat dan biaya operasional turun drastis," ujar Ir. Bambang Susanto, GM PT Agro Makmur.

## Sertifikasi

PT Agro Makmur kini dalam proses mendapatkan sertifikasi "Antibiotic-Free Poultry" yang akan meningkatkan nilai jual produk di pasar premium.
    `,
    category: "Peternakan",
    date: "2023-12-20",
    readTime: "7 min",
    location: "Jawa Timur",
    stats: {
      improvement: "-35% mortalitas",
      area: "50,000 ekor",
      farmers: "Rp 847 jt/thn",
    },
    featured: true,
    ingredients: ["Bacillus subtilis", "Bacillus coagulans", "Lactobacillus acidophilus"],
    benefits: ["FCR lebih baik", "Mortalitas turun 35%", "Zero antibiotic", "Hemat Rp 847 juta/tahun"],
    image: "/images/Case Study 2 - Poultry Farm Transformation.png",
  },
  {
    id: "budidaya-udang-vaname-situbondo",
    slug: "budidaya-udang-vaname-situbondo",
    title: "Budidaya Udang Vaname Berkelanjutan di Situbondo: Survival Rate Naik 65% ke 82%",
    benefitTitle: "SR Udang Naik ke 82%",
    productName: "AQUABIO & MASHITAM",
    excerpt:
      "Pembudidaya udang vaname di Situbondo berhasil meningkatkan survival rate dari 65% menjadi 82% dengan bioteknologi Biosolution. Panen rata-rata 8,5 ton/kolam, pendapatan bersih naik Rp 127 juta per siklus.",
    fullContent: `
## Potensi dan Tantangan Budidaya Udang di Situbondo

Kabupaten Situbondo, Jawa Timur, memiliki garis pantai sepanjang 150 km yang ideal untuk budidaya udang vaname. Namun, banyak pembudidaya menghadapi masalah kualitas air dan penyakit yang menyebabkan kegagalan panen.

## Masalah Utama yang Dihadapi

Sebelum menggunakan produk Biosolution, pembudidaya mengalami:

- **Survival rate rendah** hanya 65%
- **Kualitas air tidak stabil** terutama pH dan oksigen terlarut
- **Serangan penyakit** seperti WSSV dan vibriosis
- **Ukuran panen tidak seragam**

## Solusi Biosolution untuk Akuakultur

Tim Biosolution merancang protokol khusus menggunakan:

1. **AQUABIO** - Probiotik air untuk menstabilkan kualitas air dan menekan pertumbuhan bakteri patogen
2. **MASHITAM** - Bioaktivator yang meningkatkan daya cerna pakan dan kesehatan usus udang

## Protokol Aplikasi

### Persiapan Kolam
- AQUABIO 5 liter/kolam untuk stabilisasi air 7 hari sebelum tebar benur

### Fase Pemeliharaan
- AQUABIO 2 liter/kolam setiap 3 hari
- MASHITAM 1 kg/ton pakan, dicampur merata

## Hasil yang Dicapai

Setelah 3 siklus produksi, hasilnya sangat memuaskan:

| Parameter | Sebelum | Sesudah | Perubahan |
|-----------|---------|---------|-----------|
| Survival Rate | 65% | 82% | +17% |
| Size Panen | 60-70 | 50 | Lebih besar |
| Produksi/Kolam | 6,2 ton | 8,5 ton | +37% |
| Pendapatan Bersih | Rp 280 juta | Rp 407 juta | +45% |

## Analisis Finansial per Siklus

- **Biaya produksi**: Rp 320 juta
- **Hasil panen**: 8,5 ton x Rp 85.000/kg = Rp 722,5 juta
- **Pendapatan bersih**: Rp 402,5 juta
- **Peningkatan vs sebelumnya**: +Rp 127 juta/siklus

## Testimoni Pembudidaya

"Dulu saya sering gagal panen karena udang mati massal. Setelah pakai produk Biosolution, air kolam lebih stabil dan udang jauh lebih sehat. Sekarang saya bisa panen konsisten 3 kali setahun," ujar H. Samsul Arifin, pembudidaya di Situbondo.

## Dampak Lingkungan

Penggunaan probiotik juga memberikan dampak positif:

- Mengurangi limbah nitrogen ke perairan
- Tidak ada residu antibiotik pada produk
- Mendukung budidaya berkelanjutan

## Replikasi di Lokasi Lain

Keberhasilan ini telah direplikasi di tambak-tambak lain di Situbondo dan Lamongan dengan hasil serupa.
    `,
    category: "Perikanan",
    date: "2023-11-08",
    readTime: "6 min",
    location: "Situbondo, Jawa Timur",
    stats: {
      improvement: "+25% SR",
      area: "10 kolam",
      farmers: "+Rp 127 jt/siklus",
    },
    featured: true,
    ingredients: ["Bacillus", "Nitrosomonas", "Nitrobacter", "Lactobacillus"],
    benefits: ["SR naik 17%", "Produksi +37%", "Kualitas air stabil", "Bebas residu"],
    image: "/images/Case Study 3 - Soil Restoration Project.png",
  },
];

// English translations
export const articlesEN: Article[] = [
  {
    id: "fall-armyworm-control-formula",
    slug: "fall-armyworm-control-formula",
    title: "Revolution in Corn Fields: Fall Armyworm Control Formula",
    benefitTitle: "Fall Armyworm Control Formula",
    productName: "BIOKILLER SL",
    excerpt:
      "Fall armyworm (Spodoptera frugiperda) has caused significant economic losses for corn farmers in Indonesia. This biological control formula with Beauveria bassiana and Metarhizium anisopliae provides an effective biological solution.",
    fullContent: `
## The Fall Armyworm Threat

Fall armyworm (Spodoptera frugiperda) has become a serious threat to corn production in Indonesia since first detected in 2019. This invasive pest can cause up to 70% crop damage if not properly managed.

## Biotechnology Solution: Fall Armyworm Control Formula

**BIOKILLER SL** is a biological control formula specifically developed to combat fall armyworm attacks. This product contains:

- **Beauveria bassiana** at 1×10⁶ cfu/ml concentration
- **Metarhizium anisopliae** at 1×10⁶ cfu/ml concentration

These two entomopathogenic fungi work synergistically to infect and kill fall armyworm without leaving harmful chemical residues.

## Research Results

Based on research reports from Udayana University (B/1705/UN14.2.6/HK.07.00/2025), this formula shows:

- **85% efficacy** in fall armyworm control
- **No resistance** due to biological agents
- **Environmentally safe** for natural enemies
- **Residue-free** on harvest

## Application Method

1. Dissolve 2-3 ml BIOKILLER SL per liter of water
2. Apply in morning or evening
3. Spray evenly on all plant parts
4. Repeat application every 7-10 days
    `,
    category: "Plant Biosecurity",
    date: "2025-01-15",
    readTime: "6 min",
    location: "Central Java",
    stats: {
      improvement: "85% Effective",
      area: "Corn fields",
      farmers: "Residue-free",
    },
    featured: true,
    ingredients: ["Beauveria bassiana 1×10⁶ cfu/ml", "Metarhizium anisopliae 1×10⁶ cfu/ml"],
    benefits: ["85% effective against fall armyworm", "No resistance", "Eco-friendly", "Residue-free"],
  },
  {
    id: "resistance-free-insecticide-formula",
    slug: "resistance-free-insecticide-formula",
    title: "Resistance-Free Natural Insecticide Formula for Modern Farming",
    benefitTitle: "Resistance-Free Insecticide Formula",
    productName: "Bio Magic",
    excerpt:
      "A biological insecticide formula based on antagonistic microorganisms that is environmentally friendly for controlling plant pests without resistance risk.",
    fullContent: `
## The Pesticide Resistance Problem

Excessive use of chemical pesticides has caused many pests to become resistant, forcing farmers to use increasingly higher doses at greater costs.

## Resistance-Free Insecticide Formula

**Bio Magic** offers an innovative solution with a different approach. This formula uses antagonistic microorganisms that:

- Attack pests through natural biological mechanisms
- Do not trigger resistance mutations in pest populations
- Are safe for beneficial insects like bees and natural predators

## Advantages

- **0% Resistance Risk** - biological action mechanism
- **100% Organic** - organic farming certification
- **Multi-spectrum** - effective for various pest types
- **Eco-friendly** - does not pollute water and soil
    `,
    category: "Plant Biosecurity",
    date: "2025-01-10",
    readTime: "5 min",
    location: "All Indonesia",
    stats: {
      improvement: "0% Resistance",
      area: "Multi-commodity",
      farmers: "100% organic",
    },
    featured: true,
    benefits: ["No resistance risk", "100% organic", "Multi-spectrum", "Eco-friendly"],
  },
  {
    id: "organic-rice-paddy-formula",
    slug: "organic-rice-paddy-formula",
    title: "Organic Revolution for Indonesian Rice Paddies",
    benefitTitle: "Organic Rice Paddy Formula",
    productName: "RAJABIO",
    excerpt:
      "A specialized organic formula for rice paddies that increases productivity while preserving the environment through biotechnology approach.",
    fullContent: `
## Rice Farming Transformation

Indonesia as an agricultural country with rice as the main commodity needs a new sustainable approach to increase productivity without damaging the environment.

## Organic Rice Paddy Formula

**RAJABIO** is an organic formula designed specifically for rice plant nutrition and protection needs. This product contains:

- Nitrogen-fixing bacterial consortium
- Phosphate and potassium solubilizing microbes
- Biological agents controlling soilborne pathogens

## Field Results

Rice farmers in Central and East Java using this formula reported:

- **40% increase in harvest yield**
- Better grain quality
- Reduced chemical fertilizer costs
- Soil becomes more fertile each season
    `,
    category: "Plant Biosecurity",
    date: "2025-01-08",
    readTime: "7 min",
    location: "Central & East Java",
    stats: {
      improvement: "+40% yield",
      area: "Rice paddies",
      farmers: "25+ farmers",
    },
    featured: true,
    benefits: ["+40% harvest yield", "Better grain quality", "Save fertilizer costs", "More fertile soil"],
  },
  {
    id: "optimal-soil-fertility-formula",
    slug: "optimal-soil-fertility-formula",
    title: "Optimal Soil Fertility Formula with Compound Biofertilizer",
    benefitTitle: "Optimal Soil Fertility Formula",
    productName: "MEGABIO",
    excerpt:
      "A compound biofertilizer formula containing beneficial microbe consortium that improves soil structure, increases nutrient availability, and suppresses soilborne pathogens.",
    fullContent: `
## The Importance of Soil Health

Healthy soil is the foundation of productive agriculture. Excessive chemical fertilizer use has damaged soil biology in many Indonesian agricultural lands.

## Optimal Soil Fertility Formula

**MEGABIO** is a compound biofertilizer formula that restores soil biological balance with:

- Nitrogen-fixing bacteria (Azotobacter, Azospirillum)
- Phosphate solubilizing bacteria (Bacillus megaterium)
- Potassium solubilizing bacteria (Bacillus mucilaginosus)
- Trichoderma for pathogen control

## Benefits

- Increases soil fertility by 35%
- Improves soil structure
- Increases fertilization efficiency
- Suppresses soilborne diseases
    `,
    category: "Plant Biosecurity",
    date: "2025-01-05",
    readTime: "5 min",
    location: "Klaten, Central Java",
    stats: {
      improvement: "+35% fertility",
      area: "50+ hectares",
      farmers: "30 farmers",
    },
    featured: false,
    benefits: ["+35% soil fertility", "Better soil structure", "High fertilizer efficiency", "Suppress soil diseases"],
  },
  {
    id: "brown-planthopper-control-formula",
    slug: "brown-planthopper-control-formula",
    title: "Brown Planthopper Control Formula for Rice",
    benefitTitle: "Brown Planthopper Control Formula",
    productName: "BIOKILLER SL",
    excerpt:
      "Brown planthopper has become a serious threat to national rice production. This biological control formula with specialized entomopathogens controls planthopper populations.",
    fullContent: `
## The Brown Planthopper Threat

Brown planthopper (Nilaparvata lugens) is one of the most destructive pests on rice plants in Indonesia. This pest not only damages plants directly but also serves as a vector for tungro virus disease.

## Biological Control Formula

**BIOKILLER SL** with specialized entomopathogen formulation effectively controls brown planthopper through:

- Fungal infection on insect cuticle
- Production of toxins that kill pests
- Natural spread within planthopper population

## Advantages

- **80% efficacy** in planthopper control
- Environmentally friendly
- Does not kill natural enemies of planthopper
- Can be used in organic farming
    `,
    category: "Plant Biosecurity",
    date: "2024-12-28",
    readTime: "6 min",
    location: "West & Central Java",
    stats: {
      improvement: "80% efficacy",
      area: "Rice paddies",
      farmers: "Eco-friendly",
    },
    featured: false,
    benefits: ["80% efficacy", "Eco-friendly", "Safe for natural enemies", "Suitable for organic farming"],
  },
  {
    id: "liquid-biofertilizer-formula",
    slug: "liquid-biofertilizer-formula",
    title: "Liquid Biofertilizer Formula for Maximum Plant Growth",
    benefitTitle: "Liquid Biofertilizer Formula",
    productName: "FloraOne",
    excerpt:
      "A liquid biofertilizer formula with nitrogen-fixing and phosphate-solubilizing microbes is the choice of modern farmers for organic plant growth enhancement.",
    fullContent: `
## Plant Nutrition Needs

Plants need nutrients available in absorbable form. Liquid biofertilizers provide nutrients through microbial activity that converts nutrients into available forms.

## Liquid Biofertilizer Formula

**FloraOne** is a liquid biofertilizer formula containing:

- Free nitrogen-fixing bacteria (Azotobacter sp.)
- Phosphate solubilizing bacteria (Bacillus sp.)
- Natural phytohormones for growth

## Benefits

- Increases plant growth by 30%
- Strengthens root system
- Increases nutrient uptake
- Organic certified
    `,
    category: "Plant Biosecurity",
    date: "2024-12-20",
    readTime: "4 min",
    location: "19 Indonesian Provinces",
    stats: {
      improvement: "+30% growth",
      area: "Multi-crop",
      farmers: "Organic certified",
    },
    featured: false,
    benefits: ["+30% growth", "Stronger roots", "High nutrient uptake", "Organic certified"],
  },
  {
    id: "degraded-land-restoration-formula",
    slug: "degraded-land-restoration-formula",
    title: "Degraded Land Restoration Formula",
    benefitTitle: "Degraded Land Restoration Formula",
    productName: "BIOJAGAT",
    excerpt:
      "A land restoration formula that helps farmers transform degraded and marginal land into productive land through comprehensive soil biological restoration.",
    fullContent: `
## The Degraded Land Challenge

Indonesia has millions of hectares of degraded land that is unproductive due to soil degradation, erosion, and loss of organic matter.

## Land Restoration Formula

**BIOJAGAT** is a comprehensive formula for degraded land restoration that works through:

- Addition of decomposed organic matter
- Beneficial microbe inoculation
- Physical soil structure improvement

## Results

Previously degraded land can become productive again within 1-2 growing seasons with consistent application.
    `,
    category: "Plant Biosecurity",
    date: "2024-12-15",
    readTime: "5 min",
    location: "East Java & NTB",
    stats: {
      improvement: "Productive land",
      area: "Degraded land",
      farmers: "15 farmer groups",
    },
    featured: false,
    benefits: ["Land restoration", "Add organic matter", "Improve soil structure", "1-2 seasons productive"],
  },
  {
    id: "microbial-symbiosis-rice-formula",
    slug: "microbial-symbiosis-rice-formula",
    title: "Microbial Symbiosis Formula for Rice Productivity",
    benefitTitle: "Microbial Symbiosis Rice Formula",
    productName: "SIMBIOS",
    excerpt:
      "A formula utilizing mutualistic symbiosis between rice plants and rhizosphere microbes to enhance nutrient uptake and stress tolerance.",
    fullContent: `
## The Power of Symbiosis

Rice plants naturally form symbiosis with various microorganisms in the root zone (rhizosphere). This symbiosis can be maximized to increase productivity.

## Microbial Symbiosis Formula

**SIMBIOS** contains selected rhizosphere microbe consortium for:

- Increasing nitrogen and phosphorus uptake
- Producing growth phytohormones
- Increasing drought stress tolerance
- Suppressing root pathogens

## Application

Apply at planting and vegetative phase for optimal results.
    `,
    category: "Plant Biosecurity",
    date: "2024-12-10",
    readTime: "6 min",
    location: "Central Java",
    stats: {
      improvement: "+25% productivity",
      area: "Rice paddies",
      farmers: "20 hectares",
    },
    featured: false,
    benefits: ["+25% productivity", "Optimal nutrient uptake", "Drought tolerant", "Suppress root pathogens"],
  },
  {
    id: "biological-fungicide-sheath-blight-formula",
    slug: "biological-fungicide-sheath-blight-formula",
    title: "Biological Fungicide Formula for Rice Sheath Blight",
    benefitTitle: "Biological Fungicide Formula",
    productName: "TRICO-Z WP",
    excerpt:
      "A biological fungicide formula with Trichoderma sp. active ingredient that effectively controls Rhizoctonia solani fungus causing sheath blight in rice plants.",
    fullContent: `
## The Sheath Blight Threat

Sheath blight caused by Rhizoctonia solani is an important fungal disease in rice that can reduce yields by up to 30%.

## Biological Fungicide Formula

**TRICO-Z WP** contains Trichoderma sp. that works as:

- Direct antagonist against Rhizoctonia
- Producer of enzymes breaking down pathogen cell walls
- Plant resistance inducer

## Advantages

- 75% effective in preventing sheath blight
- Environmentally safe
- Leaves no residue
- Can be combined with other fungicides
    `,
    category: "Plant Biosecurity",
    date: "2024-12-05",
    readTime: "5 min",
    location: "West & Central Java",
    stats: {
      improvement: "75% protection",
      area: "Rice & crops",
      farmers: "Residue-safe",
    },
    featured: false,
    benefits: ["75% protection", "Eco-friendly", "No residue", "Can combine"],
  },
  {
    id: "organic-soil-amendment-formula",
    slug: "organic-soil-amendment-formula",
    title: "Organic Soil Amendment Formula for Sustainable Land Health",
    benefitTitle: "Organic Soil Amendment Formula",
    productName: "MASHITAM",
    excerpt:
      "A soil amendment formula based on organic carbon and beneficial microbes to repair soil structure damaged by excessive chemical fertilizer use.",
    fullContent: `
## Soil Damage from Chemical Fertilizers

Excessive chemical fertilizer use over decades has caused soil quality decline in many Indonesian agricultural lands.

## Organic Soil Amendment Formula

**MASHITAM** is a soil amendment formula that:

- Adds soil organic carbon content
- Improves soil structure and porosity
- Increases cation exchange capacity (CEC)
- Restores soil biological life

## Results

Regular use can increase soil C-organic by up to 40% in one growing season.
    `,
    category: "Plant Biosecurity",
    date: "2024-11-28",
    readTime: "4 min",
    location: "All Indonesia",
    stats: {
      improvement: "+40% C-organic",
      area: "Degraded soil",
      farmers: "Sustainable",
    },
    featured: false,
    benefits: ["+40% C-organic", "Good soil structure", "Increased CEC", "Restored soil biology"],
  },
  {
    id: "unair-bioprotectant-collaboration",
    slug: "unair-bioprotectant-collaboration",
    title: "FKH UNAIR & PT Centra Biotech Collaboration: Eco-Friendly Bioprotectant Innovation for Commercial Poultry",
    benefitTitle: "Eco-Friendly Bioprotectant",
    productName: "Bacillus Bioprotectant",
    excerpt:
      "Research team from Faculty of Veterinary Medicine, Airlangga University collaborates with PT Centra Biotech Indonesia to create an environmentally friendly bioprotectant based on Bacillus subtilis and Bacillus coagulans for improving commercial poultry health.",
    fullContent: `
## Bioprotectant Innovation from University-Industry Collaboration

The Faculty of Veterinary Medicine (FKH) at Airlangga University (UNAIR) has achieved remarkable success through research collaboration with PT Centra Biotech Indonesia. The research team led by **Prof. Dr. Iwan Sahrial Hamid drh., M.Si** successfully created a "Bioprotectant Formulation Containing Bacillus subtilis and Bacillus coagulans Isolates" to improve the health and productivity of commercial poultry.

## Research Team

This scientific collaboration involves leading experts:

- **Prof. Dr. Iwan Sahrial Hamid drh., M.Si** - Team Leader, FKH UNAIR
- **Dr. Moh. Sukmanadi drh., M.Kes** - Team Member, FKH UNAIR
- **Prof. Dr. Mirni Lamid MP drh** - Team Member, FKH UNAIR
- **Dr. Rondius Solfaine MP drh** - Collaborator from FKH Wijaya Kusuma University Surabaya

## Bioprotectant Benefits

This bioprotectant was developed as an innovative solution for the poultry industry with several advantages:

1. **Improved Feed Quality** - Bacillus probiotics enhance nutrient absorption efficiency
2. **Reduced Antibiotic Dependency** - An eco-friendly approach supporting AGP (Antibiotic Growth Promoter) reduction programs
3. **Enhanced Poultry Immunity** - Naturally strengthens the immune system
4. **Environmentally Friendly** - Leaves no harmful residues in livestock products

## About PT Centra Biotech Indonesia

PT Centra Biotech Indonesia, led by **Bintang Sediyoadi Putra** as President Director, is a biotechnology company focused on developing biological solutions for:

- Agriculture
- Livestock
- Aquaculture

This university-industry collaboration exemplifies synergy that produces high-value innovation for the advancement of Indonesian agriculture and livestock sectors.

## Source

This article is based on official news from UNAIR News (May 12, 2023).
    `,
    category: "Collaboration & Research",
    date: "2023-05-12",
    readTime: "5 min",
    location: "Surabaya, East Java",
    stats: {
      improvement: "Bio Innovation",
      area: "Poultry Farming",
      farmers: "Eco-Friendly",
    },
    featured: true,
    ingredients: ["Bacillus subtilis", "Bacillus coagulans"],
    benefits: ["Improved feed efficiency", "Reduced antibiotics", "Enhanced immunity", "Eco-friendly"],
  },
  {
    id: "rice-yield-increase-klaten",
    slug: "peningkatan-hasil-panen-padi-klaten",
    title: "40% Rice Yield Increase in Klaten with FloraOne and BIOJAGAT",
    benefitTitle: "Rice Yield +40%",
    productName: "FloraOne & BIOJAGAT",
    excerpt:
      "Rice farmers in Klaten Regency increased their harvest from 5.2 tons/ha to 7.3 tons/ha using FloraOne and BIOJAGAT. ROI achieved in just 1 planting season with savings of Rp 52 million per hectare.",
    fullContent: `
## Agricultural Transformation in Klaten

Klaten Regency, Central Java, is known as one of Indonesia's rice production centers. However, farmers in this area face declining soil fertility due to decades of excessive chemical fertilizer use.

## Problems Faced

Before using Biosolution products, farmers in Klaten faced several challenges:

- **Stagnant productivity** at 5.2 tons/ha
- **High chemical fertilizer costs** reaching Rp 3-4 million/ha
- **Increasingly hard soil** difficult to cultivate
- **Increasing pest attacks** every season

## Biosolution Solution

Farmer groups in Klaten began adopting Biosolution biotechnology with a combination of:

1. **FloraOne** - Liquid biofertilizer containing microbial consortium that increases nutrient availability
2. **BIOJAGAT** - Organic soil conditioner that improves soil structure and fertility

## Results Achieved

After 2 planting seasons, the results were impressive:

- **Productivity up 40%**: from 5.2 tons/ha to 7.3 tons/ha
- **50% chemical fertilizer savings**: from Rp 3.5 million to Rp 1.75 million/ha
- **Net income increase of Rp 52 million/ha** per year
- **ROI achieved in 1 planting season**

## Farmer Testimonial

"We never expected such dramatic results. The soil that was once hard is now loose, plants are healthier, and harvest yields far exceed expectations," said Pak Sukirman, Head of Makmur Jaya Farmer Group.

## Application Recommendations

- FloraOne: 2-3 liters/ha, applied twice (vegetative and generative phases)
- BIOJAGAT: 10-15 kg/ha, mixed with organic fertilizer before planting

## Conclusion

The success of Klaten farmers proves that biotechnology can be a solution for sustainably increasing agricultural productivity.
    `,
    category: "Agriculture",
    date: "2024-01-15",
    readTime: "5 min",
    location: "Klaten, Central Java",
    stats: {
      improvement: "+40%",
      area: "25 hectares",
      farmers: "Rp 52 million/ha",
    },
    featured: true,
    ingredients: ["Azotobacter", "Azospirillum", "Bacillus", "Pseudomonas"],
    benefits: ["Productivity +40%", "50% fertilizer savings", "Healthier soil", "1-season ROI"],
  },
  {
    id: "zero-antibiotic-poultry-farming",
    slug: "peternakan-ayam-zero-antibiotic",
    title: "Zero Antibiotic Poultry Farming with MEGABIO: PT Agro Makmur Case Study",
    benefitTitle: "Zero Antibiotic Farming",
    productName: "MEGABIO",
    excerpt:
      "PT Agro Makmur successfully implemented antibiotic-free broiler farming using MEGABIO probiotic. FCR improved from 1.72 to 1.58, mortality reduced by 35%, saving Rp 847 million in annual feed costs.",
    fullContent: `
## Modern Poultry Industry Challenges

Indonesia's poultry industry faces pressure to reduce antibiotic use as growth promoters (AGP). Government regulations and consumer awareness are driving change toward healthier farming systems.

## PT Agro Makmur Profile

PT Agro Makmur is a broiler farm with a capacity of 50,000 birds per cycle, located in East Java. The company became a pioneer in implementing zero-antibiotic systems with support from Biosolution probiotic technology.

## MEGABIO Implementation

MEGABIO is a Bacillus and Lactobacillus-based poultry probiotic developed specifically to:

1. **Improve gut health** of chickens
2. **Naturally suppress pathogen growth**
3. **Improve feed efficiency** (FCR)
4. **Reduce mortality** from digestive diseases

## Application Protocol

- Starter phase (0-14 days): 1 gram MEGABIO per liter of drinking water
- Grower phase (15-28 days): 0.5 gram per liter of drinking water
- Finisher phase (29-35 days): 0.5 gram per liter of drinking water

## Results After 6 Months of Implementation

Comparison before and after using MEGABIO:

| Parameter | Before | After | Change |
|-----------|--------|-------|--------|
| FCR | 1.72 | 1.58 | -0.14 |
| Mortality | 5.2% | 3.4% | -35% |
| Harvest Weight | 2.1 kg | 2.25 kg | +7% |
| Medicine Cost | Rp 450/bird | Rp 120/bird | -73% |

## Financial Impact

With a population of 50,000 birds and 8 cycles per year:

- **Feed savings**: Rp 672 million/year
- **Medicine savings**: Rp 132 million/year
- **Increased sale weight**: Rp 43 million/year
- **Total savings**: Rp 847 million/year

## Testimonial

"MEGABIO transformed how we farm. Without antibiotics, chickens are actually healthier and operating costs dropped dramatically," said Ir. Bambang Susanto, GM of PT Agro Makmur.

## Certification

PT Agro Makmur is now in the process of obtaining "Antibiotic-Free Poultry" certification which will increase product value in premium markets.
    `,
    category: "Livestock",
    date: "2023-12-20",
    readTime: "7 min",
    location: "East Java",
    stats: {
      improvement: "-35% mortality",
      area: "50,000 birds",
      farmers: "Rp 847M/year",
    },
    featured: true,
    ingredients: ["Bacillus subtilis", "Bacillus coagulans", "Lactobacillus acidophilus"],
    benefits: ["Better FCR", "35% lower mortality", "Zero antibiotic", "Save Rp 847 million/year"],
  },
  {
    id: "sustainable-shrimp-farming-situbondo",
    slug: "budidaya-udang-vaname-situbondo",
    title: "Sustainable Vannamei Shrimp Farming in Situbondo: Survival Rate Up from 65% to 82%",
    benefitTitle: "Shrimp SR Up to 82%",
    productName: "AQUABIO & MASHITAM",
    excerpt:
      "Vannamei shrimp farmers in Situbondo successfully increased survival rate from 65% to 82% using Biosolution biotechnology. Average harvest of 8.5 tons/pond, net income up Rp 127 million per cycle.",
    fullContent: `
## Potential and Challenges of Shrimp Farming in Situbondo

Situbondo Regency, East Java, has a 150 km coastline ideal for vannamei shrimp farming. However, many farmers face water quality and disease problems causing crop failures.

## Main Problems Faced

Before using Biosolution products, farmers experienced:

- **Low survival rate** of only 65%
- **Unstable water quality** especially pH and dissolved oxygen
- **Disease attacks** such as WSSV and vibriosis
- **Non-uniform harvest sizes**

## Biosolution Solution for Aquaculture

The Biosolution team designed a special protocol using:

1. **AQUABIO** - Water probiotic to stabilize water quality and suppress pathogenic bacteria growth
2. **MASHITAM** - Bioactivator that improves feed digestibility and shrimp gut health

## Application Protocol

### Pond Preparation
- AQUABIO 5 liters/pond for water stabilization 7 days before stocking fry

### Maintenance Phase
- AQUABIO 2 liters/pond every 3 days
- MASHITAM 1 kg/ton of feed, mixed evenly

## Results Achieved

After 3 production cycles, the results were very satisfying:

| Parameter | Before | After | Change |
|-----------|--------|-------|--------|
| Survival Rate | 65% | 82% | +17% |
| Harvest Size | 60-70 | 50 | Larger |
| Production/Pond | 6.2 tons | 8.5 tons | +37% |
| Net Income | Rp 280 million | Rp 407 million | +45% |

## Financial Analysis per Cycle

- **Production cost**: Rp 320 million
- **Harvest value**: 8.5 tons x Rp 85,000/kg = Rp 722.5 million
- **Net income**: Rp 402.5 million
- **Increase vs previous**: +Rp 127 million/cycle

## Farmer Testimonial

"I used to often fail harvests due to mass shrimp deaths. After using Biosolution products, pond water is more stable and shrimp are much healthier. Now I can harvest consistently 3 times a year," said H. Samsul Arifin, a farmer in Situbondo.

## Environmental Impact

Probiotic use also provides positive impact:

- Reduces nitrogen waste to waters
- No antibiotic residue in products
- Supports sustainable aquaculture

## Replication in Other Locations

This success has been replicated in other ponds in Situbondo and Lamongan with similar results.
    `,
    category: "Aquaculture",
    date: "2023-11-08",
    readTime: "6 min",
    location: "Situbondo, East Java",
    stats: {
      improvement: "+25% SR",
      area: "10 ponds",
      farmers: "+Rp 127M/cycle",
    },
    featured: true,
    ingredients: ["Bacillus", "Nitrosomonas", "Nitrobacter", "Lactobacillus"],
    benefits: ["SR up 17%", "Production +37%", "Stable water quality", "Residue-free"],
  },
];

// Helper functions
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug || article.id === slug);
}

export function getArticleBySlugEN(slug: string): Article | undefined {
  return articlesEN.find((article) => article.slug === slug || article.id === slug);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((article) => article.featured);
}

export function getFeaturedArticlesEN(): Article[] {
  return articlesEN.filter((article) => article.featured);
}

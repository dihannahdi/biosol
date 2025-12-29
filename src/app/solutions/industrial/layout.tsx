import { Metadata } from "next";
import { generateBreadcrumbSchema, JsonLdScript } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Solusi Bioproses Industri | Biosolution - Bioremediasi & Pengolahan Limbah",
  description: "Solusi bioteknologi untuk industri. Bioremediasi limbah industri, pengurai limbah pertanian dan tekstil untuk produksi yang berkelanjutan.",
  keywords: [
    "bioremediasi industri",
    "pengolahan limbah industri",
    "pengurai limbah pertanian",
    "pengurai limbah tekstil",
    "IPAL industri",
    "biosolution industri",
    "indus waste",
    "agri decomposer",
  ],
  openGraph: {
    title: "Solusi Bioproses Industri | Biosolution",
    description: "Solusi bioteknologi untuk industri. Bioremediasi limbah industri dan pengolahan limbah pertanian/tekstil untuk produksi berkelanjutan.",
    url: "https://www.biosolution.tech/solutions/industrial",
    siteName: "Biosolution",
    locale: "id_ID",
    type: "website",
  },
};

export default function IndustrialSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbData = generateBreadcrumbSchema([
    { name: "Beranda", url: "https://www.biosolution.tech" },
    { name: "Solusi", url: "https://www.biosolution.tech/solutions" },
    { name: "Bioproses Industri", url: "https://www.biosolution.tech/solutions/industrial" },
  ]);

  return (
    <>
      <JsonLdScript data={breadcrumbData} />
      {children}
    </>
  );
}

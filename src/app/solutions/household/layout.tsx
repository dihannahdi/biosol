import { Metadata } from "next";
import { generateBreadcrumbSchema, JsonLdScript } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Solusi Household Care | Biosolution - Pengurai Septictank & Penghilang Bau",
  description: "Solusi bioteknologi untuk rumah tangga dan hotel. Pengurai septictank biologis dan penghilang bau alami yang ramah lingkungan.",
  keywords: [
    "pengurai septictank",
    "penghilang bau biologis",
    "household care",
    "biosolution rumah tangga",
    "solusi hotel",
    "bio fresh",
    "septic clean",
  ],
  openGraph: {
    title: "Solusi Household Care | Biosolution",
    description: "Solusi bioteknologi untuk rumah tangga dan hotel. Pengurai septictank biologis dan penghilang bau alami yang ramah lingkungan.",
    url: "https://www.biosolution.tech/solutions/household",
    siteName: "Biosolution",
    locale: "id_ID",
    type: "website",
  },
};

export default function HouseholdSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbData = generateBreadcrumbSchema([
    { name: "Beranda", url: "https://www.biosolution.tech" },
    { name: "Solusi", url: "https://www.biosolution.tech/solutions" },
    { name: "Household Care", url: "https://www.biosolution.tech/solutions/household" },
  ]);

  return (
    <>
      <JsonLdScript data={breadcrumbData} />
      {children}
    </>
  );
}

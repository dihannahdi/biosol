import { researchMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, JsonLdScript } from "@/lib/schema";

export const metadata = researchMetadata;

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbData = generateBreadcrumbSchema([
    { name: "Beranda", url: "https://www.biosolution.tech" },
    { name: "Riset & Inovasi", url: "https://www.biosolution.tech/research" },
  ]);

  return (
    <>
      <JsonLdScript data={breadcrumbData} />
      {children}
    </>
  );
}

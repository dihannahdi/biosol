import { newsMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, JsonLdScript } from "@/lib/schema";

export const metadata = newsMetadata;

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbData = generateBreadcrumbSchema([
    { name: "Beranda", url: "https://www.biosolution.tech" },
    { name: "Berita & Artikel", url: "https://www.biosolution.tech/news" },
  ]);

  return (
    <>
      <JsonLdScript data={breadcrumbData} />
      {children}
    </>
  );
}

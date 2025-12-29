import { newsMetadataEN } from "@/lib/metadata";
import { generateBreadcrumbSchema, JsonLdScript } from "@/lib/schema";

export const metadata = newsMetadataEN;

export default function NewsLayoutEN({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbData = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.biosolution.tech/en" },
    { name: "News & Articles", url: "https://www.biosolution.tech/en/news" },
  ]);

  return (
    <>
      <JsonLdScript data={breadcrumbData} />
      {children}
    </>
  );
}

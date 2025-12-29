import { solutionsMetadataEN } from "@/lib/metadata";
import { generateBreadcrumbSchema, JsonLdScript } from "@/lib/schema";

export const metadata = solutionsMetadataEN;

export default function SolutionsLayoutEN({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbData = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.biosolution.tech/en" },
    { name: "Solutions", url: "https://www.biosolution.tech/en/solutions" },
  ]);

  return (
    <>
      <JsonLdScript data={breadcrumbData} />
      {children}
    </>
  );
}

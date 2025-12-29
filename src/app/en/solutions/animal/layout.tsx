import { solutionsAnimalMetadataEN } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateProductSchema, JsonLdScript } from "@/lib/schema";

export const metadata = solutionsAnimalMetadataEN;

export default function AnimalSolutionsLayoutEN({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbData = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.biosolution.tech/en" },
    { name: "Solutions", url: "https://www.biosolution.tech/en/solutions" },
    { name: "Animal Biosecurity", url: "https://www.biosolution.tech/en/solutions/animal" },
  ]);

  // Product structured data for animal biosecurity products
  const products = [
    {
      name: "SIMBIOS",
      description: "Premium probiotics for livestock and poultry. Improves digestive health, immunity, and livestock productivity naturally.",
      category: "Livestock Probiotics",
    },
    {
      name: "RAJABIO",
      description: "Complete animal biosecurity solution for large-scale farms. Beneficial microbial formulation for optimal health and growth.",
      category: "Animal Biosecurity",
    },
    {
      name: "MEGABIO",
      description: "Aquaculture probiotics for fishery and ponds. Improves water quality, fish health, and aquaculture harvest yield.",
      category: "Aquaculture Probiotics",
    },
  ];

  return (
    <>
      <JsonLdScript data={breadcrumbData} />
      {products.map((product, index) => (
        <JsonLdScript key={index} data={generateProductSchema(product, 'en')} />
      ))}
      {children}
    </>
  );
}

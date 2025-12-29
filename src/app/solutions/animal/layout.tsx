import { solutionsAnimalMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateProductSchema, JsonLdScript } from "@/lib/schema";

export const metadata = solutionsAnimalMetadata;

export default function AnimalSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbData = generateBreadcrumbSchema([
    { name: "Beranda", url: "https://www.biosolution.tech" },
    { name: "Solusi", url: "https://www.biosolution.tech/solutions" },
    { name: "Biosecurity Hewan", url: "https://www.biosolution.tech/solutions/animal" },
  ]);

  // Product structured data for animal biosecurity products
  const products = [
    {
      name: "SIMBIOS",
      description: "Probiotik premium untuk ternak dan unggas. Meningkatkan kesehatan pencernaan, imunitas, dan produktivitas ternak secara alami.",
      category: "Probiotik Ternak",
    },
    {
      name: "RAJABIO",
      description: "Solusi biosecurity hewan lengkap untuk peternakan skala besar. Formulasi mikroba menguntungkan untuk kesehatan dan pertumbuhan optimal.",
      category: "Biosecurity Hewan",
    },
    {
      name: "MEGABIO",
      description: "Probiotik akuakultur untuk perikanan dan tambak. Meningkatkan kualitas air, kesehatan ikan, dan hasil panen budidaya.",
      category: "Probiotik Akuakultur",
    },
  ];

  return (
    <>
      <JsonLdScript data={breadcrumbData} />
      {products.map((product, index) => (
        <JsonLdScript key={index} data={generateProductSchema(product, 'id')} />
      ))}
      {children}
    </>
  );
}

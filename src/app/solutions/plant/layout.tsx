import { solutionsPlantMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateProductSchema, JsonLdScript } from "@/lib/schema";

export const metadata = solutionsPlantMetadata;

export default function PlantSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbData = generateBreadcrumbSchema([
    { name: "Beranda", url: "https://www.biosolution.tech" },
    { name: "Solusi", url: "https://www.biosolution.tech/solutions" },
    { name: "Biosecurity Tanaman", url: "https://www.biosolution.tech/solutions/plant" },
  ]);

  // Product structured data for plant biosecurity products
  const products = [
    {
      name: "FloraOne",
      description: "Pupuk hayati premium dengan teknologi mikroba terpadu untuk meningkatkan hasil panen dan kesehatan tanaman. Cocok untuk hortikultura, perkebunan, dan pertanian organik.",
      category: "Pupuk Hayati",
    },
    {
      name: "BioKiller",
      description: "Insektisida hayati berbasis mikroba untuk pengendalian hama secara alami dan ramah lingkungan. Efektif melawan berbagai jenis hama tanaman.",
      category: "Insektisida Hayati",
    },
    {
      name: "BIOJAGAT",
      description: "Solusi biosecurity tanaman lengkap dengan formulasi mikroba aktif untuk perlindungan dan nutrisi tanaman secara terpadu.",
      category: "Biosecurity Tanaman",
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

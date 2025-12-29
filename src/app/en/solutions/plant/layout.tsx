import { solutionsPlantMetadataEN } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateProductSchema, JsonLdScript } from "@/lib/schema";

export const metadata = solutionsPlantMetadataEN;

export default function PlantSolutionsLayoutEN({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbData = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.biosolution.tech/en" },
    { name: "Solutions", url: "https://www.biosolution.tech/en/solutions" },
    { name: "Plant Biosecurity", url: "https://www.biosolution.tech/en/solutions/plant" },
  ]);

  // Product structured data for plant biosecurity products
  const products = [
    {
      name: "FloraOne",
      description: "Premium bio-fertilizer with integrated microbial technology to increase crop yield and plant health. Suitable for horticulture, plantations, and organic farming.",
      category: "Bio-Fertilizer",
    },
    {
      name: "BioKiller",
      description: "Microbial-based bio-insecticide for natural and environmentally friendly pest control. Effective against various types of plant pests.",
      category: "Bio-Insecticide",
    },
    {
      name: "BIOJAGAT",
      description: "Complete plant biosecurity solution with active microbial formulation for integrated plant protection and nutrition.",
      category: "Plant Biosecurity",
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

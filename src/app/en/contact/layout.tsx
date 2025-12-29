import { contactMetadataEN } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateLocalBusinessSchema, JsonLdScript } from "@/lib/schema";

export const metadata = contactMetadataEN;

export default function ContactLayoutEN({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbData = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.biosolution.tech/en" },
    { name: "Contact Us", url: "https://www.biosolution.tech/en/contact" },
  ]);

  return (
    <>
      <JsonLdScript data={breadcrumbData} />
      <JsonLdScript data={generateLocalBusinessSchema('en')} />
      {children}
    </>
  );
}

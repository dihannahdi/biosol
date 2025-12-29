import { contactMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, generateLocalBusinessSchema, JsonLdScript } from "@/lib/schema";

export const metadata = contactMetadata;

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbData = generateBreadcrumbSchema([
    { name: "Beranda", url: "https://www.biosolution.tech" },
    { name: "Hubungi Kami", url: "https://www.biosolution.tech/contact" },
  ]);

  return (
    <>
      <JsonLdScript data={breadcrumbData} />
      <JsonLdScript data={generateLocalBusinessSchema('id')} />
      {children}
    </>
  );
}

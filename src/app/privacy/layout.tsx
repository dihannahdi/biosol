import { privacyMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, JsonLdScript } from "@/lib/schema";

export const metadata = privacyMetadata;

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbData = generateBreadcrumbSchema([
    { name: "Beranda", url: "https://www.biosolution.tech" },
    { name: "Kebijakan Privasi", url: "https://www.biosolution.tech/privacy" },
  ]);

  return (
    <>
      <JsonLdScript data={breadcrumbData} />
      {children}
    </>
  );
}

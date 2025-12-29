import { privacyMetadataEN } from "@/lib/metadata";
import { generateBreadcrumbSchema, JsonLdScript } from "@/lib/schema";

export const metadata = privacyMetadataEN;

export default function PrivacyLayoutEN({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbData = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.biosolution.tech/en" },
    { name: "Privacy Policy", url: "https://www.biosolution.tech/en/privacy" },
  ]);

  return (
    <>
      <JsonLdScript data={breadcrumbData} />
      {children}
    </>
  );
}

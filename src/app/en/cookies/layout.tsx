import { cookiesMetadataEN } from "@/lib/metadata";
import { generateBreadcrumbSchema, JsonLdScript } from "@/lib/schema";

export const metadata = cookiesMetadataEN;

export default function CookiesLayoutEN({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbData = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.biosolution.tech/en" },
    { name: "Cookie Settings", url: "https://www.biosolution.tech/en/cookies" },
  ]);

  return (
    <>
      <JsonLdScript data={breadcrumbData} />
      {children}
    </>
  );
}

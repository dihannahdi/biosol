import { termsMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema, JsonLdScript } from "@/lib/schema";

export const metadata = termsMetadata;

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbData = generateBreadcrumbSchema([
    { name: "Beranda", url: "https://www.biosolution.tech" },
    { name: "Syarat dan Ketentuan", url: "https://www.biosolution.tech/terms" },
  ]);

  return (
    <>
      <JsonLdScript data={breadcrumbData} />
      {children}
    </>
  );
}

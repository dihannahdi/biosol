import { Metadata } from "next";
import { HeaderEN, FooterEN } from "@/components/layout/en";

export const metadata: Metadata = {
  title: "News & Case Studies - Biosolution Indonesia",
  description:
    "Read the latest case studies and articles about biotechnology formula applications in the field. Success stories of Indonesian farmers with organic solutions.",
  openGraph: {
    title: "News & Case Studies - Biosolution Indonesia",
    description:
      "Read the latest case studies and articles about biotechnology formula applications in the field.",
    url: "https://www.biosolution.tech/en/news",
    siteName: "Biosolution Indonesia",
    locale: "en_US",
    type: "article",
  },
};

export default function NewsDetailLayoutEN({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderEN />
      {children}
      <FooterEN />
    </>
  );
}

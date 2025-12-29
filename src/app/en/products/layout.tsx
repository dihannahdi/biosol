import { Metadata } from "next";
import { HeaderEN, FooterEN } from "@/components/layout/en";

export const metadata: Metadata = {
  title: "Biotechnology Products - Biosolution Indonesia",
  description:
    "Complete catalog of biotechnology formulas for sustainable agriculture, fishery, and livestock. Benefit-based formulas for maximum results.",
  keywords: [
    "biotechnology products",
    "organic farming formula",
    "biofertilizer",
    "biological pesticide",
    "livestock probiotic",
    "fish probiotic",
    "biosolution indonesia",
  ],
  openGraph: {
    title: "Biotechnology Products - Biosolution Indonesia",
    description:
      "Complete catalog of biotechnology formulas for sustainable agriculture, fishery, and livestock.",
    url: "https://www.biosolution.tech/en/products",
    siteName: "Biosolution Indonesia",
    locale: "en_US",
    type: "website",
  },
};

export default function ProductsLayoutEN({
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

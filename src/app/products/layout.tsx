import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "Produk Bioteknologi - Biosolution Indonesia",
  description:
    "Katalog lengkap formula bioteknologi untuk pertanian, perikanan, dan peternakan berkelanjutan. Formula berbasis manfaat untuk hasil maksimal.",
  keywords: [
    "produk bioteknologi",
    "formula pertanian organik",
    "pupuk hayati",
    "pestisida biologis",
    "probiotik ternak",
    "probiotik ikan",
    "biosolution indonesia",
  ],
  openGraph: {
    title: "Produk Bioteknologi - Biosolution Indonesia",
    description:
      "Katalog lengkap formula bioteknologi untuk pertanian, perikanan, dan peternakan berkelanjutan.",
    url: "https://www.biosolution.tech/products",
    siteName: "Biosolution Indonesia",
    locale: "id_ID",
    type: "website",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

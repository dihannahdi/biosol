import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "Berita & Studi Kasus - Biosolution Indonesia",
  description:
    "Baca studi kasus dan artikel terbaru tentang penerapan formula bioteknologi di lapangan. Kisah sukses petani Indonesia dengan solusi organik.",
  openGraph: {
    title: "Berita & Studi Kasus - Biosolution Indonesia",
    description:
      "Baca studi kasus dan artikel terbaru tentang penerapan formula bioteknologi di lapangan.",
    url: "https://www.biosolution.tech/news",
    siteName: "Biosolution Indonesia",
    locale: "id_ID",
    type: "article",
  },
};

export default function NewsDetailLayout({
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

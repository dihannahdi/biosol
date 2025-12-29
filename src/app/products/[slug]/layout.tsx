import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { products, getProductBySlug } from "@/lib/products-data";

interface ProductLayoutProps {
  children: React.ReactNode;
  params: { slug: string };
}

export async function generateMetadata({ params }: ProductLayoutProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  
  if (!product) {
    return {
      title: "Produk Tidak Ditemukan | Biosolution",
      description: "Produk yang Anda cari tidak ditemukan.",
    };
  }

  const baseUrl = "https://www.biosolution.tech";
  
  return {
    title: `${product.benefitTitle} - ${product.name} | Biosolution`,
    description: `${product.description} ${product.benefits.slice(0, 2).join('. ')}. Produk ${product.categoryLabel} berkualitas dari Biosolution.`,
    keywords: [
      product.name.toLowerCase(),
      product.benefitTitle.toLowerCase(),
      product.categoryLabel.toLowerCase(),
      'pupuk hayati',
      'bioteknologi pertanian',
      'biosolution',
      ...product.benefits.map(b => b.toLowerCase().split(' ').slice(0, 3).join(' ')),
    ],
    alternates: {
      canonical: `${baseUrl}/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.benefitTitle} - ${product.name} | Biosolution`,
      description: product.description,
      url: `${baseUrl}/products/${product.slug}`,
      type: 'website',
      siteName: 'Biosolution',
    },
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductLayout({ children }: ProductLayoutProps) {
  return <>{children}</>;
}

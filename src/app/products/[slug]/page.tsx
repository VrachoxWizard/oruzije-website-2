import { products } from "@/data/products";
import { notFound } from "next/navigation";
import { ProductClient } from "@/components/product/product-client";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return { title: "Proizvod nije pronađen" };
  
  return {
    title: `${product.name} | Pointershop`,
    description: product.shortDescription,
  };
}

export default async function ProductPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const product = products.find((p) => p.slug === params.slug);
  
  if (!product) {
    notFound();
  }

  return <ProductClient product={product} />;
}

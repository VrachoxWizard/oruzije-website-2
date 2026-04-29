import { Container } from "@/components/layout/container";
import { ProductGrid } from "@/components/shop/product-grid";
import { products } from "@/data/products";

export const metadata = {
  title: "Trgovina | Pointershop",
  description: "Pregledajte cijelu ponudu opreme za lov, streljaštvo i boravak u prirodi.",
};

export default function ShopPage() {
  return (
    <div className="py-12 bg-[var(--color-stone-50)] min-h-screen">
      <Container>
        <ProductGrid 
          initialProducts={products} 
          title="Svi proizvodi"
          description="Kompletan asortiman naše trgovine."
        />
      </Container>
    </div>
  );
}

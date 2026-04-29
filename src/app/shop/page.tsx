import { Container } from "@/components/layout/container";
import { ProductGrid } from "@/components/shop/product-grid";
import { products } from "@/data/products";

export const metadata = {
  title: "Trgovina | Pointershop",
  description: "Pregledajte cijelu ponudu opreme za lov, streljaštvo i boravak u prirodi.",
};

export default function ShopPage() {
  return (
    <div className="bg-[var(--color-stone-50)] min-h-screen bg-texture">
      {/* Cinematic Header */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[var(--color-forest-950)] text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/cat-rifles.png" 
            alt="PointerShop Katalog" 
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-forest-950)] via-[var(--color-forest-950)]/40 to-transparent" />
        </div>
        
        <Container className="relative z-10 text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-[var(--color-copper-500)]" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--color-copper-500)]">Katalog Opreme</span>
              <div className="h-px w-12 bg-[var(--color-copper-500)]" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
              Profesionalna <span className="text-[var(--color-copper-500)]">Trgovina</span>
            </h1>
            <p className="max-w-xl text-white/50 font-medium leading-relaxed">
              Istražite našu pažljivo odabranu ponudu oružja, optike i outdoor opreme. 
              Vrhunska kvaliteta za najzahtjevnije uvjete na terenu.
            </p>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[var(--color-stone-50)] to-transparent" />
      </section>

      <div className="py-20">
        <Container>
          <ProductGrid 
            initialProducts={products} 
            title="Svi Proizvodi"
            description="Pregledajte kompletan asortiman PointerShop trgovine uz napredno filtriranje po brendu i cijeni."
          />
        </Container>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { useComparisonStore } from "@/lib/comparison-store";
import { Container } from "@/components/layout/container";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Button } from "@/components/ui/button";
import { X, ShoppingCart, ShieldAlert } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/lib/cart-store";
import { toast } from "sonner";

export default function ComparePage() {
  const { items, removeItem, clear } = useComparisonStore();
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (product: any) => {
    addItem(product, 1);
    toast.success(`${product.name} dodano u košaricu`);
  };

  const allSpecs = Array.from(new Set(items.flatMap(item => Object.keys(item.specs))));

  return (
    <div className="bg-white min-h-screen pb-20">
      <Breadcrumbs items={[{ label: "Usporedba" }]} />
      
      <Container>
        <div className="py-12 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-bold text-[var(--color-forest-950)] mb-4">Usporedba proizvoda</h1>
            <p className="text-stone-500">Usporedite tehničke specifikacije i odaberite najbolju opremu za svoje potrebe.</p>
          </div>
          {items.length > 0 && (
            <Button variant="outline" onClick={clear} className="gap-2">
              <X className="w-4 h-4" />
              Ukloni sve
            </Button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="py-20 text-center bg-stone-50 rounded-3xl border border-stone-100">
            <h2 className="text-xl font-bold text-stone-400 mb-4">Nema proizvoda za usporedbu</h2>
            <Button asChild>
              <a href="/shop">Vrati se u trgovinu</a>
            </Button>
          </div>
        ) : (
          <div className="overflow-x-auto pb-8">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="w-48 p-4 bg-stone-50 border-b border-stone-200"></th>
                  {items.map((item) => (
                    <th key={item.id} className="p-6 border-b border-stone-200 min-w-[280px]">
                      <div className="relative group">
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="absolute -top-2 -right-2 p-1.5 bg-red-100 text-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-200"
                        >
                          <X className="w-4 h-4" />
                        </button>
                        <div className="aspect-square rounded-2xl overflow-hidden mb-4 border border-stone-100">
                          <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-lg font-bold text-[var(--color-forest-950)] line-clamp-2 h-14 mb-2">{item.name}</h3>
                        <div className="text-2xl font-bold text-[var(--color-copper-500)] mb-6">{formatPrice(item.price)}</div>
                        <Button 
                          className="w-full gap-2" 
                          onClick={() => handleAddToCart(item)}
                          variant={item.complianceType === "standard" ? "default" : "regulated"}
                        >
                          {item.complianceType === "standard" ? (
                            <><ShoppingCart className="w-4 h-4" /> Dodaj u košaricu</>
                          ) : (
                            "Pošalji upit"
                          )}
                        </Button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="bg-stone-50/50">
                  <td className="p-4 font-bold text-stone-500 uppercase tracking-widest text-[10px] border-b border-stone-100">Brend</td>
                  {items.map(item => (
                    <td key={item.id} className="p-6 text-sm font-bold text-[var(--color-forest-950)] border-b border-stone-100">{item.brand}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-bold text-stone-500 uppercase tracking-widest text-[10px] border-b border-stone-100">Regulacija</td>
                  {items.map(item => (
                    <td key={item.id} className="p-6 border-b border-stone-100">
                      {item.complianceType !== "standard" ? (
                        <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase">
                          <ShieldAlert className="w-4 h-4" />
                          Regulirano
                        </div>
                      ) : (
                        <span className="text-stone-400 text-xs uppercase font-bold">Nema ograničenja</span>
                      )}
                    </td>
                  ))}
                </tr>
                {allSpecs.map(spec => (
                  <tr key={spec} className="hover:bg-stone-50/30 transition-colors">
                    <td className="p-4 font-bold text-stone-500 uppercase tracking-widest text-[10px] border-b border-stone-100">{spec}</td>
                    {items.map(item => (
                      <td key={item.id} className="p-6 text-sm text-stone-600 border-b border-stone-100">
                        {item.specs[spec] || "-"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Container>
    </div>
  );
}

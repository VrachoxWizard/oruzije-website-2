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
    <div className="bg-stone-50 min-h-screen pb-24 bg-texture">
      <Breadcrumbs items={[{ label: "Usporedba" }]} />
      
      <Container>
        <div className="py-20 flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-[var(--color-copper-500)]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--color-copper-500)]">Tehnička Analiza</span>
            </div>
            <h1 className="text-5xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)]">
              Usporedba <span className="text-[var(--color-copper-500)]">Opreme</span>
            </h1>
          </div>
          {items.length > 0 && (
            <Button variant="outline" onClick={clear} className="h-12 px-8 rounded-2xl text-[10px] font-black uppercase tracking-widest border-stone-200 hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-all gap-2">
              <X className="w-4 h-4" />
              Očisti Sve
            </Button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="py-32 text-center bg-white rounded-[var(--radius-3xl)] border border-stone-200 shadow-sm flex flex-col items-center gap-8">
            <div className="w-20 h-20 rounded-full bg-stone-50 flex items-center justify-center border border-stone-100 shadow-inner">
              <X className="w-8 h-8 text-stone-200" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-black uppercase italic tracking-tight text-[var(--color-forest-950)]">Nema proizvoda za usporedbu</h2>
              <p className="text-stone-400 font-medium max-w-xs mx-auto text-sm">Dodajte proizvode iz kataloga kako biste ih usporedili jedan uz drugog.</p>
            </div>
            <Link href="/shop">
              <Button className="rounded-2xl px-10 h-14 text-[10px] font-black uppercase tracking-widest shadow-xl shadow-forest-950/20">Vrati se u trgovinu</Button>
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-[var(--radius-3xl)] border border-stone-200 shadow-xl shadow-forest-950/5 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-stone-50/50">
                    <th className="w-64 p-8 text-left border-b border-stone-100 border-r border-stone-100">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-300">Specifikacije</span>
                    </th>
                    {items.map((item) => (
                      <th key={item.id} className="p-8 border-b border-stone-100 min-w-[320px] text-left group border-r border-stone-100 last:border-r-0">
                        <div className="flex flex-col gap-6 relative">
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="absolute -top-2 -right-2 w-8 h-8 flex items-center justify-center bg-white text-stone-300 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all hover:text-red-500 hover:scale-110 z-10 border border-stone-100"
                          >
                            <X className="w-4 h-4" />
                          </button>
                          
                          <div className="aspect-[4/5] rounded-[var(--radius-2xl)] overflow-hidden border border-stone-100 shadow-sm group-hover:shadow-xl transition-all duration-500">
                            <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                          </div>
                          
                          <div className="flex flex-col gap-2">
                            <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-copper-500)]">{item.brand}</span>
                            <h3 className="text-sm font-black text-[var(--color-forest-950)] uppercase italic tracking-tight leading-tight h-10 line-clamp-2">{item.name}</h3>
                            <div className="text-xl font-black italic tracking-tighter text-[var(--color-forest-950)] mt-2">{formatPrice(item.price)}</div>
                          </div>

                          <Button 
                            className="w-full h-12 rounded-xl text-[9px] font-black uppercase tracking-widest shadow-lg shadow-forest-950/10" 
                            onClick={() => handleAddToCart(item)}
                            variant={item.complianceType === "standard" ? "default" : "regulated"}
                          >
                            {item.complianceType === "standard" ? (
                              <><ShoppingCart className="w-3.5 h-3.5 mr-2" /> Dodaj u košaricu</>
                            ) : (
                              "Pošalji Upit"
                            )}
                          </Button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-stone-50/20">
                    <td className="p-8 font-black text-[var(--color-forest-950)] uppercase tracking-widest text-[10px] border-b border-stone-100 border-r border-stone-100">Brend</td>
                    {items.map(item => (
                      <td key={item.id} className="p-8 text-xs font-black uppercase tracking-widest text-[var(--color-forest-950)] border-b border-stone-100 border-r border-stone-100 last:border-r-0">{item.brand}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-8 font-black text-[var(--color-forest-950)] uppercase tracking-widest text-[10px] border-b border-stone-100 border-r border-stone-100">Regulacija</td>
                    {items.map(item => (
                      <td key={item.id} className="p-8 border-b border-stone-100 border-r border-stone-100 last:border-r-0">
                        {item.complianceType !== "standard" ? (
                          <div className="flex items-center gap-2 text-amber-600">
                            <ShieldAlert className="w-4 h-4" />
                            <span className="text-[10px] font-black uppercase tracking-widest">Regulirano</span>
                          </div>
                        ) : (
                          <span className="text-stone-300 text-[9px] uppercase font-black tracking-widest italic">Nema ograničenja</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  {allSpecs.map((spec, idx) => (
                    <tr key={spec} className={`${idx % 2 === 0 ? "bg-stone-50/20" : "bg-white"} hover:bg-stone-50 transition-colors group`}>
                      <td className="p-8 font-black text-[var(--color-forest-950)] uppercase tracking-widest text-[10px] border-b border-stone-100 border-r border-stone-100 group-hover:text-[var(--color-copper-500)] transition-colors">{spec}</td>
                      {items.map(item => (
                        <td key={item.id} className="p-8 text-xs font-bold text-stone-500 border-b border-stone-100 border-r border-stone-100 last:border-r-0 italic">
                          {item.specs[spec] || "-"}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}


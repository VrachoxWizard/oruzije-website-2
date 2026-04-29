import { create } from 'zustand';
import type { Product } from '@/types/product';

interface ComparisonState {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clear: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const useComparisonStore = create<ComparisonState>((set) => ({
  items: [],
  isOpen: false,
  setIsOpen: (open) => set({ isOpen: open }),
  addItem: (product) =>
    set((state) => {
      if (state.items.find((i) => i.id === product.id)) return state;
      if (state.items.length >= 4) return state; // Limit to 4
      return { items: [...state.items, product], isOpen: true };
    }),
  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== productId),
    })),
  clear: () => set({ items: [], isOpen: false }),
}));

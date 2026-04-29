import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/types/product';

interface ViewHistoryState {
  viewedProductIds: string[];
  addProduct: (productId: string) => void;
  clearHistory: () => void;
}

export const useViewHistoryStore = create<ViewHistoryState>()(
  persist(
    (set) => ({
      viewedProductIds: [],
      addProduct: (productId) =>
        set((state) => {
          // Remove if already exists to move it to the front
          const filtered = state.viewedProductIds.filter((id) => id !== productId);
          // Add to start and limit to 10
          return { viewedProductIds: [productId, ...filtered].slice(0, 10) };
        }),
      clearHistory: () => set({ viewedProductIds: [] }),
    }),
    {
      name: 'pointershop-view-history',
    }
  )
);

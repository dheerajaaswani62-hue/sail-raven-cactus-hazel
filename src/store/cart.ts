import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getProduct } from "@/lib/products";

export type CartItem = { slug: string; qty: number };

type CartState = {
  items: CartItem[];
  add: (slug: string) => void;
  remove: (slug: string) => void;
  setQty: (slug: string, qty: number) => void;
  clear: () => void;
  count: () => number;
  total: () => number;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (slug) => {
        const existing = get().items.find((i) => i.slug === slug);
        if (existing) {
          set({
            items: get().items.map((i) =>
              i.slug === slug ? { ...i, qty: i.qty + 1 } : i,
            ),
          });
        } else {
          set({ items: [...get().items, { slug, qty: 1 }] });
        }
      },
      remove: (slug) =>
        set({ items: get().items.filter((i) => i.slug !== slug) }),
      setQty: (slug, qty) => {
        if (qty < 1) {
          set({ items: get().items.filter((i) => i.slug !== slug) });
          return;
        }
        set({
          items: get().items.map((i) => (i.slug === slug ? { ...i, qty } : i)),
        });
      },
      clear: () => set({ items: [] }),
      count: () => get().items.reduce((n, i) => n + i.qty, 0),
      total: () =>
        get().items.reduce((n, i) => {
          const p = getProduct(i.slug);
          return n + (p ? p.price * i.qty : 0);
        }, 0),
    }),
    { name: "datum-cart" },
  ),
);

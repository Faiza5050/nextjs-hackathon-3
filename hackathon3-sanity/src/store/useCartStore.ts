"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: { asset: { _ref: string } } | { asset: { _ref: string } }[] | string;
};

type CartState = {
  cartItems: CartItem[];
  toastMessage: string | null;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  resetToast: () => void;
};

const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cartItems: [],
      toastMessage: null,

      addToCart: (item) =>
        set((state) => {
          const existingItem = state.cartItems.find((i) => i.id === item.id);
          if (existingItem) {
            return {
              cartItems: state.cartItems.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
              toastMessage: "Product added to cart!",
            };
          }
          return {
            cartItems: [...state.cartItems, { ...item, quantity: 1 }],
            toastMessage: "Product added to cart!",
          };
        }),

      removeFromCart: (id) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== id),
          toastMessage: "Product removed from cart!",
        })),

      updateQuantity: (id, quantity) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
          toastMessage: "Cart updated!",
        })),

      clearCart: () => set({ cartItems: [], toastMessage: "Cart cleared!" }),

      resetToast: () => set({ toastMessage: null }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCartStore;

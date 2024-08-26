import { create } from "zustand";

type CartState = {
  cart: any[];
  isLoading: boolean;
  counter: number;
  addItem: (product: any) => void;
  removeItem: (productId: string) => void;
};

const cart: any[] = [];

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  isLoading: false,
  counter: 0,
  addItem: (product) =>
    set((state) => ({
      cart: [...state.cart, product],
      counter: state.counter + 1,
    })),
  removeItem: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
      counter: state.counter - 1,
    })),
}));

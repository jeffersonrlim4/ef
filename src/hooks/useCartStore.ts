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
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + product.quantity }
              : item
          ),
        };
      } else {
        return {
          cart: [...state.cart, { ...product, quantity: product.quantity }],
          counter: state.counter + 1,
        };
      }
    }),
  removeItem: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
      counter: state.counter - 1,
    })),
}));

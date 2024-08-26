"use client";

import { useCartStore } from "@/hooks/useCartStore";
import { useState } from "react";

export function Add({ product }: any) {
  const { addItem: insertProduct } = useCartStore();
  const [quantity, setQuantity] = useState(1);

  const stock = 4;

  const handleQuantity = (type: "d" | "i") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  const addItem = () => {
    insertProduct({ ...product, quantity });
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Quantidade</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("d")}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("i")}
            >
              +
            </button>
          </div>
          <div className="text-xs">
            Apenas <span className="text-orange-500">4 itens</span> em estoque
          </div>
        </div>
        <button
          onClick={addItem}
          className="w-36 text-sm rounded-3xl ring-1 ring-cartbg text-cartbg py-2 px-4 hover:bg-cartbg hover:text-white disabled:cursor-not-allowed"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}

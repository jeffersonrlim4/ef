"use client";
import { useCartStore } from "@/hooks/useCartStore";
import Image from "next/image";

export function CartModal() {
  const { cart, removeItem } = useCartStore();

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cart.length ? (
        <div className="">Carrinho vazio</div>
      ) : (
        <>
          <h2 className="text-xl">Carrinho</h2>
          <div className="flex flex-col gap-8">
            {cart.map((item) => (
              <div className="flex gap-4" key={item.id}>
                <Image
                  className="object-cover rounded-md"
                  src={item.images[0].replace(/^\[?"|"?\]$/g, "")}
                  width={72}
                  height={96}
                  alt="product"
                  unoptimized
                />
                <div className="flex flex-col justify-between w-full">
                  <div className="">
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="font-semibold">{item.title}</h3>
                      <div className="p-1 bg-gray-50 rounded-sm">
                        R${item.price}
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 w-max">
                      {item.description.substr(0, 60)}...
                    </div>
                  </div>
                  <div className="flex justify-between text-sm mt-4">
                    <span className="text-gray-500">
                      Quantidade: {item.quantity}
                    </span>
                    <span
                      className="text-red-500 cursor-pointer"
                      onClick={() => removeItem(item.id)}
                    >
                      Remover
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span>Total:</span>
              <span>R$297,00</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Frete e outras taxas são calculadas durante o checkout.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                Ver carrinho
              </button>
              <button className="rounded-md py-3 px-4 bg-black text-white">
                Finalizar compra
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

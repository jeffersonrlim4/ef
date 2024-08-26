"use client";
import { Filter } from "@/components/Filter";
import { ProductList } from "@/components/ProductList";
import { useProductsFilter } from "@/hooks/useProductsFilter";
import Image from "next/image";
const productImage1 = "https://placehold.co/600x400";

export default function List({ searchParams }: { searchParams: any }) {
  const { getProductsByCategory } = useProductsFilter({
    categoryId: searchParams.cat,
  });

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative">
      <div className="hidden bg-pink-100 px-4 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Ganhe 50% em produtos selecionados
          </h1>
          <button className="rounded-3xl bg-cartbg text-white w-max py-3 px-5 text-sm">
            Comprar
          </button>
        </div>
        <div className="relative w-1/3">
          <Image
            src={productImage1}
            alt="product"
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      </div>
      <Filter />
      <h1 className="mt-12 text-xl font-semibold">Produtos para você</h1>
      {getProductsByCategory && (
        <ProductList products={getProductsByCategory} />
      )}
    </div>
  );
}

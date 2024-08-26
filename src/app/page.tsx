"use client";
import { CategoryList } from "@/components/CategoryList";
import { ProductList } from "@/components/ProductList";
import { Slider } from "@/components/Slider";
import { useProducts } from "@/hooks/useProducts";

export default function Home() {
  const { getProducts, getCategory } = useProducts();

  const fetureds = getProducts?.slice(0, 4);
  const news = getProducts?.slice(4, 12);

  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">Produtos mais vistos</h1>
        <ProductList products={fetureds} />
      </div>
      <div className="mt-24 ">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12">
          Categorias
        </h1>
        <CategoryList categories={getCategory} />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">Novos produtos</h1>
        <ProductList products={news} />
      </div>
    </div>
  );
}

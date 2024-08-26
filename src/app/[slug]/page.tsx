"use client";
import { Add } from "@/components/Add";
import { CustomizeProducts } from "@/components/CustomizeProducts";
import { ProductsImages } from "@/components/ProductsImages";
import { useProductsFilter } from "@/hooks/useProductsFilter";

export default function SinglePage({ params }: { params: { slug: string } }) {
  const { singleProduct } = useProductsFilter({ productId: params.slug });

  if (!singleProduct) return <h1>Carregando...</h1>;

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row  gap-16">
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductsImages images={singleProduct.images} />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{singleProduct.name}</h1>
        <p className="text-gray-500">{singleProduct.description}</p>
        <div className="h-[2px] bg-gray-200" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">R$ 97,00</h3>
          <h2 className="font-medium text-2xl">R$ {singleProduct.price}</h2>
        </div>
        <div className="h-[2px] bg-gray-200" />
        <CustomizeProducts />
        <Add product={singleProduct} />
        <div className="h-[2px] bg-gray-200" />
      </div>
    </div>
  );
}

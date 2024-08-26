import Image from "next/image";
import Link from "next/link";

interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {products?.map((product) => (
        <Link
          key={product.id}
          href={`/${product.id}`}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className="relative w-full h-80">
            <Image
              src={product.images[0].replace(/^\["|"\]$/g, "")}
              alt=""
              fill
              sizes="25vw"
              unoptimized
              className="absolute rounded-md z-10"
            />
          </div>
          <div className="flex justify-between flex-col gap-2">
            <span className="font-medium">{product.title}</span>
            <span className="font-bold">R$ {product.price}</span>
          </div>
          <div className="text-sm text-gray-500">
            {product.description.substr(0, 70)}...
          </div>
          <button className="w-max rounded-2xl ring-1 ring-cartbg text-cartbg py-2 px-4 text-xs hover:bg-cartbg hover:text-white">
            Adicionar ao carrinho
          </button>
        </Link>
      ))}
    </div>
  );
}

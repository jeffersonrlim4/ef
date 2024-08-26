import Image from "next/image";
import Link from "next/link";

const productImage1 = "https://placehold.co/600x400";
const productImage2 = "https://placehold.co/1200x720";

export function ProductList() {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src={productImage1}
            alt=""
            fill
            sizes="25vw"
            unoptimized
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src={productImage2}
            alt=""
            fill
            sizes="25vw"
            unoptimized
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Nome do produto</span>
          <span className="font-semibold">R$ 47,00</span>
        </div>
        <div className="text-sm text-gray-500">Descrição</div>
        <button className="w-max rounded-2xl ring-1 ring-cartbg text-cartbg py-2 px-4 text-xs hover:bg-cartbg hover:text-white">
          Adicionar ao carrinho
        </button>
      </Link>
      <Link
        href="/"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src={productImage1}
            alt=""
            fill
            sizes="25vw"
            unoptimized
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src={productImage2}
            alt=""
            fill
            sizes="25vw"
            unoptimized
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Nome do produto</span>
          <span className="font-semibold">R$ 47,00</span>
        </div>
        <div className="text-sm text-gray-500">Descrição</div>
        <button className="w-max rounded-2xl ring-1 ring-cartbg text-cartbg py-2 px-4 text-xs hover:bg-cartbg hover:text-white">
          Adicionar ao carrinho
        </button>
      </Link>
      <Link
        href="/"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src={productImage1}
            alt=""
            fill
            sizes="25vw"
            unoptimized
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src={productImage2}
            alt=""
            fill
            sizes="25vw"
            unoptimized
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Nome do produto</span>
          <span className="font-semibold">R$ 47,00</span>
        </div>
        <div className="text-sm text-gray-500">Descrição</div>
        <button className="w-max rounded-2xl ring-1 ring-cartbg text-cartbg py-2 px-4 text-xs hover:bg-cartbg hover:text-white">
          Adicionar ao carrinho
        </button>
      </Link>
      <Link
        href="/"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src={productImage1}
            alt=""
            fill
            sizes="25vw"
            unoptimized
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src={productImage2}
            alt=""
            fill
            sizes="25vw"
            unoptimized
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Nome do produto</span>
          <span className="font-semibold">R$ 47,00</span>
        </div>
        <div className="text-sm text-gray-500">Descrição</div>
        <button className="w-max rounded-2xl ring-1 ring-cartbg text-cartbg py-2 px-4 text-xs hover:bg-cartbg hover:text-white">
          Adicionar ao carrinho
        </button>
      </Link>
    </div>
  );
}

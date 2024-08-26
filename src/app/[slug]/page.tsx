import { Add } from "@/components/Add";
import { CustomizeProducts } from "@/components/CustomizeProducts";
import { ProductsImages } from "@/components/ProductsImages";

export default function SinglePage() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row  gap-16">
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductsImages />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Nome do Produto</h1>
        <p className="text-gray-500">
          Uma descrição longa sobre o produto e o que ele faz para a sociedade
        </p>
        <div className="h-[2px] bg-gray-200" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">R$ 97,00</h3>
          <h2 className="font-medium text-2xl">R$ 27,00</h2>
        </div>
        <div className="h-[2px] bg-gray-200" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-200" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Título</h4>
          <p>Descrição das paradas mais técnicas do produto</p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Título</h4>
          <p>Descrição das paradas mais técnicas do produto</p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Título</h4>
          <p>Descrição das paradas mais técnicas do produto</p>
        </div>
      </div>
    </div>
  );
}

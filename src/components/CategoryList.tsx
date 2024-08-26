import Image from "next/image";
import Link from "next/link";

interface CategoryListProps {
  categories: Category[];
}

export function CategoryList({ categories }: CategoryListProps) {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8 justify-between">
        {categories?.map((category) => (
          <Link
            key={category.id}
            href={`/list?cat=${category.id}`}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
          >
            <div className="relative bg-slate-100 w-full h-96">
              <Image
                src={category.image}
                alt="procut"
                fill
                sizes="20vw"
                className="object-cover"
                unoptimized
              />
            </div>
            <h1 className="mt-8 font-light text-cl tracking-wide">
              {category.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
}

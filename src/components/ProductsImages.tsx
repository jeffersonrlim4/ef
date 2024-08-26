"use client";

import Image from "next/image";
import { useState } from "react";

const productImage = "https://placehold.co/72x96";

const images = [
  { id: 1, url: productImage },
  { id: 2, url: productImage },
  { id: 3, url: productImage },
  { id: 4, url: productImage },
];

export function ProductsImages() {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt="product"
          fill
          sizes="50vw"
          className="object-cover rounded-md"
          unoptimized
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map((img, i) => (
          <div
            key={img.id}
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.url}
              alt="product"
              fill
              sizes="30vw"
              className="object-cover rounded-md"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}

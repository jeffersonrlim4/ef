"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductsImagesProps {
  images: string[];
}

export function ProductsImages({ images }: ProductsImagesProps) {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={images[index].replace(/^\[?"|"?\]$/g, "")}
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
            key={img}
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.replace(/^\[?"|"?\]$/g, "")}
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

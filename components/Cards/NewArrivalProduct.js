import React from "react";
import Image from "next/image";

export default function NewArrivalProduct({ product }) {
  return (
    <div className="product-card relative w-full">
      <div className="absolute top-2 left-2 bg-gray-700 text-white text-xs px-4 py-1">
        Sale
      </div>
      <div className="relative w-full md:w-[250px] h-[300px] sm:h-[250px]"> 
        <Image
          src={product.imageUrl}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded"
        />
      </div>
      
      <div className="text-gray-600 mt-1 text-3xl">{"★ ★ ★ ★ ★"}</div>
      <h3 className="text-lg mt-2">{product.name}</h3>
      <p className="text-black-600 font-semibold text-1xl">{product.price}</p>
    </div>
  );
}

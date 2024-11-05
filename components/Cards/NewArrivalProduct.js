import Image from "next/image";
export default function NewArrivalProduct({ product }) {
  return (
    <div className="product-card relative">
      {/* Sale Badge */}
      <div className="absolute top-2 left-2 bg-gray-700 text-white text-xs  px-4 py-1 ">
        Sale
      </div>

      {/* Product Image */}
      <Image
        src={product.imageUrl} // Use the imageUrl from the product object
        alt={product.name}
        className="w-[250px] h-[250px] object-cover"
      />

      {/* Product Rating */}
      <div className="text-gray-600 mt-1 text-3xl">{"★ ★ ★ ★ ★"}</div>

      {/* Product Name */}
      <h3 className="text-lg mt-2">{product.name}</h3>

      {/* Product Price */}
      <p className="text-black-600 font-semibold text-1xl">{product.price}</p>
    </div>
  );
}

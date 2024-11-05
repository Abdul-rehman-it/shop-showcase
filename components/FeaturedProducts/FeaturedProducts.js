import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Heading from "../Heading/Heading";
import { useRouter } from "next/router";
import Image from "next/image"; // Import Image from Next.js

export default function FeaturedProducts() {
  const router = useRouter();
  const products = [
    {
      id: 1,
      name: "Purse ",
      price: "$29.99",
      image:
        "https://www.pngarts.com/files/12/Ladies-Bag-PNG-Free-Download.png",
    },
    {
      id: 2,
      name: "Blue Shoes",
      price: "$39.99",
      image: "https://pngimg.com/d/women_shoes_PNG7467.png",
    },
    {
      id: 3,
      name: "Men Watch",
      price: "$49.99",
      image:
        "https://png.pngtree.com/png-vector/20230906/ourmid/pngtree-wristwatch-analog-classic-brown-leather-strap-watch-png-image_10001801.png",
    },
    {
      id: 4,
      name: "Dress Shoes ",
      price: "$39.99",
      image:
        "https://png.pngtree.com/png-vector/20240531/ourmid/pngtree-brown-leather-dress-shoes-png-image_12586933.png",
    },
    {
      id: 5,
      name: "Cricket Shoe",
      price: "$49.99",
      image:
        "https://png.pngtree.com/png-vector/20231230/ourmid/pngtree-dropshipping-men-hole-sole-jogging-shoes-png-image_11389148.png",
    },
    {
      id: 6,
      name: "Sandals",
      price: "$49.99",
      image:
        "https://png.pngtree.com/png-vector/20240723/ourmid/pngtree-3d-summer-white-lady-shoes-on-transparent-background-png-image_13216670.png",
    },
  ];

  const scroll = (direction) => {
    const container = document.getElementById("product-carousel");
    if (direction === "left") {
      container.scrollBy({ left: -250, behavior: "smooth" });
    } else {
      container.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  const handleProductClick = (id) => {
    router.push(`/product/${id}`); // Navigate to the product detail page
  };

  return (
    <div className="flex flex-col items-center my-8">
      {/* Heading */}
      <div className="text-center">
        <Heading
          title="Featured"
          subtitle="Products"
          titleColor="black"
          subtitleColor="white"
          titleSize="3xl"
          subtitleSize="4xl"
          subtitleBg="rgb(170,163,149)"
        />
      </div>
      <div className="flex items-center justify-center mt-4">
        {/* Container for left arrow */}
        <div className="p-2 border border-gray-300 bg-white shadow-md mr-10 hidden md:flex items-center justify-center">
          <button onClick={() => scroll("left")}>
            <FaArrowLeft className="text-2xl" />
          </button>
        </div>

        {/* Product Carousel */}
        <div
          id="product-carousel"
          className="flex flex-col md:flex-row md:overflow-x-auto space-y-4 md:space-y-0 md:space-x-4 scrollbar-hide w-full md:w-auto"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg w-full md:w-40 flex flex-col items-center p-4 cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="relative w-full h-32"> {/* Set relative position for Image component */}
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill" // Make the image fill the parent container
                  objectFit="cover" // Cover ensures the image maintains its aspect ratio
                  className="rounded" // Rounded corners for the image
                />
              </div>
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>

        {/* Container for right arrow */}
        <div className="p-2 border border-gray-300 bg-white shadow-md ml-10 hidden md:flex items-center justify-center">
          <button onClick={() => scroll("right")}>
            <FaArrowRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Simple Divider Lines */}
      <div className="flex flex-row gap-2 mb-20 mt-12 items-center">
        <div className="w-6 h-1 bg-gray-300 mb-1" />
        <div className="w-16 h-1 bg-gray-300 mb-1" />
        <div className="w-6 h-1 bg-gray-300 mb-1" />
        <div className="w-6 h-1 bg-gray-300 mb-1" />
      </div>
    </div>
  );
}

import { useRouter } from "next/router";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const products = [
    {
      id: 1,
      name: "Purse",
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

  if (!id) return <p>Loading...</p>;

  const product = products.find((p) => p.id === parseInt(id));

  return (
    <>
      <Header />
      <div className="flex flex-col items-center my-8">
        {product ? (
          <div className="flex flex-row max-w-4xl w-full mt-16 bg-white overflow-hidden">
            {/* Left side: Product Image */}
            <div className="w-1/2 p-4 flex justify-center items-center">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover h-96 w-auto"
              />
            </div>

            {/* Right side: Product Details */}
            <div className="w-1/2 p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {product.name}
                </h2>
                <p className="text-4xl text-gray-600 font-semibold mb-6">
                  {product.price}
                </p>
                <p className="text-gray-700 mb-4">
                  This is a high-quality product, perfect for any occasion. Made
                  with attention to detail, this item is both stylish and
                  comfortable.
                </p>

                {/* Size Selection */}
                <div className="mt-6 flex flex-row items-center">
                  <h3 className="text-lg font-semibold mb-2 mr-10">Size:</h3>
                  <div className="flex gap-2">
                    {["XS", "S", "M", "L", "XL"].map((size) => (
                      <button
                        key={size}
                        className="w-12 h-12 border border-gray-400 rounded-md text-lg hover:bg-gray-200 focus:outline-none focus:bg-gray-300"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Go to Shop Button */}
              <button
                className="mt-8 bg-green-900 text-white py-3 px-6 rounded-md hover:bg-green-700 transition"
                onClick={() => (window.location.href = "#")}
              >
                Go to Shop
              </button>
            </div>
          </div>
        ) : (
          <p>Product not found.</p>
        )}
      </div>

      {/* Footer - Full Width */}
      <div className="w-full">
        <Footer />
      </div>
    </>
  );
};

export default ProductDetail;

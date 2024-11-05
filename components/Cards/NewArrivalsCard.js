// // components/ProductList.js
// import React from "react";
// import ProductCard from "../Cards/NewArrivalProduct";

// const ProductList = ({ products }) => {
//   return (
//     <div className="flex space-x-4">
//       {products.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

// export default ProductList;

// components/ProductList.js
// components/ProductList.js
import React from "react";
import ProductCard from "../Cards/NewArrivalProduct";

const ProductList = ({ products }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

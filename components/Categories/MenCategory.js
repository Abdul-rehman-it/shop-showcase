// components/MenCategory.js
export default function MenCategory() {
  return (
    <div className="space-y-4">
      {/* Men Casual Section */}
      <div className="mt-20 bg-gray-200 flex flex-col items-center relative shadow-2xl w-full  sm:flex-row">
        {/* Full width and padding, row layout on larger screens */}
        <img
          src="https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_10094381.png"
          alt="Man Giving Thumbs Up"
          className="w-72 h-auto object-cover -mt-16" // Adjust size as needed
        />
        <div className="flex flex-col text-center sm:text-left">
          {/* Center text on mobile, left-aligned on larger screens */}
          <h3 className="text-xl font-bold text-black">Men Casual</h3>
          <p className="text-sm text-black mt-1">24 Items</p>
          {/* Added margin-top */}
          <button className="mt-4 px-8 py-2 border hover:text-gray-600 border-gray-800 text-black shadow-md hover:shadow-lg transition-shadow duration-200">
            SEE DETAIL
          </button>
        </div>
      </div>

      {/* Men Watch and Men Shoes Section */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        {/* Men Watch Section */}
        <div className="bg-[#aba2ab] p-4 flex items-center h-32 shadow-lg">
          <img
            src="https://png.pngtree.com/png-vector/20230906/ourmid/pngtree-wristwatch-analog-classic-brown-leather-strap-watch-png-image_10001801.png"
            alt="Woman Shoes"
            className="w-1/3 mb-1 shadow-[0_4px_8px_rgba(0,0,0,0.2)]" // Custom bottom shadow
          />
          <div className="text-left ml-10 text-black">
            <h3 className="font-bold leading-tight">
              <span className="block">Men</span>
              <span className="block text-base">Watch</span>
            </h3>
            <p className="text-sm mt-1">24 Items</p>
          </div>
        </div>

        {/* Woman Bag Section */}
        <div className="bg-[#cfc2cf] p-4 flex items-center h-32 shadow-lg">
          <img
            src="https://png.pngtree.com/png-vector/20240531/ourmid/pngtree-brown-leather-dress-shoes-png-image_12586933.png"
            alt="Woman Bag"
            className="w-1/3 mb-1 shadow-[0_4px_8px_rgba(0,0,0,0.2)]" // Custom bottom shadow
          />
          <div className="text-left ml-10 text-black">
            <h3 className="font-bold leading-tight">
              <span className="block">Men</span>
              <span className="block text-base">Shoes</span>
            </h3>
            <p className="text-sm mt-1">24 Items</p>
          </div>
        </div>
      </div>
    </div>
  );
}

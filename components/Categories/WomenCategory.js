
export default function WomenCategory() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-[#aba2ab] p-4 flex items-center h-32 shadow-lg">
          <img
            src="https://pngimg.com/d/women_shoes_PNG7467.png"
            alt="Woman Shoes"
            className="w-1/3 mb-1 shadow-[0_4px_8px_rgba(0,0,0,0.2)]"
          />
          <div className="text-left ml-10 text-black">
            <h3 className="font-bold leading-tight">
              <span className="block">Woman</span>
              <span className="block text-base">Shoes</span>
            </h3>
            <p className="text-sm mt-1">24 Items</p>
          </div>
        </div>
        <div className="bg-[#cfc2cf] p-4 flex items-center h-32 shadow-lg">
          <img
            src="https://www.pngarts.com/files/12/Ladies-Bag-PNG-Free-Download.png"
            alt="Woman Bag"
            className="w-1/3 mb-1 shadow-[0_4px_8px_rgba(0,0,0,0.2)]" 
          />
          <div className="text-left ml-10 text-black">
            <h3 className="font-bold leading-tight">
              <span className="block">Woman</span>
              <span className="block text-base">Bag</span>
            </h3>
            <p className="text-sm mt-1">24 Items</p>
          </div>
        </div>
        <div className="bg-yellow-100 p-4 flex items-center h-48 shadow-lg sm:col-span-2 w-full">
          <img
            src="https://pngimg.com/d/ballet_dancer_PNG77.png"
            alt="Woman Sport"
            className="w-1/2 h-auto mt-36 object-cover mb-2 sm:w-1/2 sm:mb-0"
          />
          <div className="ml-2 text-black w-full">
            <h3 className="font-bold text-lg sm:text-2xl">Woman Sport</h3>
            <p className="text-xs sm:text-sm mt-1">24 Items</p>
            <button className="mt-4 px-3 py-1 text-xs border border-gray-800 text-black sm:px-8 sm:py-2 sm:text-base">
              SEE DETAIL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

const SeasonCard = () => {
  return (
    <div className="flex items-center">
      <div className="bg-[rgb(170,163,149)] h-[300px] w-[50px] flex items-center justify-center text-3xl text-white">
        <span>&larr;</span>
      </div>
      <div className="bg-[rgb(13,32,39)] p-4 sm:p-6 shadow-md h-[350px] flex flex-col justify-center items-center">
        <div className="w-full max-w-xs sm:max-w-[320px] text-white text-center flex flex-col items-center">
          <h3 className="text-xs sm:text-sm md:text-base text-white">End of Season</h3>
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-white mt-1">
            Sale
          </h2>
          <h3 className="text-lg sm:text-xl text-white mt-4 mb-4">
            Up to 70% off
          </h3>
          <p className="mt-2">
            <span className="bg-[rgb(170,163,149)] text-white text-xs sm:text-sm p-1">
              Vivamus sit amet interdum elit.
              <br /> Proin erat ac velit tempus auctor.
            </span>
          </p>
          <button className="mt-4 text-white border border-white py-1 px-3 rounded flex items-center justify-center text-xs sm:text-sm md:text-base">
            See Detail <span className="ml-2">&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeasonCard;

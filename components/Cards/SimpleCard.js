import React from "react";

export default function SimpleCard({ image, heading, description }) {
  return (
    <div className="max-w-xs bg-white rounded-lg mt-20 overflow-hidden p-4">
      {/* Image */}
      <img
        src={image}
        alt="Card Image"
        className="w-22 h-20 object-cover mx-auto" // Set a fixed size for the image without margin top
      />
      <div className="flex flex-col items-center">
        {/* Line Divider */}
        <div className="w-24 h-0.5 mt-4 bg-gray-300 mb-4" />{" "}
        {/* Reduced top margin */}
        {/* Heading */}
        <h2 className="text-lg font-bold mb-1 text-center">{heading}</h2>
        {/* Paragraph */}
        <p className="text-gray-700 text-center">{description}</p>
      </div>
    </div>
  );
}

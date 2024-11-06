import React from "react";
const Image = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
};

export default function SimpleCard({ image, heading, description }) {
  return (
    <div className="max-w-xs bg-white rounded-lg mt-20 overflow-hidden">
      <Image
        src={image}
        alt="Card image"
        className="w-22 h-20 object-cover mx-auto" 
      />
      <div className="flex flex-col items-center px-4"> 
        <div className="w-24 h-0.5 mt-4 bg-gray-300 mb-4" />
        <h2 className="text-lg font-bold mb-1 text-center">{heading}</h2>
        <p className="text-gray-700 text-center max-w-xs">{description}</p> 
      </div>
    </div>
  );
}


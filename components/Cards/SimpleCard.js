import React from "react";

// Custom Image component (can replace this with any Image library)
const Image = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
};

export default function SimpleCard({ image, heading, description }) {
  return (
    <div className="max-w-xs bg-white rounded-lg mt-20 overflow-hidden">
      {/* Image */}
      <Image
        src={image}
        alt="Card image"
        className="w-22 h-20 object-cover mx-auto" // Set a fixed size for the image
      />
      <div className="flex flex-col items-center px-4"> {/* Added padding for better text alignment */}
        {/* Line Divider */}
        <div className="w-24 h-0.5 mt-4 bg-gray-300 mb-4" />
        {/* Heading */}
        <h2 className="text-lg font-bold mb-1 text-center">{heading}</h2>
        {/* Paragraph */}
        <p className="text-gray-700 text-center max-w-xs">{description}</p> {/* Set a max width for the paragraph */}
      </div>
    </div>
  );
}


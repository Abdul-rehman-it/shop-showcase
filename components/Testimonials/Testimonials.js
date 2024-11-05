import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importing arrow icons

export default function Testimonials() {
  return (
    <section className="flex items-stretch justify-between p-0">
      {/* Left side - Image */}
      <div className="w-1/2">
        <img
          src="https://img.freepik.com/premium-photo/blue-shades-lake-mountains-landscape-nature-background_1234738-236399.jpg?semt=ais_hybrid" // Replace with your image URL
          alt="Testimonial"
          className="w-full h-full object-cover" // Ensures the image covers its container
        />
      </div>

      {/* Right side - Testimonial Card */}
      <div className="w-1/2 p-10 bg-[rgb(13,32,39)] text-white flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-4 text-white">Testimonials</h2>
        <p className="text-center mb-3 line-clamp-3 max-w-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          sed urna in justo euismod condimentum.
        </p>
        <div className="w-16 h-0.5 bg-gray-500 mb-4" /> {/* Small gray line */}
        <blockquote className="text-lg italic mb-2">John Doe</blockquote>
        <cite className="block text-gray-600 text-white">CEO Company XYZ</cite>
        {/* Arrow Buttons - Aligned to the left */}
        <div className="flex justify-start mt-6 w-full">
          {" "}
          {/* Added mt-6 for margin-top */}
          <button className="p-2 pt-10 bg-transparent border-none cursor-pointer mr-2">
            <FaArrowLeft className="text-gray-400 text-2xl" />{" "}
            {/* Changed color to gray */}
          </button>
          <button className="p-2 pt-10 bg-transparent border-none cursor-pointer">
            <FaArrowRight className="text-gray-400 text-2xl" />{" "}
            {/* Changed color to gray */}
          </button>
        </div>
      </div>
    </section>
  );
}

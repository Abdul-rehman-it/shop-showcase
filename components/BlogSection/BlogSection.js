import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; 

export default function BlogSection() {
  return (
    <section className="flex flex-col md:flex-row items-stretch justify-between p-0">
      <div className="w-full md:w-1/2 p-10 bg-[#361005] text-white flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-white">From Our Blog</h2>
          <p className="text-lg mt-10 text-bold mb-2">
            Nam Sollicitudin dignissim
          </p>
          <p className="mb-3 line-clamp-3 mt-4 max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sed urna in justo euismod condimentum.
          </p>
          <span className="block text-white underline cursor-pointer">
            READ MORE
          </span>
        </div>
        <div className="flex justify-end mt-6">
          <button className="p-2 bg-transparent border-none cursor-pointer mr-2">
            <FaArrowLeft className="text-gray-400 text-2xl" />
          </button>
          <button className="p-2 bg-transparent border-none cursor-pointer">
            <FaArrowRight className="text-gray-400 text-2xl" />
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img
          src="https://media.istockphoto.com/id/875281644/photo/frozen-road-hokaido-japan.jpg?s=612x612&w=0&k=20&c=dm1VbRCocAESbipf2njN_MFoF-6WNheIJDblL7Y-Dbo=" // Replace with your image URL
          alt="Testimonial"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

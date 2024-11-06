import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import FooterNav from "./FooterNav";
const Footer = () => {
  return (
    <footer className="text-gray-300 pl-0 pr-0 mt-20 py-10 pb-0">
      <div className="text-center mb-8">
        <div className="text-4xl font-bold text-white bg-gray-600 inline-block pt-4 pr-2  mb-6">
          Lu
        </div>
        <h3 className="font-bold">NewsLetter</h3>
        <div className="flex justify-center mb-8 sm:mb-16">
  <div className="flex items-center w-full max-w-xs sm:max-w-md">
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full p-1 sm:p-2 text-gray-700 text-sm sm:text-base focus:outline-none border-b-2 border-gray-500"
      style={{
        borderTop: "none",
        borderLeft: "none",
        borderRight: "none",
      }}
    />
    <button className="text-black px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base border-b-2 border-gray-500 hover:text-[#8c5d47] transition-colors duration-200">
      Subscribe
    </button>
  </div>
</div>

      </div>

      <FooterNav textColor="text-gray-500" />
      {/* Social Media Icons */}
      <div className="flex justify-center mt-10 space-x-6 mb-8">
        <a
          href="#"
          className="text-white hover:text-white transition-colors duration-200"
        >
          <FaFacebookF className="w-6 h-6 bg-gray-600 p-1 rounded-md" />
        </a>
        <a
          href="#"
          className="text-white hover:text-white transition-colors duration-200"
        >
          <FaTwitter className="w-6 h-6 bg-gray-600 p-1 rounded-md" />
        </a>
        <a
          href="#"
          className="text-white hover:text-white transition-colors duration-200"
        >
          <FaInstagram className="w-6 h-6 bg-gray-600 p-1 rounded-md" />
        </a>
      </div>

      {/* Copyright */}

      <p className="text-center bg-gray-300 text-black py-4 text-sm">
        © Luxi Theme 2019
      </p>
    </footer>
  );
};

export default Footer;

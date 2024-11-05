import React, { useState } from "react";
import Navbar from "./Navbar";
import Setting from "./Setting";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
    className={`flex flex-col md:flex-row items-center justify-between w-full max-w-[100vw] mx-auto px-6 sm:px-4 md:px-0 md:pl-28 md:pr-32 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isMenuOpen ? "bg-black backdrop-blur-md" : "bg-black"
    } space-y-4 md:space-y-0 right-[11px] md:left-0`}
  >
      <div className="flex items-center justify-between w-full md:w-auto space-x-4 relative">
        {/* Logo on the left */}
        <div className="logo bg-gray-600 text-white text-2xl w-10 font-bold pt-4">
          Lu
        </div>

        {/* Hamburger menu or Close button for mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center absolute right-4"
        >
          {isMenuOpen ? (
            // Cross representation for the close button
            <div className="relative w-8 h-8">
              <div className="absolute top-4 left-0 w-8 h-1 bg-white transform rotate-45"></div>
              <div className="absolute top-4 left-0 w-8 h-1 bg-white transform -rotate-45"></div>
            </div>
          ) : (
            // Hamburger representation
            <>
              <div className="w-8 h-1 bg-white mb-1"></div>
              <div className="w-8 h-1 bg-white mb-1"></div>
              <div className="w-8 h-1 bg-white"></div>
            </>
          )}
        </button>
      </div>

      {/* Show Navbar on desktop */}
      <div className="hidden md:flex md:items-center">
        <Navbar textColor="text-gray-300" />
      </div>

      {/* Show Setting on desktop */}
      <div className="hidden md:flex md:items-center">
        <Setting />
      </div>

      {/* Show Navbar and Setting on mobile if menu is open */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-black p-4 md:hidden space-y-2 w-full px-0">
          <Navbar textColor="text-gray-300" />
          <Setting />
        </div>
      )}
    </header>
  );
}

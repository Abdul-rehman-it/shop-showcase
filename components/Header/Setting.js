import React from "react";
import { FaCog } from "react-icons/fa";

export default function Setting() {
  const handleSettingsClick = () => {
    console.log("Settings icon clicked.");
  };

  return (
    <button
      onClick={handleSettingsClick}
      className="p-2 bg-transparent border-none cursor-pointer"
    >
      <FaCog
        className="text-white hover:text-gray-400 transition duration-200 transform hover:scale-110"
        size={20}
      />
    </button>
  );
}

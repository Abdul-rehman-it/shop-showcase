// // HamburgerMenu.js
// import React, { useState } from "react";
// import Navbar from "../NavBar";
// import Setting from "../Setting";

// const HamburgerMenu = () => {
//   const [isOpen, setIsOpen] = useState(false); // State to manage the hamburger menu

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <button className="md:hidden p-2 focus:outline-none" onClick={toggleMenu}>
//         {isOpen ? (
//           <svg
//             className="w-6 h-6 text-white"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         ) : (
//           <svg
//             className="w-6 h-6 text-white"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           </svg>
//         )}
//       </button>

//       <nav
//         className={`${
//           isOpen ? "block" : "hidden"
//         } fixed top-16 left-0 right-0 bg-black text-white transition-all duration-300 ease-in-out md:relative md:flex md:items-center md:justify-center`}
//       >
//         <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 p-4 w-full md:w-auto">
//           <Navbar textColor="text-gray-300" />
//           <Setting />
//         </div>
//       </nav>
//     </>
//   );
// };

// export default HamburgerMenu;

// components/Hamburger.js
import { useState } from "react";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
        ☰
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 text-white flex flex-col items-center justify-center p-4 space-y-6 md:space-y-8">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-3xl"
          >
            ×
          </button>
          <a href="#" className="text-lg md:text-xl">
            Home
          </a>
          <a href="#" className="text-lg md:text-xl">
            All New
          </a>
          <a href="#" className="text-lg md:text-xl">
            Categories
          </a>
          <a href="#" className="text-lg md:text-xl">
            Featured
          </a>
          <a href="#" className="text-lg md:text-xl">
            Testimonials
          </a>
          <a href="#" className="text-lg md:text-xl">
            Footer
          </a>
          <Settings />
        </div>
      )}
    </>
  );
}

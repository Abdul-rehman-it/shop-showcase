import React from "react";
import Link from "next/link";

export default function Navbar({ textColor = "text-gray-300" }) {
  return (
    <nav className="w-full md:max-w-[90vw] md:px-4 px-2 mx-auto">
      <ul className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 max-w-[90%] md:max-w-full mx-auto">
        {[
          { name: "Home", link: "/" },
          { name: "All New", link: "/#new-arrivals" },
          { name: "Categories", link: "/#categories" },
          { name: "Featured", link: "/#FeaturedProducts" },
          { name: "Testimonials", link: "/#testimonials" },
          { name: "Footer", link: "/#footer" },
        ].map((item, index) => (
          <li key={index} className="relative group w-auto">
            <Link href={item.link} scroll={item.name === "Home"} legacyBehavior>
              <a
                className={`${textColor} hover:text-gray-400 transition-colors duration-200 block text-center`}
              >
                {item.name}
              </a>
            </Link>
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-gray-400 scale-x-0 transition-transform duration-200 group-hover:scale-x-100 translate-y-1"></span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

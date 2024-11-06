import React from "react";
import Link from "next/link";

export default function FooterNav({ textColor = "text-gray-300" }) {
  return (
    <nav>
      <ul className="flex flex-row justify-center items-center space-x-8 w-full">
        {[
          { name: "Home", link: "/" },
          { name: "All New", link: "/#new-arrivals" },
          { name: "Categories", link: "/#categories" },
          { name: "Featured", link: "/#featured-products" },
          { name: "Testimonials", link: "/#testimonials" },
          { name: "Footer", link: "/#footer" },
        ].map((item, index) => (
          <li key={index} className="relative group w-auto">
            <Link href={item.link} scroll={item.name === "Home"} legacyBehavior>
              <a
                className={`${textColor} hover:text-gray-400 transition-colors duration-200 block text-center text-[6px] sm:text-[9px] md:text-sm`} // Further reduced font sizes for mobile
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

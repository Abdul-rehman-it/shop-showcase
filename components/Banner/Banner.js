import { FaArrowDown } from "react-icons/fa";
import Image from "next/image";  // Import Image from Next.js (assuming you are using Next.js)
import Header from "../Header/Header";

export default function Banner() {
  return (
    <section className="relative w-full h-screen m-0 p-0 -mt-36 md:-mt-0">
      {/* Apply -mt-24 (which is -96px) on mobile */}
      <div className="relative w-full h-full z-0"> {/* Set z-index to 0 for background */}
        <Image
          src="https://www.pixelstalk.net/wp-content/uploads/images6/Black-And-White-Aesthetic-Backgrounds-Free-Download-Moutain-620x349.png"
          alt="New Season Arrivals"
          layout="fill"  // This ensures the image takes the full space
          objectFit="cover"  // This ensures the image covers the section completely
          quality={100}  // Optional: For better image quality
        />
      </div>
      <Header />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white z-10"> {/* Set z-index to 10 to bring text in front */}
        <h1 className="text-2xl md:text-3xl text-white text-center">
          New Season Arrivals
        </h1>
        <p className="mt-2 text-xl md:text-2xl font-bold text-center">
          Lorem Ipsum
        </p>
        <button className="mt-4 w-12 h-12 flex items-center justify-center border-2 border-dashed border-white rounded-full bg-transparent">
          <FaArrowDown className="text-white text-lg" />
        </button>
      </div>
    </section>
  );
}

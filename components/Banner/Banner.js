import { FaArrowDown } from "react-icons/fa";
import Image from "next/image";
import Header from "../Header/Header";

export default function Banner() {
  return (
    <section className="relative w-full h-screen m-0 p-0 -mt-36 md:-mt-0">
      <div className="relative w-full h-full z-0">
        <Image
          src="https://www.pixelstalk.net/wp-content/uploads/images6/Black-And-White-Aesthetic-Backgrounds-Free-Download-Moutain-620x349.png"
          alt="New Season Arrivals"
          layout="fill"
          objectFit="cover"
          quality={100}  
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

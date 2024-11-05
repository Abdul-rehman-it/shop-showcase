import Image from "next/image";

export default function ThreeImagesShow() {
  return (
    <section className="flex w-full p-0 m-0 py-8 bg-white">
      {/* Left Image */}
      <div className="flex-1 h-[270px] relative">
        <Image
          src="https://www.hdwallpapers.in/download/beautiful_girl_model_is_standing_in_orange_autumn_background_wearing_white_dress_4k_hd_girls-3840x2160.jpg"
          alt="Left Image"
          layout="fill"           // Cover the parent div
          objectFit="cover"       // Fill the space, maintaining aspect ratio
          priority                // Optional: Load this image faster
        />
        <div className="absolute inset-0 flex items-end mb-10 justify-center">
          <h2 className="text-3xl text-white">Autumn Show</h2>
        </div>
      </div>

      {/* Middle Image (Larger) */}
      <div className="flex-[2] h-[270px] relative">
        <Image
          src="https://img.freepik.com/premium-photo/variety-items-including-pair-shoes-bag-camera_1301236-66707.jpg"
          alt="Center Image"
          layout="fill"           // Cover the parent div
          objectFit="cover"       // Fill the space, maintaining aspect ratio
        />
        <div className="absolute inset-0 flex flex-col items-end justify-center pl-4">
          <h2 className="text-3xl mr-6 text-white">New Trending</h2>
          <h2 className="font-bold mr-6 text-3xl text-white underline">2019</h2>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 h-[270px] relative">
        <Image
          src="https://media.vogue.co.uk/photos/5d5486bbf2348600081451bb/master/pass/original"
          alt="Right Image"
          layout="fill"           // Cover the parent div
          objectFit="cover"       // Fill the space, maintaining aspect ratio
        />
        <div className="absolute inset-0 flex items-end mb-10 justify-center text-white">
          <h2 className="text-2xl font-bold text-white">Man Collection</h2>
        </div>
      </div>
    </section>
  );
}

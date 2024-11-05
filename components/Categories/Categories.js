// components/TopCategories.js
import MenCategory from "./MenCategory";
import WomenCategory from "./WomenCategory";
import Heading from "../Heading/Heading";

export default function TopCategories() {
  return (
    <div className="text-white p-4 space-y-8 md:p-8 md:px-20">
      {" "}
      {/* Added padding for mobile and maintain larger padding for medium screens and above */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        {/* Column 1: Heading and MenCategory */}
        <div className="space-y-4">
          <Heading
            title="Top"
            subtitle="Categories"
            titleColor="black"
            subtitleColor="white"
            titleSize="3xl"
            subtitleSize="4xl"
            subtitleBg="rgb(170,163,149)"
          />
          <MenCategory />
        </div>

        {/* Column 2: WomenCategory */}
        <div>
          <WomenCategory />
        </div>
      </div>
    </div>
  );
}

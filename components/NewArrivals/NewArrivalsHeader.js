import React from "react";
import Heading from "../Heading/Heading";

const NewArrivalsHeader = () => {
  return (
    <div className="text-left w-full md:w-56 mr-4 md:ml-10 ml-0">
      <Heading
        title="New"
        subtitle="Arrivals"
        titleColor="black"
        subtitleColor="white"
        titleSize="3xl"
        subtitleSize="4xl"
        subtitleBg="rgb(170,163,149)"
      />
      <p className="text-gray-700 mt-6">
        Cras convalis lacus orci, tristique tincidunt magna consequat in. In vel
        pulvinar est.
      </p>
    </div>
  );
};

export default NewArrivalsHeader;

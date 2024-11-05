// components/NewArrivalsHeader.js
import React from "react";
import Heading from "../Heading/Heading";

const NewArrivalsHeader = () => {
  return (
    <div className="ml-10 text-left w-56 mr-4">
      <Heading
        title="New"
        subtitle="Arrivals"
        titleColor="black"
        subtitleColor="white"
        titleSize="3xl"
        subtitleSize="4xl"
        subtitleBg="rgb(170,163,149)"
      />
      <p className="text-gray-700 mt-10">
        Cras convalis lacus orci, tristique tincidunt magna consequat in. In vel
        pulvinar est, at euismod libero.
      </p>
    </div>
  );
};

export default NewArrivalsHeader;

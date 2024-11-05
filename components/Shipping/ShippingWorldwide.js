import React from "react";
import SimpleCard from "../Cards/SimpleCard";

export default function ShippingWorldwide() {
  return (
    <div className="flex flex-col items-center justify-center mx-4 sm:flex-row sm:justify-between sm:mx-20">
      {/* Center items in a column for mobile */}
      <SimpleCard
        image="https://cdn.pixabay.com/photo/2014/04/02/17/03/globe-307805_960_720.png"
        heading="Worldwide Shipping"
        description="We offer worldwide shipping to ensure your products reach you no matter where you are."
      />
      <SimpleCard
        image="https://www.transparentpng.com/thumb/bronze-medal-png/grey-bronze-medal-png-30.png"
        heading="Fast Delivery"
        description="Our fast delivery service ensures you receive your orders quickly and efficiently."
      />
      <SimpleCard
        image="https://www.freeiconspng.com/thumbs/stock-exchange-icon-png/stock-exchange-icon-png-6.png"
        heading="Return Exchange"
        description="Our return exchange policy ensures a hassle-free shopping experience."
      />
    </div>
  );
}

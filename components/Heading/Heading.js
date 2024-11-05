import React from "react";

const Heading = ({
  title,
  subtitle,
  titleColor,
  subtitleColor,
  titleSize,
  subtitleSize,
  subtitleBg,
}) => {
  return (
    <div>
      <h3 className={`text-${titleColor} text-${titleSize} font-bold`}>
        {title}
      </h3>
      <h2
        className={`text-${subtitleColor} text-${subtitleSize} bg-[${subtitleBg}] font-bold inline-block`} // Changed to inline-block
      >
        {subtitle}
      </h2>
    </div>
  );
};

export default Heading;

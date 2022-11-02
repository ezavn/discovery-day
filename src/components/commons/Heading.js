import React from "react";

const Heading = ({ white, children, className }) => {
  return (
    <h2
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="500"
      className={`font-semibold text-[22px] md:text-[36px] text-center mx-auto mb-[30px] md:mb-[50px] ${
        white ? "text-white" : "text-blueDark"
      } ${className}`}
    >
      {children}
    </h2>
  );
};

export default Heading;

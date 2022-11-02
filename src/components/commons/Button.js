import React from "react";

const Button = ({ className, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25);] w-[282px] font-bold rounded-[50px] px-[26px] py-[20px] bg-red text-white border border-white border-solid ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

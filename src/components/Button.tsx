import React from "react";

interface ButtonProps {
  text: string;
  bgColor?: string;
}

const Button: React.FC<ButtonProps> = ({ text, bgColor }) => {
  return (
    <button
      className={`px-8 py-3 rounded hover:bg-gray-100 transition capitalize font-primary  ${
        bgColor ? "text-black" : "bg-none text-white border border-white"
      }`}
      style={{
        backgroundColor: bgColor || "transparent",
      }}
    >
      {text}
    </button>
  );
};

export default Button;

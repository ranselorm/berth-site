import React from "react";

interface ButtonProps {
  text: string;
  bgColor?: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({ text, bgColor, textColor }) => {
  return (
    <button
      className={`px-8 py-2 rounded hover:bg-gray-100 transition capitalize font-primary  ${
        bgColor ? "text-black" : "bg-none text-white border border-white"
      }`}
      style={{
        backgroundColor: bgColor || "transparent",
        color:
          bgColor === "white"
            ? "black"
            : bgColor === "transparent" || "black"
            ? textColor || "white"
            : "black",
      }}
    >
      {text}
    </button>
  );
};

export default Button;

import React from "react";

const Test = () => {
  return (
    <div className="relative flex items-center justify-center h-[300px]">
      {/* Blurred background */}
      <div className="absolute w-[350px] h-[250px] bg-[url('/images/4.jpg')] bg-center bg-cover blur z-0"></div>

      {/* Main image */}
      <div className="z-10">
        <img
          alt="Main"
          src="/images/4.jpg"
          className="w-[300px] h-[200px] rounded-md object-cover"
        />
      </div>
    </div>
  );
};

export default Test;

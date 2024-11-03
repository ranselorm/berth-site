// src/components/Hero.tsx
import React from "react";
import mainImage from "/images/womanvr.jpg"; // Ensure this path points to the correct image
import Button from "./Button";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-[80vh] bg-blue-700 text-white overflow-hidden font-primary">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-8 md:px-14 px-4">
        <h1 className="text-3xl md:text-5xl font-semibold leading-loose">
          Everything starts with Identity
        </h1>
        <p className="text-lg md:text-xl">
          Identity can create great user experiences, increase customer
          sign-ups, improve employee productivity, and get apps to market
          faster.
        </p>
        <div className="space-x-4">
          {/* <button className="bg-white text-blue-700 px-6 py-2 rounded shadow-lg hover:bg-gray-100 transition">
            Free Trial
          </button>
          <button className="bg-transparent text-white border border-white px-6 py-2 rounded shadow-lg hover:bg-blue-800 transition">
            Talk to us
          </button> */}
          <Button text="Free trial" bgColor="#fff" />
          <Button text="Talk to us" />
        </div>
      </div>

      {/* Right Image Container with Surrounding Blur */}
      <div className="relative md:w-1/2 md:mt-0 flex justify-center h-full overflow-hidden">
        {/* Wrapper for the blurred effect and image */}
        <div className="relative w-[94%]">
          {/* Blurred background effect */}
          <div
            className="absolute -inset-4 filter blur opacity-75"
            style={{
              backgroundImage: `url(${mainImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Main image */}
          <img
            src={mainImage}
            alt="Main visual"
            className="relative z-10 rounded-3xl object-cover w-full h-[94%] mt-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

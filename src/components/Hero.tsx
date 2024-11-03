import React from "react";
import mainImage from "/images/womanvr.jpg";
import Button from "./Button";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-[80vh] bg-blue-700 text-white overflow-hidden font-primary">
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
          <Button text="Free trial" bgColor="#fff" />
          <Button text="Talk to us" />
        </div>
      </div>

      <div className="relative md:w-1/2 md:mt-0 flex justify-center h-full overflow-hidden">
        <div className="relative w-[94%]">
          <div
            className="absolute -inset-4 filter blur opacity-75"
            style={{
              backgroundImage: `url(${mainImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

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

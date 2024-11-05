import React from "react";
import Button from "./Button";
import BlurredWrapper from "./BlurredWrapper";

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
          <Button text="Free trial" bgColor="white" />
          <Button text="Talk to us" />
        </div>
      </div>

      <div className="relative md:w-1/2 md:mt-0 h-[100%]">
        <BlurredWrapper imageSrc="/images/womanvr.jpg" />
      </div>
    </div>
  );
};

export default Hero;

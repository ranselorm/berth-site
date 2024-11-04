import React from "react";

interface BlurredWrapperProps {
  imageSrc: string;
  rounded?: true;
}

const BlurredWrapper: React.FC<BlurredWrapperProps> = ({ imageSrc }) => {
  return (
    <div className="relative flex items-center justify-center h-[100%] overflow-hidden">
      <div
        className="absolute w-[100%] h-[100%] blur z-0"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="relative h-[90%] z-10">
        <img
          alt="Main"
          src={imageSrc}
          className="w-[90%] h-full object-cover mx-auto rounded-xl"
        />
      </div>
    </div>
  );
};

export default BlurredWrapper;

// src/components/BlurredImageWrapper.tsx
import React from "react";

interface BlurredImageWrapperProps {
  imageSrc: string;
  altText?: string;
}

const BlurredImageWrapper: React.FC<BlurredImageWrapperProps> = ({
  imageSrc,
  altText,
}) => {
  return (
    <div className="relative w-[94%]">
      <div
        className="absolute -inset-4 filter blur opacity-75"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <img
        src={imageSrc}
        alt={altText || "Main visual"}
        className="relative z-10 rounded-3xl object-cover w-full h-[94%] mt-3"
      />
    </div>
  );
};

export default BlurredImageWrapper;

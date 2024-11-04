import React from "react";

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  linkText: string;
  linkHref: string;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  description,
  linkText,
  linkHref,
}) => {
  return (
    <div className="w-2/6 rounded-xl transition-all duration-300 hover:bg-blue-600 hover:text-white bg-red p-8">
      <div className="flex flex-col gap-y-6">
        <p className="uppercase font-bold mb-2 text-lg text-grey">{subtitle}</p>
        <h3 className="font-semibold mb-4 text-3xl">{title}</h3>
        <p className="text-lg mb-4">{description}</p>
      </div>
    </div>
  );
};

export default Card;

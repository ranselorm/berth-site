import React from "react";

const Industries: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row bg-red py-16 px-4 md:px-14 gap-8 font-primary">
      <div className="flex-1">
        <h2 className="text-lg mb-6 text-[22px]">
          The Identity solution for every industry
        </h2>
        <ul className="space-y-4 text-3xl font-medium">
          {[
            "Public Sector",
            "Retail",
            "Financial Services",
            "Healthcare",
            "Manufacturing",
            "Travel + Hospitality",
            "Technology",
            "Energy",
            "Nonprofit",
          ].map((industry, index) => (
            <li
              key={index}
              className={`${
                industry.indexOf("Public Sector") === 0
                  ? "text-black"
                  : "text-grey hover:cursor-pointer hover:text-black w-max"
              }`}
            >
              {industry}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-lg text-gray-600">
          See how Okta delivers a secure identity solution for federal agencies,
          local governments, and educational institutions.
        </p>
        <a href="#" className="text-blue-600 underline mt-4 inline-block">
          Learn more
        </a>
      </div>

      <div className="relative flex-1 rounded-xl overflow-hidden">
        <img
          src="/images/industry.png"
          alt="Industry"
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute bottom-4 right-2 md:right-4 bg-white p-4 rounded-lg shadow-lg text-sm md:w-48 w-full">
          <p className="font-semibold">State of Illinois</p>
          <p className="text-gray-600">1:1 Million login accounts using Okta</p>
        </div>
      </div>
    </section>
  );
};

export default Industries;

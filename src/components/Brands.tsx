import React from "react";

const brands = [
  { name: "FedEx", logo: "/icons/fedex.svg" },
  { name: "Navan", logo: "/icons/navan.svg" },
  { name: "NTT Data", logo: "/icons/nttdata.svg" },
  { name: "S&P Global", logo: "/icons/spglobal.svg" },
  { name: "Mars", logo: "/icons/mars.svg" },
  { name: "Takeda", logo: "/icons/takeda.svg" },
  { name: "Wyndham", logo: "/icons/wyndham.svg" },
];

const BrandSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-14">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-center">
          {brands.map((brand, index) => (
            <div key={index} className="flex justify-center items-center w-24">
              <img
                src={brand.logo}
                alt={brand.name}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;

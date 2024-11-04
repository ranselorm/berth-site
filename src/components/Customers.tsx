import React from "react";
import BlurredWrapper from "./BlurredWrapper"; // Ensure the path is correct for your project structure

const Customer: React.FC = () => {
  return (
    <section className="mx-4 md:mx-14">
      <h4 className="para my-12">Here&apos;s what our awesome customers say</h4>
      <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-between h-[80vh] bg-black text-white overflow-hidden font-primary rounded-xl">
        <div className="md:w-1/2 space-y-8 md:px-14 px-4 py-4 md:py-0">
          <p className="text-lg md:text-xl">
            Identity can create great user experiences, increase customer
            sign-ups, improve employee productivity, and get apps to market
            faster.
          </p>
          <p className="text-lg md:text-xl">
            Identity can create great user experiences, increase customer
            sign-ups, improve employee productivity, and get apps to market
            faster.
          </p>
          <p className="text-lg md:text-xl">
            Identity can create great user experiences, increase customer
            sign-ups, improve employee productivity, and get apps to market
            faster.
          </p>
        </div>

        <div className="relative md:w-1/2 md:mt-0 h-[100%]">
          <BlurredWrapper imageSrc="/images/travel.jpg" />
        </div>
      </div>
    </section>
  );
};

export default Customer;

import React from "react";
import Button from "./Button";

const CallToAction: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-14 bg-white border-t border-gray-300 font-primary">
      <div className="flex flex-col md:flex-row justify-between items-start  space-y-6 md:space-y-0 mx-auto">
        {/* Title Container */}
        <h2 className="text-3xl md:text-4xl font-medium">
          Ready to put Identity first?
        </h2>

        {/* Content Container */}
        <div className="md:text-left flex flex-col space-y-4 md:space-y-10 justify-center md:w-1/2">
          <p className="text-2xl md:mb-0 text-grey">
            Get hands on with the free trial today, or get in touch with our
            team to discuss your unique needs.
          </p>
          <div className="flex space-x-4">
            <Button text="Get started" bgColor="black" textColor="white" />
            <button className="border border-black text-black px-6 py-2 rounded hover:bg-gray-100 transition">
              Talk to us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

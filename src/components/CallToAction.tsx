import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-14 bg-white border-t border-gray-300">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        {/* Left Side - Title */}
        <h2 className="text-3xl md:text-4xl font-semibold">
          Ready to put Identity first?
        </h2>

        {/* Right Side - Description and Buttons */}
        <div className="md:text-right flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-start md:items-center">
          <p className="text-lg text-gray-700 md:mb-0">
            Get hands on with the free trial today, or get in touch with our
            team to discuss your unique needs.
          </p>
          <div className="flex space-x-4">
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
              Get started
            </button>
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

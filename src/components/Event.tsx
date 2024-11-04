import React from "react";
import Button from "./Button";

const Event: React.FC = () => {
  return (
    <section className="py-12">
      <div className="relative bg-black text-white flex items-center mx-4 md:mx-14 mb-10 font-primary py-12 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-black opacity-80 z-0"></div>
        <div className="relative z-10 flex flex-col md:flex-row w-full justify-between items-center md:items-start">
          <div className="flex-1 p-4 md:p-12">
            <h2 className="text-3xl md:text-5xl leading-none md:w-[400px]">
              Looking back on an eventful Oktane
            </h2>
          </div>

          <div className="flex-1 p-4 md:p-12">
            <p className="mb-8 text-xl md:text-2xl">
              Catch the inspiring talks, workshops, and announcements you missed
              from the Identity event of the year.
            </p>
            <div className="flex flex-col md:flex-row gap-5">
              <Button text="Watch Now" bgColor="white" />
              <Button text="Read announcements" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;

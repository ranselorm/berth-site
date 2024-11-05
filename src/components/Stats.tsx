import React from "react";
import BlurredWrapper from "./BlurredWrapper";

const Stats: React.FC = () => {
  return (
    <section className="bg-red pt-20 md:pt-32 pb-6 px-4 md:px-14 font-primary">
      <div className="flex flex-col md:flex-row gap-4 items-start">
        <div className="flex-1 pr-4">
          <p className="subtext leading-loose text-grey">
            Our platform is extensible, easy-to-use, neutral, and works with
            your existing solutions, so you're free to choose the best
            technology for now and the future.
          </p>
          <h3 className="subtext mt-6">Here’s how we do it.</h3>
        </div>
        <div className="space-y-8 flex-1">
          <div className="flex justify-between">
            <div>
              <h4 className="text-3xl md:text-5xl">19,300+</h4>
              <p className="text-lg mt-2">customers</p>
            </div>
            <div>
              <h4 className="text-3xl md:text-5xl">7,000+</h4>
              <p className="text-lg">integrations</p>
            </div>
          </div>
          <div className="mt-10">
            <h4 className="text-3xl md:text-5xl">91%</h4>
            <p className="text-lg mt-2">
              Willingness to Recommend in the 2023 Gartner® Peer Insights™
              <p>Customers' Choice in Access Management report</p>
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-20 mb-10">
        <div className="flex flex-col items-center bg-white rounded-xl duration-300">
          <div className="w-full rounded-xl overflow-hidden mb-4">
            <BlurredWrapper imageSrc="/images/womanvr.jpg" />
          </div>
          <div className="flex flex-col items-start justify-center p-10 gap-y-6 w-full">
            <h4 className="text-[20px] md:text-[40px]">
              Customer Identity Cloud
            </h4>
            <p className="text-[20px] text-grey">
              Built to tackle both Consumer and SaaS Apps across every industry.
              Authenticate, authorize, and secure access for applications,
              devices, and users.
            </p>
            <span className="text-sm underline text-[20px] capitalize my-6">
              Explore customer identity cloud
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white rounded-xl">
          <div className="w-full rounded-xl overflow-hidden mb-4">
            <BlurredWrapper imageSrc="/images/vr.jpg" />
          </div>
          <div className="flex flex-col items-start justify-center p-10 gap-y-6 w-full">
            <h4 className="text-[20px] md:text-[40px]">
              Workforce Identity Cloud
            </h4>
            <p className="text-[20px] text-grey">
              Secure your employees, contractors, and partners — wherever they
              are. Covers every part of the Identity lifecycle, from governance,
              to access, to privileged controls.
            </p>
            <span className="text-sm underline text-[20px] capitalize my-6">
              Explore workforce identity cloud
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

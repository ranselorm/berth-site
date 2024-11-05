import React from "react";
import { Link } from "react-router-dom";

const footerSections = [
  {
    title: "Company",
    links: [
      "About Us",
      "Our Customers",
      "Leadership",
      "Investors",
      "Careers",
      "Events",
      "Press Room",
      "Partners",
    ],
  },
  {
    title: "Starting with Okta",
    links: [
      "Free Trial",
      "Pricing",
      "Contact Sales",
      "Trust",
      "Accessibility",
      "The Okta Advantage",
      "Customer Identity Cloud",
      "Workforce Identity Cloud",
    ],
  },
  {
    title: "Help & Support",
    links: ["Help and Support", "FAQ", "Contact Us"],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-14 font-primary">
      <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-20">
        {/* Logo and Contact Info */}
        <div className="flex-1 md:max-w-[300px]">
          <img
            src="/icons/main-mix.png"
            alt="Logo"
            className="mb-4 w-[150px] cursor-pointer"
          />
          <p className="mb-4">
            To connect with a product expert today, use our{" "}
            <Link to="#" className="underline">
              chat box
            </Link>
            ,{" "}
            <Link to="#" className="underline">
              email us
            </Link>
            , or call{" "}
            <Link to="tel:+18004251267" className="underline">
              +1 (800) 425-1267
            </Link>
            .
          </p>
          <button className="border border-white px-4 py-2 rounded hover:bg-gray-800 transition">
            Contact Us
          </button>
        </div>

        <div className="flex-1 flex flex-wrap justify-between md:gap-12">
          {footerSections.map((section, index) => (
            <div key={index} className="flex flex-col">
              <h4 className="text-gray-300 text-[20px] mb-3">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link to="#" className="hover:underline text-base">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 flex flex-col md:flex-row md:justify-between items-center text-sm">
        <div className="flex space-x-4 mb-4 md:mb-0">
          {["Legal", "Privacy Policy", "Site Terms", "Security", "Sitemap"].map(
            (item, i) => (
              <Link key={i} to="#" className="hover:underline">
                {item}
              </Link>
            )
          )}
        </div>
        <div className="text-center md:text-right">
          &copy; 2024 Berth. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

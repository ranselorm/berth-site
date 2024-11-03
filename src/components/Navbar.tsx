import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const navLinks = [
  { name: "Products", path: "/products" },
  { name: "Why Okta", path: "/why-okta" },
  { name: "Developers", path: "/developers" },
  { name: "Resources", path: "/resources" },
];

const NavBar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md md:px-14 px-4 py-4 flex justify-between items-center font-primary">
      <Link to="/" className="flex items-center">
        <img src="/icons/logo.png" alt="Logo" className="h-10" />
        {/* <span className="ml-2 font-bold text-lg"></span> */}
      </Link>

      <div className="flex space-x-8">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className="text-black hover:text-gray-700"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex space-x-4">
        <Link
          to="/contact"
          className="border border-black px-4 roundedpx-8 py-2 rounded hover:bg-gray-100 transition capitalize font-primary "
        >
          Contact us
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

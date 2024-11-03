import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const navLinks = [
  { name: "Products", path: "/products" },
  { name: "Why Berth", path: "/why-berth" },
  { name: "Developers", path: "/developers" },
  { name: "Resources", path: "/resources" },
];

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md md:px-14 px-4 py-3 flex justify-between items-center font-primary relative">
      <Link to="/" className="flex items-center">
        <img src="/icons/logo.png" alt="Logo" className="h-10" />
      </Link>

      {/* Hamburger Menu Icon */}
      <button
        className="md:hidden text-2xl"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <Icon icon={isMenuOpen ? "mdi:close" : "mdi:menu"} />
      </button>

      {/* Desktop View */}
      <div className="hidden md:flex space-x-8">
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

      <div className="hidden md:flex space-x-4">
        <Link
          to="/contact"
          className="border border-black px-4 py-2 rounded hover:bg-gray-100 transition capitalize font-primary"
        >
          Contact us
        </Link>
      </div>

      {/* Mobile View */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full h-screen bg-white shadow-md md:hidden flex flex-col space-y-4 p-4 z-20 border-t border-gray-200 overflow-hidden">
          {navLinks.map((link, index) => (
            <React.Fragment key={index}>
              <Link
                to={link.path}
                className="text-black hover:text-gray-700 py-2 border-t border-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            </React.Fragment>
          ))}

          <Link
            to="/contact"
            className="mt-4 border border-black px-4 py-2 rounded hover:bg-gray-100 transition capitalize"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

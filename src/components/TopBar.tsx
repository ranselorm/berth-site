// src/components/TopBar.tsx
import React from "react";
import { Link } from "react-router-dom";

const TopBar: React.FC = () => {
  return (
    <div className="bg-black text-white text-sm py-2 px-4 flex justify-between items-center">
      <div className="flex space-x-4">
        <Link to="/register" className="hover:underline">
          Get the Key Takeaways from dev_day(24) + Oktane Register now →
        </Link>
      </div>
      <div className="flex space-x-4 items-center">
        <span>+1 (800) 425-1267</span>
        <Link to="/sales" className="hover:underline">
          Chat with Sales
        </Link>
        <Link to="/search" className="hover:underline">
          Search
        </Link>
        <Link to="/location" className="hover:underline">
          United States
        </Link>
      </div>
    </div>
  );
};

export default TopBar;

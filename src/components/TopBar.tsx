import React from "react";
import { Link } from "react-router-dom";

const TopBar: React.FC = () => {
  return (
    <div className="bg-black text-white text-xs py-2 md:px-14 px-4 flex justify-between items-center font-primary">
      <div className="flex space-x-4">
        <Link to="/register" className="hover:underline">
          Get the Key Takeaways from dev_day(24)
        </Link>
      </div>
      <div className="flex space-x-4 items-center">
        <span>+1 (800) 425-1267</span>
      </div>
    </div>
  );
};

export default TopBar;

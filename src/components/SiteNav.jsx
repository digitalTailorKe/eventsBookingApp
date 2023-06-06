import React from "react";
import { Link } from "react-router-dom";

const SiteNav = () => {
  return (
    <div className="items-center bg-[#d3f8d3] text-slate-300 p-2 md:p-3 sticky top-0 z-10 shadow-lg">
      <div className="container w-full lg:max-w-screen-lg lg:mx-auto px-2 flex justify-center items-center">
        {/* Site header */}
        <Link to="/" className="">
          <img src="/imgs/logo.png" alt="" style={{ width: "150px" }} />
        </Link>

        {/* Nav Links forti-logo.png */}
        <div className="hidden">
          {/* Site header */}
          <Link to="/" className="">
            <img src="/imgs/forti-logo.png" alt="" style={{ width: "150px" }} />
          </Link>
          <ul className="flex justify-between items-center cursor-pointer">
            <li className="hidden mx-2 hover:text-slate-300">Contact Us</li>
            <li className="hidden mx-2 px-3 py-1 bg-[#dbe8f4] text-slate-700 rounded-2xl hover:text-slate-300 hover:bg-gray-400 shadow-md">
              Sign In
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SiteNav;

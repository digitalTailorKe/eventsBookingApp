import React from "react";
import Logo from "../../public/imgs/logo.png";

const SiteNav = () => {
  return (
    <div className="items-center bg-[#194d77] text-slate-300 p-2 md:p-3 dark:bg-[#844adc] dark:text-white sticky top-0 z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Site header */}
        <div className="">
          <img src={Logo} alt="" style={{ width: "100px" }} />
        </div>

        {/* Nav Links */}
        <div className="">
          <ul className="flex justify-between items-center cursor-pointer">
            <li className="mx-2 hover:text-slate-300 hidden md:block">
              Contact Us
            </li>
            <li className="mx-2 px-3 py-1 bg-[#dbe8f4] text-slate-700 rounded-2xl hover:text-slate-300 hover:bg-gray-400 shadow-md">
              Sign In
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SiteNav;

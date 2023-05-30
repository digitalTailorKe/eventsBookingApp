import React from "react";

const SiteNav = () => {
  return (
    <div className="items-center bg-[#194d77] text-slate-300 p-2 md:p-3 dark:bg-[#634197] dark:text-white">
      <div className="container mx-auto flex justify-between">
        {/* Site header */}
        <div className="">Logo here</div>

        {/* Nav Links */}
        <div className="">
          <ul className="flex justify-between items-center cursor-pointer">
            <li className="mx-2 hover:text-slate-300 hidden md:block">
              Contact Us
            </li>
            <li className="mx-2 px-3 py-1 bg-gray-600 text-white rounded-2xl hover:text-slate-300 hover:bg-gray-400">
              Sign In
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SiteNav;

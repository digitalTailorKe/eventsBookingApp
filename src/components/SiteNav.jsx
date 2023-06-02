import React from "react";

const SiteNav = () => {
  return (
    <div className="items-center bg-[#194d77] text-slate-300 p-2 md:p-3 sticky top-0 z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Site header */}
        <a href="/home" className="">
          <img src="/imgs/logo.png" alt="" style={{ width: "100px" }} />
        </a>

        {/* Nav Links */}
        <div className="">
          <ul className="flex justify-between items-center cursor-pointer">
            <li className="mx-2 hover:text-slate-300 hidden md:block">
              Contact Us
            </li>
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

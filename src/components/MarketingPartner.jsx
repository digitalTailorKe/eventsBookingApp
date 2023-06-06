import React from "react";
import { FaHandshake } from "react-icons/fa";

const MarketingPartner = () => {
  return (
    <div className="">
      <h4 className="flex gap-4 items-center text-[#153148] text-[16px] md:text-[22px] font-[400] pb-2 uppercase">
        <FaHandshake style={{ fontSize: "21px" }} /> Marketing Partner
      </h4>

      <hr className="mb-3" />

      <div className="flex gap-4 justify-center items-center">
        <div className="rounded-2xl flex justify-center">
          <a href="https://dta.co.ke" target="_blank">
            <img
              src="/imgs/dta_logo.svg"
              alt=""
              className="w-[250px] md:w-[100%] cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MarketingPartner;

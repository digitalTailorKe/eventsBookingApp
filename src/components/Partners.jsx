import React from "react";
import { FaPeopleArrows } from "react-icons/fa";

const Partners = () => {
  return (
    <div className="">
      <h4 className="flex gap-4 items-center text-[#153148] text-[20px] md:text-[22px] font-[400] pb-2">
        <FaPeopleArrows style={{ fontSize: "21px" }} /> Events Partners
      </h4>

      <hr className="mb-3" />

      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <div className="shadow-lg rounded-2xl flex justify-center w-full">
          <img src="/imgs/partners.png" alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Partners;

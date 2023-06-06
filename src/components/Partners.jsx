import React from "react";
import { FaPeopleArrows } from "react-icons/fa";

const Partners = () => {
  return (
    <div className="">
      <h4 className="flex gap-4 items-center text-[#153148] text-[20px] md:text-[22px] font-[400] pb-2">
        <FaPeopleArrows style={{ fontSize: "21px" }} /> Events Partners
      </h4>

      <hr className="mb-3" />

      <div className="flex gap-4 justify-center mx-auto items-center w-full">
        <div className="rounded-2xl flex-1 justify-center text-center">
          <a href="https://repc.in/" target="_blank">
            <img
              src="/imgs/repc-logo.png"
              alt=""
              className="max-w-full md:w-[50%] cursor-pointer"
            />
          </a>
        </div>

        <div className="rounded-2xl flex-1 justify-center">
          <a href="https://www.kenyachamber.or.ke/" target="_blank">
            <img
              src="/imgs/kncci-logo.png"
              alt=""
              className="max-w-full md:w-[50%] cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partners;

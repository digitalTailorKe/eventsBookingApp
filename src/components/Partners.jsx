import React from "react";
import { FaPeopleArrows } from "react-icons/fa";

const Partners = () => {
  return (
    <div className="">
      <h4 className="flex gap-4 items-center text-[#153148] text-[16px] md:text-[22px] font-[400] pb-2 uppercase">
        <FaPeopleArrows style={{ fontSize: "21px" }} /> Association with
      </h4>

      <hr className="mb-3" />

      <div className="flex flex-col md:flex-row justify-center items-center mx-auto gap-2 w-full shadow-lg p-3 rounded-lg">
        <div className="flex-1 my-3">
          <div className="flex-1 text-center">
            <a href="https://www.kenyachamber.or.ke/" target="_blank">
              <img
                src="/imgs/kncci-logo.png"
                alt=""
                className="w-[60%] md:w-[40%] mx-auto cursor-pointer"
              />
            </a>
          </div>
        </div>

        <div className="flex-1">
          <h4 className="text-center md:text-left mb-3 font-bold">
            KENYA NATIONAL CHAMBER OF COMMERCE AND INDUSTRY (KNCCI)
          </h4>
          <p className="text-[16px] md:text-[18px]">
            It is registered as a not-for-profit private company limited by
            guarantee under the Companies Act Chapter 486 of the laws of Kenya.
            It is a membership-based trade support institution (TSI) working to
            protect the commercial and industrial interests of the Kenyan
            business community. KNCCI advocates for creating a good commercial,
            trade, and investment environment that supports enterprise
            expansion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Partners;

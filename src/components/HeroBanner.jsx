import React from "react";
import { WelcomeText, Countdown } from "../components";
import { FaMapMarkerAlt } from "react-icons/fa";

const HeroBanner = () => {
  return (
    <div className="pt-2 pb-5">
      <div className="relative">
        <div className="w-full">
          <img
            className="w-full hidden md:block h-full object-cover rounded-2xl shadow"
            src="/imgs/desktop_bunner.jpg"
            alt=""
          />
          <img
            className="w-full md:hidden h-full object-cover rounded-2xl shadow"
            src="/imgs/mobile_bunner.jpg"
            alt=""
          />
        </div>

        {/* Welcome Text */}
        <WelcomeText />
      </div>

      {/* Banner Info */}
      <div className="mt-8 md:mt-10 px-1 md:px-5">
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <h3 className="text-[#153148] mb-2 text-[22px] md:pl-0 font-[700] md:text-[38px]">
              INDO EAST AFRICA TRADE EXPO
            </h3>
            {/* <p className="text-[12px] md:px-3 md:text-[21px] font-[400] text-[#153148] dark:text-slate-100">
              Hosted by Starknet Africa, Louis Guthmann & Dickens Otieno{" "}
            </p> */}
          </div>

          {/* Date Area */}
          {/* <div className="hidden md:block">
            <CountdownDays />
          </div> */}
        </div>
      </div>

      {/* Hero Date & Location */}
      <div className="mt-3 flex-col items-start flex md:justify-between md:items-center px-1 md:flex-row md:px-5">
        <div className="hidden md:flex gap-4">
          <div className="hidden md:flex flex-col items-center border border-[#153148] rounded-lg">
            <div className="text-[14px] py-1 font-normal md:text-[16px] text-[#153148]">
              July <br /> 2023
            </div>
            <div className="text-[14px] p-2 bg-[#153148] text-slate-100 rounded-b-lg md:text-[16px] flex-grow">
              <p className="">05 - 07</p>
            </div>
          </div>

          {/* <div className="my-auto">
            <h4 className="text-[#153148] text-[16px] md:text-[25px] font-[400] dark:text-slate-100">
              Wednesday, 05 July 2023
            </h4>
            <p className="text-[12px] md:text-[18px] font-[400] text-[#153148] dark:text-slate-100">
              9:00 AM - 7:00 PM
            </p>
          </div> */}

          <div className="hidden md:block">
            <Countdown />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mx-auto mb-3 md:hidden">
          <div className="flex flex-col items-center border border-[#153148] rounded-lg w-full">
            <div className="text-[14px] py-1 font-normal md:text-[16px] text-[#153148]">
              July 2023
            </div>
            <div className="text-[14px] w-full p-2 bg-[#153148] text-slate-100 rounded-b-lg md:text-[16px] flex-grow flex justify-center items-center">
              <p className="">05 - 07</p>
            </div>
          </div>

          <Countdown />
        </div>

        {/* Location Input */}
        <div className="text-[#153148] mt-3 mx-auto md:mx-0 md:mt-0 flex gap-4 items-center">
          <div className="border border-[#153148] rounded-full p-3">
            <FaMapMarkerAlt
              style={{
                fontSize: "18px",
              }}
            />
          </div>

          <div className="">
            <a href="https://goo.gl/maps/sCdbZyrHVNNE8BYz7">
              <p className="text-[#153148] text-[16px] md:text-[22px] font-[400]">
                The KICC, Nairobi Kenya
              </p>
            </a>
          </div>
        </div>
      </div>

      <hr className="my-3" />

      <div className="mt-3">
        <p className="text-red-600 text-center text-[18px] md:text-lg font-[600]">
          Witness the grand showcase of Indian business
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;

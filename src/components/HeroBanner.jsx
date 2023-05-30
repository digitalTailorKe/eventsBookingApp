import React from "react";
import bannerImg from "../../public/imgs/expoimage.png";
import { WelcomeText } from "../components";
import { FaMapMarkerAlt } from "react-icons/fa";

const HeroBanner = () => {
  return (
    <div className="pt-2 pb-5">
      <div className="relative">
        <div className="w-full">
          <img
            className="w-full h-full object-cover rounded-2xl shadow"
            src={bannerImg}
            alt=""
          />
        </div>

        {/* Welcome Text */}
        <WelcomeText />
      </div>

      {/* Banner Info */}
      <div className="mt-8 md:mt-10 px-1 md:px-5">
        <div className="flex justify-between items-baseline">
          <div className="flex-1">
            <h3 className="text-[#153148] mb-2 text-[18px] md:px-3 font-[700] md:text-[28px] dark:text-slate-100">
              INDO EAST AFRICA TRADE EXPO
            </h3>
            <p className="text-[12px] md:px-3 md:text-[21px] font-[400] text-[#153148] dark:text-slate-100">
              Hosted by Starknet Africa, Louis Guthmann & Dickens Otieno{" "}
            </p>
          </div>

          {/* Date Area */}
          <div className="hidden md:flex md:gap-4">
            <div className="flex flex-col items-center border border-[#153148] dark:border-[#431b7e] rounded-lg">
              <div className="text-[14px] py-2 font-normal md:text-[21px] text-[#153148] dark:text-[#431b7e]">
                July
              </div>
              <div className="text-[14px] py-3 px-5 bg-[#153148] dark:bg-[#431b7e] text-slate-100 rounded-b-lg md:text-[21px] flex-grow">
                <p className="">05</p>
              </div>
            </div>

            <div className="flex flex-col items-center border border-[#153148] dark:border-[#431b7e] rounded-lg">
              <div className="text-[14px] py-2 font-normal md:text-[21px] text-[#153148] dark:text-[#431b7e]">
                July
              </div>
              <div className="text-[14px] py-3 px-5 bg-[#153148] dark:bg-[#431b7e] text-slate-100 rounded-b-lg md:text-[21px] flex-grow">
                <p className="">06</p>
              </div>
            </div>

            <div className="flex flex-col items-center border border-[#153148] dark:border-[#431b7e] rounded-lg">
              <div className="text-[14px] py-2 font-normal md:text-[21px] text-[#153148] dark:text-[#431b7e]">
                July
              </div>
              <div className="text-[14px] py-3 px-5 bg-[#153148] dark:bg-[#431b7e] text-slate-100 rounded-b-lg md:text-[21px] flex-grow">
                <p className="">07</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Date & Location */}
      <div className="mt-3 flex-col items-start flex md:justify-between md:items-center px-1 md:flex-row md:px-5">
        <div className="flex gap-4">
          <div className="hidden md:flex flex-col items-center border border-[#153148] dark:border-[#431b7e] rounded-lg">
            <div className="text-[14px] py-2 font-normal md:text-[21px] text-[#153148] dark:text-[#431b7e]">
              July
            </div>
            <div className="text-[14px] p-3 bg-[#153148] dark:bg-[#431b7e] text-slate-100 rounded-b-lg md:text-[21px] flex-grow">
              <p className="">05 - 07</p>
            </div>
          </div>

          <div className="flex md:gap-2 md:hidden">
            <div className="flex flex-col items-center border border-[#153148] dark:border-[#431b7e] rounded-lg">
              <div className="text-[14px] py-2 font-normal md:text-[21px] text-[#153148] dark:text-[#431b7e]">
                July
              </div>
              <div className="text-[14px] py-3 px-5 bg-[#153148] dark:bg-[#431b7e] text-slate-100 rounded-b-lg md:text-[21px] flex-grow">
                <p className="">05</p>
              </div>
            </div>

            <div className="flex flex-col items-center border border-[#153148] dark:border-[#431b7e] rounded-lg">
              <div className="text-[14px] py-2 font-normal md:text-[21px] text-[#153148] dark:text-[#431b7e]">
                July
              </div>
              <div className="text-[14px] py-3 px-5 bg-[#153148] dark:bg-[#431b7e] text-slate-100 rounded-b-lg md:text-[21px] flex-grow">
                <p className="">06</p>
              </div>
            </div>

            <div className="flex flex-col items-center border border-[#153148] dark:border-[#431b7e] rounded-lg">
              <div className="text-[14px] py-2 font-normal md:text-[21px] text-[#153148] dark:text-[#431b7e]">
                July
              </div>
              <div className="text-[14px] py-3 px-5 bg-[#153148] dark:bg-[#431b7e] text-slate-100 rounded-b-lg md:text-[21px] flex-grow">
                <p className="">07</p>
              </div>
            </div>
          </div>

          <div className="my-auto">
            <h4 className="text-[#153148] text-[16px] md:text-[25px] font-[400] dark:text-slate-100">
              Saturday, 20 May
            </h4>
            <p className="text-[12px] md:text-[18px] font-[400] text-[#153148] dark:text-slate-100">
              9:00 AM - 7:00 PM
            </p>
          </div>
        </div>

        <div className="dark:text-[#431b7e] text-[#153148] mt-3 md:mt-0 flex gap-4 items-center">
          <div className="border border-[#153148] rounded-full p-3 dark:border-slate-200">
            <FaMapMarkerAlt
              style={{
                fontSize: "21px",
              }}
            />
          </div>

          <div className="">
            <a href="https://goo.gl/maps/sCdbZyrHVNNE8BYz7">
              <p className="text-[#153148] text-[16px] md:text-[22px] font-[400] dark:text-slate-100">
                The KICC, Nairobi Kenya...
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

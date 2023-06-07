import React from "react";
import { FaHandshake } from "react-icons/fa";

const MarketingPartner = () => {
  return (
    <div className="">
      <h4 className="flex gap-4 items-center text-[#153148] text-[16px] md:text-[22px] font-[400] pb-2 uppercase">
        <FaHandshake style={{ fontSize: "21px" }} /> Marketing Partner
      </h4>

      <hr className="mb-3" />

      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <div className="flex-1 my-3">
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

        <div className="flex-1">
          <h4 className="text-center md:text-left mb-3 font-bold uppercase">
            Digital Tailor Agency Limited (DTA)
          </h4>
          <p className="text-[16px] md:text-[18px]">
            It is a leading marketing company based in Westlands, Nairobi,
            brings a wealth of expertise in digital and traditional marketing.
            With our bottom-up approach, we consistently deliver impressive
            return on investment (ROI) to our clients. When it comes to expos,
            we have a proven track record of successful marketing campaigns for
            various events in Kenya and across Africa.
          </p>

          <p className="text-[16px] md:text-[18px]">
            Partner with us to unlock the full potential of your expo, as we
            leverage our marketing prowess to drive attendance, enhance brand
            visibility, and facilitate meaningful connections.
          </p>

          <p className="text-[16px] md:text-[18px]">
            For more information visit:{" "}
            <a
              href="https://dta.co.ke"
              target="_blank"
              className="text-blue-600 italic"
            >
              www.dta.co.ke
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketingPartner;

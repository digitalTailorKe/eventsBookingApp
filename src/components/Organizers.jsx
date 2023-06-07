import React from "react";
import { FaRegCalendarAlt, FaUserTie, FaCogs } from "react-icons/fa";

const Organizers = () => {
  return (
    <div className="">
      <h4 className="flex gap-4 items-center text-[#153148] text-[16px] md:text-[22px] font-[400] pb-2 uppercase">
        <FaCogs style={{ fontSize: "21px" }} /> Organized by
      </h4>

      <hr className="mb-3" />

      <div className="flex flex-col justify-start items-start gap-2 w-full">
        <div className="flex flex-col md:flex-row w-full justify-center items-center shadow-lg p-3 rounded-lg">
          <div className="flex-1">
            <div className="flex justify-center">
              <img
                src="/imgs/raok.png"
                alt=""
                className="w-[50%] md:w-[40%] mx-auto cursor-pointer"
              />
            </div>
          </div>

          <div className="flex-1">
            <h4 className="text-center md:text-left mb-3 font-bold">
              RAJASTHAN ASSOCIATION OF KENYA (RAK)
            </h4>
            <p className="text-[16px] md:text-[18px]">
              It was established in 2016 as a registered body, a nonprofitable
              organization in Kenya. Keeping Rajasthani Culture & tradition
              alive in Africa by bringing All NRI together on one platform.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center shadow-lg p-3 rounded-lg mt-3">
          <div className="flex-1 mb-3">
            <div className="flex justify-center">
              <a href="https://forti.in" target="_blank">
                <img
                  src="/imgs/forti.png"
                  alt=""
                  className="w-[50%] md:w-[40%] mx-auto cursor-pointer"
                />
              </a>
            </div>
          </div>

          <div className="flex-1">
            <h4 className="text-center md:text-left mb-3 font-bold">
              FEDERATION OF RAJASTHAN TRADE & INDUSTRY (FORTI)
            </h4>
            <p className="text-[16px] md:text-[18px]">
              It is a registered body with the Registrar of Non-Trading
              Companies. It has more than 15000+ direct members and 200,000+
              indirect members, including trading & industry establishments,
              industry-specific associations, and institutions besides
              individuals. It compasses a broad spectrum of industries & trade
              in all the sectors of the economy.
            </p>
            <p className="text-[16px] md:text-[18px]">
              For more information visit:{" "}
              <a
                href="https://forti.in"
                target="_blank"
                className="text-blue-600 italic"
              >
                www.forti.in
              </a>
            </p>
          </div>
        </div>

        <hr className="my-3" />

        {/* /imgs/repc-logo.png */}
        <div className="flex gap-4 flex-col md:flex-row w-full justify-center items-center shadow-lg p-3 rounded-lg">
          <div className="flex-1">
            <a href="https://repc.in/" target="_blank">
              <img
                src="/imgs/repc-logo.png"
                alt=""
                className="mx-auto cursor-pointer"
              />
            </a>
          </div>

          <div className="flex-1">
            <h4 className="text-center md:text-left mb-3 font-bold">
              RAJASTHAN EXPORT PROMOTION COUNCIL (REPC)
            </h4>
            <p className="text-[16px] md:text-[18px]">
              It is a not-for-profit organization, constituted under the
              Notification of the Department of Industries and Commerce,
              Government of Rajasthan. REPC is committed to working for the
              overall development of all manufacturing, service, and business
              sectors, from entrepreneurship development, export infrastructure
              development, and export ecosystem development in Rajasthan.
            </p>
            <p className="text-[16px] md:text-[18px]">
              For more information visit:{" "}
              <a
                href="https://repc.in/"
                target="_blank"
                className="text-blue-600 italic"
              >
                www.repc.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizers;

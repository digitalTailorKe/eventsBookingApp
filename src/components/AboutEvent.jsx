import React from "react";
import { FaRegCalendarAlt, FaUserTie } from "react-icons/fa";

const AboutEvent = () => {
  return (
    <div className="">
      <h4 className="flex gap-4 items-center text-[#153148] text-[20px] md:text-[22px] font-[400] dark:text-slate-100 pb-2">
        <FaRegCalendarAlt style={{ fontSize: "21px" }} /> About Event
      </h4>

      <hr className="mb-3" />

      <div className="">
        <p className="mb-3 text-[18px]">
          RAJASTHAN ASSOCIATION OF KENYA (RAK) Rajasthan Association of kenya
          was established in the year 2016 as a non-profit organization. Keeping
          Rajasthani Culture & tradition alive in Africa by bringing All NRI's
          together on one platform.
        </p>
        <p className="mb-3 text-[18px]">
          Serving the local community by doing charity work, various social
          activities and connecting businesses locally and globally in different
          sectors: trade, manufacturing, investment, export & import.
        </p>
        <p className="mb-3 text-[18px]">
          Rajasthan Association of kenya is the key partner to organize INDO
          EAST AFRICA TRADE EXPO 2023.
        </p>
        <p className="mb-3 text-[18px]">
          It is a registered body with the registrar of Non trading companies.
          It has a membership of more than 15,000+ direct members and 200,000+
          indirect members which include trading & industry establishments,
          industry specific associations, institutions beside individuals and
          companies, wide spectrum of industries & trade in all the sectors of
          the economy.
        </p>

        <p className="mb-3 text-[18px]">
          FORTI is now creating an opportunityfor all the businesses here to
          promote themselves in the East African Market and thus promoting make
          in Rajasthan to the Global level.
        </p>
      </div>
    </div>
  );
};

export default AboutEvent;

import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const AboutEvent = () => {
  return (
    <div className="">
      <h4 className="flex gap-4 items-center text-[#153148] text-[16px] md:text-[22px] font-[400] dark:text-slate-100">
        <FaRegCalendarAlt style={{ fontSize: "21px" }} /> About Event
      </h4>

      <hr />
    </div>
  );
};

export default AboutEvent;

import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Location = () => {
  return (
    <div className="">
      <h4 className="flex gap-4 items-center text-[#153148] text-[16px] md:text-[22px] font-[400] dark:text-slate-100">
        <FaMapMarkerAlt style={{ fontSize: "21px" }} /> Location
      </h4>

      <hr />
    </div>
  );
};

export default Location;

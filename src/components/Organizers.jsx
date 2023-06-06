import React from "react";
import { FaRegCalendarAlt, FaUserTie, FaCogs } from "react-icons/fa";

const Organizers = () => {
  return (
    <div className="">
      <h4 className="flex gap-4 items-center text-[#153148] text-[20px] md:text-[22px] font-[400] pb-2">
        <FaCogs style={{ fontSize: "21px" }} /> Organized by
      </h4>

      <hr className="mb-3" />

      <div className="flex gap-4 justify-center items-center">
        <div className="shadow-lg rounded-2xl flex justify-center">
          <img src="/imgs/raok.png" alt="" className="max-w-full" />
        </div>

        <div className="shadow-lg rounded-2xl flex justify-center">
          <img src="/imgs/forti.png" alt="" className="max-w-full" />
        </div>
      </div>
    </div>
  );
};

export default Organizers;

import React from "react";
import { FaUserFriends } from "react-icons/fa";

const Hosts = () => {
  return (
    <div className="">
      <h4 className="flex gap-4 items-center text-[#153148] text-[16px] md:text-[22px] font-[400] dark:text-slate-100">
        <FaUserFriends style={{ fontSize: "21px" }} /> Hosts
      </h4>

      <hr />
    </div>
  );
};

export default Hosts;

import React from "react";
import { FaUserFriends, FaUserTie } from "react-icons/fa";

const Hosts = () => {
  return (
    <div className="">
      <h4 className="flex gap-4 items-center text-[#153148] text-[20px] md:text-[22px] font-[400] dark:text-slate-100 pb-2">
        <FaUserFriends style={{ fontSize: "21px" }} /> Hosts
      </h4>

      <hr className="mb-3" />

      <div className="">
        <div className="cursor-pointer border border-[#153148] rounded-full p-3 dark:border-slate-200 flex gap-5 mb-3 hover:bg-[#153148] hover:text-slate-200 dark:hover:bg-[#431b7e] dark:hover:text-slate-200">
          <FaUserTie
            style={{
              fontSize: "21px",
            }}
          />
          <p>MR. ASHOK GEHLOT</p>
        </div>
        <div className="cursor-pointer border border-[#153148] rounded-full p-3 dark:border-slate-200 flex gap-5 mb-3 hover:bg-[#153148] hover:text-slate-200 dark:hover:bg-[#431b7e] dark:hover:text-slate-200">
          <FaUserTie
            style={{
              fontSize: "21px",
            }}
          />
          <p>MR. RAJIV ARORA</p>
        </div>
      </div>
    </div>
  );
};

export default Hosts;

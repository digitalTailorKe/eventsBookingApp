import React from "react";
import { FaUserLock, FaUnlockAlt } from "react-icons/fa";

const Registration = () => {
  return (
    <div className="">
      <h4 className="flex gap-4 items-center text-[#153148] text-[16px] md:text-[22px] font-[400] dark:text-slate-100 pb-2">
        <FaUnlockAlt style={{ fontSize: "21px" }} /> Registration
      </h4>

      <hr className="" />

      {/* Registration Body */}
      <div className="mt-5">
        <div className="flex flex-col gap-4">
          <h4 className="text-[21px] font-bold">Registration Ongoing...</h4>
          <p>
            Don't miss out on this exciting event. By registering, you'll ensure
            that you have a ticket reserved and ready for the event day. Secure
            your spot now and join us for an unforgettable experience.{" "}
          </p>

          <button className="dark:bg-slate-200 bg-[#153148] text-slate-200 hover:bg-slate-200 hover:text-[#153148] w-[200px] py-3 rounded-xl dark:text-[#431b7e] dark:hover:bg-[#431b7e] dark:hover:text-slate-200">
            Register Now
          </button>
        </div>

        {/* Registration Form */}
        <div className="mt-5">
          <form action="" method="post" className="hidden">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-[#153148] text-[14px] font-[400] dark:text-slate-100"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="border-none rounded-lg py-2 px-3 text-[#153148] dark:text-[#ç] focus:outline-none focus:ring-2 focus:ring-[#153148] dark:focus:ring-[#431b7e]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;

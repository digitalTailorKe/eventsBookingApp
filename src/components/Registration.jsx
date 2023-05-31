import React, { useState } from "react";
import { FaUserLock, FaUnlockAlt } from "react-icons/fa";
import RegistrationForm from "./RegistrationForm";

const Registration = () => {
  const [showForm, setShowForm] = useState(false);

  const handleRegisterClick = () => {
    setShowForm(true);
  };

  return (
    <div className="">
      <h4 className="flex gap-4 items-center text-[#153148] text-[20px] md:text-[22px] font-[400] dark:text-slate-100 pb-2">
        <FaUnlockAlt style={{ fontSize: "21px" }} /> Registration
      </h4>

      <hr className="" />

      {/* Registration Body */}
      <div className="mt-5">
        {!showForm ? (
          <div className="flex flex-col gap-4">
            <h4 className="text-[21px] font-bold">Registration Ongoing...</h4>
            <p className="text-[18px]">
              Don't miss out on this exciting event. By registering, you'll
              ensure that you have a ticket reserved and ready for the event
              day. Secure your spot now and join us for an unforgettable
              experience.{" "}
            </p>

            <button
              className="dark:bg-slate-200 bg-[#153148] text-slate-200 hover:bg-slate-200 hover:text-[#153148] w-[200px] py-3 rounded-xl dark:text-[#431b7e] dark:hover:bg-[#431b7e] dark:hover:text-slate-200"
              onClick={handleRegisterClick}
            >
              Register Now
            </button>
          </div>
        ) : (
          <div className="mt-5">
            {/* Registration Form */}
            <RegistrationForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default Registration;

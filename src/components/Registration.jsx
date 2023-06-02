import React, { useState } from "react";
import { FaUnlockAlt, FaCheckCircle } from "react-icons/fa";
import { BiCheckCircle } from "react-icons/bi";
import RegistrationForm from "./RegistrationForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  const [showForm, setShowForm] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegisterClick = () => {
    setShowForm(true);
  };

  const handleRegistrationSuccess = () => {
    setIsRegistered(true);
    // toast.success("Congratulations! your registration was successful.");
  };

  return (
    <div className="">
      <h4 className="flex gap-4 items-center text-[#153148] text-[20px] md:text-[22px] font-[400] pb-2">
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
              className="bg-[#153148] text-slate-200 hover:bg-slate-200 hover:text-[#153148] w-[200px] py-3 rounded-xl"
              onClick={handleRegisterClick}
            >
              Register Now
            </button>
          </div>
        ) : (
          <div className="mt-5">
            {isRegistered ? (
              <div className="flex flex-col gap-4 bg-green-100 p-5 rounded-2xl">
                <div className="flex gap-4 items-center text-green-500">
                  <BiCheckCircle style={{ fontSize: "44px" }} />
                  <div className="">
                    <h4 className="text-green-600 text-[21px] font-bold">
                      Registration Successful!
                    </h4>
                    <p className="text-[18px] text-green-500">
                      Thank you for registering. We look forward to seeing you
                      at the event.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <RegistrationForm
                onRegistrationSuccess={handleRegistrationSuccess}
              />
            )}
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Registration;

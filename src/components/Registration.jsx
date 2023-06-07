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
  };

  const handleResetForm = () => {
    setIsRegistered(false);
  };

  return (
    <div className="">
      <h4 className="flex gap-4 items-center text-[#153148] text-[16px] md:text-[22px] font-[400] uppercase pb-2">
        <FaUnlockAlt style={{ fontSize: "21px" }} /> Registration
      </h4>

      <hr className="" />

      {/* Registration Body */}
      <div className="mt-5">
        <div className="mt-5">
          {isRegistered ? (
            <div className="">
              <div className="flex flex-col gap-4 bg-green-100 p-5 rounded-2xl">
                <div className="flex gap-4 items-center text-green-500">
                  <BiCheckCircle style={{ fontSize: "44px" }} />
                  <div className="">
                    <h4 className="text-[16px] text-green-600 md:text-[21px] font-bold">
                      Registration Successful!
                    </h4>
                    <p className="text-[14px] md:text-[18px] text-green-500">
                      Thank you for registering. We look forward to seeing you
                      at the event.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:flex md:justify-center w-[100%] mx-auto mt-3">
                <button
                  onClick={handleResetForm}
                  className="bg-[#f04223] text-slate-200 uppercase hover:bg-slate-200 hover:text-[#153148] w-full py-3 rounded-xl"
                >
                  Register Another
                </button>
              </div>
            </div>
          ) : (
            <RegistrationForm
              onRegistrationSuccess={handleRegistrationSuccess}
            />
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Registration;

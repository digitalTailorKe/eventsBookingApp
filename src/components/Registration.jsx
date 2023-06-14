import React, { useState } from "react";
import { FaUnlockAlt } from "react-icons/fa";
import RegistrationForm from "./RegistrationForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SuccessPage from "../views/frontend/SuccessPage";
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
            // Load the success page
            <SuccessPage />
          ) : (
            // Load the Registration page
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

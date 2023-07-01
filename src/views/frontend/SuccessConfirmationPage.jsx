import React from "react";
import { Link } from "react-router-dom";

const SuccessConfirmationPage = () => {
  return (
    <div className="h-screen flex justify-center items-center w-full">
      <div className="bg-white p-3 rounded-md shadow-md mx-2">
        <div className="mb-3 flex justify-center">
          <img src="/imgs/logo.png" alt="logo" className="w-40" />
        </div>

        <div className="p-3 bg-green-200 text-green-800 mb-5 rounded-md">
          <h1 className="text-center text-green-600 text-2xl mb-3">Success!</h1>
          <p className="text-[18px]">
            Your confirmation has been successfully processed.
          </p>
          <p className="text-[18px]">Thank you for your submission.</p>
        </div>

        <div className="w-full text-center mb-3">
          <Link
            to="http://localhost:5173/gatepass?name=John%20Doe&id=123"
            className="bg-blue-500 w-full rounded-md shadow-md py-2 px-10 my-3 text-white font-bold"
            onClick={""}
          >
            View Gate Pass
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessConfirmationPage;

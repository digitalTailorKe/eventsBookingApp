import React from "react";
import { BiLockOpen } from "react-icons/bi";
import PageTitle from "../../components/PageTitle";
import OnsiteRegistrationForm from "../../components/backend/OnsiteRegistrationForm";

const OnsiteRegistration = () => {
  return (
    <div className="min-h-screen lg:py-8 text-[16px] lg:text-[18px]">
      <PageTitle title="Register Attendees" />
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg px-4 md:px-8 lg:px-8 pb-6">
        <h2 className="text-3xl text-center p-10 font-semibold mb-6 border-b-4 border-b-blue-500 text-blue-500 flex justify-center items-center">
          <BiLockOpen className="inline-block font-bold mr-2" />
          Self Registration.
        </h2>

        <div className="mb-5">
          <OnsiteRegistrationForm />
        </div>

        {/* Register form Area */}
        <div className=""></div>
      </div>
    </div>
  );
};

export default OnsiteRegistration;

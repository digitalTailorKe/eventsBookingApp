import React from "react";
import { BiCheckDouble } from "react-icons/bi";
import PageTitle from "../../components/PageTitle";

const QrcodeAreadyConfirmed = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <PageTitle title="Attendance Already Confirmed" />
      <div className="bg-white mx-1 p-3 w-[380px] md:w-[400px]">
        <div className="bg-orange-200 text-orange-800 px-3 py-10 rounded-md flex-col justify-center items-center">
          <div className="flex justify-center">
            <div className="border-2 rounded-full border-orange-500 mb-3">
              <BiCheckDouble className="text-5xl" />
            </div>
          </div>
          <h1 className="text-xl">Attendance Already Marked</h1>
        </div>
      </div>
    </div>
  );
};

export default QrcodeAreadyConfirmed;

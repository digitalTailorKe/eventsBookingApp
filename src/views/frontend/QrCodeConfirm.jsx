import React, { useEffect } from "react";
import { BiCheckDouble } from "react-icons/bi";
import PageTitle from "../../components/PageTitle";

const QrCodeConfirm = () => {
  useEffect(() => {
    const beepSound = new Audio("beep.mp3");
    beepSound.play();
  }, []);

  return (
    <div className="h-screen flex justify-center items-center">
      <PageTitle title="Attendance Confirmed" />
      <div className="bg-white mx-1 p-3 w-[380px] md:w-[400px]">
        <div className="bg-green-200 text-green-800 px-3 py-10 rounded-md flex-col justify-center items-center">
          <div className="flex justify-center">
            <div className="border-2 rounded-full border-green-500 mb-3">
              <BiCheckDouble className="text-5xl" />
            </div>
          </div>
          <h1 className="text-xl">Attendance Confirmed successfully</h1>
        </div>
      </div>
    </div>
  );
};

export default QrCodeConfirm;

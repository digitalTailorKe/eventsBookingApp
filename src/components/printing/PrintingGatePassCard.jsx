import React from "react";
import QRCodeGatePass from "../utils/QRCodeGatePass";

const PrintingGatePassCard = ({
  id,
  name,
  position,
  company,
  serial,
  phone,
  email,
  address,
  notes,
}) => {
  function limitWords(text, limit) {
    // Remove leading/trailing whitespace and split into words
    const words = text.trim().split(" ");

    // Extract the desired number of words and join them back into a string
    const limitedText = words.slice(0, limit).join(" ");

    return limitedText;
  }

  return (
    <div className="card w-[110mm] h-[157mm] border flex-col justify-center items-center bg-pattern bg-contain rounded pt-3 mb-2">
      <div className="relative">
        <img
          className="text-center"
          style={{ width: "120px", textAlign: "center", margin: "0 auto" }}
          src="/imgs/logo.png"
          alt=""
        />

        <div className="absolute top-4 right-14">
          <h4 className="text-gray-800 font-bold text-center text-[18px] mt-1 font-mono bg-white px-1">
            {serial}
          </h4>
        </div>
      </div>

      <div className="bg-[#128e12]">
        <h2 className="text-xl text-center font-semibold text-slate-100 mb-2 py-1 uppercase">
          Indo East Africa Trade <br className="m-0" /> Expo 2023
        </h2>
      </div>

      <h4 className="text-gray-800 font-bold text-center">
        Promoting Business With India
      </h4>

      <div className="mt-3">
        <h4 className="text-[#fe3b00] font-bold text-center uppercase">
          Organized in kenya by <br /> Rajasthan Association of Kenya
        </h4>
      </div>

      <div className="mt-5">
        <h4 className="text-gray-800 font-[600] tracking-tight text-center uppercase text-xl leading-tight tracking-wide">
          {name}
        </h4>
        <p className="text-center text-gray-500 text-[16px] capitalize leading-tight tracking-wider">
          {limitWords(position, 10)}
        </p>
        <div className="flex justify-center my-2">
          <div className="w-[60px] bg-[#fe3b00] h-[2px]"></div>
        </div>
        <p className="text-center text-gray-800 text-[18px] tracking-tight uppercase leading-tight">
          {company}
        </p>
      </div>

      <div className="flex justify-center mt-2">
        <div className="bg-white p-1">
          <QRCodeGatePass id={id} name={name} />
        </div>
      </div>

      <div className="bg-[#fe3b00] mt-2 py-2">
        <h4 className="text-slate-100 font-[300] text-center text-[18px]">
          Scan the <b className="font-bold">QR Code</b> for gate pass
        </h4>
      </div>
    </div>
  );
};

export default PrintingGatePassCard;

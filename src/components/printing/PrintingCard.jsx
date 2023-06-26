import React from "react";
import QRCode from "qrcode.react";
import QRCodeComponent from "../utils/QRCodeComponent";

const PrintingCard = ({ id, name, position, company, serial, phone }) => {
  return (
    <div className="card w-[110mm] h-[157mm] border flex-col justify-center items-center bg-[#e4f2e6] rounded pt-3 mb-2">
      <div className="">
        <img
          className="text-center"
          style={{ width: "100px", textAlign: "center", margin: "0 auto" }}
          src="/imgs/logo.png"
          alt=""
        />
      </div>

      <div className="bg-[#128e12]">
        <h2 className="text-xl text-center font-semibold text-slate-100 mb-3 py-1 uppercase">
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
        <h4 className="text-gray-800 font-[500] text-center uppercase text-xl leading-tight tracking-wide">
          {name}
        </h4>
        <p className="text-center text-gray-400 text-[18px] capitalize leading-tight tracking-wider">
          {position}
        </p>
        <div className="flex justify-center my-2">
          <div className="w-[100px] bg-[#fe3b00] h-[2px]"></div>
        </div>
        <p className="text-center text-gray-800 text-[20px] capitalize tracking-wider leading-tight">
          {company}
        </p>
      </div>

      <div className="flex justify-center mt-3">
        <div className="bg-white p-2">
          <QRCodeComponent
            id={id}
            name={name}
            position={position}
            company={company}
            phone={phone}
          />
        </div>
      </div>

      <div className="bg-[#fe3b00] mt-3 py-2">
        <h4 className="text-slate-100 font-[300] text-center text-[18px]">
          Scan the <b className="font-bold">QR Code</b> to now me
        </h4>
      </div>

      <h4 className="text-gray-800 font-bold text-center text-[18px] mt-1 font-mono">
        Serial No: {serial}
      </h4>
    </div>
  );
};

export default PrintingCard;

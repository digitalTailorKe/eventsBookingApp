import { useState } from "react";
import { FaEnvelope, FaGlobe, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";      

const PrintingCardBack = () => {
  return (
    <div className="card w-[110mm] h-[157mm] border flex-col justify-center items-center bg-pattern bg-contain rounded pt-3 mb-2">
    <div className="h-full flex justify-center items-center">
        <div className="w-full px-8">
            <h4 className="border-b border-red-500 text-center pb-2 font-[500] text-[18px] tracking-wide leading-tight">Witness the grand show of <br /> Indian businesses</h4>

            <p className="text-center mt-5">The premier trade event connects the vibrant markets of East Africa and the dynamic business landscape of India</p>

            <div className="mt-10">
                <div className="flex space-x-2 items-center justify-center">
                    <FaEnvelope className="text-[#1d941d] text-[20px]" />
                    <p className="">info@indoeastafricaexpo.org</p>
                </div>

                <div className="flex space-x-2 items-center justify-center mt-3">
                    <FaGlobe className="text-[#1d941d] text-[20px]" />
                    <p className="">www.indoeastafricaexpo.org</p>
                </div>

                <div className="mt-8">
                    <div className="flex space-x-2 items-center justify-center">
                        <FaTwitter className="text-[#1d941d] text-[20px]" />
                        <FaInstagram className="text-[#1d941d] text-[20px]" />
                        <FaFacebookF className="text-[#1d941d] text-[20px]" />
                        <FaLinkedinIn className="text-[#1d941d] text-[20px]" />
                    </div>

                    <div className="text-center">
                        <p className="text-gray-800">@indoeastafrica</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default PrintingCardBack
import React, { useState, useEffect } from "react";
import CustomSearchInput from "./CustomSearchInput";
import { BiCheckDouble, BiCheck, BiX } from "react-icons/bi";

const SearchInputArea = () => {
  const [formData, setFormData] = useState({
    search: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="w-full">
      <div className="w-full">
        {/* Search input */}
        <CustomSearchInput
          name="search"
          value={formData.search}
          onChange={handleChange}
          placeholder="Search by Id, Name, Email, Phone Number"
        />
      </div>

      <div className="">
        {/* Search Result */}
        <div className="max-h-[500px] overflow-y-scroll">
          <hr className="" />
          {/* Single Atendy Result */}
          <div className="flex items-center justify-between hover:bg-slate-300 p-3 cursor-pointer">
            {/* Atendee Info */}
            <div className="flex items-center space-x-4 md:mb-1">
              <img
                className="w-10 h-10 md:w-16 md:h-16 rounded-full"
                src="/imgs/profile.png"
                alt="User Profile"
              />
              <div className="text-[16px] md:text-[18px]">
                <p className="text-gray-800 font-semibold">John Doe</p>
                <p className="text-gray-600">john@example.com</p>
              </div>
            </div>

            {/* Attend Button */}
            <div className="">
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Attend <BiCheck className="inline-block" />
              </button>
            </div>
          </div>
          {/* Separator */}
          <hr className="" />

          <div className="flex items-center justify-between hover:bg-slate-300 p-3 cursor-pointer">
            {/* Atendee Info */}
            <div className="flex items-center space-x-4 mb-3 md:mb-1">
              <img
                className="w-10 h-10 md:w-16 md:h-16 rounded-full"
                src="/imgs/profile.png"
                alt="User Profile"
              />
              <div className="text-[16px] md:text-[18px]">
                <p className="text-gray-800 font-semibold">John Doe</p>
                <p className="text-gray-600">john@example.com</p>
              </div>
            </div>

            {/* Attend Button */}
            <div className="">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Attended <BiCheckDouble className="inline-block" />
              </button>
            </div>
          </div>
          <hr className="" />

          <div className="flex items-center justify-between hover:bg-slate-300 p-3 cursor-pointer">
            {/* Atendee Info */}
            <div className="flex items-center space-x-4 mb-3 md:mb-1">
              <img
                className="w-10 h-10 md:w-16 md:h-16 rounded-full"
                src="/imgs/profile.png"
                alt="User Profile"
              />
              <div className="text-[16px] md:text-[18px]">
                <p className="text-gray-800 font-semibold">John Doe</p>
                <p className="text-gray-600">john@example.com</p>
              </div>
            </div>

            {/* Attend Button */}
            <div className="">
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Attend <BiCheck className="inline-block" />
              </button>
            </div>
          </div>
          <hr className="" />

          <div className="flex items-center justify-between hover:bg-slate-300 p-3 cursor-pointer">
            {/* Atendee Info */}
            <div className="flex items-center space-x-4 md:mb-1">
              <img
                className="w-10 h-10 md:w-16 md:h-16 rounded-full"
                src="/imgs/profile.png"
                alt="User Profile"
              />
              <div className="text-[16px] md:text-[18px]">
                <p className="text-gray-800 font-semibold">John Doe</p>
                <p className="text-gray-600">john@example.com</p>
              </div>
            </div>

            {/* Attend Button */}
            <div className="">
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Attend <BiCheck className="inline-block" />
              </button>
            </div>
          </div>
          {/* Separator */}
          <hr className="" />

          <div className="flex items-center justify-between hover:bg-slate-300 p-3 cursor-pointer">
            {/* Atendee Info */}
            <div className="flex items-center space-x-4 mb-3 md:mb-1">
              <img
                className="w-10 h-10 md:w-16 md:h-16 rounded-full"
                src="/imgs/profile.png"
                alt="User Profile"
              />
              <div className="text-[16px] md:text-[18px]">
                <p className="text-gray-800 font-semibold">John Doe</p>
                <p className="text-gray-600">john@example.com</p>
              </div>
            </div>

            {/* Attend Button */}
            <div className="">
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Cancelled <BiX className="inline-block" />
              </button>
            </div>
          </div>
          <hr className="" />

          <div className="flex items-center justify-between hover:bg-slate-300 p-3 cursor-pointer">
            {/* Atendee Info */}
            <div className="flex items-center space-x-4 mb-3 md:mb-1">
              <img
                className="w-10 h-10 md:w-16 md:h-16 rounded-full"
                src="/imgs/profile.png"
                alt="User Profile"
              />
              <div className="text-[16px] md:text-[18px]">
                <p className="text-gray-800 font-semibold">John Doe</p>
                <p className="text-gray-600">john@example.com</p>
              </div>
            </div>

            {/* Attend Button */}
            <div className="">
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Attend <BiCheck className="inline-block" />
              </button>
            </div>
          </div>
          <hr className="" />

          <div className="flex items-center justify-between hover:bg-slate-300 p-3 cursor-pointer">
            {/* Atendee Info */}
            <div className="flex items-center space-x-4 mb-3 md:mb-1">
              <img
                className="w-10 h-10 md:w-16 md:h-16 rounded-full"
                src="/imgs/profile.png"
                alt="User Profile"
              />
              <div className="text-[16px] md:text-[18px]">
                <p className="text-gray-800 font-semibold">John Doe</p>
                <p className="text-gray-600">john@example.com</p>
              </div>
            </div>

            {/* Attend Button */}
            <div className="">
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Attend <BiCheck className="inline-block" />
              </button>
            </div>
          </div>
          <hr className="" />
        </div>
      </div>
    </div>
  );
};

export default SearchInputArea;

import React from "react";
import { BiSearch } from "react-icons/bi";

const CustomSearchInput = ({ name, value, onChange, placeholder }) => {
  return (
    <div className="flex flex-row w-full items-center gap-1 ml-2">
      <input
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="focus:none flex-1 rounded-lg border-none py-2 mb-2 md:mb-0 px-3 text-[16px] font-[300] text-[#153148] focus:outline-none md:py-4 md:text-[18px]"
        placeholder={placeholder}
        autoComplete="off"
      />
      <BiSearch className="text-gray-400 cursor-pointer text-[21px] font-[300] md:text-[31px] mr-4" />
    </div>
  );
};

export default CustomSearchInput;

import React from "react";
import { BiSearch } from "react-icons/bi";

const CustomSearchInput = ({ name, value, onChange, placeholder }) => {
  return (
    <div className="flex w-full items-center gap-4 mt-5 mb-3 md:mt-0">
      <input
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="focus:none flex-1 rounded-lg border-none py-1 px-3 text-[18px] font-[300] text-[#153148] focus:outline-none md:py-4 md:text-[21px]"
        placeholder={placeholder}
        autoComplete="off"
      />
      <BiSearch className="cursor-pointer text-[21px] font-[300] md:text-[31px]" />
    </div>
  );
};

export default CustomSearchInput;

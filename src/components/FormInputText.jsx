import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const FormInputText = ({ label, name, value, onChange, error }) => {
  return (
    <div className="flex flex-col gap-2 mb-3 w-full">
      <label
        htmlFor={name}
        className="text-[#153148] text-[14px] font-[700] dark:text-slate-100"
      >
        {label}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="bg-[#dbe8f4] border-none rounded-lg py-3 md:py-4 px-3 text-[#153148] dark:text-[#431b7e] focus:outline-none focus:ring-2 focus:ring-[#153148] dark:focus:ring-[#431b7e]"
      />
      {error && (
        <p className="text-red-500 flex gap-2 items-center border border-red-500 border-dashed py-1 px-2 rounded-lg">
          <FaExclamationTriangle />
          {error}
        </p>
      )}
    </div>
  );
};

export default FormInputText;

import React from "react";

const CheckboxInput = ({ label, name, checked, onChange, error }) => {
  return (
    <div className="col-span-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          name={name}
          id={name}
          checked
          onChange={onChange}
          className="hidden"
        />
        <label
          htmlFor={name}
          className="flex items-center cursor-pointer text-[#153148] text-[14px] font-[700] dark:text-slate-100"
        >
          <div className="checkbox">
            {checked && <span className="checkmark">&#x2713;</span>}
          </div>
          <span>{label}</span>
        </label>
        {error && (
          <p className="text-red-500 flex gap-2 items-center border border-red-500 border-dashed py-1 px-2 rounded-lg">
            <FaExclamationTriangle />
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default CheckboxInput;

import React from "react";

const RegistrationForm = () => {
  return (
    <form action="" method="post">
      <div className="md:flex md:gap-4">
        {/* First Name Input */}
        <div className="flex flex-col gap-2 mb-3 w-full">
          <label
            htmlFor="firstName"
            className="text-[#153148] text-[14px] font-[400] dark:text-slate-100"
          >
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="bg-[#dbe8f4] border-none rounded-lg py-4 px-3 text-[#153148] dark:text-[#431b7e] focus:outline-none focus:ring-2 focus:ring-[#153148] dark:focus:ring-[#431b7e]"
          />
        </div>

        {/* Last Name Input */}
        <div className="flex flex-col gap-2 mb-3 w-full">
          <label
            htmlFor="lastName"
            className="text-[#153148] text-[14px] font-[400] dark:text-slate-100"
          >
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="bg-[#dbe8f4] border-none rounded-lg py-4 px-3 text-[#153148] dark:text-[#431b7e] focus:outline-none focus:ring-2 focus:ring-[#153148] dark:focus:ring-[#431b7e]"
          />
        </div>
      </div>

      <div className="md:flex md:gap-4">
        {/* Phone Number Input */}
        <div className="flex flex-col gap-2 mb-3 w-full">
          <label
            htmlFor="phoneNumber"
            className="text-[#153148] text-[14px] font-[400] dark:text-slate-100"
          >
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            className="bg-[#dbe8f4] border-none rounded-lg py-4 px-3 text-[#153148] dark:text-[#431b7e] focus:outline-none focus:ring-2 focus:ring-[#153148] dark:focus:ring-[#431b7e]"
          />
        </div>

        {/* Email Address Input */}
        <div className="flex flex-col gap-2 mb-3 w-full">
          <label
            htmlFor="emailAddress"
            className="text-[#153148] text-[14px] font-[400] dark:text-slate-100"
          >
            Email Address
          </label>
          <input
            type="email"
            name="emailAddress"
            id="emailAddress"
            className="bg-[#dbe8f4] border-none rounded-lg py-4 px-3 text-[#153148] dark:text-[#431b7e] focus:outline-none focus:ring-2 focus:ring-[#153148] dark:focus:ring-[#431b7e]"
          />
        </div>
      </div>

      <div className="md:flex md:gap-4">
        {/* Bussiness Name */}
        <div className="flex flex-col gap-2 mb-3 w-full">
          <label
            htmlFor="businessName"
            className="text-[#153148] text-[14px] font-[400] dark:text-slate-100"
          >
            Business Name
          </label>
          <input
            type="text"
            name="businessName"
            id="businessName"
            className="bg-[#dbe8f4] border-none rounded-lg py-4 px-3 text-[#153148] dark:text-[#431b7e] focus:outline-none focus:ring-2 focus:ring-[#153148] dark:focus:ring-[#431b7e]"
          />
        </div>

        {/* Sector Inputs */}
        <div className="flex flex-col gap-2 mb-3 w-full">
          <label
            htmlFor="selectSector"
            className="text-[#153148] text-[14px] font-[400] dark:text-slate-100"
          >
            Select Sector
          </label>
          <select
            name="selectSector"
            id="selectSector"
            className="bg-[#dbe8f4] border-none rounded-lg py-4 px-3 text-[#153148] dark:text-[#431b7e] focus:outline-none focus:ring-2 focus:ring-[#153148] dark:focus:ring-[#431b7e]"
          >
            <option value="">-- Select Sector --</option>
            <option value="sector1">Sector 1</option>
            <option value="sector2">Sector 2</option>
          </select>
        </div>
      </div>

      <div className="md:flex md:gap-4">
        {/* Address Inputs */}
        <div className="flex flex-col gap-2 mb-3 w-full">
          <label
            htmlFor="address"
            className="text-[#153148] text-[14px] font-[400] dark:text-slate-100"
          >
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="bg-[#dbe8f4] border-none rounded-lg py-4 px-3 text-[#153148] dark:text-[#431b7e] focus:outline-none focus:ring-2 focus:ring-[#153148] dark:focus:ring-[#431b7e]"
          />
        </div>

        {/* Select Interest Input */}
        <div className="flex flex-col gap-2 mb-3 w-full">
          <label
            htmlFor="selectInterest"
            className="text-[#153148] text-[14px] font-[400] dark:text-slate-100"
          >
            Select Interest
          </label>
          <select
            name="selectInterest"
            id="selectInterest"
            className="bg-[#dbe8f4] border-none rounded-lg py-4 px-3 text-[#153148] dark:text-[#431b7e] focus:outline-none focus:ring-2 focus:ring-[#153148] dark:focus:ring-[#431b7e]"
          >
            <option value="">-- Select Interest --</option>
            <option value="interest1">Interest 1</option>
            <option value="interest2">Interest 2</option>
          </select>
        </div>
      </div>

      <div className="md:flex md:gap-4 mb-3">
        {/* Get Notification Input */}
        <div className="col-span-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="getNotified"
              id="getNotified"
              className="mr-2 border-none rounded-lg py-2 px-3 text-[#153148] dark:text-[#431b7e] focus:outline-none focus:ring-2 focus:ring-[#153148] dark:focus:ring-[#431b7e]"
            />
            <label
              htmlFor="getNotified"
              className="text-[#153148] text-[14px] font-[400] dark:text-slate-100"
            >
              Get notified before the event
            </label>
          </div>
        </div>
      </div>

      {/* Registration Button Input */}
      <button className="w-full dark:bg-[#360f70] bg-[#153148] text-slate-200 hover:bg-slate-200 hover:text-[#153148] md:w-[200px] py-3 rounded-xl dark:text-[#a892c9] dark:hover:bg-[#431b7e] dark:hover:text-slate-200">
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;

import React, { useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
    businessName: "",
    selectSector: "",
    address: "",
    selectInterest: "",
    getNotified: "",
    registration_type_id: 1,

    // Add other form fields here
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form input validation
  const validateForm = () => {
    let errors = {};

    // Validate each form field
    if (!formData.firstName) {
      errors.firstName = "Please provide your first name to continue.";
    }

    if (!formData.lastName) {
      errors.lastName = "Please provide your last name to continue.";
    }

    if (!formData.phoneNumber) {
      errors.phoneNumber = "Please provide your phone number to continue.";
    }

    if (!formData.emailAddress) {
      errors.emailAddress = "Please provide your email address to continue.";
    }

    // Set the form errors state
    setFormErrors(errors);

    // Return true if there are no errors
    return Object.keys(errors).length === 0;
  };

  // Submit the attendee registration form data to the server
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, perform form submission logic here
      console.log("Form is valid. Submitting...");

      console.log(formData);

      // Reset form data and errors
      setFormData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        emailAddress: "",
        businessName: "",
        selectSector: "",
        address: "",
        selectInterest: "",
        getNotified: "",
      });

      setFormErrors({});
    } else {
      // Form is invalid, display error messages
      toast.error("Form is invalid. Please fix errors.");
    //   console.log("Form is invalid. Please fix errors.");
    }
  };

  return (
    <form action="" method="post" onSubmit={handleSubmit}>
      <div className="md:flex md:gap-4">
        {/* First Name Input */}
        <div className="flex flex-col gap-2 mb-3 w-full">
          <label
            htmlFor="firstName"
            className="text-[#153148] text-[14px] font-[700] dark:text-slate-100"
          >
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="bg-[#dbe8f4] border-none rounded-lg py-4 px-3 text-[#153148] dark:text-[#431b7e] focus:outline-none focus:ring-2 focus:ring-[#153148] dark:focus:ring-[#431b7e]"
          />
          {formErrors.firstName && (
            <p className="text-red-500 flex gap-2 items-center border border-red-500 border-dashed py-1 px-2 rounded-lg">
              <FaExclamationTriangle />
              {formErrors.firstName}
            </p>
          )}
        </div>

        {/* Last Name Input */}
        <div className="flex flex-col gap-2 mb-3 w-full">
          <label
            htmlFor="lastName"
            className="text-[#153148] text-[14px] font-[700] dark:text-slate-100"
          >
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="bg-[#dbe8f4] border-none rounded-lg py-4 px-3 text-[#153148] dark:text-[#431b7e] focus:outline-none focus:ring-2 focus:ring-[#153148] dark:focus:ring-[#431b7e]"
          />
          {formErrors.lastName && (
            <p className="text-red-500 flex gap-2 items-center border border-red-500 border-dashed py-1 px-2 rounded-lg">
              <FaExclamationTriangle />
              {formErrors.lastName}
            </p>
          )}
        </div>
      </div>

      <div className="md:flex md:gap-4">
        {/* Phone Number Input */}
        <div className="flex flex-col gap-2 mb-3 w-full">
          <label
            htmlFor="phoneNumber"
            className="text-[#153148] text-[14px] font-[700] dark:text-slate-100"
          >
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="bg-[#dbe8f4] border-none rounded-lg py-4 px-3 text-[#153148] dark:text-[#431b7e] focus:outline-none focus:ring-2 focus:ring-[#153148] dark:focus:ring-[#431b7e]"
          />
          {formErrors.phoneNumber && (
            <p className="text-red-500 flex gap-2 items-center border border-red-500 border-dashed py-1 px-2 rounded-lg">
              <FaExclamationTriangle />
              {formErrors.phoneNumber}
            </p>
          )}
        </div>

        {/* Email Address Input */}
        <div className="flex flex-col gap-2 mb-3 w-full">
          <label
            htmlFor="emailAddress"
            className="text-[#153148] text-[14px] font-[700] dark:text-slate-100"
          >
            Email Address
          </label>
          <input
            type="email"
            name="emailAddress"
            id="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            className="bg-[#dbe8f4] border-none rounded-lg py-4 px-3 text-[#153148] dark:text-[#431b7e] focus:outline-none focus:ring-2 focus:ring-[#153148] dark:focus:ring-[#431b7e]"
          />
          {formErrors.emailAddress && (
            <p className="text-red-500 flex gap-2 items-center border border-red-500 border-dashed py-1 px-2 rounded-lg">
              <FaExclamationTriangle />
              {formErrors.emailAddress}
            </p>
          )}
        </div>
      </div>

      <div className="md:flex md:gap-4">
        {/* Bussiness Name */}
        <div className="flex flex-col gap-2 mb-3 w-full">
          <label
            htmlFor="businessName"
            className="text-[#153148] text-[14px] font-[700] dark:text-slate-100"
          >
            Business Name
          </label>
          <input
            type="text"
            name="businessName"
            id="businessName"
            value={formData.businessName}
            onChange={handleChange}
            className="bg-[#dbe8f4] border-none rounded-lg py-4 px-3 text-[#153148] dark:text-[#431b7e] focus:outline-none focus:ring-2 focus:ring-[#153148] dark:focus:ring-[#431b7e]"
          />
          {formErrors.businessName && (
            <p className="text-red-500 flex gap-2 items-center border border-red-500 border-dashed py-1 px-2 rounded-lg">
              <FaExclamationTriangle />
              {formErrors.businessName}
            </p>
          )}
        </div>

        {/* Sector Inputs */}
        <div className="flex flex-col gap-2 mb-3 w-full">
          <label
            htmlFor="selectSector"
            className="text-[#153148] text-[14px] font-[700] dark:text-slate-100"
          >
            Select Sector
          </label>
          <select
            name="selectSector"
            id="selectSector"
            value={formData.selectSector}
            onChange={handleChange}
            className="bg-[#dbe8f4] border-none rounded-lg py-4 px-3 text-[#153148] dark:text-[#431b7e] focus:outline-none focus:ring-2 focus:ring-[#153148] dark:focus:ring-[#431b7e]"
          >
            <option value="">-- Select Sector --</option>
            <option value="sector1">Sector 1</option>
            <option value="sector2">Sector 2</option>
          </select>
          {formErrors.selectSector && (
            <p className="text-red-500 flex gap-2 items-center border border-red-500 border-dashed py-1 px-2 rounded-lg">
              <FaExclamationTriangle />
              {formErrors.selectSector}
            </p>
          )}
        </div>
      </div>

      <div className="md:flex md:gap-4">
        {/* Address Inputs */}
        <div className="flex flex-col gap-2 mb-3 w-full">
          <label
            htmlFor="address"
            className="text-[#153148] text-[14px] font-[700] dark:text-slate-100"
          >
            Address
          </label>
          <input
            value={formData.address}
            onChange={handleChange}
            type="text"
            name="address"
            id="address"
            className="bg-[#dbe8f4] border-none rounded-lg py-4 px-3 text-[#153148] dark:text-[#431b7e] focus:outline-none focus:ring-2 focus:ring-[#153148] dark:focus:ring-[#431b7e]"
          />
          {formErrors.address && (
            <p className="text-red-500 flex gap-2 items-center border border-red-500 border-dashed py-1 px-2 rounded-lg">
              <FaExclamationTriangle />
              {formErrors.address}
            </p>
          )}
        </div>

        {/* Select Interest Input */}
        <div className="flex flex-col gap-2 mb-3 w-full">
          <label
            htmlFor="selectInterest"
            className="text-[#153148] text-[14px] font-[700] dark:text-slate-100"
          >
            Select Interest
          </label>
          <select
            onChange={handleChange}
            value={formData.selectInterest}
            name="selectInterest"
            id="selectInterest"
            className="bg-[#dbe8f4] border-none rounded-lg py-4 px-3 text-[#153148] dark:text-[#431b7e] focus:outline-none focus:ring-2 focus:ring-[#153148] dark:focus:ring-[#431b7e]"
          >
            <option value="">-- Select Interest --</option>
            <option value="interest1">Interest 1</option>
            <option value="interest2">Interest 2</option>
          </select>
          {formErrors.selectInterest && (
            <p className="text-red-500 flex gap-2 items-center border border-red-500 border-dashed py-1 px-2 rounded-lg">
              <FaExclamationTriangle />
              {formErrors.selectInterest}
            </p>
          )}
        </div>
      </div>

      <div className="md:flex md:gap-4 mb-3">
        {/* Get Notification Input */}
        <div className="col-span-2">
          <div className="flex items-center">
            <input
              onChange={handleChange}
              value={formData.getNotified}
              type="checkbox"
              name="getNotified"
              id="getNotified"
              className="hidden"
            />
            <label
              htmlFor="getNotified"
              className="flex items-center cursor-pointer text-[#153148] text-[14px] font-[700] dark:text-slate-100"
            >
              <div className="checkbox"></div>
              <span>Get notified 1 day before the event</span>
            </label>
            {formErrors.getNotified && (
              <p className="text-red-500 flex gap-2 items-center border border-red-500 border-dashed py-1 px-2 rounded-lg">
                <FaExclamationTriangle />
                {formErrors.getNotified}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Registration Button Input */}
      <button className="w-full dark:bg-[#360f70] bg-[#153148] text-slate-200 hover:bg-slate-200 hover:text-[#153148] md:w-[200px] py-3 rounded-xl dark:text-[#a892c9] dark:hover:bg-[#431b7e] dark:hover:text-slate-200">
        Register
      </button>
      <ToastContainer />
    </form>
  );
};

export default RegistrationForm;

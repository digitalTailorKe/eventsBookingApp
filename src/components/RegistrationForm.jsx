import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormInputText from "./FormInputText";
import SelectInput from "./SelectInput";
import axios from "axios";

const RegistrationForm = () => {
  const localEndpoint = "http://127.0.0.1:8000/api/attendees/";
  const getSectorsLocalEndpoint = "http://127.0.0.1:8000/api/sectors/";

  const [sectors, setSectors] = useState([]);

  useEffect(() => {
    axios
      .get(getSectorsLocalEndpoint)
      .then((response) => {
        setSectors(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    business_name: "",
    business_sector_id: "",
    address: "",
    select_interest: "",
    notification: 1,
    registration_type_id: 1,

    // Add other form fields here
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "business_sector_id") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: parseInt(value), // Convert the value to an integer
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Handle form input validation
  const validateForm = () => {
    let errors = {};

    // Validate each form field
    if (!formData.first_name) {
      errors.first_name = "Please provide your first name to continue.";
    }

    if (!formData.last_name) {
      errors.last_name = "Please provide your last name to continue.";
    }

    if (!formData.phone) {
      errors.phone = "Please provide your phone number to continue.";
    }

    if (!formData.email) {
      errors.email = "Please provide your email address to continue.";
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

      const newRequestData = {
        full_name: formData.first_name + " " + formData.last_name,
        phone: formData.phone,
        email: formData.email,
        business_name: formData.business_name,
        business_sector_id: formData.business_sector_id,
        address: formData.address,
        select_interest: formData.select_interest,
        notification: formData.notification,
        registration_type_id: formData.registration_type_id,
      };

      // Send data to the server.
      axios
        .post(localEndpoint, newRequestData)
        .then(() => {
          clearFormFields();
          toast.success(
            "Registration was successful check your email for link to your event resipt."
          );
        })
        .catch((error) => {
          console.log(error);
          toast.error(
            "Something went wrong while trying to register for event. Please try again."
          );
        });
    } else {
      // Form is invalid, display error messages
      toast.error("Form is invalid. Please fix errors.");
      //   console.log("Form is invalid. Please fix errors.");
    }
  };

  const clearFormFields = () => {
    // Reset form data and errors
    setFormData({
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      business_name: "",
      business_sector_id: "",
      address: "",
      select_interest: "",
      notification: "",
      registration_type_id: 1,
    });
    setFormErrors({});
  };

  return (
    <form action="" method="post" onSubmit={handleSubmit}>
      <div className="md:flex md:gap-4">
        {/* First Name Input */}
        <FormInputText
          label="First Name"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          error={formErrors.first_name}
        />

        {/* Last Name Input */}
        <FormInputText
          label="Last Name"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          error={formErrors.last_name}
        />
      </div>

      <div className="md:flex md:gap-4">
        {/* Phone Number Input */}
        <FormInputText
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          error={formErrors.phone}
        />

        {/* Email Address Input */}
        <FormInputText
          label="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={formErrors.email}
        />

        {/* Bussiness Name */}
        <FormInputText
          label="Business Name (Optional)"
          name="business_name"
          value={formData.business_name}
          onChange={handleChange}
          error={formErrors.business_name}
        />
      </div>

      <div className="md:flex md:gap-4">
        {/* Sector Inputs */}
        <SelectInput
          label="Sector"
          name="business_sector_id"
          value={formData.business_sector_id}
          onChange={handleChange}
          options={sectors.map((sector) => ({
            value: sector.id,
            label: sector.name,
          }))}
          error={formErrors.business_sector_id}
        />
      </div>

      <div className="md:flex md:gap-4">
        {/* Address Inputs */}
        <FormInputText
          label="Address (Optional)"
          name="address"
          value={formData.address}
          onChange={handleChange}
          error={formErrors.address}
        />

        {/* Select Interest Input */}
        <SelectInput
          label="Select Interest"
          name="select_interest"
          onChange={handleChange}
          value={formData.select_interest}
          options={sectors.map((sector) => ({
            value: sector.id,
            label: sector.name,
          }))}
          error={formErrors.select_interest}
        />
      </div>

      <div className="md:flex md:gap-4 mb-3">
        {/* Get Notification Input */}
        <div className="col-span-2">
          <div className="flex items-center">
            <input
              onChange={handleChange}
              value={formData.notification}
              type="checkbox"
              name="notification"
              id="notification"
              className="hidden"
              checked
            />
            <label
              htmlFor="notification"
              className="flex items-center cursor-pointer text-[#153148] text-[14px] font-[700] dark:text-slate-100"
            >
              <div className="checkbox"></div>
              <span>Get notified before the event</span>
            </label>
            {formErrors.notification && (
              <p className="text-red-500 flex gap-2 items-center border border-red-500 border-dashed py-1 px-2 rounded-lg">
                <FaExclamationTriangle />
                {formErrors.notification}
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

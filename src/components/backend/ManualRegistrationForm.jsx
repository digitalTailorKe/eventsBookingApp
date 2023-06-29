import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormInputText from "../FormInputText";
import TelephoneInput from "../TelephoneInput";
import Select from "react-select";
import { BiCheckDouble, BiXCircle } from "react-icons/bi";
import { FaExclamationTriangle } from "react-icons/fa";
import "react-phone-input-2/lib/style.css";
import axiosClient from "../../axiosClient";
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import ValidationErrorsBox from "../ValidationErrorsBox";

const ManualRegistrationForm = () => {
  const [sectors, setSectors] = useState([]);
  const [nationality, setNationality] = useState([]);
  const [selectedNationality, setSelectedNationality] = useState(null);
  const [selectedInterest, setSelectedInterest] = useState(null);
  const [countryCode, setCountryCode] = useState([]);
  const [nationalityCodes, setNationalityCodes] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState(null);
  const sortedSectors = sectors.sort((a, b) => a.name.localeCompare(b.name));
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedSectors, setSelectedSectors] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Sets the selected country code to state
  const handleSelectChange = (selectedOption) => {
    setSelectedNationality(selectedOption);
  };

  // Sets interests in state and updates the sate
  const handleInterestChange = (selectedOptions) => {
    const selectedIds = selectedOptions.map((option) => option.value);
    setSelectedInterest(selectedOptions);
    setFormData((prevData) => ({
      ...prevData,
      interest: selectedIds,
    }));
  };

  // Sets sectors in state and updates the sate
  const handleSectorsChange = (selectedOptions) => {
    const selectedIds = selectedOptions.map((option) => option.value);
    setSelectedSectors(selectedOptions);
    setFormData((prevData) => ({
      ...prevData,
      sectors: selectedIds,
    }));
  };

  // Sets the selected country code and updates the state.
  const handleCountryCodeChange = (selectedOption) => {
    setSelectedCountryCode(selectedOption);
    setFormData((prevData) => ({
      ...prevData,
      country_code: selectedOption.label,
    }));
  };

  // handles the countries input field and populates the country code field
  const handleSelectCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);

    const code = selectedOption
      ? nationalityCodes.find((item) => item.id === selectedOption.value)
      : null;
    const countryCode = code ? code.code : "";
    setSelectedCountryCode({
      value: `+${countryCode}`,
      label: `+${countryCode}`,
    });
    setCountryCode(countryCode);
    setFormData((prevData) => ({
      ...prevData,
      country_region: selectedOption.value,
      country_code: countryCode,
    }));
  };

  // Get data from endpoints.
  useEffect(() => {
    axiosClient
      .get(`/sectors`)
      .then((response) => {
        setSectors(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axiosClient
      .get(`/countries`)
      .then((response) => {
        setNationality(response.data.data);
        setNationalityCodes(
          response.data.data.map((item) => ({
            id: item.id,
            code: `${item.phonecode}`,
          }))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Get user from local storage
  const user = JSON.parse(localStorage.getItem("user"));

  // Initialize the form data inputs
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    nationality: "",
    job_title: "",
    country_region: "",
    business_name: "",
    sectors: "",
    national_id: "",
    business_address: "",
    interest: "",
    notification: 1,
    registration_type_id: 2,
    country_code: "",
    created_by: user.user_id,
  });

  // Handle state change for the form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "sectors") {
      setFormData((prevData) => ({
        ...prevData,
        sectors: value,
      }));
    } else if (name === "nationality") {
      setFormData((prevData) => ({
        ...prevData,
        nationality: value,
      }));
    } else if (name === "select_interest") {
      const selectedOptions = value.map((option) => option.value);
      setFormData((prevData) => ({
        ...prevData,
        interest: selectedOptions,
      }));
    } else if (name === "notification") {
      setFormData((prevData) => ({
        ...prevData,
        notification: parseInt(value),
      }));
    } else if (name === "region_id") {
      setFormData((prevData) => ({
        ...prevData,
        region_id: parseInt(value),
      }));
    } else if (name === "phone") {
      setFormData((prevData) => ({
        ...prevData,
        phone: value,
      }));
    } else if (name === "email") {
      setFormData((prevData) => ({
        ...prevData,
        email: value,
      }));
    } else if (name === "national_id") {
      setFormData((prevData) => ({
        ...prevData,
        national_id: value,
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
      errors.first_name = "Please provide your first name.";
    }

    if (!formData.last_name) {
      errors.last_name = "Please provide your last name.";
    }

    if (selectedNationality == null || selectedNationality == "") {
      errors.nationality = "Please provide your nationality.";
    }

    if (selectedCountry == null || selectedCountry == "") {
      errors.country_region = "Please provide your country or region.";
    }

    if (!formData.sectors) {
      errors.sectors = "Please select your stations.";
    }

    if (!formData.interest) {
      errors.interest = "Please select your interest.";
    }

    if (!formData.phone) {
      errors.phone = "Please provide your phone number.";
    }

    if (!formData.email) {
      errors.email = "Please provide your email address.";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Please provide a valid email address.";
    }

    if (!formData.national_id) {
      errors.national_id = "Please provide your national ID.";
    }

    if (!formData.business_name) {
      errors.business_name = "Please provide your business name.";
    }

    if (!formData.job_title) {
      errors.job_title = "Please provide your job title.";
    }

    if (!formData.business_address) {
      errors.business_address = "Please provide your business address.";
    }
    // Set the form errors state
    setFormErrors(errors);

    // Return true if there are no errors
    return Object.keys(errors).length === 0;
  };

  // Function to validate email format
  const isValidEmail = (email) => {
    // Basic email format validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Submit the attendee registration form data to the server
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);
      if (countryCode === "" && typeof countryCode === "object") {
        toast.error("Please provide your country code.");
        return;
      }

      // Form is valid, perform form submission logic here
      console.log("Form is valid. Submitting...");

      // Initializing new form data details
      const newRequestData = {
        full_name: formData.first_name + " " + formData.last_name,
        phone: selectedCountryCode.value + "-" + formData.phone,
        email: formData.email,
        id_number: formData.national_id,
        job_title: formData.job_title,
        business_name: formData.business_name,
        address: formData.business_address,
        notification: formData.notification,
        region_id: selectedCountry.value,
        nationality_id: selectedNationality.value,
        business_sector_ids: formData.sectors,
        registration_type_id: formData.registration_type_id,
        sectors: formData.interest,
        country_code: selectedCountry.value,
        created_by: formData.created_by,
      };

    //   console.log(newRequestData);

      axiosClient
        .post("/attendees", newRequestData)
        .then(() => {
          setLoading(false);
          clearFormFields();
          toast.success("Congratulations! your registration was successful.");
          navigate("/success-page");
        })
        .catch((error) => {
          setLoading(false);
          const data = error.response.data.errors;
          setValidationErrors(data);
        });
    } else {
      setLoading(false);
      // Form is invalid, display error messages
      setValidationErrors({ error: "Please fill in all the required fields" });
    }
  };

  // Clear form fields
  const clearFormFields = () => {
    // Reset form data and errors
    setFormData({
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      nationality: "",
      job_title: "",
      country_region: "",
      business_name: "",
      sectors: "",
      national_id: "",
      business_address: "",
      select_interest: "",
      notification: 1,
      registration_type_id: 1,
      country_code: "",
    });
    setFormErrors({});
  };

  return (
    <form action="" method="post" onSubmit={handleSubmit}>
      {/* First Name & Last Name */}
      <div className="md:flex md:gap-4">
        {/* First Name Input */}
        <FormInputText
          required={true}
          label="First Name"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          error={formErrors.first_name}
          placeholder="Provide your first name"
        />

        {/* Last Name Input */}
        <FormInputText
          required={true}
          label="Last Name"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          error={formErrors.last_name}
          placeholder="Provide your last name"
        />
      </div>

      {/* ID/Passport & Nationality */}
      <div className="md:flex md:gap-4 w-full">
        <div className="md:w-1/2">
          {/* National Id Input */}
          <FormInputText
            required={true}
            label="ID/Passport No."
            name="national_id"
            value={formData.national_id}
            onChange={handleChange}
            error={formErrors.national_id}
            placeholder="Enter your ID or passport number"
          />
        </div>

        {/* Select Nationality Input */}
        <div className="md:w-1/2 mb-3">
          <label htmlFor="" className="text-[#153148] text-[14px] font-[700]">
            Nationality <span className="text-red-500">*</span>
          </label>
          <div className="m-2"></div>
          <Select
            name="nationality"
            value={selectedNationality}
            onChange={handleSelectChange}
            options={nationality.map((nation) => ({
              value: nation.id,
              label: nation.nicename,
            }))}
            placeholder="Select Nationality or Search..."
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                background: "#dbe8f4",
                color: "#153148",
                padding: "0.5rem 0",
                border: "none",
              }),
            }}
          />
          {formErrors.nationality && (
            <p className="text-red-500 text-[12px] flex gap-2 items-center border border-red-500 border-dashed py-1 px-2 mt-2 rounded-lg">
              <FaExclamationTriangle />
              {formErrors.nationality}
            </p>
          )}
          {selectedNationality && (
            <p>
              Selected option:{" "}
              <span className="text-green-700">
                {selectedNationality.label}{" "}
                <BiCheckDouble style={{ display: "inline-block" }} />
              </span>
            </p>
          )}
        </div>
      </div>

      {/* Country/Region & PhoneNumber */}
      <div className="md:flex md:gap-4 w-full">
        <div className="md:w-1/2">
          <label htmlFor="" className="text-[#153148] text-[14px] font-[700]">
            Country/Region of Business <span className="text-red-500">*</span>
          </label>
          <div className="m-2"></div>
          {/* Country Region Input */}
          <Select
            name="country_region"
            value={selectedCountry}
            onChange={handleSelectCountryChange}
            options={nationality.map((nation) => ({
              value: nation.id,
              label: nation.nicename,
            }))}
            placeholder="Select country or Search..."
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                background: "#dbe8f4",
                color: "#153148",
                padding: "0.5rem 0",
                border: "none",
              }),
            }}
          />
          {formErrors.country_region && (
            <p className="text-red-500 text-[12px] flex gap-2 items-center border border-red-500 border-dashed py-1 px-2 mt-2 rounded-lg">
              <FaExclamationTriangle />
              {formErrors.country_region}
            </p>
          )}
          {selectedCountry && (
            <p>
              Selected option:{" "}
              <span className="text-green-700">
                {selectedCountry.label}{" "}
                <BiCheckDouble style={{ display: "inline-block" }} />
              </span>
            </p>
          )}
        </div>

        {/* Phone Country Code */}
        <div className="md:w-1/2 mb-3">
          <label htmlFor="" className="text-[#153148] text-[14px] font-[700]">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="flex justify-center items-center gap-2">
            <Select
              defaultValue={selectedCountryCode}
              name="country_code"
              value={selectedCountryCode}
              onChange={handleCountryCodeChange}
              options={nationality.map((nation) => ({
                value: nation.phonecode,
                label: `${nation.nicename} +${nation.phonecode}`,
              }))}
              placeholder="codes"
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  background: "#dbe8f4",
                  color: "#153148",
                  width: "150px",
                  padding: "0.6rem 0",
                  border: "none",
                }),
              }}
            />

            <TelephoneInput
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Provide your phone number"
            />
          </div>
          {formErrors.phone && (
            <p className="text-red-500 text-[12px] flex gap-2 items-center border border-red-500 border-dashed py-1 px-2 rounded-lg">
              <FaExclamationTriangle />
              {formErrors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Email Address & Business Name */}
      <div className="md:flex md:gap-4">
        {/* Email Address Input */}
        <FormInputText
          required={true}
          label="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={formErrors.email}
          placeholder="Provide your email address"
        />

        {/* Bussiness Name */}
        <FormInputText
          required={true}
          label="Business Name"
          name="business_name"
          value={formData.business_name}
          onChange={handleChange}
          error={formErrors.business_name}
          placeholder="Provide your business name"
        />
      </div>

      {/* JobTitle & BusinessAddress */}
      <div className="md:flex md:gap-4">
        <div className="flex-1">
          {/* Job Title Input */}
          <FormInputText
            required={true}
            label="Job Title"
            name="job_title"
            value={formData.job_title}
            onChange={handleChange}
            error={formErrors.job_title}
            placeholder={"Provide your job title"}
          />
        </div>

        {/* Business Address Inputs */}
        <div className="flex-1">
          <FormInputText
            required={true}
            label="Business Address"
            name="business_address"
            value={formData.business_address}
            onChange={handleChange}
            error={formErrors.business_address}
            placeholder="Provide your business address (00-100)"
          />
        </div>
      </div>

      {/* Sectors & Interests */}
      <div className="mb-3">
        {/* Sector Inputs */}
        <label htmlFor="" className="text-[#153148] text-[14px] font-[700]">
          Sectors of your core businesses. (Select multiple){" "}
          <span className="text-red-500">*</span>
        </label>
        <div className="m-2"></div>
        <Select
          isMulti
          name="sectors"
          value={selectedSectors}
          onChange={handleSectorsChange}
          options={sortedSectors.map((sector) => ({
            value: sector.id,
            label: sector.name,
          }))}
          placeholder="Select Sector or search..."
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              background: "#dbe8f4",
              color: "#153148",
              padding: "0.5rem 0",
              border: "none",
            }),
          }}
        />
        {formErrors.sectors && (
          <p className="text-red-500 text-[12px] flex gap-2 items-center border border-red-500 border-dashed py-1 px-2 mt-2 rounded-lg">
            <FaExclamationTriangle />
            {formErrors.sectors}
          </p>
        )}
      </div>

      {/* Select Interest Input */}
      <div className="w-full">
        <label htmlFor="" className="text-[#153148] text-[14px] font-[700]">
          Interested in meetings with the following sectors. (Select multiple){" "}
          <span className="text-red-500">*</span>
        </label>
        <div className="m-2"></div>
        <Select
          isMulti // Add isMulti prop to allow selecting multiple options
          name="select_interest"
          value={selectedInterest}
          onChange={handleInterestChange}
          options={sortedSectors.map((interest) => ({
            value: interest.id,
            label: interest.name,
          }))}
          placeholder="Select Your Interests or search..."
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              background: "#dbe8f4",
              color: "#153148",
              padding: "0.5rem 0",
              border: "none",
            }),
          }}
        />
        {formErrors.interest && (
          <p className="text-red-500 text-[12px] flex gap-2 items-center border border-red-500 border-dashed py-1 px-2 mt-2 rounded-lg">
            <FaExclamationTriangle />
            {formErrors.interest}
          </p>
        )}
      </div>

      {/* Get Notification & Submit Button */}
      <div className="md:flex md:gap-4 my-3">
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
            />
            <label
              htmlFor="notification"
              className="flex items-center cursor-pointer text-[#153148] text-[14px] font-[700]"
            >
              <div className="checkbox"></div>
              <span>Get invited to seminars specific to sectors above.</span>
            </label>
            {formErrors.getNotified && (
              <p className="text-red-500 text-[12px] flex gap-2 items-center border border-red-500 border-dashed py-1 px-2 rounded-lg">
                <FaExclamationTriangle />
                {formErrors.getNotified}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Validation Errors Box */}
      <ValidationErrorsBox
        validationErrors={validationErrors}
        setValidationErrors={setValidationErrors}
      />

      {/* Registration Button Input */}
      <div className="md:flex md:justify-center w-[100%] mx-auto">
        <button
          disabled={loading}
          className="bg-[#f04223] text-slate-200 uppercase hover:bg-green-600 hover:text-[#fff] w-full py-3 rounded-md font-[700]"
        >
          {loading ? "Submitting..." : "Register Now"}
        </button>
      </div>
      <ToastContainer />
    </form>
  );
};

export default ManualRegistrationForm;

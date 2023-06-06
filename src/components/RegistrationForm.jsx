import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormInputText from "./FormInputText";
import TelephoneInput from "./TelephoneInput";
import SelectInput from "./SelectInput";
import axios from "axios";
import Select from "react-select";
import { BiCheckDouble } from "react-icons/bi";
import { FaExclamationTriangle } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { isValidPhoneNumber } from "react-phone-input-2";

const RegistrationForm = ({ onRegistrationSuccess }) => {
  const storeAtendeeLocalEndpoint =
    "https://admin.indoeastafricaexpo.org/api/attendees";
  const getSectorsLocalEndpoint =
    "https://admin.indoeastafricaexpo.org/api/sectors";
  const getNationalities = "https://admin.indoeastafricaexpo.org/api/countries";

  // Local Endpoints
  // const storeAtendeeLocalEndpoint = "http://127.0.0.1:8000/api/attendees";

  const [sectors, setSectors] = useState([]);
  const [nationality, setNationality] = useState([]);
  const [selectedNationality, setSelectedNationality] = useState(null);
  const [selectedSector, setSelectedSectors] = useState(null);
  const [selectedInterest, setSelectedInterest] = useState(null);
  const [countryCode, setCountryCode] = useState([]);
  const [nationalityCodes, setNationalityCodes] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState(null);
  const sortedSectors = sectors.sort((a, b) => a.name.localeCompare(b.name));
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [validationerror, setValidationError] = useState([]);

  const handleSelectChange = (selectedOption) => {
    setSelectedNationality(selectedOption);

    const code = selectedOption
      ? nationalityCodes.find((item) => item.id === selectedOption.value)
      : null;
    const countryCode = code ? code.code : "";
    setCountryCode([
      { value: selectedOption.value, label: `(+${countryCode})` },
    ]);
    setSelectedCountryCode(countryCode);
  };

  const handleSectorChange = (selectedOption) => {
    setSelectedSectors(selectedOption);
  };

  const handleInterestChange = (selectedOptions) => {
    const selectedIds = selectedOptions.map((option) => option.value);
    setSelectedInterest(selectedOptions);
    setFormData((prevData) => ({
      ...prevData,
      interest: selectedIds,
    }));
  };

  const handleCountryCodeChange = (selectedOption) => {
    setSelectedCountryCode(selectedOption);
    setFormData((prevData) => ({
      ...prevData,
      country_code: selectedOption.value,
    }));
  };

  const handleSelectCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setFormData((prevData) => ({
      ...prevData,
      country_region: selectedOption.value,
    }));
  };

  const handlePhoneChange = (value) => {
    setPhoneNumber(value);
  };

  useEffect(() => {
    axios
      .get(getSectorsLocalEndpoint)
      .then((response) => {
        setSectors(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(getNationalities)
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

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    nationality: "",
    job_title: "",
    country_region: "",
    business_name: "",
    business_sector_id: "",
    national_id: "",
    region_id: "",
    interest: "",
    notification: 1,
    registration_type_id: 1,
    country_code: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e, valued) => {
    if (valued) {
      console.log(valued);
    } else {
      const { name, value } = e.target;

      if (name === "sectors") {
        setFormData((prevData) => ({
          ...prevData,
          business_sector_id: value,
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
      } else if (valued) {
        // setFormData((prevErrors) => ({
        //   ...prevErrors,
        //   phone: isValidPhoneNumber(value)
        //     ? ""
        //     : "Please provide a valid phone number.",
        // }));
        // setFormData((prevData) => ({
        //   ...prevData,
        //   phone: value,
        // }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
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

    if (!formData.phone) {
      errors.phone = "Please provide your phone number.";
    }

    if (!formData.email) {
      errors.email = "Please provide your email address.";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Please provide a valid email address.";
    }

    if (!formData.country_code) {
      errors.country_code = "Please provide your country code.";
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

    if (!formData.region_id) {
      errors.region_id = "Please provide your business address.";
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
      // Form is valid, perform form submission logic here
      if (!isValidPhoneNumber(formData.phone)) {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          phone: "Please provide a valid phone number.",
        }));
        toast.error(
          "Form is invalid. Please enter required field values and try again."
        );
        return;
      }
      // Form is valid, perform form submission logic here
      console.log("Form is valid. Submitting...");

      // Initializing new form data details
      const newRequestData = {
        full_name: formData.first_name + " " + formData.last_name,
        phone: formData.phone,
        email: formData.email,
        business_name: formData.business_name,
        business_sector_id: selectedSector.value,
        region_id: formData.region_id,
        notification: formData.notification,
        registration_type_id: formData.registration_type_id,
        nationality_id: selectedNationality.value,
        id_number: formData.national_id,
        job_title: formData.job_title,
        sectors: formData.interest,
        country_code: selectedCountry.value,
      };

      console.log(newRequestData);

      // Send data to the server.
      axios
        .post(storeAtendeeLocalEndpoint, newRequestData)
        .then(() => {
          clearFormFields();
          toast.success("Congratulations! your registration was successful.");
          onRegistrationSuccess();
        })
        .catch((error) => {
          const data = error.response.data.errors;

          if (data) {
            for (const key in data) {
              if (Array.isArray(data[key])) {
                const values = data[key].filter(
                  (value) => typeof value === "string"
                );
                if (values.length > 0) {
                  toast.error(`${values.join(", ")}`);
                  setValidationError(values.join(", "));
                }
              }
            }
          } else {
            toast.error(
              "Something went wrong while trying to register for event. Please try again."
            );
          }
        });
    } else {
      // Form is invalid, display error messages
      toast.error(
        "Form is invalid. Please enter required field values and try again."
      );
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
      nationality: "",
      job_title: "",
      country_region: "",
      business_name: "",
      business_sector_id: "",
      national_id: "",
      region_id: "",
      select_interest: "",
      notification: 1,
      registration_type_id: 1,
      country_code: "",
    });
    setFormErrors({});
  };

  return (
    <form action="" method="post" onSubmit={handleSubmit}>
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

      <div className="md:flex md:gap-4 w-full">
        <div className="md:w-1/2">
          <label htmlFor="" className="text-[#153148] text-[14px] font-[700]">
            Country/Region <span className="text-red-500">*</span>
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
          {/* <label htmlFor="" className="text-[#153148] text-[14px] font-[700]">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="flex justify-center items-center gap-2">
            <Select
              defaultValue={selectedCountryCode} // Set the default value here
              name="country_code"
              value={selectedCountryCode}
              onChange={handleCountryCodeChange}
              options={nationality.map((nation) => ({
                value: nation.id,
                label: `(+${nation.phonecode})`,
              }))}
              placeholder="codes"
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  background: "#dbe8f4",
                  color: "#153148",
                  width: "120px",
                  padding: "0.5rem 0",
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
            <p className="text-red-500 flex gap-2 items-center border border-red-500 border-dashed py-1 px-2 rounded-lg">
              <FaExclamationTriangle />
              {formErrors.phone}
            </p>
          )} */}
          <label htmlFor="" className="text-[#153148] text-[14px] font-[700]">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="m-2"></div>
          <PhoneInput
            country={"ke"}
            value={phoneNumber}
            onChange={handlePhoneChange}
          />
          Phone Number:{" "}
          <span className="text-green-700">
            {phoneNumber}
            <BiCheckDouble style={{ display: "inline-block" }} />
          </span>
          {formErrors.phone && (
            <p className="text-red-500 flex gap-2 items-center border border-red-500 border-dashed py-1 px-2 rounded-lg">
              <FaExclamationTriangle />
              {formErrors.phone}
            </p>
          )}
        </div>
      </div>

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
            name="region_id"
            value={formData.region_id}
            onChange={handleChange}
            error={formErrors.region_id}
            placeholder="Provide your business address (00-100)"
          />
          {formErrors.region_id && (
            <p className="text-red-500 flex gap-2 items-center border border-red-500 border-dashed py-1 px-2 rounded-lg">
              <FaExclamationTriangle />
              {formErrors.region_id}
            </p>
          )}
        </div>
      </div>

      <div className="mb-3">
        {/* Sector Inputs */}
        <label htmlFor="" className="text-[#153148] text-[14px] font-[700]">
          Sector <span className="text-red-500">*</span>
        </label>
        <div className="m-2"></div>
        <Select
          name="sectors"
          value={selectedSector}
          onChange={handleSectorChange}
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
        {selectedSector && (
          <p>
            Selected option:{" "}
            <span className="text-green-700">
              {selectedSector.label}{" "}
              <BiCheckDouble style={{ display: "inline-block" }} />
            </span>
          </p>
        )}
      </div>

      {/* Select Interest Input */}
      <label htmlFor="" className="text-[#153148] text-[14px] font-[700]">
        Select Interest <span className="text-red-500">*</span>
      </label>
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
              <span>Get invite for the above B2B Seminar.</span>
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

      <div className="text-red-600 flex flex-col justify-center items-center">
        {validationerror}
      </div>

      {/* Registration Button Input */}
      <div className="md:flex md:justify-center w-[100%] mx-auto">
        <button className="bg-[#f04223] text-slate-200 uppercase hover:bg-slate-200 hover:text-[#153148] w-full py-3 rounded-xl">
          Register Now
        </button>
      </div>
      <ToastContainer />
    </form>
  );
};

export default RegistrationForm;

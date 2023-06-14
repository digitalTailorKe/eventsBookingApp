import FormInputText from "../FormInputText";
import { useState } from "react";

const EditUsersProfile = () => {
  const [formErrors, setFormErrors] = useState({});
  // Initialize the form data inputs
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "first_name") {
      setFormData((prevData) => ({
        ...prevData,
        first_name: value,
      }));
    } else if (name === "last_name") {
      setFormData((prevData) => ({
        ...prevData,
        last_name: value,
      }));
    } else if (name === "email") {
      setFormData((prevData) => ({
        ...prevData,
        email: value,
      }));
    } else if (name === "phone_number") {
      setFormData((prevData) => ({
        ...prevData,
        phone_number: value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleUserProfileUpdate = () => {
    // Update user profile
    // Redirect to user profile page
  };

  return (
    <div>
      <form onSubmit={handleUserProfileUpdate}>
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

        {/* Email Input */}
        <FormInputText
          required={true}
          label="Email Address"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={formErrors.email}
          placeholder="Provide your email address"
        />

        {/* Phone Number Input */}
        <FormInputText
          required={true}
          label="Phone Number"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          error={formErrors.phone_number}
          placeholder="Enter confirm password."
        />

        <div className="">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUsersProfile;

import FormInputText from "../FormInputText";
import { useState } from "react";

const ChangePassword = () => {
  const [formErrors, setFormErrors] = useState({});
  // Initialize the form data inputs
  const [formData, setFormData] = useState({
    old_password: "",
    new_password: "",
    conf_password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "old_password") {
      setFormData((prevData) => ({
        ...prevData,
        old_password: value,
      }));
    } else if (name === "new_password") {
      setFormData((prevData) => ({
        ...prevData,
        new_password: value,
      }));
    } else if (name === "conf_password") {
      setFormData((prevData) => ({
        ...prevData,
        conf_password: value,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleUserPasswordChange = () => {
    // Update user profile
    // Redirect to user profile page
  };

  return (
    <div>
      <form onSubmit={handleUserPasswordChange}>
        {/* First Name Input */}
        <FormInputText
          required={true}
          label="Old Password"
          name="old_password"
          value={formData.old_password}
          onChange={handleChange}
          error={formErrors.old_password}
          placeholder="Provide your current password"
        />

        {/* New Password Input */}
        <FormInputText
          required={true}
          label="New Password"
          name="new_password"
          value={formData.new_password}
          onChange={handleChange}
          error={formErrors.new_password}
          placeholder="Provide a new Password"
        />

        {/* Confirm Password Input */}
        <FormInputText
          required={true}
          label="Confirm Password"
          name="conf_password"
          value={formData.conf_password}
          onChange={handleChange}
          error={formErrors.conf_password}
          placeholder="Enter confirm password."
        />

        <div className="">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;

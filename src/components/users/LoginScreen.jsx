import React, { useState } from "react";
import { FormInputText, PasswordInput } from "../../components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginScreen = () => {
  const [formErrors, setFormErrors] = useState([]);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const toastSettings = {
    position: "bottom-center",
    autoClose: 5000,
    theme: "colored",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "username") {
      setFormData((prevData) => ({
        ...prevData,
        username: value,
      }));
    }

    if (name === "password") {
      setFormData((prevData) => ({
        ...prevData,
        password: value,
      }));
    }
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    if (validateErrors()) {
      // if the validation passes
    } else {
      // if the validation fails
      //
    }
  };

  // Run validation function
  const validateErrors = () => {
    let errors = {};

    if (!formData.password) {
      errors.password = "The password field is required.";
      toast.error("The password field is required.", toastSettings);
    }

    if (!formData.username) {
      errors.username = "The username field is required.";
      toast.error("The username field is required.", toastSettings);
    }

    setFormErrors(errors);

    // Returns true is there is no errors
    return Object.keys(errors).length === 0;
  };

  return (
    <div className="">
      <div className="max-w-lg mx-auto bg-white mt-40 shadow-md rounded-md px-4 md:px-8 py-6">
        <h2 className="text-2xl text-center md:text-left font-semibold text-gray-800 mb-6">
          Organizers Account
        </h2>
        <form onSubmit={handleUserSubmit} method="post">
          <div className="mb-6">
            {/* Username Name Input */}
            <FormInputText
              required={true}
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-6">
            {/* Password Input */}
            <PasswordInput
              required={true}
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Access Account
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default LoginScreen;

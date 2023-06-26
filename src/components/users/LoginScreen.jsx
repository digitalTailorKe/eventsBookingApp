import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormInputText, PasswordInput } from "../../components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosClient from "../../axiosClient";
import { useStateContext } from "../../context/ContextProvider";
import { PulseLoader } from "react-spinners";
import { BiXCircle } from "react-icons/bi";

const LoginScreen = () => {
  const [formErrors, setFormErrors] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, setUser, setToken } = useStateContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const toastSettings = {
    position: "bottom-center",
    autoClose: 5000,
    theme: "colored",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setFormData((prevData) => ({
        ...prevData,
        email: value,
      }));
    }

    if (name === "password") {
      setFormData((prevData) => ({
        ...prevData,
        password: value,
      }));
    }
  };

  const handleUserSubmit = async (e) => {
    e.preventDefault();
    if (validateErrors()) {
      // if the validation passes
      try {
        setLoading(true);
        const response = await axiosClient.post("/login", formData);
        const { data } = response;
        setUser(data.user);
        setToken(data.token);
        toast.success(data.message, toastSettings);
        localStorage.setItem("user", JSON.stringify(data.user));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        if (error.response && error.response.status === 422) {
          const { errors } = error.response.data;
          setValidationErrors(errors);
          console.log(errors);
        } else {
          console.log("Error:", error.message);
        }
      }
    } else {
      // if the validation fails
      return;
    }
  };

  // Run validation function
  const validateErrors = () => {
    let errors = {};

    if (!formData.password) {
      errors.password = "The password field is required.";
      // toast.error("The password field is required.", toastSettings);
    }

    if (!formData.email) {
      errors.email = "The email field is required.";
      // toast.error("The email field is required.", toastSettings);
    }

    setFormErrors(errors);
    setValidationErrors(errors);

    // Returns true is there is no errors
    return Object.keys(errors).length === 0;
  };

  return (
    <div className="">
      <div className="max-w-lg mx-auto bg-white mt-40 shadow-md rounded-md px-4 md:px-8 py-6">
        <Link to={"/"}>
          <img
            className="text-center"
            style={{ width: "150px", textAlign: "center", margin: "0 auto" }}
            src="/imgs/logo.png"
            alt=""
          />
        </Link>
        <h2 className="text-2xl text-center font-semibold text-gray-800 mb-6">
          Organizers Account
        </h2>

        <div className="my-3">
          {validationErrors.email && (
            <div className="text-red-500 test-small bg-red-200 px-5 py-2 rounded mb-2 flex justify-between items-center">
              {validationErrors.email}{" "}
              <BiXCircle
                onClick={() =>
                  setValidationErrors({ ...validationErrors, email: "" })
                }
                style={{ cursor: "pointer" }}
              />
            </div>
          )}

          {validationErrors.password && (
            <div className="text-red-500 test-small bg-red-200 px-5 py-2 rounded mb-2 flex justify-between items-center">
              {validationErrors.password}{" "}
              <BiXCircle
                onClick={() =>
                  setValidationErrors({ ...validationErrors, password: "" })
                }
                style={{ cursor: "pointer" }}
              />
            </div>
          )}

          {successMessage && (
            <div className="text-green-500 test-small bg-green-200 px-5 py-2 rounded mb-2 flex justify-between items-center">
              {successMessage}{" "}
              <BiXCircle
                onClick={() => setSuccessMessage("")}
                style={{ cursor: "pointer" }}
              />
            </div>
          )}
        </div>

        <form onSubmit={handleUserSubmit} method="post">
          <div className="mb-6">
            {/* Username Name Input */}
            <FormInputText
              required={true}
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
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
            {loading ? ( // Show loading state only for the clicked button
              <PulseLoader
                color="#fff"
                size={10}
                style={{ display: "inline-block" }}
              />
            ) : (
              "Access Account"
            )}
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default LoginScreen;

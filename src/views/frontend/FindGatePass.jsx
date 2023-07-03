import React, { useState } from "react";
import { PulseLoader } from "react-spinners";
import axios from "axios";
import PageTitle from "../../components/PageTitle";

const FindGatePass = () => {
  const baseUrl = `${import.meta.env.VITE_EVENTS_API_BASE_URL}/api`;
  const [errorMessages, setErrorMessages] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasMessage, setHasMessage] = useState(false);
  const [url, setUrl] = useState("");
  const [formData, setFormData] = useState({
    search: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (validateSearchInput()) {
      try {
        const endpoint = `${baseUrl}/find-gatepass`;
        const response = await axios.get(endpoint, {
          params: {
            query: formData.search,
          },
        }); // Endpoint is open to the public
        const { data } = response;
        if (data.data !== null) {
          setHasMessage(true);
          setSuccessMessage(renderSuccessMessage(formData.search, data));
          // Redirect to the gatepass page with name and id as query params
          const redirectUrl = `https://indoeastafricaexpo.org/gatepass?name=${encodeURIComponent(
            data.data.full_name
          )}&id=${encodeURIComponent(data.data.id)}`;
          // console.log(redirectUrl);
          setUrl(redirectUrl);
        } else {
          setHasMessage(true);
          setErrorMessages([
            `No gatepass found for "${formData.search}". Please try again with a different phone number, email or ID/Passport. Remember to use the same details you used during registration.`,
          ]);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        if (error.response && error.response.status === 422) {
          const { errors } = error.response.data;
          setHasMessage(true);
          setErrorMessages(errors);
        }
      }
    } else {
      setLoading(false);
      return false;
    }
  };

  // Navigate to the gatePass page
  const handleGoToGatePass = () => {
    window.location.href = url;
  };

  // This function render success message when the gatePass is found
  const renderSuccessMessage = (search, data) => {
    return (
      <div className="w-[350px] md:w-[400px] mb-3">
        <div className="text-green-800 bg-green-200 p-3 rounded-md font-[300]">
          <p className="">
            Gatepass found for <b>"{search}"</b>. Details are:
          </p>
          <p className="">
            <span className="font-bold">Name:</span> {data.data.full_name}.
          </p>
          <p className="">
            <span className="font-bold">Email:</span> {data.data.email}.
          </p>
          <p className="">
            <span className="font-bold">Phone:</span> {data.data.phone}.
          </p>
          <p className="">
            <span className="font-bold">ID/Passport:</span>{" "}
            {data.data.id_number}.
          </p>
          <br />
          <p className="">
            If this is you, please proceed to the gatepass page to download your
            gatepass. If this is not you, please try again with a different
            phone number, email or ID/Passport. Remember to use the same details
            you used during registration.
          </p>
        </div>
      </div>
    );
  };

  // Validate the search input
  const validateSearchInput = () => {
    const errors = [];
    if (formData.search.trim() === "") {
      errors.push("Please enter your phone number, email or ID/Passport.");
    }
    setErrorMessages(errors);
    return Object.keys(errors).length === 0;
  };

  const handleRedirect = () => {
    window.location.href = "https://indoeastafricaexpo.org";
  };

  return (
    <div style={styles.container} className="px-1 overflow-auto h-screen pb-10">
      <PageTitle title="Find Gatepass" />
      <div className="mb-3">
        <img src="/imgs/logo.png" alt="logo" className="w-40 mt-32" />
      </div>
      <div className="w-[380px] text-center md:w-[400px]">
        <h4 className="mb-3 text-xl w-full font-bold text-gray-500">
          Enter your phone number, email or ID/Passport you used during
          registration.
        </h4>
      </div>
      <div className="border-2 p-3 md:p-5 rounded-md w-[350px] md:w-[400px] mb-3">
        <form action="" method="post" onSubmit={handleSubmit}>
          <div style={styles.qrCodeContainer} className="">
            <input
              type="text"
              placeholder="Enter email, phone or id"
              className="w-full p-5 rounded"
              name="search"
              value={formData.search}
              onChange={handleChange}
              onInput={() => {
                setHasMessage(false);
                setErrorMessages([]);
                setSuccessMessage("");
              }}
            />
          </div>
          {!successMessage && (
            <div className="">
              <button className="bg-blue-500 text-white p-3 rounded-md w-full uppercase font-bold">
                {loading ? ( // Show loading state only for the clicked button
                  <PulseLoader
                    color="#fff"
                    size={10}
                    style={{ display: "inline-block" }}
                  />
                ) : (
                  "Find Gatepass"
                )}
              </button>
            </div>
          )}
        </form>
      </div>

      {errorMessages && errorMessages.length > 0 && (
        <div className="w-[350px] md:w-[400px] mb-3">
          <div
            className={`text-lg text-red-800 bg-red-200 p-3 rounded-md font-[300]`}
          >
            {errorMessages}
          </div>
          <button
            onClick={handleRedirect}
            className="bg-green-200 text-green-800 w-full rounded font-bold py-2 shadow-md mt-3 uppercase"
          >
            Or Register Now
          </button>
        </div>
      )}

      {successMessage && (
        <div className="w-[350px] md:w-[400px] mb-3">
          {successMessage}
          <button
            onClick={handleGoToGatePass}
            className="bg-orange-200 text-orange-800 w-full rounded py-2 shadow-md"
          >
            View Gate Pass
          </button>
        </div>
      )}

      <div className="w-[350px] md:w-[400px]">
        <div className="text-lg text-gray-800 font-[300]">
          Your gatepass is unique to you. Please do not share it with anyone. If
          you have any issues, please contact us at{" "}
          <a
            href="mailto: contact@indoeastafricaexpo.org"
            className="text-blue-500"
          >
            info@indoeastafricaexpo.org
          </a>
        </div>
      </div>
    </div>
  );
};

export default FindGatePass;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#cbd5e1",
  },
  qrCodeContainer: {
    marginBottom: 20,
  },
};

// public function findGatePass(Request $request)
//     {
//         $searchQuery = $request->input('query');

//         $result = Attendee::where(function ($query) use ($searchQuery) {
//             $query->where('full_name', 'like', "%{$searchQuery}%")
//                 ->orWhere('email', 'like', "%{$searchQuery}%")
//                 ->orWhere('phone', 'like', "%{$searchQuery}%")
//                 ->orWhere('id_number', 'like', "%{$searchQuery}%");
//         })->first();

//         if ($result) {
//             return response()->json(["data" => $result, "message" => "Gatepass Found!"]);
//         } else {
//             return response()->json(["data" => null, "message" => "Please register first to get your Gate Pass or get help from our team at the desk."]);
//         }
//     }

import React, { useState, useEffect } from "react";
import CustomSearchInput from "./CustomSearchInput";
import { MagnifyingGlass } from "react-loader-spinner";
import axiosClient from "../axiosClient";
import { ClipLoader, PulseLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const SearchInputArea = ({ updateTotalAttended }) => {
  const [filteredResults, setFilteredResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [clickedButtonId, setClickedButtonId] = useState(null); // To track which button was clicked
  const [searchText, setSearchText] = useState("");
  const [formData, setFormData] = useState({
    search: "",
  });

  const toastSettings = {
    position: "bottom-center",
    autoClose: 5000,
    theme: "colored",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    value.length > 0 ? setLoading(true) : setLoading(false);
    value.length > 0 ? setSearchText("Searching...") : setSearchText("");
    if (value.length >= 4) {
      performSearch(value);
    } else {
      setFilteredResults([]);
    }
  };

  // Perform search when the user presses the enter key
  const performSearch = (query) => {
    setLoading(true);
    axiosClient
      .get("/searchAttendee", {
        params: {
          query: query,
        },
      })
      .then((response) => {
        setFilteredResults(response.data);
        setLoading(false);
        filteredResults.length === 0 && setSearchText("No results found for:");
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const user = JSON.parse(localStorage.getItem("user"));
  const [confirmed, setConfirmed] = useState(null);

  const handleAttendClick = (data) => {
    setClickedButtonId(data.id);
    const attendeeId = data.id; // Set the clicked button ID

    axiosClient
      .get(`/attendee/mark_attendance/${attendeeId}/${user.user_id}`)
      .then((response) => {
        setClickedButtonId(null);
        toast.success(response.data.message, toastSettings);
        updateTotalAttended();
        setConfirmed(attendeeId);
      })
      .catch((error) => {
        console.error(error);
        setClickedButtonId(null);
      });
  };

  const navigate = useNavigate();

  const handleGoToViewPage = (data) => {
    const fullName = data.full_name;
    return () => {
      // 1. Set the clicked button ID
      const attendeeId = data.id;
      // 2. Get client's data from the server
      axiosClient
        .get(`/attendee/data/${attendeeId}`)
        .then((response) => {
          // 3. Redirect to the view page with the data
          navigate(`/view-attendee-details/${fullName}`, {
            state: { rowData: response.data.data },
          });
        })
        .catch((error) => {
          console.error(error);
        });
    };
  };

  return (
    <div className="w-full">
      <div className="w-full md:pt-3">
        {/* Search input */}
        <CustomSearchInput
          name="search"
          value={formData.search}
          onChange={handleChange}
          placeholder="Search by Id, Name, Email, Phone or ID"
        />
      </div>
      <div className="">
        {/* Search Result */}
        <div className="max-h-[500px] overflow-y-scroll">
          {formData.search.length > 0 && (
            <div>
              <hr className="" />
              {filteredResults?.map((result) => (
                <div key={result.id} className="">
                  <div className="flex items-center justify-between hover:bg-[#e4ecf5] p-1 md:p-2 cursor-pointer md:px-3">
                    {/* Attendee Info */}
                    <div
                      onClick={handleGoToViewPage(result)}
                      className="flex items-center space-x-4 md:mb-1"
                    >
                      <img
                        className="w-10 h-10 md:w-16 md:h-16 rounded-full"
                        src="/imgs/profile.png"
                        alt="User Profile"
                      />
                      <div className="text-[16px] md:text-small">
                        <p className="text-gray-800 font-semibold m-0">
                          {result.full_name}{" "}
                          <span className="ml-2">
                            {result.confirmation && (
                              <span className="bg-green-200 text-green-800 px-3 py-1 rounded-lg shadow-md">
                                {result.confirmation.passkey}
                              </span>
                            )}
                          </span>
                        </p>
                        <p className="text-gray-600 m-0">{result.email}</p>
                        <p className="text-gray-600 m-0">{result.phone}</p>
                      </div>
                    </div>

                    {/* Attend Button */}
                    <div className="">
                      {result.atendee_attendances.length > 0 ? (
                        <button
                          disabled
                          className="bg-green-500 hover:bg-green-700 text-white font-normal md:font-bold py-1 md:py-2 px-2 md:px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                          Attendance Marked
                        </button>
                      ) : (
                        <button
                          onClick={() => handleAttendClick(result)}
                          className={`${
                            confirmed === result.id
                              ? "bg-green-500 hover:bg-green-700"
                              : "bg-yellow-500 hover:bg-yellow-700"
                          }  text-white font-normal md:font-bold py-1 md:py-2 px-2 md:px-4 rounded focus:outline-none focus:shadow-outline`}
                        >
                          {clickedButtonId === result.id ? ( // Show loading state only for the clicked button
                            <PulseLoader
                              color="#fff"
                              size={10}
                              style={{ display: "inline-block" }}
                            />
                          ) : confirmed === result.id ? (
                            "Attendance Marked"
                          ) : (
                            "Attend"
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                  <hr className="" />
                </div>
              ))}
              <div className="">
                {filteredResults.length === 0 && (
                  <div className="w-full flex justify-center items-center p-3 mt-2">
                    <p className="text-gray-600 text-lg">
                      {searchText}{" "}
                      {filteredResults.length === 0 && (
                        <span className="font-bold">"{formData.search}"</span>
                      )}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Spinner */}
      {loading && (
        <div className="w-full flex justify-center items-center">
          <MagnifyingGlass
            visible={true}
            height={100}
            width={100}
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#2463eb"
          />
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default SearchInputArea;

import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BiUserCheck, BiCheckDouble, BiTrash } from "react-icons/bi"; //
import { FaArrowLeft } from "react-icons/fa";
import axiosClient from "../../axiosClient";
import { ToastContainer, toast } from "react-toastify";

const ViewAttendeeDetails = () => {
  const location = useLocation();
  const [data, setData] = useState({});
  const rowData = location.state?.rowData;
  const { fullName } = useParams();

  const toastSettings = {
    position: "bottom-center",
    autoClose: 5000,
    theme: "colored",
  };

  useEffect(() => {
    if (rowData) {
      setData(rowData);
    }
  }, [rowData]);

  // const renderSectors = (sectors) => {
  //   if (!sectors) {
  //     return null;
  //   }
  //   // Split the sectors string by the closing tag to get individual sectors
  //   const sectorArray = sectors.split("</span>");
  //   return sectorArray.map((sector, index) => {
  //     // Remove any leading or trailing white spaces
  //     const trimmedSector = sector.trim();
  //     // Check if the sector is not empty
  //     if (trimmedSector) {
  //       // Append the closing tag to the sector
  //       const sectorWithClosingTag = trimmedSector + "</span>";
  //       return (
  //         <span
  //           key={index}
  //           className="bg-cyan-200 text-[16px] px-5 text-info rounded-full mr-2 mb-2 inline-block text-cyan-600 cursor-default"
  //           dangerouslySetInnerHTML={{ __html: sectorWithClosingTag }}
  //         ></span>
  //       );
  //     }

  //     return null;
  //   });
  // };

  const renderSectors = (sectors) => {
    if (!sectors || sectors.length === 0) {
      return null;
    }

    return sectors.map((sector, index) => {
      const { name } = sector;
      return (
        <span
          key={index}
          className="bg-cyan-200 text-[16px] px-5 text-info rounded-full mr-2 mb-2 inline-block text-cyan-600 cursor-default"
        >
          {name}
        </span>
      );
    });
  };

  function formatDateTime(dateStr) {
    const dateObj = new Date(dateStr);
    // Check if the date is valid
    if (isNaN(dateObj)) {
      return "Invalid Date";
    }
    const options = {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const formattedDateTime = new Intl.DateTimeFormat("en-US", options).format(
      dateObj
    );

    return formattedDateTime;
  }

  const handleGoBack = () => {
    window.history.back();
  };

  const handleMarkAttendance = async () => {
    const { id } = data;
    try {
      const response = await axiosClient.put(`/attendees/${id}`);
      const { data } = response;
      setData(data);
      toast.success("Attendance marked successfully", toastSettings);
    } catch (error) {
      console.log(error);
      toast.error("Error marking attendance", toastSettings);
    }
  }

  const handleCancelAttendance = async () => {
    const { id } = data;
    try {
      const response = await axiosClient.delete(`/attendees/${id}`);
      const { data } = response;
      setData(data);
      toast.success("Attendance cancelled successfully", toastSettings);
    } catch (error) {
      console.log(error);
      toast.error("Error cancelling attendance", toastSettings);
    }
  }

  return (
    <div className="min-h-screen lg:py-8 text-[16px] lg:text-[18px]">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg px-4 md:px-8 lg:px-8 pb-6">
        <h2 className="text-xl lg:text-3xl text-center p-5 lg:p-10 font-semibold mb-6 border-b-4 border-b-blue-500 text-blue-500 flex justify-center items-center">
          <BiUserCheck className="inline-block mr-2 text-[41px]" />
          {fullName}'s Details.
        </h2>

        <div className="container mx-auto p-4">
          <div className="mb-5 text-left">
            <Link
              onClick={handleGoBack}
              className="bg-blue-200 py-2 px-5 text-blue-700 rounded hover:bg-blue-500 hover:text-white font-[700] flex justify-center items-center"
            >
              <FaArrowLeft className="inline-block mr-2" /> Back
            </Link>
          </div>

          {/* Attendees Table */}
          <h1 className="text-2xl font-bold mb-4">Attendee Details</h1>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border p-4 rounded-md shadow-md">
              <h2 className="text-lg font-bold mb-2">Personal Information</h2>
              <hr />
              <p className="mt-3">
                <strong>Full Name:</strong>{" "}
                <span className="text-slate-500">{data.full_name}</span>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <span className="text-slate-500">{data.email}</span>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <span className="text-slate-500">{data.phone}</span>
              </p>
              <p>
                <strong>Job Title:</strong>{" "}
                <span className="text-slate-500">{data.job_title}</span>
              </p>
            </div>

            <div className="border p-4 rounded-md shadow-md">
              <h2 className="text-lg font-bold mb-2">Business Information</h2>
              <hr />
              <p className="mt-3">
                <strong>Business Name:</strong>{" "}
                <span className="text-slate-500">{data.business_name}</span>
              </p>
              <p>
                <strong>Address:</strong>{" "}
                <span className="text-slate-500">{data.address}</span>
              </p>
              <p>
                <strong>Sectors Interested In:</strong>{" "}
                <span className="text-slate-500">
                  {renderSectors(data.sectors)}
                </span>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="mt-4 border p-4 rounded-md shadow-md">
              <h2 className="text-lg font-bold mb-2">Registration Details</h2>
              <hr />
              <p className="mt-3">
                <strong>Registration Type:</strong>{" "}
                <span className="text-slate-500">
                  {data.registration_type_name}
                </span>
              </p>
              <p className="">
                <strong>Registered By:</strong>{" "}
                <span className="text-slate-500">Self</span>
              </p>
              <p className="">
                <strong>Created At:</strong>{" "}
                <span className="text-slate-500">
                  {formatDateTime(data.created_at)}
                </span>
              </p>
            </div>

            <div className="mt-4 border p-4 rounded-md shadow-md">
              <h2 className="text-lg font-bold mb-2">Nationality and Region</h2>
              <hr />
              <p className="mt-3">
                <strong>Nationality:</strong>{" "}
                <span className="text-slate-500">{data.nationality_name}</span>
              </p>
              <p className="">
                <strong>Region:</strong>{" "}
                <span className="text-slate-500">{data.region_name}</span>
              </p>
            </div>
          </div>

          <div className="mt-4 border p-4 rounded-md">
            <h2 className="text-lg font-bold mb-2">Actions</h2>
            <button onClick={() => handleMarkAttendance()} className="bg-green-200 rounded text-green-700 py-2 px-5 mr-3 hover:bg-green-500 hover:text-white mb-3">
              {" "}
              Mark as Attended
              <BiCheckDouble className="inline-block ml-2" />
            </button>
            <button onClick={() => handleCancelAttendance()} className="bg-red-300 py-2 px-5 text-red-700 rounded hover:bg-red-500 hover:text-white">
              Cancel Attendance <BiTrash className="inline-block ml-2" />
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAttendeeDetails;

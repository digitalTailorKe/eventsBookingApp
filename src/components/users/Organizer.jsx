import React, { useState } from "react";
import { BiSearch, BiLock, BiQrScan, BiX } from "react-icons/bi";
import { Link } from "react-router-dom";
import { QrScannerFn, SearchInputArea } from "../../components";
import SearchModal from "../modals/SearchModal";

const Organizer = () => {
  const [scanActive, setScanActive] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const startScan = () => {
    setScanActive(true);
  };

  const stopScan = () => {
    setScanActive(false);
  };

  const handleScanComplete = () => {
    setScanActive(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen md:py-8 text-[16px] md:text-[18px]">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-md px-4 md:px-8 py-6">
        <h2 className="text-2xl text-center md:text-start font-semibold text-gray-800 mb-6">
          Organizers Dashboard
        </h2>

        <div className="mb-8">
          <h3 className="ml-5 md:ml-1 text-lg font-semibold text-gray-800 mb-4">
            User Profile
          </h3>
          <div className="flex flex-col items-center md:justify-between md:flex-row">
            {/* User info */}
            <div className="flex items-center space-x-4 mb-3 md:mb-1">
              <img
                className="w-16 h-16 rounded-full"
                src="/imgs/profile.png"
                alt="User Profile"
              />
              <div>
                <p className="text-gray-800 font-semibold">John Doe</p>
                <p className="text-gray-600">john@example.com</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="w-full md:w-[inherit]">
              <div className="flex flex-col space-y-4 justify-center items-center md:space-x-4 md:flex-row">
                {/* Search registered User */}
                <button
                  onClick={openModal}
                  className="w-full md:w-[inherit] bg-slate-200 mt-4 px-5 py-3 hover:bg-blue-500 hover:text-slate-100 rounded-lg shadow-md"
                >
                  Search <BiSearch style={{ display: "inline-block" }} />
                </button>

                {/* QR Scanner */}
                <button className="w-full md:w-[inherit] py-3 px-5 rounded-lg bg-blue-300 text-blue-700 shadow-md hover:bg-blue-600 hover:text-slate-100">
                  Scan{" "}
                  <BiQrScan
                    style={{ display: "inline-block", marginLeft: "8px" }}
                  />{" "}
                </button>

                {/* Registration Link */}
                <Link
                  to=""
                  className="px-5 w-full md:w-[inherit] py-3 text-center bg-red-200 text-red-700 rounded-lg hover:bg-red-500 hover:text-slate-100 shadow-md"
                >
                  Register Attendee{" "}
                  <BiLock style={{ display: "inline-block" }} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Marked atendees */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Marked Attendance (300 Attendees)
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="py-2 px-4 border-b border-gray-200">Name</th>
                  <th className="py-2 px-4 border-b border-gray-200">Email</th>
                  <th className="py-2 px-4 border-b border-gray-200">
                    Phone Number
                  </th>
                  <th className="py-2 px-4 border-b border-gray-200">Date</th>
                  <th className="py-2 px-4 border-b border-gray-200">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="py-4 px-4 border-b border-gray-200">
                    John Doe
                  </td>
                  <td className="py-4 px-4 border-b border-gray-200">
                    john@example.com
                  </td>
                  <td className="py-4 px-4 border-b border-gray-200">
                    +254725134449
                  </td>
                  <td className="py-4 px-4 border-b border-gray-200">
                    26-07-2023
                  </td>
                  <td className="py-4 px-4 border-b text-red-600 border-gray-200">
                    <BiX
                      style={{
                        color: "#da1c18",
                        fontSize: "21px",
                        cursor: "pointer",
                        display: "inline-block",
                      }}
                    />{" "}
                    Remove
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 border-b border-gray-200">
                    Jane Smith
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    jane@example.com
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    +254725134449
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    27-07-2023
                  </td>
                  <td className="py-2 px-4 border-b text-red-600 border-gray-200">
                    <BiX
                      style={{
                        color: "#da1c18",
                        fontSize: "21px",
                        cursor: "pointer",
                        display: "inline-block",
                      }}
                    />{" "}
                    Remove
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 border-b border-gray-200">
                    Jane Smith
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    jane@example.com
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    +254725134449
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    27-07-2023
                  </td>
                  <td className="py-2 px-4 border-b text-red-600 border-gray-200">
                    <BiX
                      style={{
                        color: "#da1c18",
                        fontSize: "21px",
                        cursor: "pointer",
                        display: "inline-block",
                      }}
                    />{" "}
                    Remove
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 border-b border-gray-200">
                    Jane Smith
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    jane@example.com
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    +254725134449
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    27-07-2023
                  </td>
                  <td className="py-2 px-4 border-b text-red-600 border-gray-200">
                    <BiX
                      style={{
                        color: "#da1c18",
                        fontSize: "21px",
                        cursor: "pointer",
                        display: "inline-block",
                      }}
                    />{" "}
                    Remove
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 border-b border-gray-200">
                    Jane Smith
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    jane@example.com
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    +254725134449
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    27-07-2023
                  </td>
                  <td className="py-2 px-4 border-b text-red-600 border-gray-200">
                    <BiX
                      style={{
                        color: "#da1c18",
                        fontSize: "21px",
                        cursor: "pointer",
                        display: "inline-block",
                      }}
                    />{" "}
                    Remove
                  </td>
                </tr>
                {/* Add more rows for other attendees */}
              </tbody>
            </table>
          </div>
        </div>

        {/* Scanner Area */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            QR Code Scanner
          </h3>
          <div className="flex items-center justify-center bg-gray-200 h-[400px] relative">
            {/* Add your QR code scanner component here */}
            {scanActive ? (
              <div className="w-full">
                <button
                  onClick={stopScan}
                  className="py-3 px-8 rounded-lg bg-red-400 hover:bg-red-600 hover:text-slate-100 text-red-800 shadow-md mb-1"
                >
                  Close scanner{" "}
                  <BiQrScan
                    style={{ display: "inline-block", marginLeft: "8px" }}
                  />{" "}
                </button>

                <QrScannerFn
                  handleScanning={scanActive}
                  handleScanComplete={handleScanComplete}
                />
              </div>
            ) : (
              <button
                onClick={startScan}
                className="py-3 px-8 rounded-lg bg-blue-300 text-blue-700 shadow-md"
              >
                Open Scanner{" "}
                <BiQrScan
                  style={{ display: "inline-block", marginLeft: "8px" }}
                />{" "}
              </button>
            )}
          </div>
        </div>

        {/* Search Modal */}
        <div className="">
          <SearchModal isOpen={modalOpen} onClose={closeModal}>
            <SearchInputArea />
          </SearchModal>
        </div>
      </div>
    </div>
  );
};

export default Organizer;

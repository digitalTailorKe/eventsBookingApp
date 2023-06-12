import React, { useState, useRef } from "react";
import { BiSearch, BiLock, BiQrScan, BiX } from "react-icons/bi";
import { Link } from "react-router-dom";
import {
  QrScannerFn,
  SearchInputArea,
  OrganizersTable,
} from "../../components";
import SearchModal from "../modals/SearchModal";

const Organizer = () => {
  const [scanActive, setScanActive] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const scannerRef = useRef(null);

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

  const data = [
    {
      full_name: "John Doe",
      email: "john@example.com",
      phone: "+254725134449",
      created_at: "26-07-2023",
    },
    {
      full_name: "Jane Smith",
      email: "jane@example.com",
      phone: "+254725134449",
      created_at: "27-07-2023",
    },
    // Add more data rows as needed
  ];

  const scrollToScanner = () => {
    if (scannerRef.current) {
      scannerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Get current time
  const now = new Date();
  const currentHour = now.getHours();
  let salutation = "";
  if (currentHour >= 5 && currentHour < 12) {
    salutation = "Good Morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    salutation = "Good Afternoon";
  } else {
    salutation = "Good Evening";
  }

  return (
    <div className="min-h-screen lg:py-8 text-[16px] lg:text-[18px]">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg px-4 md:px-8 lg:px-8 pb-6">
        <h2 className="text-3xl text-center p-10 font-semibold mb-6 border-b-4 border-b-blue-500 text-blue-500">
          Organizers Dashboard
        </h2>

        <div className="mb-8">
          <h3 className="ml-5 lg:ml-1 text-lg font-semibold text-gray-500 mb-4">
            {salutation}, John 👋 <span>Welcome Back</span>
          </h3>
          <div className="flex flex-col items-center lg:justify-between lg:flex-row">
            {/* User info */}
            <div className="flex items-center space-x-4 mb-3 lg:mb-1">
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
            <div className="w-full lg:w-[inherit]">
              <div className="flex flex-col space-y-4 justify-center items-center lg:space-x-4 lg:flex-row">
                {/* Search registered User */}
                <button
                  onClick={openModal}
                  className="w-full lg:w-[inherit] bg-slate-200 mt-4 px-5 py-3 hover:bg-blue-500 hover:text-slate-100 rounded-lg shadow-lg"
                >
                  Search <BiSearch style={{ display: "inline-block" }} />
                </button>

                {/* QR Scanner */}
                <button
                  onClick={() => {
                    startScan();
                    scrollToScanner();
                  }}
                  className="w-full lg:w-[inherit] py-3 px-5 rounded-lg bg-blue-300 text-blue-700 shadow-lg hover:bg-blue-600 hover:text-slate-100"
                >
                  Scan{" "}
                  <BiQrScan
                    style={{ display: "inline-block", marginLeft: "8px" }}
                  />{" "}
                </button>

                {/* Registration Link */}
                <Link
                  to="/user-organizer-register-atendees"
                  className="px-5 w-full lg:w-[inherit] py-3 text-center bg-red-200 text-red-700 rounded-lg hover:bg-red-500 hover:text-slate-100 shadow-lg"
                >
                  Register Attendee{" "}
                  <BiLock style={{ display: "inline-block" }} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Marked atendees */}
        <OrganizersTable data={data} />

        {/* Scanner Area */}
        <div ref={scannerRef}>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            QR Code Scanner
          </h3>
          <div className="flex items-center justify-center bg-gray-200 h-[400px] relative">
            {/* Add your QR code scanner component here */}
            {scanActive ? (
              <div className="w-full">
                <button
                  onClick={stopScan}
                  className="py-3 px-8 rounded-lg bg-red-400 hover:bg-red-600 hover:text-slate-100 text-red-800 shadow-lg mb-1"
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
                className="py-3 px-8 rounded-lg bg-blue-300 text-blue-700 shadow-lg"
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

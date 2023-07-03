import React, { useState, useRef } from "react";
import {
  BiSearch,
  BiLock,
  BiQrScan,
  BiObjectsVerticalBottom,
} from "react-icons/bi";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import {
  QrScannerFn,
  SearchInputArea,
  OrganizersTable,
} from "../../components";
import SearchModal from "../modals/SearchModal";
import LoginScreen from "./LoginScreen";
import Modal from "../modals/Modal";
import EditUsersProfile from "./EditUsersProfile";
import ChangePassword from "./ChangePassword";
import updateTotalAttended from "../../../hooks/UpdateAtendeeCount";

const Organizer = () => {
  const [scanActive, setScanActive] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const [totalRegistered, setTotalRegistered] = useState(0);
  const [totalAttended, setTotalAttended] = useState(0);
  const [logoutPopup, setLogoutPopup] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { user, logout } = useStateContext();
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

  const handleToggleLogoutPopup = () => {
    setLogoutPopup(!logoutPopup);
    setToggle(!toggle);
  };

  const handleLogout = () => {
    logout();
  };

  const closeProfileModal = () => {
    setProfileModalOpen(false);
  };

  const openProfileModal = () => {
    setProfileModalOpen(true);
  };

  const openPasswordModal = () => {
    setPasswordModalOpen(true);
  };

  const closePasswordModal = () => {
    setPasswordModalOpen(false);
  };

  const getTotalRegistered = (total) => {
    setTotalRegistered(total);
  };

  // Returns data from the child component (OrganizersTable.jsx)
  const getTotalAttended = (total) => {
    setTotalAttended(total);
  };

  const handleUpdateAttendeeCount = (total) => {
    setTotalAttended(totalAttended + total);
  };

  // This function updates the total attended count
  const handleUpdateTotalAttended = async () => {
    const count = await updateTotalAttended();
    setTotalAttended(count);
  };

  return (
    <>
      {user ? (
        <div className="min-h-screen text-[16px] lg:text-[18px]">
          <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg px-4 md:px-8 lg:px-8 pb-6">
            <h2 className="text-xl md:text-3xl text-center p-5 md:p-10 font-semibold mb-6 border-b-2 md:border-b-4 border-b-blue-500 text-blue-500">
              Organizers Dashboard
            </h2>

            <div className="mb-8">
              <h3 className="ml-5 lg:ml-1 text-lg font-semibold text-gray-500 mb-4">
                {salutation}, {user.name} 👋 <span>Welcome Back</span>
              </h3>
              <div className="flex flex-col items-center lg:justify-between lg:flex-row">
                {/* User info */}
                <div className="px-3 relative hover:shadow-cyan-300 hover:shadow-md hover:rounded">
                  <div
                    onClick={handleToggleLogoutPopup}
                    className="flex items-center space-x-4 mb-3 lg:mb-1 cursor-pointer"
                  >
                    <img
                      className="w-16 h-16 rounded-full"
                      src="/imgs/profile.png"
                      alt="User Profile"
                    />
                    <div>
                      <p className="text-gray-800 font-semibold">{user.name}</p>
                      <p className="text-gray-600">{user.email}</p>
                    </div>
                  </div>

                  {/* User dropdown */}
                  {logoutPopup && (
                    <div>
                      <button
                        onClick={handleToggleLogoutPopup}
                        className={`${
                          toggle ? "" : "hidden"
                        } fixed inset-0 z-10 cursor-default dropdown-container`}
                      ></button>
                      <div className="bg-white shadow-xl absolute right-0 w-full rounded z-10 top-20">
                        <ul className="p-3">
                          <Link onClick={openProfileModal}>
                            <li className="w-full py-2 text-[16px] text-gray-500">
                              {" "}
                              Edit Account.
                            </li>
                          </Link>
                          <hr />
                          <Link onClick={openPasswordModal}>
                            <li className="w-full py-2 text-[16px] text-gray-500">
                              {" "}
                              Channge Password.
                            </li>
                          </Link>
                          <hr className="mb-3" />
                          <li className="text-[16px]">
                            <Link
                              onClick={handleLogout}
                              className="flex items-center justify-center space-x-4 hover:bg-gray-700 hover:text-slate-100 bg-black text-white px-5 py-2 rounded-full text-center"
                            >
                              Logout{" "}
                              <FaSignOutAlt className="text-slate-100 ml-2" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Buttons */}
                <div className="w-full lg:w-[inherit]">
                  <div className="flex justify-center items-center space-x-4">
                    {/* Search registered User */}
                    <button
                      onClick={openModal}
                      className="w-full font-[700] text-gray-800 lg:w-[inherit] bg-slate-200 px-5 py-3 hover:bg-blue-500 hover:text-slate-100 rounded-md flex justify-center items-center space-x-2"
                    >
                      <span className="hidden md:block">Search</span>{" "}
                      <BiSearch />
                    </button>

                    {/* QR Scanner */}
                    <button
                      onClick={() => {
                        startScan();
                        scrollToScanner();
                      }}
                      className="w-full lg:w-[inherit] py-3 px-5 rounded-md bg-blue-300 text-blue-700 font-[700] hover:bg-blue-600 hover:text-slate-100 flex justify-center items-center space-x-2"
                    >
                      <span className="hidden md:block">Scan</span> <BiQrScan />{" "}
                    </button>

                    {/* Registration Link */}
                    <Link
                      to="/user-organizer-register-attendees"
                      className="px-5 w-full lg:w-[inherit] py-3 text-center bg-red-200 text-red-700 rounded-md hover:bg-red-500 hover:text-slate-100 font-[700] flex justify-center items-center space-x-2"
                    >
                      <span className="hidden md:block">Register Attendee</span>{" "}
                      <BiLock />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Stats */}
            <div className="my-5">
              <div className="grid md:grid-cols-2 gap-4">
                {/* Total Registered */}
                <div className="border p-4 rounded-md bg-purple-200 text-purple-800">
                  <h2 className="text-lg font-bold mb-2 flex justify-between items-center">
                    Total Registered Attendees{" "}
                    <BiObjectsVerticalBottom
                      style={{ display: "inline-block" }}
                    />
                  </h2>
                  <hr />
                  <p className="mt-3 text-center text-2xl">
                    {totalRegistered.toLocaleString()}
                  </p>
                </div>

                {/* Total Attended */}
                <div className="border p-4 rounded-md bg-green-200 text-green-800">
                  <h2 className="text-lg font-bold mb-2 flex justify-between items-center">
                    Total Attended Attendees{" "}
                    <BiObjectsVerticalBottom
                      style={{ display: "inline-block" }}
                    />
                  </h2>
                  <hr />
                  <p className="mt-3 text-center text-2xl">
                    {totalAttended.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Marked attendees */}
            <OrganizersTable
              getTotalRegistered={getTotalRegistered}
              getTotalAttended={getTotalAttended}
              setAttendeeCount={handleUpdateAttendeeCount}
            />

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
                      className="py-3 px-8 rounded-md font-[700] bg-red-400 hover:bg-red-600 hover:text-slate-100 text-red-800 shadow-lg mb-1"
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
                    className="py-3 px-8 rounded-md font-[700] bg-blue-300 text-blue-700 shadow-lg"
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
                <SearchInputArea
                  updateTotalAttended={handleUpdateTotalAttended}
                />
              </SearchModal>
            </div>

            {/* Edit Profile Modal */}  
            <div className="">
              <Modal
                isOpen={profileModalOpen}
                onClose={closeProfileModal}
                children={<EditUsersProfile />}
                title={"Update Profile"}
              />
            </div>

            {/* Edit Password Modal */}
            <div className="">
              <Modal
                isOpen={passwordModalOpen}
                onClose={closePasswordModal}
                children={<ChangePassword />}
                title={"Change Password"}
              />
            </div>
          </div>
        </div>
      ) : (
        <LoginScreen />
      )}
    </>
  );
};

export default Organizer;

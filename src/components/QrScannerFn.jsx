import React, { useState } from "react";
import { QrScanner } from "@yudiel/react-qr-scanner";
import axiosClient from "../axiosClient";
import { ToastContainer, toast } from "react-toastify";

const QrScannerFn = ({ handleScanning, handleScanComplete }) => {
  const [result, setResult] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  // Toast settings
  const toastSettings = {
    position: "bottom-center",
    autoClose: 5000,
    theme: "colored",
  };

  const handleScan = async (data) => {
    if (data) {
      try {
        const endpoint = data.trim() + user.user_id; // Trim any leading/trailing spaces
        console.log(`Scanning ${endpoint}...`);
        const response = await axiosClient.get(endpoint);
        console.log("Response:", response);
        if (response.data) {
          toast.success(response.data.message, toastSettings);
          setResult("Already attended");
        } else {
          setResult("Attendance marked successfully");
          toast.error(response.data.message, toastSettings);
        }

        handleScanComplete();
      } catch (error) {
        console.error("Error marking attendance:", error);
        toast.error("Error marking attendance: "+ error, toastSettings);
      }
    }
  };

  const handleError = (error) => {
    console.error("QR code scanning error:", error);
  };

  return (
    <div className="w-full">
      <QrScanner
        delay={300}
        onDecode={handleScanning ? handleScan : handleError}
        onError={handleError}
        style={{ width: "100%", position: "absolute" }}
      />

      {result && (
        <div className="mt-5">
          <h4 className="text-green-800 bg-green-200 px-4 py-2 rounded-md">
            {result}
          </h4>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default QrScannerFn;

import React, { useState } from "react";
import { QrScanner } from "@yudiel/react-qr-scanner";
import axios from "axios";

const QrScannerFn = ({ handleScanning, handleScanComplete }) => {
  const [result, setResult] = useState("");

  const handleScan = async (data) => {
    if (data) {
      try {
        const endpoint = data.trim(); // Trim any leading/trailing spaces
        const response = await axios.post(endpoint);

        if (response.data.attended) {
          setResult("Already attended");
        } else {
          setResult("Attendance marked successfully");
        }

        handleScanComplete();
      } catch (error) {
        console.error("Error marking attendance:", error);
      }
    }
  };

  const handleError = (error) => {
    console.error("QR code scanning error:", error);
  };

  return (
    <div className="w-full">
      <QrScanner
        delay={500}
        onDecode={handleScanning ? handleScan : handleError}
        onError={handleError}
        style={{ width: "100%" }}
      />

      <div className="mt-5 bg-green-200 p-4 rounded-lg">
        <h4 className="text-green-600">{result}</h4>
      </div>
    </div>
  );
};

export default QrScannerFn;

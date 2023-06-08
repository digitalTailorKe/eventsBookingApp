import React, { useState } from "react";
import { QrScanner } from "@yudiel/react-qr-scanner";

const QrScannerFn = ({ handleScanning }) => {
  const [result, setResult] = useState("");

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <QrScanner
      delay={500}
      onDecode={handleScanning ? handleScan : handleError}
      onError={handleError}
      style={{ width: "100%" }}
    />
  );
};

export default QrScannerFn;

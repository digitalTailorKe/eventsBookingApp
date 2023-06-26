import React, { useEffect, useState } from "react";
import QRCode from "qrcode.react";

const QRCodeComponent = ({ id, name, position, company, phone }) => {
  const [dataUrl, setDataUrl] = useState("");

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        const profileUrl = `https://indoeastafricaexpo.org/profile?id=${id}&name=${encodeURIComponent(
          name
        )}&position=${encodeURIComponent(
          position
        )}&company=${encodeURIComponent(company)}&phone=${encodeURIComponent(
          phone
        )}`;
        const qrData = profileUrl;
        setDataUrl(qrData);
      } catch (error) {
        console.error("Failed to generate QR code:", error);
      }
    };

    generateQRCode();
  }, [id, name, position, company]);

  return <QRCode value={dataUrl} renderAs="canvas" />;
};

export default QRCodeComponent;

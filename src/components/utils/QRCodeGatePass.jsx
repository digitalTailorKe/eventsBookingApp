import React, { useState } from "react";
import QRCode from "qrcode.react";

const QRCodeGatePass = ({ id }) => {
  const urlWithId = `https://admin.indoeastafricaexpo.org/api/attendee/mark_gatepass_attendance/${id}`;

  return (
    <div>
      <QRCode value={urlWithId} renderAs="canvas" size={150} />
    </div>
  );
};

export default QRCodeGatePass;

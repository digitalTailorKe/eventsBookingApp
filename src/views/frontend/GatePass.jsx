import React from "react";
import QRCode from "qrcode.react";
import { useLocation, useParams } from "react-router-dom";
import PageTitle from "../../components/PageTitle";

const GatePass = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const name = queryParams.get("name");

  const urlWithId = `https://admin.indoeastafricaexpo.org/api/attendee/mark_gatepass_attendance/${id}`;

  return (
    <div style={styles.container}>
      <PageTitle title="GatePass" />
      <div className="mb-3">
        <img src="/imgs/logo.png" alt="logo" className="w-40" />
      </div>
      <div className="border-2 p-5 rounded-md">
        <div style={styles.qrCodeContainer} className="">
          <QRCode value={urlWithId} size={200} />
        </div>
        <div style={styles.text}>GatePass</div>
      </div>
      <div className="w-[280px] mt-3">
        <div className="text-lg text-gray-800 font-[300]">
          Hello {name}, <br /> Your confirmation has been successfully
          processed. Present this at the gate for scanning.
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#cbd5e1",
  },
  qrCodeContainer: {
    marginBottom: 0,
    backgroundColor: "#fff",
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    backgroundColor: "#fff",
    padding: 20,
    paddingRight: 70,
    paddingLeft: 70,
  },
};

export default GatePass;

import React from "react";
import QRCode from "qrcode.react";
import PageTitle from "../../components/PageTitle";

const ScanMe = () => {
  const urlWithId = `https://indoeastafricaexpo.org/find-gatepass`;

  return (
    <div style={styles.container}>
      <PageTitle title="Scan Me" />
      <div className="mb-3">
        <img src="/imgs/logo.png" alt="logo" className="w-40" />
      </div>
      <div className="border-2 p-5 rounded-md">
        <div style={styles.qrCodeContainer} className="">
          <QRCode value={urlWithId} size={200} />
        </div>
        <div style={styles.text}>Scan Me</div>
      </div>
      <div className="w-[280px] mt-3">
        <div className="text-lg text-gray-800 font-[300]">
          Hello, <br /> Scan this QR code to find your gatepass.
        </div>
      </div>
    </div>
  );
};

export default ScanMe;

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

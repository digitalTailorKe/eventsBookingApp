import React, { useEffect, useState } from "react";

const ProfilePage = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [id, setId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const phoneNumber = urlParams.get("phone");
    const name = urlParams.get("name");
    const position = urlParams.get("position");
    const company = urlParams.get("company");
    const id = urlParams.get("id");
    setName(name);
    setPosition(position);
    setCompany(company);
    setId(id);
    setPhoneNumber(phoneNumber);

    if (phoneNumber) {
      const contactData = createContactData(name, phoneNumber);
      setupDownloadButton(contactData);
    }
  }, []);

  const createContactData = (name, phoneNumber) => {
    const vcardData = `BEGIN:VCARD
                        VERSION:3.0
                        FN:${name}
                        TEL;TYPE=CELL:${phoneNumber}
                        END:VCARD`;

    return vcardData;
  };

  const setupDownloadButton = (contactData) => {
    const downloadButton = document.getElementById("downloadButton");
    downloadButton.addEventListener("click", () => {
      downloadContact(contactData);
    });
  };

  const downloadContact = (contactData) => {
    const blob = new Blob([contactData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.setAttribute("download", "contact.vcf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full md:w-auto bg-white p-5">
        <div className="bg-gray-200 rounded-full h-24 w-24 flex items-center justify-center mb-4">
          <span className="text-gray-600 text-3xl">Avatar</span>
        </div>

        <h1 className="text-2xl font-bold mb-2">{name}</h1>
        <p className="text-gray-600 mb-4">{position}</p>
        <div className="border-t border-b border-gray-300 py-2 mb-4">
          <p className="text-gray-600">
            ID: <span className="font-bold">{id}</span>
          </p>
          <p className="text-gray-600">
            Company: <span className="font-bold">{company}</span>
          </p>
          <p className="text-gray-600">
            Phone Number: <span className="font-bold">{phoneNumber}</span>
          </p>
        </div>
        <button
          id="downloadButton"
          className="bg-blue-500 hover:bg-blue-700 font-bold text-white rounded-md px-4 py-2"
        >
          Save Contact to Phone
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;

import React, { useState } from "react";
import QRCode from "qrcode.react";

const QRCodeComponent = ({
  name,
  position,
  company,
  phone,
  email,
  title,
  address,
  notes,
}) => {
  // This function generates data for the QR code
  const generateVCard = () => {
    // Extract businessInterest from notes
    const businessInterest = notes.find((note) =>
      note.hasOwnProperty("businessInterest")
    );

    // Extract sectorOfInterest from notes
    const sectorOfInterest = notes.find((note) =>
      note.hasOwnProperty("sectorOfInterest")
    );

    // Generate a business interest string
    const businessInterestString = businessInterest
      ? `Business Interest: ${businessInterest["businessInterest"].join(", ")}`
      : "";

    // Generate a sector of interest string
    const sectorOfInterestString = sectorOfInterest
      ? `Sector of Interest: ${sectorOfInterest["sectorOfInterest"].join(", ")}`
      : "";

    // Concatenate the two strings separated by a new line
    const notesString = `${businessInterestString} ${"\n - "} ${sectorOfInterestString}`;

    // Generate the vCard string
    const vcardString = `BEGIN:VCARD
VERSION:3.0
N:Indo Expo;${name}
FN:Indo Expo ${name}
ORG:${company}
TEL:${phone}
EMAIL:${email}
TITLE:${position}
ADR:${address}
NOTE:${notesString}
END:VCARD`;

    // Return the vCard string
    return vcardString;
  };

  // This function saves the contact to the users device
  const saveContact = async () => {
    try {
      const vcardBlob = new Blob([generateVCard()], { type: "text/vcard" });

      if ("contacts" in navigator && "ContactsManager" in window) {
        const contacts = navigator.contacts;
        const properties = {
          name: [new ContactField("name", "Indo Expo", false, name)],
          organizations: [new ContactOrganization(true, "work", company)],
          phoneNumbers: [new ContactField("mobile", phone)],
          emails: [new ContactField("work", email)],
          // name: new ContactName({ familyName: name, honorificSuffix: title }),
          addresses: [new ContactAddress("work", address)],
          note: generateVCard(),
        };

        const contact = new contacts.create(properties);
        await contact.save();
        console.log("Contact saved successfully!");
      } else {
        const downloadLink = window.URL.createObjectURL(vcardBlob);
        const link = document.createElement("a");
        link.href = downloadLink;
        link.download = "contact.vcf";
        link.click();
        console.log("Contact downloaded successfully!");
      }
    } catch (error) {
      console.error("Failed to save or download contact:", error);
    }
  };

  // This function handles the save contact button click
  const handleSaveContact = () => {
    saveContact();
  };

  return (
    <div>
      <QRCode value={generateVCard()} renderAs="canvas" size={150} />

      {/* <button onClick={handleSaveContact}>Save Contact</button> */}
    </div>
  );
};

export default QRCodeComponent;

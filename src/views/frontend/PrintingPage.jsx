import React, { useState } from "react";
import PrintingCard from "../../components/printing/PrintingCard";
import PageTitle from "../../components/PageTitle";
import axiosClient from "../../axiosClient";

const PrintingPage = () => {
  const [pin, setPin] = useState("");
  const [isPinCorrect, setIsPinCorrect] = useState(false);
  const [pinError, setPinError] = useState(false);

  const handlePinChange = (event) => {
    setPin(event.target.value);
  };

  const handlePinSubmit = (event) => {
    event.preventDefault();
    if (pin === "320200") {
      setIsPinCorrect(true);
    } else {
      setPinError(true);
    }
  };

  // Get the data from the API
  const [totalRegistered, setTotalRegistered] = useState(0);
  const getConfirmedData = async () => {
    const response = await axiosClient.get("/attendee-confirmed");
    const { data } = response;
    const attendeeData = data.attendees;
    setTotalRegistered(attendeeData);
  }
 
  useEffect(() => {
    getConfirmedData();
  }, []);

  // name, position, company, phone, email, title, address;

  const confirmedData = [
    {
      id: "1",
      name: "Dennis Otieno",
      position: "Software Developer",
      company: "Indo East Africa Expo",
      phone: "+254 712 345 678",
      email: "otienodennis29@gmail.com",
      title: "Mr.",
      address: "The Mall Westlands, Nairobi",
      serial: "A001",
      notes: [
        { businessInterest: ["Note 1", "Note 2"] },
        { sectorOfInterest: ["Sector 1", "Sector 2"] },
      ],
    },
    {
      id: "2",
      name: "Aggrey Lustinga",
      position: "CEO",
      company: "Digital Tailor Agency",
      phone: "+254 712 345 678",
      email: "aggrey@dta.co.ke",
      title: "Mr.",
      address: "The Mall Westlands, Nairobi",
      serial: "A002",
      notes: [
        { businessInterest: ["Note 1", "Note 2"] },
        { sectorOfInterest: ["Sector 1", "Sector 2"] },
      ],
    },
    {
      id: "3",
      name: "John Doe",
      position: "Marketing Manager",
      company: "Traders CO. Ltd",
      phone: "+254 712 345 678",
      email: "johndoe@gmail.com",
      title: "Mr.",
      address: "The Mall Westlands, Nairobi",
      serial: "A003",
      notes: [
        { businessInterest: ["Note 1", "Note 2"] },
        { sectorOfInterest: ["Sector 1", "Sector 2"] },
      ],
    },
    {
      id: "4",
      name: "Victor Juma",
      position: "Tech Lead",
      company: "Kenyatta University",
      phone: "+254 712 345 678",
      email: "victo@gmail.com",
      title: "Mr.",
      address: "The Mall Westlands, Nairobi",
      serial: "A004",
      notes: [
        { businessInterest: ["Note 1", "Note 2"] },
        { sectorOfInterest: ["Sector 1", "Sector 2"] },
      ],
    },
    {
      id: "5",
      name: "Almasi Gerald",
      position: "Software Developer",
      company: "Digital Tailor Agency",
      phone: "+254 712 345 678",
      email: "almasi@gmail.com",
      title: "Mr.",
      address: "The Mall Westlands, Nairobi",
      serial: "A005",
      notes: [
        { businessInterest: ["Note 1", "Note 2"] },
        { sectorOfInterest: ["Sector 1", "Sector 2"] },
      ],
    },
  ];

  return (
    <>
    {/* Page title */}
      <PageTitle title="INDO - Printing front page for visitors cards" />
    
      <div className={`bg-blur ${isPinCorrect ? "bg-none" : ""}`}>
        {!isPinCorrect && (
          <div className="flex justify-center items-center h-screen">
            <form onSubmit={handlePinSubmit}>
              <div className="bg-white bg-opacity-50 rounded-md backdrop-blur-md p-4 shadow-md">
                {pinError && (
                  <div className="bg-red-200 text-red-700 px-2 rounded-md mb-2">
                    <p className="text-center">Incorrect PIN</p>
                  </div>
                )}
                <input
                  type="password"
                  value={pin}
                  onChange={handlePinChange}
                  className="bg-transparent text-xl font-bold placeholder-gray-500 text-gray-800 border-b-2 border-gray-500 focus:outline-none focus:border-blue-500 w-64 py-2 px-3 mb-4"
                  placeholder="Enter PIN"
                />
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white rounded-md px-4 py-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
        {isPinCorrect && (
          <div className="page">
            <div className="mx-auto bg-white w-[228mm] h-auto">
              <div className="grid grid-cols-2 gap-2 pt-2 pl-2">
                {confirmedData?.map((data) => (
                  <PrintingCard
                    key={data.id}
                    name={data.name}
                    position={data.position}
                    company={data.company}
                    serial={data.serial}
                    phone={data.phone}
                    email={data.email}
                    address={data.address}
                    title={data.title}
                    notes={data.notes}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PrintingPage;

import React, { useState } from 'react'
import PrintingCardBack from '../../components/printing/PrintingCardBack';

const PrintingBack = () => {
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

  return (
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
                <PrintingCardBack />
                <PrintingCardBack />
                <PrintingCardBack />
                <PrintingCardBack />
            </div>
          </div>
        </div>
        )}
    </div>
  )
}

export default PrintingBack
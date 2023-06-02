import React, { useState, useEffect } from "react";

const CountdownDays = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2023-07-05") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="text-center mr-5">
      {timeLeft.days > 0 && <h1 className="">{timeLeft.days}</h1>}
      {/* <div className="flex justify-center text-[#153148]">
        <div className="flex items-center">
          <div className="bg-[#dbe8f4] rounded-full h-[50px] w-[50px] m-2">
            <div className="mt-2">
              <div className="text-2xl font-bold mb-2 text-[#153148]">
                {timeLeft.hours.toString().padStart(2, "0")}
              </div>
              <div className="text-gray-500">Hours</div>
            </div>
          </div>
          <div className="bg-[#dbe8f4] rounded-full h-[50px] w-[50px] m-2">
            <div className="mt-2"></div>
            <div className="text-2xl font-bold mb-2">
              {timeLeft.minutes.toString().padStart(2, "0")}
            </div>
            <div className="text-gray-500">Minutes</div>
          </div>
          <div className="bg-[#dbe8f4] rounded-full h-[50px] w-[50px] m-2">
            <div className="mt-2"></div>
            <div className="text-2xl font-bold mb-2">
              {timeLeft.seconds.toString().padStart(2, "0")}
            </div>
            <div className="text-gray-500">Seconds</div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CountdownDays;

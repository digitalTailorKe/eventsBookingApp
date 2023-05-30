import React from "react";
import { FaRegCalendarAlt, FaUserTie } from "react-icons/fa";

const AboutEvent = () => {
  return (
    <div className="">
      <h4 className="flex gap-4 items-center text-[#153148] text-[20px] md:text-[22px] font-[400] dark:text-slate-100 pb-2">
        <FaRegCalendarAlt style={{ fontSize: "21px" }} /> About Event
      </h4>

      <hr className="mb-3"/>

      <div className="">
        <p className="mb-3 text-[18px]">
          Hello there! Are you excited about the upcoming expo? We certainly
          are! As a special treat, we're offering early bird free passes to the
          event. That's right, you can attend the expo for free if you register
          early. Don't miss out on this amazing opportunity to network with
          industry leaders, discover new products and services, and gain
          valuable insights into the latest trends and innovations. So what are
          you waiting for? Register now and secure your spot at the expo! We
          can't wait to see you there.
        </p>
      </div>
    </div>
  );
};

export default AboutEvent;

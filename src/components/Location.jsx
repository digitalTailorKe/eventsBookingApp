import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Location = () => {
  return (
    <div className="">
      <h4 className="flex gap-4 items-center text-[#153148] text-[16px] md:text-[22px] font-[400] pb-2 uppercase">
        <FaMapMarkerAlt style={{ fontSize: "21px" }} /> Location
      </h4>

      <hr className="mb-3" />

      <div className="">
        <p className="text-[18px]">
          Event will take place at the KICC, Nairobi Kenya.
        </p>
      </div>

      <div className="mt-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.808787021584!2d36.820171575804075!3d-1.28893363563075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d844cb44d5%3A0x8400193d944f808f!2sKICC%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1685462778483!5m2!1sen!2ske"
          className="w-full h-[300px] md:h-[400px] rounded-2xl shadow"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;

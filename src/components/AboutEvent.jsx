import React from "react";
import { FaRegCalendarAlt, FaUserTie } from "react-icons/fa";

const AboutEvent = () => {
  return (
    <div className="">
      <h4 className="flex gap-4 items-center text-[#153148] text-[20px] md:text-[22px] font-[400] pb-2">
        <FaRegCalendarAlt style={{ fontSize: "21px" }} /> About Event
      </h4>

      <hr className="mb-3" />

      <div className="">
        <p className="mb-3 text-[18px]">
          Forge Lasting Alliances for a Flourishing Future
        </p>
        <p className="mb-3 text-[18px]">
          <b>Our mission</b> is to bring together the vibrant economies of India
          and East Africa, fostering a collaborative environment where
          businesses and entrepreneurs thrive.
        </p>
        <p className="mb-3 text-[18px]">
          <b>Unleash the Potential of International Commerce:</b> India's global
          economic prowess and East Africa's strategic location provide the
          perfect foundation for mutually beneficial trade opportunities.
        </p>
        <p className="mb-3 text-[18px]">
          <b>Celebrating Our Shared Heritage and Connection:</b> India and East
          Africa share a remarkable cultural and historical bond that dates back
          centuries. Through the ancient trade routes of the Indian Ocean and
          the Swahili Coast, our regions have interwoven their identities,
          languages, and traditions.
        </p>
        <p className="mb-3 text-[18px]">
          This deep-rooted connection and affinity create a unique foundation
          for understanding,trust, and collaboration. By fortifying trade
          relations, we honor our shared heritage and leverage our cultural ties
          to strengther business relationships for a prosperous future.
        </p>
        <p className="mb-3 text-[18px]">
          Are you ready to tap into the immense potential of trade between India
          and East Africa? Join us on this transformative journey of growth,
          partnership, and opportunity. Together, we can fortify trade
          relations, unlock new markets, and shape a future of shared
          prosperity. Connect with us today and be a part of this exciting
          endeavor.
        </p>
      </div>
    </div>
  );
};

export default AboutEvent;

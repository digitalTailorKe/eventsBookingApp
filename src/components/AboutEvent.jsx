import React from "react";
import { FaRegCalendarAlt, FaUserTie } from "react-icons/fa";

const AboutEvent = () => {
  return (
    <div className="text-[16px]">
      <h4 className="flex gap-4 items-center text-[#153148] text-[16px] md:text-[22px] font-[400] pb-2 uppercase">
        <FaRegCalendarAlt style={{ fontSize: "21px" }} /> Why you can't afford
        to miss out!{" "}
      </h4>

      <hr className="mb-3" />

      <div className="">
        <div className="my-3 ml-3">
          <ol className="list-decimal">
            <li className="list-item mb-3 text-[16px] md:text-[18px]">
              <span className="font-bold">Expand Your Reach:</span> Unleash the
              potential of the Indian market with a lineup of 200 Indian
              exhibitors ready to wow you with their innovative products and
              game-changing technologies. Forge partnerships that transcend
              borders and embrace new avenues for growth.
            </li>
            <li className="list-item mb-3 text-[16px] md:text-[18px]">
              <span className="font-bold">Connect, Collaborate, Conquer:</span>{" "}
              Rub shoulders with the crème de la crème of East Africa and
              India's business communities. Network like a pro, exchange ideas,
              and explore collaboration possibilities that will propel your
              business to new heights. Success favors those who seize
              opportunities!
            </li>
            <li className="list-item mb-3 text-[16px] md:text-[18px]">
              <span className="font-bold">
                Knowledge to Power-up Your Strategies:{" "}
              </span>{" "}
              Stay ahead of the curve with industry champions sharing their
              wisdom on emerging trends, disruptive technologies, and winning
              strategies. Sharpen your business acumen and outshine the
              competition.
            </li>
            <li className="list-item mb-3 text-[16px] md:text-[18px]">
              <span className="font-bold">
                Explore a Diverse Range of Sectors:
              </span>{" "}
              The Indo-East Africa Trade Expo caters to various industries,
              ensuring you'll find opportunities relevant to your business and
              sector.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AboutEvent;

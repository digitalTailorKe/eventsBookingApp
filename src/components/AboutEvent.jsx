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
        <div className="my-3">
          <p className="mb-3 text-[16px] md:text-[18px]">
            <span className="font-bold">Expand Your Reach:</span> Unleash the
            potential of the Indian market with a lineup of 200 Indian
            exhibitors ready to wow you with their innovative products and
            game-changing technologies. Forge partnerships that transcend
            borders and embrace new avenues for growth.
          </p>
          <p className="mb-3 text-[16px] md:text-[18px]">
            <span className="font-bold">Connect, Collaborate, Conquer:</span>{" "}
            Rub shoulders with the crème de la crème of East Africa and India's
            business communities. Network like a pro, exchange ideas, and
            explore collaboration possibilities that will propel your business
            to new heights. Success favors those who seize opportunities!
          </p>
          <p className="mb-3 text-[16px] md:text-[18px]">
            <span className="font-bold">
              Knowledge to Power-up Your Strategies:{" "}
            </span>{" "}
            Stay ahead of the curve with industry champions sharing their wisdom
            on emerging trends, disruptive technologies, and winning strategies.
            Sharpen your business acumen and outshine the competition.
          </p>
          <p className="mb-3 text-[16px] md:text-[18px]">
            <span className="font-bold">
              Explore a Diverse Range of Sectors:
            </span>{" "}
            The Indo-East Africa Trade Expo caters to various industries,
            ensuring you'll find opportunities relevant to your business and
            sector.
          </p>
        </div>

        {/* Sectors Section */}
        <div className="my-5">
          <h4 className="text-lg md:text-2xl font-bold">Sectors that will be present</h4>
          <div className="ml-5">
            <ul className="list-disc text-[16px] md:text-[18px]">
              <li className="list-item">FCMG & Food Processing</li>
              <li className="list-item">
                Textile, Leather, Footwear & Handicrafts
              </li>
              <li className="list-item">
                Automotive, Motor Parts & Machinery & Tools
              </li>
              <li className="list-item">
                Artificial Jewelry, Beauty & Cosmetics
              </li>
              <li className="list-item">Agriculture</li>
              <li className="list-item">Technology</li>
              <li className="list-item">Hardware Manufacturers</li>
              <li className="list-item">Education Sector: Universities</li>
              <li className="list-item">Printing & Packaging</li>
              <li className="list-item">
                Construction, Sanitary Wares & Tile, Marble, Granite Stone
              </li>
              <li className="list-item">Sculptures & Mining</li>
              <li className="list-item">Modular & Antique Furniture</li>
              <li className="list-item">Others</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutEvent;

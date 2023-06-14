import React from "react";
import { FaGripHorizontal } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sectors = () => {
  return (
    <div className="">
      <div className="flex justify-between">
        <h4 className="flex gap-4 items-center text-[#153148] text-[16px] md:text-[22px] font-[400] pb-2 uppercase">
          <FaGripHorizontal style={{ fontSize: "21px" }} /> Sectors that will be
          present
        </h4>
        <Link
          to={"/sector-details"}
          className="mr-3 text-[18px] text-[#153148] underline md:text-[21px] hover:text-blue-600"
        >
          Details
        </Link>
      </div>

      <hr className="mb-3" />

      <div className="flex flex-col md:flex-row justify-center items-center mx-auto gap-2 w-full">
        <div className="flex-1">
          {/* Sectors Section */}
          <div className="my-5">
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
                  Artificial jewelry, Beauty & Cosmetics
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
    </div>
  );
};

export default Sectors;

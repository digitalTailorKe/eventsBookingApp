import React from "react";
import { FaPlaneDeparture } from "react-icons/fa";

const WhyImportFromIndia = () => {
  return (
    <div className="">
      <h4 className="flex gap-4 items-center text-[#153148] text-[16px] md:text-[22px] font-[400] pb-2 uppercase">
        <FaPlaneDeparture style={{ fontSize: "21px" }} /> Why Import From India
      </h4>

      <hr className="mb-3" />

      <div className="flex flex-col md:flex-row justify-center items-center mx-auto gap-2 w-full">
        <div className="flex-1">
          <p className="text-[16px] md:text-[18px] mb-3">
            Achieve Reliable and good quality products at a minimum cost through
            the Best Banking channel between Africa & India.
          </p>
          <p className="text-[16px] md:text-[18px] mb-3">
            Through a skilled workforce, India is the largest exporter of
            Medication, Medical Supplies, Machinery, etc. India has a diverse
            economy and offers various products across various industries. It is
            a significant exporter of textiles, pharmaceuticals, information
            technology services, automotive components, chemicals, and
            agricultural products.
          </p>
          <p className="text-[16px] md:text-[18px] mb-3">
            Regarding figures, In the financial year 2023 till now, India is
            exporting more than 11 billion USD to East Africa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyImportFromIndia;

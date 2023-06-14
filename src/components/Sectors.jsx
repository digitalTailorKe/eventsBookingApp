import React from "react";
import { FaGripHorizontal } from "react-icons/fa";

const Sectors = () => {
  return (
    <div className="">
      <h4 className="flex gap-4 items-center text-[#153148] text-[16px] md:text-[22px] font-[400] pb-2 uppercase">
        <FaGripHorizontal style={{ fontSize: "21px" }} /> Sectors that will be
        present
      </h4>

      <hr className="mb-3" />

      <div className="flex flex-col md:flex-row justify-center items-center mx-auto gap-2 w-full">
        <div className="flex-1">
          {/* Sectors Section */}
          <div className="my-5">
            <div className="ml-5">
              <div class="">
                <div className="text-[16px] md:text-[18px]">
                  <ul class="list-decimal pl-4 grid grid-cols-2 gap-4">
                    {/* Automotive Section */}
                    <li class="cursor-pointer mb-3 hover:shadow-md p-3 rounded-md">
                      <span class="font-bold">Automotive:</span>{" "}
                      <span className="italic">Includes</span>
                      <ul class="list-disc pl-4">
                        <li>A Auto Accessories/ Motor Parts</li>
                        <li>B Tyre Monitoring System</li>
                        <li>C Detail & Carwash</li>
                        <li>D Sales & Repair Rental & Leasing</li>
                        <li>E Service, Repair & Parts Towina</li>
                        <li>F Lubricant</li>
                      </ul>
                    </li>

                    {/* Business Support & Supplies Section */}
                    <li class="cursor-pointer mb-3 hover:shadow-md p-3 rounded-md">
                      <span class="font-bold">
                        Business Support & Supplies:
                      </span>{" "}
                      <span className="italic">Includes</span>
                      <ul class="list-disc pl-4">
                        <li>A Consultants Employment Agency</li>
                        <li>B Marketing & Communications</li>
                        <li>
                          C Office Supplies/ Furniture/ Printing & Packing
                        </li>
                      </ul>
                    </li>

                    {/* Computer & Electronics Section */}
                    <li class="cursor-pointer mb-3 hover:shadow-md p-3 rounded-md">
                      <span class="font-bold">Computers & Electronics:</span>{" "}
                      <span className="italic">Includes</span>
                      <ul class="list-disc pl-4">
                        <li>A Computer Programming & Support</li>
                        <li> B Consumer Electronics & Accessories</li>
                      </ul>
                    </li>

                    {/* Construction & Contractors */}
                    <li class="cursor-pointer mb-3 hover:shadow-md p-3 rounded-md">
                      <span class="font-bold">Construction & Contractors:</span>{" "}
                      <span className="italic">Includes</span>
                      <ul class="list-disc pl-4">
                        <li>A Architects, Landscape Architects, Engineers &</li>
                        <li>B Surveyors Blasting & Demolition</li>
                        <li>C Building Materials & Supplies Construction</li>
                        <li>D Companies Electricians</li>
                        <li>
                          E Engineer, Survey Environmental Assessments nspectors
                        </li>
                        <li>F Plaster & Concrete Plumbers</li>
                        <li>G Roofers</li>
                      </ul>
                    </li>

                    {/* Education Section */}
                    <li class="cursor-pointer mb-3 hover:shadow-md p-3 rounded-md">
                      <span class="font-bold">Education:</span>{" "}
                      <span className="italic">Includes</span>
                      <ul class="list-disc pl-4">
                        <li>
                          A Adult & Continuing Education Early Child hood{" "}
                        </li>
                        <li>B Education Educational Resources </li>
                        <li>C Professional Education </li>
                        <li>D International Consultancy </li>
                      </ul>
                    </li>

                    {/* Entertainment Section */}
                    <li class="cursor-pointer mb-3 hover:shadow-md p-3 rounded-md">
                      <span class="font-bold">Entertainment:</span>{" "}
                      <span className="italic">Includes</span>
                      <ul class="list-disc pl-4">
                        <li>A Event Planners</li>
                      </ul>
                    </li>

                    {/* Food & Dining Section */}
                    <li class="cursor-pointer mb-3 hover:shadow-md p-3 rounded-md">
                      <span class="font-bold">Food & Dining:</span>{" "}
                      <span className="italic">Includes</span>
                      <ul class="list-disc pl-4">
                        <li>
                          A Desserts, Catering & Supplies Fast Food & Carry Out
                          Grocery, Beverage
                        </li>
                        <li>B Education Educational Resources </li>
                        <li>C Professional Education </li>
                        <li>D International Consultancy </li>
                      </ul>
                    </li>

                    {/* Health & Medicine Section */}
                    <li class="cursor-pointer mb-3 hover:shadow-md p-3 rounded-md">
                      <span class="font-bold">Health & Medicine:</span>{" "}
                      <span className="italic">Includes</span>
                      <ul class="list-disc pl-4">
                        <li>A Acupuncture</li>
                        <li>
                          B Assisted Living & Home Health Care Audiologist
                        </li>
                        <li>C Chiropractic</li>
                        <li>D Clinics & Medical Centers Dental</li>
                        <li>E Diet & Nutrition </li>
                        <li>F Pharmaceutical & </li>
                        <li>
                          G Laboratory,Imaging & Diagnostic Massage Therapy
                        </li>
                        <li>H Mental Health Nurse</li>
                        <li>I Optical</li>
                        <li>J Pharmacy, Drug & Vitamin Stores Physical </li>
                        <li>K Therapy</li>
                        <li>L Physicians & Assistants Podiatry</li>
                        <li>M Animal Hospital</li>
                        <li>N Veterinary & Animal Surgeons</li>
                      </ul>
                    </li>

                    {/* Home & Garden Section */}
                    <li class="cursor-pointer mb-3 hover:shadow-md p-3 rounded-md">
                      <span class="font-bold">Home & Garden:</span>{" "}
                      <span className="italic">Includes</span>
                      <ul class="list-disc pl-4">
                        <li>A Antiques & Collectibles Cleaning</li>
                        <li>B Crafts, & Sports </li>
                        <li>C Home Furnishings</li>
                        <li>D Home Goods</li>
                        <li>E Pest Control</li>
                        <li>
                          F Pool Supplies & Service Security System & G Services
                        </li>
                      </ul>
                    </li>

                    {/* Legal & Financial Section */}
                    <li class="cursor-pointer mb-3 hover:shadow-md p-3 rounded-md">
                      <span class="font-bold">Legal & Financial:</span>{" "}
                      <span className="italic">Includes</span>
                      <ul class="list-disc pl-4">
                        <li>A Accountant ts Attorneys</li>
                      </ul>
                    </li>

                    {/* Manufacturing, Wholesale, Distribution */}
                    <li class="cursor-pointer mb-3 hover:shadow-md p-3 rounded-md">
                      <span class="font-bold">
                        Manufacturing, Wholesale, Distribution:
                      </span>{" "}
                      <span className="italic">Includes</span>
                      <ul class="list-disc pl-4">
                        <li>A Distribution, Import/ Export </li>
                        <li>
                          B Manufacturing (Iron & Steel/ Electrical Meter & Box
                          / PVC Pipes/ Electrolytes / Detergent) Wholesale
                        </li>
                      </ul>
                    </li>

                    {/* Merchants (Retail) Section */}
                    <li class="cursor-pointer mb-3 hover:shadow-md p-3 rounded-md">
                      <span class="font-bold">Merchants (Retail):</span>{" "}
                      <span className="italic">Includes</span>
                      <ul class="list-disc pl-4">
                        <li>A Cards & Gifts </li>
                        <li>B Clothing & Accessories </li>
                        <li>C Department Stores, Sporting Goods General </li>
                        <li>D Jewelry Shoes </li>
                      </ul>
                    </li>

                    {/* Personal Care & Services Section */}
                    <li class="cursor-pointer mb-3 hover:shadow-md p-3 rounded-md">
                      <span class="font-bold">Personal Care & Services:</span>{" "}
                      <span className="italic">Includes</span>
                      <ul class="list-disc pl-4">
                        <li>A Animal Care </li>
                        <li>B Supplies Barber </li>
                        <li>C Beauty Salons </li>
                        <li>D Beauty Supplies</li>
                        <li>E Dry Cleaners </li>
                        <li>F Laundromats Exercise </li>
                        <li>G Fitness</li>
                        <li>H Massage </li>
                      </ul>
                    </li>

                    {/* Real Estate Section */}
                    <li class="cursor-pointer mb-3 hover:shadow-md p-3 rounded-md">
                      <span class="font-bold">Real Estate:</span>{" "}
                      <span className="italic">Includes</span>
                      <ul class="list-disc pl-4">
                        <li>A Agencies & Brokerly</li>
                      </ul>
                    </li>

                    {/*  Others Section */}
                    <li class="cursor-pointer mb-3 hover:shadow-md p-3 rounded-md">
                      <span class="font-bold"> Others:</span>{" "}
                      <span className="italic">Includes</span>
                      <ul class="list-disc pl-4">
                        <li>A Handicrafts & Textile </li>
                        <li>B FMCG </li>
                        <li>C Solar & Renewable Energy </li>
                        <li>D Leather / Footwear /Manufacturer </li>
                        <li>E Perfume & Incense Stick </li>
                        <li>F Export / Import Consultancy </li>
                        <li>G Service sector Fire Safety </li>
                      </ul>
                    </li>

                    {/* Travel & Transportation Section */}
                    <li class="cursor-pointer mb-3 hover:shadow-md p-3 rounded-md">
                      <span class="font-bold">Travel & Transportation:</span>{" "}
                      <span className="italic">Includes</span>
                      <ul class="list-disc pl-4">
                        <li>
                          A Hotel, Motel & Extended Stay Moving & Storage{" "}
                        </li>
                        <li>B Packaging & Shipping Transportation </li>
                        <li>C Travel & Tourism </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <ul className="list-disc text-[16px] md:text-[18px]">
                <li className="list-item">FCMG & Food Processing</li>
                <li className="list-item">
                  Textile, Leather, Footwear & Handicrafts
                </li>
                <li className="list-item">
                  Automotive, Motor Parts & Machinery & Tools
                </li>
                <li className="list-item">
                  Artificial jewellery, Beauty & Cosmetics
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
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectors;

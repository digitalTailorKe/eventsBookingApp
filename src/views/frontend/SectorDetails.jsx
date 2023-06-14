import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import PageTitle from "../../components/PageTitle";

const SectorDetails = () => {
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <div className="min-h-screen lg:py-8 text-[16px] lg:text-[18px] p-3">
      {/* Page title */}
      <PageTitle title="Indo east africa trade expo - sector details." />
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg px-4 md:px-8 lg:px-8 pb-6">
        <h2 className="text-xl md:text-3xl text-center p-5 font-semibold mb-6 border-b-2 border-b-gray-500 text-gray-500 flex justify-center items-center">
          Sector Details
        </h2>

        <div className="mb-5 flex">
          <Link
            onClick={handleGoBack}
            className="bg-gray-200 uppercase font-bold py-2 px-5 text-gray-700 rounded hover:bg-gray-500 hover:text-white flex justify-center items-center"
          >
            <FaArrowLeft className="inline-block mr-2 font-[300]" /> Back
          </Link>
        </div>

        <div className="text-[16px] md:text-[18px]">
          <div class="grid md:grid-cols-2 gap-4">
            {/* Automotive Section */}
            <div class="cursor-pointer hover:shadow-md p-3 rounded-md border">
              <div className="px-3">
                <span class="font-bold">Automotive:</span>{" "}
                <span className="italic">Includes</span>
              </div>
              <hr className="my-3" />
              <ul class="list-disc pl-4 text-gray-500">
                <li>Auto Accessories/ Motor Parts</li>
                <li>Tyre Monitoring System</li>
                <li>Detail & Carwash</li>
                <li>Sales & Repair Rental & Leasing</li>
                <li>Service, Repair & Parts Towina</li>
                <li>Lubricant</li>
              </ul>
            </div>

            {/*  Others Section */}
            <div class="cursor-pointer hover:shadow-md p-3 rounded-md border">
              <div className="px-3">
                <span class="font-bold"> Others:</span>{" "}
                <span className="italic">Includes</span>
              </div>
              <hr className="my-3" />
              <ul class="list-disc pl-4 text-gray-500">
                <li>Handicrafts & Textile </li>
                <li>FMCG </li>
                <li>Solar & Renewable Energy </li>
                <li>Leather / Footwear /Manufacturer </li>
                <li>Perfume & Incense Stick </li>
                <li>Export / Import Consultancy </li>
                <li>Service sector Fire Safety </li>
              </ul>
            </div>

            {/* Home & Garden Section */}
            <div class="cursor-pointer hover:shadow-md p-3 rounded-md border">
              <div className="px-3">
                <span class="font-bold">Home & Garden:</span>{" "}
                <span className="italic">Includes</span>
              </div>
              <hr className="my-3" />
              <ul class="list-disc pl-4 text-gray-500">
                <li>Antiques & Collectibles Cleaning</li>
                <li>Crafts, & Sports </li>
                <li>Home Furnishings</li>
                <li>Home Goods</li>
                <li>Pest Control</li>
                <li>Pool Supplies & Service Security System & G Services</li>
              </ul>
            </div>

            {/* Food & Dining Section */}
            <div class="cursor-pointer hover:shadow-md p-3 rounded-md border">
              <div className="px-3">
                <span class="font-bold">Food & Dining:</span>{" "}
                <span className="italic">Includes</span>
              </div>
              <hr className="my-3" />
              <ul class="list-disc pl-4 text-gray-500">
                <li>
                  Desserts, Catering & Supplies Fast Food & Carry Out Grocery,
                  Beverage
                </li>
                <li>Education Educational Resources </li>
                <li>Professional Education </li>
                <li>International Consultancy </li>
              </ul>
            </div>

            {/* Computer & Electronics Section */}
            <div class="cursor-pointer hover:shadow-md p-3 rounded-md border">
              <div className="px-3">
                <span class="font-bold">Computers & Electronics:</span>{" "}
                <span className="italic">Includes</span>
              </div>
              <hr className="my-3" />
              <ul class="list-disc pl-4 text-gray-500">
                <li>Computer Programming & Support</li>
                <li>Consumer Electronics & Accessories</li>
              </ul>
            </div>

            {/* Manufacturing, Wholesale, Distribution */}
            <div class="cursor-pointer hover:shadow-md p-3 rounded-md border">
              <div className="px-3">
                <span class="font-bold">
                  Manufacturing, Wholesale, Distribution:
                </span>{" "}
                <span className="italic">Includes</span>
              </div>
              <hr className="my-3" />
              <ul class="list-disc pl-4 text-gray-500">
                <li>Distribution, Import/ Export </li>
                <li>
                  Manufacturing (Iron & Steel/ Electrical Meter & Box / PVC
                  Pipes/ Electrolytes / Detergent) Wholesale
                </li>
              </ul>
            </div>

            {/* Construction & Contractors */}
            <div class="cursor-pointer hover:shadow-md p-3 rounded-md border">
              <div className="px-3">
                <span class="font-bold">Construction & Contractors:</span>{" "}
                <span className="italic">Includes</span>
              </div>
              <hr className="my-3" />
              <ul class="list-disc pl-4 text-gray-500">
                <li>Architects, Landscape Architects, Engineers &</li>
                <li>Surveyors Blasting & Demolition</li>
                <li>Building Materials & Supplies Construction</li>
                <li>Companies Electricians</li>
                <li>Engineer, Survey Environmental Assessments nspectors</li>
                <li>Plaster & Concrete Plumbers</li>
                <li>Roofers</li>
              </ul>
            </div>

            {/* Personal Care & Services Section */}
            <div class="cursor-pointer hover:shadow-md p-3 rounded-md border">
              <div className="px-3">
                <span class="font-bold">Personal Care & Services:</span>{" "}
                <span className="italic">Includes</span>
              </div>
              <hr className="my-3" />
              <ul class="list-disc pl-4 text-gray-500">
                <li>Animal Care </li>
                <li>Supplies Barber </li>
                <li>Beauty Salons </li>
                <li>Beauty Supplies</li>
                <li>Dry Cleaners </li>
                <li>Laundromats Exercise </li>
                <li>Fitness</li>
                <li>Massage </li>
              </ul>
            </div>

            {/* Education Section */}
            <div class="cursor-pointer hover:shadow-md p-3 rounded-md border">
              <div className="px-3">
                <span class="font-bold">Education:</span>{" "}
                <span className="italic">Includes</span>
              </div>
              <hr className="my-3" />
              <ul class="list-disc pl-4 text-gray-500">
                <li>Adult & Continuing Education Early Child hood </li>
                <li>Education Educational Resources </li>
                <li>Professional Education </li>
                <li>International Consultancy </li>
              </ul>
            </div>

            {/* Merchants (Retail) Section */}
            <div class="cursor-pointer hover:shadow-md p-3 rounded-md border">
              <div className="px-3">
                <span class="font-bold">Merchants (Retail):</span>{" "}
                <span className="italic">Includes</span>
              </div>
              <hr className="my-3" />
              <ul class="list-disc pl-4 text-gray-500">
                <li>Cards & Gifts </li>
                <li>Clothing & Accessories </li>
                <li>Department Stores, Sporting Goods General </li>
                <li>Jewelry Shoes </li>
              </ul>
            </div>

            {/* Entertainment Section */}
            <div class="cursor-pointer hover:shadow-md p-3 rounded-md border">
              <div className="px-3">
                <span class="font-bold">Entertainment:</span>{" "}
                <span className="italic">Includes</span>
              </div>
              <hr className="my-3" />
              <ul class="list-disc pl-4 text-gray-500">
                <li>Event Planners</li>
              </ul>
            </div>

            {/* Health & Medicine Section */}
            <div class="cursor-pointer hover:shadow-md p-3 rounded-md border">
              <div className="px-3">
                <span class="font-bold">Health & Medicine:</span>{" "}
                <span className="italic">Includes</span>
              </div>
              <hr className="my-3" />
              <ul class="list-disc pl-4 text-gray-500">
                <li>Acupuncture</li>
                <li>Assisted Living & Home Health Care Audiologist</li>
                <li>Chiropractic</li>
                <li>Clinics & Medical Centers Dental</li>
                <li>Diet & Nutrition </li>
                <li>Pharmaceutical & </li>
                <li>Laboratory,Imaging & Diagnostic Massage Therapy</li>
                <li>Mental Health Nurse</li>
                <li>Optical</li>
                <li>Pharmacy, Drug & Vitamin Stores Physical </li>
                <li>Therapy</li>
                <li>Physicians & Assistants Podiatry</li>
                <li>Animal Hospital</li>
                <li>Veterinary & Animal Surgeons</li>
              </ul>
            </div>

            {/* Legal & Financial Section */}
            <div class="cursor-pointer hover:shadow-md p-3 rounded-md border">
              <div className="px-3">
                <span class="font-bold">Legal & Financial:</span>{" "}
                <span className="italic">Includes</span>
              </div>
              <hr className="my-3" />
              <ul class="list-disc pl-4 text-gray-500">
                <li>Accountant ts Attorneys</li>
              </ul>
            </div>

            {/* Real Estate Section */}
            <div class="cursor-pointer hover:shadow-md p-3 rounded-md border">
              <div className="px-3">
                <span class="font-bold">Real Estate:</span>{" "}
                <span className="italic">Includes</span>
              </div>
              <hr className="my-3" />
              <ul class="list-disc pl-4 text-gray-500">
                <li>Agencies & Brokerly</li>
              </ul>
            </div>

            {/* Business Support & Supplies Section */}
            <div class="cursor-pointer hover:shadow-md p-3 rounded-md border">
              <div className="px-3">
                <span class="font-bold">Business Support & Supplies:</span>{" "}
                <span className="italic">Includes</span>
              </div>
              <hr className="my-3" />
              <ul class="list-disc pl-4 text-gray-500">
                <li>Consultants Employment Agency</li>
                <li>Marketing & Communications</li>
                <li>Office Supplies/ Furniture/ Printing & Packing</li>
              </ul>
            </div>

            {/* Travel & Transportation Section */}
            <div class="cursor-pointer hover:shadow-md p-3 rounded-md border">
              <div className="px-3">
                <span class="font-bold">Travel & Transportation:</span>{" "}
                <span className="italic">Includes</span>
              </div>
              <hr className="my-3" />
              <ul class="list-disc pl-4 text-gray-500">
                <li>Hotel, Motel & Extended Stay Moving & Storage </li>
                <li>Packaging & Shipping Transportation </li>
                <li>Travel & Tourism </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorDetails;

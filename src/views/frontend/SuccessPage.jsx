import { BiCheckCircle } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import ReactPixel from "react-facebook-pixel";


const SuccessPage = () => {
  ReactPixel.pageView();
  
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <div className="min-h-screen grid place-items-center lg:py-8 text-[16px] lg:text-[18px] p-3">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg px-4 md:px-8 lg:px-8 pb-6">
        <Link to="/">
          <img
            className="text-center"
            style={{ width: "150px", textAlign: "center", margin: "10px auto" }}
            src="/imgs/logo.png"
            alt=""
          />
        </Link>
        <h2 className="text-xl md:text-3xl text-center p-5 font-semibold mb-6 border-b-2 md:border-b-4 border-b-green-500 text-green-500 flex justify-center items-center">
          Registration Successful
        </h2>

        {/* Message Area */}
        <div className="flex flex-col gap-4 bg-green-100 p-5 rounded-2xl md:w-[450px]">
          <div className="flex gap-4 items-center text-green-500">
            <BiCheckCircle size={89} />
            <div className="">
              <p className="text-[18px] md:text-[25px] text-green-900 font-[300]">
                Thank you for registering. We look forward to seeing you at the
                event.
              </p>
            </div>
          </div>
        </div>

        <div className="my-5">
          <Link
            onClick={handleGoBack}
            className="bg-red-200 font-bold uppercase py-2 px-5 text-red-700 rounded hover:bg-red-500 hover:text-white flex justify-center items-center"
          >
            <FaArrowLeft className="inline-block mr-2 font-[300]" /> Register
            Another.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;

import { BiLockOpen } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import ManualRegistrationForm from "../../components/backend/ManualRegistrationForm";
import PageTitle from "../../components/PageTitle";

const OrganizersRegisterAttendees = () => {
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <div className="min-h-screen lg:py-8 text-[16px] lg:text-[18px]">
      <PageTitle title="Register Attendees" />
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg px-4 md:px-8 lg:px-8 pb-6">
        <h2 className="text-3xl text-center p-10 font-semibold mb-6 border-b-4 border-b-blue-500 text-blue-500 flex justify-center items-center">
          <BiLockOpen className="inline-block font-bold mr-2" />
          Register New User.
        </h2>

        <div className="mb-5">
          <Link
            onClick={handleGoBack}
            className="bg-blue-200 py-2 px-5 text-blue-700 rounded hover:bg-blue-500 hover:text-white font-[700] flex justify-center items-center"
          >
            <FaArrowLeft className="inline-block mr-2 font-[300]" /> Back
          </Link>
        </div>

        {/* Register form Area */}
        <div className="">
          <ManualRegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default OrganizersRegisterAttendees;

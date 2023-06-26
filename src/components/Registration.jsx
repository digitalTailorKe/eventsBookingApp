import { FaUnlockAlt } from "react-icons/fa";
import RegistrationForm from "./RegistrationForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  return (
    <div className="">
      <h4 className="flex gap-4 items-center text-[#153148] text-[16px] md:text-[22px] font-[400] uppercase pb-2">
        <FaUnlockAlt style={{ fontSize: "21px" }} /> Pre-register Now for a Free VIP Ticket & Personalized Badge!<span className="text-red-500">Only 3 Days Left!</span>
      </h4>

      <hr className="" />

      {/* Registration Body */}
      <div className="mt-5">
        <div className="mt-5">
          <RegistrationForm />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Registration;

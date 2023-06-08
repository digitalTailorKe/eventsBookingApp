import React from "react";
import Organizer from "../../components/users/Organizer";

const Organizers = () => {
  return (
    <div className="bg-slate-300 pt-2">
      {/* Container Section */}
      <div className="px-2">
        <div className="container w-full lg:max-w-screen-lg lg:mx-auto px-2 mt-3 rounded-2xl">
          {/* Hero Banner Component */}
          <Organizer />
        </div>
      </div>
    </div>
  );
};

export default Organizers;

import React from 'react'
import Organizer from "../../components/users/Organizer";

const Dashboard = () => {
  return (
    <div className="bg-slate-300 pt-2 pb-5">
      {/* Container Section */}
      <div className="px-2">
        <div className="container w-full lg:max-w-screen-lg lg:mx-auto px-2 mt-3 rounded-2xl">
          {/* Hero Banner Component */}
          <Organizer />
        </div>
      </div>
    </div>
  );
}

export default Dashboard
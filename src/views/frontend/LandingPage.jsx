import React from "react";

import {
  SiteNav,
  HeroBanner,
  Registration,
  Location,
  AboutEvent,
  Hosts,
  Footer,
  Organizers,
  Partners,
  MarketingPartner,
  WhyImportFromIndia,
} from "../../components";

const LandingPage = () => {
  return (
    <div className="bg-slate-300 min-h-screen pt-2">
      {/* Site Nav Component */}
      {/* <SiteNav /> */}

      {/* Container Section */}
      <div className="px-2">
        <div className="container bg-[#fff] w-full lg:max-w-screen-lg lg:mx-auto px-2 min-h-full mt-3 rounded-2xl">
          {/* Hero Banner Component */}
          <HeroBanner />
        </div>
      </div>

      {/* Registration Section */}
      <div className="container w-full lg:max-w-screen-lg lg:mx-auto px-2 md:px-0 mt-3">
        <div className="bg-[#fff] p-5 rounded-2xl">
          {/* Registration Component */}
          <Registration />
        </div>
      </div>

      {/* Location Section */}
      <div className="container w-full lg:max-w-screen-lg lg:mx-auto px-2 md:px-0 mt-3">
        <div className="bg-[#fff] p-5 rounded-2xl">
          {/* Location Component */}
          <Location />
        </div>
      </div>

      {/* About Event & Hosts */}
      <div className="container w-full lg:max-w-screen-lg lg:mx-auto px-2 md:px-0 flex flex-col md:flex-row mt-3 gap-4">
        <div className="bg-[#fff] p-5 rounded-2xl flex-1">
          {/* About Event Component */}
          <AboutEvent />
        </div>

        {/* <div className="bg-[#fff] p-5 dark:bg-[#8449dc] dark:text-white rounded-2xl"> */}
        {/* Hosts Component */}
        {/* <Hosts /> */}
        {/* </div> */}
      </div>

      {/* Why Import From India */}
      <div className="container w-full lg:max-w-screen-lg lg:mx-auto px-2 md:px-0 flex flex-col md:flex-row mt-3 gap-4">
        <div className="bg-[#fff] p-5 rounded-2xl flex-1">
          {/* Organizers Component */}
          <WhyImportFromIndia />
        </div>
      </div>

      {/* Organizers of the Event */}
      <div className="container w-full lg:max-w-screen-lg lg:mx-auto px-2 md:px-0 flex flex-col md:flex-row mt-3 gap-4">
        <div className="bg-[#fff] p-5 rounded-2xl flex-1">
          {/* Organizers Component */}
          <Organizers />
        </div>
      </div>

      {/* Event Partners */}
      <div className="container w-full lg:max-w-screen-lg lg:mx-auto px-2 md:px-0 flex flex-col md:flex-row mt-3 gap-4">
        <div className="bg-[#fff] p-5 rounded-2xl flex-1">
          {/* Partners Component */}
          <Partners />
        </div>
      </div>

      {/* Marketing Partners */}
      <div className="container w-full lg:max-w-screen-lg lg:mx-auto px-2 md:px-0 flex flex-col md:flex-row mt-3 gap-4">
        <div className="bg-[#fff] p-5 rounded-2xl flex-1">
          {/* Marketing Component */}
          <MarketingPartner />
        </div>
      </div>

      <hr className="container w-full lg:max-w-screen-lg lg:mx-auto px-2 md:px-0 mt-10" />

      {/* Footer Section */}
      <div className="px-2">
        <div className="container w-full lg:max-w-screen-lg lg:mx-auto px-2 md:px-0">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

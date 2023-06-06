import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  const isDarkMode = true;

  return (
    <div className="pb-3">
      <div className="flex-col flex md:flex-row justify-between items-center">
        {/* Footer Links */}
        <div className="mt-3">
          <ul className="flex gap-4 items-center">
            <li className="text-[#153148] text-[14px] font-[400] mb-2 md:text-[21px]">
              <span className="text-[18px]" href="#">
                For more info contact{" "}
                <a
                  href="mailto:info@indoeastafricaexpo.org"
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  info@indoeastafricaexpo.org
                </a>
              </span>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="my-3 flex gap-4">
          <SocialIcon
            url="https://twitter.com/IndoEastAfrica"
            // bgColor={isDarkMode ? "#ffffff" : "#153148"} // Change color based on mode
          />
          <SocialIcon
            url="https://www.instagram.com/indoeastafrica/"
            // bgColor={isDarkMode ? "#ffffff" : "#153148"} // Change color based on mode
          />
          <SocialIcon
            url="https://www.linkedin.com/company/indoaastafrica/"
            // bgColor={isDarkMode ? "#ffffff" : "#153148"} // Change color based on mode
          />
          <SocialIcon
            url="https://www.facebook.com/IndoEastAfrica"
            // bgColor={isDarkMode ? "#ffffff" : "#153148"} // Change color based on mode
          />
        </div>
      </div>

      <hr />
      <div className="flex justify-center my-4">
        <p>
          Copyright: &copy;2023 All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

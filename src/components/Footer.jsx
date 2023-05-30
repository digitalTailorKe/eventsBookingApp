import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="pb-3">
      <div className="flex-col flex md:flex-row justify-between items-center">
        {/* Footer Links */}
        <div className="mt-3">
          <ul className="flex gap-4 items-center">
            <li className="text-[#153148] text-[14px] font-[400] mb-2 md:text-[21px] dark:text-slate-100 hover:underline">
              <a className="text-[18px]" href="#">
                Events
              </a>
            </li>
            <li className="text-[#153148] text-[14px] font-[400] mb-2 md:text-[21px] dark:text-slate-100 hover:underline">
              <a className="text-[18px]" href="#">
                Help
              </a>
            </li>
            <li className="text-[#153148] text-[14px] font-[400] mb-2 md:text-[21px] dark:text-slate-100 hover:underline">
              <a className="text-[18px]" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="my-3 flex gap-4">
          <SocialIcon
            url="https://www.linkedin.com/in/dennis-otieno-908b07aa/"
            bgColor="#8449dc"
          />
          <SocialIcon
            url="https://www.facebook.com/mohanezz/"
            bgColor="#8449dc"
          />
          <SocialIcon url="https://web.whatsapp.com/" bgColor="#8449dc" />
          <SocialIcon url="https://www.youtube.com/" bgColor="#8449dc" />
          <SocialIcon url="https://www.instagram.com/" bgColor="#8449dc" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

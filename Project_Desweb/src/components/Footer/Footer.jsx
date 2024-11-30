import React from "react";
import footerLogo from "../../assets/logo.svg";
import {FaFacebook,FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-black dark:text-white">
       <footer className="bg-gray-100 dark:bg-gray-900 py-8 text-black dark:text-gray-300">
      <div className="container px-2 md:px-4">
        <div className="gap-1 md:gap-8 flex justify-between items-center">
          <div className="flex flex-row">
            <div className="mb-4 md:mb-0">
              <img src={footerLogo} alt="Logo" className="h-[80px] sm:h-[130px] lg:h-[179px]" />
            </div>

            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h3 className="text-[12px] sm:text-[26px] font-bold mb-2">Social Network</h3>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <FaInstagram className="text-pink-500" />
                  <span className="text-[8px] sm:text-[15px] md:text-[19px] font-semibold">startupacademy.id</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaFacebook className="text-blue-600" />
                  <span className="text-[8px] sm:text-[15px] md:text-[19px] font-semibold">startupacademy.id.facebook.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center md:text-left space-y-2">
            <a href="#" className="text-[8px] sm:text-[15px] md:text-[19px] font-semibold block hover:underline dark:hover:text-gray-400">Tentang Kami</a>
            <a href="#" className="text-[8px] sm:text-[15px] md:text-[19px] font-semibold block hover:underline dark:hover:text-gray-400">Hubungi Kami</a>
            <a href="#" className="text-[8px] sm:text-[15px] md:text-[19px] font-semibold block hover:underline dark:hover:text-gray-400">FAQ</a>
          </div>
        </div>

        <div className="mt-8 border-t pt-4 flex items-center justify-between text-[8px] sm:text-sm text-black">
          <span className="dark:text-gray-500">© copyright 2024 | Startup Academy Indonesia</span>
          <div>
            <a href="#" className="hover:underline">Terms</a> | <a href="#" className="hover:underline">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;

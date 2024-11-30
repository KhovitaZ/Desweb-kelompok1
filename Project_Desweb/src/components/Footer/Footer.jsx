import React from "react";
import footerLogo from "../../assets/logo.svg";
import {FaFacebook,FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-black dark:text-white">
       <footer className="bg-gray-100 dark:bg-gray-900 py-8 text-black dark:text-gray-300">
      <div className="container mx-auto px-4 md:px-8">
        <div className="gap-6 flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="flex flex-row gap-4 items-center md:items-start">
            <div className="mb-4 md:mb-0">
              <img src={footerLogo} alt="Logo" className="h-[60px] sm:h-[100px] md:h-[130px] lg:h-[150px]" />
            </div>

            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h3 className="text-[12px] sm:text-[18px] font-bold mb-2">Social Network</h3>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <FaInstagram className="text-pink-500 text-lg md:text-xl" />
                  <span className="text-[10px] sm:text-[15px] md:text-[18px] font-semibold">startupacademy.id</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaFacebook className="text-blue-600 text-lg md:text-xl" />
                  <span className="text-[10px] sm:text-[15px] md:text-[18px] font-semibold">startupacademy.id.facebook.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center md:text-left space-y-2">
            <a href="#" className="text-[10px] sm:text-[15px] md:text-[18px] font-semibold block hover:underline dark:hover:text-gray-400">Tentang Kami</a>
            <a href="#" className="text-[10px] sm:text-[15px] md:text-[18px] font-semibold block hover:underline dark:hover:text-gray-400">Hubungi Kami</a>
            <a href="#" className="text-[10px] sm:text-[15px] md:text-[18px] font-semibold block hover:underline dark:hover:text-gray-400">FAQ</a>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-300 dark:border-gray-700 pt-4 flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-sm text-black dark:text-gray-500">
          <span className="dark:text-gray-500 text-center sm:text-left">© copyright 2024 | Startup Academy Indonesia</span>
          <div className="mt-2 sm:mt-0">
            <a href="#" className="hover:underline">Terms</a> | <a href="#" className="hover:underline">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;

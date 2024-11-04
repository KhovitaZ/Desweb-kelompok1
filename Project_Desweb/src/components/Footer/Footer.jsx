import React from "react";
import footerLogo from "../../assets/logo.svg";
import Banner from "../../assets/website/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Footer = () => {
  return (
    <div style={BannerImg} className="text-black dark:text-white">
       <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-[minmax(200px,_1fr)_minmax(600px,_1fr)_minmax(400px,_1fr)] items-center">
          <div className="mb-4 md:mb-0">
            <img src={footerLogo} alt="Logo" className="h-[179px]" />
          </div>

          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-[26px] font-bold mb-2">Social Network</h3>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <FaInstagram className="text-pink-500" />
                <span className="text-[19px] font-semibold">startupacademy.id</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaFacebook className="text-blue-600" />
                <span className="text-[19px] font-semibold">startupacademy.id.facebook.com</span>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left space-y-2">
            <a href="#" className="text-[19px] font-semibold block hover:underline">Tentang Kami</a>
            <a href="#" className="text-[19px] font-semibold block hover:underline">Hubungi Kami</a>
            <a href="#" className="text-[19px] font-semibold block hover:underline">FAQ</a>
          </div>
        </div>

        <div className="mt-8 border-t pt-4 flex items-center justify-between text-sm text-black">
          <span>© copyright 2024 | Startup Academy Indonesia</span>
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

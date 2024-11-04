import React from "react";
import footerLogo from "../../assets/logo.svg";
import Banner from "../../assets/website/footer-pattern.png";
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



export default Footer;


<footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <img src="/path-to-your-logo.png" alt="Logo" className="h-16" />
          </div>

          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-bold mb-2">Social Network</h3>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <FaInstagram className="text-pink-500" />
                <span>startupacademy.id</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaFacebook className="text-blue-600" />
                <span>startupacademy.id.facebook.com</span>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left space-y-2">
            <a href="#" className="block hover:underline">Tentang Kami</a>
            <a href="#" className="block hover:underline">Hubungi Kami</a>
            <a href="#" className="block hover:underline">FAQ</a>
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
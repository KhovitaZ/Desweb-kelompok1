import React from "react";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom"; // Import Link dari React Router
import DarkMode from "./DarkMode";


const Navbar = () => {
  return (
    <div className="fixed h-[75px] md:h-[75px] lg:h-[84px] w-full bg-[#55B0F1] flex flex-row justify-between items-center top-0 z-40">
      <div className="flex flex-row justify-start items-center">
        <div className="w-[50px] sm:w-[70px] md:w-[100px] lg:w-[150px]">
          <img src={Logo}/>
        </div>
        <div>
          <h1 className="font-semibold text-[12px] sm:text-[14px] md:text-[17px] lg:text-[24px] xl:text-[28px]">Startup Academy</h1>
        </div>
        <div className="hidden sm:flex text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] gap-2 md:gap-4 lg:gap-7 xl:gap-10 justify-center items-center pl-3 sm:pl-5">
          <a href="#homePage">Home</a>
          <a href="#program">Program</a>
          <a href="#event">Event</a>
          <a href="#berita">Berita</a>
          <a href="#FAQ">FAQ</a>
          <Link to="/langganan">Langganan</Link>
        </div>
      </div>
      
      <div className="flex flex-row justify-end items-center gap-2 sm:gap-3 md:gap-4 mr-2 sm:mr-4">
        <DarkMode />
        <Link to="/login">
          <button className="h-[35px] sm:h-[40px] w-[80px] sm:w-[90px] flex justify-center items-center bg-gradient-to-r from-[#FFEEAE] to-[#FDD22F] text-black font-bold py-2 sm:py-2 px-3 sm:px-4 rounded-[6px] sm:rounded-[8px] hover:from-yellow-500 hover:to-yellow-600">
            <p className="text-[10px] sm:text-[12px] md:text-[14px]">Masuk</p>
          </button>
        </Link>
        <Link to="/daftar">
          <button className="h-[35px] sm:h-[40px] w-[80px] sm:w-[90px] flex justify-center items-center bg-gradient-to-r from-[#FFEEAE] to-[#FDD22F] text-black font-bold py-2 sm:py-2 px-3 sm:px-4 rounded-[6px] sm:rounded-[8px] hover:from-yellow-500 hover:to-yellow-600">
            <p className="text-[10px] sm:text-[12px] md:text-[14px]">Daftar</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom"; // Import Link dari React Router
import DarkMode from "./DarkMode";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State untuk mengontrol hamburger menu

  return (
    <div className="dark:text-white fixed h-[75px] md:h-[75px] lg:h-[84px] w-full bg-[#55B0F1] dark:bg-gray-700 flex flex-row justify-between items-center top-0 z-40">
      {/* Logo dan Judul */}
      <div className="flex flex-row justify-start items-center">
        <div className="w-[70px] md:w-[100px] lg:w-[150px]">
          <img src={Logo} alt="Logo" />
        </div>
        <div>
          <h1 className="font-semibold text-[14px] md:text-[17px] lg:text-[24px] xl:text-[28px]">
            Startup Academy
          </h1>
        </div>
      </div>

      {/* Menu untuk layar besar */}
      <div className="hidden sm:flex text-[16px] md:text-[12px] lg:text-[16px] gap-2 md:gap-2 lg:gap-7 xl:gap-10 justify-center items-center">
        <a href="/">Home</a>
        <Link to="/subProgram">Program</Link>
        <Link to="/subEvent">Event</Link>
        <Link to="/beritaUtama">Berita</Link>
        <a href="/">FAQ</a>
        <Link to="/langganan">Langganan</Link>
      </div>

      {/* DarkMode dan Button untuk layar besar */}
      <div className="hidden sm:flex flex-row justify-end items-center gap-3 mr-4">
        <DarkMode />
        <Link to="/login">
          <button className="h-[40px] w-[90px] flex justify-center items-center bg-gradient-to-r from-[#FFEEAE] to-[#FDD22F] text-black font-bold py-2 px-4 rounded-[8px] hover:from-yellow-500 hover:to-yellow-600">
            <p>Masuk</p>
          </button>
        </Link>
        <Link to="/daftar">
          <button className="h-[40px] w-[90px] flex justify-center items-center bg-gradient-to-r from-[#FFEEAE] to-[#FDD22F] text-black font-bold py-2 px-4 rounded-[8px] hover:from-yellow-500 hover:to-yellow-600">
            <p>Daftar</p>
          </button>
        </Link>
      </div>

      {/* Hamburger Button */}
      <div className="sm:hidden flex flex-row items-center mr-4">
      <DarkMode />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-black dark:text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Menu untuk layar kecil */}
      {menuOpen && (
        <div className="absolute top-[75px] left-0 w-full bg-[#55B0F1] dark:bg-gray-700 flex flex-col items-start px-4 py-2 space-y-2 z-30">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/subProgram" onClick={() => setMenuOpen(false)}>
            Program
          </Link>
          <Link to="/subEvent" onClick={() => setMenuOpen(false)}>
            Event
          </Link>
          <Link to="/beritaUtama" onClick={() => setMenuOpen(false)}>
            Berita
          </Link>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            FAQ
          </Link>
          <Link to="/langganan" onClick={() => setMenuOpen(false)}>
            Langganan
          </Link>
          <Link to="/login" onClick={() => setMenuOpen(false)}>
            <button className="h-[40px] w-full flex justify-center items-center bg-gradient-to-r from-[#FFEEAE] to-[#FDD22F] text-black font-bold py-2 px-4 rounded-[8px] hover:from-yellow-500 hover:to-yellow-600">
              Masuk
            </button>
          </Link>
          <Link to="/daftar" onClick={() => setMenuOpen(false)}>
            <button className="h-[40px] w-full flex justify-center items-center bg-gradient-to-r from-[#FFEEAE] to-[#FDD22F] text-black font-bold py-2 px-4 rounded-[8px] hover:from-yellow-500 hover:to-yellow-600">
              Daftar
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

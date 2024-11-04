import React from "react";
import imageHome from "../../assets/homepage/home.svg";

import Navbar from "../Navbar/Navbar";
import Program from "../Program/Program";
import Event from "../Event/Event";
import Berita from "../Berita/Berita";
import FAQ from "../FAQ/FAQ";
import Footer from "../Footer/Footer";

const HomePage = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-row justify-between items-center mt-32 mx-14 gap-8">
        <div className="flex flex-col justify-start gap-5">
          <div>
            <h1 className="text-[37px] font-bold">Bangun Startup</h1>
            <h1 className="text-[37px] font-bold">Impianmu Bersama Kami!</h1>
            <p className="text-[16px] font-light">Jadilah Pengusaha handal dengan mempelajari strategi bisnis,</p>
            <p className="text-[16px] font-light">keuangan dan lebih banyak lagi di Startup Academy</p>
          </div>
          <div>
            <button className="h-[40px] w-[217px] text-[16px] font-medium flex justify-center items-center bg-gradient-to-r from-[#FFEEAE] to-[#FDD22F] text-black py-2 px-4 rounded-[8px] hover:from-yellow-500 hover:to-yellow-600">
              <p>Mulai Belajar Sekarang</p>
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={imageHome} className="h-[58px] w-[443px] md:h-[158px] md:w-[543px] lg:h-[258px] lg:w-[643px] xl:h-[358px] xl:w-[743px]"/>
        </div>
      </div>
      <Program />
      <Event />
      <Berita />
      <FAQ />
      <Footer />
    </div>
  );
};

export default HomePage;

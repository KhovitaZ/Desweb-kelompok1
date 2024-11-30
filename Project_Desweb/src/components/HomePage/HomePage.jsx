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
    <div className="dark:bg-gray-900 dark:text-white">
      <Navbar />
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center mt-16 lg:mt-32 mx-6 md:mx-10 lg:mx-14 gap-8">
  {/* Bagian Teks */}
  <div className="flex flex-col justify-start gap-5 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
    <div>
      <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[37px] font-bold leading-snug">
        Bangun Startup <br className="block lg:hidden" />
        Impianmu Bersama Kami!
      </h1>
      <p className="text-[14px] md:text-[16px] font-light leading-relaxed">
        Jadilah Pengusaha handal dengan mempelajari strategi bisnis,
        keuangan dan lebih banyak lagi di Startup Academy.
      </p>
    </div>
    <div className="flex justify-center lg:justify-start">
      <button className="h-[40px] w-[200px] md:w-[217px] text-[14px] md:text-[16px] font-medium flex justify-center items-center bg-gradient-to-r from-[#FFEEAE] to-[#FDD22F] text-black py-2 px-4 rounded-[8px] hover:from-yellow-500 hover:to-yellow-600 transition duration-300 dark:from-gray-700 dark:to-gray-800 dark:text-white">
        <p>Mulai Belajar Sekarang</p>
      </button>
    </div>
  </div>

  {/* Bagian Gambar */}
  <div className="flex justify-center items-center">
    <img
      src={imageHome}
      alt="Home Illustration"
      className="h-[150px] w-[300px] sm:h-[200px] sm:w-[400px] md:h-[300px] md:w-[500px] lg:h-[350px] lg:w-[600px] xl:h-[400px] xl:w-[700px] transition duration-300"
    />
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

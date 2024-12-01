import React from "react";
import WebinarImage from "../../../assets/event/RekomendasiEvent/img1RE.svg";
import { FaFacebookF, FaWhatsapp, FaTelegramPlane, FaLink } from "react-icons/fa";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";

const WebinarDetail = () => {
  return (
    <div className="bg-[#F9F9F9] dark:bg-gray-900 dark:text-gray-200 mt-14">
      <Navbar />
      <div className="container mx-auto py-10 px-4 sm:px-8">
        {/* Bagian Atas */}
        <div className="bg-white dark:bg-gray-800 dark:text-gray-200 rounded-lg shadow-md p-6 flex flex-col sm:flex-row gap-6">
          {/* Gambar Webinar */}
          <div className="w-full sm:w-1/3 flex items-center justify-center">
            <img
              src={WebinarImage}
              alt="Webinar"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Detail Webinar */}
          <div className="w-full sm:w-2/3 flex flex-col">
            {/* Judul Webinar */}
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Go-To-Market Strategy for Startups
            </h1>

            {/* Informasi Kategori dan Harga */}
            <div className="mb-4">
              <p className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-2">
                <span className="font-medium">Kategori:</span> Webinar
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="font-medium text-red-500 dark:text-red-400 text-lg">
                    Rp185.000
                  </p>
                  <span className="text-sm text-gray-400 dark:text-gray-500 line-through">
                    Rp370.000
                  </span>
                </div>
                <Link to="/pembayaran">
                <button className="items-center px-6 bg-gradient-to-r from-[#FFEEAE] to-[#FDD22F] rounded-[50px] font-medium hover:bg-yellow-600 dark:hover:bg-yellow-500 transition h-[25px] dark:text-black">
                  Beli
                </button>
                </Link>
              </div>
            </div>

            {/* Detail Informasi Event */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
              <div>
                <p className="font-medium">Tanggal Event:</p>
                <p>Sabtu, 25 November 2024</p>
              </div>
              <div>
                <p className="font-medium">Waktu:</p>
                <p>10:00 - selesai</p>
              </div>
              <div>
                <p className="font-medium">Tempat:</p>
                <p>Webinar</p>
              </div>
            </div>

            {/* Bagian Share */}
            <div className="mt-4">
              <p className="font-medium mb-2">Share Event ini</p>
              <div className="flex gap-4 text-xl text-gray-600 dark:text-gray-300">
                <FaFacebookF className="text-[#395186] cursor-pointer" />
                <FaWhatsapp className="text-green-500 cursor-pointer" />
                <FaTelegramPlane className="text-blue-500 cursor-pointer" />
                <FaLink className="text-gray-800 dark:text-gray-200 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Bagian Deskripsi */}
        <div className="bg-white dark:bg-gray-800 dark:text-gray-200 rounded-lg shadow-md p-6 mt-6">
          <div className="text-gray-700 dark:text-gray-300 space-y-4 leading-relaxed">
            <p>
              📢 <strong>[Startup Academy Presenting]</strong> 📢
            </p>
            <h2 className="text-xl font-bold">
              💡 GO-TO-MARKET STRATEGY FOR STARTUPS 💡
            </h2>
            <p>
              Tema: <i>"Unlock Your Startup's Potential with a Winning Go-To-Market Strategy"</i> 📊
            </p>
            <p>
              Webinar akan diselenggarakan pada:
              <br />📅 Sabtu, 25 November 2024
              <br />⏰ 10:00 - selesai
              <br />📍 Zoom Meeting
              <br />💰 <strong>Free Registration</strong>
            </p>
            <p>
              ❗ Terbuka untuk Founder, Startup Enthusiasts, dan Investor ❗
            </p>
            <p>
              📜 <strong>Pembicara:</strong>
              <br />1. <strong>John Doe</strong>, CEO of TechStart
              <br />
              🎯 Topik: "Step-by-Step Guide to a Successful Go-To-Market Strategy"
              <br />2. <strong>Jane Smith</strong>, Marketing Expert
              <br />
              🎯 Topik: "Targeting the Right Audience & Boosting Market Penetration"
            </p>
            <p>
              📄 <strong>GET E-CERTIFICATE</strong> ❗
            </p>
            <p>
              Daftarkan segera dan raih peluang untuk mempercepat kesuksesan startup Anda! 🚀
            </p>
            <p>
              📲 <strong>CP:</strong>
              <br />1. [WA] 0812 3456 7890 | [LINE] startupacademy - Jane
              <br />2. [WA] 0856 7890 1234 | [LINE] support - Mark
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              #GoToMarketStrategy #StartupAcademy #GrowthHacking #BusinessStrategy
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WebinarDetail;
import React from "react";
import WebinarImage from "../../../assets/event/RekomendasiEvent/img3RE.svg";
import { FaFacebookF, FaWhatsapp, FaTelegramPlane, FaLink } from "react-icons/fa";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";

const WebinarDetail = () => {
  return (
    <div className="bg-[#F9F9F9] mt-14">
      <Navbar />
      <div className="container mx-auto py-10 px-4 sm:px-8">
        {/* Bagian Atas */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col sm:flex-row gap-6">
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
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              Go-To-Market Strategy for Startups
            </h1>

            {/* Informasi Kategori dan Harga */}
            <div className="mb-4">
              <p className="flex items-center gap-2 text-gray-600 mb-2">
                <span className="font-medium">Kategori:</span> Webinar
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <p className="font-medium text-red-500 text-lg">
                    Rp185.000
                  </p>
                  <span className="text-sm text-gray-400 line-through">
                    Rp370.000
                  </span>
                </div>
                <Link to="/pembayaran">
                <button className="items-center px-6 bg-gradient-to-r from-[#FFEEAE] to-[#FDD22F] rounded-[50px] font-medium hover:bg-yellow-600 transition h-[25px]">
                  Beli
                </button>
                </Link>
              </div>
            </div>

            {/* Detail Informasi Event */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 mb-4">
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
              <div className="flex gap-4 text-xl text-gray-600">
                <FaFacebookF className="text-[#395186] cursor-pointer" />
                <FaWhatsapp className="text-green-500 cursor-pointer" />
                <FaTelegramPlane className="text-blue-500 cursor-pointer" />
                <FaLink className="text-gray-800 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Bagian Deskripsi */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
        <div className="text-gray-700 space-y-4 leading-relaxed">
            <p>
            📢 <strong>[E-commerce Workshop]</strong> 📢
            </p>
            <h2 className="text-xl font-bold">
            💡 MASTERING E-COMMERCE STRATEGIES FOR 2024 💡
            </h2>
            <p>
            Tema: <i>"Unlock the Secrets to Building a Profitable Online Store"</i> 🛒
            </p>
            <p>
            Workshop akan diselenggarakan pada:
            <br />📅 Jumat, 15 Desember 2024
            <br />⏰ 09:00 AM - 01:00 PM
            <br />📍 Zoom Meeting
            <br />💰 <strong>Free Registration</strong>
            </p>
            <p>
            ❗ Terbuka untuk Entrepreneurs, Small Business Owners, dan E-commerce Enthusiasts ❗
            </p>
            <p>
            📜 <strong>Pembicara:</strong>
            <br />1. <strong>Alex Johnson</strong>, Founder of ShopSmart
            <br />
            🎯 Topik: "How to Launch and Scale Your Online Business"
            <br />2. <strong>Emma Lee</strong>, E-commerce Marketing Strategist
            <br />
            🎯 Topik: "Driving Sales with Effective Marketing Campaigns"
            </p>
            <p>
            📄 <strong>GET E-CERTIFICATE</strong> ❗
            </p>
            <p>
            Daftarkan segera untuk memperluas wawasan dan keterampilan Anda dalam mengelola bisnis e-commerce yang sukses! 🚀
            </p>
            <p>
            📲 <strong>CP:</strong>
            <br />1. [WA] 0812 3456 7890 | [Email] workshop@ecommercehub.com
            </p>
            <p className="text-gray-500">
            #EcommerceWorkshop #OnlineStoreSuccess #DigitalBusiness #GrowthStrategy
            </p>
        </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default WebinarDetail;

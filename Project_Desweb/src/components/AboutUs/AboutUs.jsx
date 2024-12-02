import React from "react";
import imageHome from "../../assets/homepage/home.svg";

import Navbar from "../Navbar/Navbar";

const App = () => {
  return (
    <div className="bg-gradient-to-b from-[#EEEEEE] via-[#D4EDFF] to-[#50B5FF]">
      <Navbar />
      {/* Hero Section */}
      <div className="relative mt-24">
        <div
          className="w-full h-96 bg-cover bg-center m-10"
          style={{
            backgroundImage: `url(${imageHome})`,
          }}
        ></div>
        <div className="text-center py-6">
          <h1 className="font-prompt text-3xl font-semibold">STARTUP ACADEMY</h1>
        </div>
      </div>

      {/* About Us Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 font-regular">
            Aplikasi <strong>"Startup Academy"</strong> dirancang untuk membantu
            para pemula dalam dunia startup, juga kepada pengguna yang ingin
            memperdalam pemahaman mengenai literasi keuangan. Terdapat panduan
            yang mudah diakses, sehingga dapat menjadi solusi efektif bagi yang
            ingin memulai perjalanan kewirausahaan.
          </p>
        </div>
      </section>

      {/* Berita Terbaru Section */}
      <section className="bg-[#EEEEEE] py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap md:flex-nowrap justify-between">
          {/* Berita Terkini */}
          <div className="w-full md:w-1/2 md:pr-6">
            <h2 className="text-xl font-bold mb-6">Berita Terkini</h2>
            {/* Berita Cards */}
            <div className="bg-white shadow-md rounded-md mb-10 p-6">
              <h3 className="text-lg font-semibold mb-6">Peluncuran Fitur Baru di Startup Academy</h3>
              <p className="text-gray-600 mb-4">
                Dengan bangga kami meluncurkan fitur baru di Startup Academy untuk
                memberikan lebih banyak kenyamanan bagi pengguna kami.
              </p>
              <button className="text-blue-500 hover:underline">Lihat selengkapnya</button>
            </div>
            <div className="bg-white shadow-md rounded-md mb-4 p-6">
              <h3 className="text-lg font-semibold mb-6">
                Workshop Eksklusif: Strategi Pitching untuk Mendapatkan Pendanaan
              </h3>
              <p className="text-gray-600 mb-4">
                Workshop Eksklusif: Strategi Pitching untuk Mendapatkan Pendanaan.
                Temukan cara agar proposal Anda menarik investor!
              </p>
              <button className="text-blue-500 hover:underline">Lihat selengkapnya</button>
            </div>
          </div>

          {/* Tips & Trick */}
          <div className="w-full md:w-1/2 md:pl-6">
            <h2 className="text-xl font-bold mb-6">Tips & Trick</h2>
            {/* Tips Cards */}
            <div className="bg-blue-50 shadow-md rounded-md p-6 mb-4">
              <h3 className="text-lg font-regular mb-4">
                Mau tau cara mengelola waktu untuk pendiri startup?
              </h3>
              <hr className="border-dashed border-gray-300 mb-4" />
              <h3 className="text-lg font-regular mb-4">
                Gimana ya cara memilih tim yang tepat untuk startup?
              </h3>
              <hr className="border-dashed border-gray-300 mb-4" />
              <h3 className="text-lg font-regular mb-4">
                Ini dia tips mengukur keberhasilan startup!
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;

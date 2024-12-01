import React from "react";
import beritaUtama from "../../assets/berita/gambarUtama1.svg";
import berita1 from "../../assets/berita/berita1.svg";
import berita2 from "../../assets/berita/berita2.svg";
import berita3 from "../../assets/berita/berita3.svg";
import berita4 from "../../assets/berita/berita4.svg";
import berita5 from "../../assets/berita/berita5.svg";
import berita6 from "../../assets/berita/berita6.svg";
import berita7 from "../../assets/berita/berita7.svg";
import berita8 from "../../assets/berita/berita8.svg";
import berita9 from "../../assets/berita/berita9.svg";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const App = () => {
  // Data untuk berita terbaru
  const news = [
    {
      title: "Tips dan Trik: Mengelola Waktu dan Memilih Tim Untuk Startup",
      time: "4 jam yang lalu",
      img: berita1,
      link: "/isiBerita",
    },
    {
      title: "Startup Academy: Membangun Bisnis yang Berkelanjutan",
      time: "4 jam yang lalu",
      img: berita2,
      link: "/isiBerita",
    },
    {
      title: "Workshop Eksklusif: Strategi Pitching untuk Mendapatkan Pendanaan",
      time: "5 jam yang lalu",
      img: berita3,
      link: "/isiBerita",
    },
  ];

  // Data untuk daftar tips & trick
  const tips = [
    {
      category: "Tips & Trick",
      title: "Sukses Cerita: Alumni Startup Academy Raih Prestasi",
      time: "8 jam yang lalu",
      img: berita4,
    },
    {
      category: "Tips & Trick",
      title: "Wonderful Startup Academy, Ajang Pencarian Unicorn Baru Sektor Pariwisata",
      time: "8 jam yang lalu",
      img: berita5,
    },
    {
      category: "Tips & Trick",
      title: "Program Pelatihan Gratis dari Startup Academy untuk UMKM",
      time: "9 jam yang lalu",
      img: berita6,
    },
    {
      category: "Tips & Trick",
      title: "Peran Startup Academy dalam Meningkatkan Keterampilan Teknologi",
      time: "9 jam yang lalu",
      img: berita7,
    },
    {
      category: "Tips & Trick",
      title: "Tantangan yang Dihadapi Startup Academy dalam Mencetak Pengusaha Sukses",
      time: "9 jam yang lalu",
      img: berita8,
    },
    {
      category: "Tips & Trick",
      title: "Pahami Kunci Kesuksesan Startup Melalui Startup Academy",
      time: "9 jam yang lalu",
      img: berita9,
    },
  ];

  return (
    <div className="dark:bg-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <Navbar />
      <div className="bg-gray-100 dark:bg-gray-800 p-8 mt-20">
        <h1 className="text-gray-700 dark:text-gray-300 text-center text-lg mb-6">
          Dapatkan berita menarik terkait startup
        </h1>
        <div className="flex justify-between items-start gap-3">
          <div className="w-2/3">
            <img
              src={beritaUtama}
              alt="hero"
              className="rounded-md shadow-md"/>
            <Link>
              <h1 className="font-bold text-[39px] text-gray-900 dark:text-gray-100">
                Peluncuran Fitur Baru di Startup Academy
              </h1>
              <p className="text-[14px] font-light text-gray-700 dark:text-gray-300">
                Dengan bangga kami meluncurkan fitur terbaru di Startup Academy untuk membantu membuat rencana bisnis yang terperinci dan lebih mendalam . . .
              </p>
            </Link>
          </div>
          <div className="lg:w-1/4">
            <div className="text-[#B04343] text-lg font-bold mb-4"> # Topik</div>
            <div className="flex flex-wrap gap-2">
              {[
                { title: "Finansial", link: "/finansial" },
                { title: "Teknologi", link: "/teknologi" },
                { title: "Tips & Trick", link: "/tips-trick" },
                { title: "Product", link: "/product" },
                { title: "UMKM", link: "/umkm" },
                { title: "Kisah Sukses", link: "/kisah-sukses" },
              ].map((topic, index) => (
                <Link to={topic.link} key={index} className="flex">
                  <span className="px-4 py-2 bg-white dark:bg-gray-700 text-black dark:text-gray-100 text-sm border border-yellow-500 rounded-full cursor-pointer hover:bg-yellow-100 dark:hover:bg-gray-600">
                    {topic.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Latest News Section */}
      <div className="p-8 bg-white dark:bg-gray-800">
        <h2 className="text-xl font-bold mb-6 dark:text-gray-100">
          Berita Terbaru
        </h2>
        <div className="flex gap-6">
          {news.map((item, index) => (
            <Link to={item.link} key={index}>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-md shadow-md p-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-md w-full h-40 object-cover"/>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                  {item.time}
                </p>
                <h3 className="text-md font-semibold mt-2 dark:text-gray-100">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Tips & Tricks Section */}
      <div className="p-8 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-xl font-bold mb-6 text-center dark:text-gray-100">
          Tips & Trick
        </h2>
        <div className="space-y-4 max-w-4xl mx-auto">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="flex justify-between items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
              <Link>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold">
                    {tip.category}
                  </p>
                  <h3 className="text-md font-semibold mt-1 dark:text-gray-100">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
                    {tip.time}
                  </p>
                </div>
              </Link>
              <img
                src={tip.img}
                alt={tip.title}
                className="w-28 h-20 object-cover rounded-md"/>
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-gray-800 dark:bg-gray-700 text-white text-center py-4">
        © 2024 Startup Academy. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
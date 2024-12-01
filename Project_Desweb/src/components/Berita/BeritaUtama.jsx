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
import { Link } from "react-router-dom";

const App = () => {
  // Data untuk berita terbaru
  const news = [
    {
      title: "Tips dan Trik: Mengelola Waktu dan Memilih Tim Untuk Startup",
      time: "4 jam yang lalu",
      img: berita1,
      link : "/isiBerita",
    },
    {
      title: "Startup Academy: Membangun Bisnis yang Berkelanjutan",
      time: "4 jam yang lalu",
      img: berita2,
      link : "/isiBerita",
    },
    {
      title: "Workshop Eksklusif: Strategi Pitching untuk Mendapatkan Pendanaan",
      time: "5 jam yang lalu",
      img: berita3,
      link : "/isiBerita",
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
    <div>
      {/* Hero Section */}
      <div className="bg-gray-100 p-8">
        <h1 className="text-gray-700 text-center text-lg mb-6">
          Dapatkan berita menarik terkait startup
        </h1>
        <div className="flex justify-between items-start gap-3">
          
          <div className="w-2/3">
            <img
              src={beritaUtama}
              alt="hero"
              className="rounded-md shadow-md"
            />
            <Link>
            <h1 className="font-bold text-[39px]">Peluncuran Fitur Baru di Startup Academy</h1>
            <p className="text-[14px] font-light">Dengan bangga kami meluncurkan fitur terbaru di Startup Academy untuk membantu membuat rencana bisnis yang terperinci dan lebih mendalam . . . </p>
            </Link>
          </div>
          
          <div className="w-1/3">
            <h2 className="text-lg font-bold"># Topik</h2>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Financial", "Teknologi", "Tips & Trick", "Produk", "UMKM", "Kisah Sukses"].map(
                (topic, index) => (
                <Link>
                  <span
                    key={index}
                    className="bg-yellow-200 text-yellow-700 px-3 py-1 rounded-full text-sm"
                  >
                    {topic}
                  </span>
                </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Latest News Section */}
      <div className="p-8 bg-white">
        <h2 className="text-xl font-bold mb-6">Berita Terbaru</h2>
        <div className="flex gap-6">
          {news.map((item, index) => (
            <Link to={item.link}>
            <div key={index} className="bg-gray-100 rounded-md shadow-md p-4">
              <img
                src={item.img}
                alt={item.title}
                className="rounded-md w-full h-40 object-cover"
              />
              <p className="text-gray-500 text-sm mt-2">{item.time}</p>
              <h3 className="text-md font-semibold mt-2">{item.title}</h3>
            </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Tips & Tricks Section */}
      <div className="p-8 bg-gray-50">
        <h2 className="text-xl font-bold mb-6 text-center">Tips & Trick</h2>
        <div className="space-y-4 max-w-4xl mx-auto">
          {tips.map((tip, index) => (
            
            <div
              key={index}
              className="flex justify-between items-center gap-4 bg-white p-4 rounded-md shadow-md"
            >
                <Link>
              <div className="flex-1">
                <p className="text-sm text-gray-500 font-semibold">{tip.category}</p>
                <h3 className="text-md font-semibold mt-1">{tip.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{tip.time}</p>
              </div>
              </Link>
              <img
                src={tip.img}
                alt={tip.title}
                className="w-28 h-20 object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        © 2024 Startup Academy. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
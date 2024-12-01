import React from "react";
import berita1 from "../../assets/berita/berita1.svg";
import berita10 from "../../assets/berita/berita10.svg";
import berita5 from "../../assets/berita/berita5.svg";
import berita11 from "../../assets/berita/berita11.svg";
import berita12 from "../../assets/berita/berita12.svg";
import berita8 from "../../assets/berita/berita8.svg";
import berita9 from "../../assets/berita/berita9.svg";
import { Link } from "react-router-dom";

const Finansial = () => {
  return (
    <div className="bg-white p-4 md:p-8 lg:px-16 flex flex-col lg:flex-row gap-8">
      {/* Konten Kiri */}
      <div className="lg:w-3/4">
        {/* Header */}
        <div className="text-yellow-500 text-2xl font-bold mb-4">Finansial</div>

        {/* Highlighted Article */}
        <div className="mb-8">
          <img
            src={berita1}
            alt="Artikel Utama"
            className="w-full rounded-md mb-4"
          />
          <p className="text-sm text-gray-500 mb-2">8 jam yang lalu</p>
          <Link to="/isiBerita"><h2 className="text-xl font-bold">
            Tips dan Trik: Mengelola Waktu dan Memilih Tim Untuk Startup
          </h2>
          <p className="text-gray-600 mt-2">
            Membangun startup yang sukses membutuhkan pengelolaan waktu yang
            efisien, tim yang solid, serta tips dan trik praktis untuk
            menghadapi tantangan ini.
          </p>
          </Link>
        </div>

        {/* Divider */}
        <hr className="border-gray-300 mb-8" />

        {/* List of Articles */}
        <div className="grid gap-6">
          {[
            {
              title: "Panduan Mengelola Arus Kas Startup agar Tetap Sehat",
              time: "8 jam yang lalu",
              category: "Finansial",
              description:
                "Panduan strategis mengelola arus kas startup mencakup perencanaan keuangan, pengendalian biaya, pemantauan pendapatan, dan menjaga likuiditas bisnis.",
              image: berita10, // Ganti URL gambar
            },
            {
              title: "Pentingnya Financial KPI untuk Mengukur Keberhasilan Startup",
              time: "8 jam yang lalu",
              category: "Finansial",
              description:
                "Memahami kinerja keuangan, mengevaluasi keberhasilan, mengoptimalkan strategi bisnis, dan menarik perhatian investor.",
              image: berita5,
            },
            {
              title: "Mengenal Revenue Model yang Cocok untuk Startup Baru Anda",
              time: "8 jam yang lalu",
              category: "Finansial",
              description:
                "Berbagai revenue model seperti subscription, freemium, dan licensing untuk menemukan strategi pendapatan terbaik bagi startup Anda.",
              image: berita11,
            },
            {
                title: "Bagaimana Startup Bisa Bertahan di Tengah Ketidakpastiaan Ekonomi",
                time: "9 jam yang lalu",
                category: "Finansial",
                description:
                  "Strategi bertahan startup: kelola arus kas, adaptasi cepat, inovasi produk, efisiensi biaya dan fokus kebutuhan pasar.",
                image: berita12,
            },
            {
                title: "Tantangan yang Dihadapi Startup dalam Mencetak Pengusaha Sukses",
                time: "9 jam yang lalu",
                category: "Finansial",
                description:
                  "Menghadapi tantangan dalam pembiayaan, pengelolaan arus kas, adaptasi pasar, dan membangun tim yang solid untuk sukses.",
                image: berita8,
            },
            {
                title: "Pahami Kunci Kesuksesan Startup Melalui Startup Academy",
                time: "9 jam yang lalu",
                category: "Finansial",
                description:
                  "Strategi sukses startup melalui Startup Academy, dengan fokus pada finansial, perencanaan, inovasi, dan pengembangan bisnis yang efektif.",
                image: berita9,
            },

          ].map((article, index) => (
            <div key={index} className="flex gap-4">
              <img
                src={article.image}
                alt={article.title}
                className="w-32 h-20 rounded-md object-cover"
              />
              <div>
                <p className="text-yellow-500 text-sm">{article.category}</p>
                <p className="text-gray-500 text-xs">{article.time}</p>
                <h3 className="text-md font-semibold mt-1">{article.title}</h3>
                <p className="text-gray-600 text-sm mt-1">
                  {article.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Finansial;
import React from "react";
import { Link } from "react-router-dom";

const Berita = () => {
  return (
    <div className="bg-white p-4 md:p-8 lg:px-16 flex flex-col lg:flex-row gap-8">
      {/* Konten Kiri */}
      <div className="lg:w-3/4">
        {/* Header */}
        <div className="text-yellow-500 text-2xl font-bold mb-4">Finansial</div>

        {/* Highlighted Article */}
        <div className="mb-8">
          <img
            src="https://via.placeholder.com/831x388" // Ganti dengan URL gambar artikel utama
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
              image: "https://via.placeholder.com/200x120", // Ganti URL gambar
            },
            {
              title: "Pentingnya Financial KPI untuk Mengukur Keberhasilan Startup",
              time: "8 jam yang lalu",
              category: "Finansial",
              description:
                "Memahami kinerja keuangan, mengevaluasi keberhasilan, mengoptimalkan strategi bisnis, dan menarik perhatian investor.",
              image: "https://via.placeholder.com/200x120",
            },
            {
              title: "Mengenal Revenue Model yang Cocok untuk Startup Baru Anda",
              time: "8 jam yang lalu",
              category: "Finansial",
              description:
                "Berbagai revenue model seperti subscription, freemium, dan licensing untuk menemukan strategi pendapatan terbaik bagi startup Anda.",
              image: "https://via.placeholder.com/200x120",
            },
            {
                title: "Bagaimana Startup Bisa Bertahan di Tengah Ketidakpastiaan Ekonomi",
                time: "9 jam yang lalu",
                category: "Finansial",
                description:
                  "Strategi bertahan startup: kelola arus kas, adaptasi cepat, inovasi produk, efisiensi biaya dan fokus kebutuhan pasar.",
                image: "https://via.placeholder.com/200x120",
            },
            {
                title: "Tantangan yang Dihadapi Startup dalam Mencetak Pengusaha Sukses",
                time: "9 jam yang lalu",
                category: "Finansial",
                description:
                  "Menghadapi tantangan dalam pembiayaan, pengelolaan arus kas, adaptasi pasar, dan membangun tim yang solid untuk sukses.",
                image: "https://via.placeholder.com/200x120",
            },
            {
                title: "Pahami Kunci Kesuksesan Startup Melalui Startup Academy",
                time: "9 jam yang lalu",
                category: "Finansial",
                description:
                  "Strategi sukses startup melalui Startup Academy, dengan fokus pada finansial, perencanaan, inovasi, dan pengembangan bisnis yang efektif.",
                image: "https://via.placeholder.com/200x120",
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

      {/* Sidebar Kanan */}
      <div className="lg:w-1/4">
        <div className="text-[#B04343] text-lg font-bold mb-4"># Topik</div>
        <div className="flex flex-wrap gap-2">
          {["Finansial", "Teknologi", "Tips & Trick", "Produk", "UMKM", "Kisah Sukses"].map(
            (topic, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white text-black text-sm border border-yellow-500 rounded-full cursor-pointer hover:bg-yellow-100"
              >
                {topic}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Berita;
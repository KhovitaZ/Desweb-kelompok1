import React from "react";
import Img1 from "../../assets/program/sahamModal/pengenalanPasar.svg";
import Img2 from "../../assets/program/sahamModal/instrumenPasar.svg";
import Img3 from "../../assets/program/sahamModal/mekanismePerdagangan.svg";
import Img4 from "../../assets/program/sahamModal/analisisFundamental.svg";
import Img5 from "../../assets/program/sahamModal/analisisTeknikal.svg";
import Img6 from "../../assets/program/sahamModal/manajemenRisiko.svg";
import Img7 from "../../assets/program/sahamModal/psikologiInvestasi.svg";
import Img8 from "../../assets/program/sahamModal/strategiInvestasi.svg";
import ImgLogo from "../../assets/program/sahamModal.svg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const ProgramData = [
  {
    id: 1,
    img: Img1,
    title: "Pengenalan Pasar Modal",
    Deskription : "Tempat transaksi surat berharga antara investor dan perusahaan",
    value: 0,
    link: "/pengenalanPasar",
  },
  {
    id: 2,
    img: Img2,
    title: "Instrumen Pasar Modal",
    Deskription : "Surat berharga seperti saham, obligasi, dan reksa dana",
    value: 0,
    link: "/instrumenPasar",
  },
  {
    id: 3,
    img: Img3,
    title: "Mekanisme Perdagangan Saham",
    Deskription : "Proses jual beli saham di bursa efek",
    value: 0,
    link: "/mekanismePerdagangan",
  },
  {
    id: 4,
    img: Img4,
    title: "Analisis Fundamental",
    Deskription : "Evaluasi saham berdasarkan kinerja dan prospek bisnis",
    value: 0,
    link: "/analisisFundamental",
  },
  {
    id: 5,
    img: Img5,
    title: "Analisis Teknikal",
    Deskription : "Prediksi harga saham melalui pola grafik dan indikator teknis.",
    value: 0,
    link: "/analisisTeknikal",
  },
  {
    id: 6,
    img: Img6,
    title: "Manajemen Risiko  dan Diversifikasi",
    Deskription : " Mengurangi risiko dengan strategi dan penyebaran investasi.",
    value: 0,
    link: "/manajemenRisiko",
  },
  {
    id: 7,
    img: Img7,
    title: "Psikologi Investasi",
    Deskription : "Memahami emosi investor yang memengaruhi keputusan investasi.",
    value: 0,
    link: "/psikologiInvestasi",
  },
  {
    id: 8,
    img: Img8,
    title: "Strategi investasi",
    Deskription : "Pendekatan investasi untuk mencapai tujuan sesuai risiko.",
    value: 0,
    link: "/strategiInvestasi",
  },
];

const SahamPasarModal = () => {
  return (
    <div id="program" className="h-[703px] mt-28 mb-12">
      <Navbar />
      <div className="flex flex-col mx-8 sm:mx-20 my-10 gap-10">
        <div className="grid-cols-1 sm:grid sm:grid-cols-[minmax(100px,_1fr)_1fr] items-center bg-[#A2DBFF] dark:bg-gray-700 rounded-[20px] h-[169px] p-5 gap-2">
          <div className="flex flex-row justify-start items-center gap-3 lg:gap-8 mb-3 sm:mb-0">
            <img src={ImgLogo} className="w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px]" />
            <p className="font-bold text-[10px] sm:text-[18px] lg:text-[26px]">Saham & Pasar Modal</p>
          </div>
          <label className="grow w-full input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow h-[40px] w-full rounded-[50px] p-5"
              placeholder="Cuaner, mau belajar apa hari ini"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
            </svg>
          </label>
        </div>

        <div className="flex flex-col bg-[#E0F3FF] dark:bg-gray-900 h-[220px] md:h-[230px] lg:h-[200px] xl:h-[160px] p-5 gap-3">
          <p className="text-[26px] font-bold">Deskripsi</p>
          <p className="text-justify leading-tight text-[10px] sm:text-[14px] md:text-[16px]">Saham & Pasar Modal mencakup pemahaman dasar tentang pasar modal, jenis instrumen yang diperdagangkan, dan mekanisme perdagangan saham. Topik ini juga meliputi analisis fundamental dan teknikal untuk menilai saham, manajemen risiko dan diversifikasi untuk mengurangi kerugian, psikologi investasi, strategi dan perencanaan investasi yang membantu mencapai tujuan finansial dengan keputusan yang lebih bijaksana.</p>
        </div>

        <div className="w-full">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:md:grid-cols-4 items-center gap-5">
            {ProgramData.map((data) => (
              <Link to={data.link}>
                  <div className="grid sm:grid-cols-2 gap-6 sm:w-[1000px] md:w-[590px] md:h-[170px] lg:w-[580px] xl:w-[680px] xl:h-[150px]">
                    <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                      <img
                        src={data.img}
                        alt="Basic Financial Literacy"
                        className="w-16 h-16 sm:w-20 sm:h-20"
                      />
                      <div>
                        <h3 className="font-semibold text-lg">{data.title}</h3>
                        <p className="text-sm text-gray-600">
                          {data.Deskription}
                        </p>
                        <div className="flex flex-row gap-2 items-center">
                          <div className="w-full bg-gray-300 rounded-full h-4 relative">
                            <div className="bg-gray-300 h-4 rounded-full transition-all duration-300">
                            </div>
                          </div>
                          <p>{data.value}%</p>
                        </div>
                      </div>
                    </div>
                  </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SahamPasarModal;

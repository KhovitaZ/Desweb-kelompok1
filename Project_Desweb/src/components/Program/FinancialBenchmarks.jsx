import React from "react";
import Img1 from "../../assets/program/financialBenchmarks/basicFinancial.svg";
import Img2 from "../../assets/program/financialBenchmarks/revenueModels.svg";
import Img3 from "../../assets/program/financialBenchmarks/startupFinancial.svg";
import Img4 from "../../assets/program/financialBenchmarks/financialForecasting.svg";
import Img5 from "../../assets/program/financialBenchmarks/fundingInvestment.svg";
import ImgLogo from "../../assets/program/FinancialBenchmarks.svg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const ProgramData = [
  {
    id: 1,
    img: Img1,
    title: "Basic Financial Literacy",
    Deskription : "Modul dasar  tentang literasi keuangan untuk bisnis",
    value: 0,
    link: "/basicFinancial",
  },
  {
    id: 2,
    img: Img2,
    title: "Revenue Models",
    Deskription : "Pelatihan tentang berbagai model pendapatan",
    value: 0,
    link: "/revenueModels",
  },
  {
    id: 3,
    img: Img3,
    title: "Startup Financial Planning",
    Deskription : "Membuat rencana keuangan yang realistis untuk startup",
    value: 0,
    link: "/startupFinancial",
  },
  {
    id: 4,
    img: Img4,
    title: "Financial Forecasting & KPI",
    Deskription : "Cara membuat prediksi keuangan dan indikator kinerja utama (KPI)",
    value: 0,
    link: "/financialForecasting",
  },
  {
    id: 5,
    img: Img5,
    title: "Funding & Investment Readiness",
    Deskription : "Strategi mempersiapkan startup agar siap mencari pendanaan",
    value: 0,
    link: "/fundingInvestment",
  },
];

const FinancialBenchmarks = () => {
  return (
    <div id="program" className="h-[703px] mt-28 mb-12">
      <Navbar />
      <div className="flex flex-col mx-8 sm:mx-20 my-10 gap-10">
        <div className="grid-cols-1 sm:grid sm:grid-cols-[minmax(100px,_1fr)_1fr] items-center bg-[#A2DBFF] rounded-[20px] h-[169px] p-5 gap-2">
          <div className="flex flex-row justify-start items-center gap-3 lg:gap-8 mb-3 sm:mb-0">
            <img src={ImgLogo} className="w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px]" />
            <p className="font-bold text-[10px] sm:text-[18px] lg:text-[26px]">Financial Benchmarks & Planning</p>
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

        <div className="flex flex-col bg-[#E0F3FF] h-[220px] md:h-[230px] lg:h-[200px] xl:h-[160px] p-5 gap-3">
          <p className="text-[26px] font-bold">Deskripsi</p>
          <p className="text-justify leading-tight text-[10px] sm:text-[14px] md:text-[16px]">Financial Benchmarks & Planning mencakup pemahaman dasar keuangan, perencanaan finansial startup, kesiapan pendanaan, model pendapatan, dan financial forecasting serta KPI. Materi ini membantu startup mengelola keuangan secara efektif, mempersiapkan investasi, memproyeksikan pendapatan, dan menilai kinerja keuangan untuk memastikan pertumbuhan dan keberlanjutan bisnis.</p>
        </div>

        <div className="w-full">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:md:grid-cols-4 items-center gap-5">
            {ProgramData.map((data) => (
              <Link to={data.link}>
                  <div className="grid sm:grid-cols-2 gap-6 sm:w-[1000px] md:w-[590px] md:h-[170px] lg:w-[580px] xl:w-[680px] xl:h-[150px]">
                    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md">
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

export default FinancialBenchmarks;

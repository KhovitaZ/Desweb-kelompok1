import React from "react";
import Img1 from "../../assets/program/sahamModal/manajemenRisiko.svg";
import bg from "../../assets/program/bg-dark.svg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const ProgramData = [
    {
      id: 1,
      title: "Pengertian Analisis Target Audience",
      materi: "Video",
      durasi: "15:38",  
    },
    {
      id: 2,
      title: "Tujuan Analisis Target Audience",
      materi: "Video",
      durasi: "10:12",  
    },
    {
      id: 3,
      title: "Segmentasi Pasar",
      materi: "Video",
      durasi: "13:30",  
    },
    {
      id: 4,
      title: "Metode dan Teknik Analisis",
      materi: "Video",
      durasi: "7:09",  
    },
    {
        title: "Analisis Data Audiens",
        materi: "Video",
        durasi: "11:05",  
    },
    {
        title: "Competitive Analysis",
        materi: "Video",
        durasi: "14:38",  
    },
    {
        title: "Rangkuman",
        materi: "Teks",
        durasi: "",  
    },
  ];

const ujian = [
  {
    id:1,
    title: "Pre Test",
    durasi: "15.00",
  },
  {
    id:2,
    title: "Post Test",
    durasi: "30.00",
  },
];

const TargetAudience= () => {
    return (
        <div id="program" className="h-[703px] mt-[75px] mb-12">
          <Navbar />
          <div>
            <div className="w-full bg-[#A2DBFF] dark:bg-gray-700 flex flex-row justify-start items-center h-[70px] sm:h-[120px] md:h-[150px] p-5 gap-2">
              <div className="flex flex-row justify-start items-center gap-3 lg:gap-8 mb-3 sm:mb-0">
                <img src={Img1} className="w-[40px] sm:w-[80px] md:w-[100px] lg:w-[120px]" />
                <div className="flex flex-col">
                  <p className="font-bold text-[14px] sm:text-[17px] lg:text-[36px]">Manajemen Risiko dan Diversifikasi</p>
                  <p className="flex flex-row">
                    <h6 className="font-medium text-[10px] sm:text-[14px] lg:text-[25px]">Pro Course :  </h6>
                    <p className="font-semibold text-[10px] sm:text-[14px] lg:text-[25px] text-[#C19900]">5 jam 59 menit</p>
                  </p>
                </div>
              </div>
            </div>

            <div
                className="bg-cover bg-center mx-5 sm:mx-20 my-5 sm:my-10 p-4 sm:p-10 rounded-[10px]">
                  <h3 className="font-bold text-[#4E4E4E] dark:text-white text-[20px] mb-4">Topik yang akan dibahas</h3>
                  
                  <div className="overflow-x-auto mb-10">
                    <table className="w-full border-collapse">
                      {/* Table Header */}
                      <thead>
                        <tr className="bg-[#C3E6FD] dark:bg-gray-800 text-left">
                          <th className="p-2 sm:p-4 text-sm font-bold text-gray-700 dark:text-white">Topik</th>
                          <th className="p-2 sm:p-4 text-sm font-bold text-gray-700 dark:text-white">Materi</th>
                          <th className="p-2 sm:p-4 text-sm font-bold text-gray-700 dark:text-white">Durasi</th>
                        </tr>
                      </thead>

                      {/* Table Body */}
                      <tbody>
                        {ProgramData.map((item, index) => (
                          <tr
                            key={index}
                            className={`${
                              index % 2 === 0 
                              ? "bg-[#F9FAFB] dark:bg-gray-900" 
                              : "bg-white dark:bg-gray-900"
                            } hover:bg-[#F1F5F9] dark:hover:bg-gray-800 transition`}
                          >
                            <Link>
                            <td className="p-2 sm:p-4 text-[10px] sm:text-sm text-gray-800 dark:text-white">{item.title}</td>
                            </Link>
                            <td className="p-2 sm:p-4 text-[10px] sm:text-sm text-gray-600 dark:text-white">{item.materi}</td>
                            <td className="p-2 sm:p-4 text-[10px] sm:text-sm text-gray-600 dark:text-white">{item.durasi}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      {/* Table Header */}
                      <thead>
                        <tr className="bg-[#C3E6FD] dark:bg-gray-800 text-left">
                          <th className="p-2 sm:p-4 text-sm font-bold text-gray-700 dark:text-white">Ujian</th>
                          <th className="p-2 sm:p-4 text-sm font-bold text-gray-700 dark:text-white">Durasi</th>
                        </tr>
                      </thead>

                      {/* Table Body */}
                      <tbody>
                        {ujian.map((item, index) => (
                          <tr
                            key={index}
                            className={`${
                              index % 2 === 0 
                              ? "bg-[#F9FAFB] dark:bg-gray-900" 
                              : "bg-white dark:bg-gray-900"
                            } hover:bg-[#F1F5F9] dark:hover:bg-gray-800 transition`}
                          >
                            <Link>
                            <td className="p-2 sm:p-4 text-[10px] sm:text-sm text-gray-800 dark:text-white">{item.title}</td>
                            </Link>
                            <td className="p-2 sm:p-4 text-[10px] sm:text-sm text-gray-600 dark:text-white">{item.durasi}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
              </div>
          </div>
    
          <Footer />
        </div>
      );
};

export default TargetAudience;

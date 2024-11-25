import React from "react";
import Img1 from "../../assets/program/materi1.svg";
import Img2 from "../../assets/program/materi2.svg";
import Img3 from "../../assets/program/materi3.svg";
import iconPanah from "../../assets/iconPanah.svg";
import { Link } from "react-router-dom";

const ProgramData = [
  {
    id: 1,
    img: Img1,
    title: "Market & Strategy",
    Deskription : "Pelajari cara mengenal pasar dengan lebih baik dan bangun strategi bisnis yang kuat. Temukan langkah-langkah untuk menguasai pasar dan memenangkan persaingan!",
    aosDelay: "0",
    link: "/marketStrategy",
  },
  {
    id: 2,
    img: Img2,
    title: "Financial Benchmarks",
    Deskription : "Ketahui bagaimana mengelola keuangan startup dengan efektif. Dari membuat anggaran hingga memahami financial benchmarks yang krusial, jadikan keuangan sebagai landasan kokoh untuk pertumbuhan bisnismu.",
    aosDelay: "200",
    link: "/financialBenchmarks",
  },
  {
    id: 3,
    img: Img3,
    title: "Saham & Pasar Modal",
    Deskription : "Jelajahi dunia pendanaan startup! Pelajari cara menarik investor, menyusun strategi penggalangan dana, dan bagaimana mendapatkan modal yang tepat untuk membawa startup Anda ke level berikutnya.",
    aosDelay: "400",
    link: "/sahamPasarModal",
  },
];

const Program = () => {
  return (
    <div id="program" className="mt-14 mb-12 bg-gradient-to-b from-[#EEEEEE] via-[#D4EDFF] to-[#87CCFF]">
      <div className="container mx-auto px-4 lg:px-10 pt-[52px]">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1
            data-aos="fade-up"
            className="text-[24px] md:text-[30px] lg:text-[37px] font-bold"
          >
            Program Pembelajaran
          </h1>
          <p
            data-aos="fade-up"
            className="text-[14px] md:text-[16px] font-light"
          >
            Pelajari lebih mendalam tentang aspek-aspek penting dalam membangun dan mengembangkan startup.
          </p>
        </div>

        {/* Body section */}
        <div className="flex flex-col gap-4">
          <Link to="/subProgram">
            <div className="flex justify-end font-bold gap-2">
              <p>Lihat Selengkapnya</p>
              <img src={iconPanah} alt="Icon Panah" />
            </div>
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Card section */}
            {ProgramData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="flex flex-col w-full h-auto border-[#E7E7E7] border-2 rounded-[20px] p-5 bg-white"
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[157px] w-full object-cover rounded-[20px]"
                />
                <div className="flex flex-col justify-between gap-5 mt-4">
                  <div>
                    <h3 className="text-[18px] md:text-[21px] font-bold">
                      {data.title}
                    </h3>
                    <p className="text-[12px] md:text-[14px] font-light text-gray-600">
                      {data.Deskription}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <button className="w-full md:w-[192px] h-[40px] rounded-[30px] border-[#55B0F1] border-2 hover:bg-[#55B0F1] transition">
                      <Link to={data.link}>
                        <p className="text-[12px] font-medium text-center">
                          Lihat selengkapnya
                        </p>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default Program;

import React from "react";
import Img1 from "../../assets/program/materi1.svg";
import Img2 from "../../assets/program/materi2.svg";
import Img3 from "../../assets/program/materi3.svg";
import iconPanah from "../../assets/iconPanah.svg";

const ProgramData = [
  {
    id: 1,
    img: Img1,
    title: "Market & Strategy",
    Deskription : "Pelajari cara mengenal pasar dengan lebih baik dan bangun strategi bisnis yang kuat. Temukan langkah-langkah untuk menguasai pasar dan memenangkan persaingan!",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Market & Strategy",
    Deskription : "Ketahui bagaimana mengelola keuangan startup dengan efektif. Dari membuat anggaran hingga memahami financial benchmarks yang krusial, jadikan keuangan sebagai landasan kokoh untuk pertumbuhan bisnismu.",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Market & Strategy",
    Deskription : "Jelajahi dunia pendanaan startup! Pelajari cara menarik investor, menyusun strategi penggalangan dana, dan bagaimana mendapatkan modal yang tepat untuk membawa startup Anda ke level berikutnya.",
    aosDelay: "400",
  },
];

const Program = () => {
  return (
    <div id="program" className="h-[703px] mt-14 mb-12 bg-gradient-to-b from-[#EEEEEE] via-[#D4EDFF] to-[#87CCFF]">
      <div className="container pt-[52px]">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-[37px] font-bold">
            Program Pembelajaran
          </h1>
          <p data-aos="fade-up" className="text-[16px] font-light">
            Pelajari lebih mendalam tentang aspek-aspek penting dalam membangun dan mengembangkan startup.
          </p>
        </div>
        {/* Body section */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-end font-bold gap-2">
            <p>Lihat Selengkapnya</p>
            <img src={iconPanah}/>
          </div>
          <div className="flex flex-row items-center gap-5">
            {/* card section */}
            {ProgramData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="flex flex-col w-[429px] h-[372px] border-[#E7E7E7] border-2 rounded-[20px] p-5 bg-white"
              >
                <img src={data.img} className="h-[157px] w-[363px] object-cover rounded-[20px]"/>
                <div className="flex flex-col justify-between gap-5 mt-4">
                  <div className="">
                    <h3 className="text-[21px] font-bold">{data.title}</h3>
                    <p className="text-[12px] font-light text-gray-600">{data.Deskription}</p>
                  </div>
                  <div className="flex items-center">
                    <button className="w-[192px] h-[40px] rounded-[30px] border-[#55B0F1] border-2 hover:bg-[#55B0F1] transition">
                      <p className="text-[12px] font-medium ">Lihat selengkapnya</p>
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

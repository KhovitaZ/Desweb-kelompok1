import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../../assets/berita/image1.svg";
import Img2 from "../../assets/berita/image2.svg";
import Img3 from "../../assets/berita/image3.svg";
import Img4 from "../../assets/berita/image4.svg";
import iconPanah from "../../assets/iconPanah.svg";

const ProgramData = [
  {
    id: 1,
    img: Img1,
    filter: "Finansial",
    title: "10 Kesalahan Keuangan yang Harus Dihindari Saat Menjalankan Startup",
    Deskription : "Pelajari cara mengenal pasar dengan lebih baik dan bangun strategi bisnis yang kuat. Temukan langkah-langkah untuk menguasai pasar dan memenangkan persaingan!",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    filter: "Finansial",
    title: "Strategi Pertumbuhan yang Digunakan oleh Startup Terkemuka",
    Deskription : "Pelajari cara mengenal pasar dengan lebih baik dan bangun strategi bisnis yang kuat. Temukan langkah-langkah untuk menguasai pasar dan memenangkan persaingan!",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    filter: "Teknologi",
    title: "Bagaimana Blockchain Membuka Peluang Baru bagi Startup",
    Deskription : "Pelajari cara mengenal pasar dengan lebih baik dan bangun strategi bisnis yang kuat. Temukan langkah-langkah untuk menguasai pasar dan memenangkan persaingan!",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    filter: "Tips & Trick",
    title: "Bagaimana Blockchain Membuka Peluang Baru bagi Startup",
    Deskription : "Pelajari cara mengenal pasar dengan lebih baik dan bangun strategi bisnis yang kuat. Temukan langkah-langkah untuk menguasai pasar dan memenangkan persaingan!",
    aosDelay: "600",
  },
];

const Berita = () => {
  return (
    <div id="berita" className="h-[703px] mt-14 mb-12 bg-gradient-to-b from-[#EEEEEE] via-[#D4EDFF] to-[#87CCFF]">
      <div className="container pt-[52px]">
        {/* Header section */}
        <div className="flex justify-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-[37px] font-bold">
            Berita Terbaru
          </h1>
        </div>
        {/* Body section */}
        <div className="flex flex-col gap-4">
          <Link to="/SubBerita">
          <div className="flex justify-end font-bold gap-2">
            <p>Lihat Selengkapnya</p>
            <img src={iconPanah}/>
          </div>
          </Link>
          <div className="flex flex-row items-center gap-5">
            {/* card section */}
            {ProgramData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="flex flex-col w-[429px] h-[432px] border-[#E7E7E7] border-2 rounded-[20px] p-5 bg-white gap-3"
              >
                <div className="flex justify-end">
                    <div className="h-[28px] w-[102px] flex justify-center items-center bg-gradient-to-r from-[#FFEEAE] to-[#FDD22F] text-black font-bold py-2 px-4 rounded-[30px] hover:from-yellow-500 hover:to-yellow-600">
                        <p className="font-bold text-[12px]">{data.filter}</p>
                    </div>
                </div>
                <div>
                    <img src={data.img} className="h-[157px] w-[363px] object-cover rounded-[20px]"/>
                    <div className="flex flex-col justify-between gap-5 mt-4">
                        <h3 className="text-[15px] font-bold">{data.title}</h3>
                        <p className="text-[12px] font-light text-gray-600">{data.Deskription}</p>
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

export default Berita;

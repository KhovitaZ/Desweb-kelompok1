import React from "react";
import arrow from "../../assets/program/arrow.svg";
import Img1 from "../../assets/program/FinancialBenchmarks.svg";
import Img2 from "../../assets/program/marketStrategy.svg";
import Img3 from "../../assets/program/productDevelopment.svg";
import Img4 from "../../assets/program/salesCustomer.svg";
import Img5 from "../../assets/program/sahamModal.svg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import RekomendasiEvent from "../Event/rekomendasiEvent";
import { Link } from "react-router-dom"; 

const ProgramData = [
  {
    id: 1,
    img: Img1,
    title: "Market & Strategy",
    link: "/marketStrategy",
  },
  {
    id: 2,
    img: Img2,
    title: "Financial Benchmarks & Planning",
    link: "/financialBenchmarks",
  },
  {
    id: 3,
    img: Img3,
    title: "Product Development & Innovation",
    link: "/productDevelopment",
  },
  {
    id: 4,
    img: Img4,
    title: "Sales & Customer Acquisition",
    link: "/salesAndCustomer",
  },
  {
    id: 5,
    img: Img5,
    title: "Saham & Pasar Modal",
    link: "/sahamPasarModal",
  },
];

const subProgram = () => {
  return (
    <div id="subprogram" className="">
        <Navbar />
        <div className="mt-28 m-7">
            <div>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow h-[40px] rounded-[50px] p-5" placeholder="Cuaner, mau belajar apa hari ini" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                    </svg>
                </label>
            </div>
            <div className="flex flex-col gap-10 bg-[#E0F3FF] dark:bg-gray-900 md:h-[550px] lg:h-[450px] my-10 p-6">
                <div className="flex justify-start">
                    <p className="text-[36px] font-semibold">Materi Startup Academy</p>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {/* card section */}
                    {ProgramData.map((data) => (
                    <div key={data.id} className="flex justify-between bg-[#A2DBFF] dark:bg-gray-700 h-[100px] sm:h-[123px] lg:w-[306px] xl:w-[380px] 2xl:w-[450px] p-5 rounded-[20px]">
                        <div className="flex flex-row justify-start items-center gap-4">
                            <img src={data.img} className="w-[70px] sm:w-[95px] object-cover rounded-[20px]"/>
                            <p className="text-[11px] sm:text-[14px] xl:text-[18px] font-bold">{data.title}</p>
                        </div>
                        <div className="flex justify-end">
                            <Link to={data.link}>
                                <img src={arrow} className="w-[40px] h-[40px]"/>
                            </Link>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <RekomendasiEvent />
        <Footer />
    </div>
  );
};

export default subProgram;

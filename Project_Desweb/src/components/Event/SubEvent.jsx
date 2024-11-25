import React from "react";
import bgEvent from "../../assets/event/bgEvent.svg";
import arrow from "../../assets/program/arrow.svg";
import Img1 from "../../assets/event/RekomendasiEvent/img1RE.svg";
import Img2 from "../../assets/event/RekomendasiEvent/img2RE.svg";
import Img3 from "../../assets/event/RekomendasiEvent/img3RE.svg";
import Img4 from "../../assets/event/RekomendasiEvent/img4RE.svg";
import people1 from "../../assets/event/RekomendasiEvent/people1.svg";
import people2 from "../../assets/event/RekomendasiEvent/people2.svg";
import people3 from "../../assets/event/RekomendasiEvent/people3.svg";
import people4 from "../../assets/event/RekomendasiEvent/people4.svg";
import bg from "../../assets/program/bg-blue.svg";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";


const ProgramData = [
  {
    id: 1,
    img: Img1,
    title: "Go-To-Market Strategy for Startups",
    people: people1,
    name: "Anton Stevani",
    company: "E-Commerce Expert",
    date: "12 November 2024",
    via:"online",
    price: "Rp 185.000",
    discount: "50%",
    actualPrice: "Rp 370.000",
    link: "/IsiEvent1",
  },
  {
    id: 2,
    img: Img2,
    title: "Digital Marketing Agency",
    people: people2,
    name: "John Smith",
    company: "E-Commerce Expert",
    date: "12 November 2024",
    via:"online",
    price: "Rp 185.000",
    discount: "50%",
    actualPrice: "Rp 370.000",
    link: "/IsiEvent1",
  },
  {
    id: 3,
    img: Img3,
    title: "E-Commerce Workshop",
    people: people3,
    name: "Jackson Bodey",
    company: "E-Commerce Expert",
    date: "12 November 2024",
    via:"online",
    price: "Rp 185.000",
    discount: "50%",
    actualPrice: "Rp 370.000",
    link: "/IsiEvent1",
  },
  {
    id: 4,
    img: Img4,
    title: "Leaders Conference",
    people: people4,
    name: "John Doe",
    company: "E-Commerce Expert",
    date: "12 November 2024",
    via:"online",
    price: "Rp 185.000",
    discount: "50%",
    actualPrice: "Rp 370.000",
    link: "/IsiEvent1",
  },
];

const SubEvents = () => {
  return (
   <div className="mt-[75px] mb-12">
        <Navbar />
        <div className="">
            <img src={bgEvent} className="top-0 left-0 w-full h-full object-cover"
            />
        </div>

        <section style={{ backgroundImage: `url(${bg})` }}
            className="bg-cover bg-center mx-1 sm:mx-12 my-5 sm:my-10 py-5 rounded-[10px]">
            <div className="container px-4">
                <div className="w-full grid grid-cols-[minmax(50px,_1fr)_1fr] justify-items-start">
                    {/* Header Section */}
                    <div className="flex flex-col justify-start mb-8">
                        <h2 className="text-[12px] sm:text-lg lg:text-3xl xl:text-3xl font-bold text-gray-800">Upcoming Event</h2>
                        <Link className="flex flex-row items-center gap-1">
                            <h3 className="text-[10px] sm:text-base lg:text-lg font-semibold hover:text-blue-600">Lihat Semua</h3>
                            <img src={arrow} className="w-[14px] lg:w-[20px] items-center"/>
                        </Link>
                    </div>
                    <p className="text-[8px] sm:text-[12px] lg:text-[17px] xl:text-[20px] items-center text-right text-gray-600 mb-8">
                    Jangan Lewatkan! Acara Mendatang di Startup Academy. Siapkan dirimu untuk berpartisipasi dalam pengalaman seru
                    yang akan membuka peluang baru bagi perjalanan startup-mu!
                    </p>
                </div>

                {/* Event Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center gap-5">
                    {/* card section */}
                    {ProgramData.map((data) => (
                        <Link to={data.link}>
                        <div className="flex flex-col justify-items-between bg-[#FFFFFF] w-[120px] md:h-[330px] md:w-[200px] lg:h-[380px] lg:w-[230px] rounded-[10px]">
                            <div className="flex flex-row justify-center items-center gap-4">
                                <img src={data.img} className="w-[120px] md:w-[200px] md:h-[155px] lg:w-[230px] lg:h-[180px] object-cover rounded-[10px]"/>
                            </div>
                            <div className="flex flex-col px-2 md:px-3 lg:px-5 py-2 gap-1">
                                <p className="text-[8px] md:text-[14px] lg:text-[18px] text-[#4B4B4B] font-bold">{data.title}</p>
                                <div className="flex flex-row gap-2 md:gap-5">
                                    <img src={data.people} className="w-[25px] h-[25px] md:w-[50px] md:h-[50px]"/>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[8px] md:text-[12px] font-medium">{data.name}</p>
                                        <p className="text-[7px] md:text-[10px] font-medium text-[#9C9C9C]">{data.company}</p>
                                </div>
                                </div>
                                <div>
                                <p className="font-medium text-[6px] sm:text-[10px]">Tanggal : {data.date} | {data.via}</p>
                                <div className="flex flex-row justify-start items-center gap-1 sm:gap-2">
                                    <p className="text-[7px] md:text-[15px] font-semibold text-[#FF0000]">{data.price}</p>
                                    <p className="text-[7px] md:text-[15px] bg-[#FFDCDC] text-[#FF0000] p-[2px] rounded-[5px]">{data.discount}</p>
                                    <p className="text-[7px] md:text-[10px] text-[#585858] font-semibold">{data.actualPrice}</p>  
                                </div>
                                </div>
                            </div>
                        </div>
                        </Link>
                ))}
                </div>
            </div>
        </section>

        <section style={{ backgroundImage: `url(${bg})` }}
            className="bg-cover bg-center mx-1 sm:mx-12 my-5 sm:my-10 py-5 rounded-[10px]">
            <div className="container px-4">
                <div className="w-full grid grid-cols-[minmax(50px,_1fr)_1fr] justify-items-start">
                    {/* Header Section */}
                    <div className="flex flex-col justify-start mb-8">
                        <h2 className="text-[12px] sm:text-lg lg:text-3xl xl:text-3xl font-bold text-gray-800">Upcoming Event</h2>
                        <Link className="flex flex-row items-center gap-1">
                            <h3 className="text-[10px] sm:text-base lg:text-lg font-semibold hover:text-blue-600">Lihat Semua</h3>
                            <img src={arrow} className="w-[14px] lg:w-[20px] items-center"/>
                        </Link>
                    </div>
                    <p className="text-[8px] sm:text-[12px] lg:text-[17px] xl:text-[20px] items-center text-right text-gray-600 mb-8">
                    Ketinggalan Acara? Nikmati Rekaman Event Kapan Saja! Kami telah menyediakan rekaman lengkap dari setiap event agar kamu tetap bisa mendapatkan wawasan dan pembelajaran berharga kapan pun kamu mau.
                    </p>
                </div>

                {/* Event Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center gap-5">
                    {/* card section */}
                    {ProgramData.map((data) => (
                        <Link to={data.link}>
                        <div className="flex flex-col justify-items-between bg-[#FFFFFF] w-[120px] md:h-[330px] md:w-[200px] lg:h-[380px] lg:w-[230px] rounded-[10px]">
                            <div className="flex flex-row justify-center items-center gap-4">
                                <img src={data.img} className="w-[120px] md:w-[200px] md:h-[155px] lg:w-[230px] lg:h-[180px] object-cover rounded-[10px]"/>
                            </div>
                            <div className="flex flex-col px-2 md:px-3 lg:px-5 py-2 gap-1">
                                <p className="text-[8px] md:text-[14px] lg:text-[18px] text-[#4B4B4B] font-bold">{data.title}</p>
                                <div className="flex flex-row gap-2 md:gap-5">
                                    <img src={data.people} className="w-[25px] h-[25px] md:w-[50px] md:h-[50px]"/>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[8px] md:text-[12px] font-medium">{data.name}</p>
                                        <p className="text-[7px] md:text-[10px] font-medium text-[#9C9C9C]">{data.company}</p>
                                </div>
                                </div>
                                <div>
                                <p className="font-medium text-[6px] sm:text-[10px]">Tanggal : {data.date} | {data.via}</p>
                                <div className="flex flex-row justify-start items-center gap-1 sm:gap-2">
                                    <p className="text-[7px] md:text-[15px] font-semibold text-[#FF0000]">{data.price}</p>
                                    <p className="text-[7px] md:text-[15px] bg-[#FFDCDC] text-[#FF0000] p-[2px] rounded-[5px]">{data.discount}</p>
                                    <p className="text-[7px] md:text-[10px] text-[#585858] font-semibold">{data.actualPrice}</p>  
                                </div>
                                </div>
                            </div>
                        </div>
                        </Link>
                ))}
                </div>
            </div>
        </section>

        <Footer />
    </div> 
  );
};

export default SubEvents;

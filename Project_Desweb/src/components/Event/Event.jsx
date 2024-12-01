import React from "react";
import schedule from "../../assets/event/iconSchedule.svg";
import img1 from "../../assets/event/image1.svg";
import { Link } from "react-router-dom";

const Event = () => {
  return (
    <div id="event" className="p-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="font-bold text-[24px] md:text-[30px] lg:text-[37px] text-center md:text-left">
        Event
      </h1>
      <div className="grid sm:grid-cols-[1fr_minmax(100px,_1fr)] justify-between mt-10 gap-8">
      {/* Kolom Kiri */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-row gap-3 items-center">
          <Link to="/subEvent" className="flex items-center gap-2 hover:text-blue-500">
            <img src={schedule} alt="Schedule Icon" className="w-[24px] h-[24px]" />
            <span className="font-bold text-[15px]">Schedule</span>
          </Link>
        </div>
        <div className="w-full">
          <p className="text-[10px] md:text-[15px] lg:text-[20px] text-justify">
            Temukan rahasia sukses langsung dari para pendiri startup yang sudah berhasil! Dalam Entrepreneur Talk, Anda akan mendengar kisah perjalanan mereka, tantangan yang dihadapi, dan strategi untuk mengatasi hambatan dalam memimpin startup.
          </p>
        </div>
      </div>
    
      {/* Kolom Kanan */}
      <div className="flex justify-center items-center w-full h-[200px] md:h-[300px] lg:h-[372px] rounded-[20px] bg-gradient-to-r from-[#E3921C] to-[#E1D34C] dark:from-[#5A4033] dark:to-[#8B6F3D]">
        <img src={img1} alt="Event Image" className="h-full w-auto object-contain rounded-[15px]" />
      </div>
      </div>
    </div>
  );
};

export default Event;
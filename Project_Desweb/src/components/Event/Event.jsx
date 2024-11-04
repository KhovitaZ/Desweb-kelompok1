import React from "react";
import schedule from "../../assets/event/iconSchedule.svg";
import img1 from "../../assets/event/image1.svg";

const Event = () => {
  return (
    <div id="event" className="h-[500px] p-10">
      <h1 className="font-bold text-[37px]">Event</h1>
      <div className="flex flex-row justify-between mt-10 gap-5">
        <div className="flex flex-col gap-24">
          <div className="flex flex-row gap-3">
            <img src={schedule} />
            <a href="#" className="font-bold text-[15px]">Schedule</a>
          </div>
          <div className="w-[451px]">
            <p className="tetx-[15px]">Temukan rahasia sukses langsung dari para pendiri startup yang sudah berhasil! Dalam Entrepreneur Talk, Anda akan mendengar kisah perjalanan mereka, tantangan yang dihadapi, dan strategi untuk mengatasi hambatan dalam memimpin startup.</p>
          </div>
        </div>
        <div className="flex justify-center items-center w-[664px] h-[372px] rounded-[20px] bg-gradient-to-r from-[#E3921C] to-[#E1D34C]">
          <img src={img1}/>
        </div>
      </div>
    </div>
  );
};

export default Event;

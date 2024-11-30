import React, { useState } from "react";

const FAQ = () => {
  // Buat nyimpan pertanyaan mana yang diperluas
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Buat toggle pertanyaan yang dipilih
  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div id="FAQ" className="h-auto mt-14 mb-12 px-6 sm:px-10 lg:px-14 text-black dark:text-white">
  <h1 className="text-center text-[28px] sm:text-[37px] font-bold mb-8">FAQ</h1>
  
  {/* FAQ Item 1 */}
  <div className="border-b border-gray-300 dark:border-gray-600 py-4">
    <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleExpand(1)}>
      <h2 className="text-[20px] sm:text-[28px] font-bold">1. Apa itu Startup Academy?</h2>
      <span className="text-3xl text-[#FFCA00]">{expandedIndex === 1 ? '-' : '+'}</span>
    </div>
    {expandedIndex === 1 && (
      <p className="mt-2 text-gray-700 dark:text-gray-300 text-[14px] sm:text-[15px]">
        Jawaban: Startup Academy adalah platform pembelajaran online yang dirancang untuk membantu calon pengusaha dan startup dalam memahami berbagai aspek penting dalam memulai dan mengembangkan bisnis, seperti strategi pasar, keuangan, pengembangan produk, hingga manajemen tim.
      </p>
    )}
  </div>

  {/* FAQ Item 2 */}
  <div className="border-b border-gray-300 dark:border-gray-600 py-4">
    <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleExpand(2)}>
      <h2 className="text-[20px] sm:text-[28px] font-bold">2. Program apa saja yang ditawarkan di Startup Academy?</h2>
      <span className="text-3xl text-[#FFCA00]">{expandedIndex === 2 ? '-' : '+'}</span>
    </div>
    {expandedIndex === 2 && (
      <p className="mt-2 text-gray-700 dark:text-gray-300 text-[14px] sm:text-[15px]">
        Kami menawarkan program yang mencakup berbagai topik seperti Market & Strategy, Financial Planning, Product Development, Sales & Customer Acquisition, Growth Hacking, Legal & Compliance, dan banyak lagi.
      </p>
    )}
  </div>

  {/* FAQ Item 3 */}
  <div className="border-b border-gray-300 dark:border-gray-600 py-4">
    <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleExpand(3)}>
      <h2 className="text-[20px] sm:text-[28px] font-bold">3. Apakah ada prasyarat untuk mengikuti program?</h2>
      <span className="text-3xl text-[#FFCA00]">{expandedIndex === 3 ? '-' : '+'}</span>
    </div>
    {expandedIndex === 3 && (
      <p className="mt-2 text-gray-700 dark:text-gray-300 text-[14px] sm:text-[15px]">
        Jawaban: Tidak ada prasyarat khusus, namun pengetahuan dasar tentang bisnis atau teknologi akan membantu mempercepat pemahaman materi.
      </p>
    )}
  </div>

  {/* FAQ Item 4 */}
  <div className="py-4">
    <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleExpand(4)}>
      <h2 className="text-[20px] sm:text-[28px] font-bold">4. Apakah saya bisa berinteraksi dengan mentor?</h2>
      <span className="text-3xl text-[#FFCA00]">{expandedIndex === 4 ? '-' : '+'}</span>
    </div>
    {expandedIndex === 4 && (
      <p className="mt-2 text-gray-700 dark:text-gray-300 text-[14px] sm:text-[15px]">
        Jawaban: Ya, Anda bisa berinteraksi dengan mentor melalui sesi tanya jawab, webinar, dan forum diskusi yang tersedia selama program berlangsung.
      </p>
    )}
  </div>

  {/* Call to Action Section */}
  <div data-aos="zoom-in" className="flex justify-center mt-14">
    <div
      className="p-5 flex justify-center h-auto sm:h-[410px] w-full sm:w-[1022px] bg-[#91D1FF] dark:bg-gray-800 rounded-[30px]">
      <div className="flex flex-col justify-center items-center gap-5 text-center">
        <h1 className="text-[20px] sm:text-[36px] !text-center sm:text-left sm:text-4xl font-bold">
          Jangan tunda lagi
        </h1>
        <p className="text-[14px] sm:text-[20px] flex justify-center items-center">Ayo pelajari cara membangun</p>
        <p className="text-[14px] sm:text-[20px] flex justify-center items-center">bisnis masa depanmu</p>
        <button className="mt-2 h-[40px] w-[217px] sm:w-[240px] flex justify-center items-center bg-gradient-to-r from-[#FFEEAE] to-[#FDD22F] text-black py-2 px-4 rounded-[30px] hover:from-yellow-500 hover:to-yellow-600">
          <p className="font-medium text-[16px] sm:text-[18px]">Belajar Sekarang</p>
        </button>
      </div>
    </div>
  </div>
</div>

  );
};

export default FAQ;

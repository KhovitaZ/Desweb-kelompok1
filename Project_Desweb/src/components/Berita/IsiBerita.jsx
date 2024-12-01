import React from 'react';
import { FaFacebookF, FaWhatsapp, FaTelegramPlane, FaLink } from "react-icons/fa";
import berita1 from "../../assets/berita/berita1.svg";
import berita4 from "../../assets/berita/berita4.svg";
import berita5 from "../../assets/berita/berita5.svg";
import berita7 from "../../assets/berita/berita7.svg";
import berita8 from "../../assets/berita/berita8.svg";
import berita9 from "../../assets/berita/berita9.svg";
import people1 from "../../assets/berita/HermanusJohan.svg";
import { Link } from "react-router-dom";

const news = [
    {
      title: "Sukses Cerita: Alumni Startup Academy Raih Prestasi",
      img: berita4,
      link : "/isiBerita",
    },
    {
      title: "Wonderful Startup Academy, Ajang Pencarian Unicorn Baru Sektor Pariwisata",
      img: berita5,
      link : "/isiBerita",
    },
    {
      title: "Peran Startup Academy dalam Meningkatkan Keterampilan Teknologi",
      img: berita7,
      link : "/isiBerita",
    },
    {
        title: "Tantangan yang Dihadapi Startup Academy dalam Mencetak Pengusaha Sukses",
        img: berita8,
        link : "/isiBerita",
    },
    {
      title: "Pahami Kunci Kesuksesan Startup Melalui Startup Academy",
      img: berita9,
      link : "/isiBerita",
    },
  ];

function IsiBerita() {
    return (
        <div className="bg-gray-50 min-h-screen p-4 flex justify-center">
            <div className="flex flex-col max-w-6xl gap-8">
                <div className="flex gap-8">
                    <div className="w-2/3">
                        <h1 className="text-4xl font-bold text-black mb-2">Tips dan Trik: Mengelola Waktu dan Memilih Tim Untuk Startup</h1>
                        <p className="text-gray-500 text-lg mb-4">Membangun startup yang sukses membutuhkan pengelolaan waktu yang efisien, tim yang solid, serta tips dan trik praktis untuk menghadapi tantangan ini.</p>
                        
                        <div className='flex flex-row justify-between'>
                            <div className="flex items-center gap-4 mb-6 text-black">
                                <img
                                    src={people1} />
                                <div>
                                    <div className='flex flex-row'>
                                    <p className='font-bold text-[16px]'>Hermanus Johan</p>
                                    <p className='font-normal text-[16px]'> -  Startup Academy</p>
                                    </div>
                                    <p className='text-[#868686] text-[13px]'>Jumat, 15 November 2024</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 mb-6">
                                <p className="text-gray-700">Share</p>
                                <div className="flex gap-4 text-xl text-gray-600">
                                    <FaFacebookF className="text-[#395186] cursor-pointer" />
                                    <FaWhatsapp className="text-green-500 cursor-pointer" />
                                    <FaTelegramPlane className="text-blue-500 cursor-pointer" />
                                    <FaLink className="text-gray-800 cursor-pointer" />
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <img
                                src={berita1}
                                alt="News"
                                className="w-full rounded-lg"
                            />
                        </div>

                    <div className="text-gray-800 leading-relaxed">
                        <p className="font-semibold text-lg mb-4">
                            Startup Academy - Mengelola waktu dan memilih tim yang tepat merupakan fondasi penting bagi kesuksesan sebuah startup.
                        </p>
                        <p className="mb-4">
                            Dalam dunia bisnis yang serba cepat, kemampuan untuk memprioritaskan tugas dan bekerja secara efisien menjadi kunci keberhasilan. Berikut adalah beberapa tips dan trik untuk membantu para pengusaha startup dalam menghadapi tantangan ini.
                        </p>
                        <p className="mb-4">
                            Pertama, penting untuk memanfaatkan teknik manajemen waktu yang efektif, seperti metode Eisenhower Matrix atau Pomodoro Technique. Eisenhower Matrix membantu Anda memprioritaskan tugas berdasarkan tingkat urgensi dan pentingnya, sehingga Anda dapat fokus pada tugas yang benar-benar memberikan dampak besar. Sementara itu, Pomodoro Technique, dengan pembagian waktu kerja menjadi interval pendek, efektif untuk meningkatkan produktivitas tanpa merasa kewalahan.
                        </p>
                        <p className="mb-4">
                            Selanjutnya, dalam memilih tim, Anda perlu mencari individu yang memiliki visi dan semangat yang sejalan dengan startup Anda. Sebuah tim yang solid adalah kombinasi dari berbagai keahlian, seperti teknis, kreatif, dan manajemen. Ketika merekrut anggota tim, pastikan mereka tidak hanya memiliki keterampilan teknis, tetapi juga karakter yang mendukung kerja sama tim. Soft skills, seperti kemampuan komunikasi, adaptabilitas, dan manajemen konflik, sering kali menjadi penentu keberhasilan tim dalam menghadapi tantangan.
                        </p>
                        <p className="mb-4">
                            Tak kalah penting, peran leadership sangat menentukan keberhasilan manajemen tim. Sebagai pemimpin startup, Anda perlu memberikan arahan yang jelas, tujuan yang realistis, serta mendorong budaya kerja yang terbuka dan kolaboratif. Melibatkan tim dalam pengambilan keputusan dapat meningkatkan rasa kepemilikan terhadap proyek dan mendorong motivasi kerja.
                        </p>
                        <p className="mb-4">
                            Selain itu, untuk menghemat waktu dan meningkatkan efisiensi, gunakanlah alat bantu digital seperti Trello, Asana, atau Slack. Platform ini membantu tim untuk mengorganisasi tugas, menetapkan tenggat waktu, dan berkomunikasi secara efektif. Penggunaan teknologi ini tidak hanya mempercepat alur kerja, tetapi juga meminimalkan risiko miskomunikasi yang dapat menghambat perkembangan startup.                        </p> 
                        <p className="mb-4">
                            Tidak kalah penting adalah keseimbangan kerja dan kehidupan pribadi. Para pendiri startup sering kali terjebak dalam siklus kerja yang terlalu intensif, sehingga mengorbankan kesehatan fisik dan mental mereka. Memberikan waktu istirahat yang cukup kepada diri sendiri dan tim akan membantu meningkatkan produktivitas jangka panjang.
                        </p>
                        <p className="mb-4">
                            Terakhir, ingatlah bahwa membangun startup adalah proses yang penuh tantangan dan pembelajaran. Tidak semua keputusan akan berjalan sempurna, tetapi dengan pengelolaan waktu yang baik dan tim yang solid, Anda dapat menghadapi rintangan tersebut dengan percaya diri. Fokus pada visi, belajar dari pengalaman, dan terus berinovasi adalah prinsip yang akan membawa startup Anda menuju kesuksesan.
                        </p>
                        <p className="mb-4">
                            Dengan strategi yang tepat, Anda dapat mengoptimalkan waktu dan membangun tim yang mampu mendukung visi besar startup Anda. Semoga tips ini membantu Anda melangkah lebih jauh dalam perjalanan membangun startup yang sukses!
                        </p>
                    </div>
                    </div>

                    <div className="lg:w-1/4">
                        <div className="text-[#B04343] text-lg font-bold mb-4"># Topik</div>
                            <div className="flex flex-wrap gap-2">
                                {[
                                {
                                    title: "Finansial",
                                    link: "/finansial",
                                },
                                {
                                    title: "Teknologi",
                                    link: "/teknologi",
                                },
                                {
                                    title: "Tips & Trick",
                                    link: "/tips-trick",
                                },
                                {
                                    title: "Product",
                                    link: "/product",
                                },
                                {
                                    title: "UMKM",
                                    link: "/umkm",
                                },
                                {
                                    title: "Kisah Sukses",
                                    link: "/kisah-sukses",
                                },
                                ].map((topic, index) => (
                                <Link to={topic.link} key={index} className="flex">
                                    <span
                                    className="px-4 py-2 bg-white text-black text-sm border border-yellow-500 rounded-full cursor-pointer hover:bg-yellow-100"
                                    >
                                    {topic.title}
                                    </span>
                                </Link>
                                ))}
                            </div>
                        </div>

                </div>

                <div className="mt-12">
                    <h2 className="text-2xl font-medium text-black mb-4">Artikel Terkait</h2>
                    <div className="grid grid-cols-5 gap-4">
                        {news.map((item, index) => (
                        <Link to={item.link}>
                            <div key={index}>
                                <img src={item.img} className="w-full h-32 object-cover rounded-lg"/>
                                <p className="p-4 text-black font-semibold">{item.title}</p>
                            </div>
                        </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IsiBerita;
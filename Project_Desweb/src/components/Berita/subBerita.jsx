import React from 'react';

const subBerita = () => {
const beritaItems = [
    {
        title: "Peluncuran Fitur Baru di Startup Academy",
        description: "Dengan bangga kami meluncurkan fitur terbaru di Startup Academy untuk membantu membuat rencana bisnis yang terperinci dan lebih mendalam.",
        link: "#",
    },
    {
        title: "Workshop Eksklusif: Strategi Pitching untuk Mendapatkan Pendanaan",
        description: "Workshop eksklusif strategi pitching untuk mendapatkan pendanaan akan dipandu oleh para mentor yang telah berpengalaman.",
        link: "#",
    },
    {
        title: "Tips dan Trik: Mengelola Waktu dan Memilih Tim Untuk Startup",
        description: "Startup Academy memberikan panduan mengenai cara memilih tim yang tepat untuk membangun sebuah startup.",
        link: "#",
    },
    {
        title: "Startup Academy: Membangun Bisnis yang Berkelanjutan",
        description: "Startup Academy memberikan solusi mengenal cara membangun bisnis yang berkelanjutan.",
        link: "#",
    },
    {
        title: "Sukses Cerita: Alumni Startup Academy Raih Prestasi",
        description: "Artikel ini menampilkan kisah sukses alumni Startup Academy yang telah berhasil membangun bisnis startupnya. Kisah ini diharapkan dapat menginspirasi para calon entrepreneur.",
        link: "#",
    },
    {
        title: "Wonderful Startup Academy, Ajang Pencarian Unicorn Baru Sektor Pariwisata",
        description: "Wonderful Startup Academy memiliki durasi program yang singkat, padat, serta efektif yang terdiri dari tiga tahap...",
        link: "#",
    },
    {
        title: "Kolaborasi Startup Academy dengan Universitas",
        description: "Artikel yang mengulas kolaborasi antara startup academy dengan institusi pendidikan tinggi untuk menyediakan pelatihan praktis bagi mahasiswa dan memperkenalkan mereka pada dunia kewirausahaan.",
        link: "#",
    },
    {
        title: "Program Pelatihan Gratis dari Startup Academy untuk UMKM",
        description: "Berita tentang program-program yang menawarkan pelatihan gratis atau bersubsidi kepada UMKM untuk meningkatkan keterampilan digital dan mengembangkan usaha.",
        link: "#",
    },
    {
        title: "Peran Startup Academy dalam Meningkatkan Keterampilan Teknologi",
        description: "Topik yang mengeksplorasi bagaimana startup academy membantu meningkatkan keterampilan teknologi dan kewirausahaan.",
        link: "#",
    },
    {
        title: "Startup Academy: Membuka Peluang Internasional",
        description: "Artikel yang menampilkan bagaimana startup academy membantu entrepreneur mengakses peluang internasional.",
        link: "#",
    },
    {
        title: "Menghadapi Tantangan: Membuat Entrepreneur yang Sukses",
        description: "Artikel yang mengeksplorasi tantangan yang dihadapi startup academy dalam membuat entrepreneur yang sukses.",
        link: "#",
    },
    {
        title: "Dampak Ekonomi: Bagaimana Startup Academy Meningkatkan Ekonomi Lokal",
        description: "Artikel yang mengeksplorasi bagaimana startup academy berdampak pada ekonomi lokal.",
        link: "#",
    },
    {
        title: "Adaptasi Pasca Pandemi: Bagaimana Startup Academy Beradaptasi",
        description: "Artikel yang menampilkan bagaimana startup academy beradaptasi dengan situasi pasca pandemi.",
        link: "#",
    },
    {
        title: "Peran Pemerintah dalam Mendukung Startup Academy",
        description: "Artikel yang mengeksplorasi bagaimana pemerintah dapat mendukung startup academy.",
        link: "#",
    },
    {
        title: "Masa Depan Startup dan Ekonomi Digital",
        description: "Artikel yang mengeksplorasi bagaimana startup academy dapat membantu meningkatkan inovasi di ekonomi digital.",
        link: "#",
    },
];

return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h1 className="text-3xl font-bold text-[#5F5F5F] text-center mb-20">Dapatkan berita menarik terkait startup</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {beritaItems.map((item, index) => (
    <div key={index} className="bg-[#E0F3FF] border border-[#55B0F1] shadow-md rounded-lg p-6 relative min-h-[200px]">
        <h2 className="text-lg font-bold">{item.title}</h2>
            <hr className="border-t border-[#B6B6B6] my-2" />
                <p className="text-gray-600 font-poppins">{item.description}</p>
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 border border-gray-400 rounded-md bg-transparent">
                        <a href={item.link} className="text-black text-xs font-poppins hover:underline">Baca Selengkapnya</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
};

export default subBerita;
import React from 'react';
import { Link } from "react-router-dom";

function Langganan() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
            {/* Menu Tabs */}
            <div className="flex space-x-4 mb-6">
                <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500">Produk Kami</button>
                <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500">Riwayat & Status Pembelian</button>
                <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500">Cari Invoice</button>
            </div>

            {/* Deskripsi */}
            <p className="text-center text-gray-700 mb-10 max-w-2xl">
                Dapatkan lebih banyak keuntungan dengan berlangganan! Nikmati pembelajaran tanpa batas, sertifikasi, dan akses ke materi terbaru hanya dengan satu klik.
            </p>

            {/* Background Biru untuk Paket Langganan */}
            <div className="bg-blue-100 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
                    {/* Paket 1 Bulan */}
                    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 flex flex-col justify-between">
                        <img src="path_to_your_image" alt="Paket 1 Bulan" className="w-full h-32 object-cover rounded-md mb-4" />
                        <h3 className="text-xl font-bold mb-2">Paket 1 bulan (30 hari)</h3>
                        <ul className="text-gray-600 mb-4 space-y-1">
                            <li>✔ Akses ke semua materi, termasuk materi baru</li>
                            <li>✔ Sertifikat kelulusan</li>
                            <li>✔ Diskon untuk pembelian produk Harga Rp. 100.000</li>
                        </ul>
                        <div className="text-left mt-auto">
                            <p className="text-lg font-semibold text-red-500 mb-4">Rp 199.000 /bulan</p>
                            <Link to="/Pembayaran">
                                <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold w-full hover:bg-yellow-500">Beli Sekarang</button>
                            </Link>
                        </div>
                    </div>

                    {/* Paket 3 Bulan */}
                    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 flex flex-col justify-between">
                        <img src="path_to_your_image" alt="Paket 3 Bulan" className="w-full h-32 object-cover rounded-md mb-4" />
                        <h3 className="text-xl font-bold mb-2">Paket 3 bulan (90 hari)</h3>
                        <ul className="text-gray-600 mb-4 space-y-1">
                            <li>✔ Akses ke semua materi, termasuk materi baru</li>
                            <li>✔ Sertifikat kelulusan</li>
                            <li>✔ Diskon untuk pembelian produk</li>
                            <li>✔ Akses ke webinar eksklusif! Harga Rp. 250.000</li>
                        </ul>
                        <div className="text-left mt-auto">
                            <p className="text-lg font-semibold text-red-500 mb-4">Rp 299.000 /3 bulan</p>
                            <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold w-full hover:bg-yellow-500">Beli Sekarang</button>
                        </div>
                    </div>

                    {/* Paket 6 Bulan */}
                    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 flex flex-col justify-between">
                        <img src="path_to_your_image" alt="Paket 6 Bulan" className="w-full h-32 object-cover rounded-md mb-4" />
                        <h3 className="text-xl font-bold mb-2">Paket 6 bulan (180 hari)</h3>
                        <ul className="text-gray-600 mb-4 space-y-1">
                            <li>✔ Akses ke semua materi, termasuk materi baru</li>
                            <li>✔ Sertifikat kelulusan</li>
                            <li>✔ Diskon untuk pembelian produk</li>
                            <li>✔ Akses ke webinar eksklusif</li>
                            <li>✔ Konsultasi dengan mentor Harga Rp. 450.000</li>
                        </ul>
                        <div className="text-left mt-auto">
                            <p className="text-lg font-semibold text-red-500 mb-4">Rp 499.000 /6 bulan</p>
                            <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold w-full hover:bg-yellow-500">Beli Sekarang</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Langganan;
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Pembayaran() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const searchParams = new URLSearchParams(location.search);
  const selectedPackage = searchParams.get("package");

  let packageDetails;
  if (selectedPackage === "1bulan") {
    packageDetails = {
        name: "Paket 1 Bulan Startup Academy",
        price: 199000,
        discount: 20000,
        features: [
            "✔ Akses ke semua materi, termasuk materi baru",
            "✔ Sertifikat kelulusan",
            "✔ Diskon untuk pembelian produk Harga Rp. 100.000",
        ],
    };
  } else if (selectedPackage === "3bulan") {
    packageDetails = {
        name: "Paket 3 Bulan Startup Academy",
        price: 299000,
        discount: 30000,
        features: [
            "✔ Akses ke semua materi, termasuk materi baru",
            "✔ Sertifikat kelulusan",
            "✔ Diskon untuk pembelian produk",
            "✔ Akses ke webinar eksklusif! Harga Rp. 250.000",
        ],
    };
  } else if (selectedPackage === "6bulan") {
    packageDetails = {
        name: "Paket 6 Bulan Startup Academy",
        price: 499000,
        discount: 50000,
        features: [
            "✔ Akses ke semua materi, termasuk materi baru",
            "✔ Sertifikat kelulusan",
            "✔ Diskon untuk pembelian produk",
            "✔ Akses ke webinar eksklusif",
            "✔ Konsultasi dengan mentor Harga Rp. 450.000",
        ],
    };
  } else {
      packageDetails = { name: "Paket Tidak Dikenal", price: 0, discount: 0 };
  }

  // Total harga sesudah diskon
  const totalPrice = packageDetails.price - packageDetails.discount;

  return ( 
    <div className="p-4 md:p-8 bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        {/* Detail Pemesanan */}
        <div className="p-6 border border-blue-200 rounded-lg bg-white w-full lg:w-2/3">
          <h2 className="font-semibold text-lg mb-4">Detail Pemesanan</h2>
          <div className="font-bold text-left mb-2">
            <p>{packageDetails.name}</p>
          </div>
          <ul className="text-black text-sm text-left mb-6 space-y-1">
            {packageDetails.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="flex justify-between text-gray-500 mb-1">
            <p>Harga Setelah Diskon</p>
          </div>
          <div className="text-black text-sm text-left">
            <p className="font-bold text-red-500 text-xl">Rp {totalPrice.toLocaleString()}</p>
          </div>
        </div>

        {/* Detail Pembayaran */}
        <div className="p-6 border border-gray-200 rounded-lg bg-white w-full lg:w-1/3 shadow-lg">
          <h2 className="font-semibold text-lg mb-4">Detail Pembayaran</h2>
          <div className="text-sm mb-4">
            <div className="flex justify-between mb-1">
              <p className="text-gray-500">{packageDetails.name}</p>
              <p className="text-gray-500">Rp {packageDetails.price.toLocaleString()}</p>
            </div>
            <div className="flex justify-between text-gray-500 mb-2">
              <p>Diskon</p>
              <p>-Rp {packageDetails.discount.toLocaleString()}</p>
            </div>
            <hr className="my-2" />
            <div className="text-black text-sm flex justify-between font-semibold">
              <p>Total Harga</p>
              <p className="text-red-400">Rp {totalPrice.toLocaleString()}</p>
            </div>
          </div>
          <button className="mt-4 py-2 px-3 bg-yellow-500 text-white font-semibold rounded-full w-full text-center">
            Pilih Metode Bayar
          </button>
          <p className="mt-2 text-xs text-gray-500 text-left">
            Dengan mengklik tombol di bawah ini, Anda menyatakan telah membaca, memahami, dan menyetujui Ketentuan Penukaran dan Garansi.
          </p>
        </div>
      </div>

      {/* Metode Pembayaran */}
      <div className="p-4 md:p-6 bg-white rounded-lg shadow-lg">
        <h2 className="font-semibold text-lg mb-4">Metode Pembayaran</h2>

        <div className="mb-6">
          <h3 className="font-semibold text-sm mb-2">Transfer Virtual Account</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-blue-50 rounded-lg">
            <div className="flex flex-col gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="payment-method" className="form-radio text-blue-500" />
                <img src="path/to/bank-bri.png" alt="Bank BRI" className="h-6" />
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="payment-method" className="form-radio text-blue-500" />
                <img src="path/to/bni.png" alt="BNI" className="h-6" />
              </label>
            </div>
            <div className="flex flex-col gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="payment-method" className="form-radio text-blue-500" />
                <img src="path/to/bca.png" alt="BCA" className="h-6" />
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="payment-method" className="form-radio text-blue-500" />
                <img src="path/to/mandiri.png" alt="Mandiri" className="h-6" />
              </label>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-sm mb-2">E-Wallet</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 bg-yellow-50 rounded-lg">
            <label className="flex items-center gap-2">
              <input type="radio" name="payment-method" className="form-radio text-yellow-500" />
              <img src="path/to/shopeepay.png" alt="ShopeePay" className="h-6" />
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="payment-method" className="form-radio text-yellow-500" />
              <img src="path/to/gopay.png" alt="GoPay" className="h-6" />
            </label>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold text-sm mb-2">Minimarket</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 bg-gray-100 rounded-lg">
            <label className="flex items-center gap-2">
              <input type="radio" name="payment-method" className="form-radio text-gray-500" />
              <img src="path/to/indomaret.png" alt="Indomaret" className="h-6" />
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="payment-method" className="form-radio text-gray-500" />
              <img src="path/to/alfamidi.png" alt="Alfamidi" className="h-6" />
            </label>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="py-2 px-4 bg-yellow-500 text-white font-semibold rounded-full w-auto">
            Bayar sekarang
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pembayaran;
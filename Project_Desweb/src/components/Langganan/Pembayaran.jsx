import React, { useState } from "react";

const Pembayaran = () => {
  const [selectedMethod, setSelectedMethod] = useState("");

  const handlePaymentChange = (method) => {
    setSelectedMethod(method);
  };

  return (
    <div className="bg-blue-50 min-h-screen p-6 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl">
        {/* Detail Pemesanan */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-bold">Detail Pemesanan</h2>
            <p className="mt-2 text-sm">Paket 1 bulan (30 hari)</p>
            <p className="text-sm">Akses ke semua materi, termasuk materi baru</p>
            <p className="text-sm">Sertifikat kelulusan</p>
            <p className="mt-4 text-xl font-semibold text-red-600">Rp 179.000</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-sm font-bold">Detail Pembayaran</h3>
            <p className="mt-1 text-sm">Paket Premium Academy</p>
            <p className="text-sm">Rp 179.000</p>
          </div>
        </div>

        {/* Metode Pembayaran */}
        <h2 className="text-lg font-bold mb-4">Metode Pembayaran</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Transfer Virtual Account */}
          <div>
            <h3 className="text-sm font-semibold mb-2">Transfer Virtual Account</h3>
            <div className="flex flex-col space-y-2">
              {["BRI", "BCA", "BNI", "Mandiri"].map((bank) => (
                <label
                  key={bank}
                  className={`flex items-center p-2 border rounded-md ${
                    selectedMethod === bank ? "border-blue-500" : "border-gray-300"
                  } cursor-pointer`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    className="mr-2"
                    value={bank}
                    checked={selectedMethod === bank}
                    onChange={() => handlePaymentChange(bank)}
                  />
                  {bank}
                </label>
              ))}
            </div>
          </div>

          {/* E-Wallet */}
          <div>
            <h3 className="text-sm font-semibold mb-2">E-Wallet</h3>
            <div className="flex flex-col space-y-2">
              {["ShopeePay", "GoPay"].map((wallet) => (
                <label
                  key={wallet}
                  className={`flex items-center p-2 border rounded-md ${
                    selectedMethod === wallet ? "border-blue-500" : "border-gray-300"
                  } cursor-pointer`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    className="mr-2"
                    value={wallet}
                    checked={selectedMethod === wallet}
                    onChange={() => handlePaymentChange(wallet)}
                  />
                  {wallet}
                </label>
              ))}
            </div>
          </div>

          {/* Minimarket */}
          <div>
            <h3 className="text-sm font-semibold mb-2">Minimarket</h3>
            <div className="flex flex-col space-y-2">
              {["Indomaret", "Alfamidi"].map((minimarket) => (
                <label
                  key={minimarket}
                  className={`flex items-center p-2 border rounded-md ${
                    selectedMethod === minimarket ? "border-blue-500" : "border-gray-300"
                  } cursor-pointer`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    className="mr-2"
                    value={minimarket}
                    checked={selectedMethod === minimarket}
                    onChange={() => handlePaymentChange(minimarket)}
                  />
                  {minimarket}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Tombol Bayar */}
        <button
          className="mt-6 w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-md"
          onClick={() => alert(`Metode pembayaran: ${selectedMethod}`)}
        >
          Bayar Sekarang
        </button>
      </div>
    </div>
  );
};

export default Pembayaran;

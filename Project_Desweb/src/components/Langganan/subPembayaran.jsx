import React from "react";
import { useLocation } from 'react-router-dom';

const SubPembayaran = () => {
    const location = useLocation();
  
    const { paymentMethod } = location.state || {};
  
    const paymentDetails = {
        BNI: {
            bankName: "Bank BNI",
            vaNumber: "8578497127423081",
            image: "/src/assets/pembayaran/bni.png",
        },
        BRI: {
            bankName: "Bank BRI",
            vaNumber: "0029384723412341",
            image: "/src/assets/pembayaran/bri.png",
        },
        BCA: {
            bankName: "Bank BCA",
            vaNumber: "1234567890123456",
            image: "/src/assets/pembayaran/bca.png",
        },
        Mandiri: {
            bankName: "Bank Mandiri",
            vaNumber: "9876543210987654",
            image: "/src/assets/pembayaran/mandiri.png",
        },
        ShopeePay: {
            bankName: "ShopeePay",
            vaNumber: "081234567890",
            image: "/src/assets/pembayaran/shopeepay.png",
        },
        GoPay: {
            bankName: "GoPay",
            vaNumber: "081234567890",
            image: "/src/assets/pembayaran/GOPAY.png",
        },
        Indomaret: {
            bankName: "Indomaret",
            vaNumber: "123456789",
            image: "/src/assets/pembayaran/indomaret.jpg",
        },
        Alfamart: {
            bankName: "Alfamart",
            vaNumber: "123456789",
            image: "/src/assets/pembayaran/alfamart.png",
        },
    };
  
    const selectedPayment = paymentDetails[paymentMethod] || {};
    
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 px-4 sm:px-8">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-lg font-semibold mb-2">Pembayaran</h2>
                <div className="border-t border-gray-300 my-2"></div>
                <div className="mb-4">
                    <p className="text-sm font-medium">Metode Pembayaran</p>
                    <p className="text-xl font-bold text-red-600">{selectedPayment.bankName}</p>
                </div>
                <div className="border-t border-gray-300 my-2"></div>
                <div className="text-sm text-gray-700 mb-4">
                    <p>Bayar dalam <span className="font-semibold">23:59:48</span></p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                    {selectedPayment.image && (
                        <img src={selectedPayment.image} alt={selectedPayment.bankName} className="h-6 sm:h-8 w-auto mr-2 object-contain"/>
                    )}
                    <p className="font-medium">{selectedPayment.bankName}</p>
                </div>
                <div className="text-sm">
                    <p className="mb-2">Nomor Virtual Account</p>
                    <div className="flex items-center justify-between bg-gray-200 p-2 rounded-lg overflow-x-auto">
                        <p className="font-mono text-lg text-red-600">{selectedPayment.vaNumber}</p>
                        <button className="text-blue-500 font-medium hover:underline text-sm sm:text-base" onClick={() =>
                        navigator.clipboard.writeText(selectedPayment.vaNumber) } >Salin </button>
                    </div>
                </div>
                <p className="text-sm mt-4"> Lakukan pembayaran dari rekening ke nomor virtual account di atas. </p>
            </div>
                <div className="mt-4">
                    <details className="bg-gray-200 p-2 rounded-lg text-sm sm:text-base">
                        <summary className="font-medium cursor-pointer">Petunjuk Pembayaran </summary>
                        <p className="text-sm mt-2 text-gray-600"> Masukkan nomor virtual account ke dalam aplikasi pembayaran Anda dan selesaikan transaksi.</p>
                    </details>
                </div>
                <button className="w-full mt-4 bg-black text-white py-2 rounded-lg font-medium">OK</button>
            </div>
        </div>
    );
};

export default SubPembayaran;
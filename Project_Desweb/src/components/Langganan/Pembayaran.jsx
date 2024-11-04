import React from 'react';

function Pembayaran() {
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
          {/* Header */}
          <div className="flex items-center mb-4">
            <button className="text-gray-500 hover:text-gray-700">
              {/* Back Arrow Icon (replace with an actual icon if needed) */}
              <span>&larr;</span>
            </button>
            <h1 className="ml-4 text-lg font-semibold">Payment</h1>
          </div>
          <hr className="mb-8" />
  
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Box: Package Details */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h2 className="text-md font-medium mb-4">Paket 1 Bulan</h2>
              <div className="text-gray-600 mb-2">Total</div>
              <div className="text-2xl font-bold text-gray-800 mb-4">Rp 199.000</div>
              <div className="flex justify-center">
      <button className="px-6 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-600">
        Continue
      </button>
    </div>
  </div>
  
            {/* Right Box: Payment Methods */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <p className="mb-4 text-center font-semibold">Choose Payment Method</p>
            <p className="mb-4 text-center font-semibold text-gray-900">Virtual Account</p>
            <div className="flex flex-col items-center space-y-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Logo_BRI.png" alt="BRI" className="w-20" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/BCA_logo.svg" alt="BCA" className="w-20" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Logo_Bank_Negara_Indonesia_%28BNI%29.svg" alt="BNI" className="w-20" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Bank_Mandiri_logo.png" alt="Mandiri" className="w-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
}

export default Pembayaran;
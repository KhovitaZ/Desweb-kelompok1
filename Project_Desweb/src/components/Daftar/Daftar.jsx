import React from 'react';
import gambarLogin from "../../assets/login/gambarLogin.png";

const RegisterPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-200 relative"
        style={{
            backgroundImage: `url(${gambarLogin})`,
            backgroundSize: 'cover',   // Menyesuaikan ukuran gambar untuk menutupi seluruh area
            backgroundPosition: 'center', // Posisikan gambar di tengah
            backgroundRepeat: 'no-repeat' // Gambar tidak diulang
        }}>
            {/* Bagian Kiri dengan Tulisan "STARTUP ACADEMY" dan Dekorasi */}
            <div className="absolute left-16 top-1/3 text-white">
                <h1 className="text-5xl font-bold leading-tight mb-4">
                    STARTUP<br />ACADEMY
                </h1>
            </div>

            {/* Kotak Daftar */}
            <div className="bg-white shadow-lg rounded-lg p-10 max-w-lg w-full mx-auto mr-16 lg:mr-32">
                <h2 className="text-3xl font-bold mb-6 text-center">Daftar</h2>
                <form className="space-y-6">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="📞 Number"
                            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="relative">
                        <input
                            type="email"
                            placeholder="📧 Email"
                            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="relative">
                        <input
                            type="password"
                            placeholder="🔒 Password"
                            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="relative">
                        <input
                            type="password"
                            placeholder="🔒 Re-password"
                            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <button className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
                        Daftar
                    </button>
                    <div className="text-center text-sm">
                        Sudah Punya Akun? <a href="#" className="text-blue-500 hover:underline">Login</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;
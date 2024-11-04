import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import RegisterPage from "./components/Daftar/Daftar";
import Login from "./components/Login/Login"; // Import halaman Daftar
import Langganan from "./components/Langganan/Langganan";
import SubBerita from "./components/Berita/subBerita";
import Pembayaran from "./components/Langganan/Pembayaran";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <Router>
      <div className="bg-[#EEEEEE] dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/daftar" element={<RegisterPage />} /> {/* Rute untuk halaman Daftar */}
          <Route path="/Pembayaran" element={<Pembayaran />} />
          <Route path="/SubBerita" element={<SubBerita />} />
          <Route path="/langganan" element={<Langganan />} />
          
        </Routes>
        
      </div>
    </Router>
  );
};

export default App;

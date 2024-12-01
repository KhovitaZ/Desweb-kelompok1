import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import RegisterPage from "./components/Daftar/Daftar";
import Login from "./components/Login/Login";
import Langganan from "./components/Langganan/Langganan";
import AboutUs from "./components/AboutUs/AboutUs";
import SubBerita from "./components/Berita/Finansial";
import Pembayaran from "./components/Langganan/Pembayaran";
import SubPembayaran from "./components/Langganan/subPembayaran";
import SubProgram from "./components/Program/subProgram";
import MarketStrategy from "./components/Program/MarketStrategy";
import FinancialBenchmarks from "./components/Program/FinancialBenchmarks";
import ProductDevelopment from "./components/Program/ProductDevelopment";
import SalesAndCustomer from "./components/Program/SalesAndCustomer";
import SahamPasarModal from "./components/Program/SahamPasarModal";
import TargetAudience from "./components/Program/TargetAudience";
import GotoMarket from "./components/Program/GotoMarket";
import CompetitiveAnalysis from "./components/Program/CompetitiveAnalysis";
import MarketResearch from "./components/Program/MarketResearch";
import BasicFinancial from "./components/Program/BasicFinancial";
import RevenueModels from "./components/Program/RevenueModels";
import StartupFinancial from "./components/Program/StartupFinancial";
import FinancialForecasting from "./components/Program/FinancialForecasting";
import FundingInvestment from "./components/Program/FundingInvestment";
import MVP from "./components/Program/MVP";
import LeanStartup from "./components/Program/LeanStartup";
import PrototypingTesting from "./components/Program/PrototypingTesting";
import AgileDevelopment from "./components/Program/AgileDevelopment";
import SalesFunnel from "./components/Program/SalesFunnel";
import PricingStrategies from "./components/Program/PricingStrategies";
import CustomerRetention from "./components/Program/CustomerRetention";
import PengenalanPasar from "./components/Program/PengenalanPasar";
import InstrumenPasar from "./components/Program/InstrumenPasar";
import MekanismePerdagangan from "./components/Program/MekanismePerdagangan";
import AnalisisFundamental from "./components/Program/AnalisisFundamental";
import AnalisisTeknikal from "./components/Program/AnalisisTeknikal";
import ManajemenRisiko from "./components/Program/ManajemenRisiko";
import PsikologiInvestasi from "./components/Program/PsikologiInvestasi";
import StrategiInvestasi from "./components/Program/StrategiInvestasi";

import SubEvent from "./components/Event/SubEvent";
import IsiEvent1 from "./components/Event/IsiEvent/IsiEvent1";
import IsiEvent2 from "./components/Event/IsiEvent/IsiEvent2";
import IsiEvent3 from "./components/Event/IsiEvent/IsiEvent3";
import IsiEvent4 from "./components/Event/IsiEvent/IsiEvent4";

import IsiBerita from "./components/Berita/IsiBerita";
import Finansial from "./components/Berita/Finansial";
import BeritaUtama from "./components/Berita/BeritaUtama";



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
          <Route path="/daftar" element={<RegisterPage />} />
          <Route path="/subberita" element={<SubBerita />} />
          <Route path="/langganan" element={<Langganan />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/pembayaran" element={<Pembayaran />} />
          <Route path="/subpembayaran" element={<SubPembayaran />} />
          <Route path="/subprogram" element={<SubProgram />} />
          <Route path="/marketStrategy" element={<MarketStrategy />} />
          <Route path="/financialBenchmarks" element={<FinancialBenchmarks />} />
          <Route path="/productDevelopment" element={<ProductDevelopment />} />
          <Route path="/salesAndCustomer" element={<SalesAndCustomer />} />
          <Route path="/sahamPasarModal" element={<SahamPasarModal />} />
          <Route path="/targetAudience" element={<TargetAudience />} />
          <Route path="/gotoMarket" element={<GotoMarket />} />
          <Route path="/competitiveAnalysis" element={<CompetitiveAnalysis />} />
          <Route path="/marketResearch" element={<MarketResearch />} />
          <Route path="/basicFinancial" element={<BasicFinancial />} />
          <Route path="/revenueModels" element={<RevenueModels />} />
          <Route path="/startupFinancial" element={<StartupFinancial />} />
          <Route path="/financialForecasting" element={<FinancialForecasting />} />
          <Route path="/fundingInvestment" element={<FundingInvestment />} />
          <Route path="/mvp" element={<MVP />} />
          <Route path="/leanStartup" element={<LeanStartup />} />
          <Route path="/prototypingTesting" element={<PrototypingTesting />} />
          <Route path="/agileDevelopment" element={<AgileDevelopment />} />
          <Route path="/salesFunnel" element={<SalesFunnel />} />
          <Route path="/pricingStrategies" element={<PricingStrategies />} />
          <Route path="/customerRetention" element={<CustomerRetention />} />
          <Route path="/pengenalanPasar" element={<PengenalanPasar />} />
          <Route path="/instrumenPasar" element={<InstrumenPasar />} />
          <Route path="/mekanismePerdagangan" element={<MekanismePerdagangan />} />
          <Route path="/analisisFundamental" element={<AnalisisFundamental />} />
          <Route path="/analisisTeknikal" element={<AnalisisTeknikal />} />
          <Route path="/manajemenRisiko" element={<ManajemenRisiko />} />
          <Route path="/psikologiInvestasi" element={<PsikologiInvestasi />} />
          <Route path="/strategiInvestasi" element={<StrategiInvestasi />} />

          <Route path="/subEvent" element={<SubEvent />} />
          <Route path="/isiEvent1" element={<IsiEvent1 />} />
          <Route path="/isiEvent2" element={<IsiEvent2 />} />
          <Route path="/isiEvent3" element={<IsiEvent3 />} />
          <Route path="/isiEvent4" element={<IsiEvent4 />} />

          <Route path="/isiBerita" element={<IsiBerita />} />
          <Route path="/finansial" element={<Finansial />} />
          <Route path="/beritaUtama" element={<BeritaUtama />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExecutiveSummary from './components/ExecutiveSummary';
import CompanyDescription from './components/CompanyDescription';
import MarketAnalysis from './components/MarketAnalysis';
import OrganizationManagement from './components/OrganizationManagement';
import ProductsServices from './components/ProductsServices';
import MarketingSales from './components/MarketingSales';
import OperationalPlan from './components/OperationalPlan';
import FinancialPlan from './components/FinancialPlan';
import FundingRequest from './components/FundingRequest';
import ConclusionTimeline from './components/ConclusionTimeline';
import Appendices from './components/Appendices';
import Footer from './components/Footer';
import ProclamationModal from './components/ProclamationModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-stone-50 text-stone-800 selection:bg-emerald-200 selection:text-emerald-900 min-h-screen">
      {/* Navigation Header */}
      <Navbar
        onOpenModal={() => setIsModalOpen(true)}
        onScrollTo={handleScrollTo}
      />

      {/* Main Sections */}
      <main className="pt-16">
        <Hero onScrollTo={handleScrollTo} />
        <ExecutiveSummary />
        <CompanyDescription />
        <MarketAnalysis />
        <OrganizationManagement />
        <ProductsServices />
        <MarketingSales />
        <OperationalPlan />
        <FinancialPlan />
        <FundingRequest />
        <ConclusionTimeline />
        <Appendices />
      </main>

      {/* Footer and Academic Info */}
      <Footer onScrollTo={handleScrollTo} />

      {/* Interactive Proclamation Modal */}
      <ProclamationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

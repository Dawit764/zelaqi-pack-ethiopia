import { useState } from 'react';
import { Leaf, Scale, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenModal: () => void;
  onScrollTo: (id: string) => void;
}

export default function Navbar({ onOpenModal, onScrollTo }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: 'summary', label: '1.1 Summary' },
    { id: 'overview', label: '1.2 Company' },
    { id: 'market', label: '1.3 Market' },
    { id: 'org', label: '1.4 Organization' },
    { id: 'products', label: '1.5 Products' },
    { id: 'sales', label: '1.6 Sales' },
    { id: 'operational', label: '1.7 Operational' },
    { id: 'financials', label: '1.8 Financials' },
    { id: 'funding', label: '1.9 Funding' },
    { id: 'conclusion', label: '1.10 Conclusion' },
    { id: 'appendices', label: '1.11 Appendices' },
  ];

  const handleNavClick = (id: string) => {
    onScrollTo(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-stone-200 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand logo */}
          <div
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavClick('hero')}
            id="nav-logo"
          >
            <div className="bg-emerald-100 p-2 rounded-lg">
              <Leaf className="text-emerald-600 w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight text-stone-900 block leading-none">
                ZELAQI PACK
              </span>
              <span className="text-xs text-emerald-700 tracking-widest uppercase font-extrabold block mt-1">
                Ethiopia
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex space-x-1 lg:space-x-3">
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => handleNavClick(sec.id)}
                className="px-2 py-2 text-xs font-bold text-stone-600 hover:text-emerald-600 transition-colors cursor-pointer"
                id={`btn-nav-${sec.id}`}
              >
                {sec.label}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenModal}
              className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-100 hover:bg-emerald-100 transition-all flex items-center gap-1.5 cursor-pointer"
              id="btn-nav-proclamation"
            >
              <Scale className="w-4 h-4" /> Proclamation 1383/2025
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-stone-900 focus:outline-none focus:text-stone-900 cursor-pointer"
              id="btn-mobile-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div id="mobile-menu" className="xl:hidden bg-white border-b border-stone-200 px-4 pt-2 pb-4 space-y-1">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => handleNavClick(sec.id)}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-semibold text-stone-700 hover:bg-stone-50 hover:text-emerald-600 cursor-pointer"
              id={`btn-mob-${sec.id}`}
            >
              {sec.label}
            </button>
          ))}
          <div className="pt-2 border-t border-stone-100">
            <button
              onClick={() => {
                onOpenModal();
                setIsOpen(false);
              }}
              className="w-full text-center py-2 text-xs font-bold text-emerald-700 bg-emerald-50 rounded-lg border border-emerald-100 cursor-pointer"
              id="btn-mob-proclamation"
            >
              Proclamation 1383/2025
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

import { useState } from 'react';
import { TrendingUp, Users, Shield, Tag, CheckCircle2 } from 'lucide-react';

export default function MarketAnalysis() {
  const [activeTab, setActiveTab] = useState<'industry' | 'competition' | 'swot'>('industry');

  return (
    <section id="market" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-emerald-800 font-bold text-xs uppercase tracking-widest bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
            Section 1.3
          </span>
          <h2 className="text-3xl font-extrabold text-stone-900 mt-3 mb-4">Market Analysis</h2>
          <div className="h-1 bg-emerald-500 mx-auto rounded-full w-20"></div>
        </div>

        {/* Market Navigation Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-stone-100 p-1 rounded-xl inline-flex gap-2 border border-stone-200">
            <button
              onClick={() => setActiveTab('industry')}
              className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'industry' ? 'bg-white text-emerald-800 shadow-sm' : 'text-stone-600 hover:text-stone-950'
              }`}
              id="btn-market-industry"
            >
              Industry Analysis
            </button>
            <button
              onClick={() => setActiveTab('competition')}
              className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'competition' ? 'bg-white text-emerald-800 shadow-sm' : 'text-stone-600 hover:text-stone-950'
              }`}
              id="btn-market-competition"
            >
              Competitive Strategy
            </button>
            <button
              onClick={() => setActiveTab('swot')}
              className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'swot' ? 'bg-white text-emerald-800 shadow-sm' : 'text-stone-600 hover:text-stone-950'
              }`}
              id="btn-market-swot"
            >
              S.W.O.T. Profile
            </button>
          </div>
        </div>

        {/* Market Tab 1: Industry */}
        {activeTab === 'industry' && (
          <div id="market-content-industry" className="grid md:grid-cols-2 gap-8 items-start transition-all duration-300 animate-fadeIn">
            <div className="bg-stone-50 p-6 sm:p-8 rounded-2xl border border-stone-200">
              <h3 className="text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
                <TrendingUp className="text-emerald-600 w-5 h-5" /> Industry Analysis & Forecast
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed mb-4 text-justify">
                The packaging industry in Ethiopia is experiencing rapid changes due to a recently established ban on
                single-use plastics under Proclamation No. 1383/2025. As plastic had been used more than any other
                material until this point, there is currently a huge market shortage.
              </p>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed text-justify">
                Consumers and commercial entities are rapidly moving towards paper-based products and other sustainable
                packaging materials. This creates a highly profitable and fast-growing market niche for localized
                operations.
              </p>
            </div>

            <div className="bg-emerald-50/40 p-6 sm:p-8 rounded-2xl border border-emerald-150">
              <h3 className="text-lg font-bold text-emerald-950 mb-4 flex items-center gap-2">
                <Users className="text-emerald-700 w-5 h-5" /> Target Market Segments
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mb-4 leading-relaxed text-justify">
                Our target market of Zelaqi Pack Ethiopia includes firms and individual households located in Addis
                Ababa. Mainly, it consists of small shops, supermarket chains, and wholesalers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-stone-850 font-bold text-xs md:text-sm">
                <div className="bg-white p-3 rounded-lg border border-emerald-200 flex items-center gap-2 shadow-xs">
                  <CheckCircle2 className="text-emerald-500 w-4 h-4 shrink-0" />
                  <span>Merkato Wholesalers</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-emerald-200 flex items-center gap-2 shadow-xs">
                  <CheckCircle2 className="text-emerald-500 w-4 h-4 shrink-0" />
                  <span>Supermarkets & Retailers</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-emerald-200 flex items-center gap-2 shadow-xs">
                  <CheckCircle2 className="text-emerald-500 w-4 h-4 shrink-0" />
                  <span>Restaurants & Hotels</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-emerald-200 flex items-center gap-2 shadow-xs">
                  <CheckCircle2 className="text-emerald-500 w-4 h-4 shrink-0" />
                  <span>NGOs & Exporters</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Market Tab 2: Competition */}
        {activeTab === 'competition' && (
          <div id="market-content-competition" className="grid md:grid-cols-2 gap-8 items-start transition-all duration-300 animate-fadeIn">
            <div className="bg-stone-50 p-6 sm:p-8 rounded-2xl border border-stone-200">
              <h3 className="text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
                <Shield className="text-emerald-600 w-5 h-5" /> Competitive Landscape
              </h3>
              <p className="text-stone-700 text-xs md:text-sm leading-relaxed mb-4 text-justify">
                In the local market, there are various kinds of suppliers competing with each other. Some are
                specialized in dealing with recyclable items while some others sell bags at higher prices via online
                markets. Industrial giants manufacture sacks made of thick material used in construction projects and
                farming.
              </p>
              <p className="text-emerald-950 bg-emerald-100/40 p-4 rounded-xl border border-emerald-200 text-xs md:text-sm font-bold leading-relaxed">
                <strong>Zelaqi Pack Advantage:</strong> We bridge the gap between these competitors by selling our
                products at highly reasonable rates at an accessible location. This will enable us to be more flexible
                compared to distant industries and expensive online sellers.
              </p>
            </div>

            <div className="bg-stone-900 text-white p-6 sm:p-8 rounded-2xl border border-stone-850 shadow-sm">
              <h3 className="text-lg font-bold text-amber-400 mb-4 flex items-center gap-2 animate-pulse">
                <Tag className="w-5 h-5" /> Pricing Strategy
              </h3>
              <p className="text-stone-300 text-xs md:text-sm leading-relaxed mb-4 text-justify">
                Prices will be charged considering the production costs together with the required profit margin to
                ensure affordability relative to competing products.
              </p>
              <div className="bg-stone-800 p-4 rounded-xl border border-stone-700 space-y-3">
                <div className="flex justify-between text-xs sm:text-sm font-bold text-emerald-400 border-b border-stone-700 pb-2">
                  <span>Kraft Bag Base Price</span>
                  <span>10 ETB / Unit</span>
                </div>
                <div className="flex justify-between text-xs text-stone-400">
                  <span>Wholesale Orders</span>
                  <span className="text-white">Tiered Bulk Discounts</span>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed italic">
                  Bulk discounts incentivize wholesalers in Merkato to purchase large volumes, allowing us to
                  maintain high machinery utilization.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Market Tab 3: SWOT */}
        {activeTab === 'swot' && (
          <div id="market-content-swot" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-300 animate-fadeIn">
            <div className="p-6 rounded-xl border border-emerald-200 bg-emerald-50/50 flex flex-col justify-between">
              <div>
                <div className="h-8 w-8 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-800 font-bold text-sm mb-4">
                  S
                </div>
                <h4 className="text-emerald-950 font-bold text-sm mb-2 uppercase tracking-wider">Strengths</h4>
                <p className="text-stone-700 text-xs leading-relaxed text-justify">
                  Ideal strategic location near Merkato, low logistical expenses, and a straightforward partners-based
                  organizational structure.
                </p>
              </div>
            </div>
            
            <div className="p-6 rounded-xl border border-red-200 bg-red-50/50 flex flex-col justify-between">
              <div>
                <div className="h-8 w-8 bg-red-100 rounded-lg flex items-center justify-center text-red-800 font-bold text-sm mb-4">
                  W
                </div>
                <h4 className="text-red-950 font-bold text-sm mb-2 uppercase tracking-wider">Weaknesses</h4>
                <p className="text-stone-700 text-xs leading-relaxed text-justify">
                  Firm does not have sufficient initial capital and lacks brand history in comparison with its rivals.
                </p>
              </div>
            </div>
            
            <div className="p-6 rounded-xl border border-blue-200 bg-blue-50/50 flex flex-col justify-between">
              <div>
                <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-800 font-bold text-sm mb-4">
                  O
                </div>
                <h4 className="text-blue-950 font-bold text-sm mb-2 uppercase tracking-wider">Opportunities</h4>
                <p className="text-stone-700 text-xs leading-relaxed text-justify">
                  The absolute prohibition of plastic bags provides immense opportunities for developing new goods due
                  to increased environmental awareness.
                </p>
              </div>
            </div>
            
            <div className="p-6 rounded-xl border border-amber-200 bg-amber-50/50 flex flex-col justify-between">
              <div>
                <div className="h-8 w-8 bg-amber-100 rounded-lg flex items-center justify-center text-amber-800 font-bold text-sm mb-4">
                  T
                </div>
                <h4 className="text-amber-950 font-bold text-sm mb-2 uppercase tracking-wider">Threats</h4>
                <p className="text-stone-700 text-xs leading-relaxed text-justify">
                  Local inflation increasing the cost of imported Kraft paper rolls and emergence of new paper bag
                  producers.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

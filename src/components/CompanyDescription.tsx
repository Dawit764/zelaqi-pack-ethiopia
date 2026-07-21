import { useState } from 'react';
import { Building2, Lightbulb, MapPin, Compass, Gavel, Globe, Target, CheckCircle } from 'lucide-react';

export default function CompanyDescription() {
  const [activeTab, setActiveTab] = useState<'profile' | 'strategy'>('profile');

  return (
    <section id="overview" className="py-20 bg-stone-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-stone-600 font-bold text-xs uppercase tracking-widest bg-stone-200/80 px-3 py-1 rounded-full border border-stone-300">
            Section 1.2
          </span>
          <h2 className="text-3xl font-extrabold text-stone-900 mt-3 mb-4">Company Description</h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-sm md:text-base">
            Explore our corporate description, legal foundation, and structural targets.
          </p>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Interactive Section Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-stone-200 p-1.5 rounded-xl inline-flex gap-2 border border-stone-300">
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'profile'
                  ? 'bg-white text-emerald-800 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              id="btn-tab-profile"
            >
              <Building2 className="w-4 h-4" /> Overview Description
            </button>
            <button
              onClick={() => setActiveTab('strategy')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'strategy'
                  ? 'bg-white text-emerald-800 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              id="btn-tab-strategy"
            >
              <Compass className="w-4 h-4" /> Strategic Framework
            </button>
          </div>
        </div>

        {/* Tab Content 1: Company Description */}
        {activeTab === 'profile' && (
          <div id="tab-content-profile" className="grid lg:grid-cols-3 gap-6 transition-all duration-300">
            {/* Core Corporate Profile */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 flex flex-col justify-between">
              <div>
                <div className="inline-flex p-3 bg-emerald-100 text-emerald-700 rounded-xl mb-6">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-4">Corporate Summary</h3>
                <ul className="space-y-3.5 text-sm text-stone-600">
                  <li className="flex justify-between border-b border-stone-100 pb-2">
                    <span className="font-semibold text-stone-500">Business Name:</span>
                    <span className="text-stone-950 font-bold">Zelaqi Pack Ethiopia</span>
                  </li>
                  <li className="flex flex-col border-b border-stone-100 pb-2.5">
                    <span className="font-semibold text-stone-500 mb-0.5">Ownership Type:</span>
                    <span className="text-stone-950 text-xs md:text-sm font-medium leading-relaxed">
                      Partnership (pooling ETB 500,000 and working collectively in decision-making).
                    </span>
                  </li>
                  <li className="flex justify-between border-b border-stone-100 pb-2">
                    <span className="font-semibold text-stone-500">Industry Sector:</span>
                    <span className="text-stone-950 font-medium">Eco-Packaging Manufacturing</span>
                  </li>
                  <li className="flex justify-between border-b border-stone-100 pb-2">
                    <span className="font-semibold text-stone-500">Status:</span>
                    <span className="text-amber-800 font-bold bg-amber-50 px-2.5 py-0.5 rounded-full text-xs">
                      Startup Stage
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 text-xs text-stone-500 font-bold italic">
                Focusing on initial equipment procurement and formal business licenses.
              </div>
            </div>

            {/* Concept & Value Prop (USP) */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 flex flex-col justify-between">
              <div>
                <div className="inline-flex p-3 bg-amber-100 text-amber-700 rounded-xl mb-6">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-4">Concept & Value Prop</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-stone-850 text-sm mb-1">Business Concept</h4>
                    <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
                      Improving traditional paper bags through innovation and quality enhancement, increasing their
                      durability, ability to bear heavy loads and meeting daily demands of city retailers at
                      affordable prices.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-850 text-sm mb-1">Unique Selling Proposition (USP)</h4>
                    <p className="text-stone-900 text-xs md:text-sm leading-relaxed bg-emerald-50/70 p-3 rounded-lg border border-emerald-100 text-emerald-950 font-semibold">
                      The uniqueness about our products is that we have the ability to provide the product locally
                      and very quickly, which means we meet the requirements of the law and help organizations save
                      on any fines.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 text-xs text-stone-500 font-bold">
                <strong>Target focus:</strong> Multi-use and eco-friendly shop carriers.
              </div>
            </div>

            {/* Logistics & Compliance */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 flex flex-col justify-between">
              <div>
                <div className="inline-flex p-3 bg-stone-150 text-stone-700 rounded-xl mb-6">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-4">Logistics & Compliance</h3>
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <Compass className="text-emerald-600 w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-stone-850 text-xs md:text-sm">Strategic Headquarters</h4>
                      <p className="text-stone-600 text-xs leading-relaxed mt-0.5">
                        Operating from Addis Ketema sub-city to remain close to the high-density Merkato market. It
                        saves us cost of logistics and ensures effective face-to-face transactions with suppliers
                        and wholesalers.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start border-t border-stone-100 pt-3">
                    <Gavel className="text-emerald-600 w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-stone-850 text-xs md:text-sm">Regulatory Alignment</h4>
                      <p className="text-stone-600 text-xs leading-relaxed mt-0.5">
                        Governed by the Ethiopian Commercial Code, with planned support under the Micro and Small
                        Enterprises (MSE) government program.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 text-xs text-stone-500 font-bold">
                Registered partner equity capital secured.
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 2: Strategic Framework & Objectives */}
        {activeTab === 'strategy' && (
          <div id="tab-content-strategy" className="space-y-8 transition-all duration-300">
            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-emerald-950 text-emerald-100 p-8 rounded-2xl border border-stone-800 relative overflow-hidden shadow-sm">
                <div className="absolute right-0 bottom-0 opacity-10 translate-y-4 translate-x-4">
                  <Globe className="w-32 h-32" />
                </div>
                <span className="text-amber-400 uppercase tracking-widest text-xs font-bold block mb-2">
                  Our Long-term Vision
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white leading-relaxed font-serif">
                  To support Ethiopia in its efforts to be free from plastic materials through a highly credible,
                  Addis Ababa-based firm.
                </h3>
              </div>

              <div className="bg-stone-900 text-stone-100 p-8 rounded-2xl border border-stone-850 relative overflow-hidden shadow-sm">
                <div className="absolute right-0 bottom-0 opacity-10 translate-y-4 translate-x-4">
                  <Target className="w-32 h-32" />
                </div>
                <span className="text-emerald-400 uppercase tracking-widest text-xs font-bold block mb-2">
                  Our Tactical Mission
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white leading-relaxed font-serif">
                  To offer viable and cheap paper packages that will help retail merchants and daily operations
                  eliminate their plastic counterparts.
                </h3>
              </div>
            </div>

            {/* Core Corporate Objectives Grid */}
            <div>
              <h3 className="text-lg font-bold text-stone-900 mb-6 flex items-center gap-2">
                <CheckCircle className="text-emerald-600 w-5 h-5" /> Strategic Objectives
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-emerald-700 block mb-2 uppercase tracking-wider">
                      Financial Goal
                    </span>
                    <h4 className="font-extrabold text-stone-900 text-sm mb-1.5 leading-snug">
                      Break Even Within 10 Months
                    </h4>
                    <p className="text-stone-500 text-xs leading-relaxed">
                      Through effective management of fixed costs and cost of labor.
                    </p>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-emerald-700 block mb-2 uppercase tracking-wider">
                      Operational Goal
                    </span>
                    <h4 className="font-extrabold text-stone-900 text-sm mb-1.5 leading-snug">Facility Setup</h4>
                    <p className="text-stone-500 text-xs leading-relaxed">
                      Construct production facilities in Addis Ketema with 6 employees and achieve steady production
                      after the first 3 months.
                    </p>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-emerald-700 block mb-2 uppercase tracking-wider">
                      Market Goal
                    </span>
                    <h4 className="font-extrabold text-stone-900 text-sm mb-1.5 leading-snug">
                      Secure 50+ Retailers
                    </h4>
                    <p className="text-stone-500 text-xs leading-relaxed">
                      Enter into supply contracts with a minimum of 50 small-to-medium retailers based in Merkato
                      after 6 months.
                    </p>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-emerald-700 block mb-2 uppercase tracking-wider">
                      Sustainability Goal
                    </span>
                    <h4 className="font-extrabold text-stone-900 text-sm mb-1.5 leading-snug">
                      100% Local Sourcing
                    </h4>
                    <p className="text-stone-500 text-xs leading-relaxed">
                      Ensure the use of local raw materials only to minimize dependency on imports and strengthen the
                      local circular economy.
                    </p>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-emerald-700 block mb-2 uppercase tracking-wider">
                      Compliance Goal
                    </span>
                    <h4 className="font-extrabold text-stone-900 text-sm mb-1.5 leading-snug">Policy Adherence</h4>
                    <p className="text-stone-500 text-xs leading-relaxed">
                      Strictly adhere to government rules and policies regarding environmental safe-guarding.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

import { useState } from 'react';
import { ShoppingBag, Utensils, Layers, Printer, Boxes, Factory, Zap, Users } from 'lucide-react';
import { supplierContacts } from '../data';

export default function ProductsServices() {
  const [activeTab, setActiveTab] = useState<'products' | 'factory' | 'staff'>('products');

  return (
    <section id="products" className="py-20 bg-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest bg-stone-800 px-3 py-1 rounded-full border border-stone-700">
            Section 1.5
          </span>
          <h2 className="text-3xl font-bold mt-4 mb-4 text-white">Products and Services</h2>
          <div className="h-1 bg-amber-500 mx-auto rounded-full w-20"></div>
        </div>

        {/* Products Subnav */}
        <div className="flex justify-center mb-10">
          <div className="bg-stone-850 p-1 rounded-xl inline-flex gap-2 border border-stone-700">
            <button
              onClick={() => setActiveTab('products')}
              className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'products' ? 'bg-amber-500 text-stone-950 shadow-sm' : 'text-stone-300 hover:text-white'
              }`}
              id="btn-tech-products"
            >
              Products & Raw Materials
            </button>
            <button
              onClick={() => setActiveTab('factory')}
              className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'factory' ? 'bg-amber-500 text-stone-950 shadow-sm' : 'text-stone-300 hover:text-white'
              }`}
              id="btn-tech-factory"
            >
              Facility & Utilities
            </button>
            <button
              onClick={() => setActiveTab('staff')}
              className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'staff' ? 'bg-amber-500 text-stone-950 shadow-sm' : 'text-stone-300 hover:text-white'
              }`}
              id="btn-tech-staff"
            >
              Staffing & Salaries
            </button>
          </div>
        </div>

        {/* Tech Tab 1: Products */}
        {activeTab === 'products' && (
          <div id="tech-content-products" className="space-y-8 transition-all duration-300 animate-fadeIn">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-stone-850 p-6 rounded-xl border border-stone-800">
                <div className="h-12 w-12 bg-stone-800 text-amber-500 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-amber-400 mb-2">Satchel / Shopping Bags</h4>
                <p className="text-stone-300 text-xs leading-relaxed">
                  Flat-bottom or gusseted with handles in sizes 8×4×12–10×5×15 inches. Durable and high load-bearing.
                </p>
              </div>
              
              <div className="bg-stone-850 p-6 rounded-xl border border-stone-800">
                <div className="h-12 w-12 bg-stone-800 text-amber-500 rounded-lg flex items-center justify-center mb-4">
                  <Utensils className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-amber-400 mb-2">Grocery & Bakery Bags</h4>
                <p className="text-stone-300 text-xs leading-relaxed">
                  Flat-bottom grocery/bakery bags with no handles, customized to various heights and dimensions.
                </p>
              </div>
              
              <div className="bg-stone-850 p-6 rounded-xl border border-stone-800">
                <div className="h-12 w-12 bg-stone-800 text-amber-500 rounded-lg flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-amber-400 mb-2">Multiwall Paper Sacks</h4>
                <p className="text-stone-300 text-xs leading-relaxed">
                  Highly durable, multi-layered sacks for grains, flour, and industrial building elements.
                </p>
              </div>
              
              <div className="bg-stone-850 p-6 rounded-xl border border-stone-800">
                <div className="h-12 w-12 bg-stone-800 text-amber-500 rounded-lg flex items-center justify-center mb-4">
                  <Printer className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-amber-400 mb-2">Custom Printed Bags</h4>
                <p className="text-stone-300 text-xs leading-relaxed">
                  Custom printed branding designs with flexographic printing as local retail demand grows.
                </p>
              </div>
            </div>

            <div className="bg-stone-850 rounded-2xl p-6 sm:p-8 border border-stone-800">
              <h3 className="text-lg font-bold text-amber-400 mb-4 flex items-center gap-2">
                <Boxes className="w-5 h-5 shrink-0" /> Raw Material Procurement Pipeline
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-6 text-justify">
                The primary raw material for paper bag production is unbleached kraft paper in roll or sheet form,
                typically ranging from 50–100 gsm depending on the required strength and application of the bags. Since
                Ethiopia has limited large-scale paper manufacturing capacity, most kraft paper is imported.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-stone-900 p-4 rounded-xl border border-stone-800">
                  <span className="text-amber-500 text-xs font-bold block mb-1">Key Inputs Sourced:</span>
                  <ul className="space-y-1.5 text-xs text-stone-300">
                    <li>• Unbleached Kraft Paper rolls (50-100 gsm)</li>
                    <li>• Paper thread & ribbon (for handle loops)</li>
                    <li>• Eco starch-based glue</li>
                    <li>• Non-toxic flexographic inks</li>
                  </ul>
                </div>
                
                <div className="bg-stone-900 p-4 rounded-xl border border-stone-800">
                  <span className="text-emerald-400 text-xs font-bold block mb-1">Local Sourcing Partners:</span>
                  <ul className="space-y-1.5 text-xs text-stone-300">
                    {supplierContacts.map((supplier) => (
                      <li key={supplier.supplier}>
                        • <strong>{supplier.supplier}</strong>: {supplier.product} ({supplier.contactInfo})
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tech Tab 2: Factory & Layout */}
        {activeTab === 'factory' && (
          <div id="tech-content-factory" className="grid md:grid-cols-2 gap-8 items-start transition-all duration-300 animate-fadeIn">
            <div className="bg-stone-850 p-6 sm:p-8 rounded-2xl border border-stone-800">
              <h3 className="text-lg font-bold text-amber-400 mb-4 flex items-center gap-2">
                <Factory className="w-5 h-5" /> Facility Capacity & Layout
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-4 text-justify">
                A workshop floor of <strong>~100–150 m²</strong> located in Addis Ketema is structured to organize the
                workflow seamlessly:
              </p>
              <ul className="space-y-3 text-stone-300 text-xs sm:text-sm">
                <li className="flex gap-2">
                  <span className="text-amber-500 shrink-0 font-bold">✓</span>
                  <span><strong>Intake zone:</strong> Secure storage for bulky raw Kraft paper rolls.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-500 shrink-0 font-bold">✓</span>
                  <span><strong>Production lines:</strong> Aligned semi-automatic cutting and gluing machines.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-500 shrink-0 font-bold">✓</span>
                  <span><strong>Packing & Dispatch:</strong> Finished-goods zone for bundle assembly and wholesale distribution.</span>
                </li>
              </ul>
            </div>

            <div className="bg-stone-850 p-6 sm:p-8 rounded-2xl border border-stone-800 space-y-4">
              <h3 className="text-lg font-bold text-amber-400 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 animate-bounce" /> Infrastructure & Waste Management
              </h3>
              <div className="p-3 bg-stone-900 rounded-xl border border-stone-800">
                <strong className="text-white block text-sm mb-1">Utilities Requirements</strong>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Requires grid electricity (5–10 kW) to run bag machinery. Municipal water needs are negligible.
                </p>
              </div>
              <div className="p-3 bg-stone-900 rounded-xl border border-stone-800">
                <strong className="text-white block text-sm mb-1">Power Outage Mitigation</strong>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Backed by a <strong>15 kVA diesel generator</strong> to ensure continuous production and prevent
                  disruption from municipal grid blackouts.
                </p>
              </div>
              <div className="p-3 bg-stone-900 rounded-xl border border-stone-800">
                <strong className="text-white block text-sm mb-1">Zero Solid Waste Loop</strong>
                <p className="text-xs text-stone-400 leading-relaxed">
                  All paper offcuts and spoiled manufacturing remnants are systematically collected and sold back to
                  regional paper recyclers.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tech Tab 3: Staffing */}
        {activeTab === 'staff' && (
          <div id="tech-content-staff" className="space-y-6 transition-all duration-300 animate-fadeIn">
            <div className="bg-stone-850 p-6 rounded-2xl border border-stone-800">
              <h3 className="text-lg font-bold text-amber-400 mb-2 flex items-center gap-2">
                <Users className="w-5 h-5" /> Staff Training & Onboarding
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed text-justify">
                Prior to beginning full commercial runs, our workers will undergo <strong>1 to 2 weeks of detailed
                technical training</strong>. This focuses on machine settings calibration, equipment maintenance,
                workplace safety, and quality checks.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-stone-900">
              <div className="bg-white p-5 rounded-xl border border-stone-200 flex flex-col justify-between shadow-sm">
                <div>
                  <h4 className="font-black text-stone-900 text-sm mb-1">Owner / Manager</h4>
                  <div className="text-emerald-700 font-extrabold text-base mb-2">
                    8,000 ETB <span className="text-xs text-stone-500 font-normal">/mo basic</span>
                  </div>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    Responsible for general management, partnership logs, wholesale deals, and financial books.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-stone-100 text-xs text-amber-700 font-bold uppercase">
                  Includes +20% Benefits
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-stone-200 flex flex-col justify-between shadow-sm">
                <div>
                  <h4 className="font-black text-stone-900 text-sm mb-1">Machine Operator</h4>
                  <div className="text-emerald-700 font-extrabold text-base mb-2">
                    11,000 ETB <span className="text-xs text-stone-500 font-normal">/mo basic</span>
                  </div>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    Trained to handle semi-automatic cutting and folding units safely and efficiently.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-stone-100 text-xs text-amber-700 font-bold uppercase">
                  Includes +20% Benefits
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-stone-200 flex flex-col justify-between shadow-sm">
                <div>
                  <h4 className="font-black text-stone-900 text-sm mb-1">Helpers & Packers</h4>
                  <div className="text-emerald-700 font-extrabold text-base mb-2">
                    7,000 ETB <span className="text-xs text-stone-500 font-normal">/mo basic</span>
                  </div>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    Manage feeding processes, apply glue lines, assemble handles, and bundle final counts.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-stone-100 text-xs text-amber-700 font-bold uppercase">
                  Includes +20% Benefits
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-stone-200 flex flex-col justify-between shadow-sm">
                <div>
                  <h4 className="font-black text-stone-900 text-sm mb-1">Sales & Admin (Pt)</h4>
                  <div className="text-emerald-700 font-extrabold text-base mb-2">
                    Market Rate <span className="text-xs text-stone-500 font-normal">allowance</span>
                  </div>
                  <p className="text-stone-600 text-xs leading-relaxed">
                    Coordinates local marketing efforts and handles customer interactions with retail shops.
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-stone-100 text-xs text-amber-700 font-bold uppercase">
                  Bonus Incentives
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

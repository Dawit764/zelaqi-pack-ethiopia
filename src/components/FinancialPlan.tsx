import { useState } from 'react';
import { PieChart, BarChart3, TrendingUp, Scale, ListFilter } from 'lucide-react';
import { capexItems, monthlyProjections } from '../data';

export default function FinancialPlan() {
  const [activeTab, setActiveTab] = useState<'capex' | 'opex' | 'trends' | 'breakeven'>('capex');
  const [hoveredCapExIndex, setHoveredCapExIndex] = useState<number | null>(null);
  const [hoveredMonthIndex, setHoveredMonthIndex] = useState<number | null>(null);

  // Totals for CapEx
  const totalCapEx = 500000;

  // Render SVG Donut values
  // R=50 -> Circumference = 2 * pi * r = 314.159
  // Machinery: 32% -> dasharray="100.5 213.7"
  // Working Cap: 22% -> dasharray="69.1 245.1"
  // Premises: 20% -> dasharray="62.8 251.4"
  // Raw materials: 16% -> dasharray="50.3 263.9"
  // Office Equip: 4% -> dasharray="12.6 301.6"
  // Licenses: 3% -> dasharray="9.4 304.8"
  // Contingency: 3% -> dasharray="9.4 304.8"
  const strokeDasharrays = [
    { dash: '100.5 213.7', offset: 0 },
    { dash: '69.1 245.1', offset: -100.5 },
    { dash: '62.8 251.4', offset: -169.6 },
    { dash: '50.3 263.9', offset: -232.4 },
    { dash: '12.6 301.6', offset: -282.7 },
    { dash: '9.4 304.8', offset: -295.3 },
    { dash: '9.4 304.8', offset: -304.7 },
  ];

  const strokeColors = [
    '#059669', // bg-emerald-600
    '#f59e0b', // bg-amber-500
    '#44403c', // bg-stone-700
    '#14b8a6', // bg-teal-500
    '#34d399', // bg-emerald-400
    '#fcd34d', // bg-amber-300
    '#f87171', // bg-red-400
  ];

  return (
    <section id="financials" className="py-20 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-emerald-800 font-bold text-xs uppercase tracking-widest bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
            Section 1.8
          </span>
          <h2 className="text-3xl font-extrabold text-stone-900 mt-3 mb-2">Financial Engine Dashboard</h2>
          <p className="text-stone-600 text-xs sm:text-sm max-w-2xl mx-auto">
            Explore interactive breakdowns of CapEx, Monthly OPEX, 12-Month Performance, and Break-Even Margin of Safety calculations.
          </p>
          <div className="h-1 bg-emerald-500 mx-auto rounded-full w-20 mt-4"></div>
        </div>

        {/* Dashboard Tab Selection */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('capex')}
            className={`px-4 py-2 rounded-lg text-xs md:text-sm font-bold flex items-center gap-1.5 transition-all border cursor-pointer ${
              activeTab === 'capex'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
            }`}
            id="btn-fin-capex"
          >
            <PieChart className="w-4 h-4" /> Startup CapEx Setup
          </button>
          
          <button
            onClick={() => setActiveTab('opex')}
            className={`px-4 py-2 rounded-lg text-xs md:text-sm font-bold flex items-center gap-1.5 transition-all border cursor-pointer ${
              activeTab === 'opex'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
            }`}
            id="btn-fin-opex"
          >
            <BarChart3 className="w-4 h-4" /> Monthly OPEX Allocations
          </button>
          
          <button
            onClick={() => setActiveTab('trends')}
            className={`px-4 py-2 rounded-lg text-xs md:text-sm font-bold flex items-center gap-1.5 transition-all border cursor-pointer ${
              activeTab === 'trends'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
            }`}
            id="btn-fin-trends"
          >
            <TrendingUp className="w-4 h-4" /> 12-Month Performance
          </button>
          
          <button
            onClick={() => setActiveTab('breakeven')}
            className={`px-4 py-2 rounded-lg text-xs md:text-sm font-bold flex items-center gap-1.5 transition-all border cursor-pointer ${
              activeTab === 'breakeven'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
            }`}
            id="btn-fin-breakeven"
          >
            <Scale className="w-4 h-4" /> Break-Even Analysis
          </button>
        </div>

        {/* TAB 1: CAPEX DONUT CHART */}
        {activeTab === 'capex' && (
          <div id="fin-content-capex" className="grid md:grid-cols-2 gap-8 items-center bg-stone-50 p-6 sm:p-8 rounded-2xl border border-stone-200 transition-all duration-300">
            <div className="flex justify-center relative py-4">
              {/* Circular Donut SVG */}
              <svg className="w-64 h-64 transform -rotate-90" viewBox="0 0 120 120">
                {/* Background track */}
                <circle cx="60" cy="60" r="50" fill="transparent" stroke="#e7e5e4" strokeWidth="10" />
                
                {capexItems.map((item, index) => {
                  const strokeData = strokeDasharrays[index];
                  const color = strokeColors[index];
                  const isHovered = hoveredCapExIndex === index;
                  return (
                    <circle
                      key={item.name}
                      cx="60"
                      cy="60"
                      r="50"
                      fill="transparent"
                      stroke={color}
                      strokeWidth={isHovered ? 13 : 10}
                      strokeDasharray={strokeData.dash}
                      strokeDashoffset={strokeData.offset}
                      strokeLinecap="round"
                      className="transition-all duration-250 cursor-pointer"
                      onMouseEnter={() => setHoveredCapExIndex(index)}
                      onMouseLeave={() => setHoveredCapExIndex(null)}
                    />
                  );
                })}
              </svg>

              {/* Centered Hover Box Details */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-4">
                <span id="donut-hover-title" className="text-stone-400 text-xs font-bold uppercase tracking-wider">
                  {hoveredCapExIndex !== null ? capexItems[hoveredCapExIndex].name : 'Total CapEx'}
                </span>
                <span id="donut-hover-cost" className="text-xl sm:text-2xl font-black text-stone-900 mt-0.5">
                  {hoveredCapExIndex !== null
                    ? `${capexItems[hoveredCapExIndex].cost.toLocaleString()} ETB`
                    : `${totalCapEx.toLocaleString()} ETB`}
                </span>
                <span
                  id="donut-hover-detail"
                  className={`font-bold text-xs mt-0.5 ${
                    hoveredCapExIndex !== null ? 'text-amber-600 font-extrabold' : 'text-emerald-700'
                  }`}
                >
                  {hoveredCapExIndex !== null
                    ? `${capexItems[hoveredCapExIndex].pct}% Allocation`
                    : '100% Budget'}
                </span>
              </div>
            </div>

            {/* Legend Items Details */}
            <div className="space-y-2">
              <h3 className="text-base font-bold text-stone-900 mb-3">
                <ListFilter className="w-4 h-4 inline mr-1 text-emerald-600" /> Itemized Budget Allocation
              </h3>
              <div id="capex-list" className="space-y-1">
                {capexItems.map((item, index) => {
                  const isHovered = hoveredCapExIndex === index;
                  const dotColor = strokeColors[index];
                  return (
                    <div
                      key={item.name}
                      id={`capex-row-${index}`}
                      className={`flex items-start justify-between p-2.5 rounded-lg border transition-all cursor-pointer ${
                        isHovered
                          ? 'bg-white border-emerald-500 shadow-xs translate-x-0.5'
                          : 'border-transparent hover:bg-white hover:border-emerald-500/30'
                      }`}
                      onMouseEnter={() => setHoveredCapExIndex(index)}
                      onMouseLeave={() => setHoveredCapExIndex(null)}
                    >
                      <div className="flex items-start gap-2.5">
                        <span
                          className="w-3 h-3 rounded-full mt-1 shrink-0"
                          style={{ backgroundColor: dotColor }}
                        ></span>
                        <div>
                          <h4 className="font-extrabold text-stone-950 text-sm leading-none">{item.name}</h4>
                          <p className="text-xs text-stone-500 mt-1">{item.note}</p>
                        </div>
                      </div>
                      <div className="text-right ml-4 shrink-0">
                        <div className="font-bold text-stone-900 text-sm">{item.cost.toLocaleString()} ETB</div>
                        <div className="text-xs text-stone-500 font-bold">{item.pct}%</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: MONTHLY OPEX PROGRESS BARS */}
        {activeTab === 'opex' && (
          <div id="fin-content-opex" className="bg-stone-50 p-6 sm:p-8 rounded-2xl border border-stone-200 transition-all duration-300">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 border-b border-stone-200 pb-4 gap-2">
              <div>
                <h3 className="text-lg font-bold text-stone-900">Monthly Operating Expenses</h3>
                <p className="text-stone-500 text-xs mt-0.5">Allocation of the estimated 76,000 ETB total monthly fixed expense.</p>
              </div>
              <div className="text-left sm:text-right shrink-0">
                <span className="text-stone-400 text-xs font-bold block uppercase tracking-wider">Annual Fixed Cost</span>
                <span className="text-xl font-bold text-emerald-600">912,000 ETB</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-bold text-stone-800 mb-1">
                  <span>Employee Salaries & Wages</span>
                  <span>36,000 ETB <span className="text-stone-400 font-normal text-xs">(47.4%)</span></span>
                </div>
                <div className="w-full bg-stone-200 h-2.5 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-600 rounded-full" style={{ width: '47.4%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-xs font-bold text-stone-800 mb-1">
                  <span>House Rent (Factory/Storage Premises)</span>
                  <span>30,000 ETB <span className="text-stone-400 font-normal text-xs">(39.5%)</span></span>
                </div>
                <div className="w-full bg-stone-200 h-2.5 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: '39.5%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-xs font-bold text-stone-800 mb-1">
                  <span>Utilities (Electricity & Power Generators)</span>
                  <span>7,000 ETB <span className="text-stone-400 font-normal text-xs">(9.2%)</span></span>
                </div>
                <div className="w-full bg-stone-200 h-2.5 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-500 rounded-full" style={{ width: '9.2%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-xs font-bold text-stone-800 mb-1">
                  <span>Transportation & Logs Logistics</span>
                  <span>4,000 ETB <span className="text-stone-400 font-normal text-xs">(5.3%)</span></span>
                </div>
                <div className="w-full bg-stone-200 h-2.5 rounded-full overflow-hidden">
                  <div className="h-full bg-stone-700 rounded-full" style={{ width: '5.3%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-xs font-bold text-stone-800 mb-1">
                  <span>Marketing & Telegram Social Promos</span>
                  <span>2,000 ETB <span className="text-stone-400 font-normal text-xs">(2.6%)</span></span>
                </div>
                <div className="w-full bg-stone-200 h-2.5 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full" style={{ width: '2.6%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-xs font-bold text-stone-800 mb-1">
                  <span>Administrative & Miscellaneous buffer</span>
                  <span>2,000 ETB <span className="text-stone-400 font-normal text-xs">(2.6%)</span></span>
                </div>
                <div className="w-full bg-stone-200 h-2.5 rounded-full overflow-hidden">
                  <div className="h-full bg-red-400 rounded-full" style={{ width: '2.6%' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: 12-MONTH PERFORMANCE TRENDS */}
        {activeTab === 'trends' && (
          <div id="fin-content-trends" className="bg-stone-50 p-6 sm:p-8 rounded-2xl border border-stone-200 transition-all duration-300">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 border-b border-stone-200 pb-4 gap-2">
              <div>
                <h3 className="text-lg font-bold text-stone-900">12-Month Performance & Cash Flow</h3>
                <p className="text-stone-500 text-xs mt-0.5 font-medium">Progression from Month 1 initial deficit (-46,000 ETB) to Month 12 maturity expansion (+44,000 ETB).</p>
              </div>
              <div className="flex flex-wrap gap-3 text-xs font-bold uppercase tracking-wider">
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-emerald-500 rounded-sm"></span> Revenue</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-red-400 rounded-sm"></span> Costs (COGS+OPEX)</span>
                <span className="flex items-center gap-1.5"><span className="w-3 h-3 bg-stone-700 rounded-full"></span> Net Cash Flow</span>
              </div>
            </div>

            {/* Comparative Graph Box */}
            <div className="relative h-80 w-full pt-10 pb-8 flex items-end gap-1.5 overflow-x-auto no-scrollbar">
              {/* Zero Reference Line */}
              <div className="absolute top-[60%] left-0 w-full border-t border-dashed border-stone-300 z-0"></div>

              <div id="performance-bars-container" className="flex items-end justify-between w-full h-full min-w-[650px] relative z-10">
                {monthlyProjections.map((data, index) => {
                  const maxBound = 160000;
                  const revHeight = (data.rev / maxBound) * 75; // max 75% height
                  const costHeight = ((data.cogs + data.opex) / maxBound) * 75;
                  
                  // Math bounds for positioning cash node
                  // cash spans -46000 to +44000
                  const isPositiveCash = data.cash >= 0;
                  const netValPercent = (Math.abs(data.cash) / 46000) * 20; // scale max 20% deviation
                  
                  const isHovered = hoveredMonthIndex === index;

                  return (
                    <div
                      key={data.m}
                      className="relative flex-1 h-full flex items-end justify-center min-w-[50px] group z-10"
                      onMouseEnter={() => setHoveredMonthIndex(index)}
                      onMouseLeave={() => setHoveredMonthIndex(null)}
                    >
                      {/* Hover tooltip block details */}
                      <div className={`absolute bottom-[80%] left-1/2 -translate-x-1/2 bg-stone-900 text-white text-xs p-2.5 rounded-lg shadow-md pointer-events-none transition-opacity duration-150 z-30 space-y-1 whitespace-nowrap ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                      }`}>
                        <div className="font-extrabold text-stone-400 border-b border-stone-850 pb-0.5 mb-1">{data.m}</div>
                        <div className="flex justify-between gap-3">
                          <span>Revenue:</span>
                          <span className="font-bold text-emerald-400">{data.rev.toLocaleString()} ETB</span>
                        </div>
                        <div className="flex justify-between gap-3">
                          <span>Total Cost:</span>
                          <span className="font-bold text-stone-300">{(data.cogs + data.opex).toLocaleString()} ETB</span>
                        </div>
                        <div className="flex justify-between gap-3 pt-0.5 border-t border-stone-800">
                          <span>Net Cash Flow:</span>
                          <span className={`font-bold ${isPositiveCash ? 'text-emerald-400' : 'text-red-400'}`}>
                            {isPositiveCash ? '+' : ''}{data.cash.toLocaleString()} ETB
                          </span>
                        </div>
                      </div>

                      {/* Side-by-Side comparative visual columns */}
                      <div className="w-full flex items-end justify-center gap-1.5 h-full relative">
                        {/* Revenue Bar */}
                        <div
                          className="w-2.5 bg-emerald-500 rounded-t-xs transition-all duration-150 group-hover:brightness-105"
                          style={{ height: `${revHeight}%` }}
                        ></div>
                        {/* Cost Bar */}
                        <div
                          className="w-2.5 bg-red-400 rounded-t-xs transition-all duration-150 group-hover:brightness-105"
                          style={{ height: `${costHeight}%` }}
                        ></div>
                        {/* Connected Cash Flow Indicator Node */}
                        <div
                          className={`absolute w-3.5 h-3.5 rounded-full border-2 border-white transition-all duration-150 z-10 shadow-sm ${
                            isPositiveCash ? 'bg-stone-700' : 'bg-red-500'
                          } ${isHovered ? 'scale-125' : ''}`}
                          style={{ bottom: `${isPositiveCash ? 40 + netValPercent : 40 - netValPercent}%` }}
                        ></div>
                      </div>

                      {/* Label under node */}
                      <div className="absolute -bottom-6 text-xs font-bold text-stone-500">{data.m}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: VISUAL BREAK-EVEN GAUGE */}
        {activeTab === 'breakeven' && (
          <div id="fin-content-breakeven" className="bg-stone-50 p-6 sm:p-8 rounded-2xl border border-stone-200 transition-all duration-300 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-stone-900">Operating Margin vs. Break-Even Metric</h3>
              <p className="text-stone-500 text-xs mt-0.5 font-medium">Based on a unit selling price of 10 ETB, variable production cost of 2.5 ETB (Kraft paper, handle materials, starch glue), and monthly fixed overheads of 76,000 ETB.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl border border-stone-200 text-center shadow-xs">
                <span className="text-stone-400 text-xs font-extrabold uppercase tracking-wider block">Price per Kraft Bag</span>
                <span className="block text-xl sm:text-2xl font-black text-stone-900 mt-1">10 ETB</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-stone-200 text-center shadow-xs">
                <span className="text-stone-400 text-xs font-extrabold uppercase tracking-wider block">Variable Cost / Bag</span>
                <span className="block text-xl sm:text-2xl font-black text-red-600 mt-1">2.5 ETB</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-stone-200 text-center shadow-xs">
                <span className="text-stone-400 text-xs font-extrabold uppercase tracking-wider block">Unit Contribution Margin</span>
                <span className="block text-xl sm:text-2xl font-black text-emerald-600 mt-1">7.5 ETB</span>
              </div>
            </div>

            {/* Range Progress Slider indicator */}
            <div className="space-y-3 pt-4">
              <div className="flex justify-between text-xs font-bold text-stone-500 uppercase tracking-wider">
                <span>Zero Operations</span>
                <span className="text-red-600">Break-Even Point (~10,133 bags)</span>
                <span className="text-emerald-700">Monthly Capacity (12,000 bags)</span>
              </div>
              
              <div className="relative h-5 bg-stone-200 rounded-full overflow-hidden border border-stone-300">
                {/* Active Safe Margin Bar */}
                <div className="absolute top-0 left-0 h-full bg-emerald-600 w-full"></div>
                {/* Break even indicator line */}
                <div className="absolute top-0 h-full w-2 bg-red-500 shadow-xs" style={{ left: '84.4%' }}></div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-2 gap-2">
                <p className="text-xs text-stone-500 leading-relaxed max-w-md">
                  At our daily production targets (400 bags/day, resulting in ~12,000 bags monthly), we operate securely above the break-even threshold.
                </p>
                <div className="text-left sm:text-right shrink-0">
                  <span className="text-xs font-extrabold text-stone-400 uppercase tracking-wider block">Margin of Safety</span>
                  <span className="text-sm font-black text-emerald-600">+1,867 Bags / month</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Year One Financial Summary Cards */}
        <div className="grid md:grid-cols-4 gap-4 mt-8">
          <div className="bg-stone-900 text-white p-6 rounded-xl border border-stone-800 shadow-sm">
            <span className="text-xs font-bold text-amber-400 uppercase block tracking-wider mb-1">1. Year 1 Revenue</span>
            <div className="text-xl font-extrabold">1,350,000 ETB</div>
            <span className="text-xs text-stone-400 block mt-2">Based on selling 135,000 bags annually at 10 ETB base price.</span>
          </div>
          <div className="bg-stone-900 text-white p-6 rounded-xl border border-stone-800 shadow-sm">
            <span className="text-xs font-bold text-amber-400 uppercase block tracking-wider mb-1">2. Year 1 COGS</span>
            <div className="text-xl font-extrabold">337,500 ETB</div>
            <span className="text-xs text-stone-400 block mt-2">Estimated at approximately 25% of annual revenue.</span>
          </div>
          <div className="bg-stone-900 text-white p-6 rounded-xl border border-stone-800 shadow-sm">
            <span className="text-xs font-bold text-amber-400 uppercase block tracking-wider mb-1">3. Annual OPEX</span>
            <div className="text-xl font-extrabold">912,000 ETB</div>
            <span className="text-xs text-stone-400 block mt-2">Calculated at 76,000 ETB monthly fixed expenses * 12.</span>
          </div>
          <div className="bg-stone-900 text-white p-6 rounded-xl border border-stone-800 shadow-sm">
            <span className="text-xs font-bold text-emerald-400 uppercase block tracking-wider mb-1">4. Net Profit Projection</span>
            <div className="text-xl font-extrabold text-emerald-400">70,350 ETB</div>
            <span className="text-xs text-stone-400 block mt-2">After subtracting 30% corporate income tax from 100,500 EBIT.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

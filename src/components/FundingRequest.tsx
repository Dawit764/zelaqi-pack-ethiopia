import { Coins } from 'lucide-react';

export default function FundingRequest() {
  return (
    <section id="funding" className="py-20 bg-stone-50 border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-stone-600 font-bold text-xs uppercase tracking-widest bg-stone-200 px-3 py-1 rounded-full border border-stone-300">
            Section 1.9
          </span>
          <h2 className="text-3xl font-extrabold text-stone-900 mt-3 mb-4">Funding Request</h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-stone-200 relative">
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-stone-100">
            <div className="bg-emerald-100 text-emerald-800 p-3.5 rounded-xl">
              <Coins className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-stone-900">Capital Sourcing & Expansion Request</h3>
              <p className="text-xs text-stone-500">Zelaqi Pack Ethiopia Funding Layout</p>
            </div>
          </div>

          <p className="text-stone-700 text-sm md:text-base leading-relaxed text-justify mb-6">
            Zelaqi Pack Ethiopia is initially starting operations utilizing a pooled partner equity capital of{' '}
            <strong>500,000 ETB</strong>. To accelerate expansion, acquire high-speed fully automatic paper forming
            machinery, and scale raw Kraft paper importing, the partnership is seeking additional non-dilutive grant
            facilities and credit lines from supporting development agencies and government SME programs.
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-lg bg-emerald-50/50 border border-emerald-100">
              <h4 className="font-extrabold text-emerald-950 text-sm mb-2">Primary Sourced Equity</h4>
              <p className="text-stone-600 leading-relaxed mb-2">
                Secured through equal contribution allocations from our five founding partners to cover immediate setup
                logistics, first-year leasing deposit, and semi-automatic systems.
              </p>
              <span className="font-bold text-emerald-800 text-sm block">Amount: 500,000 ETB</span>
            </div>
            
            <div className="p-4 rounded-lg bg-stone-50 border border-stone-200">
              <h4 className="font-extrabold text-stone-950 text-sm mb-2">Strategic Debt & Grant Target</h4>
              <p className="text-stone-600 leading-relaxed mb-2">
                Target funding from institutional micro-finance agencies and regional environmental action funds to
                upgrade factory lines and increase daily bag output.
              </p>
              <span className="font-bold text-stone-900 text-sm block">Target: 300,000 - 500,000 ETB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

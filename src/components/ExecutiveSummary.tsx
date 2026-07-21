import { Award, Network, Trees } from 'lucide-react';

export default function ExecutiveSummary() {
  return (
    <section id="summary" className="py-20 bg-emerald-50/40 border-y border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
            Section 1.1
          </span>
          <h2 className="text-3xl font-extrabold text-stone-900 mt-3 mb-4">Executive Summary</h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-stone-200 relative">
          <div className="absolute top-0 right-12 transform -translate-y-1/2 bg-amber-500 text-white p-3.5 rounded-xl shadow-lg">
            <Award className="w-6 h-6" />
          </div>

          <p className="text-stone-700 text-base md:text-lg leading-relaxed text-justify first-letter:text-6xl first-letter:font-black first-letter:text-emerald-600 first-letter:mr-3 first-letter:float-left">
            Zelaqi Pack Ethiopia is a business that aims at manufacturing inexpensive and sustainable packaging solutions after the government’s prohibition on some forms of plastics (refer to appendix A-Proclamation No. 1383/2025). It runs with capital of 500,000 ETB and employs 6 employees who manufacture and distribute quality paper packaging materials. This business aims at ensuring that all packaging materials are affordable such that small and medium retailers can move away from prohibited plastic packaging materials without having to increase their prices. The business adopts a social impact strategy based on the Teki model (refer to appendix B). The firm collaborates with wholesale merchants in the Merkato area to ensure distribution to numerous consumers. This ensures environmental sustainability, job creation, and affordable eco-friendly packaging options in Ethiopia.
          </p>

          <div className="mt-8 pt-8 border-t border-stone-150 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex gap-3 items-start p-3 bg-stone-50 rounded-xl border border-stone-200">
              <Network className="text-emerald-600 w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-stone-900 text-sm">Strategic Partnership Setup</h4>
                <p className="text-xs text-stone-500 font-semibold mt-1">
                  Structured as a partnership pooling resource of 500,000 ETB for collective decision-making and operational agility.
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start p-3 bg-stone-50 rounded-xl border border-stone-200">
              <Trees className="text-emerald-600 w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-stone-900 text-sm">Environmental Safe-guarding</h4>
                <p className="text-xs text-stone-500 font-semibold mt-1">
                  Aligned with absolute adherence to federal guidelines on municipal solid waste reduction, turning paper offcuts back into the circular economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

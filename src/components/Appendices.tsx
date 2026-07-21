import { Scale, Handshake, TrendingUp } from 'lucide-react';
import { supplierContacts } from '../data';

export default function Appendices() {
  return (
    <section id="appendices" className="py-20 bg-white border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-emerald-800 font-bold text-xs uppercase tracking-widest bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
            Section 1.11
          </span>
          <h2 className="text-3xl font-extrabold text-stone-900 mt-3 mb-2">Appendices</h2>
          <div className="h-1 bg-emerald-500 mx-auto rounded-full w-20 mt-4"></div>
        </div>

        <div className="space-y-8">
          {/* Appendix A */}
          <div className="bg-stone-50 p-6 sm:p-8 rounded-2xl border border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
              <Scale className="text-emerald-600 w-5 h-5 shrink-0" />
              Appendix A: Proclamation No. 1383/2025
            </h3>
            <p className="text-stone-700 text-sm leading-relaxed text-justify">
              Proclamation No. 1383/2025 of the Federal Democratic Republic of Ethiopia introduced a nationwide
              restriction on single-use plastic bags as part of the country’s environmental protection and waste
              reduction strategy. The proclamation states that Ethiopia has implemented “a complete ban on the
              importation, production, and use of single-use plastic bags.” The regulation is intended to reduce
              plastic pollution, encourage environmentally sustainable packaging alternatives, and promote the use of
              eco-friendly products such as paper bags.
            </p>
          </div>

          {/* Appendix B */}
          <div className="bg-stone-50 p-6 sm:p-8 rounded-2xl border border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
              <Handshake className="text-emerald-600 w-5 h-5 shrink-0" />
              Appendix B: Selected Supplier Contacts
            </h3>
            
            <div className="overflow-x-auto rounded-xl border border-stone-200 mb-6">
              <table className="min-w-full divide-y divide-stone-200 text-sm">
                <thead className="bg-stone-100 text-stone-750 font-bold">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left tracking-wider">Supplier</th>
                    <th scope="col" className="px-6 py-3 text-left tracking-wider">Product</th>
                    <th scope="col" className="px-6 py-3 text-left tracking-wider">Contact Info</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-stone-200 text-stone-600">
                  {supplierContacts.map((supplier) => (
                    <tr key={supplier.supplier} className="hover:bg-stone-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-stone-900">{supplier.supplier}</td>
                      <td className="px-6 py-4">{supplier.product}</td>
                      <td className="px-6 py-4 font-medium text-emerald-700">{supplier.contactInfo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-stone-500 leading-relaxed text-justify bg-amber-50 p-3.5 rounded-lg border border-amber-200 font-semibold">
              <strong>Strategic Association & Teki Model:</strong> The business adopts a social action model based on
              the "Teki" structure. Partnering directly with local wholesalers inside the Merkato district creates stable
              demand, creates high job placement, and enables smooth distribution networks.
            </p>
          </div>

          {/* Appendix C */}
          <div className="bg-stone-50 p-6 sm:p-8 rounded-2xl border border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
              <TrendingUp className="text-emerald-600 w-5 h-5 shrink-0" />
              Appendix C: Financial Model Assumptions and Analysis
            </h3>
            <p className="text-stone-700 text-sm leading-relaxed text-justify">
              The financial projections in this business plan are based on estimated production capacity, operating
              costs, and market demand conditions in Ethiopia. The financial model includes monthly cash flow
              projections, depreciation schedules, tax calculations, and sensitivity analysis assessing the impact of
              changes in raw material costs and sales volume (±10%). A complete Excel-based financial model is
              available upon request.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

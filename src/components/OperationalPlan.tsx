import { Package, Settings, ClipboardCheck, Warehouse, Truck, Store, ShieldAlert } from 'lucide-react';

export default function OperationalPlan() {
  const steps = [
    {
      step: 'Step 1',
      title: 'Raw Materials',
      desc: 'Sourcing unbleached Kraft rolls, handles, starch glue.',
      icon: Package,
    },
    {
      step: 'Step 2',
      title: 'Bag Production',
      desc: 'Cutting, folding, base gluing, and assembly.',
      icon: Settings,
    },
    {
      step: 'Step 3',
      title: 'Quality Control',
      desc: 'Strict validation for tearing or separating.',
      icon: ClipboardCheck,
    },
    {
      step: 'Step 4',
      title: 'Inventory Storage',
      desc: 'Finished bags sorted and bundled.',
      icon: Warehouse,
    },
    {
      step: 'Step 5',
      title: 'Distribution',
      desc: 'Direct sales, delivery, and wholesale agreements.',
      icon: Truck,
    },
    {
      step: 'Step 6',
      title: 'End Customers',
      desc: 'Retail shops, supermarkets, and final consumers.',
      icon: Store,
    },
  ];

  const risks = [
    {
      num: '1',
      title: 'Raw Materials Import Delays',
      desc: 'To combat foreign exchange shortages and delays in unbleached paper imports, Zelaqi Pack will maintain a multi-month inventory buffer and diversify suppliers locally and internationally.',
    },
    {
      num: '2',
      title: 'Power Shortages & Grid Outages',
      desc: 'Frequent rolling blackouts in Addis Ketema can disrupt production schedules. The business mitigates this by investing in a backup diesel generator system (15 kVA) to maintain smooth daily production.',
    },
    {
      num: '3',
      title: 'Regulatory Enforcement Volatility',
      desc: 'Should enforcement of single-use plastic regulations slow down, the business remains agile by preparing alternative eco-friendly variations such as woven textile bags.',
    },
    {
      num: '4',
      title: 'Intense Competitors Entry',
      desc: 'To handle competitive pressure from larger factories, the business secures early customer loyalty through superior customer service, lower minimum order thresholds, and fast local deliveries.',
    },
    {
      num: '5',
      title: 'Technical Quality Deficiencies',
      desc: 'To avoid production tearing or structural handle failures, all operators undergo rigorous training, machinery parameters are calibrated weekly, and raw material inputs are carefully checked.',
    },
    {
      num: '6',
      title: 'Market Adoption Failures',
      desc: 'If vendors revert to cheaper illicit plastics, we counter this by partnering with local shopkeeper associations and offering volume discounts to make paper choices highly cost-effective.',
    },
  ];

  return (
    <section id="operational" className="py-20 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-stone-600 font-bold text-xs uppercase tracking-widest bg-stone-200 px-3 py-1 rounded-full border border-stone-300">
            Section 1.7
          </span>
          <h2 className="text-3xl font-extrabold text-stone-900 mt-3 mb-2">Operational Plan</h2>
          <p className="text-stone-600 text-xs sm:text-sm">Weekly Processes, Supply Chains, and Technical Workflow Cycles</p>
          <div className="h-1 bg-emerald-500 mx-auto rounded-full w-20 mt-4"></div>
        </div>

        {/* Process Logistics Flow */}
        <div className="relative mt-16 mb-16">
          <div className="hidden lg:block absolute top-[40px] left-0 w-full h-1 bg-gradient-to-r from-amber-200 via-emerald-300 to-emerald-500 z-0"></div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.step}
                  className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex flex-col items-center text-center"
                >
                  <div className="h-16 w-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-xl font-bold mb-4 border border-emerald-200">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-amber-700 block mb-1">{item.step}</span>
                  <h4 className="font-bold text-stone-950 text-xs sm:text-sm mb-1">{item.title}</h4>
                  <p className="text-stone-500 text-xs leading-snug">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Strategic Risk Mitigations Grid */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-stone-200 shadow-sm">
          <h3 className="text-lg font-bold text-stone-900 mb-6 flex items-center gap-2">
            <ShieldAlert className="text-emerald-600 w-5 h-5 shrink-0" /> Operational Risk Assessment & Mitigation
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-stone-600">
            <div className="space-y-4">
              {risks.slice(0, 3).map((r) => (
                <div key={r.num} className="p-4 rounded-lg bg-stone-50 border border-stone-200">
                  <strong className="text-stone-900 block mb-1">
                    {r.num}. {r.title}:
                  </strong>
                  <p className="text-xs leading-relaxed text-justify">{r.desc}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {risks.slice(3, 6).map((r) => (
                <div key={r.num} className="p-4 rounded-lg bg-stone-50 border border-stone-200">
                  <strong className="text-stone-900 block mb-1">
                    {r.num}. {r.title}:
                  </strong>
                  <p className="text-xs leading-relaxed text-justify">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Mail, CheckCircle, GitFork } from 'lucide-react';
import { partners } from '../data';

export default function OrganizationManagement() {
  return (
    <section id="org" className="py-24 bg-gradient-to-b from-stone-50 to-stone-100 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-emerald-800 font-bold text-xs uppercase tracking-widest bg-emerald-100/80 px-4 py-1.5 rounded-full border border-emerald-200">
            Section 1.4
          </span>
          <h2 className="text-4xl font-extrabold text-stone-900 mt-4 mb-3 tracking-tight">Organization & Management</h2>
          <p className="text-stone-600 text-sm md:text-base max-w-2xl mx-auto">
            Structured Partnership Leadership, Core Operational Roles and Professional Competencies
          </p>
          <div className="h-1 bg-gradient-to-r from-amber-400 via-emerald-500 to-emerald-700 mx-auto rounded-full w-28 mt-4"></div>
        </div>

        {/* Founding Partners Directory */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className="bg-white rounded-2xl border border-stone-200/80 hover:border-emerald-500/50 p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between relative group overflow-hidden"
            >
              <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${partner.colorClass}`}></div>
              <div>
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <div className={`w-full h-full bg-gradient-to-tr ${partner.colorClass} rounded-2xl flex items-center justify-center font-black text-white text-lg shadow-md group-hover:scale-105 transition-transform duration-300`}>
                    {partner.initials}
                  </div>
                  <span className="absolute -bottom-1 -right-1 bg-amber-400 text-stone-900 text-xs font-black h-5 w-5 rounded-full flex items-center justify-center border-2 border-white">
                    {index + 1}
                  </span>
                </div>
                
                <h4 className="font-extrabold text-stone-900 text-base mb-1 group-hover:text-emerald-700 transition-colors">
                  {partner.name}
                </h4>
                <span className="text-xs text-stone-400 font-bold block tracking-wider uppercase mt-1">
                  ID: {partner.studentId}
                </span>
                <span className="inline-block mt-3 px-2.5 py-1 bg-emerald-50 text-emerald-800 rounded-lg text-xs font-extrabold border border-emerald-100/60 uppercase tracking-wider">
                  {partner.role}
                </span>
              </div>
              
              <div className="mt-6 pt-4 border-t border-stone-100">
                <a
                  href={`mailto:${partner.email}`}
                  className="text-xs font-bold text-stone-600 hover:text-emerald-600 transition-colors break-all block leading-relaxed"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-600 mr-1 inline shrink-0" /> {partner.email}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Organizational Flow Chart Block */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-stone-200 shadow-sm">
          <h3 className="text-lg font-bold text-stone-900 mb-6 flex items-center gap-2">
            <GitFork className="text-emerald-600 w-5 h-5 shrink-0" /> Corporate Hierarchy & Personnel Allocations
          </h3>
          <p className="text-sm text-stone-600 leading-relaxed mb-8">
            Our management workflow is structured to optimize small-scale manufacturing. Initially employing a total of
            four operations workers, consisting of skilled machine operators, production helpers, and a supervising
            manager.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl border border-emerald-100 bg-emerald-50/40">
              <span className="text-xs font-bold text-emerald-700 block mb-1 uppercase tracking-wider">Strategic Tier</span>
              <h4 className="font-bold text-stone-900 text-base mb-2">Owner / Manager</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Oversees all operations, wholesale contracts, financial management, regulatory adherence, and general
                business development.
              </p>
            </div>
            
            <div className="p-5 rounded-xl border border-amber-150 bg-amber-50/40">
              <span className="text-xs font-bold text-amber-800 block mb-1 uppercase tracking-wider">Operations Tier</span>
              <h4 className="font-bold text-stone-900 text-base mb-2">Machine Operators (2)</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Specifically trained professionals to run the semi-automatic paper bag making machines and monitor
                production quality targets.
              </p>
            </div>
            
            <div className="p-5 rounded-xl border border-stone-200 bg-stone-100/40">
              <span className="text-xs font-bold text-stone-500 block mb-1 uppercase tracking-wider">Support Tier</span>
              <h4 className="font-bold text-stone-900 text-base mb-2">Helpers / Packers (2)</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Handle feeding processes, paper rolls management, manually apply bag handles where needed, and bundle
                finished products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

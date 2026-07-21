import { Leaf, Users, GraduationCap, Mail } from 'lucide-react';
import { partners } from '../data';

interface FooterProps {
  onScrollTo: (id: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  return (
    <footer className="bg-stone-950 text-stone-400 py-16 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12 border-b border-stone-800 pb-12">
          
          {/* Section 1: Brand Info */}
          <div>
            <div
              className="flex items-center gap-2.5 mb-4 cursor-pointer"
              onClick={() => onScrollTo('hero')}
            >
              <div className="bg-emerald-600/20 p-2 rounded-lg">
                <Leaf className="text-emerald-500 w-5 h-5" />
              </div>
              <span className="font-black text-2xl text-white tracking-tight">ZELAQI PACK</span>
            </div>
            <p className="text-stone-400 mb-6 text-sm text-justify">
              Dedicated to a greener Ethiopia by replacing prohibited single-use plastic carriers with sustainable, heavy-load paper bag alternatives.
            </p>
            <div className="text-sm border-t border-stone-900 pt-4">
              <div className="mb-1">
                <strong className="text-stone-200">HQ Address:</strong> Addis Ketema sub-city, Addis Ababa, Ethiopia
              </div>
              <div className="text-stone-500 text-xs font-semibold">
                Strategically located close to Merkato's wholesale markets.
              </div>
            </div>
          </div>

          {/* Section 2: Founding Partners and Contact */}
          <div>
            <h4 className="text-white font-extrabold mb-5 uppercase tracking-wider text-xs flex items-center gap-2">
              <Users className="text-emerald-500 w-4 h-4 shrink-0" /> Founding Partners
            </h4>
            <ul className="space-y-4 text-sm">
              {partners.map((partner) => (
                <li key={partner.id} className="flex flex-col border-b border-stone-900 pb-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-stone-100 font-bold">{partner.name}</span>
                    <span className="text-stone-500 text-xs font-bold">{partner.studentId}</span>
                  </div>
                  <a
                    href={`mailto:${partner.email}`}
                    className="text-emerald-500 hover:text-emerald-400 flex items-center gap-1.5 mt-0.5 transition-colors text-xs font-bold"
                  >
                    <Mail className="w-3 h-3" /> {partner.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Project and Academic Info */}
          <div>
            <h4 className="text-white font-extrabold mb-5 uppercase tracking-wider text-xs flex items-center gap-2">
              <GraduationCap className="text-emerald-500 w-4 h-4 shrink-0" /> Project Details
            </h4>
            <div className="bg-stone-900 p-5 rounded-xl border border-stone-850 text-sm">
              <div className="mb-2">
                <strong className="text-stone-200">Instructor:</strong> Nitsuh K.
              </div>
              <div className="mb-4">
                <strong className="text-stone-200">Submission Date:</strong> May 7, 2026
              </div>
              <button
                onClick={() => onScrollTo('hero')}
                className="text-emerald-500 hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-xs font-bold bg-transparent border-none cursor-pointer"
              >
                <Leaf className="w-3.5 h-3.5" /> Empowering Sustainable Ethiopia
              </button>
            </div>
          </div>

        </div>
        
        <div className="text-center text-xs text-stone-600 font-bold">
          &copy; 2026 Zelaqi Pack Ethiopia. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

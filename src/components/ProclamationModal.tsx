import { X, Scale } from 'lucide-react';

interface ProclamationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProclamationModal({ isOpen, onClose }: ProclamationModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-stone-200 relative animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 cursor-pointer"
          id="btn-modal-close"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-emerald-100 p-2.5 rounded-lg text-emerald-800">
            <Scale className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-extrabold text-stone-900">Proclamation No. 1383/2025</h3>
        </div>
        
        <div className="space-y-3.5 text-sm text-stone-600 leading-relaxed text-justify">
          <p>
            <strong>The Federal Democratic Republic of Ethiopia</strong> introduced a nation-wide restriction on
            single-use plastic bags as a part of the country’s ecological strategy.
          </p>
          <p className="bg-emerald-50 p-3 rounded-lg border border-emerald-100 text-emerald-950 font-medium">
            "The regulation implements a complete ban on the importation, local production, and retail usage of
            single-use plastic carrier bags."
          </p>
          <p>
            This rule is intended to minimize urban solid waste pollution, mitigate ecosystem degradation, and promote
            the production and commercial adoption of biodegradable materials like unbleached paper bags.
          </p>
        </div>
        
        <div className="mt-6 pt-4 border-t border-stone-150 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-emerald-600 text-white rounded-lg font-bold hover:bg-emerald-700 text-xs cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}

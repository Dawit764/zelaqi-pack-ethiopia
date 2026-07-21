import { CheckCircle2, ArrowRight } from 'lucide-react';

interface HeroProps {
  onScrollTo: (id: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  return (
    <section id="hero" className="relative bg-white overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/70 to-amber-50/70 opacity-60 z-0"></div>
      {/* Decorative Dots pattern */}
      <div className="absolute right-0 top-0 h-96 w-96 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-10 hidden lg:block pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-semibold mb-8 border border-emerald-200">
            <CheckCircle2 className="text-emerald-600 w-4 h-4 shrink-0" />
            Compliant with Proclamation No. 1383/2025
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-stone-900 tracking-tight mb-2">
            Zelaqi Pack Ethiopia
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-amber-700 mb-6 font-serif">
            ዘላቂ ፓክ ኢትዮጵያ
          </h2>
          
          <p className="text-lg sm:text-xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Sustainable Paper Bag Solutions. Driving the transition from prohibited single-use plastics to affordable, durable, and eco-friendly packaging for Ethiopian businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onScrollTo('products')}
              className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 text-sm cursor-pointer"
              id="hero-btn-products"
            >
              View Our Products <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onScrollTo('summary')}
              className="px-8 py-4 bg-white text-stone-700 border border-stone-300 rounded-xl font-bold hover:bg-stone-50 transition-all flex items-center justify-center gap-2 text-sm shadow-sm cursor-pointer"
              id="hero-btn-summary"
            >
              Read Executive Summary
            </button>
          </div>

          {/* Highlight Metrics Row */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-8 border-t border-stone-100">
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-stone-200">
              <span className="block text-2xl font-black text-emerald-600">500,000 ETB</span>
              <span className="text-xs text-stone-500 font-bold block mt-1">Starting Capital</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-stone-200">
              <span className="block text-2xl font-black text-emerald-600">6 Core Employees</span>
              <span className="text-xs text-stone-500 font-bold block mt-1">Manufacturing Team</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-stone-200">
              <span className="block text-2xl font-black text-emerald-600">10 ETB</span>
              <span className="text-xs text-stone-500 font-bold block mt-1">Fixed Base Bag Price</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-stone-200">
              <span className="block text-2xl font-black text-emerald-600">Teki Model</span>
              <span className="text-xs text-stone-500 font-bold block mt-1">Social Action Strategy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

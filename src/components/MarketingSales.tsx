import { Share2, Megaphone, Wallet } from 'lucide-react';

export default function MarketingSales() {
  return (
    <section id="sales" className="py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-emerald-800 font-bold text-xs uppercase tracking-widest bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
            Section 1.6
          </span>
          <h2 className="text-3xl font-extrabold text-stone-900 mt-3 mb-2">Marketing and Sales</h2>
          <p className="text-stone-600 text-xs sm:text-sm">Strategic Channels, Outreach Campaigns & Pricing Adjustments</p>
          <div className="h-1 bg-emerald-500 mx-auto rounded-full w-20 mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
            <div className="bg-emerald-50 p-3 rounded-xl inline-flex text-emerald-700 mb-4">
              <Share2 className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-stone-900 text-lg mb-2">Distribution Channels</h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed text-justify">
              Direct sales to local businesses (supermarkets, bakeries, breweries) and wholesalers (wholesale markets,
              packaging distributors). As production scales, engage retail chains and hotel groups as clients.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
            <div className="bg-emerald-50 p-3 rounded-xl inline-flex text-emerald-700 mb-4">
              <Megaphone className="w-6 h-6 animate-bounce" />
            </div>
            <h4 className="font-bold text-stone-900 text-lg mb-2">Promotion Strategy</h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed text-justify">
              The promotional strategy will emphasize the product’s core value proposition: eco-friendly, biodegradable
              packaging made in Ethiopia. Sourcing leads through Telegram channels and groups, targeting small
              businesses. In addition, in-person promotion will build customer relationships and secure direct sales.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
            <div className="bg-emerald-50 p-3 rounded-xl inline-flex text-emerald-700 mb-4">
              <Wallet className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-stone-900 text-lg mb-2">Pricing Structure</h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed text-justify">
              Fixed base price of <strong>10 ETB per kraft paper bag</strong>, ensuring both competitiveness and
              sustainable profit margins. With a production capacity of 400 bags/day, the focus remains on price
              stability while offering volume-based discounts for repeating bulk customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

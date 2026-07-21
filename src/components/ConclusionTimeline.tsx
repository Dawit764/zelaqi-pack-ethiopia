import { Calendar, MapPin, Wrench, FlaskConical, Rocket } from 'lucide-react';
import { timelineEvents } from '../data';

export default function ConclusionTimeline() {
  const icons = [Calendar, MapPin, Wrench, FlaskConical, Rocket];

  return (
    <section id="conclusion" className="py-20 bg-stone-50 border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-stone-600 font-bold text-xs uppercase tracking-widest bg-stone-200 px-3 py-1 rounded-full border border-stone-300">
            Section 1.10
          </span>
          <h2 className="text-4xl font-black text-stone-900 mt-3 mb-2">CONCLUSION</h2>
          <p className="text-stone-600 text-xs sm:text-sm uppercase font-bold tracking-wider">
            Project Roadmap & Execution Summary: May 2026 – October 2026
          </p>
          <div className="h-1 bg-emerald-500 mx-auto rounded-full w-20 mt-4"></div>
        </div>

        {/* Timeline Roadmap Nodes */}
        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-emerald-300 before:to-transparent">
          {timelineEvents.map((evt, index) => {
            const IconComponent = icons[index];
            return (
              <div
                key={evt.date}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-emerald-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <IconComponent className="w-4 h-4" />
                </div>
                
                <div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-2rem)] bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all">
                  <span className="text-emerald-600 font-extrabold text-xs md:text-sm block mb-1">{evt.date}</span>
                  <h4 className="font-extrabold text-stone-900 text-base md:text-lg mb-2">{evt.title}</h4>
                  <p className="text-stone-700 text-xs md:text-sm leading-relaxed text-justify">{evt.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

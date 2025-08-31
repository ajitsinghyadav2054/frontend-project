import { useState } from 'react';

const ITEMS = [
  {
    id: 'guided',
    pill: 'Story Meditations',
    title: 'Guided Adventures',
    desc: 'Short, age-wise journeys that help kids calm their bodies and name their feelings.',
  },
  {
    id: 'tools',
    pill: 'Anytime Calm',
    title: 'Tools for Big Feelings',
    desc: 'Quick “reset” audios for anger, worry, pre-exam jitters, and bedtime battles.',
  },
  {
    id: 'hub',
    pill: 'Parent Hub',
    title: 'Guides & Routines',
    desc: 'Weekly tips, printable charts, and simple routines you can use at home or school.',
  },
];


const HeroWhyChooseUs = () => {
  const [open, setOpen] = useState(null);

  const toggle = (id) => setOpen((prev) => (prev === id ? null : id));

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10 sm:py-12">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Why Mindery Kids?</h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-3xl">
            Children learn best through play and stories. Our sessions blend gentle breathing, guided imagery, and music to make mindfulness enjoyable and effective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {ITEMS.map((it) => {
            const isOpen = open === it.id;
            return (
                <div
                  key={it.id}
                  className={`bg-white rounded-2xl border border-solid border-gray-100 p-4 sm:p-6 shadow-sm transition-shadow hover:shadow-md focus-within:shadow-md self-start`}> 
                <div 
                  className="flex items-start justify-between gap-3 sm:gap-4 cursor-pointer sm:cursor-default"
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${it.id}`}
                  onClick={() => toggle(it.id)}
                  onKeyDown={(e) => { if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(it.id); } }}
                >
                  <div className="min-w-0">
                    <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
                      <span className="bg-[#EFFAF6] text-[#047857] text-[11px] sm:text-xs font-extrabold px-2 py-1 rounded-full">{it.pill}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900">{it.title}</h3>
                  </div>

                  <div className="flex-shrink-0 ml-3 sm:ml-4">
                    <button
                      onClick={(e) => { e.stopPropagation(); toggle(it.id); }}
                      aria-expanded={isOpen}
                      aria-controls={`panel-${it.id}`}
                      className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full border border-solid border-gray-200 bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7B3DFE] cursor-pointer"
                    >
                      <span className="sr-only">Toggle details</span>
                      <svg className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-45' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div id={`panel-${it.id}`} className={`${isOpen ? 'mt-3 sm:mt-4 block' : 'hidden'}`}>
                  <div className="mt-1 text-sm text-gray-700">
                    {it.desc}
                  </div>
                  <div className="mt-3 sm:mt-4">
                    <a href="#programs" className="text-sm font-semibold text-[#7B3DFE] hover:underline focus:outline-none focus:ring-2 focus:ring-[#7B3DFE]/30 rounded">Explore</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroWhyChooseUs;

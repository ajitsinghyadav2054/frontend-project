import React, { useState } from 'react';

const FEATURES = [
  {
    id: 'adfree',
    title: 'Ad-Free & Safe',
    desc: 'Child-first design with privacy controls and no external ads.',
  },
  {
    id: 'rewards',
    title: 'Rewards that Motivate',
    desc: 'Stars, badges, and gentle streaks encourage healthy habits—no pressure.',
  },
  {
    id: 'offline',
    title: 'Offline Access',
    desc: 'Download favorite sessions for calm on the go.',
  },
  {
    id: 'sleep',
    title: 'Sleep Mode',
    desc: 'Fade-out music and dim visuals help kids drift off peacefully.',
  },
  {
    id: 'classroom',
    title: 'Classroom Friendly',
    desc: 'Teacher packs with 5-minute start-of-class resets and posters.',
  },
  {
    id: 'profiles',
    title: 'Multi-Child Profiles',
    desc: 'Personalized tracks for each child in the family.',
  },
];

const AboutUs = () => {
  const [open, setOpen] = useState(null);

  const toggle = (id) => setOpen((prev) => (prev === id ? null : id));

  const onKeyToggle = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle(id);
    }
  };

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10 sm:py-12">
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Built for Kids, Loved by Parents</h2>
        </div>

  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {FEATURES.map((f, idx) => {
            const isOpen = open === f.id;
            const hideOnMobile = idx >= 4;
            return (
              <div
                key={f.id}
                role="button"
                tabIndex={0}
                onClick={() => toggle(f.id)}
                onKeyDown={(e) => onKeyToggle(e, f.id)}
                aria-expanded={isOpen}
                aria-controls={`feature-${f.id}`}
        className={`${hideOnMobile ? 'hidden sm:block' : ''} bg-white rounded-2xl border border-solid border-gray-100 p-3 sm:p-6 shadow-sm hover:shadow-md focus:shadow-md transition transform hover:-translate-y-0.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7B3DFE]/30 self-start`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
          <h3 className="text-sm sm:text-lg font-semibold text-slate-900">{f.title}</h3>
          <p className="mt-2 text-xs sm:text-base text-gray-600">{f.desc}</p>
                  </div>

                  <div className="flex-shrink-0">
                    <svg
                      className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transform transition-transform ${isOpen ? 'rotate-45' : ''}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                    </svg>
                  </div>
                </div>

                <div id={`feature-${f.id}`} className={`${isOpen ? 'mt-4 block' : 'hidden'}`}>
                  <p className="text-xs sm:text-base text-gray-700">More details coming soon — sample content for {f.title.toLowerCase()}.</p>
                  <div className="mt-3">
                    <a href="#" className="text-xs no-underline sm:text-base font-semibold text-[#7B3DFE] hover:underline focus:outline-none focus:ring-2 focus:ring-[#7B3DFE]/30 rounded">Learn more</a>
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

export default AboutUs;

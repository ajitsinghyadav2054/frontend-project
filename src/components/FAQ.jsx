import React, { useState } from 'react';

const QUESTIONS = [
  {
    id: 'ages',
    q: 'What ages is this for?',
    a: 'Designed for 4-14 with age-tailored tracks: short play-based sessions for younger kids and deeper practices for older children.',
  },
  {
    id: 'length',
    q: 'How long are the sessions?',
    a: 'Sessions are short and purposeful — typically 3-10 minutes. Sleep stories and deeper meditations are longer for bedtime use.',
  },
  {
    id: 'safe',
    q: 'Is it safe and ad-free?',
    a: 'Yes. We designed this for children with privacy controls, no external ads, and parent controls to manage content and usage.',
  },
  {
    id: 'schools',
    q: 'Can schools use it?',
    a: 'Absolutely. We offer teacher packs, short start-of-class resets, and classroom-friendly activities that fit a school day.',
  },
  {
    id: 'devices',
    q: 'Which devices are supported?',
    a: 'Our app works on most smartphones, tablets, and web browsers, making it easy to access at home or on the go.',
  },
  {
    id: 'cost',
    q: 'Is there a free trial or refund policy?',
    a: 'Yes, we offer a free trial for new users and a 30-day money-back guarantee if you’re not satisfied.',
  },
];

const FAQ = () => {
  // track open state independently for each FAQ
  const [open, setOpen] = useState(() => Object.fromEntries(QUESTIONS.map(q => [q.id, false])));
  const toggle = (id) => setOpen((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6">Frequently asked questions</h2>

        <div className="rounded-2xl border border-solid border-gray-200 bg-white divide-y divide-gray-200">
          {QUESTIONS.map((item) => {
            const isOpen = !!open[item.id];
            return (
              <div key={item.id}>
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  id={`faq-trigger-${item.id}`}
                  className="w-full cursor-pointer text-left px-5 py-4 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7B3DFE]/30 hover:bg-gray-50"
                >
                  <span className="text-[15px] md:text-base font-medium text-slate-900">{item.q}</span>
                  {/* plus / minus icon */}
                  {isOpen ? (
                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                      <path strokeWidth="2" strokeLinecap="round" d="M5 12h14" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                      <path strokeWidth="2" strokeLinecap="round" d="M12 5v14" />
                      <path strokeWidth="2" strokeLinecap="round" d="M5 12h14" />
                    </svg>
                  )}
                </button>
                {isOpen && (
                  <div
                    id={`faq-panel-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${item.id}`}
                    className="px-5 py-5 text-sm leading-relaxed text-gray-600"
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
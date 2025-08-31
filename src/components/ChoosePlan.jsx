import React, { useState } from 'react';

const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    subtitle: 'Perfect for new explorers',
    price: { monthly: 'Free', yearly: 'Free' },
    features: ['5 guided meditations', '2 sleep stories', 'Parent starter kit'],
    cta: 'Get Started',
  },
  {
    id: 'premium',
    name: 'Premium',
    subtitle: 'Unlock full potential',
    price: { monthly: '299', yearly: '2690' }, // yearly sample
    currency: '₹',
    features: ['Unlimited meditations', 'Sleep stories & calming music', 'Printable guides for parents'],
    cta: 'Upgrade Now',
    featured: true,
  },
  {
    id: 'family',
    name: 'Family',
    subtitle: 'For multiple kids',
    price: { monthly: '499', yearly: '4490' },
    currency: '₹',
    features: ['4 child profiles', 'Rewards & streaks', 'Classroom meditation pack'],
    cta: 'Get Family Plan',
  featured: false,
  },
];

const ChoosePlan = () => {
  const [billing, setBilling] = useState('monthly');
  const [selected, setSelected] = useState('premium');

  const handleSelect = (id) => setSelected(id);

  const handleCTA = (plan) => {
    // placeholder for real CTA wiring (analytics, navigation, modal)
    console.log('CTA clicked for', plan.id, 'billing:', billing);
    setSelected(plan.id);
    // in a real app, navigate to checkout or open signup modal
  };

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10 sm:py-12">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">Choose Your Plan</h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">Start free, cancel anytime. No hidden charges.</p>
        </div>

        {/* Billing period segmented toggle (simple, robust) */}
        <div className="flex items-center justify-center mb-8 sm:mb-10">
          <div
            role="tablist"
            aria-label="Billing period"
            className="inline-flex items-center bg-[#F6F1FF] border border-solid border-[#E9D5FF] rounded-full p-1 sm:p-1.5 gap-2 sm:gap-3 shadow-sm"
          >
            <button
              type="button"
              role="tab"
              aria-selected={billing === 'monthly'}
              onClick={() => setBilling('monthly')}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full transition-all focus:outline-none border-solid border-gray-200 border focus-visible:ring-2 cursor-pointer focus-visible:ring-[#7B3DFE]/30 ${billing === 'monthly' ? 'bg-[#7B3DFE] text-white shadow' : 'text-gray-600 hover:text-slate-900'}`}
            >
              Monthly
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={billing === 'yearly'}
              onClick={() => setBilling('yearly')}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full transition-all focus:outline-none border-solid border border-gray-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#7B3DFE]/30 ${billing === 'yearly' ? 'bg-[#7B3DFE] text-white shadow' : 'text-gray-600 hover:text-slate-900'}`}
            >
              Yearly
            </button>
          </div>
        </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {PLANS.map((p) => {
            const isSelected = selected === p.id;
            const priceLabel = p.price[billing];
            return (
              <div
                key={p.id}
                role="button"
                tabIndex={0}
                onClick={() => handleSelect(p.id)}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleSelect(p.id)}
    className={`relative bg-white rounded-2xl border border-solid p-4 sm:p-6 shadow-sm transition duration-300 ease-in-out transform md:hover:shadow-lg md:hover:-translate-y-2 md:hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#d9c9ff]/40 ${isSelected ? 'ring-2 ring-[#7B3DFE]/20 md:scale-[1.01] z-10' : ''} ${p.featured ? 'lg:scale-[1.03] border-[#E9D5FF]' : 'border-gray-300'}`}
              >
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#FFD6F9] to-[#EBD8FF] text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full shadow-sm">Most popular</div>
                )}

                <div className="flex items-center justify-between">
                  <div className="w-full text-center">
                    <h3 className={`text-base sm:text-lg ${p.featured ? 'lg:text-xl' : ''} font-semibold text-slate-900`}>{p.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">{p.subtitle}</p>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <div className={`text-2xl sm:text-3xl font-extrabold text-[#7B3DFE] ${p.featured ? 'lg:text-4xl' : ''}`}>
                    {priceLabel === 'Free' ? (
                      <span>Free</span>
                    ) : (
                      <span>
                        {p.currency}{priceLabel}
                        <span className="text-xs sm:text-sm font-medium text-gray-500">{billing === 'monthly' ? '/mo' : '/yr'}</span>
                      </span>
                    )}
                  </div>
                </div>

                <ul className="mt-5 sm:mt-6 space-y-1 sm:space-y-2 text-left">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-700">
                      <span className="text-green-600" aria-hidden>✔</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <button
                    onClick={() => handleCTA(p)}
                    className={`relative overflow-hidden group mx-auto cursor-pointer max-w-xs w-full px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold
                                inline-flex items-center justify-center gap-2 border-none transition-all duration-200
                                md:hover:-translate-y-0.5 active:translate-y-0 md:hover:shadow-md focus:outline-none focus:ring-4 focus:ring-[#d9c9ff]/40
                                ${p.featured ? 'bg-gradient-to-r from-[#7B3DFE] to-[#5A20D6] text-white sm:text-lg' : 'bg-[#7B3DFE] text-white'}`}
                    aria-label={`${p.cta} - ${p.name}`}
                  >
                    {/* sheen sweep */}
                    <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out
                                      bg-gradient-to-r from-transparent via-white/30 to-transparent" aria-hidden></span>
                    <span className="relative z-[1] inline-flex items-center gap-2">
                      {p.cta}
                      <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ChoosePlan;

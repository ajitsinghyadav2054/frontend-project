import React from 'react';

const TESTIMONIALS = [
  {
    id: 1,
    stars: 5,
    quote: 'Bedtime is finally peaceful. My 6-year-old asks for the Star Boat story every night.',
    author: 'Priya',
    meta: 'Mom of 6-year-old',
  },
  {
    id: 2,
    stars: 5,
    quote: 'The 5-minute “reset” before homework has been a game changer for focus.',
    author: 'Ravi',
    meta: 'Dad of 10-year-old',
  },
  {
    id: 3,
    stars: 5,
    quote: 'Our class uses the breathing games after lunch. Kids come back calm and ready.',
    author: 'Anika',
    meta: 'Grade 4 Teacher',
  },
];

const Star = ({ filled }) => (
  <svg className={`w-4 h-4 ${filled ? 'text-yellow-400' : 'text-gray-200'}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.176c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.176 0L5.21 18.75c-.784.57-1.84-.197-1.54-1.118l1.286-3.966a1 1 0 00-.364-1.118L1.213 9.093c-.783-.57-.38-1.81.588-1.81h4.176a1 1 0 00.95-.69L9.05 2.927z" />
  </svg>
);

const Reviews = () => {
  return (
    <section className="w-full bg-white">
  <div className="max-w-7xl mx-auto px-6 py-10 sm:py-12">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">What Families Say</h2>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.id}
              tabIndex={0}
      className="bg-white cursor-pointer border border-solid rounded-2xl p-4 sm:p-6 border-gray-300 shadow-sm transition duration-300 ease-in-out transform md:hover:-translate-y-1 md:hover:shadow-lg hover:border-[#E9D5FF] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#d9c9ff]/40"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex" aria-hidden>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} filled={i < t.stars} />
                    ))}
                  </div>
                </div>
              </div>

      <p className="mt-4 text-gray-900 font-medium text-sm sm:text-base">“{t.quote}”</p>

      <footer className="mt-4 text-xs sm:text-sm text-gray-700">— {t.author}, <span className="text-gray-700">{t.meta}</span></footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

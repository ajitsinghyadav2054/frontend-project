import React from 'react';

const ACTIONS = [
  { id: 'starter-kit', label: 'Download Starter Kit (PDF)', icon: '📁', href: '#' },
  { id: '7-day', label: '7-Day Calm Plan', icon: '🗓️', href: '#' },
  { id: 'classroom', label: 'Classroom Pack', icon: '🏫', href: '#' },
];

const ParentTeacherCard = () => {
  const handleClick = (action) => {
    console.log('Parent/Teacher action:', action.id);
  };

  return (
  <section id="for-parents" className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-10">
    <div className="rounded-2xl bg-gradient-to-r from-[#FBFDFF] via-[#F7F6FF] to-[#F6FFFD] p-5 sm:p-8 shadow-lg border border-solid border-transparent transition duration-300 ease-in-out transform md:hover:-translate-y-0.5 md:hover:shadow-xl hover:border-[#E9D5FF] focus-within:ring-4 focus-within:ring-[#d9c9ff]/40">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Parent & Teacher Hub</h3>
              <p className="mt-2 text-gray-600 text-sm sm:text-base md:max-w-[85%] mx-auto md:mx-0">
                Practical guides, printable routines, and progress insights so you can support mindfulness at home and school.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {ACTIONS.map((a) => (
                <a
                  key={a.id}
                  href={a.href}
                  onClick={() => handleClick(a)}
                  className="inline-flex items-center justify-center cursor-pointer no-underline gap-2 px-3 sm:px-4 py-2 bg-white rounded-full shadow-sm border border-solid border-gray-100 text-xs sm:text-sm font-bold text-[#6b21a8] hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-[#d9c9ff]/40 w-full sm:w-auto"
                  role="button"
                  aria-label={a.label}
                >
                  <span className="text-base">{a.icon}</span>
                  <span>{a.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentTeacherCard;

import React from 'react';

const ROWS = [
  {
    feature: 'Child-Friendly Guided Meditations',
    ours: { ok: true, text: 'Story-based, fun & short' },
    other: { ok: false, text: 'Generic adult content' },
  },
  {
    feature: 'Safe & Ad-Free Environment',
    ours: { ok: true, text: '100% secure for kids' },
    other: { ok: false, text: 'Ads & distractions' },
  },
  {
    feature: 'Age-Specific Programs',
    ours: { ok: true, text: 'Tailored for 4–14' },
    other: { ok: false, text: 'One-size-fits-all' },
  },
  {
    feature: 'Parent & Teacher Support',
    ours: { ok: true, text: 'Guides, printables, progress insights' },
    other: { ok: false, text: 'Limited or none' },
  },
];

const IconOk = ({ className = 'w-4 h-4' }) => (
  <svg className={`${className} text-green-600`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.071 7.071a1 1 0 01-1.414 0L3.293 9.859a1 1 0 011.414-1.414L8 11.737l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const IconFail = ({ className = 'w-4 h-4' }) => (
  <svg className={`${className} text-red-500`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M10 8.586L4.707 3.293A1 1 0 103.293 4.707L8.586 10l-5.293 5.293a1 1 0 101.414 1.414L10 11.414l5.293 5.293a1 1 0 001.414-1.414L11.414 10l5.293-5.293a1 1 0 00-1.414-1.414L10 8.586z" clipRule="evenodd" />
  </svg>
);

const Cell = ({ data, iconSize = 'w-4 h-4', textClassName = '', containerClassName = 'justify-center', showIcon = true }) => {
  const gapClass = showIcon ? 'gap-3' : 'gap-0';
  return (
    <div className={`flex items-center ${containerClassName} ${gapClass}`}>
      {showIcon && (data.ok ? <IconOk className={iconSize} /> : <IconFail className={iconSize} />)}
      <span className={`font-semibold ${textClassName} ${data.ok ? 'text-slate-700' : 'text-gray-500'}`}>{data.text}</span>
    </div>
  );
};

const Comparison = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Why Choose Mindery Kids Over Others?</h2>

        {/* Desktop table */}
        <div className="hidden md:block bg-white rounded-xl border border-solid border-gray-100 overflow-hidden shadow-sm ">
          <table className="w-full table-fixed">
            <colgroup>
              <col className="w-1/3" />
              <col className="w-1/3" />
              <col className="w-1/3" />
            </colgroup>
            <thead className="bg-[#F8F6FF]">
              <tr>
                <th className="px-6 py-4 text-center text-base md:text-xl font-bold text-[#4b1fcf]">Feature</th>
                <th className="px-6 py-4 text-center text-base md:text-xl font-bold text-[#4b1fcf]">Mindery Kids</th>
                <th className="px-6 py-4 text-center text-base md:text-xl font-bold text-[#4b1fcf]">Other Apps</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r, i) => (
                <tr key={r.feature} className={`${i % 2 === 0 ? 'bg-white' : 'bg-white'}`}>
                  <td className="px-6 py-5 align-top text-base font-semibold text-gray-800 border-t border-solid border-gray-100 text-center">{r.feature}</td>
                  <td className="px-6 py-5 align-top text-base border-t border-solid border-gray-100 text-center"><Cell data={r.ours} /></td>
                  <td className="px-6 py-5 align-top text-base border-t border-solid border-gray-100 text-center"><Cell data={r.other} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: stacked cards */}
        <div className="md:hidden space-y-4">
          {ROWS.map((r) => (
            <div key={r.feature} className="bg-white rounded-2xl border border-solid border-gray-100 p-5 shadow-sm">
              <div className="text-lg font-bold text-slate-900">{r.feature}</div>
              <div className="mt-3 grid grid-cols-1 gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-semibold text-[#4b1fcf]">Mindery Kids</span>
                  </div>
                  <Cell data={r.ours} iconSize="w-5 h-5" textClassName="text-base text-right" containerClassName="flex-1 justify-end" showIcon={false} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-semibold text-gray-600">Other Apps</span>
                  </div>
                  <Cell data={r.other} iconSize="w-5 h-5" textClassName="text-base text-right" containerClassName="flex-1 justify-end" showIcon={false} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comparison;

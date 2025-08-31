import littleExplorers from '../assets/littleExplorers.webp';
import braveThinkers from '../assets/braveThinkers.webp';
import calmAndCurious from '../assets/calmAndCurious.webp';

const PROGRAMS = [
  {
    id: 'little-explorers',
    title: 'Little Explorers (4-6)',
    desc: 'Three to five-minute stories with animal friends that teach belly-breathing, noticing sounds, and gentle stretching.',
    tags: ['Cozy Corner', 'Calm Music', 'Sticker Badges'],
    image: littleExplorers,
    imageOnLeft: true,
  },
  {
    id: 'brave-thinkers',
    title: 'Brave Thinkers (7-10)',
    desc: 'Mindset stories, focus timers, and kindness practices that build confidence and classroom readiness.',
    tags: ['Focus Timer', 'Gratitude Notes', 'Streak Rewards'],
    image: braveThinkers,
    imageOnLeft: false,
  },
  {
    id: 'calm-curious',
    title: 'Calm & Curious (11-14)',
    desc: 'Longer meditations, reframing thoughts, and sleep stories for deeper rest and emotional balance.',
    tags: ['Mindset Minis', 'Sleep Stories', 'Goal Cards'],
    image: calmAndCurious,
    imageOnLeft: true,
  },
];

const Programs = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10 sm:py-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">Programs for Every Age</h2>
        <p className="text-sm sm:text-base text-gray-600 mb-8">Pick a track or mix and match. Each program grows with your child.</p>

        <div className="space-y-10 sm:space-y-16">
          {PROGRAMS.map((p) => {
            const imgCol = 'lg:col-span-6';
            const textCol = p.imageOnLeft ? 'lg:col-span-6 lg:pl-12' : 'lg:col-span-6 lg:pr-12';
            return (
              <article key={p.id} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Render in logical order so right-side images work correctly */}
                {p.imageOnLeft ? (
                  <>
                    <div className={`${imgCol} flex justify-center`}>
                      <div className="w-full max-w-md lg:max-w-none rounded-2xl overflow-hidden shadow-md transform transition">
                        <img src={p.image} alt={p.title} className="object-cover w-full h-56 sm:h-72 lg:h-[420px] xl:h-[450px]" />
                      </div>
                    </div>

                    <div className={`${textCol} flex flex-col justify-center text-center lg:text-left`}>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900">{p.title}</h3>
                      <p className="mt-3 sm:mt-4 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">{p.desc}</p>

                      <div className="mt-6 flex flex-wrap gap-3 justify-center sm:justify-start">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center gap-3 bg-white border border-solid border-gray-100 rounded-full px-4 py-2 text-sm text-gray-800 shadow transition-transform duration-300 ease-out transform will-change-transform hover:-translate-y-1 hover:scale-[1.03] hover:shadow-2xl
                            hover:border-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7B3DFE]/30 active:translate-y-[1px]"
                            role="button"
                            tabIndex={0}
                          >
                            <span className="text-xs">•</span>
                            <span className="font-medium">{t}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={`${textCol} order-2 lg:order-1 flex flex-col justify-center text-center lg:text-left`}>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900">{p.title}</h3>
                      <p className="mt-3 sm:mt-4 text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">{p.desc}</p>

                      <div className="mt-6 flex flex-wrap gap-3 justify-center sm:justify-start">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center gap-3 bg-white border border-solid border-gray-100 rounded-full px-4 py-2 text-sm text-gray-800 shadow transition-transform duration-300 ease-out transform will-change-transform hover:-translate-y-1 hover:scale-[1.03] hover:shadow-2xl hover:border-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7B3DFE]/30 active:translate-y-[1px]"
                            role="button"
                            tabIndex={0}
                          >
                            <span className="text-xs">•</span>
                            <span className="font-medium">{t}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={`${imgCol} order-1 lg:order-2 flex justify-center`}>
                      <div className="w-full max-w-md lg:max-w-none rounded-2xl overflow-hidden shadow-md transform transition">
                        <img src={p.image} alt={p.title} className="object-cover w-full h-56 sm:h-72 lg:h-[420px] xl:h-[480px]" />
                      </div>
                    </div>
                  </>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
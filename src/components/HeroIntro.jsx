import React, { useState, useRef, useEffect } from "react";
import heroIntro from "../assets/heroIntro.webp";
import FreeTrialModal from "./FreeTrialModal";

const BENEFITS = [
  { emoji: "🎯", title: "Focus", subtitle: "Improves" },
  { emoji: "😊", title: "Stress", subtitle: "Reduces" },
  { emoji: "💤", title: "Sleep", subtitle: "Better" },
  { emoji: "❤️", title: "Empathy", subtitle: "Builds" },
];

const todaysJourney = [
  { title: "Dragon Breath", time: "3 min" },
  { title: "Butterfly Body Scan", time: "5 min" },
  { title: "Sleep Story: Star Boat", time: "7 min" },
];

const HeroIntro = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  // close modal on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // focus is handled in FreeTrialModal component

  const handleSubmit = (payload) => {
    // placeholder for actual submission
    console.log("Free trial form submitted:", payload);
  };

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start lg:items-stretch">
        {/* Left column: headline, subtext, CTAs, benefits */}
  <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#F3F2FF] text-sm text-[#5B21B6] px-3 py-1 rounded-full w-max">
            <span className="text-sm">🌈</span>
            <span className="font-medium">Calm Minds, Happy Hearts</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-tight text-slate-900">
            Mindfulness & Meditation for Kids (4-14)
          </h1>

          {/* Mobile-only hero image between heading and subheading */}
          <div className="sm:hidden">
            <div className="w-full h-56 bg-gray-100 rounded-2xl shadow-inner flex items-center justify-center overflow-hidden mt-2">
              {heroIntro ? (
                <img src={heroIntro} alt="Hero intro" className="object-cover w-full h-full opacity-95" />
              ) : (
                <div className="w-full h-full bg-gray-200" />
              )}
            </div>
          </div>

          <p className="text-gray-600 max-w-xl">
            Fun, story-based meditations that build focus, kindness, and
            confidence. Safe, ad-free, and crafted with child-development
            experts.
          </p>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
        className="group inline-flex items-center justify-center w-full sm:w-auto gap-2 px-6 py-3 min-w-40 rounded-full border-none cursor-pointer
                         text-base font-semibold text-white bg-gradient-to-r from-[#6F3CFF] via-[#7B3DFE] to-[#5A20D6]
                         shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0
                         focus:outline-none focus-visible:ring-4 focus-visible:ring-[#7B3DFE]/30"
              aria-haspopup="dialog"
            >
              Start Free Trial
              <svg
                className="w-4 h-4 -mr-0.5 transition-transform duration-200 group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M13 5l7 7-7 7"
                />
              </svg>
            </button>

            <a
              href="#programs"
              className="group inline-flex no-underline items-center justify-center w-full sm:w-auto gap-2 px-6 py-3 min-w-40 rounded-full
                         font-semibold text-white bg-gradient-to-r from-[#10B981] to-[#059669]
                         shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0
                         focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300/40"
            >
              Explore Programs
              <svg
                className="w-4 h-4 -mr-0.5 transition-transform duration-200 group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M13 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-5 max-w-md">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-[#E9D5FF] to-transparent hover:from-[#C4B5FD] hover:to-[#BAE6FD] transition z-0 hover:z-10 focus-within:z-10"
              >
                <div
                  tabIndex={0}
                  className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-sm min-w-[150px]
                             transition-all duration-200 hover:shadow-md
                             focus:outline-none focus-visible:ring-4 focus-visible:ring-[#7B3DFE]/20"
                >
                  <div
                    className="w-10 h-10 rounded-xl border border-solid border-[#E9D5FF] bg-gradient-to-br from-white to-[#F9F5FF]
                                  flex items-center justify-center text-xl transition-transform duration-200 group-hover:scale-110"
                  >
                    {b.emoji}
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">{b.subtitle}</div>
                    <div className="font-semibold text-sm text-slate-800">
                      {b.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: image placeholder + floating card */}
  <div className="relative hidden sm:flex items-center justify-center">
          <div className="w-full h-56 sm:h-80 lg:h-[70vh] bg-gray-100 rounded-2xl shadow-inner flex items-center justify-center overflow-hidden">
            {/* Use provided hero image if available, otherwise gray box */}
            {heroIntro ? (
              <img
                src={heroIntro}
                alt="Hero-Intro-img"
                className="object-cover w-full h-full opacity-95"
              />
            ) : (
              <div className="w-full h-full bg-gray-200" />
            )}
          </div>

          {/* Floating card */}
          <div className="hidden sm:block absolute -left-10 bottom-6 sm:top-44 lg:top-64 transform -rotate-6">
            <div className="w-64 bg-white rounded-xl shadow-lg p-4 border border-solid border-gray-100">
              <div className="text-sm font-semibold mb-2">Today's Journey</div>
              <ul className="text-sm text-gray-700 space-y-2">
                {todaysJourney.map((t) => (
                  <li key={t.title} className="flex items-center gap-2">
                    <span className="text-lg">•</span>
                    <span className="flex-1">{t.title}</span>
                    <span className="text-xs text-gray-400">{t.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

  <FreeTrialModal open={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleSubmit} />
    </section>
  );
};

export default HeroIntro;

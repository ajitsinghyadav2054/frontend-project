import { useState, useEffect } from 'react';

const LINKS = [
  { name: 'Why', href: '#why' },
  { name: 'Programs', href: '#programs' },
  { name: 'Features', href: '#features' },
  { name: 'For Parents', href: '#for-parents' },
  { name: 'FAQ', href: '#faq' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(typeof window !== 'undefined' ? window.location.hash : '');

  useEffect(() => {
    const onHash = () => setActiveHash(window.location.hash);
    window.addEventListener('hashchange', onHash);
    // close menu on resize to avoid stale state
    const onResize = () => {
      if (window.innerWidth >= 640) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('hashchange', onHash);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const handleNavClick = (e, href) => {
    // smooth scroll to section referenced by href (e.g. '#programs')
    e.preventDefault();
    const id = href.startsWith('#') ? href.slice(1) : href;
    const el = document.getElementById(id);
    if (el) {
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  // remove persistent focus outline after click without changing visual focus styles
  try { e.currentTarget && e.currentTarget.blur(); } catch (err) { /* ignore */ }
      try {
        // update URL without jumping
        window.history.replaceState(null, '', href);
      } catch (err) {
        // ignore
      }
      setActiveHash(href);
      setMenuOpen(false);
    } else {
      // fallback to default behaviour
      setMenuOpen(false);
  try { e.currentTarget && e.currentTarget.blur(); } catch (err) { /* ignore */ }
      window.location.href = href;
    }
  };

  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Left: logo + brand */}
          <div className="flex items-center gap-3">
            <div
              role="img"
              aria-label="Topmind Care"
              className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#7B3DFE] via-[#824BFF] to-[#4b1fcf] flex items-center justify-center text-white font-bold select-none shadow-md"
            />
            <span className="text-black font-semibold text-lg select-none">Topmind Care</span>
          </div>

          {/* Desktop links + CTA */}
        <div className="hidden sm:flex items-center gap-6">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className={`no-underline text-base font-semibold transform transition duration-300 ease-in-out hover:-translate-y-0.4 hover:scale-[1.01] hover:underline hover:decoration-1 hover:decoration-[#4b1fcf] hover:underline-offset-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7B3DFE] px-1 ${
                activeHash === l.href ? 'text-[#4b1fcf]' : 'text-[#7B3DFE] hover:text-[#4b1fcf]'
              }`}
            >
              {l.name}
            </a>
          ))}

          <button
            className="group relative overflow-hidden ml-2 inline-flex items-center gap-2 px-5 py-2 rounded-full border-none
                       bg-gradient-to-r from-[#824BFF] to-[#7B3DFE] text-white font-semibold shadow-md
                       transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0
                       focus:outline-none focus-visible:ring-4 focus-visible:ring-[#d9c9ff]/40 cursor-pointer"
            aria-label="Start Free"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent" aria-hidden></span>
            <span className="relative z-[1] inline-flex items-center gap-2">
              Start Free
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>

        {/* Mobile: hamburger */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setMenuOpen((s) => !s)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation"
            className="p-2 rounded-md border-solid border border-gray-400 inline-flex items-center justify-center text-gray-700 
            bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7B3DFE]"
          >
            <svg className={`w-6 h-6 transition-transform ${menuOpen ? 'transform rotate-90' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Divider: ensure border-solid per project requirement */}
      <div className="border-t border-solid border-gray-100" />

      {/* Mobile menu panel */}
      <div id="mobile-menu" className={`${menuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-4 pt-4 pb-6 space-y-3">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className={`block no-underline text-base font-medium px-3 py-2 rounded-md transform transition duration-300 ease-in-out hover:-translate-y-0.4 hover:scale-[1.01] hover:underline hover:decoration-1 hover:decoration-[#4b1fcf] hover:underline-offset-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7B3DFE] ${
                activeHash === l.href ? 'text-[#4b1fcf]' : 'text-gray-700 hover:text-[#4b1fcf]'
              }`}
            >
              {l.name}
            </a>
          ))}

          <div className="px-3">
            <button
              aria-label="Start Free"
              className="group relative overflow-hidden w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border-none
                         bg-gradient-to-r from-[#824BFF] to-[#7B3DFE] text-white text-base font-semibold shadow-md
                         active:translate-y-px focus:outline-none focus-visible:ring-4 focus-visible:ring-[#d9c9ff]/40 cursor-pointer"
            >
              <span
                className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full group-active:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent"
                aria-hidden
              ></span>
              <span className="relative z-[1] inline-flex items-center gap-2">
                Start Free
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-active:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
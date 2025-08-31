import logo from "../assets/topmindcare.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-4 pb-6 border-t border-gray-200"
      style={{ borderTop: '1px solid #E5E7EB' }}>
        {/* Main Footer Content */}
  <div className="grid grid-cols-3 md:flex md:flex-row items-start md:items-start md:justify-between text-left md:text-left gap-4 md:gap-6">

          {/* Logo and Brand */}
          <div className="mx-0 md:mx-0 flex flex-col items-start gap-2">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <img
                src={logo}
                alt="Topmind Care"
                className="hidden sm:block w-9 h-9 rounded-xl"
              />
              <div className="font-semibold text-lg text-slate-900">
                Topmind Care
              </div>
            </div>

            {/* Tagline */}
            <div className="text-xs md:text-sm text-gray-600 max-w-md">
              Mindfulness for growing minds. © 2025 Mindery Kids.
            </div>
          </div>

          {/* Navigation Links */}
          <div
            aria-label="footer navigation"
            className="flex flex-col items-center justify-start gap-2"
          >
            <span className="self-center md:self-start text-xs md:text-sm no-underline text-gray-600">
              Contact
            </span>

            <nav className="flex flex-col items-center md:flex-row gap-2 md:gap-3 md:flex-wrap md:justify-start">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-sm md:text-base font-bold no-underline text-[#7B3DFE] transition-colors duration-200"
              >
                Instagram
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="text-sm md:text-base font-bold no-underline text-[#7B3DFE] transition-colors duration-200"
              >
                YouTube
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="text-sm md:text-base font-bold no-underline text-[#7B3DFE] transition-colors duration-200"
              >
                X
              </a>
            </nav>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col items-center justify-start gap-2">
            <span className="self-center md:self-start text-xs md:text-sm no-underline text-gray-600">
              Legal
            </span>

            <nav className="flex flex-col items-center md:flex-row gap-2 md:gap-3 md:flex-wrap md:justify-start">
              <a
                href="#privacy"
                className="text-sm md:text-base font-bold no-underline text-[#7B3DFE] transition-colors duration-200"
              >
                Privacy
              </a>
              {/* <span className="text-gray-300">·</span> */}
              <a
                href="#terms"
                className="text-sm md:text-base font-bold no-underline text-[#7B3DFE] transition-colors duration-200"
              >
                Terms
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

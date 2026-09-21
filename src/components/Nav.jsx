import { useEffect, useState } from "react";
import { nav, site } from "../data/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false); // Light mode is default

  // Check storage on load and apply the appropriate theme class
  useEffect(() => {
    const savedTheme = localStorage.getItem("azura-theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("azura-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("azura-theme", "light");
      }
      return next;
    });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-void/90 backdrop-blur border-b border-gold/10" : "bg-transparent"
      }`}
    >
      <div className="section">
        <div className="section-inner flex items-center justify-between h-16 sm:h-20">
          <img src="/favicon.svg" alt="AZURA Logo" className="h-10 w-auto" />
          <a href="#top" className="font-display font-semibold tracking-tight text-lg text-ivory">
            AZURA<span className="text-gold">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-ivoryDim hover:text-gold-light transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle Desktop */}
            <button
              onClick={toggleTheme}
              className="text-ivoryDim hover:text-gold-light p-2 rounded-full transition-colors"
              aria-label="Toggle Theme"
            >
              {isDark ? (
                // Sun Icon
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                // Moon Icon
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 text-sm font-medium border border-gold/40 text-gold-light px-4 py-2 rounded-full hover:bg-gold hover:text-void hover:border-gold transition-colors"
            >
              Get in touch
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="text-ivory p-2 transition-colors"
              aria-label="Toggle Theme"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <button
              className="text-ivory p-2"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                {open ? (
                  <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                ) : (
                  <path d="M2 6H20M2 11H20M2 16H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-void border-t border-gold/10">
          <div className="section py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-ivoryDim hover:text-gold-light text-sm"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`mailto:${site.email}`}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center border border-gold/40 text-gold-light px-4 py-2.5 rounded-full text-sm font-medium"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
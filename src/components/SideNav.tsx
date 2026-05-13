import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export const SideNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const goingUp = y < lastY.current;
      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      setScrolled(y > 40);
      // Always visible on mobile, otherwise scroll-triggered
      setVisible(isMobile || y < 40 || goingUp);
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          key="nav"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`fixed top-0 left-0 right-0 z-[100] h-[64px] flex items-center px-6 md:px-10 transition-all duration-300 ${scrolled
              ? "bg-bg-elevated/95 backdrop-blur-md border-b border-border-subtle shadow-sm"
              : "bg-transparent"
            }`}
        >
          {/* ─── Brand wordmark ─── */}
          <Link
            to="/"
            aria-label="MAGINARI home"
            className="flex items-center select-none"
          >
            <img src="/logo.svg" alt="MAGINARI" className="h-6 w-auto" />
          </Link>

          {/* ─── Spacer ─── */}
          <div className="flex-1" />

          {/* ─── Search bar (desktop) ─── */}
          <div
            className={`hidden md:flex items-center gap-2 rounded-full px-4 py-1.5 mr-4 transition-all duration-300 ${scrolled
                ? "bg-white/5 text-text-primary border border-border-light"
                : "bg-white/10 text-text-secondary border border-transparent"
              }`}
          >
            <svg className="w-3.5 h-3.5 opacity-60 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-[11px] tracking-wide outline-none w-28 placeholder-current placeholder-opacity-50"
            />
          </div>

          {/* ─── Icon group ─── */}
          <div className="flex items-center gap-1">
            {/* Search icon (mobile) */}
            <button
              aria-label="Search"
              className={`flex md:hidden items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:bg-white/5 ${scrolled ? "text-text-primary" : "text-text-secondary"
                }`}
            >
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
              </svg>
            </button>

            {/* Favourites */}
            <button
              aria-label="Favourites"
              className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:bg-white/5 ${scrolled ? "text-text-primary" : "text-text-secondary"
                }`}
            >
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>

            {/* Profile */}
            <button
              aria-label="Profile"
              className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:bg-white/5 ${scrolled ? "text-text-primary" : "text-text-secondary"
                }`}
            >
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

            {/* Cart */}
            <button
              aria-label="Cart"
              className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:bg-white/5 ${scrolled ? "text-text-primary" : "text-text-secondary"
                }`}
            >
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {/* Cart badge */}
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-olive-400" />
            </button>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

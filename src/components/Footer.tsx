import { MapPin } from 'lucide-react';

interface FooterProps {
  onBrandClick: () => void;
  onNavigate: (view: 'home' | 'shop' | 'journal') => void;
}

/* Real SVG social icons */
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.32a8.16 8.16 0 0 0 4.76 1.52V7.38a4.85 4.85 0 0 1-1-.69z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.75 15.52V8.48L15.82 12l-6.07 3.52z"/>
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
  </svg>
);

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer id="maginari-footer" className="bg-neutral-950 text-white select-none font-sans">

      {/* Single compact row */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

        {/* Brand + tagline */}
        <div className="flex flex-col gap-1.5">
          <img 
            src="/wordmark.svg" 
            alt="MAGINARI" 
            className="h-3.5 w-auto object-contain invert" 
          />
          <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider">Premium Streetwear</span>
        </div>

        {/* Nav links */}
        <div className="flex items-center gap-6 flex-wrap">
          {[
            { label: 'Shop', action: () => onNavigate('shop') },
            { label: 'Journal', action: () => onNavigate('journal') },
            { label: 'Returns', action: () => {} },
            { label: 'Contact', action: () => {} },
          ].map(({ label, action }) => (
            <button
              key={label}
              onClick={action}
              className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500 hover:text-white cursor-pointer transition-colors duration-200"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Socials */}
        <div className="flex items-center gap-5 text-neutral-400">
          <a href="#" aria-label="Instagram" className="hover:text-white transition-colors duration-200"><InstagramIcon /></a>
          <a href="#" aria-label="TikTok" className="hover:text-white transition-colors duration-200"><TikTokIcon /></a>
          <a href="#" aria-label="YouTube" className="hover:text-white transition-colors duration-200"><YoutubeIcon /></a>
          <a href="#" aria-label="X / Twitter" className="hover:text-white transition-colors duration-200"><XIcon /></a>
        </div>

      </div>

      {/* Bottom legal bar */}
      <div className="border-t border-neutral-900 px-6 md:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[9px] font-mono text-neutral-600 uppercase tracking-wider">
        <span>© 2026 Maginari. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <span className="hover:text-neutral-400 cursor-pointer transition-colors">Privacy</span>
          <span className="hover:text-neutral-400 cursor-pointer transition-colors">Terms</span>
          <div className="flex items-center gap-1.5 hover:text-neutral-400 cursor-pointer transition-colors">
            <MapPin className="w-3 h-3" />
            <span>United Kingdom</span>
          </div>
        </div>
      </div>

    </footer>
  );
}

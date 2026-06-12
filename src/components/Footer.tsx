import React from 'react';
import { Instagram, Twitter, Youtube } from 'lucide-react';

interface FooterProps {
  onBrandClick: () => void;
  onNavigate: (view: 'home' | 'shop' | 'journal') => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const brandLinks = ['Maginari Journal', 'Our Story', 'Stores', 'Careers'];
  const supportLinks = ['Returns', 'Order Tracking', 'FAQ', 'Contact Us'];
  const boringLinks = ['Terms of Use', 'Privacy & Cookie Policy', 'Terms of Sale'];

  return (
    <footer id="maginari-footer" className="bg-white text-stone-900 font-sans pt-16 border-t border-stone-200 select-none overflow-hidden flex flex-col">
      <div className="w-full px-6 md:px-12 flex flex-col">
        
        {/* TOP SECTION: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 lg:gap-16 mb-24">
          
          {/* COLUMN 1: STAY IN THE LOOP */}
          <div className="flex flex-col">
            <h4 className="text-xs uppercase font-bold tracking-widest mb-6 text-black">Stay in the loop</h4>
            <p className="text-sm text-stone-600 mb-8">Sign up to our emails and get 10% off</p>
            
            <div className="flex flex-col gap-6">
              {/* Input */}
              <div className="flex items-center border-b border-stone-300 pb-2">
                <input 
                  type="email" 
                  placeholder="user@gmail.com" 
                  className="w-full bg-transparent outline-none text-sm placeholder:text-stone-400"
                />
                <button className="text-xs font-bold uppercase tracking-widest hover:text-stone-500 transition-colors ml-4 shrink-0 text-black">
                  Subscribe
                </button>
              </div>

              {/* Preferences */}
              <div className="flex items-center gap-4 lg:gap-6 text-sm text-stone-600 flex-wrap">
                <span className="text-xs text-black">Select your preferences:</span>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="w-3 h-3 rounded-full border border-stone-400 flex items-center justify-center group-hover:border-stone-800">
                    <div className="w-1.5 h-1.5 rounded-full bg-black hidden" />
                  </div>
                  Man
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="w-3 h-3 rounded-full border border-stone-400 flex items-center justify-center group-hover:border-stone-800">
                    <div className="w-1.5 h-1.5 rounded-full bg-black hidden" />
                  </div>
                  Woman
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="w-3 h-3 rounded-full border border-black flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-black" />
                  </div>
                  Both
                </label>
              </div>

              {/* Checkbox */}
              <label className="flex items-start gap-3 cursor-pointer mt-2 group">
                <div className="w-3 h-3 border border-stone-400 mt-1 shrink-0 group-hover:border-stone-800 flex items-center justify-center" />
                <span className="text-[11px] leading-tight text-stone-500">
                  I agree to receive content from Maginari via email and have read and accept the <a href="#" className="underline hover:text-black">Privacy Policy</a>
                </span>
              </label>
            </div>
          </div>

          {/* COLUMN 2: BRAND */}
          <div className="flex flex-col">
            <h4 className="text-xs uppercase font-bold tracking-widest mb-6 text-black">Brand</h4>
            <div className="flex flex-col gap-3">
              {brandLinks.map(link => (
                <a key={link} href="#" className="text-[13px] text-stone-600 hover:text-black transition-colors">{link}</a>
              ))}
            </div>
          </div>

          {/* COLUMN 3: SUPPORT */}
          <div className="flex flex-col">
            <h4 className="text-xs uppercase font-bold tracking-widest mb-6 text-black">Support</h4>
            <div className="flex flex-col gap-3">
              {supportLinks.map(link => (
                <a key={link} href="#" className="text-[13px] text-stone-600 hover:text-black transition-colors">{link}</a>
              ))}
            </div>
          </div>

          {/* COLUMN 4: BORING STUFF */}
          <div className="flex flex-col">
            <h4 className="text-xs uppercase font-bold tracking-widest mb-6 text-black">Boring Stuff</h4>
            <div className="flex flex-col gap-3">
              {boringLinks.map(link => (
                <a key={link} href="#" className="text-[13px] text-stone-600 hover:text-black transition-colors">{link}</a>
              ))}
            </div>
          </div>
          
        </div>

        {/* MIDDLE UTILITY BAR */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full pb-8 gap-6 border-b border-stone-200">
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-stone-800">
            <span>Country & Language</span>
            <span className="text-stone-400 cursor-pointer hover:text-stone-600">UK | GBP | English ▼</span>
          </div>

          <div className="flex items-center gap-4 text-stone-600">
            <a href="#" className="hover:text-black transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-black transition-colors">
              {/* TIKTOK SVG */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>
            </a>
            <a href="#" className="hover:text-black transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-black transition-colors"><Youtube className="w-5 h-5" /></a>
          </div>
        </div>
      </div>

      {/* GIANT MAGINARI LOGO */}
      <div className="w-full overflow-hidden flex justify-center items-end mt-4 mb-[-2vw] pointer-events-none">
        <h1 className="text-[25vw] md:text-[23vw] leading-[0.75] font-sans font-bold tracking-tighter text-[#4a3525] whitespace-nowrap opacity-90 select-none">
          Maginari®
        </h1>
      </div>
    </footer>
  );
}

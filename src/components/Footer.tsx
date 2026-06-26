import { Instagram, Twitter } from 'lucide-react';

interface FooterProps {
  onBrandClick: () => void;
  onNavigate: (view: 'home' | 'shop' | 'journal') => void;
  onAdminPortalClick: () => void;
}

export default function Footer({ onNavigate, onAdminPortalClick }: FooterProps) {
  const brandLinks = ['Maginari Journal', 'Our Story', 'Stores', 'Careers'];
  const supportLinks = ['Returns', 'Order Tracking', 'FAQ', 'Contact Us'];
  const boringLinks = ['Terms of Use', 'Privacy & Cookie Policy', 'Terms of Sale'];

  return (
    <footer id="maginari-footer" className="bg-white text-stone-900 font-sans pt-16 select-none overflow-hidden flex flex-col">
      <div className="w-full px-6 md:px-12 flex flex-col">
        
        {/* TOP SECTION: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 lg:gap-8 mb-24">
          
          {/* COLUMN 1: STAY IN THE LOOP */}
          <div className="flex flex-col md:col-span-5">
            <h4 className="text-xs uppercase font-bold tracking-widest mb-6 text-black">Stay in the loop</h4>
            <p className="text-sm text-stone-600 mb-8">Sign up to our emails and get 10% off</p>
            
            <div className="flex flex-col gap-6 max-w-sm">
              {/* Input */}
              <div className="flex items-center pb-2">
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
              <div className="flex items-center gap-4 lg:gap-6 text-sm text-stone-600 flex-nowrap whitespace-nowrap overflow-x-auto [scrollbar-width:none]">
                <span className="text-xs text-black">Select your preferences:</span>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="w-3 h-3 rounded-full flex items-center justify-center group-hover:border-stone-800">
                    <div className="w-1.5 h-1.5 rounded-full bg-black hidden" />
                  </div>
                  Man
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="w-3 h-3 rounded-full flex items-center justify-center group-hover:border-stone-800">
                    <div className="w-1.5 h-1.5 rounded-full bg-black hidden" />
                  </div>
                  Woman
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="w-3 h-3 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-black" />
                  </div>
                  Both
                </label>
              </div>

              {/* Checkbox */}
              <label className="flex items-start gap-3 cursor-pointer mt-2 group">
                <div className="w-3 h-3 mt-1 shrink-0 group-hover:border-stone-800 flex items-center justify-center" />
                <span className="text-[11px] leading-tight text-stone-500">
                  I agree to receive content from Maginari via email and have read and accept the <a href="#" className="underline hover:text-black">Privacy Policy</a>
                </span>
              </label>
            </div>
          </div>

          {/* COLUMN 2: BRAND */}
          <div className="flex flex-col md:col-start-7 md:col-span-2">
            <h4 className="text-xs uppercase font-bold tracking-widest mb-6 text-black">Brand</h4>
            <div className="flex flex-col gap-3">
              {brandLinks.map(link => (
                <a key={link} href="#" className="text-[13px] text-stone-600 hover:text-black transition-colors">{link}</a>
              ))}
            </div>
          </div>

          {/* COLUMN 3: SUPPORT */}
          <div className="flex flex-col md:col-span-2">
            <h4 className="text-xs uppercase font-bold tracking-widest mb-6 text-black">Support</h4>
            <div className="flex flex-col gap-3">
              {supportLinks.map(link => (
                <a key={link} href="#" className="text-[13px] text-stone-600 hover:text-black transition-colors">{link}</a>
              ))}
            </div>
          </div>

          {/* COLUMN 4: BORING STUFF */}
          <div className="flex flex-col md:col-span-2">
            <h4 className="text-xs uppercase font-bold tracking-widest mb-6 text-black">Boring Stuff</h4>
            <div className="flex flex-col gap-3">
              {boringLinks.map(link => (
                <a key={link} href="#" className="text-[13px] text-stone-600 hover:text-black transition-colors">{link}</a>
              ))}
            </div>
          </div>
          
        </div>

        {/* MIDDLE UTILITY BAR */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full pb-8 gap-6">
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-stone-800">
            <span>Country & Language</span>
            <span className="text-stone-400 cursor-pointer hover:text-stone-600">UK | GBP | English ▼</span>
            <span className="text-stone-300 select-none">|</span>
            <button 
              onClick={onAdminPortalClick} 
              className="text-stone-400 hover:text-black cursor-pointer font-bold tracking-widest text-[10px] uppercase transition-colors"
              title="Configurator Portal"
            >
              Portal
            </button>
          </div>

          <div className="flex items-center gap-4 text-stone-600">
            <a href="https://www.instagram.com/maginari.official?igsh=MWN4eHVicncwYXMxeQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors" title="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.tiktok.com/@imaginari.official?_r=1&_t=ZS-97X7UTAAHTO" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors" title="TikTok">
              {/* TIKTOK SVG */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>
            </a>
            <a href="https://x.com/imaginari__?s=21" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors" title="Twitter"><Twitter className="w-5 h-5" /></a>
            <a href="https://pin.it/5dYS4PGaO" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors" title="Pinterest">
              {/* PINTEREST SVG */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.005-4.882-3.409 0-5.41 2.561-5.41 5.202 0 1.032.397 2.139.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.172.267-.399.161-1.499-.696-2.435-2.887-2.435-4.646 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.621 0 11.988-5.365 11.988-11.987C23.997 5.368 18.631 0 12.017 0z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* GIANT MAGINARI LOGO */}
      <div className="w-full overflow-hidden flex justify-center items-end mt-4 mb-[-2vw] pointer-events-none px-4">
        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 349 49" className="w-full h-auto max-w-[1200px] opacity-90 mix-blend-multiply">
          <image width="349" height="49" xlinkHref="data:image/png;base64,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" />
        </svg>
      </div>
    </footer>
  );
}

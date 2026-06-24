import { X, ArrowRight, Instagram, Twitter } from 'lucide-react';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: 'home' | 'shop' | 'journal', category?: string, gender?: string) => void;
}

export default function MenuDrawer({ isOpen, onClose, onNavigate }: MenuDrawerProps) {
  if (!isOpen) return null;

  const navLinks = [
    { 
      label: 'New In', 
      desc: 'Explore the latest arrivals & drops',
      onClick: () => {
        onNavigate('shop', 'All Elements');
        onClose();
      } 
    },
    { 
      label: 'Men', 
      desc: 'Technical tailoring & heavy silhouettes',
      onClick: () => {
        onNavigate('shop', 'All Elements', 'Men');
        onClose();
      } 
    },
    { 
      label: 'Women', 
      desc: 'Asymmetric structures & utility drapery',
      onClick: () => {
        onNavigate('shop', 'All Elements', 'Women');
        onClose();
      } 
    },
    { 
      label: 'Brands', 
      desc: 'Rains, Tekla, Heliot Emil & Maginari',
      onClick: () => {
        onNavigate('home');
        onClose();
        setTimeout(() => {
          document.getElementById('brand-marketplace')?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    },
    { 
      label: 'Editorial', 
      desc: 'Behind the drop & style diaries',
      onClick: () => {
        onNavigate('journal');
        onClose();
      } 
    },
  ];

  return (
    <div 
      id="menu-drawer-backdrop" 
      className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex justify-end animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-md h-full bg-stone-100 flex flex-col justify-between p-8 shadow-2xl relative overflow-hidden animate-slideLeft"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-6 select-none">
          <span className="text-[10px] font-mono tracking-[0.25em] text-stone-500 uppercase">
            ARCHIVE MENU
          </span>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-stone-250 cursor-pointer text-black transition-colors"
            aria-label="Close menu drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 flex flex-col justify-center gap-8 my-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={link.onClick}
              className="text-left group cursor-pointer focus:outline-none"
            >
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-sans font-black uppercase text-black group-hover:text-[#B6861B] transition-colors leading-none">
                  {link.label}
                </span>
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#B6861B]" />
              </div>
              <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block mt-1">
                {link.desc}
              </span>
            </button>
          ))}
        </nav>

        {/* Footer info & Socials */}
        <div className="pt-6 space-y-6 select-none">
          <div className="space-y-2">
            <span className="text-[9px] font-mono text-stone-400 tracking-wider uppercase block">
              TAGLINE
            </span>
            <p className="text-[10px] font-mono text-stone-600 uppercase leading-relaxed">
              MAGINARI // OUT OF ORDER SINCE DAY ONE. COPENHAGEN - MADRID UTILITY CO-EXISTENCE.
            </p>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-4 text-stone-600">
              <a 
                href="https://www.instagram.com/maginari.official" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-black transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="hover:text-black transition-colors"
                title="TikTok"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-black transition-colors" title="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
            <span className="text-[9px] font-mono text-stone-400">
              V1.0.0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

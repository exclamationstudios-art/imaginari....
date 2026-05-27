import { MapPin, Facebook, Instagram, Youtube, HelpCircle } from 'lucide-react';

interface FooterProps {
  onBrandClick: () => void;
  onNavigate: (view: 'home' | 'shop' | 'journal') => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer id="maginari-suitsupply-footer" className="bg-black text-white pt-20 pb-10 px-6 md:px-12 select-none font-sans">
      <div className="w-full max-w-[1400px] mx-auto">
        
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-12 gap-8">
          <h2 className="text-2xl md:text-[28px] font-bold text-white tracking-tight">
            Get the latest on products and styling
          </h2>
          <div className="w-full md:w-[450px] relative">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-[#1a1a1a] text-white placeholder-gray-400 text-[13px] py-4 px-6 rounded-sm outline-none border border-transparent focus:border-gray-600 transition-colors"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-[13px] font-semibold hover:text-gray-300 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-[#1a1a1a] mb-12"></div>

        {/* 5 Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 pb-16">
          
          {/* Column 1: Contact */}
          <div className="space-y-6">
            <h4 className="text-[13px] font-bold text-white tracking-wide">Contact</h4>
            <ul className="space-y-3 text-[13px] text-gray-300">
              <li className="flex gap-4">
                <span className="w-16">WhatsApp:</span>
                <span className="hover:text-white cursor-pointer">+44 7700 900077</span>
              </li>
              <li className="flex gap-4">
                <span className="w-16">Call:</span>
                <span className="hover:text-white cursor-pointer">0800 020 6227 <sup className="text-[9px]">FREE</sup></span>
              </li>
              <li className="flex gap-4">
                <span className="w-16">Email:</span>
                <span className="hover:text-white cursor-pointer">service@maginari.com</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Shop By */}
          <div className="space-y-6">
            <h4 className="text-[13px] font-bold text-white tracking-wide">Shop By</h4>
            <ul className="space-y-3 text-[13px] text-gray-300">
              <li><button onClick={() => onNavigate('shop')} className="hover:text-white cursor-pointer transition-colors">Suits</button></li>
              <li><button onClick={() => onNavigate('shop')} className="hover:text-white cursor-pointer transition-colors">Jackets & Blazers</button></li>
              <li><button onClick={() => onNavigate('shop')} className="hover:text-white cursor-pointer transition-colors">Trousers</button></li>
              <li><button onClick={() => onNavigate('shop')} className="hover:text-white cursor-pointer transition-colors">Shirts</button></li>
              <li><button onClick={() => onNavigate('shop')} className="hover:text-white cursor-pointer transition-colors">Coats</button></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="space-y-6">
            <h4 className="text-[13px] font-bold text-white tracking-wide">Support</h4>
            <ul className="space-y-3 text-[13px] text-gray-300">
              <li><span className="hover:text-white cursor-pointer transition-colors">Shipping & Delivery</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Returns & Exchanges</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Perfect Fit Guides</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">FAQ</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Terms & Conditions</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Accessibility</span></li>
            </ul>
          </div>

          {/* Column 4: Services */}
          <div className="space-y-6">
            <h4 className="text-[13px] font-bold text-white tracking-wide">Services</h4>
            <ul className="space-y-3 text-[13px] text-gray-300">
              <li><span className="hover:text-white cursor-pointer transition-colors">Plan Your Visit</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Custom Suits</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Alterations</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Size Passport</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Gift Cards</span></li>
            </ul>
          </div>

          {/* Column 5: About */}
          <div className="space-y-6">
            <h4 className="text-[13px] font-bold text-white tracking-wide">About</h4>
            <ul className="space-y-3 text-[13px] text-gray-300">
              <li><button onClick={() => onNavigate('journal')} className="hover:text-white cursor-pointer transition-colors">Store Experience</button></li>
              <li><button onClick={() => onNavigate('journal')} className="hover:text-white cursor-pointer transition-colors">Our Story</button></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Press</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Sustainability</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Careers</span></li>
            </ul>
          </div>

        </div>

        {/* Sustainability Leader Badge */}
        <div className="flex items-center gap-3 pb-8">
          <div className="w-8 h-4 bg-red-600 flex items-center justify-center text-[8px] font-bold uppercase rounded-sm overflow-hidden">
            <span className="bg-white text-red-600 px-1 py-0.5">WEAR</span>
            <span className="px-1 py-0.5">FAIR</span>
          </div>
          <span className="text-[12px] text-gray-300">Sustainability Leader</span>
        </div>

        {/* Bottom Divider */}
        <div className="w-full border-t border-[#1a1a1a] mb-6"></div>

        {/* Bottom Footer Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-400 gap-6">
          
          {/* Location */}
          <div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
            <MapPin className="w-3.5 h-3.5" />
            <span>United Kingdom | English</span>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-6 text-white">
            <Facebook className="w-4 h-4 cursor-pointer hover:opacity-75 transition-opacity" />
            <Instagram className="w-4 h-4 cursor-pointer hover:opacity-75 transition-opacity" />
            <svg className="w-4 h-4 cursor-pointer hover:opacity-75 transition-opacity" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.68l.06.32a6.32 6.32 0 0 0 11.4-3.52V9.32a8.23 8.23 0 0 0 5.43 2.05v-3.4a4.7 4.7 0 0 1-2.3-.28z"/></svg> {/* TikTok Custom SVG */}
            <Youtube className="w-4.5 h-4.5 cursor-pointer hover:opacity-75 transition-opacity" />
          </div>

          {/* Legal */}
          <div className="flex items-center gap-2">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Statement</span>
            <span className="text-gray-600">|</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms & Conditions</span>
          </div>

        </div>

      </div>
    </footer>
  );
}

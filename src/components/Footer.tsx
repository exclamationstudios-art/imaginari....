interface FooterProps {
  onBrandClick: () => void;
  onNavigate: (view: 'home' | 'shop' | 'journal') => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer id="maginari-suitsupply-footer" className="bg-stone-100 text-neutral-950 pt-16 pb-24 px-6 md:px-12 border-t border-stone-200 select-none">
      <div className="w-full max-w-7xl mx-auto font-sans">
        
        {/* SuitSupply Style Four Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 pb-16">
          
          {/* Column 1: Customer Service */}
          <div className="space-y-4">
            <h4 className="text-[12px] uppercase font-bold text-neutral-900 tracking-wide">
              CUSTOMER SERVICE
            </h4>
            <ul className="space-y-3 text-[13px] text-neutral-700 font-normal">
              <li>
                <button onClick={() => onNavigate('shop')} className="hover:underline hover:text-black cursor-pointer transition-colors duration-200">
                  Help & FAQs
                </button>
              </li>
              <li>
                <span className="hover:underline hover:text-black cursor-pointer transition-colors duration-200">
                  Track Order
                </span>
              </li>
              <li>
                <span className="hover:underline hover:text-black cursor-pointer transition-colors duration-200">
                  Returns & Exchanges
                </span>
              </li>
              <li>
                <span className="hover:underline hover:text-black cursor-pointer transition-colors duration-200">
                  Shipping
                </span>
              </li>
              <li>
                <span className="hover:underline hover:text-black cursor-pointer transition-colors duration-200">
                  Contact Us
                </span>
              </li>
            </ul>
          </div>

          {/* Column 2: About Us */}
          <div className="space-y-4">
            <h4 className="text-[12px] uppercase font-bold text-neutral-900 tracking-wide">
              ABOUT US
            </h4>
            <ul className="space-y-3 text-[13px] text-neutral-700 font-normal">
              <li>
                <button onClick={() => onNavigate('journal')} className="hover:underline hover:text-black cursor-pointer transition-colors duration-200">
                  Our Story
                </button>
              </li>
              <li>
                <span className="hover:underline hover:text-black cursor-pointer transition-colors duration-200">
                  Careers
                </span>
              </li>
              <li>
                <span className="hover:underline hover:text-black cursor-pointer transition-colors duration-200">
                  Sustainability
                </span>
              </li>
              <li>
                <span className="hover:underline hover:text-black cursor-pointer transition-colors duration-200">
                  Store Locator
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Explore */}
          <div className="space-y-4">
            <h4 className="text-[12px] uppercase font-bold text-neutral-900 tracking-wide">
              EXPLORE
            </h4>
            <ul className="space-y-3 text-[13px] text-neutral-700 font-normal">
              <li>
                <button onClick={() => onNavigate('shop')} className="hover:underline hover:text-black cursor-pointer transition-colors duration-200">
                  Custom Made
                </button>
              </li>
              <li>
                <span className="hover:underline hover:text-black cursor-pointer transition-colors duration-200">
                  Weddings
                </span>
              </li>
              <li>
                <span className="hover:underline hover:text-black cursor-pointer transition-colors duration-200">
                  Lookbook
                </span>
              </li>
              <li>
                <span className="hover:underline hover:text-black cursor-pointer transition-colors duration-200">
                  Gift Cards
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Policies */}
          <div className="space-y-4">
            <h4 className="text-[12px] uppercase font-bold text-neutral-900 tracking-wide">
              LEGAL
            </h4>
            <ul className="space-y-3 text-[13px] text-neutral-700 font-normal">
              <li>
                <span className="hover:underline hover:text-black cursor-pointer transition-colors duration-200">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="hover:underline hover:text-black cursor-pointer transition-colors duration-200">
                  Terms & Conditions
                </span>
              </li>
              <li>
                <span className="hover:underline hover:text-black cursor-pointer transition-colors duration-200">
                  Accessibility
                </span>
              </li>
              <li>
                <span className="hover:underline hover:text-black cursor-pointer transition-colors duration-200">
                  Cookie Settings
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Minimal Bottom Location & Copyright Bar with classic SuitSupply styling */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8 border-t border-stone-200 text-neutral-500 text-[11px] gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 w-full md:w-auto">
            <span className="text-black font-bold uppercase flex items-center gap-2 cursor-pointer hover:underline">
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="16" height="12" fill="#00247D"/>
                <path d="M0 0L16 12ZM16 0L0 12Z" stroke="white" strokeWidth="1.5"/>
                <path d="M0 0L16 12ZM16 0L0 12Z" stroke="#CF142B" strokeWidth="0.8"/>
                <path d="M8 0V12ZM0 6H16Z" stroke="white" strokeWidth="2.5"/>
                <path d="M8 0V12ZM0 6H16Z" stroke="#CF142B" strokeWidth="1.5"/>
              </svg>
              United Kingdom - £ / EN
            </span>
          </div>
          
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="hover:text-black cursor-pointer hover:underline">Instagram</span>
            <span className="hover:text-black cursor-pointer hover:underline">Facebook</span>
            <span className="hover:text-black cursor-pointer hover:underline">YouTube</span>
            <span className="hover:text-black cursor-pointer hover:underline">Pinterest</span>
            <span className="hover:text-black cursor-pointer hover:underline">WeChat</span>
            <span className="ml-4">&copy; {new Date().getFullYear()} MAGINARI</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

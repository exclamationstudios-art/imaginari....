import { MapPin, Globe, ChevronDown } from 'lucide-react';

interface FooterProps {
  onBrandClick: () => void;
  onNavigate: (view: 'home' | 'shop' | 'journal') => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const topLinks = [
    'Feedback'
  ];

  const bottomLinks = [
    'Terms of Use',
    'Terms of Sale',
    'Company Details',
    'Privacy & Cookie Policy'
  ];

  return (
    <footer id="maginari-footer" className="bg-white text-[#111] font-sans pt-10 pb-20 md:pb-10 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Top Link List */}
        <div className="flex flex-col items-end text-right gap-4 mb-8">
          {topLinks.map((link) => (
            <a key={link} href="#" className="text-sm font-medium hover:text-black transition-colors">
              {link}
            </a>
          ))}
        </div>

        <div className="w-full h-px bg-stone-200 my-6" />

        {/* Native HTML Accordions for Mobile */}
        <div className="flex flex-col">
          <details className="group border-b border-stone-200">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none py-4 text-sm [&::-webkit-details-marker]:hidden">
              Help
              <span className="transition group-open:rotate-180">
                <ChevronDown className="w-5 h-5" />
              </span>
            </summary>
            <div className="text-neutral-500 text-sm pb-4 flex flex-col gap-3">
              <a href="#" className="hover:text-black">Get Help</a>
              <a href="#" className="hover:text-black">Order Status</a>
              <a href="#" className="hover:text-black">Delivery</a>
              <a href="#" className="hover:text-black">Returns</a>
              <a href="#" className="hover:text-black">Payment Options</a>
              <a href="#" className="hover:text-black">Contact Us</a>
            </div>
          </details>

          <details className="group border-b border-stone-200">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none py-4 text-sm [&::-webkit-details-marker]:hidden">
              Company
              <span className="transition group-open:rotate-180">
                <ChevronDown className="w-5 h-5" />
              </span>
            </summary>
            <div className="text-neutral-500 text-sm pb-4 flex flex-col gap-3">
              <a href="#" className="hover:text-black">About Maginari</a>
              <a href="#" className="hover:text-black">News</a>
              <a href="#" className="hover:text-black">Careers</a>
              <a href="#" className="hover:text-black">Investors</a>
              <a href="#" className="hover:text-black">Sustainability</a>
            </div>
          </details>
        </div>

        {/* Bottom Legal Links */}
        <div className="flex flex-col gap-4 text-xs text-neutral-500 mb-8">
          <details className="group">
            <summary className="flex items-center gap-1 cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:text-black">
              Guides
              <span className="transition group-open:rotate-180">
                <ChevronDown className="w-3.5 h-3.5" />
              </span>
            </summary>
            <div className="pl-4 py-2 flex flex-col gap-2 border-l border-stone-200 mt-2">
              <a href="#" className="hover:text-black">Sizing Guide</a>
              <a href="#" className="hover:text-black">Care Instructions</a>
            </div>
          </details>
          
          {bottomLinks.map((link) => (
            <a key={link} href="#" className="hover:text-black transition-colors">
              {link}
            </a>
          ))}
        </div>

        {/* Location & Copyright */}
        <div className="flex flex-col gap-4 mt-12 pt-6 border-t border-stone-200">
          <div className="flex items-center gap-2 text-base">
            <Globe className="w-5 h-5" />
            <span className="font-medium">United Kingdom</span>
          </div>
          <div className="text-sm text-neutral-500">
            © 2026 Maginari, Inc. All rights reserved
          </div>
        </div>

      </div>
    </footer>
  );
}

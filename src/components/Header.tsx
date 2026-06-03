import { useState } from 'react';
import { Search, ShoppingBag, User, Heart, Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onNavigate: (view: 'home' | 'shop' | 'journal', category?: string, gender?: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  likedCount: number;
  activeView: 'home' | 'shop' | 'journal';
  onFilterBrand: (brand: string) => void;
  isDarkTheme?: boolean;
}

export default function Header({
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenSearch,
  likedCount,
  activeView,
  onFilterBrand,
  isDarkTheme = false,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'New In', onClick: () => onNavigate('shop', 'All Elements') },
    { label: 'Men', onClick: () => onNavigate('shop', 'All Elements', 'Men') },
    { label: 'Women', onClick: () => onNavigate('shop', 'All Elements', 'Women') },
    { label: 'Brands', onClick: () => {
      onNavigate('home');
      setTimeout(() => {
        document.getElementById('brand-marketplace')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }},
    { label: 'Editorial', onClick: () => onNavigate('journal') },
  ];

  const textColor = isDarkTheme 
    ? 'text-stone-300 hover:text-white' 
    : 'text-neutral-500 hover:text-neutral-900';
  
  const iconColor = isDarkTheme 
    ? 'text-stone-200 hover:text-white' 
    : 'text-neutral-700 hover:text-neutral-950';

  return (
    <header 
      id="main-navigation" 
      className={`fixed top-0 left-0 w-full bg-transparent z-50 transition-all duration-350 border-none select-none`}
    >
      <div className="w-full px-6 md:px-12 h-24 flex items-center justify-between">
        
        {/* Left - Minimalist Custom Vector Logoicon without any text */}
        <button
          id="logo-button"
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 cursor-pointer transition-transform duration-300 hover:scale-[1.02] focus:outline-none"
          title="MAGINARI"
        >
          <img 
            src="/logo-main.svg" 
            alt="MAGINARI" 
            className="h-6 md:h-7 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </button>

        {/* Right - All pure action icons combined into a single visual cluster */}
        <div id="nav-and-actions" className="flex items-center gap-6 md:gap-8">
          
          {/* Actions & Utilities */}
          <div id="nav-actions" className="flex items-center gap-5 md:gap-7">
            {/* Search */}
            <button
              id="search-button"
              onClick={onOpenSearch}
              className="p-1 hover:scale-110 cursor-pointer transition-all duration-200 text-amber-400 hover:text-amber-300"
              aria-label="Search"
            >
              <Search className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* Favorites Count Indicator */}
            {likedCount > 0 && (
              <button
                id="favorites-button"
                onClick={() => onNavigate('shop')}
                className={`p-1 hover:scale-105 transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${iconColor}`}
              >
                <Heart className="w-4.5 h-4.5 stroke-[2] fill-current" />
                <span className={`text-[8px] font-mono leading-none font-black px-1.5 py-0.5 rounded-full ${isDarkTheme ? 'bg-white text-neutral-950' : 'bg-neutral-950 text-white'}`}>
                  {likedCount}
                </span>
              </button>
            )}

            {/* Cart/Bag */}
            <button
              id="cart-button"
              onClick={onOpenCart}
              className="p-1 hover:scale-110 cursor-pointer relative transition-all duration-200 text-amber-400 hover:text-amber-300 flex items-center"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5 stroke-[2.5]" />
              {cartCount > 0 && (
                <span id="cart-badge" className="absolute -top-1 -right-1.5 text-[8.5px] font-mono font-black w-4 h-4 rounded-full flex items-center justify-center border-none bg-amber-400 text-neutral-950">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

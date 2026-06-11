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
      className="fixed top-0 left-0 w-full bg-transparent z-50 transition-all duration-350 border-none select-none h-16 md:h-20"
    >
      <div className="w-full px-4 md:px-8 h-full flex items-center justify-between">
        
        {/* Left - Minimalist Custom Vector Logoicon without any text */}
        <button
          id="logo-button"
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 cursor-pointer focus:outline-none mix-blend-difference"
          title="MAGINARI"
        >
          <img 
            src="/logo-main.svg" 
            alt="MAGINARI" 
            className="h-5 md:h-6 w-auto object-contain invert brightness-0"
            referrerPolicy="no-referrer"
          />
        </button>

        {/* Right - Desktop Links & Action Icons */}
        <div id="nav-and-actions" className="flex items-center gap-6 md:gap-8">
          
          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 font-sans font-medium text-sm">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={link.onClick}
                className="bg-gradient-to-r from-[#B6861B] to-[#503B0C] bg-clip-text text-transparent hover:opacity-70 transition-opacity"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Actions & Utilities */}
          <div id="nav-actions" className="flex items-center gap-4 md:gap-5 text-[#B6861B]">
            {/* Search */}
            <button
              id="search-button"
              onClick={onOpenSearch}
              className="p-1 cursor-pointer transition-all duration-200 hover:opacity-70"
              aria-label="Search"
            >
              <Search className="w-5 h-5 stroke-[2]" />
            </button>

            {/* User Profile */}
            <button
              id="user-button"
              className="p-1 cursor-pointer transition-all duration-200 hover:opacity-70 hidden sm:block"
              aria-label="Profile"
            >
              <User className="w-5 h-5 stroke-[2]" />
            </button>

            {/* Cart/Bag */}
            <button
              id="cart-button"
              onClick={onOpenCart}
              className="p-1 cursor-pointer relative transition-all duration-200 hover:opacity-70 flex items-center"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5 stroke-[2]" />
              {cartCount > 0 && (
                <span id="cart-badge" className="absolute -top-0.5 -right-0.5 text-[9px] font-sans font-bold w-4 h-4 rounded-full flex items-center justify-center bg-[#B6861B] text-white">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Hamburger Menu (Mobile Only) */}
            <button
              id="menu-button"
              className="p-1 cursor-pointer transition-all duration-200 hover:opacity-70 ml-1 md:hidden"
              aria-label="Menu"
            >
              <Menu className="w-6 h-6 stroke-[2]" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

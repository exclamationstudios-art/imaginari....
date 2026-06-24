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
  onOpenProfile: () => void;
  onOpenMenu: () => void;
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
  onOpenProfile,
  onOpenMenu,
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
      className="fixed top-0 left-0 w-full bg-transparent z-50 transition-all duration-350 select-none h-16 md:h-20"
    >
      <div className="w-full px-4 md:px-8 h-full flex items-center justify-between">
        
        {/* Left - Minimalist Custom Vector Logoicon without any text */}
        <button
          id="logo-button"
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 cursor-pointer focus:outline-none mix-blend-difference"
          title="MAGINARI"
        >
          <svg viewBox="1800 6550 11550 1900" className="h-5 md:h-6 w-auto object-contain">
            <g fill="#B6861B">
              <path d="M4501.77,6618.42h957.37l276.01,1733.4h-633.1l-34.74-375.71h-175.65l-34.74,375.71h-631.17l276.02-1733.4ZM5044.15,7593.99l-63.69-589.19-65.63,589.19h129.32Z"/>
              <path d="M6489.78,7739.15v-386.38h706.44v999.06h-314.62l-54.05-125.95c-40.53,104.6-142.83,138.77-326.2,138.77h-331.99c-268.29,0-372.52-106.74-372.52-416.28v-971.3c0-260.44,117.74-369.31,372.52-369.31h638.89c268.3,0,387.97,96.06,387.97,369.31v175.05h-623.45l1.93-27.75c0-8.54,1.93-14.95,1.93-23.48,0-61.91-30.88-102.47-81.07-102.47-55.98,0-77.21,40.55-77.21,125.95v721.54c0,85.39,21.23,123.81,77.21,123.81,59.83,0,79.13-38.42,79.13-123.81v-106.74h-84.92Z"/>
              <path d="M7333.16,6618.42h611.86v1733.4h-611.86v-1733.4Z"/>
              <path d="M8087.81,6618.42h604.15l241.27,715.14v-715.14h557.82v1733.4h-577.12l-268.29-815.47v815.47h-557.82v-1733.4Z"/>
              <path d="M9838.39,6618.42h957.37l276.02,1733.4h-633.1l-34.74-375.71h-175.64l-34.75,375.71h-631.16l276.02-1733.4ZM10380.76,7593.99l-63.69-589.19-65.62,589.19h129.31Z"/>
              <path d="M11911.34,7760.5c0-91.79-23.17-123.81-88.79-123.81h-67.56v715.14h-611.86v-1733.4h992.1c276.02,0,395.69,111.01,395.69,412,0,230.55-69.49,343.69-252.86,394.92,187.22,49.1,254.79,194.26,254.79,480.32v446.16h-621.51v-591.32ZM11754.98,7258.84h67.56c65.62,0,88.79-34.16,88.79-121.68s-21.24-123.82-88.79-123.82h-67.56v245.5Z"/>
              <path d="M12671.74,6618.42h611.86v1733.4h-611.86v-1733.4Z"/>
              <path d="M2380.5,7668.34v701.67h364.78l464.9-.28v-930.34c0,30.33-21.94,55.44-48.47,55.44s-47.57-23.84-48.59-53.32h1.02c-5.36-5.5-6.5-77.73-6.5-77.73l2.68-239.39c-1.4-86.62-21.17-168.58-54.08-245.32-57.78-134.72-171.8-205.53-304.71-205.82-282.51-.71-391.18,249.69-437.1,518.14-24.62,144.03-32.14,285.8-35.97,432.52v23.04c0-33.99,23.34-55.2,51.78-55.2s51.66,28.08,51.66,62.07l-1.4,14.53Z"/>
              <path d="M3305.78,7375.72c0-30.47-21.81-55.44-48.47-55.44-20.92,0-39.03,15.38-45.66,36.82l34.57-175.91c22.45-114.55,62.24-219.22,121.93-314.3,80.23-127.53,201.01-197.21,340.8-202.85,285.83-11.43,399.22,278.47,420.13,551.29l.77,1144.91v.14h-812.85v-792.51l-8.55-143.33-2.68-48.81Z"/>
              <path d="M3115.55,7441.5c-.51.56-1.02.56-1.4,0h1.4Z"/>
              <path d="M2156.05,7708.96c6.12-92.82,26.66-251.1,27.93-345.75,2.68-202.85-.64-400.21-17.6-604.47l-462.99.84.26,1610.3,526.94.86c6.89-218.38,13.65-366.07,20.53-584.44.36-20.37.85-42.76,1.55-66.78-2.87,28.14-24.93,49.77-50.62,48.45-26.78-1.38-47.78-27.09-46.53-56.97,0-.16.01-.31.02-.47l.51-1.56Z"/>
            </g>
          </svg>
        </button>

        {/* Right - Action Icons & Menu */}
        <div id="nav-and-actions" className="flex items-center gap-6 md:gap-8">

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
              onClick={onOpenProfile}
              className="p-1 cursor-pointer transition-all duration-200 hover:opacity-70"
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

            {/* Menu (Mobile Only) */}
            <button
              id="menu-button"
              onClick={onOpenMenu}
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

import { useState, useEffect } from 'react';
import { Product, CartItem, CustomLayout, UserProfile, OrderRecord } from './types';
import { PRODUCTS, BRANDS, ARTICLES, getDefaultCustomLayout } from './data';
import { supabase } from './services/supabaseClient';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryStrip from './components/CategoryStrip';
import FeaturedDrop from './components/FeaturedDrop';
import BrandMarketplace from './components/BrandMarketplace';
import ProductGrid from './components/ProductGrid';
import ProductDetailView from './components/ProductDetailView';
import JournalSection from './components/JournalSection';
import CultureBlock from './components/CultureBlock';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import AssetManager from './components/AssetManager';
import ProfileDrawer from './components/ProfileDrawer';
import MenuDrawer from './components/MenuDrawer';
import CookieConsent from './components/CookieConsent';
import { Search, X, Sparkles, ShoppingBag, Eye, Heart, ArrowUp } from 'lucide-react';

function sanitizeLayout(parsed: any): CustomLayout {
  if (parsed.heroBanner && typeof parsed.heroBanner === 'string' && parsed.heroBanner.endsWith('.png')) {
    parsed.heroBanner = parsed.heroBanner.replace(/\.png$/, '.jpg');
  }
  if (parsed.banner1 && typeof parsed.banner1 === 'string' && parsed.banner1.endsWith('.png')) {
    parsed.banner1 = parsed.banner1.replace(/\.png$/, '.jpg');
  }
  if (parsed.banner2 && typeof parsed.banner2 === 'string' && parsed.banner2.endsWith('.png')) {
    parsed.banner2 = parsed.banner2.replace(/\.png$/, '.jpg');
  }
  if (parsed.banner3 && typeof parsed.banner3 === 'string' && parsed.banner3.endsWith('.png')) {
    parsed.banner3 = parsed.banner3.replace(/\.png$/, '.jpg');
  }
  if (parsed.banner4 && typeof parsed.banner4 === 'string' && parsed.banner4.endsWith('.png')) {
    parsed.banner4 = parsed.banner4.replace(/\.png$/, '.jpg');
  }
  return parsed as CustomLayout;
}

const defaultProfile: UserProfile = {
  name: 'Julian Vane',
  email: 'julian@vane.studio',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
  tier: 'Black Label Member',
  memberId: 'MGR-77109',
  points: 4250,
  orders: [
    {
      id: 'MGR-109482',
      date: '2026-05-15',
      total: 129.98,
      itemsCount: 2,
      status: 'Cleared',
      items: [
        {
          productName: 'Green COC Crop T-Shirt',
          brand: 'MAGINARI',
          quantity: 1,
          price: 64.99,
          size: 'M',
          colour: 'Sage Green',
          image: '/shirts/GREEN OFFICIAL COC CROP T SHIRT.jpg'
        },
        {
          productName: 'White COC Crop T-Shirt',
          brand: 'MAGINARI',
          quantity: 1,
          price: 64.99,
          size: 'M',
          colour: 'Chalk White',
          image: '/shirts/white coc crop t shirt.jpg'
        }
      ]
    }
  ]
};

export default function App() {
  // Navigation View Tab: 'home' | 'shop' | 'journal' | 'admin'
  const [activeView, setActiveView] = useState<'home' | 'shop' | 'journal' | 'admin'>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  // Profile and Menu Drawer States
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [userProfile, setUserProfile] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('maginari_user_profile');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse userProfile from localStorage', e);
      }
    }
    return defaultProfile;
  });

  useEffect(() => {
    if (userProfile) {
      localStorage.setItem('maginari_user_profile', JSON.stringify(userProfile));
    } else {
      localStorage.removeItem('maginari_user_profile');
    }
  }, [userProfile]);

  const handleLogin = (email: string, name: string) => {
    const newProfile: UserProfile = {
      name: name || email.split('@')[0],
      email: email,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
      tier: 'Black Label Member',
      memberId: 'MGR-' + Math.floor(10000 + Math.random() * 90000),
      points: 100,
      orders: []
    };
    setUserProfile(newProfile);
  };

  const handleLogout = () => {
    setUserProfile(null);
  };

  const handleUpdateProfile = (updated: Partial<UserProfile>) => {
    setUserProfile(prev => {
      if (!prev) return null;
      return {
        ...prev,
        ...updated
      };
    });
  };

  const handleCheckoutComplete = (orderId: string, orderTotal: number, items: any[]) => {
    setUserProfile(prev => {
      if (!prev) return null;
      
      const newOrder: OrderRecord = {
        id: orderId,
        date: new Date().toISOString().split('T')[0],
        total: orderTotal,
        itemsCount: items.reduce((sum, item) => sum + item.quantity, 0),
        status: 'Processing',
        items: items
      };

      return {
        ...prev,
        points: prev.points + Math.floor(orderTotal * 10),
        orders: [newOrder, ...prev.orders]
      };
    });
  };

  // Load custom layout configuration from localStorage or fall back to default
  const [customLayout, setCustomLayout] = useState<CustomLayout>(() => {
    const saved = localStorage.getItem('maginari_custom_layout');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return sanitizeLayout(parsed);
      } catch (e) {
        console.error('Failed to parse customLayout from localStorage', e);
      }
    }
    return getDefaultCustomLayout();
  });

  // Sync with global Supabase database on mount
  useEffect(() => {
    const fetchLayout = async () => {
      try {
        const { data, error } = await supabase
          .from('layouts')
          .select('*')
          .eq('id', 'active')
          .single();

        if (error) {
          // If the record doesn't exist, we fall back to defaults or local storage
          return;
        }

        if (data) {
          // Map snake_case columns back to camelCase properties of CustomLayout
          const camelLayout: CustomLayout = {
            heroBanner: data.hero_banner,
            banner1: data.banner1,
            banner2: data.banner2,
            banner3: data.banner3,
            banner4: data.banner4,
            heroProducts: data.hero_products || [],
            banner1Products: data.banner1_products || [],
            banner2Products: data.banner2_products || [],
            banner3Products: data.banner3_products || [],
            banner4Products: data.banner4_products || []
          };
          const sanitized = sanitizeLayout(camelLayout);
          setCustomLayout(sanitized);
          localStorage.setItem('maginari_custom_layout', JSON.stringify(sanitized));
        }
      } catch (err) {
        console.warn('Supabase global custom layout is not set or offline. Using local layout.', err);
      }
    };

    fetchLayout();
  }, []);

  // Filter bindings synchronized with ProductGrid
  const [activeCategory, setActiveCategory] = useState<string>('All Elements');
  const [activeGender, setActiveGender] = useState<string>('All');
  const [activeBrand, setActiveBrand] = useState<string>('All');

  // Cart Shopping Bag States
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Global Wishlist Favorites States
  const [likedProductIds, setLikedProductIds] = useState<string[]>([]);

  // Search Dialog States
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Scroll to Top indicator button
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Countdown timer for July 1st Private Sale
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });
  
  useEffect(() => {
    // 7 Days Sale ends on July 9th
    const targetDate = new Date('2026-07-09T00:00:00Z').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance <= 0) {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setTimeLeft({
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0')
      });
    };
    
    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);
    return () => clearInterval(intervalId);
  }, []);

  // Monitor scroll for Top Arrow visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Quick navigation helpers
  const handleNavigate = (view: 'home' | 'shop' | 'journal', category?: string, gender?: string) => {
    setSelectedProductId(null);
    setActiveView(view);
    if (category) {
      setActiveCategory(category);
    }
    if (gender) {
      setActiveGender(gender);
    }
    // Scroll to top of app
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductSelect = (id: string) => {
    setSelectedProductId(id);
    setIsSearchOpen(false);
  };

  const handleCategorySelectFromStrip = (categoryName: string) => {
    setActiveCategory(categoryName);
    setSelectedProductId(null);
    setActiveView('shop');
    setTimeout(() => {
      document.getElementById('shop-catalog')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Add Item to Bag with duplicate merging
  const handleAddToBag = (product: Product, size: string, colour: string) => {
    const cartItemId = `${product.id}-${size}-${colour.replace(/\s+/g, '_')}`;
    setCart((prevCart) => {
      const existingItemIdx = prevCart.findIndex((item) => item.id === cartItemId);
      if (existingItemIdx > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIdx] = {
          ...updatedCart[existingItemIdx],
          quantity: updatedCart[existingItemIdx].quantity + 1,
        };
        return updatedCart;
      } else {
        return [
          ...prevCart,
          {
            id: cartItemId,
            product,
            selectedSize: size,
            selectedColour: colour,
            quantity: 1,
          },
        ];
      }
    });
  };

  // Directly responsive "Quick Add" size from grids
  const handleQuickAdd = (product: Product, size: string, colour: string) => {
    handleAddToBag(product, size, colour);
    // Show user feedback (e.g., auto-open cart or temporary snackbar notification)
    setIsCartOpen(true);
  };

  // Cart manipulations
  const handleCartIncrement = (itemId: string) => {
    setCart((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item))
    );
  };

  const handleCartDecrement = (itemId: string) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === itemId) {
            const nextQty = item.quantity - 1;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleCartRemove = (itemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Wishlist toggle helper
  const handleToggleLike = (id: string) => {
    setLikedProductIds((prev) =>
      prev.includes(id) ? prev.filter((pId) => pId !== id) : [...prev, id]
    );
  };

  // Calculate global items counter in cart
  const cartTotalQty = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Search filtering in-place
  const searchFilteredProducts = searchQuery
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  if (activeView === 'admin') {
    return (
      <AssetManager
        layout={customLayout}
        onSaveLayout={async (updatedLayout) => {
          setCustomLayout(updatedLayout);
          localStorage.setItem('maginari_custom_layout', JSON.stringify(updatedLayout));
          
          try {
            const { error } = await supabase.from('layouts').upsert({
              id: 'active',
              hero_banner: updatedLayout.heroBanner,
              banner1: updatedLayout.banner1,
              banner2: updatedLayout.banner2,
              banner3: updatedLayout.banner3,
              banner4: updatedLayout.banner4,
              hero_products: updatedLayout.heroProducts,
              banner1_products: updatedLayout.banner1Products,
              banner2_products: updatedLayout.banner2Products,
              banner3_products: updatedLayout.banner3Products,
              banner4_products: updatedLayout.banner4Products,
              updated_at: new Date().toISOString()
            });
            if (error) throw error;
          } catch (err) {
            console.error('Failed to save layout to Supabase:', err);
          }
        }}
        onBack={() => setActiveView('home')}
      />
    );
  }

  return (
    <div id="maginari-root" className="min-h-screen bg-stone-100 flex flex-col justify-between pt-[40px]">
      
      {/* 0. Top Announcement Banner */}
      <div className="fixed top-0 left-0 z-[60] bg-[#fcead8] text-[#42200b] w-full h-[40px] flex justify-center items-center text-[13px] font-sans tracking-[0.03em]">
        <span className="opacity-90">7 Days Sale Now Open - Ends in</span> 
        <span className="ml-3 font-medium tracking-[0.05em]">{timeLeft.days} days : {timeLeft.hours} hours : {timeLeft.minutes} min : {timeLeft.seconds} sec</span>
      </div>

      {/* 1. Header (Sticky navigation, announce and actions) */}
      <Header
        onNavigate={handleNavigate}
        cartCount={cartTotalQty}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        likedCount={likedProductIds.length}
        activeView={activeView}
        onFilterBrand={(brand) => {
          setActiveBrand(brand);
          handleNavigate('shop');
        }}
        isDarkTheme={activeView === 'home' && !selectedProductId}
        onOpenProfile={() => setIsProfileOpen(true)}
        onOpenMenu={() => setIsMenuOpen(true)}
      />

      {/* 2. Main Page Layout Router */}
      <main className="flex-grow">
        
        {/* VIEW A: Product Detail takes absolute priority if productId selected */}
        {selectedProductId ? (
          (() => {
            const allCustomProds = [
              ...customLayout.heroProducts,
              ...customLayout.banner1Products,
              ...customLayout.banner2Products,
              ...customLayout.banner3Products,
              ...customLayout.banner4Products,
            ];
            const activeDetailProduct = allCustomProds.find((p) => p.id === selectedProductId) || PRODUCTS.find((p) => p.id === selectedProductId);
            return activeDetailProduct ? (
              <ProductDetailView
                product={activeDetailProduct}
                allProducts={PRODUCTS}
                onBack={() => setSelectedProductId(null)}
                onAddToBag={handleAddToBag}
                onProductClick={handleProductSelect}
                likedProductIds={likedProductIds}
                onToggleLike={handleToggleLike}
              />
            ) : (
              <div className="text-center py-20 uppercase font-mono text-xs">
                Product file missing [ERR_404_DETAIL]
              </div>
            );
          })()
        ) : (
          /* DEFAULT NON-DETAIL ROUTER VIEWS */
          <>
            {activeView === 'home' && (
              <>
                {/* Hero section banner */}
                <Hero
                  onShopClick={(category) => handleNavigate('shop', category || 'All Elements')}
                  bannerImage={customLayout.heroBanner}
                />

                {/* This Week's Featured Drop */}
                <FeaturedDrop
                  layout={customLayout}
                  onProductClick={handleProductSelect}
                />
              </>
            )}

            {activeView === 'shop' && (
              <ProductGrid
                products={PRODUCTS}
                onProductClick={handleProductSelect}
                onQuickAdd={handleQuickAdd}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                activeGender={activeGender}
                onGenderChange={setActiveGender}
                activeBrand={activeBrand}
                onBrandChange={setActiveBrand}
                likedProductIds={likedProductIds}
                onToggleLike={handleToggleLike}
              />
            )}

            {activeView === 'journal' && (
              <JournalSection articles={ARTICLES} />
            )}
          </>
        )}

      </main>

      {/* 4. Immersive Footer and social indicators */}
      <Footer
        onBrandClick={() => {
          handleNavigate('home');
          setTimeout(() => {
            document.getElementById('brand-marketplace')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
        onNavigate={handleNavigate}
        onAdminPortalClick={() => {
          setActiveView('admin');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 5. Sliding Shopping Bag Drawer layer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onIncrement={handleCartIncrement}
        onDecrement={handleCartDecrement}
        onRemove={handleCartRemove}
        onClearCart={handleClearCart}
        onCheckoutComplete={handleCheckoutComplete}
      />

      {/* 6. Dynamic Real-time search modal backdrop overlay */}
      {isSearchOpen && (
        <div id="search-dialog-mask" className="fixed inset-0 bg-neutral-950/85 backdrop-blur-sm z-50 flex flex-col animate-fadeIn">
          
          {/* Upper Search Bar Panel */}
          <div className="bg-stone-100 py-8 px-4 md:px-8">
            <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
              
              <div className="flex-1 flex items-center gap-3 bg-stone-200 p-2.5 px-4 focus-within:border-black transition-colors">
                <Search className="w-5 h-5 text-neutral-500 flex-none" />
                <input
                  type="text"
                  placeholder="SEARCH THE MAGINARI ARCHIVE..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent flex-grow outline-none text-xs font-mono uppercase tracking-widest text-black placeholder-neutral-550"
                  autoFocus
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="p-1 text-stone-500 hover:text-black hover:bg-stone-300">
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery('');
                }}
                className="bg-black text-white font-mono text-xs uppercase tracking-widest py-3 px-6 font-bold cursor-pointer"
              >
                Close
              </button>

            </div>
          </div>

          {/* Results Area */}
          <div className="flex-1 max-w-4xl w-full mx-auto px-4 md:px-8 py-10 overflow-y-auto scrollbar-thin scrollbar-thumb-stone-600">
            {searchQuery ? (
              searchFilteredProducts.length === 0 ? (
                <div className="text-center py-20 text-stone-400 font-mono text-xs uppercase tracking-widest">
                  ERR_DECLARED_ZERO_MATCHES: "{searchQuery}"
                </div>
              ) : (
                <div className="space-y-4">
                  <h3 className="text-stone-400 font-mono text-[10px] uppercase tracking-[0.2em] mb-4">
                    MATCHING ELEMENTS ARCHIVE:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {searchFilteredProducts.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => handleProductSelect(p.id)}
                        className="flex gap-4 p-3 bg-stone-100 hover:bg-white hover:border-black cursor-pointer transition-all"
                      >
                        <div className="w-14 h-18 bg-stone-200 flex-none overflow-hidden">
                          <img
                            src={p.images[0]}
                            alt={p.name}
                            className="w-full h-full object-cover grayscale"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="flex flex-col justify-between select-none">
                          <div>
                            <span className="text-[9px] font-mono text-neutral-450 uppercase tracking-widest block">{p.brand}</span>
                            <span className="text-xs font-sans font-black uppercase text-black block truncate leading-tight">{p.name}</span>
                          </div>
                          <span className="text-xs font-mono font-bold text-black block">£{p.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            ) : (
              // Empty search helper - instant suggestion cards
              <div className="text-center py-16 space-y-6">
                <span className="text-[10px] font-mono text-stone-500 tracking-[0.25em] uppercase block">HOT KEYWORDS SEARCH</span>
                
                <div className="flex justify-center flex-wrap gap-2 max-w-md mx-auto">
                  {['Crop Tees', 'Regular Tees', 'RAINS', 'MAGINARI', 'HELIOT EMIL', 'TEKLA'].map((term) => (
                    <button
                      key={term}
                      onClick={() => setSearchQuery(term)}
                      className="bg-neutral-900 hover:border-stone-400 text-stone-300 hover:text-white font-mono text-[10px] uppercase py-2.5 px-5 tracking-widest rounded-none cursor-pointer transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>

                <div className="pt-8 text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                  Quick key access. Complete model lists filtered in real-time.
                </div>
              </div>
            )}
          </div>

        </div>
      )}

      {/* 7. Scroll back to top bubble chevron */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 p-3.5 bg-black hover:bg-neutral-900 text-stone-100 rounded-full cursor-pointer shadow-xl transition-all hover:-translate-y-1 active:translate-y-0 z-30 focus:outline-none"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5 text-rose-300 stroke-[2.5]" />
        </button>
      )}

      {/* 8. Slide-over user profile drawer */}
      <ProfileDrawer
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        profile={userProfile}
        onLogin={handleLogin}
        onLogout={handleLogout}
        onUpdateProfile={handleUpdateProfile}
      />

      {/* 9. Slide-over navigation menu drawer */}
      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* 10. Cookie Consent Banner */}
      <CookieConsent />

    </div>
  );
}

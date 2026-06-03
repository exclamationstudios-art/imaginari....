import { useState, useEffect } from 'react';
import { Product, CartItem } from './types';
import { PRODUCTS, BRANDS, ARTICLES } from './data';
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
import { Search, X, Sparkles, ShoppingBag, Eye, Heart, ArrowUp } from 'lucide-react';

export default function App() {
  // Navigation View Tab: 'home' | 'shop' | 'journal'
  const [activeView, setActiveView] = useState<'home' | 'shop' | 'journal'>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

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

  return (
    <div id="maginari-root" className="min-h-screen bg-stone-100 flex flex-col justify-between">
      
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
      />

      {/* 2. Main Page Layout Router */}
      <main className="flex-grow">
        
        {/* VIEW A: Product Detail takes absolute priority if productId selected */}
        {selectedProductId ? (
          (() => {
            const activeDetailProduct = PRODUCTS.find((p) => p.id === selectedProductId);
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
                />

                {/* This Week's Featured Drop */}
                <FeaturedDrop
                  products={PRODUCTS}
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
      />

      {/* 6. Dynamic Real-time search modal backdrop overlay */}
      {isSearchOpen && (
        <div id="search-dialog-mask" className="fixed inset-0 bg-neutral-950/85 backdrop-blur-sm z-50 flex flex-col animate-fadeIn">
          
          {/* Upper Search Bar Panel */}
          <div className="bg-stone-100 border-b border-stone-250 py-8 px-4 md:px-8">
            <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
              
              <div className="flex-1 flex items-center gap-3 bg-stone-200 border border-stone-300 p-2.5 px-4 focus-within:border-black transition-colors">
                <Search className="w-5 h-5 text-neutral-500 flex-none" />
                <input
                  type="text"
                  placeholder="SEARCH THE MAGINARI ARCHIVE..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent flex-grow outline-none border-none text-xs font-mono uppercase tracking-widest text-black placeholder-neutral-550"
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
                        className="flex gap-4 p-3 bg-stone-100 hover:bg-white border border-stone-200 hover:border-black cursor-pointer transition-all"
                      >
                        <div className="w-14 h-18 bg-stone-200 border border-stone-250 flex-none overflow-hidden">
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
                  {['Crop Tees', 'Regular Tees', 'RAINS', 'NUDE PROJECT', 'HELIOT EMIL', 'TEKLA'].map((term) => (
                    <button
                      key={term}
                      onClick={() => setSearchQuery(term)}
                      className="bg-neutral-900 border border-neutral-800 hover:border-stone-400 text-stone-300 hover:text-white font-mono text-[10px] uppercase py-2.5 px-5 tracking-widest rounded-none cursor-pointer transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>

                <div className="pt-8 border-t border-neutral-900 text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
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

    </div>
  );
}

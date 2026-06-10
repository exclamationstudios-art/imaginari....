import { useState } from 'react';
import { Product } from '../types';
import { Filter, X, Grid, List, Eye, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { CATEGORIES, GENDERS } from '../data';

interface ProductGridProps {
  products: Product[];
  onProductClick: (id: string) => void;
  onQuickAdd: (product: Product, size: string, colour: string) => void;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  activeGender: string;
  onGenderChange: (gender: string) => void;
  activeBrand: string;
  onBrandChange: (brand: string) => void;
  likedProductIds: string[];
  onToggleLike: (id: string) => void;
}

export default function ProductGrid({
  products,
  onProductClick,
  onQuickAdd,
  activeCategory,
  onCategoryChange,
  activeGender,
  onGenderChange,
  activeBrand,
  onBrandChange,
  likedProductIds,
  onToggleLike
}: ProductGridProps) {
  // Local state for sidebar visibility, mobile layout, and additional filters
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>('All');
  const [maxPrice, setMaxPrice] = useState<number>(300);
  const [sortBy, setSortBy] = useState<'default' | 'price-low-high' | 'price-high-low' | 'name'>('default');

  // Gather unique sizes and brands from catalog
  const allSizes = ['All', 'XS', 'S', 'M', 'L', 'XL', '28', '30', '32', '34', '36', 'One Size'];
  const allBrands = ['All', 'RAINS', 'MAGINARI', 'HELIOT EMIL', 'TEKLA'];

  // Apply filters
  let filteredProducts = products.filter((p) => {
    const genderMatch = activeGender === 'All' || p.gender === activeGender || p.gender === 'Unisex';
    const categoryMatch = activeCategory === 'All Elements' || p.category === activeCategory;
    const brandMatch = activeBrand === 'All' || p.brand.toUpperCase() === activeBrand.toUpperCase();
    const sizeMatch = selectedSize === 'All' || p.sizes.includes(selectedSize);
    const priceMatch = p.price <= maxPrice;
    return genderMatch && categoryMatch && brandMatch && sizeMatch && priceMatch;
  });

  // Apply sorting
  if (sortBy === 'price-low-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'name') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
  }

  // Clear all filters
  const handleResetFilters = () => {
    onCategoryChange('All Elements');
    onGenderChange('All');
    onBrandChange('All');
    setSelectedSize('All');
    setMaxPrice(300);
    setSortBy('default');
  };

  return (
    <section id="shop-catalog" className="w-full bg-stone-100 py-16 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Navigation Indicator & Header Area */}
        <div className="border-b border-stone-250 pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] text-neutral-500 uppercase">PRODUCT MATRIX</span>
            <h1 className="text-3xl font-sans font-black tracking-tight text-black uppercase mt-1">
              {activeCategory.toUpperCase() === 'ALL ELEMENTS' ? 'THE FULL UNIFORM' : activeCategory.toUpperCase()}
            </h1>
            <p className="text-neutral-500 text-xs font-mono mt-1 uppercase tracking-wider">
              Showing {filteredProducts.length} of {products.length} statement elements
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-neutral-500 uppercase tracking-wider">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-stone-200 border-none py-1.5 px-3 uppercase text-black font-semibold focus:ring-1 focus:ring-black outline-none"
              >
                <option value="default">Default Archive</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="name">Alphanumeric (A-Z)</option>
              </select>
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 bg-black text-stone-100 py-1.5 px-4 uppercase font-bold text-[11px] tracking-widest cursor-pointer hover:bg-neutral-900"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters
            </button>
          </div>
        </div>

        {/* Major Grid Container with sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* 1. Expandable Filter Sidebar (Desktop) */}
          <aside id="desktop-filters" className="hidden lg:block space-y-8 sticky top-28 self-start">
            
            {/* Filter Reset Button */}
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-mono tracking-[0.2em] font-black text-black uppercase flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter Matrix
              </h2>
              <button
                onClick={handleResetFilters}
                className="text-[10px] font-mono uppercase text-neutral-500 hover:text-black hover:underline cursor-pointer"
              >
                Reset All
              </button>
            </div>

            {/* Selector: Gender */}
            <div className="border-t border-stone-250 pt-4 space-y-2.5">
              <h3 className="text-[11px] font-mono tracking-widest text-neutral-500 uppercase">Sector Gender</h3>
              <div className="flex flex-wrap gap-1.5">
                {GENDERS.map((g) => {
                  const isActive = activeGender === g;
                  return (
                    <button
                      key={g}
                      onClick={() => onGenderChange(g)}
                      className={`py-1.5 px-3 font-mono text-[10px] uppercase cursor-pointer border tracking-wider transition-all ${
                        isActive
                          ? 'bg-black text-white border-black font-bold'
                          : 'bg-stone-100 hover:bg-stone-200 text-neutral-600 border-stone-250'
                      }`}
                    >
                      {g}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selector: Category */}
            <div className="border-t border-stone-250 pt-4 space-y-2">
              <h3 className="text-[11px] font-mono tracking-widest text-neutral-500 uppercase">Architectural Type</h3>
              <div className="flex flex-col space-y-1 text-xs font-mono">
                {CATEGORIES.map((c) => {
                  const isActive = activeCategory === c;
                  return (
                    <button
                      key={c}
                      onClick={() => onCategoryChange(c)}
                      className={`text-left py-1 px-2 uppercase tracking-wide cursor-pointer transition-colors ${
                        isActive
                          ? 'bg-stone-200 text-black font-black'
                          : 'text-neutral-500 hover:text-black hover:bg-stone-200/50'
                      }`}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selector: Brand */}
            <div className="border-t border-stone-250 pt-4 space-y-2">
              <h3 className="text-[11px] font-mono tracking-widest text-neutral-500 uppercase">Designer House</h3>
              <div className="flex flex-col space-y-1 text-xs font-mono">
                {allBrands.map((b) => {
                  const isActive = activeBrand === b;
                  return (
                    <button
                      key={b}
                      onClick={() => onBrandChange(b)}
                      className={`text-left py-1 px-2 uppercase tracking-wide cursor-pointer transition-colors ${
                        isActive
                          ? 'bg-stone-200 text-black font-black'
                          : 'text-neutral-500 hover:text-black hover:bg-stone-200/50'
                      }`}
                    >
                      {b}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selector: Sizes */}
            <div className="border-t border-stone-250 pt-4 space-y-2.5">
              <h3 className="text-[11px] font-mono tracking-widest text-neutral-500 uppercase">Size Blueprint</h3>
              <div className="flex flex-wrap gap-1.5">
                {allSizes.map((s) => {
                  const isActive = selectedSize === s;
                  return (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`w-10 h-10 font-mono text-[10px] uppercase rounded-full flex items-center justify-center cursor-pointer border tracking-tight transition-all ${
                        isActive
                          ? 'bg-black text-white border-black font-bold'
                          : 'bg-stone-100 hover:bg-stone-200 text-neutral-600 border-stone-250'
                      }`}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selector: Price Cap */}
            <div className="border-t border-stone-250 pt-4 space-y-3 pb-4">
              <div className="flex justify-between text-[11px] font-mono tracking-widest text-neutral-500 uppercase">
                <span>Maximum Price</span>
                <span className="text-black font-bold">£{maxPrice}</span>
              </div>
              <input
                type="range"
                min="40"
                max="300"
                step="5"
                value={maxPrice}
                onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                className="w-full h-1 bg-stone-300 accent-black rounded-none outline-none cursor-pointer"
              />
              <div className="flex justify-between text-[9px] font-mono text-neutral-400">
                <span>£40</span>
                <span>£300</span>
              </div>
            </div>

          </aside>

          {/* 2. Product Matrix Cards (Active shop-list) */}
          <div className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-24 bg-stone-50 border border-stone-200">
                <span className="text-[10px] font-mono text-stone-400 tracking-widest">ERROR: NO_MATCHES_FOUND</span>
                <p className="text-sm font-sans font-bold text-neutral-800 uppercase mt-4">
                  No fashion elements match your search criteria.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="mt-6 bg-black text-white px-6 py-3 font-mono text-xs uppercase tracking-widest font-bold cursor-pointer"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((p) => {
                  const isLiked = likedProductIds.includes(p.id);
                  return (
                    <div
                      key={p.id}
                      className="group bg-stone-50 border border-stone-200 hover:border-neutral-900 p-4 transition-all duration-350 flex flex-col justify-between"
                      id={`p-${p.id}`}
                    >
                      {/* Product Card Image Container */}
                      <div className="relative aspect-4/5 overflow-hidden bg-stone-100 border border-stone-200 mb-4 cursor-pointer">
                        {/* Primary Image */}
                        <img
                          src={p.images[0]}
                          alt={p.name}
                          className="w-full h-full object-cover grayscale brightness-95 group-hover:scale-102 transition-all duration-[600ms]"
                          onClick={() => onProductClick(p.id)}
                          referrerPolicy="no-referrer"
                        />
                        {/* Secondary Hover Image */}
                        {p.images[1] && (
                          <img
                            src={p.images[1]}
                            alt={`${p.name} detail view`}
                            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 grayscale hover:scale-102 transition-all duration-500"
                            onClick={() => onProductClick(p.id)}
                            referrerPolicy="no-referrer"
                          />
                        )}

                        {/* Top corner actions */}
                        <div className="absolute top-3 right-3 flex flex-col gap-1.5 z-10">
                          {p.isNew && (
                            <span className="bg-neutral-900 text-stone-100 text-[8px] font-mono tracking-[0.2em] px-2 py-1 uppercase scale-95 font-medium">
                              NEW UNIT
                            </span>
                          )}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onToggleLike(p.id);
                            }}
                            className="bg-stone-50/95 text-neutral-800 hover:text-black hover:bg-white p-2 border border-stone-200 cursor-pointer focus:outline-none flex items-center justify-center transition-colors"
                            aria-label="Add to wishlist"
                          >
                            <svg
                              className={`w-3 h-3 ${isLiked ? 'fill-red-750 text-red-750' : 'text-neutral-700'}`}
                              fill={isLiked ? 'currentColor' : 'none'}
                              stroke="currentColor"
                              strokeWidth="2.5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                          </button>
                        </div>

                        {/* Hover Overlay: QUICK ADD BLANKET */}
                        <div className="absolute inset-x-0 bottom-0 bg-neutral-900/95 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-350 ease-out flex flex-col justify-end space-y-2.5 z-20 select-none">
                          <span className="text-[9px] font-mono text-stone-300 tracking-[0.25em] uppercase text-center block pb-1 border-b border-neutral-850">
                            QUICK ADD ELEMENT
                          </span>
                          <div className="flex flex-wrap justify-center gap-1.5">
                            {p.sizes.map((sz) => (
                              <button
                                key={sz}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onQuickAdd(p, sz, p.colours[0].name);
                                }}
                                className="bg-neutral-800 hover:bg-stone-100 hover:text-neutral-950 text-stone-200 text-[9px] font-mono font-bold py-1.5 px-2.5 uppercase transition-colors duration-200 cursor-pointer border border-neutral-800"
                              >
                                {sz}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Info Area */}
                      <div className="space-y-1.5 select-none">
                        <div className="flex justify-between items-center text-[9px] font-mono text-neutral-400 tracking-wider uppercase">
                          <span>{p.brand}</span>
                          <span>[ {p.gender} ]</span>
                        </div>

                        <h3 className="text-xs font-mono tracking-wider font-bold uppercase text-neutral-900 hover:underline cursor-pointer truncate" onClick={() => onProductClick(p.id)}>
                          {p.name}
                        </h3>

                        <div className="flex items-center gap-2 pt-0.5">
                          <span className="text-xs font-mono font-bold text-neutral-900">£{p.price}</span>
                          {p.originalPrice && (
                            <span className="text-[10px] font-mono text-neutral-400 line-through">£{p.originalPrice}</span>
                          )}
                        </div>

                        {/* Colour Indicators */}
                        <div className="flex items-center gap-1.5 pt-2 border-t border-stone-200 mt-2">
                          {p.colours.map((col) => (
                            <span
                              key={col.name}
                              className="w-2.5 h-2.5 rounded-full border border-stone-200"
                              style={{ backgroundColor: col.hex }}
                              title={col.name}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

        </div>

      </div>

      {/* 3. Mobile Filters Slide-over Modal popup */}
      {mobileFiltersOpen && (
        <div id="mobile-filter-modal" className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex justify-end animate-fadeIn">
          <div className="w-80 h-full bg-stone-100 p-6 flex flex-col justify-between overflow-y-auto">
            
            {/* Upper Navigation and Header */}
            <div>
              <div className="flex items-center justify-between border-b border-stone-200 pb-4 mb-6">
                <h2 className="text-sm font-sans font-black uppercase text-black">Filters</h2>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="p-1 hover:bg-stone-250 cursor-pointer"
                >
                  <X className="w-5 h-5 text-black" />
                </button>
              </div>

              {/* Selector: Gender (Mobile) */}
              <div className="space-y-2 mb-6">
                <h3 className="text-xs font-mono tracking-widest text-neutral-500 uppercase">Sector Gender</h3>
                <div className="flex flex-wrap gap-1.5">
                  {GENDERS.map((g) => (
                    <button
                      key={g}
                      onClick={() => onGenderChange(g)}
                      className={`py-1.5 px-3 font-mono text-[9px] uppercase cursor-pointer border tracking-wider transition-all ${
                        activeGender === g
                          ? 'bg-black text-white border-black font-bold'
                          : 'bg-stone-200 text-neutral-600 border-none'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selector: Category (Mobile) */}
              <div className="space-y-2 mb-6">
                <h3 className="text-xs font-mono tracking-widest text-neutral-500 uppercase">Architectural Type</h3>
                <div className="flex flex-col space-y-1 text-xs font-mono">
                  {CATEGORIES.map((c) => (
                    <button
                      key={c}
                      onClick={() => onCategoryChange(c)}
                      className={`text-left py-1 px-2 uppercase tracking-wide cursor-pointer rounded-none text-neutral-500 ${
                        activeCategory === c ? 'bg-stone-200 text-black font-black' : ''
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selector: Brand (Mobile) */}
              <div className="space-y-2 mb-6">
                <h3 className="text-xs font-mono tracking-widest text-neutral-500 uppercase">Designer House</h3>
                <div className="flex flex-col space-y-1 text-xs font-mono">
                  {allBrands.map((b) => (
                    <button
                      key={b}
                      onClick={() => onBrandChange(b)}
                      className={`text-left py-1 px-2 uppercase tracking-wide cursor-pointer rounded-none text-neutral-500 ${
                        activeBrand === b ? 'bg-stone-200 text-black font-black' : ''
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selector: Sizes (Mobile) */}
              <div className="space-y-2 mb-6">
                <h3 className="text-xs font-mono tracking-widest text-neutral-500 uppercase">Size Blueprint</h3>
                <div className="flex flex-wrap gap-1">
                  {allSizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`w-9 h-9 font-mono text-[9px] uppercase rounded-full flex items-center justify-center cursor-pointer border tracking-tight transition-all ${
                        selectedSize === s ? 'bg-black text-white border-black' : 'bg-stone-200 text-neutral-600 border-none'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selector: Price Cap (Mobile) */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono text-neutral-500 uppercase">
                  <span>Price Cap</span>
                  <span className="text-black font-bold">£{maxPrice}</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="300"
                  step="5"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                  className="w-full accent-black cursor-pointer"
                />
              </div>

            </div>

            {/* Bottom Actions */}
            <div className="border-t border-stone-250 pt-4 mt-8 space-y-2">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-black text-white font-mono text-xs uppercase tracking-widest py-3.5 font-bold cursor-pointer"
              >
                Apply Filters
              </button>
              <button
                onClick={() => {
                  handleResetFilters();
                  setMobileFiltersOpen(false);
                }}
                className="w-full border border-stone-300 text-stone-600 font-mono text-xs uppercase tracking-widest py-3.5 bg-transparent cursor-pointer"
              >
                Reset All
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}

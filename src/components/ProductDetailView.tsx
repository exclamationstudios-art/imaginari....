import { useState, useEffect } from 'react';
import { Product } from '../types';
import { ChevronDown, ChevronUp, ShoppingBag, ArrowLeft, Heart, RotateCcw, Truck, Info, HelpCircle } from 'lucide-react';

interface ProductDetailViewProps {
  product: Product;
  allProducts: Product[];
  onBack: () => void;
  onAddToBag: (product: Product, size: string, colour: string) => void;
  onProductClick: (id: string) => void;
  likedProductIds: string[];
  onToggleLike: (id: string) => void;
}

export default function ProductDetailView({
  product,
  allProducts,
  onBack,
  onAddToBag,
  onProductClick,
  likedProductIds,
  onToggleLike
}: ProductDetailViewProps) {
  // Local state for configuration
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColour, setSelectedColour] = useState<string>('');
  const [activeAccordion, setActiveAccordion] = useState<'details' | 'fit' | 'delivery' | 'returns' | null>('details');
  const [addedPopupVisible, setAddedPopupVisible] = useState(false);

  // Initialize defaults on product change
  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0] || '');
      setSelectedColour(product.colours[0]?.name || '');
      // Scroll to top of catalog section when view changes
      document.getElementById('product-detail-layout')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [product]);

  // Handle add-to-bag with micro confirmation animation
  const handleAddToBagClick = () => {
    if (!selectedSize) {
      alert('Please select a size blueprint');
      return;
    }
    onAddToBag(product, selectedSize, selectedColour);
    setAddedPopupVisible(true);
    setTimeout(() => {
      setAddedPopupVisible(false);
    }, 2800);
  };

  const isLiked = likedProductIds.includes(product.id);

  // Toggle Accordions
  const toggleAccordion = (section: 'details' | 'fit' | 'delivery' | 'returns') => {
    if (activeAccordion === section) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(section);
    }
  };

  // Recommendations: Complementary products for the "Styled With" Section
  // Find other items that are NOT this product and match similar aesthetic brands or sub-categories
  const styledWithProducts = allProducts
    .filter((p) => p.id !== product.id)
    .slice(0, 3); // Grab 3 complementary products to complete the look

  return (
    <div id="product-detail-layout" className="w-full bg-stone-100 py-12 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Back Link Breadcrumb */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-400 hover:text-neutral-900 mb-10 cursor-pointer focus:outline-none select-none transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          [ BACK_TO_MATREC.S01 ]
        </button>

        {/* Dual Split Detail Sheet */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Left panel: Large Image Stack (Scandinavian Editorial format) */}
          <div className="lg:col-span-7 space-y-6">
            {product.images.map((img, idx) => (
              <div
                key={idx}
                className="w-full aspect-[4/5] overflow-hidden bg-stone-100 border border-stone-200 hover:brightness-100 transition duration-500"
              >
                <img
                  src={img}
                  alt={`${product.name} editorial view ${idx + 1}`}
                  className="w-full h-full object-cover grayscale brightness-95"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
            <div className="flex justify-between items-center text-neutral-400 font-mono text-[9px] tracking-[0.2em] uppercase select-none pointer-events-none p-1 border-t border-stone-200 pt-4">
              <span>MAGINARI IMAGE STACK REF-{product.id.substring(0, 4).toUpperCase()}</span>
              <span>OUTDOOR & STUDIO DEPLOYMENT [01-02]</span>
            </div>
          </div>

          {/* Right panel: Sticky Buy Board */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-8">
            
            {/* Header Core details */}
            <div className="border-b border-stone-200 pb-6 space-y-3">
              <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                <span>{product.brand}</span>
                <span>[ {product.gender} element ]</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl font-sans font-black tracking-tighter text-neutral-900 uppercase leading-[0.9]">
                {product.name}
              </h1>

              <div className="flex items-center gap-3 pt-3">
                <span className="text-2xl font-mono font-bold text-neutral-900">
                  £{product.price}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-sm font-mono text-neutral-400 line-through">
                      £{product.originalPrice}
                    </span>
                    <span className="bg-red-950 text-red-100 text-[8px] font-mono tracking-[0.18em] px-2.5 py-1 uppercase font-semibold">
                      ARCHIVE CODE
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Selector: Colour Choices */}
            <div className="space-y-4">
              <div className="flex justify-between text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                <span>Select Colour</span>
                <span className="text-neutral-900 font-bold">{selectedColour}</span>
              </div>
              <div className="flex items-center gap-2.5">
                {product.colours.map((col) => {
                  const isSelected = selectedColour === col.name;
                  return (
                    <button
                      key={col.name}
                      onClick={() => setSelectedColour(col.name)}
                      className={`w-11 h-11 flex items-center justify-center cursor-pointer relative transition-all ${
                        isSelected ? 'ring-2 ring-neutral-950' : 'hover:scale-105'
                      }`}
                      title={col.name}
                    >
                      <span
                        className="w-8 h-8 rounded-full border border-stone-200"
                        style={{ backgroundColor: col.hex }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selector: Sizes choices */}
            <div className="space-y-4">
              <div className="flex justify-between text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                <span>Select Sizing Blueprint</span>
                <span>Standard Fit</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((sz) => {
                  const isSelected = selectedSize === sz;
                  return (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`h-12 text-xs font-mono uppercase cursor-pointer border flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-neutral-900 text-stone-100 border-neutral-900 font-bold'
                          : 'bg-stone-50 hover:bg-stone-150 border-stone-200 text-neutral-700'
                      }`}
                    >
                      {sz}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Actions: Add to Bag + Wishlist toggle */}
            <div className="flex items-center gap-4 pt-6 border-t border-stone-205">
              <button
                onClick={handleAddToBagClick}
                className="flex-1 bg-neutral-900 hover:bg-neutral-950 text-stone-100 text-[10px] tracking-[0.25em] font-sans font-black uppercase py-5 px-6 flex items-center justify-center gap-2 cursor-pointer transition-all outline-none"
              >
                <ShoppingBag className="w-4 h-4" />
                DEPLOY TO BAG
              </button>

              <button
                onClick={() => onToggleLike(product.id)}
                className={`p-4.5 border border-stone-205 bg-stone-50 hover:border-neutral-900 transition-colors cursor-pointer text-neutral-800 flex items-center justify-center`}
                aria-label="Add to favorites"
              >
                <svg
                  className={`w-4 h-4 ${isLiked ? 'fill-red-750 text-red-750' : ''}`}
                  fill={isLiked ? 'currentColor' : 'none'}
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </button>
            </div>

            {/* Added Confirmation Overlay popup snippet */}
            {addedPopupVisible && (
              <div className="p-3 bg-neutral-950 text-stone-100 border border-neutral-800 text-center font-mono text-[10px] tracking-widest uppercase flex items-center justify-center gap-2 animate-fadeIn">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                Elements added safely to shopping bag
              </div>
            )}

            {/* Accordions: Details / Fit / Delivery / Returns */}
            <div className="border-t border-stone-200 pt-8 space-y-3">
              
              {/* Accordion: Details */}
              <div className="border-b border-stone-150 pb-4">
                <button
                  onClick={() => toggleAccordion('details')}
                  className="w-full flex justify-between items-center text-xs font-mono font-bold uppercase text-neutral-900 cursor-pointer text-left"
                >
                  <span>[ 01 // TEXTILE_SPECIFICATION ]</span>
                  {activeAccordion === 'details' ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
                {activeAccordion === 'details' && (
                  <div className="mt-3 text-[10px] text-neutral-500 space-y-2 font-mono uppercase bg-stone-50 p-4 border border-stone-200">
                    {product.details.map((det, index) => (
                      <div key={index} className="flex gap-2 items-start leading-relaxed">
                        <span className="text-neutral-900">//</span>
                        <span>{det}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Accordion: Fit */}
              <div className="border-b border-stone-150 pb-4">
                <button
                  onClick={() => toggleAccordion('fit')}
                  className="w-full flex justify-between items-center text-xs font-mono font-bold uppercase text-neutral-900 cursor-pointer text-left"
                >
                  <span>[ 02 // OUTLINE_AND_FIT ]</span>
                  {activeAccordion === 'fit' ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
                {activeAccordion === 'fit' && (
                  <p className="mt-3 text-[11px] text-neutral-500 leading-relaxed bg-stone-50 p-4 border border-stone-200 font-mono uppercase">
                    {product.fit}
                  </p>
                )}
              </div>

              {/* Accordion: Delivery */}
              <div className="border-b border-stone-150 pb-4">
                <button
                  onClick={() => toggleAccordion('delivery')}
                  className="w-full flex justify-between items-center text-xs font-mono font-bold uppercase text-neutral-900 cursor-pointer text-left"
                >
                  <span>[ 03 // DISPATCH_TRANSIT ]</span>
                  {activeAccordion === 'delivery' ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
                {activeAccordion === 'delivery' && (
                  <div className="mt-3 text-[11px] text-neutral-500 leading-relaxed bg-stone-50 p-4 border border-stone-200 space-y-3 font-mono uppercase">
                    <div className="flex items-center gap-2 font-bold text-neutral-900">
                      <Truck className="w-4 h-4" /> ECO POSTAL TRANSIT
                    </div>
                    <p>{product.delivery}</p>
                  </div>
                )}
              </div>

              {/* Accordion: Returns */}
              <div className="border-b border-stone-155 pb-4">
                <button
                  onClick={() => toggleAccordion('returns')}
                  className="w-full flex justify-between items-center text-xs font-mono font-bold uppercase text-neutral-900 cursor-pointer text-left"
                >
                  <span>[ 04 // SAFE_RETURN_PROTOCOL ]</span>
                  {activeAccordion === 'returns' ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
                {activeAccordion === 'returns' && (
                  <div className="mt-3 text-[11px] text-neutral-500 leading-relaxed bg-stone-50 p-4 border border-stone-200 space-y-3 font-mono uppercase">
                    <div className="flex items-center gap-2 font-bold text-neutral-900">
                      <RotateCcw className="w-4 h-4" /> 30-DAY WINDOW
                    </div>
                    <p>{product.returns}</p>
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>

        {/* Brand/Drop context separator line */}
        <div className="border-t border-stone-200 pt-16 mb-10 text-[10px] uppercase text-center font-mono tracking-[0.3em] font-bold text-neutral-450">
          [ UNIFORM_MATRIX // COMPLETE_THE_LOOK ]
        </div>

        {/* "Styled with" Recommendations carousel */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {styledWithProducts.map((p) => (
            <div
              key={p.id}
              onClick={() => onProductClick(p.id)}
              className="group bg-stone-50 border border-stone-200 p-4 hover:border-neutral-900 cursor-pointer transition-all flex flex-col justify-between"
            >
              <div className="aspect-4/5 overflow-hidden bg-stone-100 border border-stone-200 mb-4 relative">
                <img
                  src={p.images[0]}
                  alt={p.name}
                  className="w-full h-full object-cover grayscale brightness-95 group-hover:scale-101 transition duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-neutral-900 text-stone-100 font-mono text-[8.5px] tracking-[0.2em] px-2.5 py-1">
                  OUTFIT UNIT
                </div>
              </div>

              <div className="space-y-1.5 pt-1">
                <div className="flex justify-between items-center text-[9px] font-mono text-neutral-400 tracking-wider uppercase pb-1.5 border-b border-stone-150">
                  <span>{p.brand}</span>
                  <span className="font-bold text-neutral-900">£{p.price}</span>
                </div>
                <h4 className="text-xs font-mono font-bold uppercase text-neutral-900 pt-1 group-hover:underline truncate">
                  {p.name}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

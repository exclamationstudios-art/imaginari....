import { useState, useEffect } from 'react';
import { Product } from '../types';
import { ChevronDown, ChevronUp, ArrowLeft, Heart, Shirt, ShoppingBag, Box } from 'lucide-react';
import VirtualTryOnModal from './VirtualTryOnModal';

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
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColour, setSelectedColour] = useState<string>('');
  const [activeAccordion, setActiveAccordion] = useState<'details' | 'fit' | 'delivery' | 'returns' | null>('details');
  const [addedPopupVisible, setAddedPopupVisible] = useState(false);
  const [tryOnModalOpen, setTryOnModalOpen] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0] || '');
      setSelectedColour(product.colours[0]?.name || '');
      document.getElementById('product-detail-layout')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [product]);

  const handleAddToBagClick = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    onAddToBag(product, selectedSize, selectedColour);
    setAddedPopupVisible(true);
    setTimeout(() => {
      setAddedPopupVisible(false);
    }, 2800);
  };

  const isLiked = likedProductIds.includes(product.id);

  const toggleAccordion = (section: 'details' | 'fit' | 'delivery' | 'returns') => {
    if (activeAccordion === section) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(section);
    }
  };

  const styledWithProducts = allProducts
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  // Product render helper
  const ProductCard = ({ item }: { item: Product; key?: string }) => (
    <div
      onClick={() => onProductClick(item.id)}
      className="relative flex-shrink-0 w-[65vw] sm:w-[45vw] md:w-[30vw] lg:w-[22vw] snap-center cursor-pointer group"
    >
      <div className="aspect-[4/5] bg-[#f6f6f6] overflow-hidden mb-3">
        <img
          src={item.images[0]}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="text-sm font-sans text-neutral-900 px-1">
        <div className="font-semibold truncate">{item.name}</div>
        <div className="text-neutral-500 truncate">{item.category}</div>
        <div className="mt-1.5 font-medium">£{item.price}</div>
      </div>
    </div>
  );

  return (
    <div id="product-detail-layout" className="w-full bg-white pb-24 font-sans text-neutral-900">
      {/* Header padding to account for fixed transparent header */}
      <div className="pt-24 md:pt-32 max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Back Link Breadcrumb */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-medium hover:opacity-60 mb-8 cursor-pointer transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {/* Dual Split Detail Sheet */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-24">
          
          {/* Left panel: Large Image Stack */}
          <div className="lg:col-span-7">
            <div className="flex overflow-x-auto lg:flex-col lg:overflow-x-visible snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-4 md:mx-0 pl-4 pr-4 lg:pl-0 lg:pr-0 gap-2 lg:gap-0 scroll-pl-4 lg:scroll-pl-0 lg:space-y-4">
              {product.images.map((img, idx) => (
                <div
                  key={idx}
                  className="w-[calc(100%-28px)] min-w-[calc(100%-28px)] lg:w-full lg:min-w-0 aspect-square lg:aspect-[4/5] bg-[#f6f6f6] rounded-2xl snap-start shrink-0 flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={img}
                    alt={`${product.name} editorial view ${idx + 1}`}
                    className="w-full h-full object-cover object-center mix-blend-multiply"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right panel: Sticky Buy Board */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:pr-8 xl:pr-16">
            
            {/* Header Core details */}
            <div className="mb-8">
              <div className="text-base font-medium mb-1">
                {product.brand}
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-2">
                {product.name}
              </h1>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-semibold text-neutral-900">£{product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-sm text-neutral-400 line-through font-normal">
                    £{product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            {/* Selector: Colour Choices */}
            <div className="mb-8">
              <div className="text-sm font-medium mb-3">
                Select Colour: <span className="text-neutral-500">{selectedColour}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {product.colours.map((col) => {
                    const isSelected = selectedColour === col.name;
                    return (
                      <button
                        key={col.name}
                        onClick={() => setSelectedColour(col.name)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all ${
                          isSelected ? 'ring-2 ring-offset-2 ring-black' : 'ring-1 ring-stone-200 hover:ring-stone-400'
                        }`}
                        title={col.name}
                      >
                        <span
                          className="w-full h-full rounded-full"
                          style={{ backgroundColor: col.hex }}
                        />
                      </button>
                    );
                  })}
                </div>

                {/* Virtual Try On icon button */}
                <button
                  onClick={() => setTryOnModalOpen(true)}
                  className="w-10 h-10 bg-white hover:bg-stone-50 text-black rounded-full flex items-center justify-center transition-colors hover:border-black cursor-pointer"
                  title="Virtual Try On"
                >
                  <Shirt className="w-5 h-5 text-neutral-800 stroke-[1.5]" />
                </button>
              </div>
            </div>

            {/* Selector: Sizes choices */}
            <div className="mb-10">
              <div className="flex justify-between text-sm font-medium mb-3">
                <span>Select Size</span>
                <span className="text-neutral-500 hover:text-black cursor-pointer">Size Guide</span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {product.sizes.map((sz) => {
                  const isSelected = selectedSize === sz;
                  return (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`h-12 text-sm font-medium rounded-lg flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-black text-white'
                          : 'bg-white   hover:border-black'
                      }`}
                    >
                      {sz}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Actions: Buy Now, Add to Closet */}
            <div className="flex flex-col gap-3 mb-10">
              <div className="flex items-center gap-3 w-full">
                <button
                  onClick={handleAddToBagClick}
                  className="flex-1 bg-black hover:bg-neutral-800 text-white rounded-full text-base font-medium py-4 transition-colors relative"
                >
                  Buy Now
                </button>
                <button
                  onClick={() => onToggleLike(product.id)}
                  className="w-14 h-14 flex-shrink-0 bg-white hover:bg-stone-50 text-black rounded-full flex items-center justify-center transition-colors"
                  title="Add to Closet"
                >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-black' : ''}`} />
                </button>
              </div>
            </div>

            {/* Added Confirmation Overlay popup snippet */}
            {addedPopupVisible && (
              <div className="mb-6 p-4 bg-stone-100 text-black rounded-lg text-sm font-medium text-center flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Added to your Bag
              </div>
            )}

            {/* Product Details Section */}
            <div className="mt-8 text-base leading-relaxed text-neutral-800 mb-8">
              <p>Explore the features of the {product.brand} {product.name}. Built for everyday performance and unmatched comfort.</p>
            </div>

            {/* Accordions */}
            <div className="">
              
              {/* Accordion: Details */}
              <div className="">
                <button
                  onClick={() => toggleAccordion('details')}
                  className="w-full flex justify-between items-center py-5 text-lg font-medium text-left transition-colors hover:text-neutral-600"
                >
                  <span>Product Details</span>
                  {activeAccordion === 'details' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                {activeAccordion === 'details' && (
                  <div className="pb-5 text-sm text-neutral-600 space-y-2">
                    <ul className="list-disc pl-5 space-y-1">
                      {product.details.map((det, index) => (
                        <li key={index}>{det}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Accordion: Fit */}
              <div className="">
                <button
                  onClick={() => toggleAccordion('fit')}
                  className="w-full flex justify-between items-center py-5 text-lg font-medium text-left transition-colors hover:text-neutral-600"
                >
                  <span>Size & Fit</span>
                  {activeAccordion === 'fit' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                {activeAccordion === 'fit' && (
                  <div className="pb-5 text-sm text-neutral-600">
                    <p>{product.fit}</p>
                  </div>
                )}
              </div>

              {/* Accordion: Delivery & Returns */}
              <div className="">
                <button
                  onClick={() => toggleAccordion('delivery')}
                  className="w-full flex justify-between items-center py-5 text-lg font-medium text-left transition-colors hover:text-neutral-600"
                >
                  <span>Delivery & Returns</span>
                  {activeAccordion === 'delivery' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
                {activeAccordion === 'delivery' && (
                  <div className="pb-5 text-sm text-neutral-600 space-y-4">
                    <p><strong>Delivery:</strong> {product.delivery}</p>
                    <p><strong>Returns:</strong> {product.returns}</p>
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>

        {/* Complete the look separator */}
        <div className="pt-8">
          <h2 className="text-2xl font-bold mb-8">Complete the Look</h2>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden gap-4 pb-4">
            {styledWithProducts.map((item) => <ProductCard key={item.id} item={item} />)}
          </div>
        </div>

      </div>

      {tryOnModalOpen && (
        <VirtualTryOnModal 
          product={product} 
          onClose={() => setTryOnModalOpen(false)} 
        />
      )}
    </div>
  );
}

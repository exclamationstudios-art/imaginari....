import React from 'react';
import { Product, CustomLayout } from '../types';

interface FeaturedDropProps {
  layout: CustomLayout;
  onProductClick: (id: string) => void;
}

interface ProductCardProps {
  item: Product;
  onProductClick: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ item, onProductClick }) => (
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
        loading="lazy"
        decoding="async"
      />
      {(item.status === 'sold_out' || item.status === 'coming_soon') && (
        <div className="absolute bottom-0 left-0 bg-black text-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest z-10">
          {item.status === 'sold_out' ? 'Sold Out' : 'Coming Soon'}
        </div>
      )}
    </div>
    <div className="text-sm font-sans text-neutral-900 px-1">
      <div className="font-semibold truncate">{item.name}</div>
      <div className="text-neutral-500 truncate">{item.category}</div>
      <div className="mt-1.5 font-medium">£{Number(item.price).toFixed(2)}</div>
    </div>
  </div>
);

export default function FeaturedDrop({ layout, onProductClick }: FeaturedDropProps) {
  return (
    <section id="featured-drop" className="w-full bg-white select-none">
      <div className="w-full flex flex-col">
        
        {/* CAROUSEL 0: HERO COLLECTION */}
        <div className="w-full bg-white py-4 px-4 md:px-8 mb-6 mt-4">
          <h3 className="text-xl md:text-2xl font-sans font-medium mb-6 px-1">Featured Hero Collection</h3>
          <div className="flex overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden gap-4 pb-4">
            {layout.heroProducts.map((item) => (
              <ProductCard key={item.id} item={item} onProductClick={onProductClick} />
            ))}
          </div>
        </div>

        {/* BRAND BANNER 1: COC */}
        <div className="w-full h-[70vh] relative overflow-hidden select-none bg-stone-100 mb-6">
          <img
            src={layout.banner1}
            alt="Coci Campaign"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-10 flex flex-col items-start z-10">
            <img src="/coc-logo.svg" alt="Crown of Clay Logo" className="w-[64px] h-[64px] md:w-[80px] md:h-[80px] object-contain mb-2 drop-shadow-md" />
            <h2 className="text-white text-3xl md:text-5xl font-sans font-bold leading-tight mb-5">
              Crown of Clay<br/>Collection
            </h2>
          </div>
        </div>

        {/* CAROUSEL 1: BANNER 1 PRODUCTS */}
        <div className="w-full bg-white py-4 px-4 md:px-8 mb-6">
          <h3 className="text-xl md:text-2xl font-sans font-medium mb-6 px-1">Shop Our Icons</h3>
          <div className="flex overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden gap-4 pb-4">
            {layout.banner1Products.map((item) => (
              <ProductCard key={item.id} item={item} onProductClick={onProductClick} />
            ))}
          </div>
        </div>

        {/* BRAND BANNER 2: EXCLAMATION STUDIO */}
        <div className="w-full h-[70vh] relative overflow-hidden select-none bg-stone-100 mb-6">
          <img
            src={layout.banner2}
            alt="Exclamation Studio Campaign"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-10 flex flex-col items-start z-10">
            <img src="/exclamation-logo.svg" alt="Exclamation Studio Logo" className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] object-contain mb-2 drop-shadow-md" />
            <h2 className="text-white text-3xl md:text-5xl font-sans font-bold leading-tight mb-5">
              Exclamation Studio Drops<br/>Volume 1
            </h2>
          </div>
        </div>

        {/* CAROUSEL 2: BANNER 2 PRODUCTS */}
        <div className="w-full bg-white py-4 px-4 md:px-8 mb-6">
          <h3 className="text-xl md:text-2xl font-sans font-medium mb-6 px-1">Trending Now</h3>
          <div className="flex overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden gap-4 pb-4">
            {layout.banner2Products.map((item) => (
              <ProductCard key={item.id} item={item} onProductClick={onProductClick} />
            ))}
          </div>
        </div>

        {/* BRAND BANNER 3: 8TERNITY */}
        <div className="w-full h-[70vh] relative overflow-hidden select-none bg-stone-100 mb-6">
          <img
            src={layout.banner3}
            alt="8ternity Campaign"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-10 flex flex-col items-start z-10">
            <img src="/8ternity-logo.svg" alt="8ternity Logo" className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] object-contain invert brightness-0 mb-2 drop-shadow-md" />
            <h2 className="text-white text-3xl md:text-5xl font-sans font-bold leading-tight mb-5">
              8ternity Endless<br/>Summer
            </h2>
          </div>
        </div>

        {/* CAROUSEL 3: BANNER 3 PRODUCTS */}
        <div className="w-full bg-white py-4 px-4 md:px-8 mb-6">
          <h3 className="text-xl md:text-2xl font-sans font-medium mb-6 px-1">New Arrivals</h3>
          <div className="flex overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden gap-4 pb-4">
            {layout.banner3Products.map((item) => (
              <ProductCard key={item.id} item={item} onProductClick={onProductClick} />
            ))}
          </div>
        </div>

        {/* BRAND BANNER 4: DREAMERS */}
        <div className="w-full h-[70vh] relative overflow-hidden select-none bg-stone-100 mb-6">
          <img
            src={layout.banner4}
            alt="Dreamers Campaign"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-10 flex flex-col items-start z-10">
            <h2 className="text-white text-3xl md:text-5xl font-sans font-bold leading-tight mb-5">
              Dreamers<br/>Essentials
            </h2>
          </div>
        </div>

        {/* CAROUSEL 4: BANNER 4 PRODUCTS */}
        <div className="w-full bg-white py-4 px-4 md:px-8 mb-12">
          <h3 className="text-xl md:text-2xl font-sans font-medium mb-6 px-1">Shop Dreamers</h3>
          <div className="flex overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden gap-4 pb-4">
            {layout.banner4Products.map((item) => (
              <ProductCard key={item.id} item={item} onProductClick={onProductClick} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

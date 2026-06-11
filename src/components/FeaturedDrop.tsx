import { Product } from '../types';

interface FeaturedDropProps {
  products: Product[];
  onProductClick: (id: string) => void;
}

export default function FeaturedDrop({ products, onProductClick }: FeaturedDropProps) {
  // First stream (shirts and pants)
  const stream1Big = [
    products.find(p => p.id === 'green-coc-crop-tee'),
    products.find(p => p.id === 'coc-ash-reg-tee'),
    products.find(p => p.id === 'coc-green-reg-tee')
  ].filter((p): p is Product => p !== undefined);

  // First stream (small accessories)
  const stream1Small = [
    products.find(p => p.id === 'white-coc-crop-tee'),
    products.find(p => p.id === 'black-coc-crop-tee'),
    products.find(p => p.id === 'icons-crop-tee'),
    products.find(p => p.id === 'coc-black-reg-tee'),
    products.find(p => p.id === 'coc-white-reg-tee')
  ].filter((p): p is Product => p !== undefined);

  // Second stream
  const stream2Big = [
    products.find(p => p.id === 'coc-black-reg-tee'),
    products.find(p => p.id === 'coc-white-reg-tee')
  ].filter((p): p is Product => p !== undefined);

  const stream2Small = [
    products.find(p => p.id === 'green-coc-crop-tee'),
    products.find(p => p.id === 'white-coc-crop-tee'),
    products.find(p => p.id === 'black-coc-crop-tee'),
    products.find(p => p.id === 'coc-ash-reg-tee')
  ].filter((p): p is Product => p !== undefined);

  // Product render helper
  const ProductCard = ({ item }: { item: Product }) => (
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
    <section id="featured-drop" className="w-full bg-white select-none">
      <div className="w-full flex flex-col">
        {/* Carousel 1 */}
        <div className="w-full bg-white py-4 px-4 md:px-8 mb-6 mt-4">
          <h3 className="text-xl md:text-2xl font-sans font-medium mb-6 px-1">Shop Our Icons</h3>
          <div className="flex overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden gap-4 pb-4">
            {stream1Big.map((item) => <ProductCard key={item.id} item={item} />)}
            {stream1Small.map((item) => <ProductCard key={item.id} item={item} />)}
          </div>
        </div>

        {/* BRAND BANNER 1: COC */}
        <div className="w-full h-[70vh] relative overflow-hidden select-none bg-stone-100 mb-6">
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200"
            alt="Coci Campaign"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-10 flex flex-col items-start z-10">
            <img src="/coc-logo.svg" alt="Crown of Clay Logo" className="w-[64px] h-[64px] md:w-[80px] md:h-[80px] object-contain mb-2 drop-shadow-md" />
            <h2 className="text-white text-3xl md:text-5xl font-sans font-bold leading-tight mb-5">
              Crown of Clay<br/>Collection
            </h2>
            <div className="flex gap-3">
              <button className="bg-white hover:bg-stone-200 text-black font-sans font-semibold rounded-full px-6 py-2.5 transition-colors">
                Shop
              </button>
              <button className="bg-black/80 backdrop-blur hover:bg-black text-white font-sans font-semibold rounded-full px-6 py-2.5 transition-colors">
                Explore
              </button>
            </div>
          </div>
        </div>


        {/* BRAND BANNER 2: FAVELA */}
        <div className="w-full h-[70vh] relative overflow-hidden select-none bg-stone-100 mb-6">
          <img
            src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=1200"
            alt="Favela Campaign"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-10 flex flex-col items-start z-10">
            <img src="/favela-logo.svg" alt="Favela Logo" className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] object-contain mb-2 drop-shadow-md" />
            <h2 className="text-white text-3xl md:text-5xl font-sans font-bold leading-tight mb-5">
              Favela Drops<br/>Volume 1
            </h2>
            <div className="flex gap-3">
              <button className="bg-white hover:bg-stone-200 text-black font-sans font-semibold rounded-full px-6 py-2.5 transition-colors">
                Shop
              </button>
            </div>
          </div>
        </div>

        {/* Carousel 2 */}
        <div className="w-full bg-white py-4 px-4 md:px-8 mb-12">
          <h3 className="text-xl md:text-2xl font-sans font-medium mb-6 px-1">Trending Now</h3>
          <div className="flex overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden gap-4 pb-4">
            {stream2Big.map((item) => <ProductCard key={item.id} item={item} />)}
            {stream1Small.map((item) => <ProductCard key={item.id} item={item} />)}
          </div>
        </div>

        {/* BRAND BANNER 3: 8TERNITY */}
        <div className="w-full h-[70vh] relative overflow-hidden select-none bg-stone-100 mb-6">
          <img
            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1200"
            alt="8ternity Campaign"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-10 flex flex-col items-start z-10">
            <img src="/8ternity-logo.svg" alt="8ternity Logo" className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] object-contain invert brightness-0 mb-2 drop-shadow-md" />
            <h2 className="text-white text-3xl md:text-5xl font-sans font-bold leading-tight mb-5">
              8ternity Endless<br/>Summer
            </h2>
            <div className="flex gap-3">
              <button className="bg-white hover:bg-stone-200 text-black font-sans font-semibold rounded-full px-6 py-2.5 transition-colors">
                Shop Collection
              </button>
            </div>
          </div>
        </div>

        {/* Carousel 3 */}
        <div className="w-full bg-white py-4 px-4 md:px-8 mb-12">
          <h3 className="text-xl md:text-2xl font-sans font-medium mb-6 px-1">New Arrivals</h3>
          <div className="flex overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden gap-4 pb-4">
            {stream2Small.map((item) => <ProductCard key={item.id} item={item} />)}
          </div>
        </div>

        {/* BRAND BANNER 4: DREAMERS */}
        <div className="w-full h-[70vh] relative overflow-hidden select-none bg-stone-100 mb-6">
          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1200"
            alt="Dreamers Campaign"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-10 flex flex-col items-start z-10">
            <h2 className="text-white text-3xl md:text-5xl font-sans font-bold leading-tight mb-5">
              Dreamers<br/>Essentials
            </h2>
            <div className="flex gap-3">
              <button className="bg-white hover:bg-stone-200 text-black font-sans font-semibold rounded-full px-6 py-2.5 transition-colors">
                Shop Dreamers
              </button>
            </div>
          </div>
        </div>

        {/* Carousel 4: Dreamers */}
        <div className="w-full bg-white py-4 px-4 md:px-8 mb-12">
          <h3 className="text-xl md:text-2xl font-sans font-medium mb-6 px-1">Shop Dreamers</h3>
          <div className="flex overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden gap-4 pb-4">
            {stream1Big.map((item) => <ProductCard key={item.id} item={item} />)}
          </div>
        </div>

      </div>
    </section>
  );
}

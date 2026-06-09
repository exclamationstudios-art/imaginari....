import { Product } from '../types';

interface FeaturedDropProps {
  products: Product[];
  onProductClick: (id: string) => void;
}

export default function FeaturedDrop({ products, onProductClick }: FeaturedDropProps) {
  // First stream "3" (shirts and pants)
  const stream1Big = [
    products.find(p => p.id === 'green-coc-crop-tee'),
    products.find(p => p.id === 'coc-ash-reg-tee'),
    products.find(p => p.id === 'coc-green-reg-tee')
  ].filter((p): p is Product => p !== undefined);

  // First stream "5" (small accessories)
  const stream1Small = [
    products.find(p => p.id === 'white-coc-crop-tee'),
    products.find(p => p.id === 'black-coc-crop-tee'),
    products.find(p => p.id === 'icons-crop-tee'),
    products.find(p => p.id === 'coc-black-reg-tee'),
    products.find(p => p.id === 'coc-white-reg-tee')
  ].filter((p): p is Product => p !== undefined);

  // First stream "1" (big single banner - best seller jacket)
  const stream1Single = products.find(p => p.id === 'icons-crop-tee') || products[0];

  // Second stream "2" (two big garments)
  const stream2Big = [
    products.find(p => p.id === 'coc-black-reg-tee'),
    products.find(p => p.id === 'coc-white-reg-tee')
  ].filter((p): p is Product => p !== undefined);

  // Second stream "4" (four small accessories)
  const stream2Small = [
    products.find(p => p.id === 'green-coc-crop-tee'),
    products.find(p => p.id === 'white-coc-crop-tee'),
    products.find(p => p.id === 'black-coc-crop-tee'),
    products.find(p => p.id === 'coc-ash-reg-tee')
  ].filter((p): p is Product => p !== undefined);

  // Second stream "1" (big single banner - heavy overshirt/pants)
  const stream2Single = products.find(p => p.id === 'green-coc-crop-tee') || products[0];

  return (
    <section id="featured-drop" className="w-full bg-white select-none pb-0 pt-0">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          gap: 1px;
          animation: marquee 28s linear infinite;
          animation-play-state: paused;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: running;
        }
      `}</style>

      {/* 6px pure white spacer between Hero and grid start */}
      <div className="h-[6px] w-full bg-white" />

      <div className="w-full flex flex-col gap-[1px] px-[1px] bg-stone-300">
        
        {/* BRAND BANNER 1: COC (120px height) */}
        <div className="w-full h-[120px] bg-stone-900 relative overflow-hidden select-none">
          {/* Background Model Campaign Image (spanning full width, sharp on right) */}
          <div className="absolute inset-0 w-full h-full bg-neutral-900">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200"
              alt="Coci Campaign"
              className="w-full h-full object-cover object-center brightness-95 hover:scale-[1.005] transition-transform duration-[2000ms]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Left 1/3: Glassmorphic blur overlay with brand logo */}
          <div className="absolute left-0 top-0 bottom-0 w-1/3 z-10 bg-black/75 backdrop-blur-md flex items-center justify-center border-r border-white/5">
            {/* Soft backdrop glow behind logo */}
            <div className="absolute w-[60px] h-[60px] rounded-full bg-[#c7bb8b]/15 blur-[20px] pointer-events-none" />
            
            <div className="relative z-10 flex items-center gap-3">
              <img src="/coc-logo.svg" alt="Crown of Clay Logo" className="w-[112px] h-[112px] object-contain" />
            </div>
          </div>

          {/* Blur Transition Fade Gradient */}
          <div className="absolute left-[33.33%] top-0 bottom-0 w-[8%] bg-gradient-to-r from-black/75 to-transparent z-10 pointer-events-none" />


        </div>

        {/* ROW 1: 3 Frames */}
        <div className="grid grid-cols-3 gap-[1px] w-full">
          {stream1Big.map((item) => (
            <div
              key={item.id}
              onClick={() => onProductClick(item.id)}
              className="relative aspect-[3/4] overflow-hidden bg-stone-100 group cursor-pointer"
            >
              <img
                src={item.images[0]}
                alt={item.name}
                className="w-full h-full object-cover brightness-95 group-hover:scale-[1.02] group-hover:brightness-100 transition-all duration-[600ms] ease-out"
                referrerPolicy="no-referrer"
              />
              {/* Inset frame border on hover */}
              <div className="absolute inset-0 ring-0 group-hover:ring-[6px] group-hover:ring-inset group-hover:ring-white/80 transition-all duration-300 pointer-events-none" />
              {/* Label strip — slides up from bottom */}
              <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-white/95 px-4 py-3">
                <div className="font-mono uppercase tracking-[0.2em] text-[8px] flex justify-between items-center text-neutral-900">
                  <span className="font-bold truncate">{item.name}</span>
                  <span className="font-black ml-3 flex-shrink-0">£{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BRAND BANNER 2: FAVELA (120px height - before the 5 frames) */}
        <div className="w-full h-[120px] bg-stone-900 relative overflow-hidden select-none">
          {/* Background Model Campaign Image */}
          <div className="absolute inset-0 w-full h-full bg-neutral-900">
            <img
              src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=1200"
              alt="Favela Campaign"
              className="w-full h-full object-cover object-center brightness-95 hover:scale-[1.005] transition-transform duration-[2000ms]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Left 1/3: Glassmorphic blur overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-1/3 z-10 bg-black/75 backdrop-blur-md flex items-center justify-center border-r border-white/5">
            <div className="absolute w-[60px] h-[60px] rounded-full bg-[#c7bb8b]/15 blur-[20px] pointer-events-none" />
            
            <div className="relative z-10 flex items-center gap-3">
              <img src="/favela-logo.svg" alt="Favela Logo" className="w-[168px] h-[168px] object-contain" />
            </div>
          </div>

          {/* Blur Transition Fade Gradient */}
          <div className="absolute left-[33.33%] top-0 bottom-0 w-[8%] bg-gradient-to-r from-black/75 to-transparent z-10 pointer-events-none" />


        </div>

        {/* ROW 2: 5 Horizontal Endlessly Scrolling Frames */}
        <div className="w-full overflow-hidden bg-stone-300">
          <div className="animate-marquee">
            {/* First Set */}
            {stream1Small.map((item) => (
              <div
                key={`row2-set1-${item.id}`}
                onClick={() => onProductClick(item.id)}
                className="relative flex-shrink-0 w-[45vw] sm:w-[30vw] md:w-[20vw] aspect-[308/323] overflow-hidden bg-stone-150 group cursor-pointer"
              >
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-full h-full object-cover brightness-95 group-hover:scale-[1.02] group-hover:brightness-100 transition-all duration-[600ms] ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 ring-0 group-hover:ring-[5px] group-hover:ring-inset group-hover:ring-white/80 transition-all duration-300 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-white/95 px-3 py-2">
                  <div className="font-mono uppercase tracking-[0.15em] text-[7px] flex justify-between items-center text-neutral-900">
                    <span className="font-bold truncate">{item.name}</span>
                    <span className="font-black ml-2 flex-shrink-0">£{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate Set for Loop */}
            {stream1Small.map((item) => (
              <div
                key={`row2-set2-${item.id}`}
                onClick={() => onProductClick(item.id)}
                className="relative flex-shrink-0 w-[45vw] sm:w-[30vw] md:w-[20vw] aspect-[308/323] overflow-hidden bg-stone-150 group cursor-pointer"
              >
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-full h-full object-cover brightness-95 group-hover:scale-[1.02] group-hover:brightness-100 transition-all duration-[600ms] ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 ring-0 group-hover:ring-[5px] group-hover:ring-inset group-hover:ring-white/80 transition-all duration-300 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-white/95 px-3 py-2">
                  <div className="font-mono uppercase tracking-[0.15em] text-[7px] flex justify-between items-center text-neutral-900">
                    <span className="font-bold truncate">{item.name}</span>
                    <span className="font-black ml-2 flex-shrink-0">£{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 3: 1 Big Frame */}
        {stream1Single && (
          <div
            onClick={() => onProductClick(stream1Single.id)}
            className="relative w-full aspect-[1495/767] overflow-hidden bg-stone-100 group cursor-pointer"
          >
            <img
              src={stream1Single.images[0]}
              alt={stream1Single.name}
              className="w-full h-full object-cover brightness-95 group-hover:scale-[1.01] group-hover:brightness-100 transition-all duration-[900ms] ease-out"
              referrerPolicy="no-referrer"
            />
            {/* Inset frame */}
            <div className="absolute inset-0 ring-0 group-hover:ring-[8px] group-hover:ring-inset group-hover:ring-white/80 transition-all duration-300 pointer-events-none" />
            {/* Label strip */}
            <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-white/95 px-8 py-4 flex justify-between items-center">
              <div className="font-mono uppercase tracking-[0.2em] text-[9px] font-bold text-neutral-900 truncate">{stream1Single.name}</div>
              <div className="font-mono uppercase tracking-[0.2em] text-[9px] font-black text-neutral-900 ml-6 flex-shrink-0">£{stream1Single.price}</div>
            </div>
          </div>
        )}

        {/* ROW 4: 2 Frames */}
        <div className="grid grid-cols-2 gap-[1px] w-full">
          {stream2Big.map((item) => (
            <div
              key={item.id}
              onClick={() => onProductClick(item.id)}
              className="relative aspect-[745/658] overflow-hidden bg-stone-100 group cursor-pointer"
            >
              <img
                src={item.images[0]}
                alt={item.name}
                className="w-full h-full object-cover brightness-95 group-hover:scale-[1.02] group-hover:brightness-100 transition-all duration-[600ms] ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 ring-0 group-hover:ring-[6px] group-hover:ring-inset group-hover:ring-white/80 transition-all duration-300 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-white/95 px-5 py-3 flex justify-between items-center">
                <div className="font-mono uppercase tracking-[0.2em] text-[8px] font-bold text-neutral-900 truncate">{item.name}</div>
                <div className="font-mono uppercase tracking-[0.2em] text-[8px] font-black text-neutral-900 ml-4 flex-shrink-0">£{item.price}</div>
              </div>
            </div>
          ))}
        </div>

        {/* BRAND BANNER 3: 8TERNITY (120px height - before the 4 frames) */}
        <div className="w-full h-[120px] bg-stone-900 relative overflow-hidden select-none">
          {/* Background Model Campaign Image */}
          <div className="absolute inset-0 w-full h-full bg-neutral-900">
            <img
              src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1200"
              alt="8ternity Campaign"
              className="w-full h-full object-cover object-center brightness-95 hover:scale-[1.005] transition-transform duration-[2000ms]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Left 1/3: Glassmorphic blur overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-1/3 z-10 bg-black/75 backdrop-blur-md flex items-center justify-center border-r border-white/5">
            <div className="absolute w-[60px] h-[60px] rounded-full bg-[#c7bb8b]/15 blur-[20px] pointer-events-none" />
            
            <div className="relative z-10 flex items-center gap-3">
              <img src="/8ternity-logo.svg" alt="8ternity Logo" className="w-[168px] h-[168px] object-contain invert brightness-0" />
            </div>
          </div>

          {/* Blur Transition Fade Gradient */}
          <div className="absolute left-[33.33%] top-0 bottom-0 w-[8%] bg-gradient-to-r from-black/75 to-transparent z-10 pointer-events-none" />


        </div>

        {/* ROW 5: 4 Horizontal Endlessly Scrolling Frames */}
        <div className="w-full overflow-hidden bg-stone-300">
          <div className="animate-marquee">
            {/* First Set */}
            {stream2Small.map((item) => (
              <div
                key={`row5-set1-${item.id}`}
                onClick={() => onProductClick(item.id)}
                className="relative flex-shrink-0 w-[45vw] sm:w-[30vw] md:w-[25vw] aspect-[400/323] overflow-hidden bg-stone-150 group cursor-pointer"
              >
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-full h-full object-cover brightness-95 group-hover:scale-[1.02] group-hover:brightness-100 transition-all duration-[600ms] ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 ring-0 group-hover:ring-[5px] group-hover:ring-inset group-hover:ring-white/80 transition-all duration-300 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-white/95 px-3 py-2">
                  <div className="font-mono uppercase tracking-[0.15em] text-[7px] flex justify-between items-center text-neutral-900">
                    <span className="font-bold truncate">{item.name}</span>
                    <span className="font-black ml-2 flex-shrink-0">£{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate Set for Loop */}
            {stream2Small.map((item) => (
              <div
                key={`row5-set2-${item.id}`}
                onClick={() => onProductClick(item.id)}
                className="relative flex-shrink-0 w-[45vw] sm:w-[30vw] md:w-[25vw] aspect-[400/323] overflow-hidden bg-stone-150 group cursor-pointer"
              >
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-full h-full object-cover brightness-95 group-hover:scale-[1.02] group-hover:brightness-100 transition-all duration-[600ms] ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 ring-0 group-hover:ring-[5px] group-hover:ring-inset group-hover:ring-white/80 transition-all duration-300 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-white/95 px-3 py-2">
                  <div className="font-mono uppercase tracking-[0.15em] text-[7px] flex justify-between items-center text-neutral-900">
                    <span className="font-bold truncate">{item.name}</span>
                    <span className="font-black ml-2 flex-shrink-0">£{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 6: 1 Big Frame */}
        {stream2Single && (
          <div
            onClick={() => onProductClick(stream2Single.id)}
            className="relative w-full aspect-[1495/767] overflow-hidden bg-stone-100 group cursor-pointer"
          >
            <img
              src={stream2Single.images[0]}
              alt={stream2Single.name}
              className="w-full h-full object-cover brightness-95 group-hover:scale-[1.01] group-hover:brightness-100 transition-all duration-[900ms] ease-out"
              referrerPolicy="no-referrer"
            />
            {/* Inset frame */}
            <div className="absolute inset-0 ring-0 group-hover:ring-[8px] group-hover:ring-inset group-hover:ring-white/80 transition-all duration-300 pointer-events-none" />
            {/* Label strip */}
            <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-white/95 px-8 py-4 flex justify-between items-center">
              <div className="font-mono uppercase tracking-[0.2em] text-[9px] font-bold text-neutral-900 truncate">{stream2Single.name}</div>
              <div className="font-mono uppercase tracking-[0.2em] text-[9px] font-black text-neutral-900 ml-6 flex-shrink-0">£{stream2Single.price}</div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

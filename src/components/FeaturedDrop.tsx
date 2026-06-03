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
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
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
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[56px] h-[56px] text-[#c7bb8b]">
                <circle cx="50" cy="50" r="35" strokeWidth="2.5" />
                <path d="M50 15a35 35 0 0 0-35 35 35 35 0 0 0 35 35M50 27a23 23 0 0 0-23 23 23 23 0 0 0 23 23" strokeWidth="1.8" />
                <circle cx="50" cy="50" r="8" fill="currentColor" stroke="none" />
              </svg>
              <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-stone-300 font-bold hidden sm:inline">
                COCI
              </span>
            </div>
          </div>

          {/* Blur Transition Fade Gradient */}
          <div className="absolute left-[33.33%] top-0 bottom-0 w-[8%] bg-gradient-to-r from-black/75 to-transparent z-10 pointer-events-none" />

          {/* Right Text */}
          <div className="absolute bottom-1/2 translate-y-1/2 right-6 text-white text-right z-10 font-sans tracking-[0.2em] pointer-events-none select-none">
            <div className="text-[7.5px] font-mono text-stone-300 uppercase">[ CAMPAIGN.01 // COCI ]</div>
          </div>
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
                className="w-full h-full object-cover grayscale brightness-95 group-hover:scale-[1.01] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[750ms] ease-out/in"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex flex-col justify-end p-5 text-white">
                <div className="font-sans uppercase tracking-[0.25em] text-[7.5px] space-y-1">
                  <div className="flex justify-between items-center text-stone-300 font-bold border-b border-white/5 pb-1 mb-1">
                    <span>{item.brand}</span>
                    <span>£{item.price}</span>
                  </div>
                  <div className="text-white font-black">{item.name}</div>
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
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[56px] h-[56px] text-[#c7bb8b]">
                <polygon points="50,15 80,32 80,68 50,85 20,68 20,32" strokeWidth="2.5" />
                <path d="M40 35h20M40 50h12M40 35v30" strokeWidth="3" strokeLinecap="round" />
              </svg>
              <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-stone-300 font-bold hidden sm:inline">
                FAVELA
              </span>
            </div>
          </div>

          {/* Blur Transition Fade Gradient */}
          <div className="absolute left-[33.33%] top-0 bottom-0 w-[8%] bg-gradient-to-r from-black/75 to-transparent z-10 pointer-events-none" />

          {/* Right Text */}
          <div className="absolute bottom-1/2 translate-y-1/2 right-6 text-white text-right z-10 font-sans tracking-[0.2em] pointer-events-none select-none">
            <div className="text-[7.5px] font-mono text-stone-300 uppercase">[ CAMPAIGN.01 // FAVELA ]</div>
          </div>
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
                  className="w-full h-full object-cover grayscale brightness-95 group-hover:scale-[1.01] group-hover:brightness-100 transition-all duration-[750ms] ease-out/in"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex flex-col justify-end p-4 text-white">
                  <div className="font-sans uppercase tracking-[0.2em] text-[7.2px] space-y-1">
                    <div className="flex justify-between items-center text-stone-300 font-bold border-b border-white/5 pb-1 mb-1">
                      <span>{item.brand}</span>
                      <span>£{item.price}</span>
                    </div>
                    <div className="text-white font-black truncate">{item.name}</div>
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
                  className="w-full h-full object-cover grayscale brightness-95 group-hover:scale-[1.01] group-hover:brightness-100 transition-all duration-[750ms] ease-out/in"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex flex-col justify-end p-4 text-white">
                  <div className="font-sans uppercase tracking-[0.2em] text-[7.2px] space-y-1">
                    <div className="flex justify-between items-center text-stone-300 font-bold border-b border-white/5 pb-1 mb-1">
                      <span>{item.brand}</span>
                      <span>£{item.price}</span>
                    </div>
                    <div className="text-white font-black truncate">{item.name}</div>
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
              className="w-full h-full object-cover grayscale brightness-95 group-hover:scale-[1.01] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[900ms] ease-out/in"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex flex-col justify-end p-8 md:p-12 text-white">
              <div className="max-w-md font-sans uppercase tracking-[0.3em] text-[8px] space-y-2">
                <div className="text-stone-300 font-bold border-b border-white/5 pb-1 mb-1 flex justify-between">
                  <span>{stream1Single.brand}</span>
                  <span>£{stream1Single.price}</span>
                </div>
                <h3 className="text-sm tracking-[0.2em] font-black text-white">{stream1Single.name}</h3>
              </div>
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
                className="w-full h-full object-cover grayscale brightness-95 group-hover:scale-[1.01] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[750ms] ease-out/in"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex flex-col justify-end p-6 text-white">
                <div className="font-sans uppercase tracking-[0.25em] text-[7.5px] space-y-1">
                  <div className="flex justify-between items-center text-stone-300 font-bold border-b border-white/5 pb-1 mb-1">
                    <span>{item.brand}</span>
                    <span>£{item.price}</span>
                  </div>
                  <div className="text-white font-black">{item.name}</div>
                </div>
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
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-[56px] h-[56px] text-[#c7bb8b]">
                <path d="M28 38c-6.6 0-12 5.4-12 12s5.4 12 12 12c6.2 0 11.3-4.2 11.9-10h20.2c.6 5.8 5.7 10 11.9 10 6.6 0 12-5.4 12-12s-5.4-12-12-12c-6.2 0-11.3 4.2-11.9 10H39.9c-.6-5.8-5.7-10-11.9-10z" />
              </svg>
              <span className="text-[10px] font-mono tracking-[0.4em] uppercase text-stone-300 font-bold hidden sm:inline">
                8TERNITY
              </span>
            </div>
          </div>

          {/* Blur Transition Fade Gradient */}
          <div className="absolute left-[33.33%] top-0 bottom-0 w-[8%] bg-gradient-to-r from-black/75 to-transparent z-10 pointer-events-none" />

          {/* Right Text */}
          <div className="absolute bottom-1/2 translate-y-1/2 right-6 text-white text-right z-10 font-sans tracking-[0.2em] pointer-events-none select-none">
            <div className="text-[7.5px] font-mono text-stone-300 uppercase">[ CAMPAIGN.01 // 8TERNITY ]</div>
          </div>
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
                  className="w-full h-full object-cover grayscale brightness-95 group-hover:scale-[1.01] group-hover:brightness-100 transition-all duration-[750ms] ease-out/in"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex flex-col justify-end p-4 text-white">
                  <div className="font-sans uppercase tracking-[0.2em] text-[7.2px] space-y-1">
                    <div className="flex justify-between items-center text-stone-300 font-bold border-b border-white/5 pb-1 mb-1">
                      <span>{item.brand}</span>
                      <span>£{item.price}</span>
                    </div>
                    <div className="text-white font-black truncate">{item.name}</div>
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
                  className="w-full h-full object-cover grayscale brightness-95 group-hover:scale-[1.01] group-hover:brightness-100 transition-all duration-[750ms] ease-out/in"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex flex-col justify-end p-4 text-white">
                  <div className="font-sans uppercase tracking-[0.2em] text-[7.2px] space-y-1">
                    <div className="flex justify-between items-center text-stone-300 font-bold border-b border-white/5 pb-1 mb-1">
                      <span>{item.brand}</span>
                      <span>£{item.price}</span>
                    </div>
                    <div className="text-white font-black truncate">{item.name}</div>
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
              className="w-full h-full object-cover grayscale brightness-95 group-hover:scale-[1.01] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[900ms] ease-out/in"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex flex-col justify-end p-8 md:p-12 text-white">
              <div className="max-w-md font-sans uppercase tracking-[0.3em] text-[8px] space-y-2">
                <div className="text-stone-300 font-bold border-b border-white/5 pb-1 mb-1 flex justify-between">
                  <span>{stream2Single.brand}</span>
                  <span>£{stream2Single.price}</span>
                </div>
                <h3 className="text-sm tracking-[0.2em] font-black text-white">{stream2Single.name}</h3>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

import { Product } from '../types';

interface FeaturedDropProps {
  products: Product[];
  onProductClick: (id: string) => void;
}

export default function FeaturedDrop({ products, onProductClick }: FeaturedDropProps) {
  // First stream "3" (shirts and pants)
  const stream1Big = [
    products.find(p => p.id === 'boxy-heavy-tee'),
    products.find(p => p.id === 'core-lounge-hoodie'),
    products.find(p => p.id === 'storm-cargo-pants')
  ].filter((p): p is Product => p !== undefined);

  // First stream "5" (small accessories)
  const stream1Small = [
    products.find(p => p.id === 'industrial-steel-watch'),
    products.find(p => p.id === 'merino-rib-beanie'),
    products.find(p => p.id === 'heavy-rib-socks'),
    products.find(p => p.id === 'waterproof-commute-tote'),
    products.find(p => p.id === 'brutal-combat-boot')
  ].filter((p): p is Product => p !== undefined);

  // First stream "1" (big single banner - best seller jacket)
  const stream1Single = products.find(p => p.id === 'hydro-tech-parka') || products[0];

  // Second stream "2" (two big garments)
  const stream2Big = [
    products.find(p => p.id === 'thermal-gilet-vest'),
    products.find(p => p.id === 'boxy-heavy-tee')
  ].filter((p): p is Product => p !== undefined);

  // Second stream "4" (four small accessories)
  const stream2Small = [
    products.find(p => p.id === 'heavy-rib-socks'),
    products.find(p => p.id === 'merino-rib-beanie'),
    products.find(p => p.id === 'industrial-steel-watch'),
    products.find(p => p.id === 'waterproof-commute-tote')
  ].filter((p): p is Product => p !== undefined);

  // Second stream "1" (big single banner - heavy overshirt/pants)
  const stream2Single = products.find(p => p.id === 'storm-cargo-pants') || products[0];

  return (
    <section id="featured-drop" className="w-full bg-stone-100 select-none pb-0 pt-0">
      <div className="w-full flex flex-col gap-[1px] px-[1px] bg-stone-300">
        
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

        {/* ROW 2: 5 Frames */}
        <div className="grid grid-cols-5 gap-[1px] w-full">
          {stream1Small.map((item) => (
            <div
              key={item.id}
              onClick={() => onProductClick(item.id)}
              className="relative aspect-[308/323] overflow-hidden bg-stone-150 group cursor-pointer"
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

        {/* ROW 5: 4 Frames */}
        <div className="grid grid-cols-4 gap-[1px] w-full">
          {stream2Small.map((item) => (
            <div
              key={item.id}
              onClick={() => onProductClick(item.id)}
              className="relative aspect-[400/323] overflow-hidden bg-stone-150 group cursor-pointer"
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

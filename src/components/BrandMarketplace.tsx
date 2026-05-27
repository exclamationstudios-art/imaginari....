import { Brand } from '../types';
import { ArrowRight } from 'lucide-react';

interface BrandMarketplaceProps {
  brands: Brand[];
  onBrandSelect: (brandName: string) => void;
}

export default function BrandMarketplace({ brands, onBrandSelect }: BrandMarketplaceProps) {
  return (
    <section id="brand-marketplace" className="w-full bg-stone-100 py-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title Block */}
        <div className="text-center md:text-left mb-16 space-y-3 select-none">
          <span className="text-[9px] font-mono tracking-[0.35em] text-neutral-400 block uppercase">[ B_MKT.COALITION // INDEX ]</span>
          <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tighter text-neutral-900 uppercase">
            CURATED COALITION
          </h2>
          <p className="text-neutral-500 text-[11px] font-mono uppercase tracking-wider max-w-2xl leading-relaxed">
            A precise alignment of uncompromising creators. Operating at the friction boundary of climate utility and subculture design.
          </p>
        </div>

        {/* Brands Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="group relative flex flex-col justify-between bg-neutral-950 border border-neutral-900 p-6 hover:border-stone-400 transition-all duration-[450ms] h-[485px] overflow-hidden"
            >
              {/* Brand Mood Image background with soft overlay */}
              <div className="absolute inset-0 select-none overflow-hidden pb-18 z-0">
                <img
                  src={brand.moodImage}
                  alt={`${brand.name} mood`}
                  className="w-full h-full object-cover grayscale brightness-[0.7] group-hover:scale-103 group-hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-black/40" />
              </div>

              {/* Upper Section */}
              <div className="relative z-10 flex justify-between items-start text-white select-none">
                <span className="text-[10px] font-mono tracking-[0.25em] text-stone-250">
                  // {brand.id.toUpperCase()}
                </span>
                <span className="text-[8px] font-mono border border-white/20 bg-black/50 px-2 py-1 uppercase tracking-widest backdrop-blur-sm">
                  Active
                </span>
              </div>

              {/* Lower Section (Content Card Area) */}
              <div className="relative z-10 bg-neutral-950/90 border border-neutral-800 p-6 mt-auto shadow-lg group-hover:bg-neutral-900/95 transition-colors duration-350">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-2.5 mb-2.5">
                  <h3 className="text-xs font-mono tracking-[0.2em] font-black text-white uppercase">
                    {brand.name}
                  </h3>
                  <span className="text-[8px] font-mono text-neutral-500">M // ARCHIVE</span>
                </div>
                
                <p className="text-[10px] font-mono text-stone-300 uppercase tracking-wider leading-relaxed line-clamp-2">
                  {brand.shortLine}
                </p>
                
                <p className="text-[10px] text-stone-400 font-sans tracking-wide font-light mt-3.5 line-clamp-3 leading-relaxed hidden sm:block">
                  {brand.description}
                </p>

                <button
                  onClick={() => onBrandSelect(brand.name)}
                  className="w-full mt-5 bg-stone-100 hover:bg-white text-neutral-950 font-mono text-[9px] tracking-[0.25em] uppercase py-3.5 px-4 flex items-center justify-center gap-2 group/btn cursor-pointer transition-colors"
                >
                  Explore Brand
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Scandinavian/Street philosophy split line and quote */}
        <div className="mt-16 border-t border-stone-250 pt-8 flex flex-col md:flex-row gap-8 justify-between text-neutral-400 font-mono text-[10px] uppercase tracking-widest select-none pointer-events-none">
          <span>COALITION SYSTEM DIRECTORY [S01]</span>
          <span className="text-right">“AARHUS RESTRAINT / BARCELONA ATTITUDE”</span>
        </div>

      </div>
    </section>
  );
}

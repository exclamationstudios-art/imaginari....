import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onShopClick: () => void;
  onExploreBrandsClick: () => void;
}

export default function Hero({ onShopClick }: { onShopClick: () => void }) {
  return (
    <section id="hero-banner" className="relative h-screen w-full overflow-hidden bg-neutral-900">
      {/* Background Image */}
      <div className="absolute inset-0 select-none">
        <img
          src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1800"
          alt="Maginari Campaign Hero"
          className="w-full h-full object-cover object-center scale-100 transition duration-[5000ms]"
          referrerPolicy="no-referrer"
        />
        {/* Cinematic shade scrim */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content - Bottom Left */}
      <div className="relative h-full w-full flex flex-col justify-end items-start pb-8 text-white z-10 px-6 md:px-8">
        <div className="space-y-6 text-left">
          <h1 className="text-6xl sm:text-7xl md:text-[8.5rem] font-sans font-black tracking-tighter uppercase leading-[0.8] text-white">
            CT Uniform
          </h1>

          <div className="flex justify-start">
            <button
              onClick={onShopClick}
              className="bg-white hover:bg-stone-100 text-neutral-950 font-sans text-[11px] tracking-[0.3em] font-black uppercase py-4 px-8 rounded-full inline-flex items-center justify-center cursor-pointer transition-all duration-300 shadow-md"
            >
              SHOP THE ARCHIVE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

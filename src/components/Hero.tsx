import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onShopClick: () => void;
  onExploreBrandsClick: () => void;
}

export default function Hero({ onShopClick }: { onShopClick: () => void }) {
  return (
    <section id="hero-banner" className="relative w-full overflow-hidden bg-stone-100" style={{ minHeight: '100svh' }}>

      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }}
      />

      {/* Thin top editorial stripe */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-stone-250 z-20" />

      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-stretch" style={{ minHeight: '100svh' }}>

        {/* LEFT — Editorial text column */}
        <div className="flex flex-col justify-between px-6 md:px-10 pt-28 pb-10 lg:w-[45%] xl:w-[42%] order-2 lg:order-1">

          {/* Top label */}
          <div>
            <span className="text-[9px] font-mono tracking-[0.4em] text-neutral-400 uppercase block mb-8">
              [ SEASON.01 // DROP.001 ]
            </span>

            {/* Main headline */}
            <h1 className="font-sans font-black uppercase leading-[0.85] tracking-tight text-neutral-900"
              style={{ fontSize: 'clamp(3.5rem, 8vw, 7.5rem)' }}>
              Icons<br />
              <span className="text-stone-400">Crop</span><br />
              Tee
            </h1>

            {/* Divider line */}
            <div className="w-12 h-[2px] bg-neutral-900 my-8" />

            {/* Description */}
            <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider leading-loose max-w-xs">
              Heavy cotton. Boxy crop.<br />
              Iconic graphic. No compromises.
            </p>
          </div>

          {/* Bottom CTA block */}
          <div className="mt-12 space-y-4">
            <button
              onClick={onShopClick}
              className="group bg-neutral-900 hover:bg-neutral-800 text-stone-100 font-mono text-[11px] tracking-[0.3em] font-bold uppercase py-4 px-10 inline-flex items-center gap-3 cursor-pointer transition-all duration-300"
            >
              SHOP THE DROP
              <span className="w-4 h-[1px] bg-stone-400 group-hover:w-8 transition-all duration-300" />
            </button>

            <div className="flex items-center gap-4 pt-2">
              <span className="text-[8px] font-mono text-neutral-400 tracking-[0.25em] uppercase">£65 — £75</span>
              <span className="w-[1px] h-3 bg-stone-300" />
              <span className="text-[8px] font-mono text-neutral-400 tracking-[0.25em] uppercase">XS – XL</span>
              <span className="w-[1px] h-3 bg-stone-300" />
              <span className="text-[8px] font-mono text-neutral-400 tracking-[0.25em] uppercase">Free Shipping</span>
            </div>
          </div>
        </div>

        {/* RIGHT — Model image column */}
        <div className="relative lg:w-[55%] xl:w-[58%] order-1 lg:order-2 flex items-end justify-center overflow-hidden"
          style={{ minHeight: '60vw', maxHeight: '100svh' }}>

          {/* Subtle left-edge fade into the stone-100 background */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-stone-100 to-transparent z-10 pointer-events-none hidden lg:block" />

          {/* The model image — PNG white bg blends into stone-100 */}
          <img
            src="/hero-model.png"
            alt="Model wearing Icons COC Crop T-Shirt"
            className="w-full h-full object-cover object-top select-none"
            style={{ objectPosition: 'center top' }}
            draggable={false}
          />

          {/* Bottom product tag */}
          <div className="absolute bottom-6 right-6 z-20 bg-neutral-900/90 backdrop-blur-sm text-stone-100 px-4 py-3 border border-neutral-800">
            <div className="text-[8px] font-mono tracking-[0.3em] text-stone-400 uppercase mb-1">WEARING NOW</div>
            <div className="text-[10px] font-mono font-bold tracking-wider uppercase">Icons Crop T-Shirt</div>
            <div className="text-[9px] font-mono text-stone-400 mt-0.5">HELIOT EMIL — £75</div>
          </div>
        </div>

      </div>

      {/* Bottom thin editorial stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-stone-250 z-20" />

    </section>
  );
}

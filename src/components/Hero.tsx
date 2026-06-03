export default function Hero({ onShopClick }: { onShopClick: (category?: string) => void }) {
  return (
    <section id="hero-banner" className="relative w-full overflow-hidden bg-stone-100" style={{ minHeight: '100svh' }}>

      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }}
      />

      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-stretch" style={{ minHeight: '100svh' }}>

        {/* LEFT — Editorial text column */}
        <div className="flex flex-col justify-between px-6 md:px-10 lg:w-[45%] xl:w-[42%] order-2 lg:order-1"
          style={{ paddingTop: 'calc(7rem - 24px)', paddingBottom: '2.5rem' }}>

          <div>
            {/* Interactive categories — 0.3x of original headline size, shifted down 40px, blended color */}
            <div className="flex flex-col gap-2.5 font-sans font-black uppercase leading-[0.85] tracking-tight"
              style={{ fontSize: 'clamp(1.575rem, 3.6vw, 3.375rem)', transform: 'translateY(40px)' }}>
              {['shirts', 'socks', 'shoes', 'hats'].map((item) => (
                <button
                  key={item}
                  onClick={() => onShopClick(item.charAt(0).toUpperCase() + item.slice(1))}
                  className="text-left cursor-pointer transition-colors duration-300 text-stone-200 hover:text-stone-500 focus:outline-none"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* CTA block - shifted up by 40px */}
          <div className="relative -top-10">
            <button
              onClick={() => onShopClick()}
              className="group bg-neutral-900 hover:bg-neutral-800 text-stone-100 font-mono tracking-[0.3em] font-bold uppercase py-4 px-10 inline-flex items-center gap-3 cursor-pointer transition-all duration-300"
              style={{ fontSize: '16.5px' }}
            >
              SHOP THE DROP
              <span className="w-4 h-[1px] bg-stone-400 group-hover:w-8 transition-all duration-300" />
            </button>
          </div>
        </div>

        {/* RIGHT — Model image column */}
        <div className="relative lg:w-[55%] xl:w-[58%] order-1 lg:order-2 flex items-end justify-center overflow-hidden"
          style={{ minHeight: '60vw', maxHeight: '100svh' }}>

          {/* Subtle left-edge fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-stone-100 to-transparent z-10 pointer-events-none hidden lg:block" />

          <img
            src="/mixed-model.png"
            alt="Mixed Models wearing COC Collection"
            className="w-full h-full object-cover object-top select-none"
            style={{ objectPosition: 'center top', transform: 'translateY(40px)' }}
            draggable={false}
          />
        </div>

      </div>

      {/* Bottom thin editorial stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-stone-250 z-20" />

    </section>
  );
}

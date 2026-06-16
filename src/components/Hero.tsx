export default function Hero({ onShopClick, bannerImage = '/mixed-model.png' }: { onShopClick: (category?: string) => void; bannerImage?: string }) {
  return (
    <section id="hero-banner" className="relative w-full min-h-[100svh] bg-stone-100 overflow-hidden">
      {/* Full bleed background image */}
      <img
        src={bannerImage}
        alt="Mixed Models wearing COC Collection"
        className="absolute inset-0 w-full h-full object-cover object-top"
        draggable={false}
      />
      
      {/* Subtle gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

      {/* Content block aligned to bottom left */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-10 md:pb-16 flex flex-col items-start text-white z-10">
        <span className="text-sm md:text-base font-sans font-medium mb-1">Maginari Style By</span>
        <h1 className="text-4xl md:text-5xl font-sans font-bold leading-tight mb-6">
          Main Character Energy
        </h1>
        <button
          onClick={() => onShopClick()}
          className="bg-white hover:bg-stone-200 text-black font-sans font-semibold rounded-full px-6 py-2.5 transition-colors"
        >
          Shop
        </button>
      </div>
    </section>
  );
}

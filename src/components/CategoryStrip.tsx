import { ArrowRight } from 'lucide-react';

interface CategoryStripProps {
  onCategorySelect: (category: string) => void;
  activeCategory: string;
}

const CATEGORY_ITEMS = [
  {
    name: 'Crop Tees',
    image: '/shirts/GREEN OFFICIAL COC CROP T SHIRT.jpg',
    count: '4 items',
    desc: 'Cropped raw hem silhouettes'
  },
  {
    name: 'Regular Tees',
    image: '/shirts/coc ash reg 2.jpg',
    count: '4 items',
    desc: 'Heavy boxy relaxed classics'
  }
];

export default function CategoryStrip({ onCategorySelect, activeCategory }: CategoryStripProps) {
  return (
    <section id="category-strip" className="w-full bg-stone-100 py-16 border-b border-stone-200 select-none">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 space-y-3 md:space-y-0">
          <div>
            <span className="text-[9px] font-mono tracking-[0.35em] text-neutral-400 block uppercase">
              [ CAT_DIR.S01 // SECTION_INDEX ]
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-black tracking-tighter text-neutral-900 uppercase mt-1">
              SHOP BY ELEMENT
            </h2>
          </div>
          <span className="text-[10px] font-mono tracking-widest text-neutral-400 hidden md:block">
            SWIPE TO EXPLORE ────→
          </span>
        </div>

        {/* Horizontal Scroll Containers */}
        <div id="category-scroller" className="flex items-stretch space-x-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-stone-250 scrollbar-track-transparent">
          {CATEGORY_ITEMS.map((cat) => {
            const isSelected = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => onCategorySelect(cat.name)}
                className={`flex-none w-60 group text-left cursor-pointer outline-none transition-all duration-300 ${isSelected ? 'opacity-100 scale-[0.98]' : 'opacity-90 hover:opacity-100'}`}
              >
                <div className="relative aspect-3/4 overflow-hidden bg-stone-200 border border-stone-200">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover grayscale brightness-[0.85] group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-neutral-900 text-stone-100 text-[8px] font-mono tracking-[0.2em] px-3 py-1.5 uppercase font-medium">
                    {cat.count}
                  </div>
                </div>

                <div className="mt-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-xs font-mono tracking-[0.15em] font-bold uppercase text-neutral-900">
                      {cat.name}
                    </h3>
                    <p className="text-[10px] font-mono text-neutral-400 uppercase mt-1 tracking-wider leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                  <div className="w-6 h-6 border border-neutral-900/10 flex items-center justify-center text-neutral-500 group-hover:border-neutral-900 group-hover:text-neutral-900 transition-colors">
                    <ArrowRight className="w-3 h-3 translate-x-0 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}

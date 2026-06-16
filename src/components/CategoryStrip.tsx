import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface CategoryStripProps {
  onCategorySelect: (category: string) => void;
  activeCategory: string;
}

const CATEGORY_ITEMS = [
  { name: 'Shirts',  color: '#7a8a78', hover: '#4a5c48', image: '/shirts/GREEN OFFICIAL COC CROP T SHIRT.jpg' },
  { name: 'Tees',    color: '#A8AAA9', hover: '#5c5e5d', image: '/shirts/coc ash reg 2.jpg' },
  { name: 'Socks',   color: '#c7a97a', hover: '#8c6c3e', image: '/shirts/coc ash reg 2.jpg' },
  { name: 'Shoes',   color: '#1E2022', hover: '#444648', image: '/shirts/coc regula t shirt black frint.jpg' },
  { name: 'Hats',    color: '#FAFAFA', hover: '#d0cdc8', image: '/shirts/coc regula t shirt hite frint.jpg' },
  { name: 'Bags',    color: '#444A3D', hover: '#2a2e27', image: '/shirts/coc reg green .jpg' },
];

export default function CategoryStrip({ onCategorySelect, activeCategory }: CategoryStripProps) {
  return (
    <section id="category-strip" className="w-full bg-stone-100 py-8 border-b border-stone-200 select-none">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Compact header */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-sm font-sans font-medium text-neutral-900">Categories</span>
        </div>

        {/* Pill cards row */}
        <div id="category-scroller" className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORY_ITEMS.map((cat) => {
            const isSelected = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => onCategorySelect(cat.name)}
                className="group flex-none cursor-pointer outline-none transition-all duration-300 focus:outline-none"
                style={{ '--cat-color': cat.color, '--cat-hover': cat.hover } as React.CSSProperties}
              >
                <div
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: isSelected ? cat.hover : cat.color,
                    border: `1.5px solid ${isSelected ? cat.hover : cat.color}`,
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.backgroundColor = cat.hover; (e.currentTarget as HTMLDivElement).style.borderColor = cat.hover; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.backgroundColor = isSelected ? cat.hover : cat.color; (e.currentTarget as HTMLDivElement).style.borderColor = isSelected ? cat.hover : cat.color; }}
                >
                  <span
                    className="text-sm font-sans font-medium whitespace-nowrap transition-colors duration-300"
                    style={{ color: cat.color === '#FAFAFA' || cat.color === '#A8AAA9' || cat.color === '#c7a97a' ? '#121210' : '#f4f4f0' }}
                  >
                    {cat.name}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, Sparkles, Check } from "lucide-react";
import { TryOnModal } from "./TryOnModal";
import { Product } from "../data/products";

interface CociShirt {
  id: string;
  name: string;
  color: string;
  price: string;
  image: string;
  description: string;
  details: string[];
}

const cociShirts: CociShirt[] = [
  {
    id: "signature-linen-shirt",
    name: "Signature Linen Shirt",
    color: "Off-White",
    price: "£180",
    image: "/products/white-linen-shirt.png",
    description: "Our signature linen shirt in pristine off-white. Hand-finished with premium tailoring lines, detailed with custom gold stitching along the interior seams and double-rolled cuffs.",
    details: ["100% Belgian Flax Linen", "Signature gold stitch details", "Mother of Pearl buttons", "Hand-finished in Lagos"]
  },
  {
    id: "classic-black-tee",
    name: "Classic Organic Tee",
    color: "Carbon Black",
    price: "£85",
    image: "/products/black-organic-tee.png",
    description: "Heavyweight organic cotton jersey, custom dyed and pre-shrunk to retain its structured boxy silhouette and rich carbon shade wash after wash.",
    details: ["100% Organic Cotton", "Heavyweight 280gsm knit", "Reinforced ribbed collar", "Eco-friendly natural dye"]
  },
  {
    id: "nomad-linen-top",
    name: "Nomad Oversized Shirt",
    color: "Raw Umber",
    price: "£165",
    image: "/products/brown-oversized-shirt.png",
    description: "A fluid, drop-shoulder silhouette woven from a custom linen-modal blend. Breathable for hot climates yet carries a structured, architectural drape.",
    details: ["55% Belgian Linen, 45% Modal", "Relaxed oversized stance", "Tonal raw horn buttons", "Dry clean recommended"]
  },
  {
    id: "drift-linen-shirt",
    name: "Drift Linen Shirt",
    color: "Sage Green",
    price: "£115",
    image: "/products/sage-green-shirt.png",
    description: "Woven in a serene sage green shade from premium open-weave flax linen. Designed with a relaxed camp collar and polished mother of pearl buttons.",
    details: ["100% Premium Linen", "Mother of Pearl buttons", "Relaxed camp collar", "Breathable open-weave"]
  }
];

export const CociViewer = () => {
  const navigate = useNavigate();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isTryOnOpen, setIsTryOnOpen] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const activeIndexRef = useRef(0);
  const activeShirt = cociShirts[activeIndex];

  // Map to Product format for TryOnModal
  const activeProduct: Product = {
    id: activeShirt.id,
    name: activeShirt.name,
    image: activeShirt.image,
    price: activeShirt.price,
    description: activeShirt.description,
    details: activeShirt.details
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerWidth = container.offsetWidth;
      const containerCenter = container.getBoundingClientRect().left + containerWidth / 2;
      const items = container.querySelectorAll(".shirt-item");
      
      let closestIndex = 0;
      let minDistance = Infinity;

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const distanceFromCenter = Math.abs(containerCenter - itemCenter);

        if (distanceFromCenter < minDistance) {
          minDistance = distanceFromCenter;
          closestIndex = index;
        }

        // Apply proximity-based scaling: 1.0x to 1.5x
        const threshold = window.innerWidth < 768 ? 180 : 320;
        const progress = Math.max(0, 1 - distanceFromCenter / threshold);
        
        // 1.0 to 1.5x scale
        const scale = 1.0 + progress * 0.5;

        // Apply scale directly to image wrapper for smoothness
        const imgWrapper = item.querySelector(".shirt-image-wrapper") as HTMLElement;
        if (imgWrapper) {
          imgWrapper.style.transform = `scale(${scale})`;
          // Subtle opacity boost for focused item
          imgWrapper.style.opacity = `${0.4 + progress * 0.6}`;
        }
      });

      if (closestIndex !== activeIndexRef.current) {
        activeIndexRef.current = closestIndex;
        setActiveIndex(closestIndex);
        setSelectedSize(null); // Reset size on slide change
        setIsAddedToCart(false); // Reset cart state on slide change
      }
    };

    // Run layout effects after rendering completes
    const timer = setTimeout(handleScroll, 150);

    container.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      clearTimeout(timer);
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const items = container.querySelectorAll(".shirt-item");
    const item = items[index] as HTMLElement;
    if (item) {
      const itemLeft = item.offsetLeft;
      const itemWidth = item.offsetWidth;
      const containerWidth = container.offsetWidth;
      const scrollPosition = itemLeft - (containerWidth - itemWidth) / 2;
      
      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
      });
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < cociShirts.length - 1) {
      scrollToIndex(activeIndex + 1);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize) return;
    setIsAddedToCart(true);
    setTimeout(() => {
      setIsAddedToCart(false);
    }, 2000);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#171715] text-text-primary flex flex-col md:flex-row overflow-hidden selection:bg-olive-400 selection:text-bg-base">
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Blurred atmospheric backgrounds */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Deep Coci gradient backdrop */}
        <div className="absolute inset-0 bg-[#171715]/90 z-0" />
        
        {/* Glow orbs */}
        <motion.div 
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 40, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-[#c8c098]/8 blur-[180px] mix-blend-screen" 
        />
        <motion.div 
          animate={{
            scale: [1.1, 0.95, 1.1],
            x: [0, -50, 0],
            y: [0, 40, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#8a7f50]/15 blur-[160px] mix-blend-screen" 
        />
      </div>

      {/* Close/Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-6 left-6 md:top-10 md:left-10 z-50 flex items-center gap-3 text-text-muted hover:text-text-primary transition-all duration-300 group cursor-pointer"
      >
        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-md group-hover:border-olive-400 group-hover:text-olive-400 transition-all duration-300">
          <ArrowLeft size={16} />
        </div>
        <span className="t-micro uppercase text-[10px] tracking-[0.2em] font-medium hidden sm:inline">Back</span>
      </button>

      {/* LEFT COLUMN: Focused Shirt details */}
      <div className="w-full md:w-[45%] lg:w-[40%] flex flex-col justify-center px-6 sm:px-12 md:px-16 pt-24 pb-8 md:py-12 z-10 bg-black/20 backdrop-blur-md border-b md:border-b-0 md:border-r border-white/5 order-2 md:order-1 flex-shrink-0">
        <div className="w-full max-w-[420px] mx-auto md:mx-0 space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-[9px] font-medium tracking-[0.3em] uppercase bg-olive-400/10 text-olive-400 px-2.5 py-0.5 border border-olive-400/20 rounded-sm">
                    COCI
                  </span>
                  <span className="t-micro text-text-muted">{activeShirt.color}</span>
                </div>
                
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-text-primary tracking-wide leading-none uppercase">
                  {activeShirt.name}
                </h1>
                
                <p className="font-editorial italic text-2xl text-olive-400">
                  {activeShirt.price}
                </p>
              </div>

              <p className="t-body text-text-muted text-sm md:text-base leading-relaxed font-light">
                {activeShirt.description}
              </p>

              <div className="pt-2">
                <p className="t-micro text-text-muted mb-3">Composition & Origin</p>
                <div className="flex flex-wrap gap-2">
                  {activeShirt.details.map((detail, idx) => (
                    <span 
                      key={idx} 
                      className="text-[10px] tracking-wide uppercase bg-white/5 border border-white/10 px-3 py-1 text-text-secondary rounded-sm"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Size Selector */}
          <div className="space-y-4 pt-4 border-t border-white/5">
            <div className="flex justify-between items-center">
              <p className="t-micro text-text-muted">Select Size</p>
              {selectedSize && (
                <span className="t-micro text-olive-400">Selected: {selectedSize}</span>
              )}
            </div>
            <div className="flex gap-3">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-11 h-11 flex items-center justify-center text-[11px] tracking-widest transition-all duration-300 border rounded-sm cursor-pointer ${
                    selectedSize === size
                      ? "bg-olive-400 text-bg-base border-olive-400 font-medium"
                      : "bg-transparent text-text-primary border-white/10 hover:border-olive-400 hover:text-olive-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 pt-4">
            <button
              onClick={() => setIsTryOnOpen(true)}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-transparent border border-white/10 hover:border-olive-400 hover:text-olive-400 text-text-secondary font-body text-xs tracking-wider uppercase rounded-sm transition-all duration-300 cursor-pointer"
            >
              <Sparkles size={14} className="text-olive-400 animate-pulse" />
              Try it on
            </button>
            <button
              disabled={!selectedSize}
              onClick={handleAddToCart}
              className={`flex-1 font-display text-lg tracking-[0.1em] py-3 px-6 rounded-sm transition-all duration-300 cursor-pointer ${
                selectedSize
                  ? isAddedToCart 
                    ? "bg-emerald-600 text-white hover:bg-emerald-600 border-none"
                    : "bg-olive-400 text-bg-base hover:bg-olive-300 hover:-translate-y-[1px]"
                  : "bg-white/5 text-text-dim border border-white/5 cursor-not-allowed"
              }`}
            >
              {isAddedToCart ? (
                <span className="flex items-center justify-center gap-2">
                  <Check size={16} /> Added
                </span>
              ) : (
                "Add to Cart"
              )}
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Interactive Horizontal Scroll Carousel */}
      <div className="w-full md:w-[55%] lg:w-[60%] min-h-[45vh] md:min-h-screen flex flex-col items-center justify-center relative overflow-hidden z-10 order-1 md:order-2">
        
        {/* Left Arrow Button */}
        {activeIndex > 0 && (
          <button
            onClick={handlePrev}
            className="absolute left-6 z-30 w-12 h-12 rounded-full border border-white/15 bg-[#171715]/40 backdrop-blur-md flex items-center justify-center text-text-secondary hover:text-olive-400 hover:border-olive-400 transition-all duration-300 cursor-pointer hidden sm:flex"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        {/* Right Arrow Button */}
        {activeIndex < cociShirts.length - 1 && (
          <button
            onClick={handleNext}
            className="absolute right-6 z-30 w-12 h-12 rounded-full border border-white/15 bg-[#171715]/40 backdrop-blur-md flex items-center justify-center text-text-secondary hover:text-olive-400 hover:border-olive-400 transition-all duration-300 cursor-pointer hidden sm:flex"
          >
            <ChevronRight size={20} />
          </button>
        )}

        {/* Horizontal Scroll Area */}
        <div
          ref={scrollContainerRef}
          className="w-full flex items-center gap-14 md:gap-24 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-20 px-[35vw] md:px-[35%] scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cociShirts.map((shirt, index) => (
            <div
              key={shirt.id}
              className="shirt-item flex-shrink-0 w-[170px] sm:w-[220px] md:w-[240px] lg:w-[260px] aspect-[3/4.2] flex items-center justify-center snap-center relative cursor-pointer"
              onClick={() => scrollToIndex(index)}
            >
              <div 
                className="shirt-image-wrapper w-full h-full flex items-center justify-center p-4 transition-all duration-500 ease-out opacity-40 select-none pointer-events-none"
                style={{
                  transformOrigin: "center center",
                  willChange: "transform, opacity",
                }}
              >
                <img
                  src={shirt.image}
                  alt={shirt.name}
                  className="shirt-image w-full h-full object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.6)]"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicators (Dots) */}
        <div className="absolute bottom-8 flex gap-2.5 z-20">
          {cociShirts.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                activeIndex === idx ? "bg-olive-400 w-6" : "bg-white/20 hover:bg-white/40 w-1.5"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Virtual Try-On Modal */}
      <TryOnModal
        isOpen={isTryOnOpen}
        onClose={() => setIsTryOnOpen(false)}
        product={activeProduct}
      />
    </div>
  );
};

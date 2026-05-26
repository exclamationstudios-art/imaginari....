import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "../data/products";
import { SideNav } from "../components/SideNav";
import { Footer } from "../sections/Footer";
import { FooterMobile } from "../mobile/sections/FooterMobile";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { useEffect, useState } from "react";
import { TryOnModal } from "../components/TryOnModal";
import { CociViewer } from "../components/CociViewer";

export const ProductDetail = () => {
  const { id } = useParams();
  
  if (id === "coc") {
    return <CociViewer />;
  }

  const product = products.find((p) => p.id === id);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isTryOnOpen, setIsTryOnOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-base text-text-primary">
        <div className="text-center space-y-6">
          <h1 className="t-title-lg">Product not found</h1>
          <Link to="/" className="t-micro border-b border-border-strong pb-1 hover:text-olive-400 transition-colors">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-bg-base min-h-screen text-text-primary selection:bg-olive-400 selection:text-bg-base">
      <SideNav />
      
      <main className="pt-24 pb-32 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          
          {/* Left Column: Image */}
          <div className="w-full md:w-1/2">
            <div className="sticky top-32 aspect-[3/4.5] bg-bg-elevated overflow-hidden flex items-center justify-center p-8 md:p-16 shadow-card rounded-md">
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="w-full md:w-1/2 space-y-12">
            {/* Breadcrumbs */}
            <nav className="t-micro text-text-muted flex items-center gap-2">
              <Link to="/" className="hover:text-olive-400 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-text-primary">{product.name}</span>
            </nav>

            {/* Header */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl text-text-primary leading-none"
              >
                {product.name}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="t-editorial text-olive-400"
              >
                {product.price}
              </motion.p>
            </div>

            {/* Description */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-6 max-w-md"
            >
              <p className="t-editorial text-text-secondary max-w-sm">
                {product.description}
              </p>
            </motion.div>

            {/* Size Selector */}
            <div className="space-y-6">
              <p className="t-micro text-text-muted">Select Size</p>
              <div className="flex gap-4">
                {["S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 flex items-center justify-center text-[11px] tracking-widest transition-all duration-300 border rounded-sm ${
                      selectedSize === size 
                        ? "bg-olive-400 text-bg-base border-olive-400" 
                        : "bg-transparent text-text-primary border-border-medium hover:border-olive-400 hover:text-olive-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button 
                onClick={() => setIsTryOnOpen(true)}
                className="flex-1 btn-ghost animate-shine"
              >
                Try it on
              </button>
              <button className="flex-1 btn-primary py-[13px]">
                Buy Now
              </button>
            </div>

            {/* Details List */}
            <div className="pt-12 border-t border-border-subtle space-y-8">
              <div className="space-y-4">
                <p className="t-micro text-olive-400">Details & Composition</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3">
                  {product.details.map((detail, index) => (
                    <li key={index} className="t-label text-text-muted flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-olive-400" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <p className="t-micro text-olive-400">Shipping & Returns</p>
                <p className="t-label text-text-muted max-w-sm">
                  Free worldwide shipping on orders over $300. 14-day return policy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        <section className="mt-40 space-y-20">
          <div className="text-center space-y-4">
            <p className="section-eyebrow">You May Also Like</p>
            <h2 className="t-title-lg">Complete the Look</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[8px]">
            {products.filter(p => p.id !== product.id).slice(0, 4).map((p) => (
              <div key={p.id} className="w-full">
                <Link to={`/product/${p.id}`} className="block" onClick={() => window.scrollTo(0, 0)}>
                  <div className="group relative aspect-[3/4.5] w-full overflow-hidden bg-bg-card rounded-md transition-all duration-700 hover:bg-bg-card-hover shadow-[var(--shadow-card)]">
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute bottom-8 left-8 z-20">
                      <p className="t-micro text-olive-400 opacity-0 transition-all duration-700 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 font-medium">
                        {p.name}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>

      {isMobile ? <FooterMobile /> : <Footer />}

      <TryOnModal 
        isOpen={isTryOnOpen} 
        onClose={() => setIsTryOnOpen(false)} 
        product={product} 
      />
    </div>
  );
};

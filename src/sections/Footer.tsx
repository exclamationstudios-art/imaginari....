import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-bg-base px-8 py-32 border-t border-border-subtle">
      <div className="mx-auto max-w-full">
        <div className="flex flex-col md:flex-row justify-between items-start gap-20 md:gap-8 mb-40">
          <div className="space-y-12">
            <div className="font-display text-2xl tracking-[0.2em] uppercase text-text-primary">MAGINARI</div>
            <p className="max-w-xs t-body text-text-dim">
              distance changes your surroundings, not your origin.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-32">
            <div className="space-y-8">
              <p className="t-micro text-olive-400 font-medium">Explore</p>
              <ul className="space-y-4 t-label text-text-muted">
                <li><a href="#" className="hover:text-text-primary transition-colors">The Story</a></li>
                <li><a href="#" className="hover:text-text-primary transition-colors">Catalogue</a></li>
                <li><a href="#" className="hover:text-text-primary transition-colors">Archive</a></li>
              </ul>
            </div>
            
            <div className="space-y-8">
              <p className="t-micro text-olive-400 font-medium">Connect</p>
              <ul className="space-y-4 t-label text-text-muted">
                <li><a href="#" className="hover:text-text-primary transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-text-primary transition-colors">Journal</a></li>
                <li><a href="#" className="hover:text-text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="space-y-8 col-span-2 md:col-span-1">
              <p className="t-micro text-olive-400 font-medium">Newsletter</p>
              <div className="flex flex-col gap-4">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="bg-transparent border-b border-border-medium py-2 t-label text-text-primary outline-none focus:border-olive-400 transition-colors uppercase placeholder-text-dim"
                />
                <button className="t-micro hover:text-olive-400 transition-colors self-start">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative pt-20 overflow-hidden">
          <motion.img 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            src="/wordmark.svg"
            alt="MAGINARI"
            className="w-full h-auto object-contain select-none pointer-events-none opacity-20"
          />
          
          <div className="absolute bottom-0 left-0 w-full flex justify-between items-end pb-8">
            <div className="t-micro text-text-dim">
              © 2026 MAGINARI
            </div>
            <div className="t-micro text-text-dim">
              All rights reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

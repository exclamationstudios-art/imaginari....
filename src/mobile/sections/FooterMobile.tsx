import { motion } from "framer-motion";

export const FooterMobile = () => {
  return (
    <footer className="bg-bg-base px-6 py-20 border-t border-border-subtle">
      <div className="space-y-20">
        <div className="space-y-10 text-center">
          <div className="font-display text-2xl tracking-[0.2em] uppercase text-text-primary">MAGINARI</div>
          <p className="max-w-xs mx-auto t-body text-text-dim text-center">
            distance changes your surroundings, not your origin.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 text-center">
          <div className="space-y-6">
            <p className="t-micro text-olive-400 font-medium">Explore</p>
            <ul className="space-y-4 t-label text-text-muted">
              <li><a href="#" className="hover:text-text-primary transition-colors">The Story</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors">Catalogue</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors">Archive</a></li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <p className="t-micro text-olive-400 font-medium">Connect</p>
            <ul className="space-y-4 t-label text-text-muted">
              <li><a href="#" className="hover:text-text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <p className="t-micro text-olive-400 font-medium">Newsletter</p>
            <div className="flex flex-col gap-4 max-w-xs mx-auto">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent border-b border-border-medium py-2 t-label text-text-primary outline-none focus:border-olive-400 transition-colors uppercase text-center placeholder-text-dim"
              />
              <button className="t-micro hover:text-olive-400 transition-colors">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="relative pt-20 pb-10 overflow-hidden">
          <motion.img 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            src="/wordmark.svg"
            alt="MAGINARI"
            className="w-full h-auto object-contain select-none pointer-events-none opacity-20"
          />
          
          <div className="mt-10 flex flex-col items-center gap-2 t-micro text-text-dim">
            <div>© 2026 MAGINARI</div>
            <div>All rights reserved</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

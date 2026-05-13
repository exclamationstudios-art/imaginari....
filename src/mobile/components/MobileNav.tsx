import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 z-[100] flex w-full items-center justify-between px-6 py-6 mix-blend-difference">
        <img src="/logo.svg" alt="MAGINARI" className="h-4 w-auto" />
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-[10px] tracking-[0.2em] uppercase text-brand-white focus:outline-none"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] bg-brand-green flex flex-col items-center justify-center space-y-8"
          >
            <div className="flex flex-col items-center space-y-6 text-2xl font-light text-brand-white">
              <a href="#" onClick={() => setIsOpen(false)} className="hover:text-brand-gold transition-colors">Story</a>
              <a href="#" onClick={() => setIsOpen(false)} className="hover:text-brand-gold transition-colors">Catalogue</a>
              <a href="#" onClick={() => setIsOpen(false)} className="hover:text-brand-gold transition-colors">Archive</a>
              <a href="#" onClick={() => setIsOpen(false)} className="hover:text-brand-gold transition-colors">Contact</a>
            </div>
            
            <div className="pt-12 flex flex-col items-center space-y-2 text-[10px] tracking-[0.3em] uppercase text-brand-gold">
              <span>Cart (0)</span>
              <span>Lagos / London / Tokyo</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

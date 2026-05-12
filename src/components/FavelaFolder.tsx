import { motion } from "framer-motion";

export const FavelaFolder = () => {
  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center group overflow-hidden cursor-pointer">
      {/* Background / Base layer (Optional) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#192030] via-[#0d1525] to-[#131825] opacity-50" />

      {/* Default State: Folder */}
      <img
        src="/favela-folder.svg"
        alt="Favela Folder Container"
        className="absolute inset-0 w-full h-full object-contain p-4 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] opacity-100 group-hover:opacity-0 group-hover:scale-95 z-10"
      />

      {/* Hover State: Revealed Shirt (Last Favela) */}
      <img
        src="/favela.svg"
        alt="Favela Revealed"
        className="absolute inset-0 w-full h-full object-contain p-4 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-105 z-20"
      />
      
      {/* Label (Optional: disappears on hover) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 transition-opacity duration-500 opacity-100 group-hover:opacity-0 pointer-events-none">
        <span className="font-['Bebas_Neue'] text-4xl tracking-wider text-white/10">FAVELA</span>
      </div>
    </div>
  );
};

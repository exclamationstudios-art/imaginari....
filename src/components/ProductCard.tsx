import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price?: string;
  category?: string;
}

export function ProductCard({ id, name, image }: ProductCardProps) {
  const isSpecialFolder = ["favela", "8ternity", "coc"].includes(id);

  return (
    <Link to={`/product/${id}`} className="block">
      <motion.div
        variants={{
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          hover: {}
        }}
        initial="initial"
        whileHover="hover"
        whileInView="animate"
        viewport={{ once: true }}
        className="group relative aspect-[3/4.5] w-full overflow-hidden bg-transparent rounded-md transition-all duration-700"
      >
      {/* Heart Icon */}
      <div className="absolute top-6 right-6 z-20 text-white/20 transition-colors duration-300 group-hover:text-olive-400">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </div>

      {/* Product Image Container */}
      <div className="absolute inset-0 flex items-end justify-center p-6 z-0 bg-bg-card group-hover:bg-bg-card-hover transition-colors duration-500 rounded-md">
        {isSpecialFolder ? (
          <>
            {/* Default Folder */}
            <motion.img
              src={`/${id}-folder.svg`}
              alt={`${name} Folder`}
              className="absolute inset-0 w-full h-full object-contain object-bottom p-6"
              variants={{
                initial: { opacity: 1 },
                hover: { opacity: 0 }
              }}
              transition={{ duration: 0.4 }}
            />
            
            {/* Final Asset State */}
            <motion.img
              src={id === 'favela' ? '/favela.svg' : `/${id}-asset.svg`}
              alt={`${name} Asset`}
              className="absolute inset-0 w-full h-full object-contain object-bottom p-6"
              variants={{
                initial: { opacity: 0, scale: 1 },
                hover: { opacity: 1, scale: 1.25 }
              }}
              transition={{ duration: 0.4 }}
              style={{ transformOrigin: "bottom" }}
            />
          </>
        ) : (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 rounded-md"
          />
        )}
      </div>

      {/* Product Name (Hover) */}
      <div className="absolute bottom-8 left-8 z-20">
        <p className="t-micro text-olive-400 opacity-0 transition-all duration-700 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 font-medium">
          {name}
        </p>
      </div>
      </motion.div>
    </Link>
  );
}

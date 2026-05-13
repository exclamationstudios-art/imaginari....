import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard";

interface Product {
  id?: string;
  name: string;
  image: string;
}

interface CatalogueRowProps {
  products: Product[];
  className?: string;
}

export const CatalogueRow = ({ products, className = "" }: CatalogueRowProps) => {
  return (
    <div className={`w-full py-12 md:py-20 ${className}`}>
      <div className="w-full px-0">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {products.slice(0, 4).map((product, i) => {
            const productId = product.id || product.name.toLowerCase().replace(/\s+/g, '-');
            return (
              <motion.div
                key={productId + i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="w-full"
              >
                <ProductCard id={productId} name={product.name} image={product.image} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

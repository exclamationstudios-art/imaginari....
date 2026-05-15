import { motion } from "framer-motion";
import { ProductCard } from "../../components/ProductCard";

const products = [
  {
    id: "favela",
    name: "The Lagos Anchor",
    category: "Knitwear",
    price: "£145",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "8ternity",
    name: "Recall Trousers",
    category: "Tailoring",
    price: "£180",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "coc",
    name: "Bridge Overshirt",
    category: "Outerwear",
    price: "£210",
    image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "favela",
    name: "Origin Scarf",
    category: "Accessories",
    price: "£65",
    image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&q=80&w=800",
  },
];

export const CatalogueMobile = () => {
  return (
    <section className="bg-bg-base px-6 py-20 section">
      <div className="space-y-16">
        <div className="space-y-6">
          <h2 className="t-title-md text-text-primary">Catalogue 01</h2>
          <p className="t-body text-text-secondary">
            Pieces designed for the quiet return. Intentional silhouettes, 
            cultural anchors, and the weight of home.
          </p>
          <div className="flex gap-4 t-micro overflow-x-auto pb-2 scrollbar-hide">
            <button className="whitespace-nowrap border-b border-olive-400 text-olive-400 pb-1">All Pieces</button>
            <button className="whitespace-nowrap text-text-muted hover:text-text-primary transition-colors">Knitwear</button>
            <button className="whitespace-nowrap text-text-muted hover:text-text-primary transition-colors">Tailoring</button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

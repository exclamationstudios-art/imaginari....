import { motion } from "framer-motion";
import { ProductCard } from "../components/ProductCard";

const products = [
  {
    name: "The Lagos Anchor",
    category: "Knitwear",
    price: "£145",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Recall Trousers",
    category: "Tailoring",
    price: "£180",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Bridge Overshirt",
    category: "Outerwear",
    price: "£210",
    image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Origin Scarf",
    category: "Accessories",
    price: "£65",
    image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Meridian Coat",
    category: "Outerwear",
    price: "£295",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Abuja Silk Set",
    category: "Tailoring",
    price: "£240",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Passage Hoodie",
    category: "Knitwear",
    price: "£130",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Return Cap",
    category: "Accessories",
    price: "£55",
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Drift Linen Shirt",
    category: "Shirts",
    price: "£115",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Homeward Blazer",
    category: "Tailoring",
    price: "£320",
    image: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Kora Knit Vest",
    category: "Knitwear",
    price: "£95",
    image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Roots Canvas Tote",
    category: "Accessories",
    price: "£45",
    image: "https://images.unsplash.com/photo-1544816565-aa8c1166648f?auto=format&fit=crop&q=80&w=800",
  },
];

export const Catalogue = () => {
  return (
    <section id="catalogue" className="bg-bg-base px-8 py-32 section">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-24 flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div className="space-y-4">
            <h2 className="t-title-md text-text-primary">Catalogue 01</h2>
            <p className="max-w-md t-editorial text-text-muted leading-relaxed">
              Pieces designed for the quiet return. Intentional silhouettes,
              cultural anchors, and the weight of home.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 t-micro">
            <button className="border-b border-olive-400 text-olive-400 pb-1">All Pieces</button>
            <button className="text-text-muted hover:text-text-primary transition-colors">Knitwear</button>
            <button className="text-text-muted hover:text-text-primary transition-colors">Tailoring</button>
            <button className="text-text-muted hover:text-text-primary transition-colors">Outerwear</button>
            <button className="text-text-muted hover:text-text-primary transition-colors">Accessories</button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.08, duration: 0.8 }}
            >
              <ProductCard {...product} id={product.name.toLowerCase().replace(/\s+/g, '-')} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

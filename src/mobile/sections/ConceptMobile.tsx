import { motion } from "framer-motion";
import { WordReveal } from "../../components/WordReveal";
import { Poster } from "../../components/Poster";
import { CatalogueRow } from "../../components/CatalogueRow";

const products = [
  { id: "favela", name: "Favela", image: "" },
  { id: "8ternity", name: "8ternity", image: "" },
  { id: "coc", name: "Coci", image: "" },
];

export const ConceptMobile = () => {
  return (
    <section className="relative flex flex-col items-center justify-center px-0 text-center bg-bg-base section py-24">
      <div className="relative w-full space-y-12 z-10">
        <div className="px-6 space-y-12">
          <p className="section-eyebrow text-olive-400">The Concept</p>
          <div className="space-y-6">
            <WordReveal 
              text="imaginary is not a place" 
              className="t-display text-text-primary justify-center"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="pt-6 space-y-8"
          >
            <p className="t-editorial text-text-muted">
              it is how you return without moving
            </p>
            <p className="t-micro text-olive-400">
              and sometimes… you wear it
            </p>
          </motion.div>

          {/* Separated Posters with Copy */}
          <div className="mt-16 space-y-12 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="self-start"
            >
              <Poster 
                cityImage="https://images.unsplash.com/photo-1539410849639-9ea07149666c?q=80&w=800" 
                cityName="Marrakesh"
                theme="gold"
                rotation={-6}
                className="scale-[0.8]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="py-8"
            >
              <p className="t-micro text-olive-400 mb-2">worn across continents</p>
              <p className="t-editorial text-text-muted text-sm">cloth as cartography — every thread a longitude</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="self-end"
            >
              <Poster 
                cityImage="https://images.unsplash.com/photo-1588661706680-e37456d2db24?q=80&w=800" 
                cityName="Accra"
                theme="gold"
                rotation={8}
                className="scale-[0.8]"
              />
            </motion.div>
          </div>
        </div>

        <div className="space-y-4 mt-16">
          <CatalogueRow products={products} className="pt-0 pb-0" />
        </div>
      </div>
    </section>
  );
};

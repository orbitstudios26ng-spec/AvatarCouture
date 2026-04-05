import { motion } from "framer-motion";
import snap1 from "@/assets/snap 1.jpg";
import snap2 from "@/assets/snap 2.jpg";
import snap3 from "@/assets/snap 3.jpg";
import { collectionCards } from "@/data/studio";

const imageMap = {
  "snap-1": snap1,
  "snap-2": snap2,
  "snap-3": snap3,
};

const CollectionsSection = () => (
  <section id="collections" className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
      >
        <div className="max-w-2xl">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
            Collections
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">
            Browse Curated <span className="italic text-gradient-gold">Directions</span>
          </h2>
        </div>
        <p className="max-w-xl font-body text-sm leading-7 text-cream-muted">
          The collections button now lands on a real gallery section instead of a dead anchor. These cards pull visual energy from the alternate version so the homepage feels more complete and more useful.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        {collectionCards.map((card, index) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="group overflow-hidden rounded-[2rem] border border-border bg-card"
          >
            <div className="relative h-80 overflow-hidden">
              <img
                src={imageMap[card.image]}
                alt={card.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${card.accent}`} />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent p-6">
                <p className="text-xs font-body uppercase tracking-[0.3em] text-gold">{card.tag}</p>
                <h3 className="mt-3 font-display text-3xl text-cream">{card.title}</h3>
                <p className="mt-2 max-w-sm font-body text-sm leading-6 text-cream-muted">
                  {card.subtitle}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default CollectionsSection;

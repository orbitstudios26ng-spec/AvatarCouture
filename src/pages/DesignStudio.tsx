import { motion } from "framer-motion";
import { categories, garmentItems, type CategoryId } from "@/data/studio";

type DesignStudioProps = {
  activeCategory: CategoryId;
  onCategoryChange: (category: CategoryId) => void;
  selectedItems: Partial<Record<CategoryId, string>>;
  onToggleItem: (category: CategoryId, name: string) => void;
};

const DesignStudio = ({
  activeCategory,
  onCategoryChange,
  selectedItems,
  onToggleItem,
}: DesignStudioProps) => {
  const selectedCount = Object.values(selectedItems).filter(Boolean).length;

  return (
    <section id="design-studio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
            Design Studio
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">
            Build A <span className="italic text-gradient-gold">Complete</span> Outfit
          </h2>
          <p className="text-cream-muted font-body max-w-2xl mx-auto">
            Pick a category, audition pieces, and watch the rest of the experience update around your choices.
            The studio now drives both the avatar preview and the collections flow.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 rounded-[2rem] border border-border bg-card p-6"
          >
            <div className="flex flex-wrap gap-3">
              {categories.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => onCategoryChange(id)}
                  className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-body uppercase tracking-[0.2em] transition-all ${
                    activeCategory === id
                      ? "border-gold bg-gold text-primary-foreground"
                      : "border-border text-cream-muted hover:border-gold/40 hover:text-gold"
                  }`}
                >
                  <Icon size={16} />
                  {label}
                </button>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {garmentItems[activeCategory].map((item) => {
                const isSelected = selectedItems[activeCategory] === item.name;

                return (
                  <motion.button
                    key={item.name}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => onToggleItem(activeCategory, item.name)}
                    className={`rounded-[1.5rem] border p-4 text-left transition-all ${
                      isSelected
                        ? "border-gold bg-gold/10 shadow-[0_0_30px_hsl(40_50%_70%_/_0.12)]"
                        : "border-border bg-black/10 hover:border-gold/30"
                    }`}
                  >
                    <div
                      className="mb-4 h-28 rounded-[1.25rem]"
                      style={{ backgroundColor: item.color }}
                    />
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-body font-medium text-cream">{item.name}</p>
                        <p className="mt-1 text-xs font-body text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                      <span
                        className={`mt-1 inline-flex h-5 w-5 shrink-0 rounded-full border ${
                          isSelected ? "border-gold bg-gold" : "border-border"
                        }`}
                      />
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 rounded-[2rem] border border-border bg-card p-6"
          >
            <div>
              <p className="text-xs font-body uppercase tracking-[0.3em] text-gold">Current Outfit</p>
              <h3 className="mt-3 font-display text-3xl text-cream">
                {selectedCount > 0 ? `${selectedCount} piece${selectedCount > 1 ? "s" : ""} selected` : "No pieces selected"}
              </h3>
              <p className="mt-2 text-sm font-body leading-7 text-cream-muted">
                Every selection is now connected to a real destination on the page, so the avatar and collections buttons stay in sync with what you build here.
              </p>
            </div>

            <div className="space-y-3">
              {categories.map((category) => {
                const selectedName = selectedItems[category.id];
                const selectedItem = selectedName
                  ? garmentItems[category.id].find((item) => item.name === selectedName)
                  : undefined;

                return (
                  <div
                    key={category.id}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-black/10 p-4"
                  >
                    <div
                      className="h-10 w-10 rounded-2xl border border-white/10"
                      style={{ backgroundColor: selectedItem?.color ?? "hsl(var(--muted))" }}
                    />
                    <div>
                      <p className="text-sm font-body font-medium text-cream">{category.label}</p>
                      <p className="text-xs font-body text-muted-foreground">
                        {selectedItem?.name ?? "Choose an item to activate this layer."}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href="#avatar"
                className="rounded-full border border-gold/30 px-5 py-3 text-center text-sm font-body font-semibold uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold/10"
              >
                Open Avatar
              </a>
              <a
                href="#collections"
                className="rounded-full bg-gold px-5 py-3 text-center text-sm font-body font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-gold-light"
              >
                View Collections
              </a>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default DesignStudio;

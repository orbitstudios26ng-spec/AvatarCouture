import { motion } from "framer-motion";
import { categories, garmentItems, type CategoryId } from "@/data/studio";

type AvatarSectionProps = {
  selectedItems: Partial<Record<CategoryId, string>>;
};

const skin = "hsl(26 42% 72%)";
const skinDark = "hsl(26 34% 62%)";
const hair = "hsl(20 24% 16%)";

const AvatarSection = ({ selectedItems }: AvatarSectionProps) => {
  const activeSelections = Object.entries(selectedItems).filter(
    ([, value]) => typeof value === "string" && value.length > 0,
  ) as [CategoryId, string][];

  const selectedByCategory = {
    tops: selectedItems.tops
      ? garmentItems.tops.find((item) => item.name === selectedItems.tops)
      : undefined,
    bottoms: selectedItems.bottoms
      ? garmentItems.bottoms.find((item) => item.name === selectedItems.bottoms)
      : undefined,
    shoes: selectedItems.shoes
      ? garmentItems.shoes.find((item) => item.name === selectedItems.shoes)
      : undefined,
    accessories: selectedItems.accessories
      ? garmentItems.accessories.find((item) => item.name === selectedItems.accessories)
      : undefined,
    jewelry: selectedItems.jewelry
      ? garmentItems.jewelry.find((item) => item.name === selectedItems.jewelry)
      : undefined,
  };

  return (
    <section id="avatar" className="py-24 px-6 bg-noir-light/60">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
            Avatar Builder
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">
            Build A <span className="italic text-gradient-gold">Humanoid</span> Avatar
          </h2>
          <p className="text-cream-muted font-body max-w-2xl mx-auto">
            The avatar here is now a full visible figure with head, face, torso, arms, hips, legs, and feet.
            Your outfit choices are layered on top of that body instead of replacing it with abstract lines.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-gold/20 bg-card p-6"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(40_50%_70%_/_0.14),_transparent_34%),linear-gradient(180deg,hsl(20_8%_10%),hsl(20_8%_7%))]" />

            <div className="relative mx-auto max-w-[250px] rounded-[1.75rem] border border-white/10 bg-black/20 p-4">
              <div className="relative mx-auto h-[500px] w-[200px] overflow-hidden rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]">
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full border border-gold/20 bg-black/35 px-3 py-1 text-[10px] font-body uppercase tracking-[0.26em] text-gold">
                  Avatar
                </div>

                <div className="absolute left-1/2 top-[52px] h-[68px] w-[54px] -translate-x-1/2 rounded-[999px] bg-[hsl(26_42%_72%)] shadow-[inset_0_-6px_0_rgba(0,0,0,0.07)]" />
                <div className="absolute left-1/2 top-[40px] h-[42px] w-[64px] -translate-x-1/2 rounded-[999px_999px_24px_24px] bg-[hsl(20_24%_16%)]" />
                <div className="absolute left-[79px] top-[78px] h-[3px] w-[5px] rounded-full bg-[hsl(20_24%_16%)]" />
                <div className="absolute left-[115px] top-[78px] h-[3px] w-[5px] rounded-full bg-[hsl(20_24%_16%)]" />
                <div className="absolute left-1/2 top-[92px] h-[2px] w-[16px] -translate-x-1/2 rounded-full" style={{ backgroundColor: skinDark }} />
                <div className="absolute left-1/2 top-[112px] h-[18px] w-[16px] -translate-x-1/2 rounded-b-xl bg-[hsl(26_42%_72%)]" />

                <div className="absolute left-1/2 top-[126px] h-[112px] w-[74px] -translate-x-1/2 rounded-[28px_28px_22px_22px]" style={{ backgroundColor: skin }} />
                <div className="absolute left-[34px] top-[136px] h-[86px] w-[20px] rounded-full" style={{ backgroundColor: skin }} />
                <div className="absolute right-[34px] top-[136px] h-[86px] w-[20px] rounded-full" style={{ backgroundColor: skin }} />
                <div className="absolute left-[27px] top-[214px] h-[68px] w-[17px] rotate-[8deg] rounded-full" style={{ backgroundColor: skin }} />
                <div className="absolute right-[27px] top-[214px] h-[68px] w-[17px] -rotate-[8deg] rounded-full" style={{ backgroundColor: skin }} />
                <div className="absolute left-[22px] top-[274px] h-[18px] w-[18px] rounded-full" style={{ backgroundColor: skin }} />
                <div className="absolute right-[22px] top-[274px] h-[18px] w-[18px] rounded-full" style={{ backgroundColor: skin }} />

                <div className="absolute left-1/2 top-[224px] h-[48px] w-[82px] -translate-x-1/2 rounded-[28px]" style={{ backgroundColor: skin }} />
                <div className="absolute left-[64px] top-[258px] h-[112px] w-[24px] rounded-full" style={{ backgroundColor: skin }} />
                <div className="absolute right-[64px] top-[258px] h-[112px] w-[24px] rounded-full" style={{ backgroundColor: skin }} />
                <div className="absolute left-[62px] top-[356px] h-[96px] w-[20px] rounded-full" style={{ backgroundColor: skin }} />
                <div className="absolute right-[62px] top-[356px] h-[96px] w-[20px] rounded-full" style={{ backgroundColor: skin }} />
                <div className="absolute left-[52px] top-[444px] h-[18px] w-[34px] rounded-full bg-[hsl(20_14%_12%)]" />
                <div className="absolute right-[52px] top-[444px] h-[18px] w-[34px] rounded-full bg-[hsl(20_14%_12%)]" />

                <div className="absolute left-1/2 top-[136px] h-[18px] w-[78px] -translate-x-1/2 rounded-full bg-white/10" />

                {selectedByCategory.tops && (
                  <>
                    <div
                      className="absolute left-1/2 top-[128px] h-[108px] w-[92px] -translate-x-1/2 rounded-[30px_30px_22px_22px] border border-white/10"
                      style={{ backgroundColor: selectedByCategory.tops.color }}
                    />
                    <div
                      className="absolute left-[31px] top-[139px] h-[74px] w-[24px] rounded-full border border-white/10"
                      style={{ backgroundColor: selectedByCategory.tops.color }}
                    />
                    <div
                      className="absolute right-[31px] top-[139px] h-[74px] w-[24px] rounded-full border border-white/10"
                      style={{ backgroundColor: selectedByCategory.tops.color }}
                    />
                    {selectedByCategory.tops.name === "Structured Blazer" && (
                      <>
                        <div className="absolute left-[77px] top-[130px] h-[64px] w-[14px] rotate-[8deg] bg-black/15" />
                        <div className="absolute right-[77px] top-[130px] h-[64px] w-[14px] -rotate-[8deg] bg-black/15" />
                      </>
                    )}
                    {selectedByCategory.tops.name === "Crop Top" && (
                      <div
                        className="absolute left-1/2 top-[128px] h-[62px] w-[88px] -translate-x-1/2 rounded-[28px_28px_18px_18px] border border-white/10"
                        style={{ backgroundColor: selectedByCategory.tops.color }}
                      />
                    )}
                    {selectedByCategory.tops.name === "Turtleneck" && (
                      <div
                        className="absolute left-1/2 top-[116px] h-[20px] w-[28px] -translate-x-1/2 rounded-xl border border-white/10"
                        style={{ backgroundColor: selectedByCategory.tops.color }}
                      />
                    )}
                  </>
                )}

                {selectedByCategory.bottoms && (
                  <>
                    {selectedByCategory.bottoms.name === "Pencil Skirt" || selectedByCategory.bottoms.name === "Pleated Midi" ? (
                      <div
                        className="absolute left-1/2 top-[235px] h-[128px] w-[96px] -translate-x-1/2 rounded-[18px_18px_28px_28px] border border-white/10"
                        style={{ backgroundColor: selectedByCategory.bottoms.color }}
                      />
                    ) : (
                      <>
                        <div
                          className="absolute left-[58px] top-[238px] h-[206px] w-[34px] rounded-[18px] border border-white/10"
                          style={{ backgroundColor: selectedByCategory.bottoms.color }}
                        />
                        <div
                          className="absolute right-[58px] top-[238px] h-[206px] w-[34px] rounded-[18px] border border-white/10"
                          style={{ backgroundColor: selectedByCategory.bottoms.color }}
                        />
                      </>
                    )}
                    {selectedByCategory.bottoms.name === "Pleated Midi" && (
                      <>
                        <div className="absolute left-[72px] top-[246px] h-[112px] w-px bg-white/30" />
                        <div className="absolute left-[88px] top-[242px] h-[118px] w-px bg-white/30" />
                        <div className="absolute right-[88px] top-[242px] h-[118px] w-px bg-white/30" />
                        <div className="absolute right-[72px] top-[246px] h-[112px] w-px bg-white/30" />
                      </>
                    )}
                  </>
                )}

                {selectedByCategory.accessories?.name === "Leather Belt" && (
                  <div
                    className="absolute left-1/2 top-[231px] h-[8px] w-[88px] -translate-x-1/2 rounded-full"
                    style={{ backgroundColor: selectedByCategory.accessories.color }}
                  />
                )}

                {selectedByCategory.accessories?.name === "Silk Scarf" && (
                  <>
                    <div
                      className="absolute left-1/2 top-[130px] h-[18px] w-[64px] -translate-x-1/2 rounded-full"
                      style={{ backgroundColor: selectedByCategory.accessories.color }}
                    />
                    <div
                      className="absolute left-[110px] top-[143px] h-[46px] w-[10px] rounded-full"
                      style={{ backgroundColor: selectedByCategory.accessories.color }}
                    />
                  </>
                )}

                {selectedByCategory.accessories?.name === "Clutch Bag" && (
                  <div
                    className="absolute right-[16px] top-[235px] h-[42px] w-[28px] rounded-xl border border-white/10"
                    style={{ backgroundColor: selectedByCategory.accessories.color }}
                  />
                )}

                {selectedByCategory.accessories?.name === "Sunglasses" && (
                  <>
                    <div className="absolute left-[72px] top-[74px] h-[10px] w-[18px] rounded-full bg-black/90" />
                    <div className="absolute right-[72px] top-[74px] h-[10px] w-[18px] rounded-full bg-black/90" />
                    <div className="absolute left-1/2 top-[77px] h-[2px] w-[12px] -translate-x-1/2 bg-black/90" />
                  </>
                )}

                {selectedByCategory.jewelry?.name === "Pearl Necklace" && (
                  <div
                    className="absolute left-1/2 top-[136px] h-[8px] w-[52px] -translate-x-1/2 rounded-full"
                    style={{ backgroundColor: selectedByCategory.jewelry.color }}
                  />
                )}

                {selectedByCategory.jewelry?.name === "Gold Cuff" && (
                  <div
                    className="absolute right-[28px] top-[248px] h-[10px] w-[12px] rounded-full"
                    style={{ backgroundColor: selectedByCategory.jewelry.color }}
                  />
                )}

                {selectedByCategory.jewelry?.name === "Statement Ring" && (
                  <div
                    className="absolute right-[22px] top-[283px] h-[7px] w-[7px] rounded-full"
                    style={{ backgroundColor: selectedByCategory.jewelry.color }}
                  />
                )}

                {selectedByCategory.jewelry?.name === "Drop Earrings" && (
                  <>
                    <div
                      className="absolute left-[72px] top-[98px] h-[10px] w-[4px] rounded-full"
                      style={{ backgroundColor: selectedByCategory.jewelry.color }}
                    />
                    <div
                      className="absolute right-[72px] top-[98px] h-[10px] w-[4px] rounded-full"
                      style={{ backgroundColor: selectedByCategory.jewelry.color }}
                    />
                  </>
                )}

                {selectedByCategory.shoes && (
                  <>
                    <div
                      className="absolute left-[49px] top-[442px] h-[20px] w-[38px] rounded-full border border-white/10"
                      style={{ backgroundColor: selectedByCategory.shoes.color }}
                    />
                    <div
                      className="absolute right-[49px] top-[442px] h-[20px] w-[38px] rounded-full border border-white/10"
                      style={{ backgroundColor: selectedByCategory.shoes.color }}
                    />
                    {selectedByCategory.shoes.name === "Stiletto Heels" && (
                      <>
                        <div
                          className="absolute left-[72px] top-[458px] h-[10px] w-[2px]"
                          style={{ backgroundColor: selectedByCategory.shoes.color }}
                        />
                        <div
                          className="absolute right-[72px] top-[458px] h-[10px] w-[2px]"
                          style={{ backgroundColor: selectedByCategory.shoes.color }}
                        />
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 rounded-3xl border border-gold/20 bg-card p-6"
          >
            <p className="text-xs font-body uppercase tracking-[0.3em] text-gold">Look Notes</p>
            <h3 className="font-display text-3xl text-cream">
              The avatar is now an actual visible person-shaped figure.
            </h3>
            <p className="font-body text-sm leading-7 text-cream-muted">
              I replaced the thin sketch-like rendering with a solid humanoid body so the section reads clearly at a glance.
              Clothing and accessories still layer onto the body, but the base avatar now stands on its own.
            </p>
            <div className="space-y-3">
              {categories.map((category) => {
                const selectedName = selectedItems[category.id];
                const selectedItem = selectedName
                  ? garmentItems[category.id].find((entry) => entry.name === selectedName)
                  : undefined;

                return (
                  <div
                    key={category.id}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-black/10 p-4"
                  >
                    <div
                      className="mt-1 h-4 w-4 rounded-full border border-white/20"
                      style={{ backgroundColor: selectedItem?.color ?? "hsl(var(--muted))" }}
                    />
                    <div>
                      <p className="text-sm font-body font-medium text-cream">
                        {selectedItem?.name ?? category.label}
                      </p>
                      <p className="text-xs font-body uppercase tracking-[0.24em] text-cream-muted">
                        {category.label}
                      </p>
                      <p className="mt-1 text-xs font-body text-muted-foreground">
                        {selectedItem?.description ?? "Choose a piece in the studio to dress this part of the avatar."}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="rounded-2xl border border-dashed border-gold/25 bg-gold/5 p-4 text-sm font-body text-cream-muted">
              {activeSelections.length > 0
                ? `${activeSelections.length} wardrobe layer${activeSelections.length > 1 ? "s are" : " is"} currently applied to the avatar.`
                : "The humanoid base is ready. Select items in the studio to dress it."}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default AvatarSection;

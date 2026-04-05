import { motion } from "framer-motion";
import { Layers, User, Sparkles, Palette, Share2, ShieldCheck } from "lucide-react";

const ORBIT_STUDIOS_URL = "https://orbit-studios-euzpitney-orbitstudios26ng-7759s-projects.vercel.app/";

const features = [
  { icon: Layers, title: "Layer System", desc: "Build outfits layer by layer with intuitive drag-and-drop." },
  { icon: User, title: "Custom Avatars", desc: "Create an avatar matching your body type, skin tone, and style." },
  { icon: Sparkles, title: "AI Guidance", desc: "Get real-time design suggestions powered by AI." },
  { icon: Palette, title: "Color Engine", desc: "Discover harmonious palettes that complement your look." },
  { icon: Share2, title: "Share & Collab", desc: "Share designs with friends and collaborate in real-time." },
  { icon: ShieldCheck, title: "Save & Export", desc: "Save your outfits and export high-res lookbook images." },
];

const FeaturesSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
          Built by{" "}
          <a
            href={ORBIT_STUDIOS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold-light transition-colors"
          >
            Orbit Studios
          </a>
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">
          Everything You <span className="italic text-gradient-gold">Need</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="p-6 bg-card border border-border rounded-sm hover:border-gold/30 hover:glow-gold transition-all group"
          >
            <div className="p-3 bg-gold/10 rounded-sm w-fit mb-4 text-gold group-hover:bg-gold/20 transition-colors">
              <f.icon size={22} />
            </div>
            <h3 className="font-display text-lg text-cream font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground font-body">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;

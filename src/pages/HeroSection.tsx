import { motion } from "framer-motion";
import heroImage from "@/assets/hero-fashion.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fashion editorial"
          className="w-full h-full object-cover opacity-40"
          width={1280}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-6"
          >
            AI-Powered Fashion Design
          </motion.p>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8">
            <span className="text-cream">Design Your</span>
            <br />
            <span className="text-gradient-gold italic">Signature</span>
            <br />
            <span className="text-cream">Style</span>
          </h1>

          <p className="font-body text-cream-muted text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Create custom outfits, preview them on a responsive avatar, explore curated collections, and use AI guidance to turn rough ideas into sharper fashion direction.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#design-studio"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gold text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase rounded-sm glow-gold hover:bg-gold-light transition-colors"
            >
              Start Designing
            </motion.a>
            <motion.a
              href="#avatar"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-gold/30 text-gold font-body font-semibold text-sm tracking-widest uppercase rounded-sm hover:bg-gold/10 transition-colors"
            >
              Open Avatar
            </motion.a>
            <motion.a
              href="#collections"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-white/10 text-cream font-body font-semibold text-sm tracking-widest uppercase rounded-sm hover:bg-white/5 transition-colors"
            >
              Collections
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

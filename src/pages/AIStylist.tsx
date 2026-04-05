import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Send, Wand2, TrendingUp, Palette } from "lucide-react";

const suggestions = [
  {
    icon: Wand2,
    title: "Style Recommendation",
    description: "Get personalized outfit suggestions based on your taste, body type, and occasion.",
    prompt: "Give me a style recommendation for a polished evening look.",
  },
  {
    icon: TrendingUp,
    title: "Trend Analysis",
    description: "Discover what's trending on runways and how to incorporate it into your wardrobe.",
    prompt: "What fashion trends feel current right now for a modern wardrobe?",
  },
  {
    icon: Palette,
    title: "Color Harmony",
    description: "Learn which colors complement your skin tone and create stunning combinations.",
    prompt: "Help me build a warm, balanced color palette for this outfit.",
  },
];

type ChatMessage = {
  role: "assistant" | "user";
  text: string;
};

const styleReplies = [
  "Try starting with a structured blazer or a silk blouse, then ground it with wide-leg trousers. That keeps the silhouette polished without feeling stiff.",
  "A strong fashion-safe formula is one statement piece, one clean base, and one warm accessory. It gives the outfit focus instead of letting everything compete.",
  "If you want the look to feel more elevated, keep the base tailored and let texture do the extra work through silk, leather, or metallic accents.",
];

const trendReplies = [
  "The easiest trend to use well is soft tailoring: relaxed structure, sharper shoulders, and cleaner lines. It feels current without becoming costume-like.",
  "Right now the most wearable direction is contrast: refined neutrals mixed with one deliberate bold note, like red, gold, or deep espresso.",
  "Instead of chasing runway extremes, borrow the mood: longer lines, stronger proportions, and one sculptural accessory usually reads more modern.",
];

const colorReplies = [
  "For a warm balanced palette, start with cream, camel, and espresso, then add gold or deep red as the accent. That combination stays rich without looking noisy.",
  "If the outfit already has a dark base, use one lighter tone near the face and one metallic accent. That keeps the whole look from feeling too flat.",
  "A reliable harmony rule is 60-30-10: dominant neutral, supporting secondary tone, then one punchier accent for contrast.",
];

const defaultReplies = [
  "Tell me the occasion, the mood you want, or one piece you already love, and I can shape the outfit around that.",
  "If you want, I can help you choose between a sharper tailored look, a softer elegant look, or something more experimental.",
  "Give me a starting point like color, event, or silhouette, and I’ll turn it into a cleaner styling direction.",
];

const getReplyPool = (message: string) => {
  const normalized = message.toLowerCase();

  if (normalized.includes("trend")) return trendReplies;
  if (
    normalized.includes("color") ||
    normalized.includes("palette") ||
    normalized.includes("tone") ||
    normalized.includes("match")
  ) {
    return colorReplies;
  }
  if (
    normalized.includes("style") ||
    normalized.includes("outfit") ||
    normalized.includes("look") ||
    normalized.includes("wear") ||
    normalized.includes("recommend")
  ) {
    return styleReplies;
  }

  return defaultReplies;
};

const buildReply = (message: string) => {
  const pool = getReplyPool(message);
  const index = message.trim().length % pool.length;
  return pool[index];
};

const AIStylist = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text: "Welcome to your AI Stylist. Ask for outfit ideas, trend direction, or color help, and I’ll respond with something more specific than a generic canned line.",
    },
  ]);

  const submitMessage = (nextMessage: string) => {
    const trimmed = nextMessage.trim();
    if (!trimmed) return;

    setChat((prev) => [
      ...prev,
      { role: "user", text: trimmed },
      { role: "assistant", text: buildReply(trimmed) },
    ]);
    setMessage("");
  };

  return (
    <section id="ai-stylist" className="py-24 px-6 bg-noir-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full mb-6">
            <Sparkles size={14} className="text-gold" />
            <span className="text-gold text-xs font-body tracking-widest uppercase">
              AI-Powered
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">
            Your Personal <span className="italic text-gradient-gold">AI Stylist</span>
          </h2>
          <p className="text-cream-muted font-body max-w-md mx-auto">
            Get instant fashion advice, trend analysis, and personalized style guidance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {suggestions.map((s, i) => (
              <motion.button
                key={s.title}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="w-full p-5 bg-card border border-border rounded-sm hover:border-gold/30 transition-all cursor-pointer group text-left"
                onClick={() => submitMessage(s.prompt)}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gold/10 rounded-sm text-gold group-hover:bg-gold/20 transition-colors">
                    <s.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-cream font-semibold mb-1">
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body">
                      {s.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-sm flex flex-col h-[500px]"
          >
            <div className="p-4 border-b border-border flex items-center gap-2">
              <Sparkles size={16} className="text-gold" />
              <span className="text-cream font-body text-sm font-medium">AI Stylist Chat</span>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chat.map((msg, i) => (
                <motion.div
                  key={`${msg.role}-${i}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-sm text-sm font-body leading-6 ${
                      msg.role === "user"
                        ? "bg-gold text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && submitMessage(message)}
                  placeholder="Ask your AI stylist..."
                  className="flex-1 bg-muted text-cream placeholder:text-muted-foreground text-sm font-body px-4 py-3 rounded-sm border border-border focus:border-gold/50 focus:outline-none transition-colors"
                />
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => submitMessage(message)}
                  className="px-4 py-3 bg-gold text-primary-foreground rounded-sm"
                >
                  <Send size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIStylist;

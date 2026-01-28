import { motion } from "framer-motion";

const features = [
  {
    title: "Prayer & Qibla",
    description: "IACAD times for Dubai. Location-based worldwide. Track prayers and find Qibla.",
  },
  {
    title: "Quran & Khatma",
    description: "Full Mushaf, 604 pages. Khatma roadmap with reciters and translations.",
  },
  {
    title: "Dua & Dhikr",
    description: "Morning & evening adhkar. Occasion-based duas with digital tasbih.",
  },
  {
    title: "Today",
    description: "Hijri date, daily hadith, daily Quran, and inspirational quotes.",
  },
  {
    title: "Privacy First",
    description: "No account required. Your data stays on your device.",
  },
  {
    title: "Built with Care",
    description: "Calm UI, nature-inspired design. From Dubai with love.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

export const ZekrFeatures = () => {
  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-6">
            Everything you need
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl font-light">One app. Complete spiritual companion.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants} className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-light">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};


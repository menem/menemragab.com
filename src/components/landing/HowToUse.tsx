import { motion } from "framer-motion";

const steps = [
  { title: "Download", description: "Get Zekr free from the App Store." },
  { title: "Open", description: "No account or sign-up required." },
  { title: "Explore", description: "Prayer times, Quran, Duas — all ready." },
  { title: "Personalize", description: "Set your location, favorite duas." },
  { title: "Stay connected", description: "Notifications for gentle reminders." },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

export const ZekrHowToUse = () => {
  return (
    <section id="how-to-use" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-6">
            Get started
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl font-light">Simple as it should be.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {steps.map((step, index) => (
            <motion.div key={step.title} variants={itemVariants} className="flex items-start gap-6 group">
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gold text-primary-foreground flex items-center justify-center font-semibold text-sm">
                {index + 1}
              </span>
              <div className="pt-1">
                <h3 className="text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-muted-foreground font-light">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};


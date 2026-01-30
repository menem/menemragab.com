import { motion } from "framer-motion";

export const ZekrCallToAction = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-background to-gold-light/20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-6">
          Start your journey
        </h2>
        <p className="text-muted-foreground text-lg sm:text-xl font-light mb-12">Your spiritual companion awaits.</p>

        <motion.a
          href="https://apps.apple.com/app/al-zekr-your-muslim-companion/id6757874634"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
            alt="Download on the App Store"
            className="h-14 sm:h-16"
          />
        </motion.a>
      </motion.div>
    </section>
  );
};


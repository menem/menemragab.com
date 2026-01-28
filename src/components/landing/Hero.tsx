import { motion } from "framer-motion";

export const ZekrHero = () => {
  return (
    <section id="top" className="min-h-[100svh] flex flex-col items-center justify-center pt-24 pb-16 px-6">
      <div className="text-center max-w-4xl mx-auto">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-gold text-xs font-medium tracking-[0.3em] uppercase mb-8"
        >
          From Dubai to the world
        </motion.p>

        {/* Headline */}
        <h1 className="mb-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight leading-[0.95]"
          >
            Your Muslim
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-amiri text-gold tracking-tight leading-[1.1] mt-2"
          >
            Companion
          </motion.span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted-foreground text-lg sm:text-xl max-w-xl mx-auto mb-12 leading-relaxed font-light"
        >
          Prayer times. Quran. Khatma. Duas &amp; Dhikr.
          <br className="hidden sm:block" />
          <span className="text-foreground/70">All in one calm, beautifully designed app.</span>
        </motion.p>

        {/* App Store CTA */}
        <motion.a
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          href="https://apps.apple.com/app/zekr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-transform duration-300 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
            alt="Download on the App Store"
            className="h-14 sm:h-16"
          />
        </motion.a>
      </div>
    </section>
  );
};


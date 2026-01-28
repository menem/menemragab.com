import { motion } from "framer-motion";

const screenshots = [
  {
    name: "Tasbih",
    caption: "Digital Tasbih – Subḥān Allāh counter",
    src: "/zekr-screenshots/tasbih.jpg",
  },
  {
    name: "Today",
    caption: "Today – daily prayers, surah and hadith",
    src: "/zekr-screenshots/today.jpg",
  },
  {
    name: "Pray",
    caption: "Pray – prayer overview and Qibla",
    src: "/zekr-screenshots/pray.jpg",
  },
  {
    name: "Quran",
    caption: "Quran – full Mushaf reading experience",
    src: "/zekr-screenshots/quran.jpg",
  },
  {
    name: "Player",
    caption: "Quran audio player with immersive background",
    src: "/zekr-screenshots/player.jpg",
  },
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
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

export const ZekrScreenshots = () => {
  return (
    <section id="screenshots" className="py-32 bg-secondary/30">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-6">
            See Zekr in action
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl font-light">Designed for clarity and peace</p>
        </motion.div>
      </div>

      <div className="overflow-x-auto pb-6 scrollbar-hide">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex gap-6 px-6 min-w-max justify-center"
        >
          {screenshots.map((screenshot) => (
            <motion.div key={screenshot.name} variants={itemVariants} className="flex flex-col items-center">
              <div className="w-56 sm:w-64 bg-card rounded-[2rem] p-2 shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <img
                  src={screenshot.src}
                  alt={screenshot.caption}
                  className="rounded-[1.75rem] w-full"
                />
              </div>
              <p className="text-muted-foreground text-sm mt-5 text-center font-light">{screenshot.caption}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-muted-foreground text-xs mt-10 px-6"
      >
        Replace with your app screenshots
      </motion.p>
    </section>
  );
};


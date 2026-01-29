import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import { motion } from "framer-motion";

interface Project {
  year: number;
  title: string;
  role?: string;
  company?: string;
  description: string;
  link?: string;
  status?: "acquired" | "current" | "completed";
}

const projects: Project[] = [
  {
    year: 2024,
    title: "Mumzworld",
    role: "Senior Product Manager",
    company: "Mumzworld",
    description: "Leading Mother and Baby Ecommerce website in the MENA and Gulf area. Focusing on customer facing products.",
    link: "https://www.mumzworld.com",
    status: "current",
  },
  {
    year: 2024,
    title: "Stoic Calendar",
    role: "Founder",
    description: "iOS app that visualizes your life in weeks. A daily reminder that time is your most precious resource.",
    link: "/stoic-calendar",
    status: "current",
  },
  {
    year: 2023,
    title: "Al Zekr",
    role: "Founder",
    description: "A calm, beautifully designed Muslim companion app with prayer times, Quran, Khatma, duas and dhikr.",
    link: "/alzekr",
    status: "current",
  },
  {
    year: 2021,
    title: "Wakecap",
    role: "Product Lead",
    company: "Wakecap",
    description: "Led the product team to tackle real-world construction challenges with innovative technology solutions.",
    status: "completed",
  },
  {
    year: 2018,
    title: "Eventtus",
    role: "Product Manager",
    company: "Eventtus",
    description: "Innovated the events industry with technology solutions. Company was acquired by Bevy.",
    status: "acquired",
  },
  {
    year: 2015,
    title: "Asknative",
    role: "Co-founder",
    company: "Asknative",
    description: "Co-founded and developed a world-class social travel app, building it right from home.",
    status: "completed",
  },
  {
    year: 2012,
    title: "Kngine",
    role: "Product Manager",
    company: "Kngine",
    description: "Worked on innovative search and AI technology. Company was acquired by Samsung.",
    status: "acquired",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Projects = () => {
  const groupedByYear = projects.reduce((acc, project) => {
    if (!acc[project.year]) {
      acc[project.year] = [];
    }
    acc[project.year].push(project);
    return acc;
  }, {} as Record<number, Project[]>);

  const years = Object.keys(groupedByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <>
      <Helmet>
        <title>Projects - Menem Ragab</title>
        <meta
          name="description"
          content="A yearly roadmap of Menem Ragab's accomplishments, projects, and career milestones."
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12 sm:mb-16 md:mb-20"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Projects</h1>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl">
                A timeline of my journey building products, leading teams, and creating impact across different industries.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              {/* Timeline line */}
              <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />

              <div className="space-y-12 sm:space-y-16">
                {years.map((year) => (
                  <div key={year} className="relative">
                    {/* Year label */}
                    <div className="flex items-center mb-6 sm:mb-8">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-foreground text-background flex items-center justify-center text-sm sm:text-base font-semibold z-10 relative">
                        {year}
                      </div>
                      <div className="hidden sm:block w-6 h-0.5 bg-border ml-2" />
                    </div>

                    {/* Projects for this year */}
                    <div className="space-y-6 sm:space-y-8 sm:ml-12">
                      {groupedByYear[year].map((project, index) => (
                        <motion.div
                          key={`${year}-${index}`}
                          variants={itemVariants}
                          className="group"
                        >
                          <div className="bg-card border border-border/50 rounded-xl p-6 sm:p-8 hover:border-foreground/20 transition-all duration-300 hover:shadow-sm">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-3">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                                    {project.link ? (
                                      <a
                                        href={project.link}
                                        className="hover:opacity-70 transition-opacity"
                                        {...(project.link.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                      >
                                        {project.title}
                                      </a>
                                    ) : (
                                      project.title
                                    )}
                                  </h3>
                                  {project.status === "acquired" && (
                                    <span className="px-2 py-0.5 text-xs font-medium bg-gold/10 text-gold rounded-full">
                                      Acquired
                                    </span>
                                  )}
                                  {project.status === "current" && (
                                    <span className="px-2 py-0.5 text-xs font-medium bg-green-500/10 text-green-600 dark:text-green-400 rounded-full">
                                      Current
                                    </span>
                                  )}
                                </div>
                                {(project.role || project.company) && (
                                  <p className="text-sm sm:text-base text-muted-foreground">
                                    {project.role}
                                    {project.role && project.company && " · "}
                                    {project.company}
                                  </p>
                                )}
                              </div>
                            </div>
                            <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                              {project.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Projects;

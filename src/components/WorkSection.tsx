import { ArrowUpRight } from "lucide-react";

interface WorkItem {
  title: string;
  description: string;
  role: string;
  link?: string;
  image?: string;
}

const workItems: WorkItem[] = [
  {
    title: "Project Alpha",
    description: "Led the development of a B2B SaaS platform that helped companies increase their conversion rates by 40%.",
    role: "Product Lead",
    link: "#",
  },
  {
    title: "Project Beta",
    description: "Designed and shipped a mobile-first experience used by 100K+ users daily.",
    role: "Product Manager",
    link: "#",
  },
  {
    title: "Project Gamma",
    description: "Built growth systems that scaled the user base from 10K to 500K in 18 months.",
    role: "Growth PM",
    link: "#",
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-20 border-t border-border">
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight mb-12">
          Selected Work
        </h2>

        <div className="space-y-8">
          {workItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group block p-6 md:p-8 bg-card rounded-xl border border-border hover:border-foreground/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                    {item.role}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl font-medium mt-2 group-hover:underline underline-offset-4">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0 mt-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;

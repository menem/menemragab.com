import { useEffect, useRef, useState } from "react";
import { Calendar, Target, Palette, Shield } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Life calendar",
    description: "Your entire life visualized as a grid of weeks. See how far you've come and how much lies ahead."
  },
  {
    icon: Target,
    title: "Goal tracking",
    description: "Add goals with target dates. Watch a second grid grow—weeks or days left until each milestone."
  },
  {
    icon: Palette,
    title: "14 beautiful themes",
    description: "From Stoic Marble to Midnight Black. Choose a style that resonates with you."
  },
  {
    icon: Shield,
    title: "Privacy-first",
    description: "All data stays on your device. No accounts, no cloud, no tracking. Just you and the grid."
  }
];

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 md:py-32 bg-secondary/30"
    >
      <div className="container-narrow">
        <div className={`text-center mb-16 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
            Designed for daily reflection
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Every feature serves one purpose: helping you see time clearly.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`group p-6 md:p-8 rounded-2xl bg-card border border-border/50 hover:border-gold/30 transition-all duration-300 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <feature.icon className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-serif text-xl font-medium mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

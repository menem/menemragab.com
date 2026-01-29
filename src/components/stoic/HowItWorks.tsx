import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Enter your birth date",
    description: "Tell us when you were born and how long you expect to live."
  },
  {
    number: "02", 
    title: "See your life in weeks",
    description: "The app draws a grid—one dot per week. Past weeks filled. The current one highlighted."
  },
  {
    number: "03",
    title: "Set as your wallpaper",
    description: "Export your calendar as a beautiful lock screen wallpaper."
  },
  {
    number: "04",
    title: "It updates daily",
    description: "Every morning at 6 AM, your wallpaper refreshes automatically."
  }
];

const HowItWorks = () => {
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
      id="how-it-works"
      className="py-24 md:py-32"
    >
      <div className="container-narrow">
        <div className={`text-center mb-16 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
            How it works
          </h2>
          <p className="text-muted-foreground text-lg">
            Simple. Intentional. No account required.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className={`relative opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="flex gap-6">
                <span className="text-gold/40 font-serif text-4xl font-light">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-serif text-xl font-medium mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

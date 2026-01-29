import { useEffect, useRef, useState } from "react";

const Philosophy = () => {
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
      { threshold: 0.2 }
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
        <div className={`max-w-2xl mx-auto text-center opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}>
          <div className="section-divider mb-12" />
          
          <blockquote className="font-serif text-xl md:text-2xl text-foreground/90 mb-8 leading-relaxed">
            "Let us prepare our minds as if we'd come to the very end of life. Let us postpone nothing."
          </blockquote>
          
          <cite className="text-sm text-muted-foreground">
            — Seneca, <span className="italic">Moral Letters to Lucilius</span>
          </cite>
        </div>
        
        <div className={`max-w-2xl mx-auto mt-16 space-y-6 text-center opacity-0 ${isVisible ? 'animate-fade-in-up animation-delay-200' : ''}`}>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We forget how finite our time is. The Stoics called it <em>memento mori</em>—remember you must die. Not to frighten, but to focus.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Stoic Calendar turns that ancient wisdom into something you see every time you reach for your phone. A quiet reminder to use your weeks well.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;

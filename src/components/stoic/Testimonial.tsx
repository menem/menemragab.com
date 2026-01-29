import { useEffect, useRef, useState } from "react";
import PhoneMockup from "./PhoneMockup";

const Testimonial = () => {
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
      className="py-24 md:py-32"
    >
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Mockup */}
          <div className={`order-2 lg:order-1 opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}>
            <PhoneMockup />
          </div>
          
          {/* Testimonial */}
          <div className={`order-1 lg:order-2 text-center lg:text-left opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}>
            <div className="mb-8">
              <svg className="w-12 h-12 text-gold/30 mx-auto lg:mx-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            
            <blockquote className="font-serif text-2xl md:text-3xl text-foreground/90 mb-6 leading-relaxed">
              Every glance at my phone is a reminder to live intentionally. No other app has changed my daily perspective like this.
            </blockquote>
            
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-medium">
                M
              </div>
              <div className="text-left">
                <p className="text-sm font-medium">Marcus T.</p>
                <p className="text-xs text-muted-foreground">App Store Review</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

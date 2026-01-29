import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import PhoneMockup from "./PhoneMockup";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 pb-16 md:pb-24 marble-texture overflow-hidden"
    >
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <p 
              className={`latin-phrase text-lg mb-4 opacity-0 ${isVisible ? 'animate-fade-in-up' : ''}`}
            >
              Memento Mori
            </p>
            
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-6 opacity-0 ${isVisible ? 'animate-fade-in-up animation-delay-100' : ''}`}
            >
              Your life, in weeks.
              <br />
              <span className="text-gold">On your lock screen.</span>
            </h1>
            
            <p 
              className={`text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 opacity-0 ${isVisible ? 'animate-fade-in-up animation-delay-200' : ''}`}
            >
              One dot per week. A daily reminder that time is your most precious resource.
            </p>
            
            <div 
              className={`flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start opacity-0 ${isVisible ? 'animate-fade-in-up animation-delay-300' : ''}`}
            >
              <Button variant="stoic" size="xl" asChild>
                <a 
                  href="https://apps.apple.com/app/stoic-calendar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="gap-3"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Download on the App Store
                </a>
              </Button>
              
              <a 
                href="#how-it-works"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Learn more ↓
              </a>
            </div>
          </div>
          
          {/* Phone mockup */}
          <div 
            className={`relative opacity-0 ${isVisible ? 'animate-fade-in animation-delay-400' : ''}`}
          >
            <div className="animate-gentle-float">
              <PhoneMockup />
            </div>
            
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

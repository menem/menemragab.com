import LifeCalendarGrid from "./LifeCalendarGrid";

interface PhoneMockupProps {
  className?: string;
}

const PhoneMockup = ({ className = "" }: PhoneMockupProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Phone frame */}
      <div className="relative w-[280px] md:w-[320px] mx-auto">
        {/* Outer frame */}
        <div className="relative bg-gradient-to-b from-stone to-background rounded-[3rem] p-[3px] shadow-2xl shadow-black/40">
          {/* Inner bezel */}
          <div className="bg-background rounded-[2.8rem] p-3">
            {/* Screen */}
            <div className="relative bg-[#1a1a1a] rounded-[2.2rem] overflow-hidden aspect-[9/19.5]">
              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[32px] bg-black rounded-full z-10" />
              
              {/* Lock screen content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-16 pb-8">
                {/* Time */}
                <div className="text-center mb-8">
                  <p className="text-[3.5rem] font-light text-foreground/90 tracking-tight leading-none">
                    9:41
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Monday, January 29
                  </p>
                </div>
                
                {/* Life Calendar Widget */}
                <div className="bg-secondary/80 backdrop-blur-sm rounded-2xl p-4 w-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      Your Life in Weeks
                    </span>
                    <span className="text-xs text-gold font-medium">
                      Week 1,561
                    </span>
                  </div>
                  
                  <LifeCalendarGrid compact className="mb-3" />
                  
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">37.5% lived</span>
                    <span className="text-muted-foreground">2,599 weeks ahead</span>
                  </div>
                </div>
                
                {/* Latin phrase */}
                <p className="latin-phrase text-sm mt-6 opacity-70">
                  Memento Mori
                </p>
              </div>
              
              {/* Home indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-foreground/30 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;

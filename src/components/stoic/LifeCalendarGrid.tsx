import { useMemo } from "react";

interface LifeCalendarGridProps {
  totalWeeks?: number;
  filledWeeks?: number;
  currentWeek?: number;
  className?: string;
  compact?: boolean;
}

const LifeCalendarGrid = ({ 
  totalWeeks = 4160, // ~80 years
  filledWeeks = 1560, // ~30 years
  currentWeek = 1561,
  className = "",
  compact = false
}: LifeCalendarGridProps) => {
  const visibleWeeks = compact ? 520 : 260; // Show subset for visual effect
  const startWeek = Math.max(0, currentWeek - Math.floor(visibleWeeks / 2));
  
  const dots = useMemo(() => {
    return Array.from({ length: visibleWeeks }, (_, i) => {
      const weekNumber = startWeek + i;
      if (weekNumber < filledWeeks) return "filled";
      if (weekNumber === currentWeek) return "current";
      return "empty";
    });
  }, [visibleWeeks, startWeek, filledWeeks, currentWeek]);

  return (
    <div 
      className={`grid gap-[2px] ${compact ? 'grid-cols-[repeat(26,1fr)]' : 'grid-cols-[repeat(52,1fr)]'} ${className}`}
      role="img"
      aria-label="Life calendar showing weeks lived and weeks remaining"
    >
      {dots.map((type, index) => (
        <div
          key={index}
          className={`
            aspect-square rounded-full transition-all duration-300
            ${type === "filled" ? "bg-muted-foreground/50" : ""}
            ${type === "current" ? "bg-gold animate-subtle-pulse" : ""}
            ${type === "empty" ? "bg-muted/40" : ""}
          `}
          style={{ 
            width: compact ? '3px' : '4px',
            height: compact ? '3px' : '4px'
          }}
        />
      ))}
    </div>
  );
};

export default LifeCalendarGrid;

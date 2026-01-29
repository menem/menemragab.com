import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container-narrow py-4 flex items-center justify-between">
        <Link to="/stoic-calendar" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-2xl bg-gold flex items-center justify-center shadow-md shadow-black/10 ring-1 ring-black/5 overflow-hidden">
            <img
              src="/Stoic-Calendar-AppIcon.png"
              alt="Stoic Calendar app icon"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-serif text-xl font-medium tracking-tight text-foreground">Stoic Calendar</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <a 
            href="#how-it-works" 
            className="hidden sm:inline-block text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            How it works
          </a>
          <a 
            href="#privacy" 
            className="hidden sm:inline-block text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy
          </a>
          <Button variant="stoic" size="sm" asChild>
            <a 
              href="https://apps.apple.com/us/app/stoic-calendar/id6758130312" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Download
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

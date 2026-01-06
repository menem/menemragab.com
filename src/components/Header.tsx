import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="container max-w-4xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link 
            to="/" 
            className="font-serif text-xl font-medium tracking-tight hover:opacity-70 transition-opacity"
          >
            Your Name
          </Link>
          
          <div className="flex items-center gap-8">
            <a 
              href="#work" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Work
            </a>
            <a 
              href="#about" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="mailto:hello@example.com"
              className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

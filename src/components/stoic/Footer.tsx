import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="privacy" className="py-12 md:py-16 border-t border-border/50">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <p className="font-serif text-lg mb-2">Stoic Calendar</p>
            <p className="text-sm text-muted-foreground">
              All data stays on your device. No tracking. No accounts.
            </p>
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <a 
              href="mailto:me@menemragab.com?subject=Stoic%20Calendar%20Support" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Support
            </a>
            <Link 
              to="/stoic-calendar/privacy" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Stoic Calendar. Made with intention.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

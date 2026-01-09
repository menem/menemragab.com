import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github } from "lucide-react";
const Header = () => {
  return <header className="border-b border-border">
      <div className="container max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl">🧑‍💻</span>
        </Link>
        
        {/* Center Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-foreground hover:underline underline-offset-4 font-medium">
            Home
          </Link>
          <Link to="/about" className="text-foreground hover:underline underline-offset-4">
            About
          </Link>
          <a className="text-foreground hover:underline underline-offset-4" href="https://menemragab.substack.com/">
            Newsletter
          </a>
          <a className="text-foreground hover:underline underline-offset-4" href="https://docsend.com/view/ixspg9n">
            Projects
          </a>
        </nav>

        {/* Right Side: Social + Contact */}
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/menem/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:opacity-70 transition-opacity">
            <Linkedin size={20} />
          </a>
          <a href="https://x.com/menemragab" target="_blank" rel="noopener noreferrer" className="text-foreground hover:opacity-70 transition-opacity">
            <Twitter size={20} />
          </a>
          <a href="https://github.com/menem/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:opacity-70 transition-opacity">
            <Github size={20} />
          </a>
          <a className="ml-2 bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity" href="mailto:menem@menemragab.com">
            ​Contact me     
          </a>
        </div>
      </div>
    </header>;
};
export default Header;
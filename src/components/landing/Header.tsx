import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "App", href: "#screenshots" },
  { label: "How it works", href: "#how-to-use" },
];

export const ZekrHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/30">
      <nav className="max-w-5xl mx-auto flex items-center justify-between h-14 px-6" aria-label="Zekr main navigation">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-2xl bg-gold flex items-center justify-center shadow-md shadow-black/10 ring-1 ring-black/5 overflow-hidden">
            <img
              src="/Zekr-AppIcon.png"
              alt="Zekr app icon"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-semibold text-foreground">Zekr</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://apps.apple.com/app/zekr"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Download
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-14 bg-background/98 backdrop-blur-xl">
          <div className="flex flex-col items-center gap-8 pt-16">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground text-lg"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://apps.apple.com/app/zekr"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-foreground text-background rounded-full text-base font-medium"
            >
              Download
            </a>
          </div>
        </div>
      )}
    </header>
  );
};


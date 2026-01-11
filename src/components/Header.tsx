import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { href: "https://menemragab.substack.com/", label: "Newsletter", external: true },
    { href: "https://docsend.com/view/ixspg9n", label: "Projects", external: true },
  ];

  const socialLinks = [
    { href: "https://www.linkedin.com/in/menem/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://x.com/menemragab", icon: Twitter, label: "Twitter" },
    { href: "https://github.com/menem/", icon: Github, label: "GitHub" },
  ];

  return (
    <header className="border-b border-border sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-3 sm:py-4 md:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <span className="text-xl sm:text-2xl">🧑‍💻</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => 
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground hover:underline underline-offset-4 font-medium transition-opacity text-sm xl:text-base"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.to!}
                  className="text-foreground hover:underline underline-offset-4 font-medium transition-opacity text-sm xl:text-base"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop: Social + Contact */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:opacity-70 transition-opacity p-1.5"
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </a>
              );
            })}
            <a
              className="bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity rounded-md whitespace-nowrap"
              href="mailto:menem@menemragab.com"
            >
              Contact me
            </a>
          </div>

          {/* Mobile: Social Icons */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-3">
            {socialLinks.slice(0, 2).map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:opacity-70 transition-opacity p-1.5"
                  aria-label={social.label}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden ml-2">
              <button
                className="text-foreground hover:opacity-70 transition-opacity p-1.5"
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <nav className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <SheetClose key={link.label} asChild>
                    {link.external ? (
                      <a
                        href={link.href}
                        className="text-foreground hover:underline underline-offset-4 font-medium text-lg transition-opacity"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to!}
                        className="text-foreground hover:underline underline-offset-4 font-medium text-lg transition-opacity"
                      >
                        {link.label}
                      </Link>
                    )}
                  </SheetClose>
                ))}
                
                <div className="pt-6 border-t border-border">
                  <div className="flex items-center gap-4 mb-6">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:opacity-70 transition-opacity p-2"
                          aria-label={social.label}
                        >
                          <Icon size={22} />
                        </a>
                      );
                    })}
                  </div>
                  <SheetClose asChild>
                    <a
                      className="inline-block w-full bg-foreground text-background px-4 py-3 text-sm font-medium hover:opacity-90 transition-opacity rounded-md text-center"
                      href="mailto:menem@menemragab.com"
                    >
                      Contact me
                    </a>
                  </SheetClose>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
export default Header;

import { Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-12 sm:py-16">
      <div className="flex items-center justify-center gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-border">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:opacity-70 transition-opacity p-1.5"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://x.com/menemragab"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:opacity-70 transition-opacity p-1.5"
          aria-label="Twitter"
        >
          <Twitter size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

import { Heart } from "lucide-react";

const footerLinks = [
  { label: "App Store", href: "https://apps.apple.com/app/al-zekr-your-muslim-companion/id6757874634", external: true },
  { label: "Support", href: "/alzekr/support", external: false },
  { label: "Privacy", href: "/alzekr/privacy", external: false },
];

export const ZekrFooter = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <span className="font-semibold text-lg">Zekr</span>
            <p className="text-background/50 text-sm mt-1">Your Muslim Companion</p>
          </div>

          <div className="flex items-center gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-background/50 hover:text-background transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/10 text-center">
          <p className="text-background/30 text-sm flex items-center justify-center gap-1.5">
            From Dubai to the world, with <Heart className="w-3 h-3 text-heart fill-heart" aria-hidden="true" />
          </p>
        </div>
      </div>
    </footer>
  );
};


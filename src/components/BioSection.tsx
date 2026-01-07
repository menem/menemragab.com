import profileImage from "@/assets/profile.png";
import { Linkedin, Twitter } from "lucide-react";
const BioSection = () => {
  return <section className="py-16 md:py-24">
      <div className="container max-w-4xl mx-auto px-6 text-center">
        {/* Main Heading */}
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal mb-8">
          Hi, I'm Menem 👋
        </h1>

        {/* One-liner Bio */}
        <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-20">
          I'm a product manager who builds{" "}
          <a href="#" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
            digital products
          </a>
          ,{" "}
          <a href="#" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
            write about Product Management 
          </a>
          , and generally just try to be helpful.
        </p>

        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-16">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img alt="Menem Ragab" className="w-48 h-48 md:w-56 md:h-56 object-cover object-top rounded-sm" src="/lovable-uploads/4045a984-5152-437c-9b79-83c9d367bdf6.jpg" />
          </div>

          {/* Newsletter CTA */}
          <div className="text-left max-w-sm">
            <h2 className="font-serif text-2xl md:text-3xl mb-4">
              Let's connect
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">Dubai based Product manager crafting digital products that bring joy and empower users around the GCC and internationally. </p>
            <a href="mailto:hello@example.com" className="inline-block bg-foreground text-background px-6 py-3 font-medium hover:opacity-90 transition-opacity">
              Get in Touch
            </a>
          </div>
        </div>

        {/* Footer Social Icons */}
        <div className="flex items-center justify-center gap-4 pt-8 border-t border-border">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:opacity-70 transition-opacity">
            <Linkedin size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:opacity-70 transition-opacity">
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </section>;
};
export default BioSection;
const AboutSection = () => {
  return (
    <section id="about" className="py-20 border-t border-border">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          <div className="md:col-span-1">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-secondary overflow-hidden">
              {/* Placeholder for profile image */}
              <div className="w-full h-full flex items-center justify-center text-muted-foreground font-serif text-4xl">
                YN
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight mb-6">
              About Me
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a product manager passionate about building tools that help people do their best work. 
                With experience at companies like <span className="text-foreground font-medium">Company A</span> and 
                <span className="text-foreground font-medium"> Company B</span>, I've led teams shipping products 
                used by millions.
              </p>
              <p>
                I believe great products come from deeply understanding user problems, moving fast, and 
                obsessing over the details that matter.
              </p>
              <p>
                When I'm not building, you'll find me writing about product management, mentoring 
                aspiring PMs, or exploring new cities.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-4">
                Previously at
              </h3>
              <div className="flex flex-wrap gap-6 text-foreground font-medium">
                <span>Company A</span>
                <span>Company B</span>
                <span>Company C</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

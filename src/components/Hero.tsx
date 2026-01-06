const Hero = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container max-w-4xl mx-auto px-6 text-center">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight animate-fade-in">
          Hi, I'm Your Name 👋
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-delay">
          I build <a href="#work" className="link-underline text-foreground">products</a>, 
          write about <a href="#" className="link-underline text-foreground">growth</a>, 
          and help teams ship faster.
        </p>

        <div className="mt-12 flex flex-col items-center gap-6 animate-fade-in-delay-2">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              View My Work
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-border text-foreground px-8 py-3.5 rounded-full font-medium hover:bg-secondary transition-colors"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

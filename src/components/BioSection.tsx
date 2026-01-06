import profileImage from "@/assets/profile.png";

const BioSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="bg-card border border-border rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img 
                src={profileImage}
                alt="Menem Ragab"
                className="w-64 h-80 md:w-72 md:h-96 object-cover object-top"
              />
            </div>

            {/* Bio Text */}
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                Hello there! 👋 I'm Menem Ragab, an Egyptian expat 🇪🇬 who proudly calls Dubai 🇦🇪 home. My passion lies in crafting digital products that not only bring joy but also empower users with superpowers of their own! 🦸‍♂️🦸
              </p>

              <p>
                In this space, I'll be sharing my treasure trove of experience nuggets, ranging from fundamental concepts to the more perplexing challenges I encounter in product management. My goal is to give back the knowledge I've gained over the years and, in turn, learn from the insights and perspectives of my readers.
              </p>

              <p>
                With a career mostly spent in the vibrant world of startups, I've had the pleasure of working at{" "}
                <a href="#" className="underline underline-offset-4 hover:opacity-70 transition-opacity">Kngine</a>{" "}
                (acquired by Samsung), co-founding{" "}
                <a href="#" className="underline underline-offset-4 hover:opacity-70 transition-opacity">asknative</a>{" "}
                (where we developed a world-class social travel app right from my home), innovating the events industry at{" "}
                <a href="#" className="underline underline-offset-4 hover:opacity-70 transition-opacity">Eventtus</a>{" "}
                (acquired by Bevy), leading the product team at{" "}
                <a href="#" className="underline underline-offset-4 hover:opacity-70 transition-opacity">Wakecap</a>{" "}
                to tackle real-world construction challenges, and currently contributing to{" "}
                <a href="#" className="underline underline-offset-4 hover:opacity-70 transition-opacity">Mumzworld</a>{" "}
                (acquired by Tamer group), where we empower mothers to ensure the brightest futures for their children through exceptional shopping experiences.
              </p>

              <p>
                When I'm not immersed in product development, you'll find me enjoying precious moments with my family and my two beautiful daughters. I practice Brazilian Jiu-Jitsu every night, and I try to squeeze in some CrossFit whenever I can. My ideal weekend involves barbecuing in the serene desert, embarking on hiking adventures to test my survival skills, and cooking up a storm for friends.
              </p>

              <p>
                Join me on this journey as we explore the exciting world of product management together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;

import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
const About = () => {
  return (
    <>
      <Helmet>
        <title>About - Menem Ragab</title>
        <meta name="description" content="Learn more about Menem Ragab - Product Manager, Engineer, and Father based in Dubai." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12">About</h1>

          {/* About me section */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">About me</h2>
            <div className="text-foreground/80 leading-relaxed space-y-4 text-sm sm:text-base">
              <p>
                Hello there! 👋 I'm Menem Ragab, an Egyptian expat 🇪🇬 who proudly calls Dubai 🇦🇪 home. My passion lies in crafting digital products that not only bring joy but also empower users with superpowers of their own! 🦸🦸‍♀️
              </p>
              <p>
                In this space, I'll be sharing my treasure trove of experience nuggets, ranging from fundamental concepts to the more perplexing challenges I encounter in product management. My goal is to give back the knowledge I've gained over the years and, in turn, learn from the insights and perspectives of my readers.
              </p>
              <p>
                With a career mostly spent in the vibrant world of startups, I've had the pleasure of working at Kngine (acquired by Samsung), co-founding asknative (where we developed a world-class social travel app right from my home), innovating the events industry at Eventtus (acquired by Bevy), leading the product team at Wakecap to tackle real-world construction challenges, and currently contributing to Mumzworld (acquired by Tamer group), where we empower mothers to ensure the brightest futures for their children through exceptional shopping experiences.
              </p>
              <p>
                When I'm not immersed in product development, you'll find me enjoying precious moments with my family and my two beautiful daughters. I practice Brazilian Jiu-Jitsu every night, and I try to squeeze in some CrossFit whenever I can. My ideal weekend involves barbecuing in the serene desert, embarking on hiking adventures to test my survival skills, and cooking up a storm for friends.
              </p>
              <p>
                Join me on this journey as we explore the exciting world of product management together!
              </p>
              <p>
                Other than that I love doing crossfit, and weightlifting this is my daily therapy in the iron paradise, i love coaching as well as i am a L1-Crossfit trainer, but sadly in the past 3 years i wasn't able to put in the time. but probably these are the two subject i would be able to hold a more than 2 sentences talks about.
              </p>
            </div>
          </section>

          {/* Currently Working on section */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">I am Currently Working on</h2>
            <ol className="list-decimal list-inside space-y-4 sm:space-y-5 text-foreground/80 text-sm sm:text-base leading-relaxed pl-2">
              <li>
                <a href="https://www.mumzworld.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
                  Mumzworld
                </a>
                , which is the leading Mother and Baby Ecommerce website in the MENA and Gulf area, I work as a Senior Product Manager, focusing on customer facing products
              </li>
              <li>
                Writing for this{" "}
                <a href="https://menemragab.substack.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
                  blog
                </a>
              </li>
              <li>
                <a href="https://www.meetup.com/dubai-product-community/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
                  Product school Dubai Product Community
                </a>
                : We host monthly events around dubai for product managers and aspiring product managers to share knowledge and connect together.
              </li>
            </ol>
          </section>

          {/* Recent Certifications section */}
          <section className="mb-10 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">Recent Certifications</h2>
            <div className="space-y-6 sm:space-y-8">
              {/* PLC Certification */}
              <div className="rounded-2xl border bg-[#F9FAFC] text-card-foreground p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
                  {/* Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-[#1a1a1a] border-4 border-[#d4af37] rounded-lg flex flex-col items-center justify-center p-2 shadow-lg">
                      <div className="text-[8px] sm:text-[9px] md:text-[10px] text-white/80 font-semibold uppercase tracking-wide">PRODUCT SCHOOL</div>
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white my-1">PLC</div>
                      <div className="text-[7px] sm:text-[8px] md:text-[9px] text-white/80 font-semibold uppercase">CERTIFIED</div>
                      <div className="flex gap-0.5 mt-1">
                        <span className="text-[10px] text-white">★</span>
                        <span className="text-[10px] text-white">★</span>
                      </div>
                    </div>
                  </div>
                  {/* Description */}
                  <div className="flex-1 text-foreground/80 text-sm sm:text-base">
                    <h3 className="font-semibold text-foreground mb-2 text-base sm:text-lg">Product Leader Certificate</h3>
                    <p className="leading-relaxed">
                      Product School's Product Leader Certificate is a part-time program for professionals with strong technical or business backgrounds who want to delve deeper into detailed Product Management at software-based companies. You will learn the multi-disciplinary skills and tools to make you an effective product manager, ready to lead agile teams to successfully go-to-market. Go beyond the launch to leverage data and metrics to champion your software Product.
                    </p>
                  </div>
                </div>
              </div>

              {/* PMC Certification */}
              <div className="rounded-2xl border bg-[#F9FAFC] text-card-foreground p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
                  {/* Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-[#1a1a1a] border-4 border-[#14b8a6] rounded-lg flex flex-col items-center justify-center p-2 shadow-lg">
                      <div className="text-[8px] sm:text-[9px] md:text-[10px] text-white/80 font-semibold uppercase tracking-wide">PRODUCT SCHOOL</div>
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white my-1">PMC</div>
                      <div className="text-[7px] sm:text-[8px] md:text-[9px] text-white/80 font-semibold uppercase">CERTIFIED</div>
                      <div className="flex gap-0.5 mt-1">
                        <span className="text-[10px] text-white">★</span>
                      </div>
                    </div>
                  </div>
                  {/* Description */}
                  <div className="flex-1 text-foreground/80 text-sm sm:text-base">
                    <h3 className="font-semibold text-foreground mb-2 text-base sm:text-lg">Product Manager Certificate</h3>
                    <p className="leading-relaxed">
                      The Product Manager Certificate is awarded after completion of our 8-week course that prepares students to successfully build software products with a team of designers and engineers. Students learn from real-world Product Managers at top tech companies such as Google, Facebook, LinkedIn, and Twitter.
                    </p>
                  </div>
                </div>
              </div>

              {/* ICP Certification */}
              <div className="rounded-2xl border bg-[#F9FAFC] text-card-foreground p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
                  {/* Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-[#1a1a1a] border-4 border-[#1e40af] rounded-lg flex flex-col items-center justify-center p-2 shadow-lg">
                      <div className="text-[7px] sm:text-[8px] md:text-[9px] text-white/80 font-bold uppercase tracking-tight mb-1">ICAgile</div>
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white my-1">ICP</div>
                      <div className="w-full bg-white/10 mt-1 py-0.5 px-1">
                        <div className="text-[6px] sm:text-[7px] md:text-[8px] text-white font-semibold uppercase text-center">CERTIFIED PROFESSIONAL</div>
                      </div>
                    </div>
                  </div>
                  {/* Description */}
                  <div className="flex-1 text-foreground/80 text-sm sm:text-base">
                    <h3 className="font-semibold text-foreground mb-2 text-base sm:text-lg">Certified Professional: Agile Fundamentals</h3>
                    <p className="leading-relaxed">
                      The ICP's learning outcomes focus on the Agile mindset, values, principles and foundational concepts. They are grounded in what it means to "be agile while doing agile" and achieve organizational agility without specific focus on any single agile methodology or framework (i.e. Scrum, kanban, XP, DSDM, SAFe, etc.).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Get in Touch section */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-foreground/80 text-sm sm:text-base leading-relaxed">
              Feel free to reach out via{" "}
              <a href="mailto:menem@menemragab.com" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
                email
              </a>
              {" "}or connect with me on{" "}
              <a href="https://www.linkedin.com/in/menem/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
                LinkedIn
              </a>
              {" "}or{" "}
              <a href="https://x.com/menemragab" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
                Twitter
              </a>
              .
            </p>
          </section>
          </div>
        </main>
      </div>
    </>
  );
};
export default About;
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
const About = () => {
  return <>
      <Helmet>
        <title>About - Menem Ragab</title>
        <meta name="description" content="Learn more about Menem Ragab - Product Manager, Engineer, and Father based in Dubai." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold mb-12">About</h1>

          {/* About me section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">About me</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">Hello there! 👋 I’m Menem Ragab, an Egyptian expat 🇪🇬 who proudly calls Dubai 🇦🇪 home. My passion lies in crafting digital products that not only bring joy but also empower users with superpowers of their own! 🦸🦸‍♀️


In this space, I’ll be sharing my treasure trove of experience nuggets, ranging from fundamental concepts to the more perplexing challenges I encounter in product management. My goal is to give back the knowledge I’ve gained over the years and, in turn, learn from the insights and perspectives of my readers.


With a career mostly spent in the vibrant world of startups, I’ve had the pleasure of working at Kngine (acquired by Samsung), co-founding asknative (where we developed a world-class social travel app right from my home), innovating the events industry at Eventtus (acquired by Bevy), leading the product team at Wakecap to tackle real-world construction challenges, and currently contributing to Mumzworld (acquired by Tamer group), where we empower mothers to ensure the brightest futures for their children through exceptional shopping experiences.


When I’m not immersed in product development, you’ll find me enjoying precious moments with my family and my two beautiful daughters. I practice Brazilian Jiu-Jitsu every night, and I try to squeeze in some CrossFit whenever I can. My ideal weekend involves barbecuing in the serene desert, embarking on hiking adventures to test my survival skills, and cooking up a storm for friends.


Join me on this journey as we explore the exciting world of product management together!</p>
            <p className="text-foreground/80 leading-relaxed">
              Other that I love doing crossfit, and weightlifting this is my daily therapy in the iron paradise, i love coaching as well as i am a L1-Crossfit trainer, but sadly in the past 3 years i wasn't able to put in the time. but probably these are the two subject i would be able to hold a more than 2 sentences talks about.
            </p>
          </section>

          {/* Currently Working on section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">I am Currently Working on</h2>
            <ol className="list-decimal list-inside space-y-4 text-foreground/80">
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

          {/* Get in Touch section */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-foreground/80">
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
        </main>
      </div>
    </>;
};
export default About;
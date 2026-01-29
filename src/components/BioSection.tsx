import profileImage from "@/assets/profile.png";
const BioSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 text-center">
        {/* Main Heading */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-normal mb-6 sm:mb-8 leading-tight">
          Hi, I'm Menem 👋
        </h1>

        {/* One-liner Bio */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20 lg:mb-24 px-4 sm:px-0">
          I'm a product manager who builds{" "}
          <a href="#" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
            digital products
          </a>
          ,{" "}
          <a href="#" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
            write about Product Management
          </a>
          , and generally just try to impact people's lives.
        </p>

        {/* Newsletter Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 mb-12 sm:mb-16 md:mb-20 px-4 sm:px-0">
          {/* Profile Image */}
          <div className="flex-shrink-0 w-44 h-44 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72">
            <img
              alt="Menem Ragab"
              className="w-full h-full object-cover object-top rounded-sm"
              src="/lovable-uploads/4045a984-5152-437c-9b79-83c9d367bdf6.jpg"
            />
          </div>

          {/* Newsletter CTA */}
          <div className="text-center sm:text-left max-w-md sm:max-w-lg md:max-w-xl">
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4">
              Let's connect
            </h2>
            <p className="text-muted-foreground mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">
              I love products that are well crafted to provide value and impact user lives with amazing performance. Learn more about my approach👇
            </p>
            <a
              className="inline-block bg-foreground text-background px-5 sm:px-6 py-2.5 sm:py-3 font-medium hover:opacity-90 transition-opacity rounded-md text-sm sm:text-base"
              href="https://hire.menemragab.com"
            >
              Let's work together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BioSection;
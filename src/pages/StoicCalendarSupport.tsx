import { Helmet } from "react-helmet-async";
import Navigation from "@/components/stoic/Navigation";
import Footer from "@/components/stoic/Footer";

const StoicCalendarSupport = () => {
  return (
    <>
      <Helmet>
        <title>Stoic Calendar – Support</title>
        <meta
          name="description"
          content="Get help with Stoic Calendar: FAQs, contact details, and how to report issues or request features."
        />
      </Helmet>

      <div className="stoic-calendar min-h-screen bg-background text-foreground">
        <Navigation />

        <main className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 pt-24 pb-16">
        <div className="max-w-3xl mx-auto space-y-10">
          <section>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Support</h1>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Stoic Calendar is built to be simple, reliable, and intentional. If something doesn&apos;t feel right or you have ideas to
              make it better, I&apos;d love to hear from you.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Contact</h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              The fastest way to reach me is by email:
            </p>
            <p className="text-sm sm:text-base">
              <a
                href="mailto:me@menemragab.com?subject=Stoic%20Calendar%20Support"
                className="underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                me@menemragab.com
              </a>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Common questions</h2>
            <ul className="space-y-4 text-sm sm:text-base text-muted-foreground">
              <li>
                <strong className="text-foreground">Wallpaper not updating automatically</strong>
                <br />
                Make sure background app refresh is enabled for Stoic Calendar in your iOS settings. The wallpaper updates
                daily at 6 AM. If it&apos;s not updating, try manually exporting a new wallpaper from the app.
              </li>
              <li>
                <strong className="text-foreground">Calendar grid looks incorrect</strong>
                <br />
                Double-check your birth date and life expectancy settings in the app. The grid shows one dot per week, so
                make sure your dates are accurate. If it still looks wrong, email me with a screenshot.
              </li>
              <li>
                <strong className="text-foreground">Feature requests</strong>
                <br />
                I keep a backlog of requests for future releases. Email a short note describing your use case; even if
                I can&apos;t ship it immediately, it helps shape the roadmap.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Bug reports</h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              When reporting a bug, it helps a lot if you can include:
            </p>
            <ul className="list-disc list-inside text-sm sm:text-base text-muted-foreground space-y-1">
              <li>Your device model and iOS version</li>
              <li>What you were doing right before the issue happened</li>
              <li>Screenshots or screen recordings, if possible</li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
      </div>
    </>
  );
};

export default StoicCalendarSupport;


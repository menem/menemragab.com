import { Helmet } from "react-helmet-async";
import Navigation from "@/components/stoic/Navigation";
import Footer from "@/components/stoic/Footer";

const StoicCalendarPrivacy = () => {
  return (
    <>
      <Helmet>
        <title>Stoic Calendar – Privacy</title>
        <meta
          name="description"
          content="Learn how Stoic Calendar handles your data. All data stays on your device. No tracking. No accounts."
        />
      </Helmet>

      <div className="stoic-calendar min-h-screen bg-background text-foreground">
        <Navigation />

        <main className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 pt-24 pb-16">
        <div className="max-w-3xl mx-auto space-y-10 text-sm sm:text-base text-muted-foreground">
          <section>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Privacy</h1>
            <p className="leading-relaxed">
              Stoic Calendar is designed to be a calm, privacy‑respecting companion. I collect as little data as possible
              and prefer to keep everything on your device where it belongs.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">What data Stoic Calendar uses</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong className="text-foreground">Birth date and life expectancy</strong> – used only to calculate your
                life calendar grid. This data is stored locally on your device and is never sent to any server.
              </li>
              <li>
                <strong className="text-foreground">Goals and milestones</strong> – any goals you add with target dates are
                stored locally on your device to help you track progress.
              </li>
              <li>
                <strong className="text-foreground">Theme preferences</strong> – your chosen theme is stored locally to
                maintain your visual preferences.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">What Stoic Calendar does not do</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>No account is required to use Stoic Calendar.</li>
              <li>Your birth date, goals, and calendar data are not uploaded to any server.</li>
              <li>I do not sell or share your personal data with advertisers.</li>
              <li>No analytics or tracking is performed.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Data retention &amp; control</h2>
            <p className="leading-relaxed">
              Because Stoic Calendar stores your data locally, removing the app from your device will remove your stored
              data. If you email me for support, I will only keep those emails as long as needed to handle your request.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Questions</h2>
            <p className="leading-relaxed">
              If you have any questions about privacy or how Stoic Calendar handles your data, please contact me at{" "}
              <a
                href="mailto:me@menemragab.com?subject=Stoic%20Calendar%20Privacy"
                className="underline underline-offset-4 hover:opacity-80 transition-opacity text-foreground"
              >
                me@menemragab.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      <Footer />
      </div>
    </>
  );
};

export default StoicCalendarPrivacy;


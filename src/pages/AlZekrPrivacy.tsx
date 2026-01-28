import { Helmet } from "react-helmet-async";
import { ZekrHeader } from "@/components/landing/Header";
import { ZekrFooter } from "@/components/landing/Footer";

const AlZekrPrivacy = () => {
  return (
    <>
      <Helmet>
        <title>Zekr – Privacy</title>
        <meta
          name="description"
          content="Learn how the Zekr app handles your data, from location and notifications to analytics and storage."
        />
      </Helmet>

      <ZekrHeader />

      <main className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 pt-24 pb-16">
        <div className="max-w-3xl mx-auto space-y-10 text-sm sm:text-base text-muted-foreground">
          <section>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Privacy</h1>
            <p className="leading-relaxed">
              Zekr is designed to be a calm, privacy‑respecting companion. I collect as little data as possible and
              prefer to keep everything on your device where it belongs.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">What data Zekr uses</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong className="text-foreground">Location (optional)</strong> – used only to calculate accurate
                prayer times and Qibla. Your location is processed on the device and is not sent to my servers.
              </li>
              <li>
                <strong className="text-foreground">Prayer &amp; dhikr progress</strong> – counts, streaks, and
                completion states are stored locally on your device to help you track your worship.
              </li>
              <li>
                <strong className="text-foreground">Notifications</strong> – if you enable reminders, the app schedules
                notifications on your device based on your settings.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">What Zekr does not do</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>No account is required to use Zekr.</li>
              <li>Your dhikr, Quran progress, and prayer history are not uploaded to any server.</li>
              <li>I do not sell or share your personal data with advertisers.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Analytics</h2>
            <p className="leading-relaxed">
              If I use analytics in the future, it will be limited to anonymous, aggregate information (for example,
              which features are used the most) to help improve the app. It will never include your personal worship
              data or identifying information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Data retention &amp; control</h2>
            <p className="leading-relaxed">
              Because Zekr stores your data locally, removing the app from your device will remove your stored data. If
              you email me for support, I will only keep those emails as long as needed to handle your request.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Questions</h2>
            <p className="leading-relaxed">
              If you have any questions about privacy or how Zekr handles your data, please contact me at{" "}
              <a
                href="mailto:privacy@menemragab.com"
                className="underline underline-offset-4 hover:opacity-80 transition-opacity text-foreground"
              >
                privacy@menemragab.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      <ZekrFooter />
    </>
  );
};

export default AlZekrPrivacy;


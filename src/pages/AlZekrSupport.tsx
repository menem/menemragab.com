import { Helmet } from "react-helmet-async";
import { ZekrHeader } from "@/components/landing/Header";
import { ZekrFooter } from "@/components/landing/Footer";

const AlZekrSupport = () => {
  return (
    <>
      <Helmet>
        <title>Zekr – Support</title>
        <meta
          name="description"
          content="Get help with the Zekr app: FAQs, contact details, and how to report issues or request features."
        />
      </Helmet>

      <ZekrHeader />

      <main className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 pt-24 pb-16">
        <div className="max-w-3xl mx-auto space-y-10">
          <section>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Support</h1>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Zekr is built to be calm, reliable, and simple. If something doesn&apos;t feel right or you have ideas to
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
                href="mailto:hi@menemragab.com?subject=Zekr%20Support"
                className="underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                hi@menemragab.com
              </a>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">Common questions</h2>
            <ul className="space-y-4 text-sm sm:text-base text-muted-foreground">
              <li>
                <strong className="text-foreground">Prayer times look off</strong>
                <br />
                Make sure location permissions are enabled for Zekr and that your city is detected correctly. If you
                still see incorrect timings, please email a screenshot and your city / country so I can investigate.
              </li>
              <li>
                <strong className="text-foreground">Tasbih or dhikr counter not saving progress</strong>
                <br />
                Zekr saves progress locally on your device. If counts reset unexpectedly, check that Low Power Mode or
                system optimisations are not aggressively closing the app. If it keeps happening, reach out with your
                device model and iOS version.
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

      <ZekrFooter />
    </>
  );
};

export default AlZekrSupport;


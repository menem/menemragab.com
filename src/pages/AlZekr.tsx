import { Helmet } from "react-helmet-async";
import { ZekrHeader } from "@/components/landing/Header";
import { ZekrHero } from "@/components/landing/Hero";
import { ZekrFeatures } from "@/components/landing/Features";
import { ZekrScreenshots } from "@/components/landing/Screenshots";
import { ZekrHowToUse } from "@/components/landing/HowToUse";
import { ZekrCallToAction } from "@/components/landing/CallToAction";
import { ZekrFooter } from "@/components/landing/Footer";

const AlZekr = () => {
  return (
    <>
      <Helmet>
        <title>Zekr – Your Muslim Companion</title>
        <link rel="icon" type="image/png" href="/Zekr-AppIcon.png" />
        <link rel="apple-touch-icon" href="/Zekr-AppIcon.png" />
        <meta
          name="description"
          content="Zekr is a calm, beautifully designed Muslim companion app with prayer times, Quran, Khatma, duas and dhikr."
        />
        <meta property="og:title" content="Zekr – Your Muslim Companion" />
        <meta
          property="og:description"
          content="Prayer times. Quran. Khatma. Duas & Dhikr. All in one calm, beautifully designed app."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/Zekr-AppIcon.png" />
      </Helmet>

      {/* Skip Link */}
      <a
        href="#zekr-main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-gold text-primary-foreground px-4 py-2 rounded-lg"
      >
        Skip to content
      </a>

      <ZekrHeader />

      <main id="zekr-main">
        <ZekrHero />
        <ZekrFeatures />
        <ZekrScreenshots />
        <ZekrHowToUse />
        <ZekrCallToAction />
      </main>

      <ZekrFooter />
    </>
  );
};

export default AlZekr;


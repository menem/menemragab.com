import { Helmet } from "react-helmet-async";
import Navigation from "@/components/stoic/Navigation";
import Hero from "@/components/stoic/Hero";
import Philosophy from "@/components/stoic/Philosophy";
import HowItWorks from "@/components/stoic/HowItWorks";
import Features from "@/components/stoic/Features";
import Testimonial from "@/components/stoic/Testimonial";
import FinalCTA from "@/components/stoic/FinalCTA";
import Footer from "@/components/stoic/Footer";

const StoicCalendar = () => {
  return (
    <>
      <Helmet>
        <title>Stoic Calendar – Your life, in weeks</title>
        <link rel="icon" type="image/png" href="/Stoic-Calendar-AppIcon.png" />
        <link rel="apple-touch-icon" href="/Stoic-Calendar-AppIcon.png" />
        <meta
          name="description"
          content="One dot per week. A daily reminder that time is your most precious resource. See your life clearly on your lock screen."
        />
        <meta property="og:title" content="Stoic Calendar – Your life, in weeks" />
        <meta
          property="og:description"
          content="One dot per week. A daily reminder that time is your most precious resource."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/Stoic-Calendar-AppIcon.png" />
      </Helmet>

      <div className="stoic-calendar min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <Hero />
          <Philosophy />
          <HowItWorks />
          <Features />
          <Testimonial />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default StoicCalendar;

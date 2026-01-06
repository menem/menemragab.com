import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Your Name - Product Manager & Builder</title>
        <meta 
          name="description" 
          content="Product manager helping teams build better products. View my work and get in touch." 
        />
        <meta property="og:title" content="Your Name - Product Manager & Builder" />
        <meta property="og:description" content="Product manager helping teams build better products." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <WorkSection />
          <AboutSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

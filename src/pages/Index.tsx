import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import BioSection from "@/components/BioSection";
import AppsSection from "@/components/AppsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Menem Ragab - Product Manager</title>
        <meta 
          name="description" 
          content="Product manager crafting digital products that bring joy and empower users. Based in Dubai." 
        />
        <meta property="og:title" content="Menem Ragab - Product Manager" />
        <meta property="og:description" content="Product manager crafting digital products that bring joy and empower users." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <BioSection />
          <AppsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

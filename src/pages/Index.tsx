import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ProofStrip from "@/components/landing/ProofStrip";
import Mechanism from "@/components/landing/Mechanism";
import OldVsNew from "@/components/landing/OldVsNew";
import Outcomes from "@/components/landing/Outcomes";
import Qualification from "@/components/landing/Qualification";
import SocialProof from "@/components/landing/SocialProof";
import VideoTestimonials from "@/components/landing/VideoTestimonials";
import FAQ from "@/components/landing/FAQ";
import Packages from "@/components/landing/Packages";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProofStrip />
        <Mechanism />
        <OldVsNew />
        <Outcomes />
        <Qualification />
        <SocialProof />
        <VideoTestimonials />
        <FAQ />
        {/* <Packages /> */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

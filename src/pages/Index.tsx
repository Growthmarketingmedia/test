import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AILeadEngine from "@/components/AILeadEngine";
import Testimonials from "@/components/Testimonials";
import VideoTestimonials from "@/components/VideoTestimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pt-[117px]">
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <Services />
        <AILeadEngine />
        <Testimonials />
        <VideoTestimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

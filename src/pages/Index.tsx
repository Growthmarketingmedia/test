import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AILeadEngine from "@/components/AILeadEngine";
import Testimonials from "@/components/Testimonials";
import VideoTestimonials from "@/components/VideoTestimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import AIRevolution from "@/components/AIRevolution";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pt-[117px]">
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <Stats />
        <AIRevolution />
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

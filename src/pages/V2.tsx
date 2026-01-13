import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import HeroV2 from "@/components/v2/HeroV2";
import AILeadEngineV2 from "@/components/v2/AILeadEngineV2";
import TestimonialsV2 from "@/components/v2/TestimonialsV2";
import VideoTestimonialsV2 from "@/components/v2/VideoTestimonialsV2";
import ContactV2 from "@/components/v2/ContactV2";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import AIRevolutionV2 from "@/components/v2/AIRevolutionV2";
import GrowthPathV2 from "@/components/v2/GrowthPathV2";

const V2 = () => {
    return (
        <div className="min-h-screen bg-background">
            <AnnouncementBar />
            <Header />
            <main>
                <HeroV2 />
                <Stats />
                <AILeadEngineV2 />
                <AIRevolutionV2 />
                <TestimonialsV2 />
                <VideoTestimonialsV2 />
                <GrowthPathV2 />
                <ContactV2 />
            </main>
            <Footer />
        </div>
    );
};

export default V2;

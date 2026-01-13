import HeaderV2 from "@/components/v2/HeaderV2";
import HeroV2 from "@/components/v2/HeroV2";
import ProofStripV2 from "@/components/v2/ProofStripV2";
import AILeadEngineV2 from "@/components/v2/AILeadEngineV2";
import ComparisonV2 from "@/components/v2/ComparisonV2";
import OutcomesV2 from "@/components/v2/OutcomesV2";
import QualificationV2 from "@/components/v2/QualificationV2";
import VideoTestimonialsV2 from "@/components/v2/VideoTestimonialsV2";
import GrowthPathV2 from "@/components/v2/GrowthPathV2";
import FAQV2 from "@/components/v2/FAQV2";
import Footer from "@/components/Footer";

const V2 = () => {
    return (
        <div className="min-h-screen bg-background">
            <HeaderV2 />
            <main className="pt-20"> {/* Add padding for fixed header */}
                <HeroV2 />
                <ProofStripV2 />
                <AILeadEngineV2 />
                <ComparisonV2 />
                <OutcomesV2 />
                <QualificationV2 />
                <VideoTestimonialsV2 />
                <GrowthPathV2 />
                <FAQV2 />
            </main>
            <Footer />
        </div>
    );
};

export default V2;

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";

const HeroV2 = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 md:py-0">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-radial" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" style={{
        animationDelay: "3s"
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">For Contractors & Home Service Pros</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 animate-slide-up leading-tight">
            <span className="text-foreground">Get More </span>
            <span className="text-gradient">Qualified Leads</span>
            <span className="text-foreground"> While You Sleep</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{
            animationDelay: "0.2s"
          }}>
            Our AI Lead Engine captures, qualifies, and books appointments for you 24/7. Stop chasing tire-kickers and start closing deals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center gap-6 animate-slide-up" style={{
            animationDelay: "0.4s"
          }}>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Button variant="hero" size="xl" className="w-full sm:w-auto px-8 min-w-[240px]">
                Book A Strategy Call
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto px-8 min-w-[240px]">
                See Real Results
              </Button>
            </div>

            {/* Trust Elements under buttons */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-slate-800 border-2 border-background flex items-center justify-center text-xs font-bold text-white">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p>Trusted by <span className="text-foreground font-semibold">500+ Contractors</span></p>
              <div className="hidden sm:block text-primary">•</div>
              <div className="hidden sm:flex items-center gap-1">
                <div className="flex"><Sparkles className="w-3 h-3 fill-primary text-primary" /></div>
                <span className="text-foreground font-semibold">4.9/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-20 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="animate-bounce-fade">
              <ChevronDown className="w-8 h-8 text-primary mx-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  );
};

export default HeroV2;

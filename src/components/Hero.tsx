import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
const Hero = () => {
  return <section id="home" className="relative min-h-[calc(100vh-117px)] flex items-center justify-center overflow-hidden py-12 md:py-0">
    {/* Background Effects */}
    <div className="absolute inset-0 bg-grid opacity-30" />
    <div className="absolute inset-0 bg-gradient-radial" />

    {/* Floating orbs */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" style={{
      animationDelay: "3s"
    }} />

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Trusted By Top Companies</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 animate-slide-up lg:text-7xl">
          <span className="text-foreground">WE </span>
          <span className="text-gradient">EXPLODE</span>
          <span className="text-foreground"> YOUR</span>
          <br />
          <span className="text-foreground">BUSINESS </span>
          <span className="text-gradient">REVENUE</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up" style={{
          animationDelay: "0.2s"
        }}>
          Growing a business is hard. We make it easier, quicker, more predictable,
          less tiring, and fun. Our proven strategies help businesses dominate their online presence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{
          animationDelay: "0.4s"
        }}>
          <Button variant="hero" size="xl" className="w-full sm:w-auto">
            Schedule A Call
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
            View Our Results
          </Button>
        </div>

      </div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>;
};
export default Hero;
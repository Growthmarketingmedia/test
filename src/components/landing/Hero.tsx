import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-28 pb-12">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-radial" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Audience Label */}
          <p className="text-lg md:text-xl text-primary font-semibold mb-4 animate-fade-in">
            Contractors & Builders
          </p>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 animate-slide-up">
            <span className="text-foreground">Do you want </span>
            <span className="text-gradient">more high ticket jobs?</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            No more shared leads, relying on referrals or having unpredictable seasons. We work 1-1 to implement our "Organic Lead Engine" system that has been generating millions in revenue.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="xl" className="w-full sm:w-auto" asChild>
              <a href="#proof">See Case Studies</a>
            </Button>
          </div>

          {/* Trust Elements */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            {/* Rating - Google Orange */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FBBC04] text-[#FBBC04]" />
                ))}
              </div>
              <span className="text-sm text-[#FBBC04] font-medium">5.0 rating from 50+ clients</span>
            </div>
            
            {/* Mini testimonial */}
            <div className="hidden sm:block w-px h-6 bg-border" />
            
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {['T', 'M', 'K'].map((initial, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">{initial}</span>
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">"Doubled our leads in 60 days"</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;

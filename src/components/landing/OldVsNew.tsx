import { X, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const OldVsNew = () => {
  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The <span className="text-gradient">Old Way</span> vs The <span className="text-gradient">New Way</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Stop leaving money on the table with outdated lead generation.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Old Way */}
          <div className="bg-background border border-border rounded-2xl p-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-destructive/10 border border-destructive/20 rounded-full mb-6">
              <X className="w-4 h-4 text-destructive" />
              <span className="text-sm font-medium text-destructive">The Old Way</span>
            </div>
            
            <div className="space-y-4">
              {[
                "Expensive Pay Per Click Leads costing you thousands of dollars.",
                "Shared leads that don't pick up the phone",
                "Renters who can't actually buy your services",
                "Heavily reliant on TPAs and referrals",
                "Zero Data Tracking into what marketing is driving profit.",
                "Can't scale up revenue when you are ready.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive/70 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* New Way */}
          <div className="bg-background border-2 border-primary/30 rounded-2xl p-8 relative">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Check className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">The Growth Marketing Way</span>
            </div>
            
            <div className="space-y-4">
              {[
                "Quality Leads Generated exclusively for You.",
                "Tire kickers are pushed out to save you time and energy.",
                "Picture Perfect Data tracking to see dollars in dollars out.",
                "Scalable systems to grow with you.",
                "Predictable Acquisition of new jobs monthly",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* Subtle glow */}
            <div className="absolute -inset-1 bg-primary/5 rounded-2xl blur-xl -z-10" />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="xl">
            Book Strategy Call
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OldVsNew;

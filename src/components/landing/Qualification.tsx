import { Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Qualification = () => {
  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Is This <span className="text-gradient">Right For You?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We're selective about who we work with. Here's how to know if we're a fit.
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Best For */}
          <div className="bg-background border-2 border-primary/30 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Best For</h3>
            </div>
            
            <div className="space-y-4">
              {[
                "Home service contractors (roofing, HVAC, plumbing, etc.)",
                "Businesses doing $500K+ in annual revenue",
                "Companies ready to invest in growth",
                "Owners who want to scale, not just survive",
                "Teams tired of chasing unqualified leads",
                "Businesses committed to 6-month partnerships",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Not For */}
          <div className="bg-background border border-border rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-xl font-bold">Not For</h3>
            </div>
            
            <div className="space-y-4">
              {[
                "Startups with no existing revenue",
                "Companies looking for quick overnight fixes",
                "Those unwilling to invest in marketing",
                "Businesses wanting to micromanage every detail",
                "People who blame external factors for results",
                "Short-term thinkers (we build long-term growth)",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Sound like you? Let's talk.</p>
          <Button variant="hero" size="xl">
            Book Strategy Call
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Qualification;

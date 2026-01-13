import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const steps = [
  "Book a 15-minute strategy call",
  "We analyze your current marketing",
  "You get a custom growth roadmap",
  "Decide if we're a fit—no pressure",
];

const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 text-center relative">
            {/* Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl blur-xl -z-10" />

            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready To <span className="text-gradient">Explode Your Revenue?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join 500+ contractors who've scaled their business with AI-powered lead generation.
            </p>

            {/* What happens next */}
            <div className="grid sm:grid-cols-2 gap-3 max-w-lg mx-auto mb-8">
              {steps.map((step, i) => (
                <div key={i} className="flex items-center gap-3 text-left">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-sm">{step}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button variant="hero" size="xl" className="animate-pulse-glow">
              Book Your Strategy Call
              <ArrowRight className="w-5 h-5" />
            </Button>

            <p className="text-sm text-muted-foreground mt-6">
              🔒 Free. No obligation. Just clarity on your growth path.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const Packages = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready To Join Them?{" "}
            <span className="text-primary">Choose Your Path</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            You've seen the results. Now it's your turn. Pick the package that fits your budget and goals — both deliver results, one just moves faster.
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Foundation Package */}
          <div className="bg-card border border-border rounded-2xl p-8 flex flex-col">
            <div className="mb-6">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                OFFER A
              </span>
              <h3 className="text-2xl font-bold text-foreground mt-2 mb-3">
                Foundation Package
              </h3>
              <p className="text-muted-foreground">
                Perfect for contractors starting their digital journey without ad spend commitment
              </p>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {[
                "AI ChatGPT Lead Qualification",
                "Organic Marketing System",
                "Local SEO Optimization",
                "No Google Ads Required",
                "LSA Integration Available",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Button
              variant="outline"
              size="lg"
              className="w-full border-border hover:bg-muted"
            >
              Learn More
            </Button>
          </div>

          {/* Accelerator Package */}
          <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 flex flex-col relative">
            {/* Most Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                Most Popular
              </span>
            </div>

            <div className="mb-6 mt-2">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                OFFER B
              </span>
              <h3 className="text-2xl font-bold text-foreground mt-2 mb-3">
                Accelerator Package
              </h3>
              <p className="text-muted-foreground">
                For contractors ready to scale fast with full PPC and AI integration
              </p>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {[
                "Everything in Offer A",
                "FREE PPC Management",
                "Google Ads Campaign Setup",
                "6-Month Growth Partnership",
                "Priority Support & Strategy",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="hero" size="lg" className="w-full">
              Apply Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-4">
              * Requires ad spend budget. Data shows PPC clients earn significantly more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;

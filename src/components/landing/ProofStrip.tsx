import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Travis B.",
    company: "T Bare Roofing",
    quote: "Immediate change in our business. Worth every dollar.",
  },
  {
    name: "Michael J.",
    company: "Restoration Co.",
    quote: "Ranking first page in 3 months. Breath of fresh air.",
  },
  {
    name: "Keith S.",
    company: "Home Services",
    quote: "Double-digit growth during C19. Impressive!",
  },
];

const ProofStrip = () => {
  return (
    <section className="py-12 border-y border-border/50 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section label */}
        <p className="text-center text-sm text-muted-foreground mb-8">
          You're in good company — trusted by 500+ contractors
        </p>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors">
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-sm text-foreground mb-4">"{t.quote}"</p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofStrip;

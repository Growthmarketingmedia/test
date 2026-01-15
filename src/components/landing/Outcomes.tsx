import { TrendingUp, Clock, DollarSign, Users, Target, BarChart3 } from "lucide-react";

const outcomes = [
  { icon: TrendingUp, text: "More qualified leads every month." },
  { icon:BarChart3, text: "Predictable growth for your business" },
  { icon: DollarSign, text: "Reduced cost per lead" },
  { icon: Clock, text: "More time and energy for your business" },
  { icon: Target, text: "Full visibility into your marketing and business efforts." },
  { icon: Users, text: "Professional USA based Team with decades of experience." },
];

const Outcomes = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-3 block">
            What You Can Expect
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Results That <span className="text-gradient">Move The Needle</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Here's what our clients consistently experience within the first 90 days.
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {outcomes.map((o, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <o.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium">{o.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outcomes;

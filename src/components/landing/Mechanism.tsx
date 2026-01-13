import { Bot, MessageSquare, Calendar } from "lucide-react";

const pillars = [
  {
    icon: Bot,
    title: "AI Targeting",
    description: "ChatGPT-powered system identifies and engages high-intent visitors the moment they land on your site.",
  },
  {
    icon: MessageSquare,
    title: "Conversation-to-Lead",
    description: "Natural AI conversations qualify leads, answer questions, and capture contact info—all automatically.",
  },
  {
    icon: Calendar,
    title: "Instant Booking",
    description: "Qualified prospects book directly on your calendar. No delays, no missed opportunities.",
  },
];

const Mechanism = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-3 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The <span className="text-gradient">ChatGPT Lead Engine</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Three pillars that turn your website into a 24/7 sales machine.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="group relative bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/40 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <p.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3">{p.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mechanism;

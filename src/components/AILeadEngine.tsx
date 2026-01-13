import { Button } from "@/components/ui/button";
import { Bot, MessageSquare, Zap, Brain, Users, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "24/7 AI Lead Capture",
    description: "Never miss a lead. Our ChatGPT-powered system engages visitors instantly, qualifies them, and captures their information around the clock.",
  },
  {
    icon: MessageSquare,
    title: "Intelligent Conversations",
    description: "Natural, human-like conversations that understand context and intent. Your prospects feel heard, not interrogated.",
  },
  {
    icon: Brain,
    title: "Smart Qualification",
    description: "AI that knows your business. It asks the right questions, scores leads, and routes hot prospects directly to your team.",
  },
  {
    icon: Users,
    title: "Seamless Handoff",
    description: "When a lead is ready, they're instantly connected to your sales team with full context of the conversation.",
  },
];

const benefits = [
  "Capture 3x more leads from your website",
  "Respond to inquiries in under 5 seconds",
  "Qualify leads automatically 24/7",
  "Reduce cost per lead by 40%",
  "Never miss another opportunity",
  "Scale without hiring more staff",
];

const AILeadEngine = () => {
  return (
    <section id="ai-engine" className="py-32 relative overflow-hidden bg-white">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Here's How We Do It</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
            Our Secret Weapon:
            <br />
            <span className="text-gradient">The ChatGPT Lead Engine</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Those numbers don't happen by accident. Our AI-powered chatbot works 24/7, capturing, qualifying, and converting visitors into customers — even while you sleep.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Visual */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl border border-slate-200 p-8 shadow-2xl">
              {/* Chat Interface Mockup */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-primary" />
                  </div>
                  <div className="bg-slate-100 rounded-2xl rounded-tl-sm p-4 max-w-xs">
                    <p className="text-sm text-slate-700">Hi! 👋 I'm the Growth Marketing AI assistant. How can I help you grow your business today?</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 justify-end">
                  <div className="bg-primary text-white rounded-2xl rounded-tr-sm p-4 max-w-xs">
                    <p className="text-sm">I need help getting more customers for my roofing company</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-primary" />
                  </div>
                  <div className="bg-slate-100 rounded-2xl rounded-tl-sm p-4 max-w-xs">
                    <p className="text-sm text-slate-700">Perfect! We've helped dozens of roofing companies dominate Google. What's your biggest challenge right now - getting found online or converting leads?</p>
                  </div>
                </div>

                {/* Typing indicator */}
                <div className="flex items-center gap-2 text-slate-500 text-sm pl-13">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                  <span>AI is typing...</span>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-xl -z-10 opacity-50" />
            </div>

            {/* Stats badge */}
            <div className="absolute -right-4 -bottom-4 bg-white border border-primary/20 rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">5 sec</div>
                  <div className="text-xs text-slate-500">Avg. Response Time</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Features */}
          <div>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-200 hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-slate-900">{feature.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-slate-900">
                Transform Your Lead Generation
              </h3>
              <p className="text-slate-600 mb-6 md:mb-8">
                Stop losing leads to slow response times. Our ChatGPT Lead Engine works around the clock, engaging every visitor and turning them into qualified opportunities.
              </p>
              <Button variant="hero" size="xl">
                Schedule A Call
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AILeadEngine;

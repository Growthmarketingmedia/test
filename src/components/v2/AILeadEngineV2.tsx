import { Bot, MessageSquare, Zap } from "lucide-react";

const AILeadEngineV2 = () => {
  return (
    <section id="mechanism" className="py-24 relative overflow-hidden bg-white">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold text-sm tracking-wider uppercase mb-4 block">
            The Mechanism
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            How We Get You <span className="text-gradient">Results</span>
          </h2>
          <p className="text-xl text-slate-600">
            Three core pillars designed to turn your website into a 24/7 lead generation machine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-primary/30 transition-all duration-300">
            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
              <Bot className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">AI Hyper-Targeting</h3>
            <p className="text-slate-600 leading-relaxed">
              We locate your ideal customers with precision, ensuring every dollar spent goes towards high-intent leads ready to buy.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-primary/30 transition-all duration-300 relative">
            <div className="absolute -top-4 right-8 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
              CORE ENGINE
            </div>
            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
              <MessageSquare className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Instant Capture</h3>
            <p className="text-slate-600 leading-relaxed">
              Our AI engages visitors in under 5 seconds with natural conversation, doubling your conversion rate from existing traffic.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-primary/30 transition-all duration-300">
            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
              <Zap className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Auto-Qualification</h3>
            <p className="text-slate-600 leading-relaxed">
              We filter out tire-kickers automatically. You only get notifications for qualified leads who have budget and authority.
            </p>
          </div>
        </div>
      </div>


    </section>
  );
};

export default AILeadEngineV2;

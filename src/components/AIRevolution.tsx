import { Sparkles, Bot, Zap, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const AIRevolution = () => {
    return (
        <section className="py-24 border-t border-border/50 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-primary text-sm font-medium">Why AI Changes Everything</span>
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Capitalize On The <span className="text-primary">AI Revolution</span>
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Macro trends show AI is transforming lead generation. We're seeing real results from clients—this isn't hype, it's proven.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: Bot,
                            title: "AI-Powered Targeting",
                            description: "ChatGPT integration that qualifies leads 24/7, ensuring you only speak with serious prospects."
                        },
                        {
                            icon: Zap,
                            title: "Faster Lead Response",
                            description: "Instant AI responses mean you capture leads while competitors are still sleeping."
                        },
                        {
                            icon: Target,
                            title: "Smarter Ad Spend",
                            description: "AI optimization means every dollar works harder, driving down cost per lead."
                        }
                    ].map((feature, index) => (
                        <Card key={index} className="bg-white border-slate-200 p-8 shadow-sm hover:border-primary/30 hover:shadow-md transition-all group">
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                <feature.icon className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="font-display text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-slate-600">{feature.description}</p>
                        </Card>
                    ))}
                </div>

                {/* Full-width image */}
                <div className="mt-16 w-full">
                    <img
                        src="/images/image (2).png"
                        alt="AI Revolution in action"
                        className="w-full h-auto object-cover rounded-2xl shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default AIRevolution;

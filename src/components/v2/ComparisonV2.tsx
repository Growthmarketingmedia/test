import { XCircle, CheckCircle } from "lucide-react";

const ComparisonV2 = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                        Stop Using The <span className="text-red-500 line-through decoration-4 decoration-red-500/50">Old Way</span>
                    </h2>
                    <p className="text-muted-foreground mt-4 text-lg">See why traditional marketing is failing contractors</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* The Old Way */}
                    <div className="bg-card/30 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50" />
                        <h3 className="text-2xl font-bold text-red-400 mb-8 flex items-center gap-3">
                            <XCircle className="w-8 h-8" />
                            The Old Way
                        </h3>

                        <div className="space-y-6">
                            {[
                                "Launch generic ads with low buying intent",
                                "Send traffic to a confusing, slow website",
                                "Miss calls while you're on the job site",
                                "Chase unqualified leads who ignore you",
                                "Waste budget on clicks that don't convert"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 opacity-70">
                                    <XCircle className="w-6 h-6 text-red-500/50 shrink-0" />
                                    <span className="text-muted-foreground text-lg">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* The New Way */}
                    <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl p-8" />

                        <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
                            <CheckCircle className="w-8 h-8" />
                            The New Way
                        </h3>

                        <div className="space-y-6">
                            {[
                                "AI targets high-intent homeowners",
                                "Instant 5-second response time, 24/7",
                                "Conversational booking experience",
                                "Leads are qualified before you speak",
                                "Pay for results, not just clicks"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                                    <span className="text-foreground text-lg font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default ComparisonV2;

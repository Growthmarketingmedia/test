import { Button } from "@/components/ui/button";
import { TrendingUp, Trophy, Check } from "lucide-react";

const GrowthPathV2 = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                        Pick Your <span className="text-gradient">Growth Goal</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">Choose the path that matches your current business stage.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Path 1: Stability */}
                    <div className="bg-card border border-border rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 relative group overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

                        <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <TrendingUp className="w-8 h-8 text-blue-500" />
                        </div>

                        <h3 className="text-2xl font-bold text-foreground mb-2">Build Consistency</h3>
                        <p className="text-muted-foreground mb-8">For contractors who want to stop the feast or famine cycle.</p>

                        <ul className="space-y-4 mb-8">
                            {["Consistent lead flow", "Fill your calendar", "Stop buying shared leads", "Predictable revenue"].map((item, i) => (
                                <li key={i} className="flex gap-3 text-sm text-foreground/80">
                                    <Check className="w-5 h-5 text-blue-500 shrink-0" /> {item}
                                </li>
                            ))}
                        </ul>

                        <Button variant="outline" className="w-full border-blue-500/20 hover:bg-blue-500/10 hover:text-blue-500 group-hover:border-blue-500/50">
                            Start Building Consistency
                        </Button>
                    </div>

                    {/* Path 2: Scale (Highlighted) */}
                    <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 transition-all duration-300 relative group overflow-hidden shadow-2xl shadow-primary/5">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                        <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Most Popular</div>

                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Trophy className="w-8 h-8 text-primary" />
                        </div>

                        <h3 className="text-2xl font-bold text-foreground mb-2">Market Dominance</h3>
                        <p className="text-muted-foreground mb-8">For established businesses ready to scale to $1M+.</p>

                        <ul className="space-y-4 mb-8">
                            {["Aggressive expansion", "Automate sales follow-up", "Hire more crews", "Dominate local SEO"].map((item, i) => (
                                <li key={i} className="flex gap-3 text-sm text-foreground/80">
                                    <Check className="w-5 h-5 text-primary shrink-0" /> {item}
                                </li>
                            ))}
                        </ul>

                        <Button variant="default" className="w-full shadow-lg shadow-primary/20 hover:shadow-primary/40">
                            Start Dominating
                        </Button>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default GrowthPathV2;

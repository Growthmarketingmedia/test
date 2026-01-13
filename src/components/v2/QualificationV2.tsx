import { Check, X } from "lucide-react";

const QualificationV2 = () => {
    return (
        <section className="py-24 bg-background border-t border-border/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                        Who Is This For?
                    </h2>
                    <p className="text-muted-foreground text-lg">We are selective about who we partner with.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {/* Not For */}
                    <div className="space-y-8">
                        <h3 className="text-xl font-bold text-red-400 mb-6 uppercase tracking-wider flex items-center gap-2">
                            <X className="w-6 h-6" /> Who This Is Not For
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "You just want the cheapest possible leads",
                                "You don't have capacity to handle more work",
                                "You aren't willing to invest in your growth",
                                "You don't have a sales process in place"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 text-muted-foreground">
                                    <X className="w-5 h-5 text-red-500/50 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Is For */}
                    <div className="space-y-8">
                        <h3 className="text-xl font-bold text-primary mb-6 uppercase tracking-wider flex items-center gap-2">
                            <Check className="w-6 h-6" /> Who High-Growth Is For
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Home service businesses doing $30k+ / month",
                                "Companies who want to dominate their local market",
                                "Contractors tired of relying on referrals",
                                "Owners ready to scale to $1M+ in revenue"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 text-foreground font-medium">
                                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {/* Small Divider for flow */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mt-24 opacity-30" />
        </section>
    );
};

export default QualificationV2;

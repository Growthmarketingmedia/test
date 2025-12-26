const Stats = () => {
    return (
        <section className="py-12 border-y border-border/50 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { value: "$10M+", label: "Revenue Generated" },
                        { value: "500+", label: "Contractors Served" },
                        { value: "3x", label: "Average ROI" },
                        { value: "24/7", label: "AI Lead Response" }
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
                            <p className="text-muted-foreground">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;

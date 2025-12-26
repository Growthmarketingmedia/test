const Stats = () => {
    return (
        <section className="relative py-8 border-y border-border/50 overflow-hidden">
            {/* Background Effects - same as Hero */}
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute inset-0 bg-gradient-radial" />

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

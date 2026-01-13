import { CheckCircle2, TrendingUp, Users, Clock, Target, DollarSign } from "lucide-react";

const outcomes = [
    {
        icon: TrendingUp,
        value: "3x ROI",
        label: "Average Return on Ad Spend",
    },
    {
        icon: Clock,
        value: "< 5 Mins",
        label: "Lead Response Time",
    },
    {
        icon: Target,
        value: "40%",
        label: "Lower Cost Per Lead",
    },
    {
        icon: Users,
        value: "2x",
        label: "More Qualified Bookings",
    },
];

const OutcomesV2 = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl opacity-50" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                        What You Can <span className="text-gradient">Expect</span>
                    </h2>
                    <p className="text-slate-600 mt-4 text-lg">Real results based on our average client performance.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {outcomes.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all duration-300 group">
                            <div className="mb-4 p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform text-primary">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                                {item.value}
                            </div>
                            <div className="text-sm md:text-base text-slate-600 font-medium">
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </section>
    );
};

export default OutcomesV2;

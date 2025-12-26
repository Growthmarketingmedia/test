import { Check, ArrowRight } from "lucide-react";

const GrowthPath = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                        Choose Your <span className="text-primary">Growth Path</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Two powerful options designed to match your budget and goals. Both deliver results
                        —one just delivers them faster.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Foundation Package */}
                    <div className="relative p-8 rounded-2xl bg-white border border-gray-200 hover:border-primary/30 hover:shadow-xl transition-all duration-500">
                        <div className="mb-6">
                            <span className="text-sm text-gray-500 uppercase tracking-wider">OFFER A</span>
                            <h3 className="text-3xl font-bold text-gray-900 mt-2">Foundation Package</h3>
                            <p className="text-gray-600 mt-3">
                                Perfect for contractors starting their digital journey without ad spend commitment
                            </p>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-gray-900">AI ChatGPT Lead Qualification</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-gray-900">Organic Marketing System</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-gray-900">Local SEO Optimization</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-gray-900">No Google Ads Required</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-gray-900">LSA Integration Available</span>
                            </div>
                        </div>

                        <button className="w-full py-4 px-6 rounded-xl border-2 border-gray-300 text-gray-900 font-semibold hover:border-primary hover:bg-primary/5 transition-all duration-300">
                            Learn More
                        </button>
                    </div>

                    {/* Accelerator Package */}
                    <div className="relative p-8 rounded-2xl bg-white border-2 border-primary hover:border-primary/80 hover:shadow-xl transition-all duration-500">
                        {/* Most Popular Badge */}
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                            <span className="bg-primary text-gray-900 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                                Most Popular
                            </span>
                        </div>

                        <div className="mb-6">
                            <span className="text-sm text-gray-500 uppercase tracking-wider">OFFER B</span>
                            <h3 className="text-3xl font-bold text-gray-900 mt-2">Accelerator Package</h3>
                            <p className="text-gray-600 mt-3">
                                For contractors ready to scale fast with full PPC and AI integration
                            </p>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-gray-900">Everything in Offer A</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-gray-900">FREE PPC Management</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-gray-900">Google Ads Campaign Setup</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-gray-900">6-Month Growth Partnership</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-gray-900">Priority Support & Strategy</span>
                            </div>
                        </div>

                        <button className="w-full py-4 px-6 rounded-xl bg-primary text-gray-900 font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 group">
                            Apply Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <p className="text-xs text-gray-500 text-center mt-4">
                            * Requires ad spend budget. Data shows PPC clients earn significantly more.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GrowthPath;

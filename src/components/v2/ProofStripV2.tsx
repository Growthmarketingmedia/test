import { Star, CheckCircle2 } from "lucide-react";

const ProofStripV2 = () => {
    return (
        <section className="py-12 bg-white relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                    {/* Rating */}
                    <div className="flex flex-col items-center">
                        <div className="flex gap-1 mb-2">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <p className="font-semibold text-slate-900">5.0/5 Average Rating</p>
                        <p className="text-sm text-slate-500">Based on 500+ Reviews</p>
                    </div>

                    {/* Divider (Hidden on mobile) */}
                    <div className="hidden md:block w-px h-16 bg-slate-200" />

                    {/* Quick Stats/Trusted By */}
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            <span className="font-medium text-slate-700">Trusted by 500+ Contractors</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            <span className="font-medium text-slate-700">$10M+ Revenue Generated</span>
                        </div>
                    </div>

                    {/* Divider (Hidden on mobile) */}
                    <div className="hidden md:block w-px h-16 bg-slate-200" />

                    {/* Client Logos (Simplified) */}
                    <div className="flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        <img src="/lovable-uploads/27189151-5441-4770-b74d-17688469e88d.png" alt="Client" className="h-8 w-auto" />
                        <img src="/lovable-uploads/27189151-5441-4770-b74d-17688469e88d.png" alt="Client" className="h-8 w-auto" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProofStripV2;

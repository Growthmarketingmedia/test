import { useEffect, useRef, useState } from "react";

const Stats = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const AnimatedCounter = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            if (!isVisible) return;

            let startTime: number;
            const duration = 2000; // 2 seconds

            const animate = (currentTime: number) => {
                if (!startTime) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / duration, 1);

                setCount(Math.floor(progress * end));

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);
        }, [isVisible, end]);

        return <>{count}{suffix}</>;
    };

    const stats = [
        { value: 10, suffix: "M+", label: "Revenue Generated" },
        { value: 500, suffix: "+", label: "Contractors Served" },
        { value: 3, suffix: "x", label: "Average ROI" },
        { value: 24, suffix: "/7", label: "AI Lead Response" }
    ];

    return (
        <section ref={sectionRef} className="py-12 border-y border-border/50 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                                {isVisible ? <AnimatedCounter end={stat.value} suffix={stat.suffix} /> : `${stat.value}${stat.suffix}`}
                            </p>
                            <p className="text-muted-foreground">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;

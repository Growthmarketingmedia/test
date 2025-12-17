import { Search, Globe, TrendingUp, Zap, Target, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Domination",
    description: "We get your business to #1 on Google. Our proven SEO strategies have helped hundreds of businesses rank for their most competitive keywords.",
    features: ["Local SEO", "National SEO", "Technical Optimization", "Content Strategy"],
  },
  {
    icon: Globe,
    title: "Web Design",
    description: "Beautiful, conversion-optimized websites that turn visitors into customers. We build websites that work as hard as you do.",
    features: ["Custom Design", "Mobile-First", "Fast Loading", "Lead Capture"],
  },
  {
    icon: TrendingUp,
    title: "Google Ads",
    description: "Strategic paid advertising that delivers immediate results. We maximize your ROI with data-driven campaigns.",
    features: ["PPC Campaigns", "Remarketing", "Local Ads", "Performance Tracking"],
  },
  {
    icon: Target,
    title: "Lead Generation",
    description: "Fill your pipeline with qualified leads ready to buy. We create systems that consistently deliver high-quality prospects.",
    features: ["Landing Pages", "Funnels", "Email Marketing", "CRM Integration"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Know exactly where your leads come from. Crystal-clear reporting shows you the ROI of every marketing dollar.",
    features: ["Custom Dashboards", "Call Tracking", "ROI Attribution", "Monthly Reports"],
  },
  {
    icon: Zap,
    title: "Conversion Optimization",
    description: "Turn more visitors into paying customers. We optimize every touchpoint in your customer journey.",
    features: ["A/B Testing", "UX Design", "Heat Mapping", "Funnel Analysis"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Everything You Need To
            <span className="text-gradient"> Dominate Online</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We have the most effective strategies that have been refined and continue to help businesses dominate with their online presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

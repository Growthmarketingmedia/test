import { Play, Star } from "lucide-react";
import { useState } from "react";

const heroVideo = {
  id: "kqRKnn6uN8o",
  title: "#1 On Google For Water Restoration",
  result: "+47% more leads in 90 days",
  client: "Water Restoration Company",
};

const supportingTestimonials = [
  {
    name: "TJ Wallace",
    company: "Business Owner",
    quote: "Cam and his team work non stop to deliver results at a very reasonable cost. Available day and night.",
    result: "+32% booked calls",
  },
  {
    name: "Treshon Perry",
    company: "Entrepreneur", 
    quote: "Since month 2 we have been getting amazing results with our SEO... starting from ZERO!",
    result: "Page 1 rankings",
  },
  {
    name: "Jon Jacobsen",
    company: "Client",
    quote: "Communication is outstanding. The ability to surmount technical obstacles is excellent.",
    result: "3x ROI achieved",
  },
];

const SocialProof = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="proof" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-3 block">
            Client Results
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Don't Take Our Word—<span className="text-gradient">See The Proof</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real results from real contractors who trusted us with their growth.
          </p>
        </div>

        {/* Hero Video */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative rounded-2xl overflow-hidden bg-card border border-border">
            <div className="aspect-video relative">
              {isPlaying ? (
                <iframe
                  src={`https://www.youtube.com/embed/${heroVideo.id}?autoplay=1`}
                  title={heroVideo.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <img
                    src={`https://img.youtube.com/vi/${heroVideo.id}/hqdefault.jpg`}
                    alt={heroVideo.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-background/30" />
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center group"
                  >
                    <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 transition-transform group-hover:scale-110">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </button>
                </>
              )}
            </div>
            <div className="p-6 bg-card">
              <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">{heroVideo.client}</p>
              <h3 className="text-xl font-bold mb-2">{heroVideo.title}</h3>
              <p className="text-primary font-semibold">{heroVideo.result}</p>
            </div>
          </div>
        </div>

        {/* Supporting Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {supportingTestimonials.map((t, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors">
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">"{t.quote}"</p>
              
              {/* Result badge */}
              <div className="inline-block px-3 py-1 bg-primary/10 rounded-full mb-4">
                <span className="text-xs font-semibold text-primary">{t.result}</span>
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

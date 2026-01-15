import { Play, Star } from "lucide-react";
import { useState } from "react";

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const videoTestimonials = [
  {
    id: "kqRKnn6uN8o",
    title: "#1 On Google For Water Restoration",
    quote: "We're now ranking #1 for water restoration in our area",
    client: "Patrick",
    result: "$115K in a month",
  },
  {
    id: "AoOlJl_JYmI",
    title: "Local Roofing Company Ranks #1 on Google",
    quote: "Oh 100% there's no doubt all the actual new customers came from Tridas",
    client: "Tom",
    result: "$115K in a month",
  },
  {
    id: "LcBj6KC1_JU",
    title: "Roofing Testimonial After Changing Marketing Companies",
    quote: "You guys are getting us a little bit more what we're looking for in terms of the quality of the leads",
    client: "Jason & Jen",
    result: "$135K closed in 2 months",
  },
  {
    id: "RVPh9yJCx_Q",
    title: "Water Job That Turned Into Much More",
    quote: "Cheers and congratulations on getting pre june to a million!",
    client: "Kyle",
    result: "$1,000,000 in 6 months",
  },
];

const VideoCard = ({ video }: { video: typeof videoTestimonials[0] }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-colors">
      {/* Stars with Google icon */}
      <div className="p-4 pb-2 flex items-center gap-2">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]" />
          ))}
        </div>
        <GoogleIcon />
      </div>

      {/* Video */}
      <div className="relative aspect-video mx-4">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            className="absolute inset-0 w-full h-full rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <img
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-background/20 rounded-lg" />
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center group"
            >
              <div className="w-14 h-14 rounded-full bg-background/90 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                <Play className="w-6 h-6 text-foreground ml-1" fill="currentColor" />
              </div>
            </button>
            {/* Result overlay */}
            <div className="absolute top-2 right-2 bg-[#FBBC04] text-black px-2 py-1 rounded text-xs font-bold">
              {video.result}
            </div>
          </>
        )}
      </div>

      {/* Quote and client */}
      <div className="p-4">
        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
          "{video.quote}"
        </p>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center overflow-hidden">
            <span className="text-xs font-bold text-muted-foreground">
              {video.client.charAt(0)}
            </span>
          </div>
          <span className="font-semibold text-sm">{video.client}</span>
        </div>
      </div>
    </div>
  );
};

const VideoTestimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-3 block">
            Video Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Hear It <span className="text-gradient">From Our Clients</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real contractors sharing their real results.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {videoTestimonials.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;

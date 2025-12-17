import { Play } from "lucide-react";
import { useState } from "react";

const videoTestimonials = [
  {
    id: "kqRKnn6uN8o",
    title: "#1 On Google For Water Restoration",
    description: "See how we got this client ranking #1 on Google",
    client: "Water Restoration Company",
  },
  {
    id: "iVF5B9qlUJM",
    title: "Scale Your Business With Google",
    description: "Learn how Google can help scale your business",
    client: "Business Growth Story",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Lee From Fortitude Roofing - 19 Months",
    description: "Hear what Lee has to say after 19 months of working together",
    client: "Fortitude Roofing",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Travis From T Bare Roofing",
    description: "Travis shares his experience with Growth Marketing Media",
    client: "T Bare Roofing",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Kurtis - Switched From Another Agency",
    description: "Why Kurtis switched to Growth Marketing Media",
    client: "Happy Client",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Live Water Damage Job With Patrick",
    description: "Live on a water damage job during a check-in call",
    client: "Restoration Client",
  },
];

const VideoCard = ({ video, index }: { video: typeof videoTestimonials[0]; index: number }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Video Thumbnail / Player */}
      <div className="relative aspect-video bg-muted">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            {/* Thumbnail */}
            <img
              src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
              alt={video.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
              }}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-300" />
            
            {/* Play Button */}
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center"
              aria-label={`Play ${video.title}`}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:scale-110">
                <Play className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground ml-1" fill="currentColor" />
              </div>
            </button>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="text-xs font-medium text-primary uppercase tracking-wider">
          {video.client}
        </span>
        <h3 className="text-lg font-semibold mt-2 mb-2 group-hover:text-primary transition-colors">
          {video.title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {video.description}
        </p>
      </div>
    </div>
  );
};

const VideoTestimonials = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Video Testimonials
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Real Results, <span className="text-gradient">Real Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Watch our clients share their experiences and the incredible results they've achieved with Growth Marketing Media 🎥
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoTestimonials.map((video, index) => (
            <VideoCard key={`${video.id}-${index}`} video={video} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-muted-foreground">
            Want to be our next success story? Let's talk.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;

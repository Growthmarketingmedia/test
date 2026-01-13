import { Play, Star } from "lucide-react";
import { useState } from "react";

const videoTestimonials = [
  {
    id: "kqRKnn6uN8o",
    title: "How T-Bare Roofing Scaled To $1M+ In Revenue",
    description: "Travis shares exactly how the AI Lead Engine transformed his business.",
    client: "T-Bare Roofing",
    stat: "+32% Close Rate",
    featured: true
  },
  {
    id: "iVF5B9qlUJM",
    title: "Doubled Lead Volume In 30 Days",
    description: "Why Kurtis switched from Angi leads.",
    client: "Restoration Pro",
    stat: "2x Lead Volume",
    featured: false
  },
  {
    id: "dQw4w9WgXcQ",
    title: "The Best ROI We've Seen",
    description: "Consistent qualified appointments every week.",
    client: "Apex Services",
    stat: "10x ROI",
    featured: false
  }
];

const VideoCard = ({ video, featured }: { video: typeof videoTestimonials[0], featured?: boolean }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={`group relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 ${featured ? 'h-full' : ''}`}>
      {/* Video Thumbnail */}
      <div className={`relative bg-slate-900 ${featured ? 'aspect-video md:aspect-auto md:h-full min-h-[300px]' : 'aspect-video'}`}>
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
            <img
              src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
              alt={video.title}
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
              onError={(e) => {
                e.currentTarget.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
              }}
            />

            {/* Play Button */}
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center z-10"
            >
              <div className={`${featured ? 'w-20 h-20' : 'w-14 h-14'} rounded-full bg-white/10 backdrop-blur-sm border border-white/50 flex items-center justify-center hover:scale-110 transition-transform duration-300`}>
                <Play className={`${featured ? 'w-8 h-8' : 'w-5 h-5'} text-white ml-1 fill-white`} />
              </div>
            </button>

            {/* Featured Badge */}
            {featured && (
              <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                FEATURED CASE STUDY
              </div>
            )}
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <span className="text-xs font-bold text-primary uppercase tracking-wider mb-1 block">
              {video.client}
            </span>
            <h3 className={`${featured ? 'text-2xl' : 'text-lg'} font-bold text-slate-900 leading-tight`}>
              {video.title}
            </h3>
          </div>
          {/* Stat Badge */}
          <div className="bg-green-50 text-green-700 px-3 py-1 rounded-lg text-sm font-bold border border-green-100 whitespace-nowrap">
            {video.stat}
          </div>
        </div>

        <p className="text-slate-600 text-sm mb-4">
          {video.description}
        </p>

        {featured && (
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
          </div>
        )}
      </div>
    </div>
  );
};

const VideoTestimonialsV2 = () => {
  const featuredVideo = videoTestimonials.find(v => v.featured);
  const otherVideos = videoTestimonials.filter(v => !v.featured);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
            See Real <span className="text-gradient">Results</span>
          </h2>
          <p className="text-xl text-slate-600">
            Don't just take our word for it. Hear from contractors who are dominating their market.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Hero Video (Left) */}
          {featuredVideo && <VideoCard video={featuredVideo} featured={true} />}

          {/* Smaller Videos (Right) */}
          <div className="flex flex-col gap-6">
            {otherVideos.map((video, index) => (
              <VideoCard key={index} video={video} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialsV2;


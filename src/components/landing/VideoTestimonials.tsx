import { Play, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

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
  {
    id: "uoGgsMHXrVA",
    title: "Client Success Story",
    quote: "Working with the team has been an absolute game changer for our business growth.",
    client: "Satisfied Client",
    result: "Consistent Lead Flow",
  },
  {
    id: "iVF5B9qlUJM",
    title: "Amazing Results",
    quote: "The ROI we've seen since starting has exceeded all our expectations.",
    client: "Happy Customer",
    result: "Record Breaking Month",
  },
];

const VideoCard = ({ video }: { video: typeof videoTestimonials[0] }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-colors">
      {/* Video */}
      <div className="relative aspect-video m-4">
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
  const [showAll, setShowAll] = useState(false);

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {videoTestimonials.slice(0, showAll ? undefined : 3).map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        {/* See More Button */}
        <div className="mt-12 text-center">
          <Button
            variant="ghost"
            onClick={() => setShowAll(!showAll)}
            className="gap-2 text-primary hover:text-primary/80"
          >
            {showAll ? (
              <>
                See Less <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                See More <ChevronDown className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;

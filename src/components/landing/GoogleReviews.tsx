
import { Star, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { useCallback } from "react";

const reviews = [
  {
    id: 1,
    name: "Maxwell T.",
    date: "2 months ago",
    stars: 5,
    text: "Coach Rod #1",
    verified: true,
  },
  {
    id: 2,
    name: "Jessica R.",
    date: "2 months ago",
    stars: 5,
    text: "I have been with Gym Launch for 2 months. SO WORTH IT! I had been running a Brazilian Jiu Jitsu school part time for 7 years, and was ready to take it full-time, moving...",
    verified: true,
  },
  {
    id: 3,
    name: "Paul T.",
    date: "3 months ago",
    stars: 5,
    text: "Gym Launch is awesome! Been in for a month and the biggest win so far was doing $25,000 in sales which is the most I've ever done in my career as an entrepreneur in the last...",
    verified: true,
  },
  {
    id: 4,
    name: "Salem G.",
    date: "3 months ago",
    stars: 5,
    text: "We joined GL to learn what we didn't know... It's been awesome! Coach Rod has been great to work with! We just sold $40K in one month with our 8 week challenge. The GL team i...",
    verified: true,
  },
  {
    id: 5,
    name: "Stephen F.",
    date: "4 months ago",
    stars: 5,
    text: "I've been working with Gym Launch as my business consultants for the past 9 months, and the impact they've had on my business has been nothing short of...",
    verified: true,
  },
  {
    id: 6,
    name: "Avalon",
    date: "4 months ago",
    stars: 5,
    text: "Rod is helping us take our gym to new heights and constantly provides ways for us to pivot and keep moving forward. In Rod We Trust",
    verified: true,
  },
   {
    id: 7,
    name: "Al K.",
    date: "4 months ago",
    stars: 5,
    text: "Imagine being broke, working 7 days a week, never having time for your family or yourself, and knowing that if you don't make a change you'll never get out of the rut...",
    verified: true,
  },
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26-1.19-.58z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const GoogleReviews = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-10 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="bg-black text-white rounded-xl p-6 md:p-8 max-w-7xl mx-auto shadow-2xl overflow-hidden relative">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
             <div className="flex items-center gap-4">
                <span className="text-4xl md:text-5xl font-bold">4.5</span>
                <div className="flex flex-col">
                  <div className="flex gap-1 mb-1">
                     {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-[#FBBC04] fill-[#FBBC04]" />
                     ))}
                  </div>
                  <a href="#" className="text-sm underline hover:text-gray-300">101 reviews on Google</a>
                </div>
             </div>
             <Button className="bg-[#1a73e8] hover:bg-[#1557b0] text-white rounded-full px-6 py-2 font-medium">
                Review us on Google
             </Button>
          </div>

          {/* Carousel */}
          <div className="relative">
             <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
                <div className="flex gap-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="flex-[0_0_280px] md:flex-[0_0_320px] min-w-0">
                      <div className="bg-white text-black p-5 rounded-xl h-full flex flex-col min-h-[220px]">
                        <div className="flex justify-between items-start mb-3">
                           <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600 uppercase">
                                 {review.name.charAt(0)}
                              </div>
                              <div>
                                 <div className="flex items-center gap-1">
                                    <span className="font-bold text-sm">{review.name}</span>
                                    {review.verified && <CheckCircle2 className="w-3 h-3 text-blue-500 fill-blue-100" />}
                                 </div>
                                 <div className="flex items-center gap-1 text-xs text-gray-500">
                                    <GoogleIcon />
                                    <span>{review.date}</span>
                                 </div>
                              </div>
                           </div>
                           <GoogleIcon />
                        </div>
                        
                        <div className="flex gap-0.5 mb-2">
                           {[...Array(review.stars)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 text-[#FBBC04] fill-[#FBBC04]" />
                           ))}
                        </div>

                        <p className="text-sm text-gray-700 leading-relaxed line-clamp-4 mb-2">
                           {review.text}
                        </p>
                        
                        <a href="#" className="text-sm text-gray-500 hover:text-black mt-auto inline-block">
                           Read more
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
             
             {/* Navigation Buttons (Optional, visible on hover often, but let's keep it simple or add if needed. The screenshot shows arrows on the sides maybe?) */}
             {/* The screenshot shows scroll indicators on left/right edges. */}
             <button onClick={scrollPrev} className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 w-8 h-8 rounded-full bg-white text-black shadow-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity focus:opacity-100 md:-ml-4 z-10 hidden md:flex">
                <ChevronLeft className="w-5 h-5" />
             </button>
             <button onClick={scrollNext} className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 w-8 h-8 rounded-full bg-white text-black shadow-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity focus:opacity-100 md:-mr-4 z-10 hidden md:flex">
                <ChevronRight className="w-5 h-5" />
             </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;

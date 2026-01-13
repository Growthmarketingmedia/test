import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "T Bare Roofing",
    role: "Roofing Company",
    content: "Cameron and his team has been amazing since the start. Timing has been on target, customer service is amazing, and their communication throughout the process has been unbelievable. This experience has been worth every dollar. We have had an immediate change in our business.",
    rating: 5,
  },
  {
    name: "TJ Wallace",
    role: "Business Owner",
    content: "If you're looking for someone to grow your business, look no further. Cam and his team work non stop, to deliver results at a very reasonable cost. Cam is available day and night and the most responsive SEO person I've dealt with. Do your business a favor and hire them.",
    rating: 5,
  },
  {
    name: "Treshon Perry",
    role: "Entrepreneur",
    content: "We have been working together for some months now and since month 2 we have been getting amazing results with our SEO stuff… and that's starting from ZERO! His communication is crystal clear, he is always on time for our calls.",
    rating: 5,
  },
  {
    name: "Michael Joseph",
    role: "Business Owner",
    content: "Working with Growth Marketing Media has been a great experience. Within 3 months we were ranking on the first page of Google for some of the most competitive keywords in our industry. These guys are a breath of fresh air.",
    rating: 5,
  },
  {
    name: "Keith Slifer",
    role: "Business Owner",
    content: "Since working with Cameron and Michael, our results have not only drastically improved, but we have experienced double-digit growth in sales during C19. Pretty impressive! Thank you!",
    rating: 5,
  },
  {
    name: "Jon Jacobsen",
    role: "Client",
    content: "Cameron and Stephanie have been superb in their consulting for our digital marketing. Communication is outstanding. The ability to surmount technical obstacles is excellent. I give them my highest possible recommendation!!",
    rating: 5,
  },
];

const TestimonialsV2 = () => {
  return (
    <section id="results" className="py-32 pb-48 relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
            Still Not Convinced?
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
            Hear It From <span className="text-gradient">Our Clients</span>
          </h2>
          <p className="text-xl text-slate-600">
            We could talk all day about AI and results — but let's let our clients do the talking instead 👇
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative p-8 rounded-2xl bg-white border border-slate-200 hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <Quote className="w-8 h-8 text-slate-400 mb-4" />

              {/* Content */}
              <p className="text-slate-600 mb-6 leading-relaxed line-clamp-5">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-2xl font-semibold mb-4 text-slate-900">
            Ready to become our next success story?
          </p>
          <p className="text-slate-600 mb-8">
            Join hundreds of businesses that have scaled with Growth Marketing Media
          </p>
        </div>
      </div>

      {/* Wave Divider - Light to Dark */}
      <div className="wave-divider-light-dark">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1146.53,118.92,1080.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};

export default TestimonialsV2;


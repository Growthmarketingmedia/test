import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowRight, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
                Let's Make It Happen
              </span>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Your Turn To <span className="text-gradient">Win</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                You've seen what we do, why it works, and what our clients say. The only question left: are you ready to be our next success story?
              </p>

              {/* Contact Info */}
              <div className="space-y-6 mb-10">
                <a
                  href="tel:3039682741"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Call Us Now</div>
                    <div className="text-lg font-semibold group-hover:text-primary transition-colors">
                      (303) 968-2741
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:hello@growthmarketingmedia.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email Us</div>
                    <div className="text-lg font-semibold group-hover:text-primary transition-colors">
                      hello@growthmarketingmedia.com
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Response Time</div>
                    <div className="text-lg font-semibold">Within 24 Hours</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: CTA Card */}
            <div className="relative">
              <div className="bg-card rounded-3xl border border-border p-10 shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">
                  Claim Your Free Strategy Session
                </h3>
                <p className="text-muted-foreground mb-8">
                  In this call, we'll analyze your current marketing, identify opportunities for growth, and create a custom roadmap to scale your business.
                </p>

                {/* What's included */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>Full website & SEO audit</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>Competitor analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>Custom growth roadmap</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>No obligation - 100% free</span>
                  </div>
                </div>

                <Button variant="hero" size="xl" className="w-full">
                  Schedule A Call
                  <ArrowRight className="w-5 h-5" />
                </Button>

                <p className="text-center text-sm text-muted-foreground mt-6">
                  🔒 Your information is 100% secure
                </p>
              </div>

              {/* Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

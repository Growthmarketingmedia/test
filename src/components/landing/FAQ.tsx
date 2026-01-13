import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How fast will I see results?",
    answer: "Most clients see measurable improvements within 30-60 days. AI lead capture starts working immediately, while SEO and organic growth compound over 3-6 months for maximum impact.",
  },
  {
    question: "Do you run paid ads?",
    answer: "We offer both organic and paid strategies. Our Accelerator Package includes Google Ads management. However, our AI Lead Engine works with any traffic source—paid or organic.",
  },
  {
    question: "Do I need to create content myself?",
    answer: "No. We handle content strategy and creation as part of our service. You focus on running your business; we focus on generating leads.",
  },
  {
    question: "What industries do you work with?",
    answer: "We specialize in home service contractors: roofing, HVAC, plumbing, restoration, landscaping, electrical, and similar trades. Our systems are optimized for local service businesses.",
  },
  {
    question: "What's the contract length?",
    answer: "We work on 6-month partnerships because real growth takes time. Quick fixes don't work—we build sustainable systems that compound over time.",
  },
  {
    question: "How is this different from other agencies?",
    answer: "We combine AI-powered lead qualification with proven SEO and paid strategies. Most agencies just run ads. We build complete systems that capture, qualify, and convert leads 24/7.",
  },
  {
    question: "What if I'm not happy with the results?",
    answer: "We're confident in our results, but we also believe in earning your trust. We provide full transparency with weekly reports and regular strategy calls so you always know what's working.",
  },
  {
    question: "How much does it cost?",
    answer: "Investment varies based on your goals and market. We offer packages starting from Foundation (organic focus) to Accelerator (full paid + organic). Book a call to discuss what makes sense for you.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-3 block">
            FAQs
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Questions? <span className="text-gradient">We've Got Answers</span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-background border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-card/50 transition-colors"
              >
                <span className="font-semibold pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 animate-fade-in">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

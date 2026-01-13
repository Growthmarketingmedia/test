import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const FAQV2 = () => {
    return (
        <section className="py-24 bg-background border-t border-border/50">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                        Frequently Asked <span className="text-gradient">Questions</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">Everything you need to know about our growth systems.</p>
                </div>

                <Accordion type="single" collapsible className="w-full mb-16">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg font-semibold text-foreground">How fast will I see results?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Our AI Lead Engine starts working the moment it's live (usually within 7 days). Most clients see their first qualified appointments within the first 2 weeks of the campaign launch.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg font-semibold text-foreground">Do I need to spend money on ads?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            We recommend a minimum ad spend to fuel the engine, but our system is designed to maximize ROI. We also optimize your organic presence (SEO) to drive free traffic over time.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-lg font-semibold text-foreground">Do I have to sign a long-term contract?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            No. We believe in earning your business every month. We operate on month-to-month agreements because we're confident our results will keep you stay.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-lg font-semibold text-foreground">Will the AI sound robotic?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Not at all. We train the AI on successful sales scripts and your specific business knowledge. Most leads don't even realize they're talking to an AI helper until you jump in to close the deal.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger className="text-lg font-semibold text-foreground">What happens if I get too many leads?</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            That's a good problem to have! Our system allows us to throttle ad spend or tighten qualification criteria so you only speak with the absolute best prospects when you're at capacity.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                {/* Final CTA Block */}
                <div className="bg-primary/10 border border-primary/20 rounded-3xl p-8 md:p-12 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Ready To Scale Your Business?
                    </h3>
                    <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                        Join 500+ contractors who are generating predictable revenue with our AI systems.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button variant="hero" size="xl">
                            <Phone className="w-5 h-5 mr-2" />
                            Book Strategy Call
                        </Button>
                    </div>
                    <p className="text-xs text-muted-foreground mt-6">
                        No pressure. No obligation. Just a conversation about your growth.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FAQV2;

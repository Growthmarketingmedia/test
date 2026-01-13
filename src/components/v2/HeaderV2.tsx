import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const HeaderV2 = () => {
    return (
        <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src="/lovable-uploads/617416ec-21bd-4286-9dc7-684695029e24.png" alt="Growth Marketing Media" className="h-10 w-auto" />
                </div>

                {/* Single CTA */}
                <Button variant="default" size="lg" className="hidden sm:flex shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300">
                    <Phone className="w-4 h-4 mr-2" />
                    Book A Strategy Call
                </Button>
            </div>
        </header>
    );
};

export default HeaderV2;

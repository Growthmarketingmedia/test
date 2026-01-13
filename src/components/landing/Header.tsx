import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-10 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <span className="text-xl font-bold leading-none">
              <span className="text-foreground">GROWTH</span>
              <span className="text-primary">MARKETING</span>
            </span>
            <span className="text-xs text-muted-foreground self-end pb-0.5">Media</span>
          </a>

          {/* Desktop: Minimal nav + CTA */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#proof"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Proof
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              FAQs
            </a>
            <Button variant="hero" size="default">
              Book Strategy Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-3">
              <a
                href="#proof"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Proof
              </a>
              <a
                href="#faq"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQs
              </a>
              <Button variant="hero" className="w-full mt-2">
                Book Strategy Call
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

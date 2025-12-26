import { Rocket } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="relative top-0 left-0 right-0 z-[60] bg-primary/20 border-b border-primary/30 py-2 px-4 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-center gap-1 md:gap-2 text-xs md:text-sm">
        <Rocket className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0" />
        <span className="text-primary font-semibold whitespace-nowrap">Limited Time</span>
        <span className="text-muted-foreground hidden md:inline">—</span>
        <span className="text-foreground truncate">AI-Powered Lead Generation Now Available.</span>
        <a href="#contact" className="text-primary hover:underline whitespace-nowrap">
          Apply Today.
        </a>
      </div>
    </div>
  );
};

export default AnnouncementBar;

import { Rocket } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="sticky top-0 z-50 bg-primary/20 border-b border-primary/30 py-2 px-4">
      <div className="container mx-auto flex items-center justify-center gap-2 text-sm">
        <Rocket className="w-4 h-4 text-primary" />
        <span className="text-primary font-semibold">Limited Time</span>
        <span className="text-muted-foreground">—</span>
        <span className="text-foreground">AI-Powered Lead Generation Now Available.</span>
        <a href="#contact" className="text-primary hover:underline ml-1">
          Apply Today.
        </a>
      </div>
    </div>
  );
};

export default AnnouncementBar;

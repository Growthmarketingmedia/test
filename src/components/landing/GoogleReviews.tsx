
import { useEffect } from 'react';

const GoogleReviews = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto px-4">
        <div className="elfsight-app-e7df9e6e-4af1-4b10-ac74-7dccda7f244a" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
};

export default GoogleReviews;

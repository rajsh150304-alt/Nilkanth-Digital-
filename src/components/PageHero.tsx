import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  children?: ReactNode;
}

const PageHero = ({ title, subtitle, image }: PageHeroProps) => {
  return (
    <section className="relative pt-16 overflow-hidden">
      {image ? (
        <>
          <div className="absolute inset-0">
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10 py-16 lg:py-20 text-center">
            <div className="red-line mx-auto mb-4 animate-in" />
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight mb-3 animate-in animate-in-delay-1">
              {title}
            </h1>
            {subtitle && (
              <p className="text-muted-foreground text-sm max-w-xl mx-auto animate-in animate-in-delay-2">
                {subtitle}
              </p>
            )}
          </div>
        </>
      ) : (
        <div className="hero-gradient py-16 lg:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="red-line mx-auto mb-4 animate-in" />
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight mb-3 animate-in animate-in-delay-1">
              {title}
            </h1>
            {subtitle && (
              <p className="text-muted-foreground text-sm max-w-xl mx-auto animate-in animate-in-delay-2">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default PageHero;

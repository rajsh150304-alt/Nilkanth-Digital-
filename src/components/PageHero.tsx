import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  children?: ReactNode;
}

const PageHero = ({ title, subtitle, image }: PageHeroProps) => {
  return (
    <section className="relative pt-20 lg:pt-24 overflow-hidden">
      {image ? (
        <>
          <div className="absolute inset-0">
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-[hsla(0,0%,0%,0.8)] via-[hsla(0,0%,0%,0.6)] to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10 py-20 lg:py-28 text-center">
            <div className="red-line mx-auto mb-6 animate-in" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight mb-4 animate-in animate-in-delay-1">
              {title}
            </h1>
            {subtitle && (
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-in animate-in-delay-2">
                {subtitle}
              </p>
            )}
          </div>
        </>
      ) : (
        <div className="hero-gradient py-20 lg:py-28">
          <div className="container mx-auto px-4 text-center">
            <div className="red-line mx-auto mb-6 animate-in" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight mb-4 animate-in animate-in-delay-1">
              {title}
            </h1>
            {subtitle && (
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-in animate-in-delay-2">
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

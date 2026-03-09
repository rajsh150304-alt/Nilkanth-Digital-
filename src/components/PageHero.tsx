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
            <img src={image} alt={title} className="w-full h-full object-cover scale-in" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          </div>
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="glow-orb glow-orb-primary w-[300px] h-[300px] -top-20 right-1/4 opacity-30" />
          
          <div className="container mx-auto px-4 relative z-10 py-20 lg:py-24 text-center">
            <div className="red-line mx-auto mb-5 animate-in" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight mb-4 animate-in animate-in-delay-1">
              {title}
            </h1>
            {subtitle && (
              <p className="text-muted-foreground text-base max-w-2xl mx-auto animate-in animate-in-delay-2">
                {subtitle}
              </p>
            )}
          </div>
        </>
      ) : (
        <div className="relative hero-gradient py-20 lg:py-24">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="glow-orb glow-orb-primary w-[300px] h-[300px] top-0 left-1/3 opacity-25" />
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="red-line mx-auto mb-5 animate-in" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight mb-4 animate-in animate-in-delay-1">
              {title}
            </h1>
            {subtitle && (
              <p className="text-muted-foreground text-base max-w-2xl mx-auto animate-in animate-in-delay-2">
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

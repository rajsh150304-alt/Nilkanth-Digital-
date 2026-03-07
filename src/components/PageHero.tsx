import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

const PageHero = ({ title, subtitle }: PageHeroProps) => {
  return (
    <section className="hero-gradient pt-24 pb-16 lg:pt-32 lg:pb-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4 animate-in">
          {title}
        </h1>
        {subtitle && (
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto animate-in animate-in-delay-1">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;

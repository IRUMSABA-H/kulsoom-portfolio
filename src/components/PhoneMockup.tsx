import { useState } from "react";

interface PhoneMockupProps {
  src: string;
  alt: string;
  priority?: boolean;
}

/**
 * Realistic phone frame containing an app screenshot.
 * Pure CSS — no extra dependencies. Aspect ratio is locked to 9:19.5.
 */
const PhoneMockup = ({ src, alt, priority }: PhoneMockupProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-[260px] aspect-[9/19.5]">
      {/* Outer frame */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-secondary to-background border border-border/80 shadow-card p-[6px]">
        {/* Inner bezel */}
        <div className="relative h-full w-full rounded-[2.1rem] bg-background overflow-hidden">
          {/* Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 h-5 w-20 rounded-full bg-background border border-border/60" />
          {!isLoaded && !hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary via-background to-secondary/70">
              <div className="h-10 w-10 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
            </div>
          )}
          {hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary via-background to-secondary/70 px-6 text-center">
              <p className="text-sm text-muted-foreground">Preview unavailable</p>
            </div>
          )}
          {/* Screen */}
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={priority ? "high" : "auto"}
            width={512}
            height={1024}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`h-full w-full object-contain bg-background transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
      {/* Side button hints */}
      <span className="absolute -left-[3px] top-[22%] h-10 w-[3px] rounded-l bg-border/80" />
      <span className="absolute -left-[3px] top-[34%] h-16 w-[3px] rounded-l bg-border/80" />
      <span className="absolute -right-[3px] top-[28%] h-12 w-[3px] rounded-r bg-border/80" />
    </div>
  );
};

export default PhoneMockup;

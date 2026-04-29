import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute top-20 right-10 h-72 w-72 rounded-full bg-primary-glow/10 blur-3xl" />

      <div className="container relative pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-secondary/50 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur animate-fade-in">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Available for new projects
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-foreground sm:text-6xl md:text-7xl animate-fade-up">
            Kulsoom Jahangir
          </h1>

          <p className="mt-4 text-xl font-medium text-gradient sm:text-2xl animate-fade-up [animation-delay:100ms]">
            Flutter Front-End Developer
          </p>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg animate-fade-up [animation-delay:200ms]">
            I am a passionate Flutter developer focused on building clean, modern
            and user-friendly mobile applications. I enjoy turning ideas into real
            products.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up [animation-delay:300ms]">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 hover:scale-[1.03] transition-smooth shadow-glow-primary px-7 h-12 rounded-full font-semibold"
            >
              View My Work
              <ArrowDown className="ml-1 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="h-12 rounded-full border-border/80 bg-secondary/40 hover:bg-secondary px-7 font-medium"
            >
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

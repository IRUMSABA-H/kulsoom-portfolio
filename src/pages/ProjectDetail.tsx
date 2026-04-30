import { Link, useParams } from "react-router-dom";
import type { MouseEvent } from "react";
import { ArrowLeft, Download } from "lucide-react";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import PhoneMockup from "@/components/PhoneMockup";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Footer from "@/components/Footer";
import { slugify } from "@/lib/utils";
import { toast } from "@/components/ui/use-toast";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => slugify(p.id) === id);
  const hasPublicApk = project ? project.apkLink !== "#" : false;

  const handleDownloadClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (hasPublicApk) {
      return;
    }

    event.preventDefault();
    toast({
      title: "APK Not Publicly Available",
      description:
        "Due to design and intellectual property protection, the APK is not available for public download.",
    });
  };

  if (!project) {
    return (
      <main className="container py-32 text-center">
        <h1 className="font-display text-4xl font-bold">Project not found</h1>
        <Link to="/" className="mt-6 inline-block text-primary hover:underline">
          ← Back to portfolio
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <div className="container pt-10 pb-20 md:pt-14 animate-fade-in">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-smooth hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 items-start">
          <div className="relative animate-fade-up">
            <div className="pointer-events-none absolute inset-0 -z-10 mx-auto max-w-4xl bg-primary/15 blur-3xl" />
            <div className="md:hidden">
              <Carousel
                opts={{ align: "start", loop: project.images.length > 1 }}
                className="mx-auto w-full max-w-sm px-10"
              >
                <CarouselContent>
                  {project.images.slice(0, 3).map((image, index) => (
                    <CarouselItem key={`${project.id}-${index}`}>
                      <div className={index === 0 ? "animate-float" : ""}>
                        <PhoneMockup
                          src={image}
                          alt={`${project.title} screenshot ${index + 1}`}
                          priority={index === 0}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0 border-border/80 bg-background/90" />
                <CarouselNext className="right-0 border-border/80 bg-background/90" />
              </Carousel>
            </div>

            <div className="hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-3">
              {project.images.slice(0, 3).map((image, index) => (
                <div
                  key={`${project.id}-desktop-${index}`}
                  className={index === 0 ? "md:col-span-2 xl:col-span-1" : ""}
                >
                  <div className={index === 0 ? "animate-float" : ""}>
                    <PhoneMockup
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      priority={index === 0}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-up [animation-delay:120ms]">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Case Study
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              {project.tagline}
            </p>

            <p className="mt-6 leading-relaxed text-foreground/85">
              {project.description}
            </p>

            <div className="mt-10 rounded-3xl border border-border/70 bg-gradient-card p-6 shadow-card">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                App Download
              </p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {hasPublicApk
                  ? "APK or store link is available for this project. Open it from the button below."
                  : "This project is currently private, so the public APK is not available right now."}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-primary text-primary-foreground hover:opacity-90 hover:scale-[1.03] transition-smooth shadow-glow-primary h-12 rounded-full px-7 font-semibold"
                >
                  <a
                    href={hasPublicApk ? project.apkLink : "#"}
                    download={hasPublicApk}
                    onClick={handleDownloadClick}
                    target={hasPublicApk ? "_blank" : undefined}
                    rel={hasPublicApk ? "noreferrer" : undefined}
                  >
                    <Download className="mr-1 h-4 w-4" />
                    Download APK
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-border/80 bg-secondary/40 hover:bg-secondary px-7"
                >
                  <Link to="/#projects">More projects</Link>
                </Button>
              </div>
            </div>

          
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ProjectDetail;

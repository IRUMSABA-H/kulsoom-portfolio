import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <section id="projects" className="container py-20 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Selected Work
        </p>
        <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
          Apps I've crafted
        </h2>
        <p className="mt-4 text-muted-foreground">
          A handpicked collection of Flutter applications I've designed and
          developed — tap any project to see the full case study.
        </p>
      </div>

      <div className="mt-14 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

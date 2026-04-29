import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import type { Project } from "@/data/projects";
import { slugify } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <Link
      to={`/projects/${slugify(project.id)}`}
      className="group relative block rounded-3xl bg-gradient-card border border-border/60 p-8 shadow-card transition-smooth hover:border-primary/40 hover:-translate-y-2 hover:shadow-glow-primary animate-fade-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-smooth"
           style={{ background: "radial-gradient(circle at 50% 0%, hsl(var(--primary) / 0.18), transparent 60%)" }} />

      <div className="relative">
        <PhoneMockup src={project.images[0]} alt={`${project.title} app screenshot`} />
      </div>

      <div className="relative mt-6 text-center">
        <h3 className="font-display text-xl font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
          {project.tagline}
        </p>

        <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-smooth">
          View Details
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

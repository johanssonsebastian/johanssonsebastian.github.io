import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <Link
      to={`/projekt/${project.slug}`}
      className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: Math.min(index, 2) * 0.06, ease: "easeOut" }}
        className="group relative cursor-pointer h-full flex flex-col"
      >
        {/* Image container */}
        <div className="relative overflow-hidden bg-card mb-6 aspect-[4/5]">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 z-10 transition-opacity duration-500 group-hover:opacity-40" />

          <img
            src={project.image}
            alt={`${project.title} – ${project.category}`}
            loading="lazy"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          />

          {/* Category badge */}
          <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20">
            <span className="bg-background/90 backdrop-blur-sm text-foreground px-4 py-2 text-xs font-body tracking-widest uppercase border border-border/50">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3 flex-1 flex flex-col">
          <h3 className="font-display font-medium text-foreground text-2xl md:text-3xl leading-tight transition-colors duration-300 group-hover:text-primary">
            {project.title}
          </h3>

          <p className="text-muted-foreground font-body text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          <p className="font-body text-sm text-foreground">
            <span className="text-primary">Min roll:</span> {project.role}
          </p>

          <span className="inline-flex items-center gap-2 mt-auto pt-4 text-primary font-body text-sm tracking-wider uppercase">
            Läs mer
          </span>
        </div>
      </motion.article>
    </Link>
  );
};

export default ProjectCard;

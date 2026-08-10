import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

const ProjectCard = ({ project, index, featured = false }: ProjectCardProps) => {
  return (
    <Link
      to={`/projekt/${project.id}`}
      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <motion.article
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        className={`group relative cursor-pointer ${
          featured ? "md:col-span-1" : ""
        }`}
      >
        {/* Image container */}
        <div className={`relative overflow-hidden bg-card mb-6 ${featured ? "aspect-[4/5]" : "aspect-[4/5]"}`}>
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 z-10 transition-opacity duration-500 group-hover:opacity-40" />
          
          {/* Image */}
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          />
          
          {/* Category badge */}
          <div className="absolute top-6 left-6 z-20">
            <span className="bg-background/90 backdrop-blur-sm text-foreground px-4 py-2 text-xs font-body tracking-widest uppercase border border-border/50">
              {project.category}
            </span>
          </div>

        </div>

        {/* Content */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-primary transition-all duration-300 group-hover:w-12" />
            <span className="text-muted-foreground text-xs font-body tracking-wider uppercase">
              {project.tags[0]}
            </span>
          </div>

          <h3 className={`font-display font-medium text-foreground transition-colors duration-300 group-hover:text-primary ${
            featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
          }`}>
            {project.title}
          </h3>

          <p className="text-muted-foreground font-body text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Läs mer text */}
          <span className="inline-flex items-center gap-2 mt-4 text-primary font-body text-sm tracking-wider uppercase">
            Läs mer
          </span>
        </div>

        {/* Bottom line */}
        <motion.div 
          className="absolute -bottom-4 left-0 h-px bg-primary origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
          style={{ width: "100%" }}
        />
      </motion.article>
    </Link>
  );
};

export default ProjectCard;

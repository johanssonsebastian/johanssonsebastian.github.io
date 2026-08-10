import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const ProjectsGrid = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const totalProjects = projects.length;

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const visibleCount = isMobile ? 1 : 3;

  // Get visible projects with circular wrapping
  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (startIndex + i) % totalProjects;
      visible.push({ project: projects[index], originalIndex: index });
    }
    return visible;
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % totalProjects);
  };

  const visibleProjects = getVisibleProjects();

  return (
    <section id="projects" className="py-32 px-6 md:px-12 lg:px-24 relative">
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-px bg-primary" />
              <span className="text-primary font-body text-xs tracking-[0.3em] uppercase">
                Case Studies
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-foreground tracking-tight">
              Utvalda
              <br />
              <span className="text-primary italic">Projekt</span>
            </h2>
          </div>

          <p className="text-muted-foreground font-body text-base max-w-md leading-relaxed">
            Ett urval av projekt inom digital marknadsföring, strategi och kreativ problemlösning.
          </p>
        </motion.div>
      </div>

      {/* Projects grid */}
      <div className="max-w-7xl mx-auto relative">
        {/* Left arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/3 -translate-y-1/2 -translate-x-2 md:-translate-x-12 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-background/80 backdrop-blur-sm border border-border/50 rounded-full text-foreground hover:text-primary hover:border-primary transition-all duration-300 group"
          aria-label="Föregående projekt"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:-translate-x-0.5" />
        </button>

        {/* Right arrow */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/3 -translate-y-1/2 translate-x-2 md:translate-x-12 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-background/80 backdrop-blur-sm border border-border/50 rounded-full text-foreground hover:text-primary hover:border-primary transition-all duration-300 group"
          aria-label="Nästa projekt"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-0.5" />
        </button>

        {/* Projects carousel */}
        <div className="overflow-hidden px-6 md:px-0">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-20"
          >
            {visibleProjects.map(({ project }, displayIndex) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  layout: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 }
                }}
              >
                <ProjectCard 
                  project={project} 
                  index={displayIndex} 
                  featured={displayIndex < 2}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setStartIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === startIndex 
                  ? "bg-primary w-6" 
                  : "bg-border hover:bg-muted-foreground"
              }`}
              aria-label={`Gå till projekt ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Decorative element */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[40vw] h-[40vw] border border-primary rounded-full pointer-events-none"
      />
    </section>
  );
};

export default ProjectsGrid;

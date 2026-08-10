import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const ProjectsGrid = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    setSnaps(api.scrollSnapList());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", () => {
      setSnaps(api.scrollSnapList());
      onSelect();
    });
  }, [api]);

  return (
    <section id="projects" className="scroll-mt-28 py-24 md:py-32 px-6 md:px-12 lg:px-24 relative">
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-px bg-primary" />
              <span className="text-primary font-body text-xs tracking-[0.3em] uppercase">
                Case Studies
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground tracking-tight leading-[1.05] pb-1">
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

      {/* Static grid – 1 kolumn mobil, 3 kolumner desktop */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;

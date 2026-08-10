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

      {/* Karusell – 1 kort mobil, 2 surfplatta, 3 desktop */}
      <div className="max-w-7xl mx-auto">
        <Carousel setApi={setApi} opts={{ align: "start", loop: true }}>
          <CarouselContent className="-ml-8">
            {projects.map((project, index) => (
              <CarouselItem
                key={project.id}
                className="pl-8 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <ProjectCard project={project} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex items-center justify-between gap-6 mt-12">
            <div className="flex items-center gap-3">
              {snaps.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Gå till projekt ${i + 1}`}
                  onClick={() => api?.scrollTo(i)}
                  className="h-11 flex items-center group"
                >
                  <span
                    className={`h-px transition-all duration-300 ${
                      selected === i
                        ? "w-10 bg-primary"
                        : "w-5 bg-border group-hover:bg-primary/60"
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <CarouselPrevious className="static translate-y-0 h-11 w-11 rounded-none border-border/60 bg-transparent text-foreground hover:bg-primary/10 hover:text-primary" />
              <CarouselNext className="static translate-y-0 h-11 w-11 rounded-none border-border/60 bg-transparent text-foreground hover:bg-primary/10 hover:text-primary" />
            </div>
          </div>
        </Carousel>
      </div>

    </section>
  );
};

export default ProjectsGrid;

import { motion } from "framer-motion";
import { personalInfo } from "@/data/projects";
import { ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 2 }}
          className="absolute top-20 right-20 w-96 h-96 border border-primary rounded-full"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 2, delay: 0.3 }}
          className="absolute top-40 right-40 w-64 h-64 border border-primary rounded-full"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.02 }}
          transition={{ duration: 2, delay: 0.6 }}
          className="absolute -bottom-20 -left-20 w-[500px] h-[500px] border border-primary rounded-full"
        />
      </div>

      {/* Floating decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute top-1/3 left-0 w-24 md:w-48 h-px bg-gradient-to-r from-primary to-transparent origin-left"
      />

      <div className="max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex items-center gap-3"
            >
              <div className="w-12 h-px bg-primary" />
              <span className="text-primary font-body text-xs md:text-sm tracking-[0.3em] uppercase font-medium">
                Portfolio
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.9] mb-4 tracking-tight"
              >
                <span className="text-foreground">{personalInfo.name.split(" ")[0]}</span>
              </motion.h1>
            </div>
            
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.9] mb-10 tracking-tight"
              >
                <span className="text-primary italic">{personalInfo.name.split(" ").slice(1).join(" ") || "Portfolio"}</span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16"
            >
              <p className="text-muted-foreground text-base md:text-lg max-w-md font-body leading-relaxed">
                {personalInfo.title} på{" "}
                <span className="text-foreground">{personalInfo.school}</span>
              </p>
            </motion.div>
          </div>

          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex-shrink-0 order-first lg:order-last"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto lg:mx-0">
              {/* Decorative frame */}
              <div className="absolute inset-0 border-2 border-primary/20 translate-x-4 translate-y-4" />
              <div className="absolute inset-0 border border-primary/40 -translate-x-2 -translate-y-2" />
              
              {/* Image container */}
              <div className="relative w-full h-full overflow-hidden bg-card">
                <img 
                  src={profilePhoto} 
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
              </div>
              
              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-primary" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-primary" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Side text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-primary to-transparent" />
          <span className="text-muted-foreground text-xs tracking-[0.2em] uppercase font-body" style={{ writingMode: 'vertical-rl' }}>
            Growth Marketing
          </span>
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-primary to-transparent" />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-muted-foreground text-xs tracking-widest uppercase font-body">Scrolla</span>
          <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

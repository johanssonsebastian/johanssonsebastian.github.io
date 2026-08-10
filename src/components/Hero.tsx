import { motion } from "framer-motion";
import { personalInfo } from "@/data/projects";
import profilePhoto from "@/assets/profile-photo.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 lg:px-24 pt-32 pb-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 border border-primary rounded-full opacity-[0.03]" />
        <div className="absolute top-40 right-40 w-64 h-64 border border-primary rounded-full opacity-[0.05]" />
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] border border-primary rounded-full opacity-[0.02]" />
      </div>

      <div className="max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8 flex items-center gap-3"
            >
              <div className="w-12 h-px bg-primary" />
              <span className="text-primary font-body text-xs md:text-sm tracking-[0.25em] uppercase font-medium">
                Growth Marketing — Stockholm
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.05] tracking-tight mb-8 pb-1"
            >
              <span className="block text-foreground">{personalInfo.name.split(" ")[0]}</span>
              <span className="block text-primary italic pb-2">
                {personalInfo.name.split(" ").slice(1).join(" ")}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="max-w-xl"
            >
              <p className="text-muted-foreground text-base md:text-lg font-body leading-relaxed">
                {personalInfo.title} — nyexaminerad från{" "}
                <span className="text-foreground">{personalInfo.school}</span>
              </p>
              <p className="text-muted-foreground text-base md:text-lg font-body leading-relaxed mt-4">
                Jag hjälper varumärken att växa med data, experiment och kreativitet — från första
                klick till lojal kund.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 min-h-[44px] font-body font-medium tracking-wide transition-all hover:shadow-xl hover:shadow-primary/20"
                >
                  Se mina projekt
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center border border-primary text-primary px-8 py-4 min-h-[44px] font-body tracking-wide transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Kontakta mig
                </a>
              </div>
            </motion.div>
          </div>

          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative flex-shrink-0 order-first lg:order-last"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto lg:mx-0">
              <div className="absolute inset-0 border-2 border-primary/20 translate-x-4 translate-y-4" />
              <div className="absolute inset-0 border border-primary/40 -translate-x-2 -translate-y-2" />

              <div className="relative w-full h-full overflow-hidden bg-card">
                <img
                  src={profilePhoto}
                  alt={`Porträtt av ${personalInfo.name}, growth marketer i Stockholm`}
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
              </div>

              <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-primary" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-primary" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from "framer-motion";
import { personalInfo, skills, tools } from "@/data/projects";

const About = () => {
  return (
    <section id="about" className="scroll-mt-28 py-24 md:py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          {/* Left column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-px bg-primary" />
                <span className="text-primary font-body text-xs tracking-[0.3em] uppercase">
                  Om Mig
                </span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-8 tracking-tight leading-[1.05] pb-1">
                Hej, jag är
                <br />
                <span className="text-primary italic">{personalInfo.name.split(" ")[0]}</span>
              </h2>

              <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
                <p className="text-lg">{personalInfo.bio}</p>
                <p className="text-lg text-foreground">{personalInfo.bioClosing}</p>
              </div>
            </div>

            <div className="mt-10" />
          </motion.div>

          {/* Right column - Skills & tools */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="bg-card border border-border p-8 md:p-12 relative h-full">
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary" />
              <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-primary" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary" />

              <h3 className="font-display text-2xl text-foreground mb-8">Kompetenser</h3>

              <div className="space-y-2">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 py-3 border-b border-border/50 last:border-b-0"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-foreground font-body text-sm tracking-wide">{skill}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-display text-2xl text-foreground mt-12 mb-6">Verktyg</h3>
              <ul className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <li
                    key={tool}
                    className="border border-primary/60 text-primary rounded-full px-4 py-2 font-body text-xs tracking-wider uppercase"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute -left-1/4 top-1/2 -translate-y-1/2 font-display text-[30vw] text-primary opacity-[0.02] pointer-events-none select-none hidden md:block">
        SJ
      </div>
    </section>
  );
};

export default About;

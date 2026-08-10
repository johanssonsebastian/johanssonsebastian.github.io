import { motion } from "framer-motion";
import { personalInfo } from "@/data/projects";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const completedCourses = [
    "Performance Marketing",
    "CRO & Analys",
    "E-handel",
    "Growth Toolbox",
    "SEO & Content Marketing",
    "CRM & Kundlojalitet",
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-px bg-primary" />
              <span className="text-primary font-body text-xs tracking-[0.3em] uppercase">
                Om Mig
              </span>
            </div>

            <h2 className="font-display text-5xl md:text-6xl font-medium text-foreground mb-8 tracking-tight">
              Hej, jag är
              <br />
              <span className="text-primary italic">{personalInfo.name.split(" ")[0]}</span>
            </h2>

            <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
              <p className="text-lg">
                {personalInfo.bio}
              </p>
            </div>
          </motion.div>

          {/* Right column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-card border border-border p-8 md:p-12 relative">
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary" />
              <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-primary" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary" />

              <h3 className="font-display text-2xl text-foreground mb-10">Kurser & Kompetenser</h3>

              <div className="space-y-4">
                {completedCourses.map((course, index) => (
                  <motion.div
                    key={course}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="flex items-center gap-3 py-3 border-b border-border/50 last:border-b-0"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-foreground font-body text-sm tracking-wide">
                      {course}
                    </span>
                  </motion.div>
                ))}

              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.02 }}
        viewport={{ once: true }}
        className="absolute -left-1/4 top-1/2 -translate-y-1/2 font-display text-[30vw] text-primary pointer-events-none select-none"
      >
        SJ
      </motion.div>
    </section>
  );
};

export default About;

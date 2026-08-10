import { motion } from "framer-motion";
import { personalInfo } from "@/data/projects";
import { Mail, ArrowUpRight, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-28 relative overflow-hidden px-6 md:px-12 lg:px-24 py-20 md:py-24 flex items-center min-h-[auto] md:max-h-[60vh]"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] border border-primary rounded-full opacity-[0.05]" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary font-body text-xs tracking-[0.3em] uppercase">Kontakt</span>
            <div className="w-12 h-px bg-primary" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-medium text-foreground tracking-tight leading-[1.1] pb-1 mb-5">
            Ska vi jobba ihop?
          </h2>

          <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Jag söker just nu min första roll inom growth marketing – hör av dig så berättar jag mer.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`mailto:${personalInfo.email}`}
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 min-h-[44px] font-body font-medium tracking-wide transition-all hover:shadow-xl hover:shadow-primary/20"
            >
              <Mail className="w-5 h-5" />
              Kontakta mig
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-border text-foreground px-8 py-4 min-h-[44px] font-body tracking-wide transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>

          <a
            href={`mailto:${personalInfo.email}`}
            className="mt-8 inline-block font-display text-base sm:text-xl md:text-2xl text-foreground hover:text-primary transition-colors break-all sm:break-normal"
          >
            {personalInfo.email}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

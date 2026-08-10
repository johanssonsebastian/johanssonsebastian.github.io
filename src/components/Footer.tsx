import { motion } from "framer-motion";
import { personalInfo } from "@/data/projects";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 border border-primary flex items-center justify-center">
              <span className="font-display text-xs text-primary">
                {personalInfo.name.split(" ").map(n => n[0]).join("")}
              </span>
            </div>
            <span className="text-muted-foreground font-body text-sm">
              © {currentYear} {personalInfo.name}
            </span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-8">
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-muted-foreground hover:text-primary transition-colors font-body text-sm tracking-wider uppercase"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

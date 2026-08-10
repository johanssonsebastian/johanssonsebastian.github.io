import { personalInfo } from "@/data/projects";
import { Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 pb-24 md:pb-12 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 border border-primary flex items-center justify-center">
              <span className="font-display text-xs text-primary">
                {personalInfo.name.split(" ").map((n) => n[0]).join("")}
              </span>
            </div>
            <span className="text-muted-foreground font-body text-sm">
              © {currentYear} {personalInfo.name}
            </span>
          </div>

          {/* Right */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 min-h-[44px] text-muted-foreground hover:text-primary transition-colors font-body text-sm tracking-wider uppercase"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

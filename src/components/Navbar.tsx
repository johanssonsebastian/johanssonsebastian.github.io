import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/data/projects";
import { Menu, X, Linkedin } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#projects", label: "Projekt" },
    { href: "/#about", label: "Om Mig" },
    { href: "/#contact", label: "Kontakt" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-background/95 backdrop-blur-xl border-b border-border/50"
            : "py-5"
        }`}
      >
        <div className="px-6 md:px-12 lg:px-24 flex items-center justify-between">
          {/* Logo */}
          <a href="/" aria-label="Till startsidan" className="group flex items-center gap-3">
            <div className="w-10 h-10 border-2 border-primary flex items-center justify-center transition-all group-hover:bg-primary">
              <span className="font-display font-bold text-primary group-hover:text-primary-foreground transition-colors">
                {personalInfo.name.split(" ").map((n) => n[0]).join("")}
              </span>
            </div>
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Stäng meny" : "Öppna meny"}
            className="md:hidden w-12 h-12 flex items-center justify-center border border-border"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background pt-28 px-6 overflow-y-auto md:hidden"
          >
            <div className="flex flex-col gap-8 pb-40">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display text-4xl font-medium text-foreground flex items-center gap-4 leading-tight"
                >
                  <span className="text-primary text-lg">0{index + 1}</span>
                  {link.label}
                </a>
              ))}
              <a
                href={`mailto:${personalInfo.email}`}
                className="bg-primary text-primary-foreground px-8 py-5 font-body font-medium text-center mt-4 tracking-wider uppercase"
              >
                Kontakta mig
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-border text-foreground px-8 py-4 min-h-[44px] font-body tracking-wider uppercase"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <p className="text-muted-foreground text-sm font-body pt-4 border-t border-border break-all">
                {personalInfo.email}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

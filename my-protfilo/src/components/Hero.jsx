import { motion } from "framer-motion";
import { Mail, ArrowRight, Download } from "lucide-react";
import { FiGithub } from "react-icons/fi";

import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/8 blur-[140px]" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-cyan-500/6 blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[30%] rounded-full bg-teal-500/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium mb-6 border border-border"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6"
        >
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">
            Laiba Ijaz
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-3xl text-muted-foreground font-medium mb-6 max-w-3xl"
        >
          Frontend Developer <span className="mx-2 opacity-50">|</span> React.js{" "}
          <span className="mx-2 opacity-50">|</span> Laravel
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base md:text-lg text-muted-foreground/80 mb-10 max-w-2xl leading-relaxed"
        >
          Crafting precise, high-performance web experiences with modern
          architecture. Obsessed with clean code, elegant interfaces, and
          solving complex problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto h-12 px-8 group"
            onClick={() => scrollToSection("projects")}
            data-testid="button-view-projects"
          >
            View Projects
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto h-12 px-8"
            onClick={() => scrollToSection("contact")}
            data-testid="button-contact-me"
          >
            <Mail className="mr-2 w-4 h-4" />
            Contact Me
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto h-12 px-8 border-primary/40 hover:bg-primary/10 hover:border-primary/70 text-primary hover:text-primary group"
            asChild
            data-testid="button-download-cv"
          >
            <a href="/Laiba_Ijaz_Resume.pdf" download="Laiba_Ijaz_Resume.pdf">
              <Download className="mr-2 w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              Download CV
            </a>
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="w-full sm:w-auto h-12 px-4"
            asChild
            data-testid="button-github"
          >
            <a
              href="https://github.com/CodingWithLaiba"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub className="w-7 h-7" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

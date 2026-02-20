import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 section-padding max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mono text-primary text-xs tracking-[0.4em] uppercase mb-8"
        >
          // full-stack developer
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8 tracking-tight"
        >
          Clive<br />
          <span className="text-primary">John</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground font-body text-lg md:text-xl max-w-xl mb-12 leading-relaxed"
        >
          I build scalable web applications, data-driven tools, and intelligent systems
          that solve real problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-4 flex-wrap"
        >
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground mono text-sm font-medium hover:opacity-90 transition-opacity"
          >
            View Work →
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-border text-foreground mono text-sm font-medium hover:border-primary hover:text-primary transition-colors"
          >
            Contact
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-6 md:left-12 mono text-xs text-muted-foreground"
      >
        scroll ↓
      </motion.div>
    </section>
  );
};

export default HeroSection;

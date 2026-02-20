import { motion } from "framer-motion";

const EducationSection = () => {
  return (
    <section id="education" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="mono text-primary text-xs tracking-[0.4em] uppercase mb-6">// education</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
          Academic <span className="text-primary">Background</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="border border-border p-6 md:p-8 space-y-6"
      >
        <div className="flex items-start gap-4">
          <span className="mono text-primary text-xs mt-1">01</span>
          <div>
            <h3 className="font-display text-lg font-bold mb-1">Senior 5 Student</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Focused on Mathematics, Computer Science, and analytical problem solving.
            </p>
          </div>
        </div>
        
        <div className="border-t border-border" />
        
        <div className="flex items-start gap-4">
          <span className="mono text-primary text-xs mt-1">02</span>
          <div>
            <h3 className="font-display text-lg font-bold mb-1">Competitions & Scholarships</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Actively preparing for coding competitions and international scholarship opportunities.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSection;

import { motion } from "framer-motion";
import { GraduationCap, Trophy } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="section-padding max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Education</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          Academic <span className="text-gradient">Background</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-card border border-border rounded-sm p-8 md:p-10"
      >
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-full border border-primary/40 flex items-center justify-center text-primary shrink-0">
            <GraduationCap size={22} />
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold">Senior 5 Student</h3>
            <p className="text-muted-foreground font-body leading-relaxed mt-2">
              Focused on Mathematics, Computer Science, and analytical problem solving.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full border border-primary/40 flex items-center justify-center text-primary shrink-0">
            <Trophy size={22} />
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold">Competitions & Scholarships</h3>
            <p className="text-muted-foreground font-body leading-relaxed mt-2">
              Actively preparing for coding competitions and international scholarship opportunities.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EducationSection;

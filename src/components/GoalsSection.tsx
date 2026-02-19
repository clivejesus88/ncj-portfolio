import { motion } from "framer-motion";
import { Target } from "lucide-react";

const goals = [
  "Building scalable SaaS applications",
  "Developing advanced algorithmic systems",
  "Competing in coding competitions",
  "Preparing for international academic scholarships",
  "Creating technology-driven income streams",
];

const GoalsSection = () => {
  return (
    <section id="goals" className="section-padding max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Vision</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          Current <span className="text-gradient">Goals</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4">
        {goals.map((goal, i) => (
          <motion.div
            key={goal}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-center gap-4 bg-card border border-border rounded-sm p-5"
          >
            <Target size={18} className="text-primary shrink-0" />
            <span className="font-body text-sm text-foreground">{goal}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GoalsSection;

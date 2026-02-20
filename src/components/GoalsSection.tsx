import { motion } from "framer-motion";

const goals = [
  "Building scalable SaaS applications",
  "Developing advanced algorithmic systems",
  "Competing in coding competitions",
  "Preparing for international academic scholarships",
  "Creating technology-driven income streams",
];

const GoalsSection = () => {
  return (
    <section id="goals" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="mono text-primary text-xs tracking-[0.4em] uppercase mb-6">// goals</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
          Current <span className="text-primary">Focus</span>
        </h2>
      </motion.div>

      <div className="space-y-0">
        {goals.map((goal, i) => (
          <motion.div
            key={goal}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="flex items-center gap-4 border-b border-border py-4 group hover:pl-2 transition-all"
          >
            <span className="mono text-xs text-primary">0{i + 1}</span>
            <span className="font-body text-sm text-muted-foreground group-hover:text-foreground transition-colors">{goal}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GoalsSection;

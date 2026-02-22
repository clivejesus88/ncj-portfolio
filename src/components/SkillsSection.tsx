import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "Python", "HTML & CSS"],
  },
  {
    title: "Frontend",
    skills: ["React", "Responsive Design", "Component Architecture", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["FastAPI", "Flask", "REST APIs"],
  },
  {
    title: "Tools",
    skills: ["Git & GitHub", "Vite", "Render", "VS Code"],
  },
  {
    title: "Other",
    skills: ["Algorithmic Thinking", "Forex Modeling", "Business Psychology", "Problem Solving", "Data Science", "Machine Learning"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="mono text-primary text-xs tracking-[0.4em] uppercase mb-6">// skills</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
          Tech <span className="text-primary">Stack</span>
        </h2>
      </motion.div>

      <div className="space-y-6">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 border-b border-border pb-6"
          >
            <h3 className="mono text-xs text-primary uppercase tracking-wider w-28 shrink-0">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default"
                >
                  {skill}
                  <span className="text-border ml-2">·</span>
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

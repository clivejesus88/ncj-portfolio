import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "Python", "HTML & CSS"],
  },
  {
    title: "Frontend Development",
    skills: ["React", "Responsive Design", "Component-Based Architecture", "Framer Motion"],
  },
  {
    title: "Backend & APIs",
    skills: ["FastAPI", "Flask", "REST API Development"],
  },
  {
    title: "Tools & Workflow",
    skills: ["Git & GitHub", "Vite", "Render Deployment", "VS Code"],
  },
  {
    title: "Other Competencies",
    skills: ["Algorithmic Thinking", "Forex System Modeling", "Business Psychology", "Technical Problem Solving"],
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
        className="text-center mb-16"
      >
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Expertise</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          Skills & <span className="text-gradient">Tools</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card border border-border rounded-sm p-6"
          >
            <h3 className="font-display text-lg font-semibold mb-4 text-primary">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm font-body px-3 py-1.5 bg-secondary text-secondary-foreground rounded-sm"
                >
                  {skill}
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

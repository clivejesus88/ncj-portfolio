import { motion } from "framer-motion";

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "UI/UX Design", level: 85 },
  { name: "Node.js", level: 88 },
  { name: "Figma", level: 80 },
  { name: "Tailwind CSS", level: 92 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding max-w-4xl mx-auto">
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

      <div className="space-y-8">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <div className="flex justify-between mb-2">
              <span className="font-body text-sm font-medium text-foreground">{skill.name}</span>
              <span className="font-body text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 + i * 0.08, ease: "easeOut" }}
                className="h-full bg-primary rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

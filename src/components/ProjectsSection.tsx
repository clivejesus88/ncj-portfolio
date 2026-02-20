import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Exam Hub",
    category: "Web Platform",
    description:
      "A web-based application designed to streamline exam preparation by organizing study materials and interactive content.",
    role: "Full-stack developer — frontend interface, routing architecture, and deployment.",
    tags: ["React", "Vite", "JavaScript", "CSS", "Render"],
    outcome: "Production-ready with responsive design and structured component architecture.",
  },
  {
    title: "Betting Algorithm",
    category: "Systems / Data",
    description:
      "Data-driven betting strategy framework focused on identifying probability inefficiencies and risk management models.",
    role: "System designer and algorithm developer.",
    tags: ["Python", "Statistical Modeling"],
    outcome: "Prototype evaluating probabilistic outcomes and testing strategy consistency.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="mono text-primary text-xs tracking-[0.4em] uppercase mb-6">// projects</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Featured <span className="text-primary">Work</span>
        </h2>
        <p className="text-muted-foreground font-body text-sm max-w-lg">
          Selected projects demonstrating my ability to design, build, and deploy functional systems.
        </p>
      </motion.div>

      <div className="space-y-px">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group border border-border p-6 md:p-8 hover:border-primary/40 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="mono text-xs text-muted-foreground uppercase tracking-wider mb-1">{project.category}</p>
                <h3 className="font-display text-xl md:text-2xl font-bold">{project.title}</h3>
              </div>
              <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors mt-1" />
            </div>
            
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4 max-w-2xl">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="mono text-[10px] px-2 py-1 border border-border text-muted-foreground uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="font-body text-xs text-muted-foreground">
              <span className="text-foreground">→</span> {project.outcome}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

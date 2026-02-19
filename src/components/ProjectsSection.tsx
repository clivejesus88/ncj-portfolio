import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Exam Hub",
    category: "Online Learning Platform",
    description:
      "A web-based application designed to streamline exam preparation by organizing study materials and interactive content in a structured interface.",
    role: "Full-stack developer — handled frontend interface design, routing architecture, and deployment.",
    tags: ["React", "Vite", "JavaScript", "CSS", "Render"],
    outcome:
      "Successfully deployed production-ready version with responsive design and structured component architecture.",
  },
  {
    title: "Betting Algorithm Prototype",
    category: "Algorithm / Systems",
    description:
      "Developed a data-driven betting strategy framework focused on identifying probability inefficiencies and risk management models.",
    role: "System designer and algorithm developer.",
    tags: ["Python", "Statistical Modeling"],
    outcome:
      "Built a structured prototype capable of evaluating probabilistic outcomes and testing strategy consistency.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Portfolio</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground font-body max-w-2xl mx-auto">
          Here are selected projects that demonstrate my ability to design, build, and deploy
          functional systems with real-world application.
        </p>
      </motion.div>

      <div className="space-y-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-card border border-border rounded-sm p-8 md:p-10 hover:border-primary/40 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-1">
                <p className="text-primary text-xs font-body tracking-[0.2em] uppercase mb-2">
                  {project.category}
                </p>
                <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-3">
                  {project.description}
                </p>
                <p className="text-muted-foreground font-body text-sm mb-2">
                  <span className="text-foreground font-medium">My Role:</span> {project.role}
                </p>
                <p className="text-muted-foreground font-body text-sm mb-4">
                  <span className="text-foreground font-medium">Outcome:</span> {project.outcome}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-body px-3 py-1 bg-secondary text-secondary-foreground rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors text-muted-foreground">
                  <ExternalLink size={18} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

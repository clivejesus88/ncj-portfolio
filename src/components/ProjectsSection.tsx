import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A full-stack e-commerce solution with real-time inventory and seamless checkout experience.",
    tags: ["React", "Node.js", "Stripe"],
  },
  {
    title: "Finance Dashboard",
    category: "UI/UX Design",
    description: "An intuitive analytics dashboard for tracking investments, expenses, and financial goals.",
    tags: ["Figma", "React", "D3.js"],
  },
  {
    title: "Travel Companion App",
    category: "Mobile Development",
    description: "A mobile-first travel planning app with AI-powered itinerary suggestions and offline maps.",
    tags: ["React Native", "AI", "Maps"],
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
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          Featured <span className="text-gradient">Projects</span>
        </h2>
      </motion.div>

      <div className="space-y-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-card border border-border rounded-sm p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 hover:border-primary/40 transition-colors cursor-pointer"
          >
            <div className="flex-1">
              <p className="text-primary text-xs font-body tracking-[0.2em] uppercase mb-2">
                {project.category}
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3">
                {project.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {project.description}
              </p>
              <div className="flex gap-2 mt-4 flex-wrap">
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
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

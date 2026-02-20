import { motion } from "framer-motion";
import { Mail, MapPin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="mono text-primary text-xs tracking-[0.4em] uppercase mb-6">// contact</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
          Let's <span className="text-primary">Connect</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-8">
              Open to internships, collaborations, and technical partnerships.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:niiweclivejesusjohn@gmail.com"
                className="flex items-center gap-3 text-muted-foreground font-body text-sm hover:text-primary transition-colors"
              >
                <Mail size={16} className="text-primary" />
                niiweclivejesusjohn@gmail.com
              </a>
              <a
                href="https://github.com/clivejesus88/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground font-body text-sm hover:text-primary transition-colors"
              >
                <Github size={16} className="text-primary" />
                github.com/clivejesus88
              </a>
              <div className="flex items-center gap-3 text-muted-foreground font-body text-sm">
                <MapPin size={16} className="text-primary" />
                Uganda
              </div>
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-card border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-card border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <textarea
              rows={4}
              placeholder="Message"
              className="w-full bg-card border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground mono text-sm font-medium py-3 hover:opacity-90 transition-opacity"
            >
              Send →
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;

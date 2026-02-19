import { motion } from "framer-motion";
import { Mail, MapPin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Contact</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          Let's <span className="text-gradient">Connect</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-card border border-border rounded-sm p-8 md:p-12"
      >
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-display text-2xl font-semibold mb-4">Get in touch</h3>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Open to internships, collaborations, and technical partnerships.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground font-body">
                <Mail size={18} className="text-primary" />
                <span>[your email]</span>
              </div>
              <a
                href="#"
                className="flex items-center gap-3 text-muted-foreground font-body hover:text-foreground transition-colors"
              >
                <Github size={18} className="text-primary" />
                <span>[your GitHub link]</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground font-body">
                <MapPin size={18} className="text-primary" />
                <span>Uganda</span>
              </div>
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-secondary border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-secondary border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full bg-secondary border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-body font-medium py-3 rounded-sm hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;

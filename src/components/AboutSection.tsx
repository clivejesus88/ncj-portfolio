import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">About Me</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Crafting digital<br />
            <span className="text-gradient">experiences</span>
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-4">
            I'm a full-stack designer and developer with a passion for creating beautiful,
            functional, and user-centered digital experiences. With 5+ years of experience,
            I specialize in transforming complex problems into elegant solutions.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed">
            When I'm not coding, you'll find me exploring design trends, contributing to
            open-source projects, or sipping coffee at a local café while sketching new ideas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 gap-6"
        >
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "5+", label: "Years Experience" },
            { number: "30+", label: "Happy Clients" },
            { number: "10+", label: "Awards Won" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-card p-6 rounded-sm border border-border text-center"
            >
              <p className="font-display text-3xl font-bold text-primary mb-1">{stat.number}</p>
              <p className="text-muted-foreground text-sm font-body">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

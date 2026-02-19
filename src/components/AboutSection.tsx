import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}>

          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">About Me</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Building with<br />
            <span className="text-gradient">purpose</span>
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-4">I am an 19-year-old developer based in Uganda with strong foundations in full-stack web development, Python programming, and algorithmic thinking. I specialize in building functional, scalable applications with clean UI/UX and efficient backend logic.



          </p>
          <p className="text-muted-foreground font-body leading-relaxed mb-4">
            My interests extend beyond coding — I study business psychology, forex trading systems,
            and digital product strategy. I aim to build multiple scalable income streams through
            technology and data-driven systems.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed">
            Currently in Senior 5, I am focused on strengthening my technical depth, competing in
            coding competitions, and preparing for international academic opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 gap-6">

          {[
          { number: "18", label: "Years Old" },
          { number: "Full-Stack", label: "Developer" },
          { number: "UG", label: "Based in Uganda" },
          { number: "S5", label: "Senior 5 Student" }].
          map((stat) =>
          <div
            key={stat.label}
            className="bg-card p-6 rounded-sm border border-border text-center">

              <p className="font-display text-3xl font-bold text-primary mb-1">{stat.number}</p>
              <p className="text-muted-foreground text-sm font-body">{stat.label}</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>);

};

export default AboutSection;
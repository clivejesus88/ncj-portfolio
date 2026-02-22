import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="mono text-primary text-xs tracking-[0.4em] uppercase mb-6">// about</p>
        
        <div className="grid md:grid-cols-[1fr_1px_1fr] gap-10 md:gap-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Building with<br /><span className="text-primary">purpose</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed text-sm">
              <p>
                I am a 19-year-old developer based in Uganda with strong foundations in full-stack web development, Python programming, Data Science, Machine Learning and algorithmic thinking.
              </p>
              <p>
                My interests extend beyond coding — I study business psychology, forex trading systems, and digital product strategy.
              </p>
              <p>
                Currently in Senior 6, focused on strengthening technical depth and preparing for international academic opportunities.
              </p>
            </div>
          </div>
          
          <div className="hidden md:block bg-border" />
          
          <div className="grid grid-cols-2 gap-4 content-start">
            {[
              { number: "19", label: "Years Old" },
              { number: "FS", label: "Full-Stack" },
              { number: "UG", label: "Uganda" },
              { number: "S.6", label: "Senior 6" },
              { number: "AI/ML", label: "Artificial Intelligence & Machine Learning"},
              { number: "DS", label:"Data Science"}
            ].map((stat) => (
              <div
                key={stat.label}
                className="border border-border p-5 text-center hover:border-primary/40 transition-colors"
              >
                <p className="mono text-2xl font-bold text-primary mb-1">{stat.number}</p>
                <p className="text-muted-foreground text-xs font-body">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;

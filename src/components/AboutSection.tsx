import { motion } from "framer-motion";
import profileImg from "@/assets/profile.png";

const AboutSection = () => {
  const tools = ["Python", "SQL", "Power BI", "Tableau", "Scikit-learn", "AI Tools"];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden glass-card p-2">
              <img
                src={profileImg}
                alt="Boniface Thuo Mwaura"
                className="w-full rounded-xl object-cover aspect-square"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-primary/20 blur-3xl" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-6">
              Data Scientist &{" "}
              <span className="gradient-text">AI Specialist</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a Data Scientist with 3+ years of experience turning complex
              datasets into actionable insights. I specialize in data analysis,
              machine learning, and AI-driven workflows that help businesses make
              smarter decisions faster.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              My passion lies in solving real-world problems using data — from
              building predictive models to automating entire business processes
              with AI.
            </p>

            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="glass-card px-4 py-2 text-sm text-primary font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

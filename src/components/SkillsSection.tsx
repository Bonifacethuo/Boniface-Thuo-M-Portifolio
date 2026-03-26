import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Data & ML",
    skills: ["Python", "SQL", "Scikit-learn", "Pandas", "NumPy", "TensorFlow"],
  },
  {
    title: "Visualization",
    skills: ["Tableau", "Power BI", "Matplotlib", "Plotly", "Streamlit"],
  },
  {
    title: "Advanced Tools",
    skills: ["Automation Agents", "Prompt Engineering", "No-code Builders"],
  },
  {
    title: "Data Engineering",
    skills: ["ETL Pipelines", "PostgreSQL", "APIs", "Data Cleaning", "Cloud Platforms"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">
            Skills & <span className="gradient-text">Tools</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 hover-lift"
            >
              <h3 className="font-heading font-semibold text-lg gradient-text mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-muted px-3 py-1.5 rounded-md text-sm text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

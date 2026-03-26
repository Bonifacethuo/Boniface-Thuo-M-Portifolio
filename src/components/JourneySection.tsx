import { motion } from "framer-motion";

const milestones = [
  {
    year: "2022",
    title: "Data Analysis & Cleaning",
    description: "Started my journey mastering data wrangling, EDA, and statistical analysis.",
  },
  {
    year: "2023",
    title: "Dashboards & Reporting",
    description: "Built interactive dashboards and automated reporting systems for clients.",
  },
  {
    year: "2024",
    title: "Machine Learning Models",
    description: "Developed predictive models for churn, sales forecasting, and classification.",
  },
  {
    year: "2025",
    title: "Workflows & Automation",
    description: "Designing end-to-end automation pipelines for businesses.",
  },
];

const JourneySection = () => {
  return (
    <section id="journey" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Growth
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2">
            My <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative flex items-start gap-6 mb-12 md:mb-16 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full gradient-bg -translate-x-1.5 mt-2 ring-4 ring-background z-10" />

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                <span className="text-primary font-heading font-bold text-2xl">
                  {m.year}
                </span>
                <h3 className="font-heading font-semibold text-lg text-foreground mt-1">
                  {m.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-2">{m.description}</p>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
